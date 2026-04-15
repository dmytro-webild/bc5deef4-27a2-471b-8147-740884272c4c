"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Frankfurt Sofa & Carpet"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Professional Sofa & Carpet Cleaning Near You"
      description="Deep cleaning, fast drying, same-day service available. Safe for kids and pets. Trusted quality in West Chester, PA."
      tag="Same-Day Service Available"
      buttons={[
        {
          text: "Call (484) 845-4829",
          href: "tel:4848454829",
        },
        {
          text: "Text for Quote",
          href: "sms:4848454829",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259148092-8c8a71e0.png",
          imageAlt: "Clean living room interior",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259157995-3f6df573.png",
          imageAlt: "Sofa cleaning technician working",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259258967-23895b9e.png",
          imageAlt: "Deep cleaning equipment in action",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259248839-27a49415.png",
          imageAlt: "Rug cleaning result",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259269594-ac6c49db.png",
          imageAlt: "Carpet rejuvenation process",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Rated 5/5 by local residents"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Sofa & Sectional Cleaning",
          price: "Expert Care",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259227384-1001dc80.png",
        },
        {
          id: "p2",
          name: "Carpet & Area Rug Cleaning",
          price: "Deep Restoration",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259169495-a5b524bb.png",
        },
        {
          id: "p3",
          name: "Mattress Sanitization",
          price: "Hypo-Allergenic",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259239680-6f98eb71.png",
        },
        {
          id: "p4",
          name: "Pet Stain & Odor Removal",
          price: "Guaranteed",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259248839-27a49415.png",
        },
        {
          id: "p5",
          name: "Eco-Friendly Deep Cleaning",
          price: "Safe & Green",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/close-up-shot-of-professional-sofa-clean-1776259258967-23895b9e.png",
        },
        {
          id: "p6",
          name: "Furniture Restoration",
          price: "Revive Beauty",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259269594-ac6c49db.png",
        },
      ]}
      title="Our Premium Services"
      description="We specialize in restoring your home's furniture and floors using professional-grade, eco-friendly technology."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Deep Bacterial Build-up",
          "Unsafe Harsh Chemicals",
          "Long Drying Times",
          "Ineffective DIY Methods",
        ],
      }}
      positiveCard={{
        items: [
          "Professional Equipment",
          "Fast Drying Technology",
          "Eco-Friendly Solutions",
          "Satisfaction Guaranteed",
        ],
      }}
      title="Why Choose Frankfurt"
      description="We treat your home as our own, delivering results that extend the life of your furniture and carpets."
    />
  </div>

  <div id="education" data-section="education">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="The Science of Deep Cleaning"
      description="Dirt, dust mites, and bacteria build deep inside fibers. Regular vacuuming is not enough. Our professional deep extraction process removes contaminants that cause allergies and premature wear, ensuring a healthier home environment."
      bulletPoints={[
        {
          title: "Improved Air Quality",
          description: "Removes allergens trapped in deep fibers.",
        },
        {
          title: "Extended Life",
          description: "Prevents abrasive dirt from wearing down fabric.",
        },
        {
          title: "Healthier Environment",
          description: "Eliminates bacteria and household odors.",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/carpet-cleaning-technician-working-with--1776259282634-8dddd9b9.png"
      imageAlt="Educational carpet detail"
    />
  </div>

  <div id="care-tips" data-section="care-tips">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "c1",
          title: "Vacuuming Frequency",
          content: "Vacuum high-traffic areas at least twice weekly to prevent dirt accumulation.",
        },
        {
          id: "c2",
          title: "Immediate Spill Response",
          content: "Blot spills immediately with a clean, dry cloth—do not rub, as this can force the stain deeper.",
        },
        {
          id: "c3",
          title: "Avoid Excess Moisture",
          content: "Never use excessive water on furniture, which can cause mildew or backing damage.",
        },
        {
          id: "c4",
          title: "Professional Schedule",
          content: "Schedule professional cleaning every 6-12 months for homes with kids or pets.",
        },
      ]}
      title="Care & Prevention Tips"
      description="Maintain your cleaned surfaces longer with these simple habits."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/happy-residential-customer-in-a-clean-li-1776259177862-09f8c1dd.png",
        },
        {
          id: "t2",
          name: "Mike R.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/happy-residential-customer-standing-in-c-1776259187608-d52e2dc2.png",
        },
        {
          id: "t3",
          name: "Emily D.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/happy-senior-couple-in-a-well-kept-house-1776259197627-d4a92a32.png",
        },
        {
          id: "t4",
          name: "David L.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/young-family-playing-on-a-clean-rug-1776259209138-22dd6bd1.png",
        },
        {
          id: "t5",
          name: "Jessica M.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/happy-homeowner-standing-by-clean-furnit-1776259218340-e8459240.png",
        },
      ]}
      cardTitle="Loved by West Chester Residents"
      cardTag="Trusted Service"
      cardAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Ready to clean?"
      title="Get a Free Quote in Minutes"
      description="Call, text, or email us today. Same-day appointments available for West Chester and nearby areas."
      buttonText="Send Request"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNnjMXXku88iHFue8MKQx5vISJ/professional-interior-shot-of-a-clean-mo-1776259292528-eb0e2b92.png"
      logoText="Frankfurt Sofa & Carpet Cleaning"
      columns={[
        {
          title: "Contact Us",
          items: [
            {
              label: "Phone: (484) 845-4829",
              href: "tel:4848454829",
            },
            {
              label: "Text: (484) 845-4829",
              href: "sms:4848454829",
            },
            {
              label: "Email: frankfurtsofacleaning@gmail.com",
              href: "mailto:frankfurtsofacleaning@gmail.com",
            },
          ],
        },
        {
          title: "Location",
          items: [
            {
              label: "1014 S Chester Rd, West Chester, PA 19382",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Same-Day Service",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
