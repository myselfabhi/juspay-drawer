"use client";

import { useState } from "react";
import { Drawer } from "./Drawer";
import type { DrawerItem } from "@/types/menu";

const sampleMenu: DrawerItem[] = [
  {
    id: "1",
    label: "Software Solutions",
    description: "Custom software development and deployment",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    children: [
      {
        id: "1-1",
        label: "Web Applications",
        description: "Modern web apps built with latest technologies",
        onClick: () => alert("Web Applications clicked"),
      },
      {
        id: "1-2",
        label: "Mobile Apps",
        description: "Native and cross-platform mobile solutions",
        onClick: () => alert("Mobile Apps clicked"),
      },
    ],
  },
  {
    id: "2",
    label: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and infrastructure",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5 5 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    children: [
      {
        id: "2-1",
        label: "AWS Solutions",
        description: "Amazon Web Services deployment and management",
        onClick: () => alert("AWS Solutions clicked"),
      },
      {
        id: "2-2",
        label: "Azure Solutions",
        description: "Microsoft Azure cloud services",
        onClick: () => alert("Azure Solutions clicked"),
      },
    ],
  },
  {
    id: "3",
    label: "Consulting Services",
    description: "Expert guidance and strategic support",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    children: [
      {
        id: "3-1",
        label: "Technical Consulting",
        description: "Expert technical advice and architecture",
        onClick: () => alert("Technical Consulting clicked"),
      },
      {
        id: "3-2",
        label: "Business Consulting",
        description: "Strategic business planning and analysis",
        onClick: () => alert("Business Consulting clicked"),
      },
    ],
  },
  {
    id: "4",
    label: "Digital Transformation",
    description: "Comprehensive digital transformation strategies",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    onClick: () => alert("Digital Transformation clicked"),
  },
  {
    id: "5",
    label: "Cybersecurity Consulting",
    description: "Comprehensive cybersecurity services and solutions",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    onClick: () => alert("Cybersecurity Consulting clicked"),
  },
  {
    id: "6",
    label: "Data & Analytics Consulting",
    description: "Data strategy, analytics, and business intelligence",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    onClick: () => alert("Data & Analytics Consulting clicked"),
  },
  {
    id: "7",
    label: "DevOps & Platform Engineering",
    description: "DevOps transformation and platform",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    onClick: () => alert("DevOps & Platform Engineering clicked"),
  },
];

export function DrawerDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Open Drawer
      </button>
      <Drawer menu={sampleMenu} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

