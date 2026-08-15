/**
 * Client profile source of truth.
 * Sunlit Sanctuary design system: warm editorial healthcare, forest green,
 * saffron sunline accents, and local-specific but verified practice details.
 * Replace this file for each private client repository before its first push.
 */
import { HeartPulse, ScanLine, Sparkles } from "lucide-react";

export const clinicProfile = {
  slug: "riddhi-dental-adajan",
  workerName: "riddhi-dental-adajan",
  pageTitle: "Riddhi Dental Clinic & Implant Center | Adajan, Surat",
  fullName: "Riddhi Dental Clinic & Implant Center",
  shortName: "Riddhi",
  descriptor: "Dental Clinic & Implant Center",
  monogram: "RD",
  locationRibbon: "Adajan, Surat",
  locationEyebrow: "Adajan, Surat • Opp. Axis Bank",
  locationShort: "Find us in Adajan",
  mapLabel: "Adajan",
  phoneNumber: "+91 63526 86155",
  phoneHref: "tel:+916352686155",
  mapHref:
    "https://www.google.com/maps/place/Riddhi+Dental+Clinic+%26+Implant+Center/@21.2011161,72.7894545,17z",
  addressLines: [
    "Rutvan Apartment, Gangeshwar Mahadev Temple Rd,",
    "Opp. Axis Bank, Adajan Gam, Adajan,",
    "Surat, Gujarat 395009.",
  ],
  heroHeading: "Care that begins with a calmer conversation.",
  heroIntro:
    "A more reassuring way to arrive, ask questions, and take the next step for your dental health.",
  heroDetail: "Opposite Axis Bank, near Gangeshwar Mahadev Temple Road",
  heroNote: "Thoughtful dental care, close to home.",
  introStatement:
    "The best dental visit is not only about the appointment itself. It is about feeling heard before you ever sit in the chair.",
  visitHeading: "A visit should feel clear long before you arrive.",
  visitCopy:
    "Call the clinic to ask your questions and arrange the right time to come in. Your first connection should feel direct, simple, and personal.",
  visitAffirmation: "Ask before you decide.",
  footerLine: "Calm conversations. Thoughtful next steps.",
  assets: {
    logo: "/clinic-assets/riddhi-logo-mark.png",
    hero: "/clinic-assets/riddhi-hero-sunlit-clinic.webp",
    visit: "/clinic-assets/riddhi-treatment-smile.webp",
    detail: "/clinic-assets/riddhi-care-detail.webp",
  },
  carePaths: [
    {
      number: "01",
      label: "THE EVERYDAY VISIT",
      title: "The care that keeps life moving.",
      text: "For the questions, check-ins, and everyday dental needs that deserve a calm, considered conversation.",
      action: "Plan a visit",
      icon: HeartPulse,
      tone: "sage",
    },
    {
      number: "02",
      label: "THE SMILE CONVERSATION",
      title: "A more confident way to talk about your smile.",
      text: "Start with what you notice, what you hope for, and a clear discussion about the next appropriate step.",
      action: "Talk through options",
      icon: Sparkles,
      tone: "clay",
    },
    {
      number: "03",
      label: "RESTORATIVE & IMPLANT CARE",
      title: "When the next step feels bigger.",
      text: "Get guidance for restorative needs and implant-related conversations in a setting designed to feel unhurried.",
      action: "Ask about a consult",
      icon: ScanLine,
      tone: "forest",
    },
  ],
  questions: [
    {
      question: "Where is Riddhi Dental Clinic & Implant Center located?",
      answer:
        "The clinic is located at Rutvan Apartment on Gangeshwar Mahadev Temple Road, opposite Axis Bank, Adajan Gam, Surat 395009.",
    },
    {
      question: "How can I begin an appointment conversation?",
      answer:
        "Call the clinic directly at +91 63526 86155. The booking experience can be connected to the practice’s preferred system before launch.",
    },
    {
      question: "How can I get the details relevant to my visit?",
      answer:
        "Call the clinic directly at +91 63526 86155 to discuss your question and confirm the details relevant to your appointment.",
    },
  ],
};
