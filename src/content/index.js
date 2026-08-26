import privacyEn from './privacy.en.js'
import privacyId from './privacy.id.js'
import termsEn from './terms.en.js'
import termsId from './terms.id.js'

export const locales = ['id', 'en']
export const defaultLocale = 'id'

export const docs = {
  privacy: { id: privacyId, en: privacyEn },
  terms: { id: termsId, en: termsEn },
}

export const docKeys = Object.keys(docs)

export function getDoc(docKey, locale) {
  return docs[docKey]?.[locale] ?? null
}

export function docKeyForSlug(slug, locale) {
  return docKeys.find((key) => docs[key][locale]?.slug === slug) ?? null
}

export function pathFor(docKey, locale) {
  return `/${locale}/${docs[docKey][locale].slug}`
}

export const ui = {
  id: {
    htmlLang: 'id-ID',
    nav: { privacy: 'Kebijakan Privasi', terms: 'Syarat & Ketentuan' },
    skipToContent: 'Lewati ke konten utama',
    updated: 'Terakhir diperbarui',
    backToTop: 'Kembali ke atas',
    switchTo: 'Baca dalam Bahasa Inggris',
    switchLabel: 'EN',
    currentLabel: 'ID',
    languageGroup: 'Pilihan bahasa',
    disclaimerTitle: 'Bukan nasihat hukum',
    draftTitle: 'Dokumen ini belum siap terbit',
    draftBody: (n) =>
      `${n} isian masih berupa placeholder, ditandai dengan garis putus-putus di sepanjang halaman. Lengkapi di src/content/company.js sebelum dipublikasikan.`,
    draftDismiss: 'Sembunyikan',
    otherDoc: 'Dokumen lainnya',
    footerNote: 'Dokumen hukum',
    print: 'Cetak',
  },
  en: {
    htmlLang: 'en',
    nav: { privacy: 'Privacy Policy', terms: 'Terms & Conditions' },
    skipToContent: 'Skip to main content',
    updated: 'Last updated',
    backToTop: 'Back to top',
    switchTo: 'Baca dalam Bahasa Indonesia',
    switchLabel: 'ID',
    currentLabel: 'EN',
    languageGroup: 'Language',
    disclaimerTitle: 'Not legal advice',
    draftTitle: 'This document is not ready to publish',
    draftBody: (n) =>
      `${n} values are still placeholders, marked with a dashed underline throughout. Fill them in at src/content/company.js before publishing.`,
    draftDismiss: 'Dismiss',
    otherDoc: 'Other document',
    footerNote: 'Legal documents',
    print: 'Print',
  },
}
