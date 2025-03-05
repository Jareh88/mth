"use client";
import { TherapistProps } from "@/lib/types";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WorkingMethodComponent from "./WorkingMethodComponent";
import PhoneIcon from "@mui/icons-material/Phone";
import CopyToClipboardButton from "./CopyToClipboardButtonComponent";
import ShareIcon from "@mui/icons-material/Share";

type TherapistProfileProps = {
  therapist: TherapistProps;
};

export default function TherapistProfile({ therapist }: TherapistProfileProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "4px",
      }}
    >
      <Grid container spacing={2}>
        {/* Left side section */}
        <Grid size={{ xs: 12, lg: 8 }} sx={{ p: 4 }}>
          {/* Photo/Title section */}
          <Box mb={2}>
            <Grid container>
              <Grid size={3}>
                <Image
                  src="https://place-hold.it/160x160"
                  width="160"
                  height="160"
                  alt={`Profile image for ${therapist.name}`}
                  className="profile-img"
                />
              </Grid>
              <Grid size={9} sx={{ alignContent: "center" }}>
                <Typography variant="h2" align="right" mb={1}>
                  {therapist.name}
                </Typography>
                <Typography
                  variant="h3"
                  align="right"
                  mb={2}
                  sx={{ fontWeight: 400 }}
                >
                  {therapist.profession}
                </Typography>
                <Box>
                  <Typography variant="h3" mb={1} align="right">
                    Specialisms:
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "right" }}>
                    <ul
                      className="inline-list"
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        // width: "80%",
                        // textAlign: "center",
                      }}
                    >
                      {therapist.specialisms.map((specialism, key) => {
                        return <li key={key}>{specialism}</li>;
                      })}
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* Main profile copy About / How we get started */}
          <Box>
            <Typography variant="h4" mb={1}>
              About Me
            </Typography>
            <Typography variant="body1" mb={2}>
              {therapist.biography}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" mb={1}>
              How we get started:
            </Typography>
            <Typography variant="body1" mb={4}>
              {therapist.how_we_start}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              href={`${therapist.website_link}`}
              target="_blank"
              size="large"
              sx={{
                mx: 2,
              }}
            >
              Visit Website
            </Button>
            <CopyToClipboardButton>
              <Button
                variant="contained"
                size="large"
                startIcon={<ShareIcon />}
                sx={{ py: 1.5 }}
              >
                Share
              </Button>
            </CopyToClipboardButton>
            <Tooltip title="Bookmark">
              <IconButton
                disableRipple
                className="bookmark-btn"
                size="large"
                sx={{ ml: 2 }}
              >
                <BookmarkIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        {/* Right side section */}
        <Grid
          size={{ xs: 12, lg: 4 }}
          sx={{ backgroundColor: "#e9f3fb", p: 3 }}
        >
          <Box mb={2}>
            <Typography variant="h4" mb={1}>
              Get in touch:
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button variant="text" size="large" startIcon={<PhoneIcon />}>
                {therapist.phone_number}
              </Button>
              <Button
                variant="contained"
                startIcon={<EmailOutlinedIcon />}
                size="large"
                href={`mailto:${therapist.email}`}
              >
                Email Me
              </Button>
            </Box>
          </Box>
          <Divider
            sx={{
              opacity: 0.5,
              borderColor: "#0A3449",
              borderStyle: "dashed",
              mb: 2,
              width: "100%",
              mx: "auto",
            }}
          />
          <Box mb={1}>
            <Typography variant="h4" mb={1}>
              How I Work:
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body1">
                Fees: £{therapist.fee_per_hour}/hr
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: 1,
                  alignItems: "center",
                }}
              >
                <WorkingMethodComponent
                  status={therapist.online_or_in_person}
                />
                <Typography variant="body1" ml={0.5}>
                  {therapist.online_or_in_person}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Divider
            sx={{
              opacity: 0.5,
              borderColor: "#0A3449",
              borderStyle: "dashed",
              mb: 2,
              width: "100%",
              mx: "auto",
            }}
          />
          <Box mb={1}>
            <Typography variant="h4" mb={1}>
              Therapies Offered:
            </Typography>
            <ul
              className="inline-list"
              style={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {therapist.therapy_types_offered.map((type, key) => {
                return <li key={key}>{type}</li>;
              })}
            </ul>
          </Box>
          <Divider
            sx={{
              opacity: 0.5,
              borderColor: "#0A3449",
              borderStyle: "dashed",
              mb: 2,
              width: "100%",
              mx: "auto",
            }}
          />
          <Box mb={1}>
            <Typography variant="h5" component="h4" mb={1}>
              Qualifications & Accreditations:
            </Typography>
            <ul className="inline-list">
              {therapist.qualifications_and_accreditations.map(
                (qualification, key) => {
                  return (
                    <li key={key}>
                      <Typography variant="body2">{qualification}</Typography>
                    </li>
                  );
                }
              )}
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
