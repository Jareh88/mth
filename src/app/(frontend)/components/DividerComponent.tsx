import { Divider, SxProps } from "@mui/material";

export default function DividerComponent({
  width,
  color = "#0A3449",
  sx = {},
}: {
  width: string;
  color: string | null;
  sx: SxProps | null;
}) {
  return (
    <Divider
      sx={{
        opacity: 0.5,
        borderColor: color,
        borderStyle: "dashed",
        width: { width },
        mx: "auto",
        ...sx,
      }}
    />
  );
}
