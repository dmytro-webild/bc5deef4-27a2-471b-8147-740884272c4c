"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { UserCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="fluid"
        cardStyle="inset"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "About", id: "/about" },
            { name: "Services", id: "/services" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Frankfurt Sofa & Carpet"
        />

        <SplitAbout
          title="Your Local Cleaning Expert"
          description="At Frankfurt Sofa & Carpet, we take pride in our personalized, owner-operated approach. Our mission is simple: provide top-tier cleaning services with a level of attention to detail that only a locally-owned business can offer."
          tag="Meet the Team"
          tagIcon={UserCheck}
          imagePosition="right"
          textboxLayout="split"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png?_wi=2"
          bulletPoints={[
            { title: "Owner-Operated", description: "Every job is overseen personally to ensure the highest standard of quality and satisfaction." },
            { title: "Proven Experience", description: "Years of dedicated service in West Chester and beyond, mastering advanced cleaning techniques." },
            { title: "Commitment to Care", description: "Your home is your sanctuary—we treat it with the same respect and care we would our own." }
          ]}
          className="py-24"
        />

        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png?_wi=2"
          logoText="Frankfurt Sofa & Carpet"
          columns={[
            { title: "Direct Support", items: [{ label: "Call: (484) 845-4829", href: "tel:4848454829" }, { label: "Email: info@frankfurtcleaning.com", href: "mailto:info@frankfurtcleaning.com" }, { label: "Serving West Chester & PA", href: "#" }] },
            { title: "Quick Links", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Services", href: "/services" }, { label: "Book Now", href: "/contact" }] },
          ]}
          copyrightText="© 2025 Frankfurt Sofa & Carpet Cleaning. Licensed & Insured."
        />
      </ReactLenis>
    </ThemeProvider>
  );
}