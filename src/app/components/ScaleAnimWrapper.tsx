"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  finalValue: number;
  className?: string;
}

export default function ScaleAnimWrapper({
  children,
  finalValue,
  className,
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const xScale = useTransform(scrollYProgress, [0, 1], [0.6, finalValue]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{
          scale: xScale,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
