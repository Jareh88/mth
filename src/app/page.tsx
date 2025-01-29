import DividerComponent from "@/components/DividerComponent";
import { HomeForm } from "@/components/HomeFormComponent";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import VoiceOverOffOutlinedIcon from "@mui/icons-material/VoiceOverOffOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";

export default function Home() {
  return (
    <>
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
              We are dedicated to connecting men with experienced, accredited
              male therapists who truly understand the nuances of men’s mental
              health and are committed to providing high-quality, personalised
              care.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 10 }}>
        <Box mb={4}>
          <Typography
            variant="h1"
            component="h2"
            color="primary.dark"
            sx={{
              textAlign: "center",
              // textTransform: "uppercase",
              color: "#ff9900",
            }}
          >
            MEN&apos;S therapy hub
          </Typography>
          <Typography
            variant="h2"
            component="h2"
            color="primary.dark"
            sx={{ textAlign: "center", mb: 4, fontSize: "38px" }}
          >
            Mission Statement
          </Typography>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box
                sx={{
                  color: "text-secondary",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                {/* Icon of some kind */}

                <Groups3OutlinedIcon sx={{ color: "#fff", fontSize: "6rem" }} />
              </Box>
              <Box>
                {/* Title */}
                <Typography
                  variant="h3"
                  component="h3"
                  color="text.secondary"
                  align="center"
                  mb={1}
                  // sx={{ fontSize: "24px" }}
                >
                  Men are underrepresented
                </Typography>
                <DividerComponent width="30%" color="#fff" />
              </Box>
              <Box px={2}>
                {/* Para */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.27rem", mt: 3 }}
                >
                  Men were once at the forefront of psychotherapy, yet today
                  remain vastly underrepresented in the field. Currently, men
                  make up around a quarter of therapists and less than a third
                  of therapy clients globally. We hope to help normalise men
                  being involved in therapy on both sides of the sofa.
                </Typography>
              </Box>
              <Box>{/* CTA */}</Box>
            </Grid>
            <Grid size={4}>
              <Box
                sx={{
                  color: "text-secondary",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                {/* Icon of some kind */}

                <VoiceOverOffOutlinedIcon
                  sx={{ color: "#fff", fontSize: "6rem" }}
                />
              </Box>
              <Box px={2}>
                {/* Title */}
                <Typography
                  variant="h3"
                  component="h3"
                  color="text.secondary"
                  align="center"
                  mb={1}
                  // sx={{ fontSize: "24px" }}
                >
                  Men feel misunderstood
                </Typography>
                <DividerComponent width="30%" color="#fff" />
              </Box>

              <Box px={2}>
                {/* Para */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.27rem", mt: 3 }}
                >
                  More men are seeking therapy than ever before, but we also
                  know that dropout rates for men are exceedingly high. Not
                  feeling understood by their therapist is one of the key
                  factors affecting ongoing attendance for men. That’s why our
                  primary function is helping more men find good quality, male
                  therapists.
                </Typography>
              </Box>
              <Box>{/* CTA */}</Box>
            </Grid>
            <Grid size={4}>
              <Box
                sx={{
                  color: "text-secondary",
                  display: "flex",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                {/* Icon of some kind */}

                <HandshakeOutlinedIcon
                  sx={{ color: "#fff", fontSize: "6rem" }}
                />
              </Box>
              <Box>
                {/* Title */}
                <Typography
                  variant="h3"
                  component="h3"
                  color="text.secondary"
                  align="center"
                  mb={1}
                  // sx={{ fontSize: "24px" }}
                >
                  Men thrive in male-only spaces
                </Typography>
                <DividerComponent width="30%" color="#fff" />
              </Box>
              <Box>
                {/* Para */}
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: "1.27rem", mt: 3 }}
                >
                  We know that men face unique challenges, including higher
                  rates of suicide, addiction, and violence. New research shows
                  that male-led mental health charities and male-only support
                  groups are showing positive results worldwide, and we’re
                  committed to building on that momentum. Our mission is
                  twofold: to encourage more men to engage in therapy, whether
                  as clients or therapists, and to create a space where men feel
                  confident accessing meaningful, life-changing conversations
                  with other men.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link href="/about">
            <Button variant="contained" sx={{ backgroundColor: "#07a0c3" }}>
              Find out more...
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
}
