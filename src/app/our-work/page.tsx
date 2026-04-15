"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

export default function OurWorkPage() {
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
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Frankfurt Sofa & Carpet"
          />
        </div>
        
        <div id="preview" data-section="preview">
          <ProductCardFour
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="uniform-all-items-equal"
            useInvertedBackground={false}
            title="Our Cleaning Results"
            description="Witness the transformative power of our professional cleaning services. From sofas to stairs, we restore quality."
            products={[
              { id: "w1", name: "Sofa Transformation", price: "Deep Clean", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259157995-3f6df573.png?_wi=1" },
              { id: "w2", name: "Carpet Restoration", price: "Full Removal", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png?_wi=1" },
              { id: "w3", name: "Mattress Sanitization", price: "Hygiene Boost", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png?_wi=1" },
              { id: "w4", name: "Staircase Renewal", price: "Deep Clean", variant: "Before & After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png?_wi=1" }
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            tag="Contact"
            title="Need Your Furniture Restored?"
            description="Contact us for a professional assessment and quote."
            buttonText="Get Quote"
            useInvertedBackground={true}
            background={{ variant: "plain" }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterMedia
            imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png?_wi=1"
            logoText="Frankfurt Sofa & Carpet Cleaning"
            columns={[
              { title: "Contact Us", items: [{ label: "Phone: (484) 845-4829", href: "tel:4848454829" }] },
              { title: "Navigation", items: [{ label: "Our Work", href: "/our-work" }, { label: "Contact", href: "/contact" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
