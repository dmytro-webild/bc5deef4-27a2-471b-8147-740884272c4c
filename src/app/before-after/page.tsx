"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function BeforeAfterPage() {
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
              { name: "Our Work", id: "/our-work" },
              { name: "Before & After", id: "/before-after" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Frankfurt Sofa & Carpet"
          />
        </div>

        <div id="gallery" data-section="gallery">
          <ProductCardFour
            title="Our Transformation Gallery"
            description="See the incredible results we achieve on every job. From tired sofas to dingy carpets, we restore your home's beauty."
            useInvertedBackground={false}
            animationType="slide-up"
            gridVariant="four-items-2x2-equal-grid"
            products={[
              { id: "sofa", name: "Sofa Restoration", price: "Deep Cleaned", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png?_wi=4" },
              { id: "carpet", name: "Carpet Renewal", price: "Stain Removed", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png?_wi=4" },
              { id: "mattress", name: "Mattress Cleaning", price: "Sanitized", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png?_wi=3" },
              { id: "stairs", name: "Staircase Carpeting", price: "Restored", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png?_wi=3" },
            ]}
            textboxLayout="split-description"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png?_wi=4"
            logoText="Frankfurt Sofa & Carpet Cleaning"
            columns={[
              { title: "Contact Us", items: [{ label: "Phone: (484) 845-4829", href: "tel:4848454829" }] },
              { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Before & After", href: "/before-after" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
