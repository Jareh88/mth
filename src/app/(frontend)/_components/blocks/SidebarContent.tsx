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
import LexicalRenderer from "../LexicalRenderer";

export async function SidebarContentBlock({
  heading,
  content,
  highlighted_therapist,
}) {
  const payload = await getPayloadInstance();

  const therapist = await payload.findByID({
    collection: "therapists",
    id: highlighted_therapist,
  });

  return (
    <>
      <Container sx={{ py: { xs: 0, lg: 6 } }} className=".article">
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
              {heading}
            </Typography>
            {/* Dynamically rendered content from rich text format field in CMS */}
            {<LexicalRenderer content={content} />}
          </Grid>
        </Grid>
      </Container>
      <DividerComponent width="100%" color="text.secondary" sx={{ mb: 2 }} />
    </>
  );
}
