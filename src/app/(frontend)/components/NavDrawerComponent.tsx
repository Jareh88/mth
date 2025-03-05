import { StayPrimaryLandscape } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

type NavDrawerProps = {
  onClick: () => void;
  open: boolean;
};

export const NavDrawer = ({ onClick, open }: NavDrawerProps) => {
  const DrawerList = (
    <Box
      sx={{
        width: 300,
        height: "100%",
        color: "text.secondary",
        backgroundColor: "secondary.main",
      }}
      role="presentation"
      onClick={onClick}
    >
      <List>
        {[
          { text: "Resources", link: "/resources" },
          { text: "Find Your Therapist", link: "/therapists" },
          { text: "Join The Directory", link: "/join" },
          { text: "About MTH", link: "/join" },
        ].map((navItem, index) => (
          <Link href={navItem.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={navItem.text}
                  className="mobile-nav-link"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Search", link: "/search" },
          { text: "Login", link: "/login" },
        ].map((navItem, index) => (
          <Link href={navItem.link} key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={navItem.text}
                  className="mobile-nav-link"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer open={open} onClose={onClick} anchor="right">
        {DrawerList}
      </Drawer>
    </Box>
  );
};
