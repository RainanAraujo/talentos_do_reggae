"use client";

import clsx from "clsx";
import React from "react";

interface PostWrapperProps {
  children?: React.ReactNode;
  permalink?: string;
  isVideo?: boolean;
}

export default function PostWrapper({ children, permalink }: PostWrapperProps) {
  const [postExpanded, setPostExpanded] = React.useState(false);
  return (
    <div
      className={clsx(
        "w-80  relative overflow-clip cursor-pointer duration-300 ease-in-out ",
        "h-80",
        postExpanded && "h-[580px]"
      )}
      onClick={() =>
        permalink
          ? window.open(permalink, "_blank")
          : setPostExpanded(!postExpanded)
      }
    >
      {children}
    </div>
  );
}
