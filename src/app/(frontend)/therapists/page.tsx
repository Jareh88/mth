// import Image from "next/image";
import Grid from "@mui/material/Grid2";
// import placeholderTherapists from "@frontend/helpers/placeholderTherapists";
import TherapistCard from "@frontend/_components/TherapistCardComponent";
import { Container, Typography } from "@mui/material";
import GetMatchedFilters from "@frontend/_components/GetMatchedFiltersComponent";
import { cache, Suspense } from "react";
import HowToComponent from "@frontend/_components/HowToComponent";
import SearchQueryEdit from "@frontend/_components/SearchQueryEdit";
import { getPayloadInstance } from "@frontend/_lib/payload";
import { Metadata } from "next";
import { PageArgs } from "../_helpers/types";
import { generateMeta } from "../_utils/generateMeta";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Therapists() {
  const payload = await getPayloadInstance();
  const { docs: therapists } = await payload.find({
    collection: "therapists",
    limit: 20,
    sort: "name",
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchQueryEdit />
      <Container sx={{ py: { xs: 0, lg: 6 } }}>
        <Grid container spacing={2} mb={2} sx={{ justifyContent: "center" }}>
          <Grid
            size={{ xs: 12, lg: 2 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <HowToComponent />
          </Grid>
          <Grid size={{ xs: 12, sm: 8, lg: 8 }}>
            <Typography
              variant="h1"
              component="h2"
              color="text.secondary"
              mb={2}
              sx={{ textAlign: { xs: "left", lg: "center" } }}
            >
              Choose your therapist:
            </Typography>
            <Typography
              variant="h3"
              color="text.secondary"
              mb={2}
              sx={{ textAlign: { xs: "left", lg: "center" } }}
            >
              Success in therapy starts with choosing the right therapist.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: { xs: "left", lg: "center" } }}
              mb={4}
            >
              You can always go with your gut, or try our &quot;get
              matched&quot; tool to narrow down your options.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 2 }}>
            <GetMatchedFilters />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {therapists?.length ? (
            therapists.map((therapist, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <TherapistCard therapist={therapist} />
              </Grid>
            ))
          ) : (
            <p>No therapists found.</p>
          )}
          {/* {placeholderTherapists.map((placeholderTherapist, index) => {
            return (
              <TherapistCard key={index} therapist={placeholderTherapist} />
            );
          })} */}
        </Grid>
      </Container>
    </Suspense>
  );
}

export async function generateMetadata() {
  const page = {
    meta: {
      title: "Male Therapists & Counsellors Near You | Men's Therapy Hub",
      description:
        "Get matched to a qualified professional near you. Male therapists and counsellors specialising in men's mental health, couples therapy, and more.",
      // image: ,
      slug: "/therapists",
    },
  };

  return generateMeta({ doc: page });
}
