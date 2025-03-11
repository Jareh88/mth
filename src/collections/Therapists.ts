import { actualEthnicities } from "@/app/(frontend)/helpers/placeholderEthnicities";
import { actualLanguages } from "@/app/(frontend)/helpers/placeholderLanguages";
import type { CollectionConfig } from "payload";
import slugify from "slugify";

export const Therapists: CollectionConfig = {
  slug: "therapists",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
      required: true,
    },
    {
      name: "biography",
      type: "richText",
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "communication_method",
      label: "Session Communication Method",
      type: "select",
      hasMany: true,
      options: ["In Person", "Online"],
    },
    {
      name: "address",
      type: "textarea",
    },
    {
      name: "phone number",
      type: "text",
    },
    {
      name: "fee per hour £",
      type: "text",
    },
    {
      name: "website link",
      type: "text",
    },
    {
      label: "Qualifications and Accrediations Section",
      type: "collapsible",
      fields: [
        {
          name: "qualifications_and_accreditations",
          type: "array",
          fields: [
            {
              name: "qualification",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      label: "Age Ranges Worked With",
      name: "age range",
      type: "select",
      hasMany: true,
      options: ["14-18", "18-65", "65+"],
    },
    {
      label: "Your Faith Group/Belief System (if any)",
      name: "faith",
      type: "select",
      options: [
        "African Traditional & Diasporic",
        "Agnostic",
        "Atheist",
        "Baha'i",
        "Buddhism",
        "Cao Dai",
        "Chinese traditional religion",
        "Christianity",
        "Hinduism",
        "Islam",
        "Jainism",
        "Juche",
        "Judaism",
        "Neo-Paganism",
        "Non-religious",
        "Rastafarianism",
        "Secular",
        "Shinto",
        "Sikhism",
        "Spiritism",
        "Tenrikyo",
        "Unitarian-Universalism",
        "Zoroastrianism",
        "Primal-indigenous",
        "Other",
      ],
    },
    {
      label: "Insurance Coverage",
      type: "collapsible",
      fields: [
        {
          name: "insurances",
          type: "array",
          fields: [
            {
              name: "insurance",
              type: "text",
            },
          ],
        },
      ],
    },
    {
      label: "Fluent Languages Spoken",
      name: "languages",
      type: "select",
      hasMany: true,
      options: [
        "English",
        "Spanish",
        "French",
        "German",
        "Mandarin",
        "Cantonese",
        "Hindi",
        "Bengali",
        "Punjabi",
        "Urdu",
        "Portuguese",
        "Arabic",
        "Russian",
        "Italian",
        "Japanese",
        "Korean",
        "Swedish",
        "Dutch",
        "Turkish",
        "Polish",
        "Tamil",
        "Gujarati",
        "Malay",
        "Greek",
        "Vietnamese",
        "Thai",
        "Farsi",
        "Hebrew",
        "Swahili",
        "Zulu",
        "Afrikaans",
        "Norwegian",
        "Danish",
        "Finnish",
        "Hungarian",
        "Czech",
        "Slovak",
        "Romanian",
        "Bulgarian",
        "Serbian",
        "Croatian",
        "Bosnian",
        "Albanian",
        "Ukrainian",
        "Latvian",
        "Lithuanian",
        "Estonian",
        "Welsh",
        "Irish",
        "Scottish Gaelic",
      ],
    },
    {
      name: "sexuality",
      type: "select",
      options: ["Heterosexual", "Bisexual", "LGBTQ+", "Prefer not to state"],
    },
    {
      name: "ethnicity",
      type: "select",
      options: [
        "African / Black / Afro-Carribean",
        "Asian",
        "Arab / Middle-Eastern",
        "Hispanic / Latino / Latinx",
        "European / White",
        "Mixed / Multi-ethnic",
        "Jewish",
        "Other",
      ],
    },
    // ethnicity:
    // biography:
    // how_we_start:
    // therapy_types_offered:
    // profession:
    // specialisms:
    {
      label: "URL slug",
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (operation === "create" && !data?.slug) {
              return { ...data, slug: slugify(data?.name, { lower: true }) };
            }
            return data;
          },
        ],
      },
    },
  ],
};

export default Therapists;
