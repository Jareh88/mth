import Grid from "@mui/material/Grid2";
import FooterNav from "./FooterNav";
import Image from "next/image";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Grid container sx={{ py: 4 }} spacing={4}>
          <Grid size={4}>
            <Image
              src={`/assets/MTH rectangle orange transparent.png`}
              alt="logo"
              width="240"
              height="69"
              priority
            />
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontStyle: "italic" }}
            >
              Psychotherapy & Counselling by men, for men.
            </Typography>
          </Grid>
          <Grid size={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Get Involved
            </Typography>
            <List>
              <Link href="javascript:;">
                <ListItemButton disableRipple component="div">
                  <ListItemText
                    primary="Join The Directory"
                    slotProps={{
                      primary: { variant: "body2", sx: { color: "#ff9900" } },
                    }}
                  />
                </ListItemButton>
              </Link>
              <Link href="javascript:;">
                <ListItemButton disableRipple component="div">
                  <ListItemText
                    primary="Login"
                    slotProps={{
                      primary: { variant: "body2", sx: { color: "#ff9900" } },
                    }}
                  />
                </ListItemButton>
              </Link>
            </List>
          </Grid>
          <Grid size={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Site Links
            </Typography>
            <FooterNav />
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", py: 1, px: 2 }}
      >
        <Container>
          <Grid container>
            <Grid size={6}>
              <Typography variant="body2" color="primary">
                {"Copyright © "}
                <Link color="inherit" href="/">
                  {"Men's Therapy Hub"}
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Grid>
            <Grid size={6}>
              <Typography
                variant="body2"
                color="primary"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  "& a:hover": { color: "#fff" },
                }}
              >
                <Link href="javascript:;">Terms and Conditions</Link>
                {`| | |`}
                <Link href="javascript:;">Privacy Policy</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
