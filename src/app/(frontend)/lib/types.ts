import React from "react";

export type TherapistProps = {
  id: number;
  slug: string;
  name: string;
  profession: string;
  online_or_in_person: string;
  address: string | null;
  specialisms: string[];
  email: string;
  phone_number: string;
  fee_per_hour: number;
  therapy_types_offered: string[];
  website_link: string;
  profile_image: string;
  qualifications_and_accreditations: string[];
  age: number;
  faith: string;
  insurance: string[];
  languages: string[];
  sexuality: string | null;
  ethnicity: string[];
  biography: string;
  how_we_start: string;
};

export type CheckboxButtonOptions = {
  icon: React.ReactNode;
  label: string;
}[];
