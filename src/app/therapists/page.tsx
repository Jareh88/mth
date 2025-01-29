// import Image from "next/image";
"use client";
import Grid from "@mui/material/Grid2";
import placeholderTherapists from "@/helpers/placeholderTherapists";
import TherapistCard from "@/components/TherapistCardComponent";
import { Box, Container, Typography } from "@mui/material";
import GetMatchedFilters from "@/components/GetMatchedFiltersComponent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import HowToComponent from "@/components/HowToComponent";

export default function Therapists() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleUpdateParams = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("openFilter");

    // Navigate with new search params
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    handleUpdateParams();
  }, []);

  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={2} mb={2}>
        <Grid size={2} sx={{ display: "flex", alignItems: "center" }}>
          <HowToComponent />
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
