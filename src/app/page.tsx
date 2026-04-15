"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
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
        { name: "Our Work", id: "/gallery" },
        { name: "Services", id: "services" },
        { name: "Care Tips", id: "care" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Frankfurt Sofa & Carpet"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "plain" }}
      title="Professional Sofa & Carpet Cleaning Near You"
      description="Deep cleaning, fast drying, same-day service available. Safe for kids and pets. Trusted quality in West Chester, PA."
      tag="Same-Day Service Available"
      buttons={[
        { text: "Call (484) 845-4829", href: "tel:4848454829" },
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png?_wi=2", imageAlt: "Clean living room interior" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259157995-3f6df573.png?_wi=2", imageAlt: "Sofa cleaning technician working" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5/5 by local residents"
      tagIcon={Sparkles}
      className="py-12 md:py-24"
    />
  </div>

  <div id="preview" data-section="preview">
      <ProductCardFour
      title="Transformative Results"
      description="See how we rejuvenate your upholstery and carpets. Professional-grade cleaning that brings your home back to life."
      useInvertedBackground={false}
      animationType="slide-up"
      gridVariant="four-items-2x2-equal-grid"
      products={[
        { id: "p1", name: "Before & After Sofa", price: "Full Restoration", variant: "Professional Cleaning", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png?_wi=3" },
        { id: "p2", name: "Carpet Deep Clean", price: "Stain Removal", variant: "Professional Cleaning", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png?_wi=2" },
      ]}
      textboxLayout="split-actions"
      className="py-16"
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Premium Sofa Cleaning", price: "Deep Clean & Protect", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259227384-1001dc80.png" },
        { id: "p2", name: "Total Carpet Care", price: "Restore & Sanitize", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png?_wi=3" },
        { id: "p3", name: "Mattress Hygiene", price: "Allergen Removal", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png?_wi=2" },
      ]}
      title="Expert Residential Care"
      description="From deep carpet restoration to fabric sanitization, we use eco-friendly technology to ensure a healthier, cleaner home environment for your family."
      className="py-16"
    />
  </div>

  <div id="care" data-section="care">
      <FeatureCardThree
        title="Furniture Care Tips"
        description="Simple steps to extend the lifespan of your upholstery between professional cleanings."
        animationType="slide-up"
        gridVariant="three-columns-all-equal-width"
        textboxLayout="default"
        useInvertedBackground={true}
        features={[
            { title: "Immediate Blotting", description: "Always blot spills immediately with a clean, dry cloth. Never rub the stain.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png?_wi=2" },
            { title: "Regular Vacuuming", description: "Vacuum your furniture weekly to remove loose dirt and dust that wears down fibers.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259227384-1001dc80.png" },
            { title: "Avoid Direct Sunlight", description: "Keep furniture away from direct sun to prevent fading and material breakdown.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png?_wi=2" }
        ]}
        className="py-16"
      />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{ variant: "plain" }}
      tag="Ready to Refresh?"
      title="Book Your Professional Cleaning"
      description="Your home deserves the best care. Secure your slot today—same-day service windows are limited!"
      buttonText="Get Free Estimate"
      className="py-16"
    />
  </div>

  <div id="footer" data-section="footer">
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
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}