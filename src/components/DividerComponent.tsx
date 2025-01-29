import { Divider } from "@mui/material";

export default function DividerComponent({
  width,
  color = "#0A3449",
}: {
  width: string;
  color: string;
}) {
  return (
    <Divider
      sx={{
        opacity: 0.5,
        borderColor: color,
        borderStyle: "dashed",
        mb: 2,
        width: { width },
        mx: "auto",
      }}
    />
  );
}
