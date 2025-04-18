import ResourceView from "../../_components/ResourceView";
import { PageArgs } from "../../_lib/pageArgs";
import { getPayloadInstance } from "../../_lib/payload";

export async function generateStaticParams() {
  const payload = await getPayloadInstance();

  const { docs: resources } = await payload.find({
    collection: "resources",
    where: { type: { equals: "articles" } },
    pagination: false,
  });

  const params = resources.map((doc) => ({
    slug: doc.slug,
  }));

  return params;
}

export default async function Page({ params: paramsPromise }: PageArgs) {
  const { slug = "" } = await paramsPromise;

  return <ResourceView slug={slug} />;
  // return <div>hi</div>;
}
