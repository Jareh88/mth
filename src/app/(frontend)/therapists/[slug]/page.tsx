import { Container, Typography } from "@mui/material";
import placeholderTherapists from "@/app/(frontend)/helpers/placeholderTherapists";
import TherapistProfile from "@/app/(frontend)/components/TherapistProfileComponent";
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
      <TherapistProfile therapist={therapist} />
    </Container>
  );
}
