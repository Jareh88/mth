import { Box, Container } from "@mui/material";
import { getPayloadInstance } from "../../_lib/payload";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const payload = await getPayloadInstance();

  const { docs: resources } = await payload.find({
    collection: "resources",
    pagination: false,
  });

  const params = resources.map((doc) => ({
    slug: doc.slug,
  }));

  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayloadInstance();

  const { docs: [resource] = [] } = await payload.find({
    collection: "resources",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (!resource) {
    return notFound();
  }

  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      <Box>{resource.title}</Box>
    </Container>
  );
}
