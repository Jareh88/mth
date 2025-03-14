import placeholderTherapists from "@frontend/helpers/placeholderTherapists";

import { Container, Typography } from "@mui/material";
import TherapistProfile from "@frontend/components/TherapistProfileComponent";
// import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Link from "next/link";
import { getPayloadInstance } from "@frontend/lib/payload";
import { notFound } from "next/navigation";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical";

export async function generateStaticParams() {
  return placeholderTherapists.map((therapist) => ({
    slug: therapist.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayloadInstance();

  // const therapist = placeholderTherapists.find((t) => t.slug === slug);

  const { docs: [therapist] = [] } = await payload.find({
    collection: "therapists",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (!therapist) {
    return notFound();
  }

  const biographyHTML = await convertLexicalToHTML(therapist.biography);

  return (
    // TODO: put padding on container as default
    <Container sx={{ py: { xs: 0, lg: 6 } }}>
      {/* <BreadcrumbComponent parentUrl="/therapists" title={therapist.name} /> */}
      <Link href="/therapists">
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ "&:hover": { color: "primary.main" } }}
          mb={2}
        >
          {"«"} Back to your search
        </Typography>
      </Link>
      <TherapistProfile therapist={therapist} biographyHTML={biographyHTML} />
    </Container>
  );
}
