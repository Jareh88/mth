import React, { Fragment } from "react";

import type { Page } from "@/payload-types";

import { HeroBlock } from "./blocks/Hero";
import { ThreeColumnBlock } from "./blocks/ThreeColumn";
import { ContentSidebarBlock } from "./blocks/ContentSidebar";
import { SidebarContentBlock } from "./blocks/SidebarContent";

const blockComponents = {
  hero: HeroBlock,
  "three-column": ThreeColumnBlock,
  "content-|-get-matched-and-links": ContentSidebarBlock,
  "get-matched-and-links-|-content": SidebarContentBlock,
};

export const RenderBlocks: React.FC<{
  blocks: Page["layout"][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            {/* @ts-expect-error there may be some mismatch between the expected types here */}
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
