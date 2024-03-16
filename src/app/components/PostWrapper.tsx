"use client";

import React from "react";

interface PostWrapperProps {
  children?: React.ReactNode;
  permalink?: string;
}

export default function PostWrapper({ children, permalink }: PostWrapperProps) {
  return (
    <div
      className="w-80 h-80 relative overflow-clip cursor-pointer "
      onClick={() => window.open(permalink, "_blank")}
    >
      {children}
    </div>
  );
}
