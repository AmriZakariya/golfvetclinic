<template>
    <div :dir="direction" :lang="locale" class="brand-shell min-h-screen">
        <Head>
            <title>{{ seo.title }}</title>
            <meta name="description" :content="seo.description" />
            <meta name="keywords" :content="seo.keywords" />
            <meta property="og:title" :content="seo.title" />
            <meta property="og:description" :content="seo.description" />
            <meta property="og:type" content="website" />
            <meta property="og:url" :content="canonicalUrl" />
            <meta property="og:image" :content="brand.logo" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" :content="seo.title" />
            <meta name="twitter:description" :content="seo.description" />
            <link rel="canonical" :href="canonicalUrl" />
        </Head>

        <div v-if="flash?.success" class="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-primary-soft)] px-4 py-3 text-center text-sm font-medium text-[color:var(--brand-primary-strong)]">
            {{ flash.success }}
        </div>

        <div class="relative overflow-hidden border-b border-[color:var(--brand-border)] bg-[color:var(--brand-surface-strong)]">
            <div class="brand-mesh"></div>

            <div class="relative mx-auto max-w-7xl px-4 py-3 lg:px-6">
                <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--brand-muted)]">
                    <div class="flex flex-wrap items-center gap-3 md:gap-5">
                        <span class="inline-flex items-center gap-2">
                            <PhoneIcon class="h-4 w-4 text-[color:var(--brand-primary)]" />
                            {{ brand.phoneDisplay }}
                        </span>
                        <span class="inline-flex items-center gap-2">
                            <MapPinIcon class="h-4 w-4 text-[color:var(--brand-primary)]" />
                            {{ brand.address }}
                        </span>
                    </div>

                    <div class="hidden items-center gap-2 md:flex">
                        <span class="brand-chip">{{ text.clinicTag }}</span>
                        <a
                            :href="brand.whatsappHref"
                            target="_blank"
                            rel="noreferrer"
                            class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110"
                            style="background:#25D366;"
                        >
                            <WhatsAppIcon class="h-4 w-4" />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <header class="sticky top-0 z-40 px-4 py-4 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="brand-glass rounded-[28px] px-4 py-4 md:px-5">
                    <div class="flex items-center justify-between gap-4">
                        <Link :href="homeHref" class="flex min-w-0 items-center gap-4">
                            <div class="brand-logo-frame h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--brand-border)] p-1">
                                <img :src="brand.logo" :alt="brand.name" class="h-full w-full rounded-xl object-cover" />
                            </div>
                            <div class="min-w-0">
                                <p class="truncate text-xs uppercase tracking-[0.3em] text-[color:var(--brand-primary)]">{{ brand.name }}</p>
                                <p class="truncate text-sm text-[color:var(--brand-muted)]">{{ text.layout.subtitle }}</p>
                            </div>
                        </Link>

                        <nav class="hidden items-center gap-1 xl:flex">
                            <Link
                                v-for="item in navItems"
                                :key="item.key"
                                :href="item.href"
                                class="rounded-full px-4 py-2 text-sm transition"
                                :class="item.active ? 'bg-[color:var(--brand-primary)] font-semibold text-white shadow-lg shadow-[color:var(--brand-shadow)]' : 'text-[color:var(--brand-muted)] hover:bg-[color:var(--brand-primary-soft)] hover:text-[color:var(--brand-primary)]'"
                            >
                                {{ item.label }}
                            </Link>
                        </nav>

                        <div class="hidden items-center gap-3 xl:flex">
                            <div class="flex items-center gap-1 rounded-full border border-[color:var(--brand-border)] bg-white/80 p-1">
                                <Link
                                    v-for="item in localeItems"
                                    :key="item.code"
                                    :href="item.href"
                                    class="rounded-full px-3 py-1.5 text-xs font-semibold transition"
                                    :class="item.code === locale ? 'bg-[color:var(--brand-secondary)] text-white' : 'text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]'"
                                >
                                    {{ item.label }}
                                </Link>
                            </div>

                            <Link :href="emergencyHref" class="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-secondary)] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand-shadow)] transition hover:bg-[color:var(--brand-primary)]">
                                <PhoneIcon class="h-4 w-4" />
                                {{ text.ctas.emergency }}
                            </Link>
                        </div>

                        <button
                            type="button"
                            class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white/80 text-[color:var(--brand-secondary)] xl:hidden"
                            @click="mobileOpen = !mobileOpen"
                        >
                            <span class="sr-only">menu</span>
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8">
                                <path d="M3 6h14M3 10h14M3 14h14" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div v-if="mobileOpen" class="mt-4 border-t border-[color:var(--brand-border)] pt-4 xl:hidden">
                        <div class="grid gap-2">
                            <Link
                                v-for="item in navItems"
                                :key="item.key"
                                :href="item.href"
                                class="rounded-2xl px-4 py-3 text-sm transition"
                                :class="item.active ? 'bg-[color:var(--brand-primary-soft)] font-semibold text-[color:var(--brand-primary)]' : 'text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-primary-soft)]'"
                                @click="mobileOpen = false"
                            >
                                {{ item.label }}
                            </Link>
                        </div>

                        <div class="mt-4 flex flex-wrap gap-2">
                            <Link
                                v-for="item in localeItems"
                                :key="item.code"
                                :href="item.href"
                                class="rounded-full border px-3 py-1.5 text-xs font-semibold"
                                :class="item.code === locale ? 'border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)] text-white' : 'border-[color:var(--brand-border)] bg-white text-[color:var(--brand-muted)]'"
                                @click="mobileOpen = false"
                            >
                                {{ item.nativeLabel }}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="relative">
            <slot />
        </main>

        <footer class="mt-24 px-4 pb-8 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="brand-gradient-panel overflow-hidden rounded-[36px] px-6 py-10 text-white lg:px-10">
                    <div class="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
                        <div class="space-y-5">
                            <div class="flex items-center gap-4">
                                <div class="brand-logo-frame h-16 w-16 overflow-hidden rounded-2xl border border-white/15 p-1">
                                    <img :src="brand.logo" :alt="brand.name" class="h-full w-full rounded-xl object-cover" />
                                </div>
                                <div>
                                    <p class="text-xs uppercase tracking-[0.32em] text-white/70">{{ brand.name }}</p>
                                    <p class="text-sm text-white/70">{{ text.layout.subtitle }}</p>
                                </div>
                            </div>
                            <h2 class="max-w-xl text-3xl font-semibold leading-tight">
                                {{ text.layout.footerLead }}
                            </h2>
                            <p class="max-w-xl text-sm leading-7 text-white/70">
                                {{ text.layout.footerNote }}
                            </p>
                        </div>

                        <div class="space-y-4">
                            <p class="text-xs uppercase tracking-[0.24em] text-white/60">{{ text.ctas.explore }}</p>
                            <div class="grid gap-2">
                                <Link
                                    v-for="item in navItems"
                                    :key="`footer-${item.key}`"
                                    :href="item.href"
                                    class="text-sm text-white/75 transition hover:text-white"
                                >
                                    {{ item.label }}
                                </Link>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <p class="text-xs uppercase tracking-[0.24em] text-white/60">{{ text.ctas.contact }}</p>
                            <a :href="brand.phoneHref" class="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
                                <PhoneIcon class="h-4 w-4" />
                                {{ brand.phoneDisplay }}
                            </a>
                            <br>
                            <a :href="brand.mapsHref" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
                                <MapPinIcon class="h-4 w-4" />
                                {{ brand.address }}
                            </a>
                            <p class="text-sm text-white/75">{{ brand.hours }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-3" :class="direction === 'rtl' ? 'right-auto left-4' : ''">
            <a
                :href="brand.whatsappHref"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:brightness-110"
                style="background:#25D366; box-shadow: 0 18px 40px -18px rgba(37, 211, 102, 0.9);"
            >
                <WhatsAppIcon class="h-4 w-4" />
                {{ text.ctas.whatsapp }}
            </a>
            <a :href="brand.phoneHref" class="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-secondary)] px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-[color:var(--brand-shadow)] transition hover:bg-[color:var(--brand-primary)]">
                <PhoneIcon class="h-4 w-4" />
                {{ text.ctas.call }}
            </a>
            <a :href="brand.mapsHref" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-border)] bg-white/92 px-5 py-3 text-xs font-semibold text-[color:var(--brand-secondary)] shadow-lg transition hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]">
                <MapPinIcon class="h-4 w-4" />
                {{ text.ctas.directions }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import { brand, getLocale, getMessage, localeMeta, localizePath, serviceLinks, supportedLocales, switchLocalePath } from '../lib/site';
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from '../components/icons';
import { getCanonicalUrl, getOrganizationSchema, getSeo } from '../lib/seo';

const mobileOpen = ref(false);
const page = usePage();
const locale = computed(() => getLocale(page.props.locale));
const flash = computed(() => page.props.flash ?? {});
const text = computed(() => getMessage(locale.value));
const direction = computed(() => localeMeta[locale.value]?.dir ?? 'ltr');
const seo = computed(() => getSeo(locale.value, page.url ?? '/'));
const canonicalUrl = computed(() => getCanonicalUrl(page.url ?? '/'));
const organizationSchema = computed(() => JSON.stringify(getOrganizationSchema()));

function isActivePath(targetHref) {
    const current = (page.url ?? '/').split('?')[0];
    const target = targetHref.split('?')[0];

    if (target === `/${locale.value}`) {
        return current === target;
    }

    return current === target || current.startsWith(`${target}/`);
}

const navItems = computed(() => [
    { key: 'home', href: localizePath(locale.value), label: text.value.nav.home, active: isActivePath(localizePath(locale.value)) },
    ...serviceLinks.map((item) => ({
        ...item,
        href: localizePath(locale.value, item.href),
        label: text.value.nav[item.key],
        active: isActivePath(localizePath(locale.value, item.href)),
    })),
]);

const localeItems = computed(() =>
    supportedLocales.map((code) => ({
        code,
        label: localeMeta[code].label,
        nativeLabel: localeMeta[code].nativeLabel,
        href: switchLocalePath(page.url ?? '/', code),
    })),
);

const homeHref = computed(() => localizePath(locale.value));
const emergencyHref = computed(() => localizePath(locale.value, '/ambulance-veterinaire-tanger'));

watchEffect(() => {
    document.documentElement.lang = locale.value;
    document.documentElement.dir = direction.value;
});

watchEffect(() => {
    if (typeof document === 'undefined') return;

    const id = 'organization-structured-data';
    let script = document.getElementById(id);

    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }

    script.textContent = organizationSchema.value;
});
</script>
