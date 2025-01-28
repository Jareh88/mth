import { HomeForm } from "@/components/HomeFormComponent";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={8} sx={{ minHeight: "479px" }}>
        <Grid size={5}>
          <HomeForm />
        </Grid>
        <Grid
          size={7}
          sx={{
            alignContent: "center",
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
            sx={{ textAlign: "center", mb: 2, fontSize: "38px" }}
          >
            by men, for men
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", fontSize: "1.27rem" }}
          >
            We are dedicated to connecting men with experienced, accredited male
            therapists who truly understand the nuances of men’s mental health
            and are committed to providing high-quality, personalised care.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
