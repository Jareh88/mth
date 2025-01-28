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
      sx={{ width: 250, color: "text.secondary" }}
      role="presentation"
      onClick={onClick}
    >
      <List>
        {[
          { text: "About", link: "/about" },
          { text: "Find a Therapist", link: "/therapists" },
          { text: "Join Our Directory", link: "/join" },
        ].map((navItem, index) => (
          <Link href={navItem.link} key={index}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={navItem.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { text: "Blog", link: "/blog" },
          { text: "Contact Us", link: "/contact" },
        ].map((navItem, index) => (
          <Link href={navItem.link} key={index}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={navItem.text} />
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
