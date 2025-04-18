import { Container, Box } from "@mui/material";
import Link from "next/link";
import { getPayloadInstance } from "@frontend/_lib/payload";

export default async function ResourceIndex({
  type,
}: {
  type: "articles" | "getting-started" | "common-therapy-topics";
}) {
  const payload = await getPayloadInstance();

  const { docs: resources } = await payload.find({
    collection: "resources",
    where: { type: { equals: type } },
    sort: "title",
    limit: 100,
  });

  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      {resources?.length ? (
        resources.map((r) => (
          <Box key={r.id}>
            <Link href={`/${type}/${r.slug}`}>{r.title}</Link>
          </Box>
        ))
      ) : (
        <p>No resources found.</p>
      )}
    </Container>
  );
}
