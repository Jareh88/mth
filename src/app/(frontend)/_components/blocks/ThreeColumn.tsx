import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { SingleColumnInner } from "./SingleColumnInner";

export const ThreeColumnBlock = (props) => {
  const {
    heading,
    subheading,
    icon_one,
    icon_two,
    icon_three,
    link_url_one,
    link_url_two,
    link_url_three,
    title_one,
    title_two,
    title_three,
    paragraph_one,
    paragraph_two,
    paragraph_three,
  } = props;

  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      <Box mb={4}>
        {heading && (
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
            {heading}
          </Typography>
        )}
        {subheading && (
          <Typography
            variant="h2"
            component="h2"
            color="primary.dark"
            sx={{ textAlign: "center", mb: 4, fontSize: { md: "38px" } }}
          >
            {subheading}
          </Typography>
        )}

        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
            <SingleColumnInner
              icon={icon_one}
              title={title_one}
              paragraph={paragraph_one}
              link={link_url_one}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
            <SingleColumnInner
              icon={icon_two}
              title={title_two}
              paragraph={paragraph_two}
              link={link_url_two}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }} sx={{ mb: { xs: 6, sm: 4 } }}>
            <SingleColumnInner
              icon={icon_three}
              title={title_three}
              paragraph={paragraph_three}
              link={link_url_three}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
