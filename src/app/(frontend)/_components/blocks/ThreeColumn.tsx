import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DividerComponent from "../DividerComponent";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

export const ThreeColumnBlock = () => {
  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      <Box mb={4}>
        <Typography
          variant="h1"
          component="h2"
          color="primary.dark"
          sx={{
            textAlign: "center",
            // textTransform: "uppercase",
            color: "#ff9900",
            textTransform: "uppercase",
          }}
        >
          Men&apos;S Therapy Hub
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          color="primary.dark"
          sx={{ textAlign: "center", mb: 4, fontSize: { md: "38px" } }}
        >
          Helping you find the help you need.
        </Typography>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
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
                Why choose a male therapist?
              </Typography>
              <DividerComponent width="30%" color="#fff" sx={{ mb: 2 }} />
            </Box>
            <Box px={2}>
              {/* Para */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { md: "1.27rem" }, mt: 3, mb: 4 }}
              >
                For some men, working with a male therapist can make the
                difference, helping to create a more relatable, comfortable
                space. Here are some reasons this might be the right choice for
                you...
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {/* <Link href="/about"> */}
                <Button variant="contained" sx={{ backgroundColor: "#07a0c3" }}>
                  Read more...
                </Button>
                {/* </Link> */}
              </Box>
            </Box>
            <Box>{/* CTA */}</Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
            <Box
              sx={{
                color: "text-secondary",
                display: "flex",
                justifyContent: "center",
                mb: 1,
              }}
            >
              {/* Icon of some kind */}

              <PsychologyAltOutlinedIcon
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
                How to choose a therapist?
              </Typography>
              <DividerComponent width="30%" color="#fff" sx={{ mb: 2 }} />
            </Box>

            <Box px={2}>
              {/* Para */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { md: "1.27rem" }, mt: 3, mb: 4 }}
              >
                Choosing a therapist can be a daunting task. We’ve developed our
                ‘Get Matched’ service to help you find the right therapist.
                Still not sure? We’ve come up with some key points to
                consider...
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {/* <Link href="/about"> */}
                <Button variant="contained" sx={{ backgroundColor: "#07a0c3" }}>
                  Read more...
                </Button>
                {/* </Link> */}
              </Box>
            </Box>
            <Box>{/* CTA */}</Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
            <Box
              sx={{
                color: "text-secondary",
                display: "flex",
                justifyContent: "center",
                mb: 1,
              }}
            >
              {/* Icon of some kind */}

              <QuestionAnswerOutlinedIcon
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
                What can I get support for?
              </Typography>
              <DividerComponent width="30%" color="#fff" sx={{ mb: 2 }} />
            </Box>
            <Box>
              {/* Para */}
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: { md: "1.27rem" }, mt: 3, mb: 4 }}
              >
                Men face a variety of challenges with their mental health. We’ve
                created a library to help you navigate through everything from
                common issues, symptoms, treatment options and more...
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {/* <Link href="/about"> */}
                <Button variant="contained" sx={{ backgroundColor: "#07a0c3" }}>
                  Read more...
                </Button>
                {/* </Link> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
