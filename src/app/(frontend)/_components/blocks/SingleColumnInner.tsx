"use client";
import { Box, Button, Typography } from "@mui/material";
import DividerComponent from "../DividerComponent";
import Image from "next/image";
import { imageLoader } from "../../_helpers/imageLoader";
import Groups3OutlinedIcon from "@mui/icons-material/Groups3Outlined";
import Link from "next/link";
// import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
// import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

export const SingleColumnInner = ({ icon, link, title, paragraph }) => {
  return (
    <>
      {/* Icon of some kind */}
      {icon ? (
        <Box
          sx={{
            color: "text-secondary",
            display: "flex",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <Image
            loader={imageLoader}
            src={icon?.url}
            width="80"
            height="80"
            alt={icon?.alt}
          />
        </Box>
      ) : (
        <Box
          sx={{
            color: "text-secondary",
            display: "flex",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <Groups3OutlinedIcon sx={{ color: "#fff", fontSize: "6rem" }} />
        </Box>
      )}
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
          {title}
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
          {paragraph}
        </Typography>
        {link && (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link href={link}>
              <Button variant="contained" sx={{ backgroundColor: "#07a0c3" }}>
                Read more...
              </Button>
            </Link>
          </Box>
        )}
      </Box>
      <Box>{/* CTA */}</Box>
    </>
  );
};
