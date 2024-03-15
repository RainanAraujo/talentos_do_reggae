"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  direction: number;
}

export default function VerticalAnimWrapper({ children, direction }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [direction, 0]);

  return (
    <div ref={ref}>
      <motion.div style={{ translateY: xTransform }}>{children}</motion.div>
    </div>
  );
}
