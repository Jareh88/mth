// import Image from "next/image";
"use client";
import Grid from "@mui/material/Grid2";
import placeholderTherapists from "@/helpers/placeholderTherapists";
import TherapistCard from "@/components/TherapistCardComponent";
import { Box, Container, Typography } from "@mui/material";
import GetMatchedFilters from "@/components/GetMatchedFiltersComponent";

export default function Therapists() {
  return (
    <Container>
      <Grid container spacing={2} mb={2}>
        <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "100%",
              py: 2,
              px: 3,
              backgroundColor: "#07a0c3",
              color: "#fff",
              borderRadius: "20px",
            }}
          >
            <Typography variant="h5" align="center">
              How to choose a therapist
            </Typography>
          </Box>
        </Grid>
        <Grid size={8}>
          <Typography
            variant="h1"
            component="h2"
            color="text.secondary"
            align="center"
            mb={2}
          >
            Choose your therapist:
          </Typography>
          <Typography variant="h3" color="text.secondary" align="center" mb={2}>
            Success in therapy starts with choosing the right therapist.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            mb={4}
          >
            You can always go with your gut, or try our &quot;get matched&quot;
            tool to narrow down your options.
          </Typography>
        </Grid>
        <Grid size={2}>
          <GetMatchedFilters />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {placeholderTherapists.map((placeholderTherapist, index) => {
          return <TherapistCard key={index} therapist={placeholderTherapist} />;
        })}
      </Grid>
    </Container>
  );
}
