export function getBiographyExcerpt(
  biography: any,
  maxLength: number = 200
): string {
  // If there's no biography or no children, return empty
  if (!biography?.root?.children?.length) {
    return "";
  }

  // Find the first paragraph node
  const firstParagraph = biography.root.children.find(
    (child: any) => child.type === "paragraph"
  );
  if (!firstParagraph?.children) return "";

  // Combine all text children into one string
  let text = firstParagraph.children
    .filter((node: any) => node.text)
    .map((node: any) => node.text)
    .join(" ");

  // Truncate if needed
  if (text.length > maxLength) {
    text = text.slice(0, maxLength) + "...";
  }

  return text;
}
