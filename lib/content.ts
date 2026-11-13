// All customer-facing copy, links, image paths and business data belong here.
export const WHATSAPP_GROUP_LINK = "REPLACE_ME";
export const ADDRESS_PLACEHOLDER = "Address to be confirmed";
export const TIMINGS_PLACEHOLDER = "Opening hours to be confirmed";
export const SITE_URL_PLACEHOLDER = "https://example.com";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_PLACEHOLDER;
export const content = {
  business: {
    name: "AUTOVANTA",
    wordmark: ["AUTO", "VANTA"],
    tagline: "Buy · Sell · Trade",
    owner: "Sudais Shah",
    established: 2025,
    phone: "923712298095",
    displayPhone: "+92 371 2298095",
    instagramHandle: "@autovanta_",
    instagramUrl: "https://instagram.com/autovanta_",
    promise: "Verified documents · No accidental cars",
    description:
      "Buy, sell and trade cars. Verified documents, no accidental cars, all makes and models.",
  },
  links: { group: WHATSAPP_GROUP_LINK, call: "tel:+923712298095" },
  messages: {
    join: "Assalam o Alaikum AUTOVANTA. Please add me to your WhatsApp group for daily car stock updates.",
    buy: "Assalam o Alaikum AUTOVANTA. I want to buy a car. Please share the available options.",
    sell: "Assalam o Alaikum AUTOVANTA. I want to sell my car.",
    trade: "Assalam o Alaikum AUTOVANTA. I want to trade or exchange my car.",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Recent Arrivals", href: "#recent-arrivals" },
    { label: "Sell Your Car", href: "#sell-your-car" },
    { label: "Contact", href: "#contact" },
  ],
  actions: {
    join: "Join WhatsApp Group",
    sell: "Sell Your Car",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "BUY · SELL · TRADE",
    lines: ["Buy or Sell Your Car", "With Complete Confidence"],
    description:
      "Verified documents. No accidental cars. All makes and models.",
    image: "/hero/cars.png",
    alt: "Silver BMW sedan photographed from the front outdoors",
  },
  images: {
    og: "/og.jpg",
    logo: "/brand/logo.jpg",
    cars: ["/cars/01.jpg", "/cars/02.jpg", "/cars/03.jpg", "/cars/04.jpg"],
    gallery: [
      "/gallery/01.jpg",
      "/gallery/02.jpg",
      "/gallery/03.jpg",
      "/gallery/04.jpg",
      "/gallery/05.jpg",
      "/gallery/06.jpg",
      "/gallery/07.jpg",
      "/gallery/08.jpg",
    ],
    supplied: [
      "/gallery/supplied-01.jpg",
      "/gallery/supplied-02.jpg",
      "/gallery/supplied-03.jpg",
      "/gallery/supplied-04.jpg",
    ],
  },
  // No unverified stock is published. Add approved car details here in Phase 3.
  arrivals: [1, 2, 3, 4].map((id) => ({
    id,
    name: "CAR_NAME_PLACEHOLDER",
    year: "YEAR_PLACEHOLDER",
    transmission: "TRANSMISSION_PLACEHOLDER",
    fuel: "FUEL_PLACEHOLDER",
    km: "KM_PLACEHOLDER",
    city: "CITY_PLACEHOLDER",
    image: `/cars/0${id}.jpg`,
    approved: false,
  })),
  quick: [
    { title: "I want to buy", message: "buy" },
    { title: "I want to sell", message: "sell" },
    { title: "I want to trade", message: "trade" },
  ],
  trust: [
    {
      title: "Verified Documents",
      body: "Every file checked before the car is shared.",
    },
    { title: "No Accidental Cars", body: "We refuse them, no exceptions." },
    { title: "All Makes & Models", body: "From small cars to SUVs." },
  ],
  labels: {
    services: "Our Services",
    photoPlaceholder: "Photo to be added",
    ask: "Ask on WhatsApp",
    close: "Close",
    menu: "Open navigation",
    previous: "Previous photo",
    next: "Next photo",
    image: "Open photo",
    specs: ["Transmission", "Fuel", "KM", "City"],
  },
  recent: {
    title: "Recent Arrivals",
    sub: "New cars land in our WhatsApp group every day.",
    empty: "See what is available today.",
    body: "Message us to join the group for car photos and full details.",
    button: "See Full Stock in WhatsApp Group",
    price: "Ask Price on WhatsApp",
  },
  why: {
    title: "Why People Buy From Us",
    sub: "Clear information, from the first message to the transfer.",
    items: [
      {
        title: "Documents Verified",
        body: "The paperwork matters. We check the file before sharing a car.",
      },
      {
        title: "No Accidental Cars",
        body: "A clear standard for every car we deal in.",
      },
      {
        title: "Honest Pricing",
        body: "Discuss the car and its price directly with us.",
      },
      {
        title: "Full Support Through Transfer",
        body: "We help with the paperwork through the transfer.",
      },
    ],
  },
  process: {
    title: "How It Works",
    sub: "Four steps, with a real conversation at each one.",
    items: [
      {
        title: "Join the WhatsApp group",
        body: "Message us to be added. See daily stock updates in the group.",
      },
      {
        title: "Pick the car you like",
        body: "Ask about the model that fits your needs.",
      },
      {
        title: "Inspect it with us",
        body: "See the car and review the details before deciding.",
      },
      {
        title: "Complete papers & drive home",
        body: "Complete the paperwork and transfer with our support.",
      },
    ],
  },
  sell: {
    title: "Selling Your Car? We Buy Directly.",
    sub: "Send us the details. Let’s talk about your car.",
    bullets: ["Fair price", "No commission games", "Instant decision"],
    submit: "Send Details on WhatsApp",
    note: "Your details open in WhatsApp for you to review and send.",
    required: "Please complete this field.",
    phoneError: "Enter a valid phone number.",
    yearError: "Enter a valid four-digit year.",
    numberError: "Enter a valid number.",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "model", label: "Make & Model", type: "text" },
      { name: "year", label: "Year", type: "number" },
      { name: "km", label: "KM Driven", type: "number" },
      { name: "city", label: "City", type: "text" },
      { name: "price", label: "Expected Price", type: "number" },
    ],
    message: "Assalam o Alaikum AUTOVANTA. I want to sell my car.",
  },
  gallery: {
    title: "From Our Showroom",
    sub: "Details, angles and a closer look.",
    items: [
      {
        src: "/gallery/supplied-01.jpg",
        alt: "Silver BMW sedan seen from the front outdoors",
      },
      {
        src: "/gallery/supplied-03.jpg",
        alt: "Silver BMW sedan seen from the rear outdoors",
      },
      {
        src: "/gallery/supplied-02.jpg",
        alt: "White sedan photographed inside a showroom",
      },
      {
        src: "/gallery/supplied-04.jpg",
        alt: "Silver BMW sedan rear lights at night",
      },
      ...[5, 6, 7, 8].map((id) => ({
        src: `/gallery/0${id}.jpg`,
        alt: "Gallery photo placeholder " + id,
      })),
    ],
  },
  cta: {
    title: "Our Stock Lives on WhatsApp",
    sub: "New arrivals posted daily with photos and full details.",
    join: "Join the Group",
    message: "Message Us",
    image: "/gallery/supplied-03.jpg",
    alt: "Silver BMW sedan rear three-quarter view",
    prefill:
      "Assalam o Alaikum AUTOVANTA. Please share details about your available car stock.",
  },
  footer: {
    description: "Buy, sell and trade. All makes and models.",
    quick: "Quick Links",
    services: "Services",
    contact: "Contact",
    serviceItems: ["Buy a Car", "Sell Your Car", "Trade & Exchange"],
    copyright: "© 2026 AUTOVANTA. All rights reserved.",
    credit: "Website by Auxio Agency",
    mobile: ["WhatsApp", "Call", "Instagram"],
  },
  ui: { owner: "Sudais Shah", established: "EST. 2025" },
  foundation: {
    label: "PHASE 01 / FOUNDATION",
    title: "A confident start.",
    description:
      "The AUTOVANTA design foundation is ready. Stock updates and group access are available on WhatsApp.",
    paletteTitle: "The AUTOVANTA palette",
    typographyTitle: "Clear words. Confident type.",
    typographyBody:
      "Sora headings. Inter body copy. Generous space and a clear next step.",
    cardTitle: "Verified documents",
    cardBody: "No accidental cars. All makes and models.",
    palette: [
      { name: "Signature red", value: "#E0342C" },
      { name: "Soft red", value: "#FDECEB" },
      { name: "Off-white", value: "#F7F5F2" },
      { name: "Ink", value: "#16161A" },
    ],
  },
  seo: {
    title: "AUTOVANTA | Buy · Sell · Trade",
    description:
      "Buy, sell and trade cars with AUTOVANTA. Verified documents. No accidental cars. Message us for WhatsApp group access.",
  },
} as const;
