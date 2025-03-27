"use client";
import Image from "next/image";
import { imageLoader } from "../_helpers/imageLoader";

export const ImageWithPlaceholder = ({
  imageObj,
  className,
  width,
  height,
}) => {
  return (
    <>
      {imageObj && imageObj.url !== "" ? (
        <Image
          loader={imageLoader}
          src={imageObj.url}
          width={width ?? "80"}
          height={height ?? "80"}
          alt={imageObj.alt}
          className={className}
        />
      ) : (
        <Image
          src="https://place-hold.it/80x80"
          width={width ?? "80"}
          height={height ?? "80"}
          alt="Placeholder"
          className={className}
        />
      )}
    </>
  );
};
