"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function GalleryPage() {
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
            { name: "Our Work", id: "/gallery" },
            { name: "Services", id: "/services" },
            { name: "Care Tips", id: "/care" },
            { name: "Contact", id: "/contact" },
          ]}
          brandName="Frankfurt Sofa & Carpet"
        />
        
        <div className="py-24 container mx-auto px-4">
          <ProductCardFour
            title="Our Project Gallery"
            description="Real results from our satisfied clients in West Chester and beyond."
            gridVariant="four-items-2x2-equal-grid"
            animationType="slide-up"
            useInvertedBackground={false}
            products={[
                { id: "g1", name: "Restored Leather Sofa", price: "Deep Clean", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png" },
                { id: "g2", name: "Office Carpet Refresh", price: "Stain Treatment", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png" },
            ]}
            textboxLayout="default"
          />
        </div>

        <FooterSimple
          columns={[
            { title: "Connect", items: [{ label: "Facebook", href: "https://facebook.com/frankfurtcleaning" }, { label: "Instagram", href: "#" }] },
            { title: "Contact Us", items: [{ label: "Call: (484) 845-4829", href: "tel:4848454829" }, { label: "SMS: (484) 845-4829", href: "sms:4848454829" }, { label: "Email: info@frankfurtcleaning.com", href: "mailto:info@frankfurtcleaning.com" }] },
            { title: "Service Area", items: [{ label: "West Chester, PA" }, { label: "Serving Surrounding Counties" }] }
          ]}
          bottomLeftText="© 2025 Frankfurt Sofa & Carpet"
          bottomRightText="Licensed & Insured"
          className="py-12"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}