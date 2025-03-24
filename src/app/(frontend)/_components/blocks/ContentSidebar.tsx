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

export const ContentSidebarBlock = () => {
  return (
    <>
      <Container sx={{ py: { xs: 0, lg: 6 } }}>
        <Grid container spacing={8}>
          <Grid size={8} sx={{ color: "text.secondary", pr: 8 }}>
            <Typography variant="h1" component="h2" mb={4}>
              About MTH
            </Typography>
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
                  <Link href={`/therapists/${placeholderTherapists[0].slug}`}>
                    <CardContent>
                      {/* Name and meta info */}
                      <Grid container spacing={1} sx={{ minHeight: "124px" }}>
                        <Grid size={3}>
                          {/* <Image src={placeholderTherapists[0].profile_image} width="80" height="80" /> */}
                          <Image
                            src="https://place-hold.it/80x80"
                            width="80"
                            height="80"
                            alt={`Profile image for ${placeholderTherapists[0].name}`}
                            className="profile-img"
                          />
                        </Grid>

                        <Grid size={9} sx={{ mb: 1 }}>
                          <Typography
                            variant="h4"
                            component="h3"
                            align="center"
                          >
                            {placeholderTherapists[0].name}
                          </Typography>
                          <Typography
                            variant="body2"
                            component="h4"
                            align="center"
                          >
                            {placeholderTherapists[0].profession}
                          </Typography>

                          <Box justifyItems={"center"} sx={{ lineHeight: 1 }}>
                            <Box className="flex-row">
                              <WorkingMethodComponent
                                status={
                                  placeholderTherapists[0].online_or_in_person
                                }
                              />
                              <Typography
                                variant="body2"
                                component="h4"
                                sx={{ pl: 1 }}
                              >
                                {placeholderTherapists[0].online_or_in_person}
                              </Typography>
                            </Box>
                            {placeholderTherapists[0].address && (
                              <Box className="flex-row">
                                <LocationOnOutlinedIcon />
                                <Typography
                                  variant="body2"
                                  component="h4"
                                  sx={{ pl: 1 }}
                                >
                                  {placeholderTherapists[0].address}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </Grid>
                      </Grid>

                      {/* Specialisms and bio */}
                      <Box sx={{ minHeight: "58px" }}>
                        <Typography
                          variant="h6"
                          component="h4"
                          sx={{ lineHeight: 1.5 }}
                        >
                          Specialisms:
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                          {placeholderTherapists[0].specialisms.join(", ")}
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
                        {placeholderTherapists[0].biography}
                      </Typography>
                    </CardContent>
                  </Link>
                  <CardActions className="no-parent-hover">
                    <Link href={`/therapists/${placeholderTherapists[0].slug}`}>
                      <Button variant="contained" className="view-profile-btn">
                        View More Like Me
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
            </Box>
          </Grid>
        </Grid>
      </Container>
      <DividerComponent width="100%" color="text.secondary" sx={{ mb: 2 }} />
    </>
  );
};
