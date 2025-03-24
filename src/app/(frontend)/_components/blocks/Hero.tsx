import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { HomeForm } from "../HomeFormComponent";

export const HeroBlock = () => {
  return (
    <Container sx={{ mb: { lg: 6 }, pt: { xs: 0, lg: 6 } }}>
      <Grid container spacing={8} sx={{ minHeight: "479px" }}>
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <HomeForm />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6, lg: 7 }}
          sx={{
            alignContent: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            color="primary.dark"
            sx={{ textAlign: "center" }}
          >
            Psychotherapy & Counselling
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            color="primary.dark"
            sx={{ textAlign: "center", mb: 2, fontSize: { md: "38px" } }}
          >
            by men, for men
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: { md: "1.27rem" } }}
          >
            We are dedicated to connecting men with experienced, accredited male
            therapists who truly understand the nuances of men’s mental health
            and are committed to providing high-quality, personalised care.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
