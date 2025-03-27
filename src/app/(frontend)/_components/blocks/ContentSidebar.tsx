import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import Image from "next/image";
import ExtensionIcon from "@mui/icons-material/Extension";
import WorkingMethodComponent from "@frontend/_components/WorkingMethodComponent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import placeholderTherapists from "@frontend/_helpers/placeholderTherapists";
import DividerComponent from "../DividerComponent";
import LexicalRenderer from "../LexicalRenderer";
import { getPayloadInstance } from "@frontend/_lib/payload";
import TherapistCardComponent from "../TherapistCardComponent";

export async function ContentSidebarBlock(props) {
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
          <Grid size={8} sx={{ color: "text.secondary", pr: 8 }}>
            <Typography variant="h1" component="h2" mb={4}>
              {heading}
            </Typography>
            {/* Dynamically rendered content from rich text format field in CMS */}
            {<LexicalRenderer content={content} />}
            {/* All the static content I want the above to match when in paragraphs and headings and whatever else */}
            <Typography variant="body1" mb={4}>
              At Men’s Therapy Hub, we understand that finding the right
              therapist is an important step in the journey towards better
              mental health. That’s why we ensure that all our therapists are
              fully accredited by a recognised professional body, guaranteeing
              that they meet the highest standards of training, ethics, and
              practice in psychotherapy and counselling. This accreditation is
              your assurance that our therapists are not only qualified, but
              also bound by a code of conduct that prioritises your well-being
              and confidentiality.
            </Typography>
            <Typography variant="body1" mb={4}>
              We know that therapy starts with finding the right therapist, so
              MTH offers clients a wide range of choices to ensure they find the
              therapist that best suits their individual needs. Flexible options
              for therapy sessions include both online and in-person
              appointments, catering to different preferences and lifestyles. In
              addition, therapists offering a variety of approaches are
              available, enabling clients to choose a style that resonates most
              with them. Whether seeking a therapist nearby or one with specific
              expertise, Men’s Therapy Hub ensures that clients have access to
              diverse and personalised options for their mental health journey.
            </Typography>
            <Typography variant="body1" mb={4}>
              All the therapists signed up to MTH are not just experienced
              practitioners, but professionals who recognise the unique
              challenges that men face in today’s world. Our therapists offer a
              wide range of experiences and expertise, meaning clients can find
              someone with the insight and experience to offer them relevant and
              effective support.
            </Typography>
            <Typography variant="body1" mb={4}>
              Furthermore, MTH will aid our therapists to engage in Continuing
              Professional Development (CPD) specifically focused on men’s
              mental health. This will include staying up-to-date with the
              latest research, therapeutic approaches and strategies for
              addressing the issues that affect men. By continually developing
              their knowledge and skills, our therapists are better equipped to
              support clients in a way that’s informed by the most current,
              evidence-based practices.
            </Typography>
            <Typography variant="body1" mb={4}>
              If you’re ready to take the next step towards positive change,
              we’re here to help. At Men’s Therapy Hub, we’ll connect you with
              an accredited, experienced male therapist who understands your
              experiences and is dedicated to helping you become the man you
              want to be.
            </Typography>
          </Grid>
          <Grid size={4} justifyItems="flex-end">
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
                align="right"
                mb={2}
                sx={{ textDecoration: "underline" }}
              >
                One of our Partnered Specialists
              </Typography>
              {/* TODO sort this component out */}
              <TherapistCardComponent therapist={therapist} />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <DividerComponent width="100%" color="text.secondary" sx={{ mb: 2 }} />
    </>
  );
}
