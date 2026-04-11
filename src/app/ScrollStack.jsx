"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStack() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    sections.forEach((section, i) => {
      if (i < sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          endTrigger: sections[i + 1],
          end: "top top",
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
}