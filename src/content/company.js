export const company = {
  name: "Impost Media Indonesia",
  shortName: "Impost Media",
  legalName: "CV. Impost Media Indonesia",
  address: "Jl. Kawamara No.3, Landasan Ulin Tengah,Banjarbaru, Kalimantan Selatan 70724",
  email: "adm.impostmedia@gmail.com",
  phone: "+62 831-4780-2761",
  url: "https://www.impostmedia.com",

  updatedISO: "2026-08-25",

  services: {
    en: [
      "Content & Social Media Management",
      "Performance Marketing (Ads)",
      "Branding & Growth System",
      "Marketplace Optimisation",
      "Live Stream",
      "App & Website Development",
      "Customer Service",
      "CRM, Sales Pipeline & AI-assisted Customer Service",
      "Brand Foundation, Branding Guidelines & Logo",
      "Product Photography, Catalogue Photography & Event Documentation",
      "Forecasting & Growth",
    ],
    id: [
      "Content & Social Media Management",
      "Performance Marketing (Ads)",
      "Branding & Growth System",
      "Optimasi Marketplace",
      "Live Stream",
      "Pengembangan Aplikasi & Website",
      "Customer Service",
      "CRM, Sales Pipeline & CS berbasis AI",
      "Brand Foundation, Branding Guideline & Logo",
      "Foto Produk, Foto Katalog & Dokumentasi Event",
      "Forecasting & Growth",
    ],
  },

  processors: {
    hosting: "Hostinger, Cloudflare",
    analytics: "Google Analytics 4",
    email: "Brevo",
    advertising: "Meta Pixel, Google Ads",
  },

  retention: {
    enquiries: "24 bulan",
    accounting: "10 tahun",
    logs: "14 bulan",
  },

  terms: {
    minAge: "18",
    responseTime: "3 x 24 jam",
    negotiationDays: "30",
    liabilityCap: "IDR 10.000.000",
    prevailingLanguage: "Bahasa Indonesia",
  },

  jurisdiction: "Banjarbaru",
};

export function formatDate(iso, bcp47) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.valueOf())) return iso;
  return new Intl.DateTimeFormat(bcp47, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

const PLACEHOLDER = /\[[^\]]+\]/g;

export function hasPlaceholder(value) {
  return typeof value === "string" && PLACEHOLDER.test(value);
}

export function countPlaceholders(node = company) {
  if (typeof node === "string") return node.match(PLACEHOLDER)?.length ?? 0;
  if (node && typeof node === "object") {
    return Object.values(node).reduce((sum, v) => sum + countPlaceholders(v), 0);
  }
  return 0;
}
