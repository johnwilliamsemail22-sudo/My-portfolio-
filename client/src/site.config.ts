/**
 * All editable copy and links for the portfolio live here.
 * Change a value in this file and the whole site updates.
 */
export const site = {
  name: "Ahmed",
  role: "Web Designer & Developer",
  location: "Mombasa, Kenya",
  intro: {
    greeting: "Hello I'm",
    headline: "Ahmed",
    positioning: "I design websites that get noticed — and build brands that get chosen.",
  },
  about:
    "I combine design instinct with front-end craft to build websites that look considered and actually work. My focus is clarity, pace and personality — restaurant menus people can read on a phone, booking flows that do not lose customers, and brand pages that feel like the place they represent.",
  contact: {
    // WhatsApp is the primary contact channel.
    whatsapp: "https://wa.me/254743346161?text=Hi%20Ahmed%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  services: [
    {
      title: "Web Design &\nDevelopment",
      tone: "blue",
      caption: "Fast, responsive builds",
    },
    {
      title: "Brand Identity &\nVisuals",
      tone: "teal",
      caption: "Logo, palette, type",
    },
    {
      title: "Restaurant &\nHospitality Sites",
      tone: "pink",
      caption: "Menus, bookings, orders",
    },
    {
      title: "SEO &\nPerformance",
      tone: "orange",
      caption: "Speed and visibility",
    },
  ],
  projects: [
    {
      name: "Le Rêve Cafe",
      category: "Café · Brand & Website",
      location: "Malindi",
      image: "/assets/projects/lereve.webp",
      url: "https://lereve-cafe.vercel.app/",
      note: "A pastel, editorial café site with a full drinks menu and a strawberry-first hero.",
    },
    {
      name: "Bar Bar Malindi",
      category: "Restaurant · Website",
      location: "Malindi",
      image: "/assets/projects/barbar.webp",
      url: "https://barbarmalindi.vercel.app/",
      note: "Wood-fired pizza and coastal nights, sold through a photographic menu and reservations.",
    },
    {
      name: "MyHire & Rentals",
      category: "Car Hire · Web App",
      location: "Mombasa",
      image: "/assets/projects/hirecars.webp",
      url: "https://myhire-cars-msa.vercel.app/",
      note: "Coastal car hire with a live rate calculator, fleet detail and pickup selection.",
    },
    {
      name: "EME Fries",
      category: "Fast Food · Brand & Website",
      location: "Malindi",
      image: "/assets/projects/emefries.webp",
      url: "https://eme-fries.vercel.app/",
      note: "A playful fry-shop identity built around a circular food carousel and bold wordmark.",
    },
  ],
  archive: [
    { image: "/assets/projects/lereve.webp", label: "Le Rêve" },
    { image: "/assets/projects/barbar.webp", label: "Bar Bar" },
    { image: "/assets/projects/emefries.webp", label: "EME Fries" },
    { image: "/assets/projects/hirecars.webp", label: "MyHire" },
  ],
} as const;

export type Project = (typeof site.projects)[number];
