import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";
import ExtensionIcon from "@mui/icons-material/Extension";
import WorkingMethodComponent from "@frontend/_components/WorkingMethodComponent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import placeholderTherapists from "@frontend/_helpers/placeholderTherapists";
import DividerComponent from "../DividerComponent";
import TherapistCardComponent from "../TherapistCardComponent";
import { getPayloadInstance } from "../../_lib/payload";

export async function SidebarContentBlock(props) {
  const payload = await getPayloadInstance();

  const { heading, content, highlighted_therapist } = props;
  const therapist = await payload.findByID({
    collection: "therapists",
    id: highlighted_therapist,
  });

  return (
    <>
      <Container sx={{ py: { xs: 0, lg: 6 } }}>
        <Grid container spacing={8}>
          <Grid size={4} justifyItems="flex-start">
            <Box
              className="pulse"
              sx={{
                border: "2px solid #ff9900",
                p: 3,
                lineHeight: 1,
                transition: "all .2s ease-in-out",
                backgroundColor: "#ff9900",
                color: "#0A3449",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#ff9900",
                  cursor: "pointer",
                },
                borderRadius: "4px",
                maxWidth: "178px",
                mb: 8,
              }}
            >
              <Link href="/therapists?openFilter=true">
                <Box className="pulse-delay" justifyItems="center">
                  <Box sx={{ fontSize: "62px" }}>
                    <ExtensionIcon fontSize="inherit" />
                  </Box>
                  <Box>
                    <Typography variant="h5">Get Matched</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
            <Box sx={{ width: "100%", color: "text.secondary" }}>
              <Typography
                variant="h5"
                component="h3"
                align="left"
                mb={2}
                sx={{ textDecoration: "underline" }}
              >
                One of our Partnered Specialists
              </Typography>
              {/* TODO sort this component out */}
              <TherapistCardComponent therapist={therapist} />
            </Box>
          </Grid>
          <Grid size={8} sx={{ color: "text.secondary", pl: 8 }}>
            <Typography variant="h1" component="h2" mb={4}>
              Why Choose a Male Therapist?
            </Typography>
            <Typography variant="body1" mb={4}>
              When it comes to therapy, one size doesn’t fit all. Everyone’s
              journey to better mental health is personal, shaped by their
              unique experiences, values, and perspectives. For some men,
              working with a male therapist can make all the difference in
              creating a space where they feel most comfortable, as well as
              being truly understood and respected.
            </Typography>
            <Typography variant="body1" mb={4}>
              Here are some key reasons why choosing a male therapist might be
              the right decision for you:
            </Typography>
            <Typography variant="h3" mb={4}>
              1. Shared Understanding of Male Experiences
            </Typography>
            <Typography variant="body1" mb={4}>
              Men often face societal expectations that can impact how they
              process emotions, seek help, or communicate. A male therapist is
              more likely to share or deeply understand these experiences. This
              helps them provide an empathetic, authentic and reassuring space
              to explore with you.
            </Typography>
            <Typography variant="h3" mb={4}>
              2. Breaking Down Barriers to Vulnerability
            </Typography>
            <Typography variant="body1" mb={4}>
              For many men, opening up about emotions doesn’t come easily.
              Research shows that men are more likely to express vulnerability
              in environments they perceive as safe and relatable. With a male
              therapist, clients might more easily find a shared connection that
              can create a foundation of trust, which is essential for
              meaningful progress in therapy.
            </Typography>
            <Typography variant="h3" mb={4}>
              3. A Role Model for Emotional Expression
            </Typography>
            <Typography variant="body1" mb={4}>
              One of the most profound benefits of working with a male therapist
              is seeing healthy emotional expression modelled firsthand. Male
              therapists can demonstrate that it’s not only okay, but beneficial
              to talk openly about struggles, fears and emotions. This can be
              especially empowering for men who’ve never had male role models
              who embody emotional openness.
            </Typography>

            <Typography variant="h3" mb={4}>
              4. Addressing Gender-Specific Issues
            </Typography>
            <Typography variant="body1" mb={4}>
              Certain challenges uniquely affect men and male therapists often
              have insights into these areas that can make therapy feel more
              relevant and impactful. Additionally, some men feel more
              comfortable discussing sensitive topics like sexual health,
              addiction, or anger management with someone of the same gender.
            </Typography>

            <Typography variant="h3" mb={4}>
              5. Empowering Men to Seek Help
            </Typography>
            <Typography variant="body1" mb={4}>
              Choosing a male therapist can also have a broader impact. When men
              see other men in the mental health profession, it challenges
              stereotypes and normalises seeking support. It reinforces the idea
              that therapy is not just for women - it’s for everyone.
            </Typography>

            <Typography variant="h3" mb={4}>
              Finding the Right Fit
            </Typography>
            <Typography variant="body1" mb={4}>
              It’s important to remember that the success of therapy is not
              necessarily dependent on the gender of your therapist, instead
              it’s mostly driven by the quality of the relationship you build
              together.
            </Typography>
            <Typography variant="body1" mb={4}>
              At Men’s Therapy Hub, we believe that every man deserves a
              therapist who understands and supports them. If you think a male
              therapist could be the right choice for you, we’re here to help
              you find one.
            </Typography>
            <Typography variant="body1" mb={4}>
              If you’re reading this, it means you’re considering starting
              therapy, quite possibly for the first time. Well done for making
              it this far—we know it hasn’t been easy to get here. Recognising
              that you might benefit from professional support and taking steps
              to find it is a sign of courage and self-awareness.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <DividerComponent width="100%" color="text.secondary" sx={{ mb: 2 }} />
    </>
  );
}
