// import Image from "next/image";
import Grid from "@mui/material/Grid2";
import placeholderTherapists from "@frontend/helpers/placeholderTherapists";
import TherapistCard from "@frontend/components/TherapistCardComponent";
import { Container, Typography } from "@mui/material";
import GetMatchedFilters from "@frontend/components/GetMatchedFiltersComponent";
import { Suspense } from "react";
import HowToComponent from "@frontend/components/HowToComponent";
import SearchQueryEdit from "@frontend/components/SearchQueryEdit";
import { getPayloadInstance } from "@frontend/lib/payload";

export default async function Therapists() {
  "use server"; // Ensures this component is server-side

  const payload = await getPayloadInstance();
  const therapists = await payload.find({
    collection: "therapists",
    limit: 20,
    sort: "name",
  });

  console.log(therapists);

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
          {placeholderTherapists.map((placeholderTherapist, index) => {
            return (
              <TherapistCard key={index} therapist={placeholderTherapist} />
            );
          })}
        </Grid>
      </Container>
    </Suspense>
  );
}
