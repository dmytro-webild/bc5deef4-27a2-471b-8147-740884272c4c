"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FooterSimple from '@/components/sections/footer/FooterSimple';
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
        <div id="nav" data-section="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Our Work", id: "/our-work" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Frankfurt Sofa & Carpet"
          />
        </div>

        <div id="about" data-section="about">
          <InlineImageSplitTextAbout
            heading={[{ type: 'text', content: "Your Local Cleaning Expert" }]}
            description="At Frankfurt Sofa & Carpet, we take pride in our personalized, owner-operated approach. Our mission is simple: provide top-tier cleaning services with a level of attention to detail that only a locally-owned business can offer."
            useInvertedBackground={false}
            className="py-24"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Direct Support", items: [{ label: "Call: (484) 845-4829", href: "tel:4848454829" }, { label: "Email: info@frankfurtcleaning.com", href: "mailto:info@frankfurtcleaning.com" }, { label: "Serving West Chester & PA", href: "#" }] },
              { title: "Quick Links", items: [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Services", href: "/services" }, { label: "Book Now", href: "/contact" }] },
            ]}
            bottomLeftText="© 2025 Frankfurt Sofa & Carpet Cleaning. Licensed & Insured."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}