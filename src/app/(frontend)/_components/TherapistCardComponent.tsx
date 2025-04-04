// import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { TherapistProps } from "@frontend/_lib/types";
import Link from "next/link";
import WorkingMethodComponent from "./WorkingMethodComponent";
import { getBiographyExcerpt } from "../_helpers/getBiographyExcerpt";
import { CollectionSlug, DataFromCollectionSlug } from "payload";
import { imageLoader } from "../_helpers/imageLoader";
import { ImageWithPlaceholder } from "./ImageWithPlaceholderComponent";

export default function TherapistCard({
  therapist,
}: DataFromCollectionSlug<CollectionSlug>) {
  return (
    <Card sx={{ height: "100%" }} className="therapist-card">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          p: 1,
        }}
      >
        <Link href={`/therapists/${therapist.slug}`}>
          <CardContent>
            {/* Name and meta info */}
            <Grid container spacing={1} sx={{ minHeight: "124px" }}>
              <Grid size={3}>
                <ImageWithPlaceholder
                  imageObj={therapist.photo}
                  className="profile-img"
                />
              </Grid>

              <Grid size={9} sx={{ mb: 1 }}>
                <Typography variant="h4" component="h3" align="center">
                  {therapist.name}
                </Typography>
                <Typography variant="body2" component="h4" align="center">
                  {therapist.profession}
                </Typography>

                <Box justifyItems={"center"} sx={{ lineHeight: 1 }}>
                  <WorkingMethodComponent
                    status={therapist.communication_method}
                  />
                  {therapist.address && (
                    <Box className="flex-row">
                      <LocationOnOutlinedIcon />
                      <Typography variant="body2" component="h4" sx={{ pl: 1 }}>
                        {therapist.address}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* Specialisms and bio */}
            <Box sx={{ minHeight: "58px" }}>
              <Typography variant="h6" component="h4" sx={{ lineHeight: 1.5 }}>
                Specialisms:
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                {therapist.specialisms.join(", ")}
              </Typography>
            </Box>
            <Divider
              sx={{
                opacity: 0.5,
                borderColor: "#0A3449",
                borderStyle: "dashed",
                mb: 2,
                width: "50%",
                mx: "auto",
              }}
            />
            <Typography
              variant="body1"
              // noWrap
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
              }}
            >
              {getBiographyExcerpt(therapist.biography)}
            </Typography>
          </CardContent>
        </Link>
        <CardActions className="no-parent-hover">
          <Button variant="contained" href={`mailto:${therapist.email}`}>
            Email me
          </Button>
          <Link href={`/therapists/${therapist.slug}`}>
            <Button variant="contained" className="view-profile-btn">
              View Profile
            </Button>
          </Link>
          <Tooltip title="Bookmark">
            <IconButton disableRipple className="bookmark-btn">
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
}
