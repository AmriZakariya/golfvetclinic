<template>
    <div :dir="direction" :lang="locale" class="brand-shell min-h-screen">
        <div
            v-if="flash?.success"
            class="border-b border-[color:var(--brand-border)] bg-[color:var(--brand-primary-soft)] px-4 py-3 text-center text-sm text-[color:var(--brand-primary-strong)]"
        >
            {{ flash.success }}
        </div>

        <header class="sticky top-0 z-40 border-b border-[color:var(--brand-border)] bg-[rgba(255,250,245,0.86)] backdrop-blur-xl">
            <div class="mx-auto max-w-7xl px-4 py-4 lg:px-6">
                <div class="flex items-center justify-between gap-4">
                    <Link :href="homeHref" class="flex min-w-0 items-center gap-3">
                        <div class="brand-logo-frame h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-[color:var(--brand-border)] p-1">
                            <img :src="brand.logo" :alt="brand.name" class="h-full w-full rounded-xl object-cover" />
                        </div>
                        <div class="min-w-0">
                            <p class="truncate text-xs uppercase tracking-[0.28em] text-[color:var(--brand-primary)]">
                                {{ brand.name }}
                            </p>
                            <p class="truncate text-sm text-[color:var(--brand-muted)]">
                                {{ text.layout.subtitle }}
                            </p>
                        </div>
                    </Link>

                    <nav class="hidden items-center gap-5 lg:flex">
                        <Link
                            v-for="item in navItems"
                            :key="item.key"
                            :href="item.href"
                            class="text-sm text-[color:var(--brand-muted)] transition hover:text-[color:var(--brand-primary)]"
                        >
                            {{ item.label }}
                        </Link>
                    </nav>

                    <div class="hidden items-center gap-3 lg:flex">
                        <div class="flex items-center gap-2 rounded-full border border-[color:var(--brand-border)] bg-white/70 px-2 py-1">
                            <Link
                                v-for="item in localeItems"
                                :key="item.code"
                                :href="item.href"
                                class="rounded-full px-3 py-1 text-xs font-semibold transition"
                                :class="item.code === locale ? 'bg-[color:var(--brand-primary)] text-white' : 'text-[color:var(--brand-muted)] hover:text-[color:var(--brand-primary)]'"
                            >
                                {{ item.label }}
                            </Link>
                        </div>

                        <Link
                            :href="emergencyHref"
                            class="rounded-full bg-[color:var(--brand-secondary)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[color:var(--brand-shadow)] transition hover:bg-[color:var(--brand-primary)]"
                        >
                            {{ text.ctas.emergency }}
                        </Link>
                    </div>

                    <button
                        type="button"
                        class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white/80 text-[color:var(--brand-secondary)] lg:hidden"
                        @click="mobileOpen = !mobileOpen"
                    >
                        <span class="sr-only">menu</span>
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path d="M3 6h14M3 10h14M3 14h14" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <div v-if="mobileOpen" class="brand-card mt-4 rounded-3xl p-4 lg:hidden">
                    <div class="grid gap-3">
                        <Link
                            v-for="item in navItems"
                            :key="item.key"
                            :href="item.href"
                            class="rounded-2xl px-4 py-3 text-sm text-[color:var(--brand-ink)] transition hover:bg-[color:var(--brand-primary-soft)]"
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
        </header>

        <main class="relative">
            <slot />
        </main>

        <footer class="mt-20 border-t border-[color:var(--brand-border)] bg-[rgba(255,250,245,0.82)]">
            <div class="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-6">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="brand-logo-frame h-16 w-16 overflow-hidden rounded-2xl border border-[color:var(--brand-border)] p-1">
                            <img :src="brand.logo" :alt="brand.name" class="h-full w-full rounded-xl object-cover" />
                        </div>
                        <div>
                            <p class="text-sm uppercase tracking-[0.28em] text-[color:var(--brand-primary)]">{{ brand.name }}</p>
                            <p class="text-sm text-[color:var(--brand-muted)]">{{ text.layout.subtitle }}</p>
                        </div>
                    </div>
                    <p class="max-w-xl text-sm leading-7 text-[color:var(--brand-muted)]">
                        {{ text.layout.footerLead }}
                    </p>
                    <p class="max-w-xl text-sm leading-7 text-[color:var(--brand-muted)]">
                        {{ text.layout.footerNote }}
                    </p>
                </div>

                <div class="space-y-3">
                    <p class="text-sm font-semibold text-[color:var(--brand-secondary)]">{{ text.ctas.explore }}</p>
                    <div class="grid gap-2">
                        <Link
                            v-for="item in navItems"
                            :key="`footer-${item.key}`"
                            :href="item.href"
                            class="text-sm text-[color:var(--brand-muted)] transition hover:text-[color:var(--brand-primary)]"
                        >
                            {{ item.label }}
                        </Link>
                    </div>
                </div>

                <div class="space-y-3">
                    <p class="text-sm font-semibold text-[color:var(--brand-secondary)]">{{ text.ctas.contact }}</p>
                    <a :href="brand.phoneHref" class="block text-sm text-[color:var(--brand-muted)] transition hover:text-[color:var(--brand-primary)]">
                        {{ brand.phoneDisplay }}
                    </a>
                    <a :href="brand.whatsappHref" target="_blank" rel="noreferrer" class="block text-sm text-[color:var(--brand-muted)] transition hover:text-[color:var(--brand-primary)]">
                        WhatsApp
                    </a>
                    <a :href="brand.mapsHref" target="_blank" rel="noreferrer" class="block text-sm text-[color:var(--brand-muted)] transition hover:text-[color:var(--brand-primary)]">
                        {{ brand.address }}
                    </a>
                    <p class="text-sm text-[color:var(--brand-muted)]">{{ brand.hours }}</p>
                </div>
            </div>
        </footer>

        <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-3" :class="direction === 'rtl' ? 'right-auto left-4' : ''">
            <a
                :href="brand.whatsappHref"
                target="_blank"
                rel="noreferrer"
                class="rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[color:var(--brand-shadow)] transition hover:bg-[color:var(--brand-primary-strong)]"
            >
                {{ text.ctas.whatsapp }}
            </a>
            <a
                :href="brand.phoneHref"
                class="rounded-full border border-[color:var(--brand-border)] bg-white/90 px-5 py-3 text-xs font-semibold text-[color:var(--brand-secondary)] shadow-lg transition hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]"
            >
                {{ text.ctas.call }}
            </a>
            <a
                :href="brand.mapsHref"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-[color:var(--brand-border)] bg-white/90 px-5 py-3 text-xs font-semibold text-[color:var(--brand-secondary)] shadow-lg transition hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]"
            >
                {{ text.ctas.directions }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { brand, getLocale, getMessage, localeMeta, localizePath, serviceLinks, supportedLocales, switchLocalePath } from '../lib/site';

const mobileOpen = ref(false);
const page = usePage();
const locale = computed(() => getLocale(page.props.locale));
const flash = computed(() => page.props.flash ?? {});
const text = computed(() => getMessage(locale.value));
const direction = computed(() => localeMeta[locale.value]?.dir ?? 'ltr');

const navItems = computed(() => [
    { key: 'home', href: localizePath(locale.value), label: text.value.nav.home },
    ...serviceLinks.map((item) => ({
        ...item,
        href: localizePath(locale.value, item.href),
        label: text.value.nav[item.key],
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
</script>
