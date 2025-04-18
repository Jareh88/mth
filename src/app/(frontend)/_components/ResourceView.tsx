import { Box, Container } from "@mui/material";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPayloadInstance } from "../_lib/payload";
import { PageArgs } from "../_lib/pageArgs";
import { generateMeta } from "../_utils/generateMeta";

export default async function ResourceView({ slug }: { slug: string }) {
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
  console.log(resource);

  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      <Box>{resource.title}</Box>
    </Container>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: PageArgs): Promise<Metadata> {
  const { slug } = await paramsPromise;
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

  return generateMeta({ doc: resource });
}
