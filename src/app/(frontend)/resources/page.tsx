// import Image from "next/image";
import { Box, Container } from "@mui/material";
import { getPayloadInstance } from "../_lib/payload";
import Link from "next/link";
import { Metadata } from "next";
import { generateMeta } from "../_utils/generateMeta";

export default async function Page() {
  const payload = await getPayloadInstance();
  const { docs: resources } = await payload.find({
    collection: "resources",
    limit: 20,
    sort: "title",
  });

  return (
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      {resources?.length ? (
        resources.map((resource, index) => (
          <Box key={index}>
            <Link href={`/resources/${resource.slug}`}>{resource.title}</Link>
          </Box>
        ))
      ) : (
        <p>No resources found</p>
      )}
    </Container>
  );
}

export async function generateMetadata() {
  const page = {
    meta: {
      title: "Resources By Men, For Men | Male Counselling & Therapy",
      description:
        "Discover how to find a good therapist near you, how to talk to a counsellor, how to support men, what are the different types of therapy and more with our resources.",
      // image: ,
      slug: "/resources",
    },
  };

  return generateMeta({ doc: page });
}
