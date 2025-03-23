import { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Slug (if using as homepage please leave blank)",
      name: "slug",
      type: "text",
      unique: true,
      defaultValue: "/",
    },
    {
      name: "layout",
      type: "blocks",
      blocks: [
        {
          slug: "hero",
          fields: [
            { name: "heading", type: "text", required: true },
            { name: "paragraph", type: "textarea", required: true },
          ],
        },
        {
          slug: "three-column",
          fields: [
            {
              label: "Icon Left Column",
              name: "icon_one",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Title Left Column",
              name: "title_one",
              type: "text",
              required: true,
            },
            {
              label: "Paragraph Left Column",
              name: "paragraph_one",
              type: "textarea",
              required: true,
            },
            {
              label: "URL link / CTA Left Column",
              name: "link_url_one",
              type: "text",
            },
            {
              label: "Icon Centre Column",
              name: "icon_two",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Title Centre Column",
              name: "title_two",
              type: "text",
              required: true,
            },
            {
              label: "Paragraph Centre Column",
              name: "paragraph_two",
              type: "textarea",
              required: true,
            },
            {
              label: "URL link / CTA Centre Column",
              name: "link_url_two",
              type: "text",
            },
            {
              label: "Icon Right Column",
              name: "icon_three",
              type: "upload",
              relationTo: "media",
            },
            {
              label: "Title Right Column",
              name: "title_three",
              type: "text",
              required: true,
            },
            {
              label: "Paragraph Right Column",
              name: "paragraph_three",
              type: "textarea",
              required: true,
            },
            {
              label: "URL link / CTA Right Column",
              name: "link_url_three",
              type: "text",
            },
          ],
        },
        {
          slug: "content-|-get-matched-and-links",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "content",
              type: "richText",
              required: true,
            },
            {
              name: "highlighted_therapist",
              type: "relationship",
              relationTo: "therapists",
              required: false,
              hasMany: false,
            },
          ],
        },
        {
          slug: "get-matched-and-links-|-content",
          fields: [
            {
              name: "heading",
              type: "text",
              required: true,
            },
            {
              name: "content",
              type: "richText",
              required: true,
            },
            {
              name: "highlighted_therapist",
              type: "relationship",
              relationTo: "therapists",
              required: false,
              hasMany: false,
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
};

export default Pages;
