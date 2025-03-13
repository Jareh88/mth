import { CollectionConfig } from "payload";
import slugify from "slugify";

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
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      hooks: {
        beforeValidate: [
          ({ data, operation }) => {
            if (
              (operation === "create" && data?.title && !data.slug) ||
              !data?.slug ||
              data?.slug === ""
            ) {
              if (data) {
                data.slug = slugify(data.name, { lower: true, strict: true });
                return data.slug;
              }
              return "";
            }
          },
        ],
      },
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
              name: "content",
              type: "richText",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "order",
      type: "number",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};

export default Pages;
