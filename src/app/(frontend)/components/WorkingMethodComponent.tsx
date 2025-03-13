import { Box, Typography } from "@mui/material";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

type WorkingMethodComponentProps = {
  status: string;
};

export default function WorkingMethodComponent({
  status,
}: WorkingMethodComponentProps) {
  let methodIcons = () => (
    <Box className="flex-row">
      <Box className="flex-row" mr={2}>
        <LaptopOutlinedIcon sx={{ p: "2px" }} />
        <Typography variant="body2" component="h4" sx={{ pl: 0.5 }}>
          Online
        </Typography>
      </Box>
      <Box className="flex-row">
        <ChairOutlinedIcon sx={{ p: "2px" }} />
        <Typography variant="body2" component="h4" sx={{ pl: 0.5 }}>
          In Person
        </Typography>
      </Box>
    </Box>
  );

  if (status && !status.includes("Online")) {
    methodIcons = () => (
      <Box className="flex-row">
        <LaptopOutlinedIcon sx={{ p: "2px" }} />
        <Typography variant="body2" component="h4" sx={{ pl: 0.5 }}>
          In Person
        </Typography>
      </Box>
    );
  }

  if (status && !status.includes("In Person")) {
    methodIcons = () => (
      <Box className="flex-row">
        <ChairOutlinedIcon sx={{ p: "2px" }} />
        <Typography variant="body2" component="h4" sx={{ pl: 0.5 }}>
          Online
        </Typography>
      </Box>
    );
  }

  return <>{methodIcons()}</>;
}
