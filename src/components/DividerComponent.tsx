import { Divider } from "@mui/material";

export default function DividerComponent({ width }: { width: string }) {
  return (
    <Divider
      sx={{
        opacity: 0.5,
        borderColor: "#0A3449",
        borderStyle: "dashed",
        mb: 2,
        width: { width },
        mx: "auto",
      }}
    />
  );
}
