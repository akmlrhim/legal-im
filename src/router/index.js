import { createRouter, createWebHistory } from "vue-router";
import LegalView from "../views/LegalView.vue";
import NotFound from "../views/NotFound.vue";
import { defaultLocale, docKeyForSlug, docs, locales } from "../content/index.js";

const SCROLL_OFFSET = 88;

async function layoutSettled() {
  try {
    await document.fonts?.ready;
  } catch {}
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
}

const routes = [
  {
    path: "/",
    redirect: `/${defaultLocale}/${docs.privacy[defaultLocale].slug}`,
  },
  {
    path: `/:locale(${locales.join("|")})/:slug`,
    name: "legal",
    component: LegalView,
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  async scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior = reduced ? "auto" : "smooth";

    if (to.hash) {
      await layoutSettled();
      return { el: to.hash, top: SCROLL_OFFSET, behavior };
    }
    const isLanguageSwap =
      from.name === "legal" &&
      to.name === "legal" &&
      from.params.locale !== to.params.locale &&
      docKeyForSlug(from.params.slug, from.params.locale) === docKeyForSlug(to.params.slug, to.params.locale);

    if (isLanguageSwap) return false;

    return { top: 0 };
  },
});

export default router;
