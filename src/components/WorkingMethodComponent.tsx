import { Box } from "@mui/material";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";

type WorkingMethodComponentProps = {
  status: string;
};

export default function WorkingMethodComponent({
  status,
}: WorkingMethodComponentProps) {
  let methodIcons = () => (
    <Box>
      <LaptopOutlinedIcon sx={{ p: "2px" }} />
      <ChairOutlinedIcon sx={{ p: "2px" }} />
    </Box>
  );

  if (status === "Online") {
    methodIcons = () => (
      <Box>
        <LaptopOutlinedIcon sx={{ p: "2px" }} />
      </Box>
    );
  } else if (status === "In Person") {
    methodIcons = () => (
      <Box>
        <ChairOutlinedIcon sx={{ p: "2px" }} />
      </Box>
    );
  }

  return <>{methodIcons()}</>;
}
