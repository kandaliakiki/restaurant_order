"use client";

import { useTransitionRouter } from "next-view-transitions";
import React from "react";
import * as animations from "./animations";
import usePreviousPath from "./usePreviousPath";
import { usePathname } from "next/navigation";

// Define allowed transition functions dynamically
export type TransitionFunction = keyof typeof animations;

const TransitionLink = ({
  href,
  children,
  onTransitionReady,
  className, // Added className prop
}: {
  href: string;
  children: React.ReactNode;
  onTransitionReady: TransitionFunction;
  className?: string; // className is optional
}) => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  return (
    <a
      className={className} // Apply className to the anchor tag
      onClick={(e) => {
        e.preventDefault();
        localStorage.setItem("previousPath", pathname);
        router.push(href, {
          onTransitionReady: animations[onTransitionReady],
        });
      }}
    >
      {children}
    </a>
  );
};

export default TransitionLink;
