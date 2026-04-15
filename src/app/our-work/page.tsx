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
        <div id="nav">
          <NavbarStyleApple
            navItems={[
              { name: "Home", id: "/" },
              { name: "Our Work", id: "#work" },
              { name: "Services", id: "/services" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Frankfurt Sofa & Carpet"
          />
        </div>

        <div id="work" className="py-24">
          <ProductCardFour
            title="Our Transformation Gallery"
            description="Real results from our professional cleaning services. See the difference we make."
            gridVariant="four-items-2x2-equal-grid"
            animationType="slide-up"
            textboxLayout="split"
            products={[
              { id: "w1", name: "Sofa Restoration", price: "Deep Clean", variant: "Before/After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png" },
              { id: "w2", name: "Carpet Refresh", price: "Stain Removal", variant: "Before/After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png" },
              { id: "w3", name: "Upholstery Care", price: "Sanitization", variant: "Before/After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259227384-1001dc80.png" },
              { id: "w4", name: "Mattress Renewal", price: "Deep Clean", variant: "Before/After", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png" }
            ]}
          />
        </div>

        <div id="contact">
          <ContactCenter
            tag="Get Your Quote"
            title="Ready for a Cleaner Home?"
            description="Book your professional cleaning today."
            buttonText="Get Free Estimate"
          />
        </div>

        <div id="footer">
          <FooterMedia
            logoText="Frankfurt Sofa & Carpet"
            columns={[
              { title: "Direct Support", items: [{ label: "Call: (484) 845-4829", href: "tel:4848454829" }, { label: "Email: info@frankfurtcleaning.com", href: "mailto:info@frankfurtcleaning.com" }] },
              { title: "Quick Links", items: [{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }, { label: "Services", href: "/services" }, { label: "Book Now", href: "/contact" }] },
            ]}
            copyrightText="© 2025 Frankfurt Sofa & Carpet Cleaning. Licensed & Insured."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}