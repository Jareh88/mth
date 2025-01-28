import { Container, Typography } from "@mui/material";
import placeholderTherapists from "@/helpers/placeholderTherapists";
import TherapistProfile from "@/components/TherapistProfileComponent";
// import BreadcrumbComponent from "@/components/BreadcrumbComponent";
import Link from "next/link";

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
  const slug = (await params).slug;
  const therapist = placeholderTherapists.find((t) => t.slug === slug);

  if (!therapist) {
    return <div>Therapist not found</div>;
  }

  return (
    <Container>
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
      <TherapistProfile therapist={therapist} />
    </Container>
  );
}
