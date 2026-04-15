"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import ContactCenter from '@/components/sections/contact/ContactCenter';

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
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "/" },
            { name: "Our Work", id: "/our-work" },
            { name: "Contact", id: "/#contact" },
          ]}
          brandName="Frankfurt Sofa & Carpet"
        />

        <div className="pt-32 pb-16">
          <ProductCardFour
            title="Our Recent Work"
            description="See the transformative results we deliver for sofas, carpets, mattresses, and staircases."
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            useInvertedBackground={false}
            products={[
              { id: "w1", name: "Deep Sofa Refresh", price: "Living Room", variant: "Before & After Results", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259157995-3f6df573.png" },
              { id: "w2", name: "Carpet Restoration", price: "Bedroom", variant: "Before & After Results", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png" },
              { id: "w3", name: "Mattress Sanitization", price: "Master Bed", variant: "Before & After Results", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png" },
              { id: "w4", name: "Staircase Deep Clean", price: "Hallway", variant: "Before & After Results", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259269594-ac6c49db.png" },
            ]}
          />
        </div>

        <ContactCenter 
          title="Inspired to Clean?"
          description="Book your appointment today to see these results in your own home."
          background={{ variant: "plain" }}
        />

        <FooterMedia
          logoText="Frankfurt Sofa & Carpet Cleaning"
          columns={[
            { title: "Navigation", items: [{ label: "Home", href: "/" }, { label: "Our Work", href: "/our-work" }] },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}