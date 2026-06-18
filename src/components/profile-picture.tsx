"use client";

import Image from "next/image";
import type { MouseEventHandler } from "react";

type ProfilePictureProps = {
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function ProfilePicture({ src, alt, onClick }: ProfilePictureProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative h-28 w-28 cursor-pointer overflow-hidden rounded-full md:h-32 md:w-32"
      aria-label="Open larger profile picture"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 112px, 128px"
        className="object-cover object-center"
        priority
      />
    </button>
  );
}
