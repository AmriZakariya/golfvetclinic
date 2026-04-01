<template>
    <div class="min-h-screen flex flex-col bg-slate-950 text-slate-50">
        <div
            v-if="flash?.success"
            class="bg-emerald-500/15 border-b border-emerald-400/30 text-center text-sm text-emerald-100 py-2 px-4"
        >
            {{ flash.success }}
        </div>

        <header class="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <div class="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6">
                <Link :href="`/${locale}`" class="flex items-center gap-3">
                    <div class="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-semibold">
                        GP
                    </div>
                    <div>
                        <div class="text-sm uppercase tracking-[0.2em] text-emerald-300">
                            Le Golf PetCare
                        </div>
                        <div class="text-xs text-slate-400">
                            Clinique vétérinaire – Tanger
                        </div>
                    </div>
                </Link>

                <nav class="hidden md:flex items-center gap-6 text-sm text-slate-200">
                    <Link :href="`/${locale}`" class="hover:text-emerald-300 transition-colors">Accueil</Link>
                    <Link :href="`/${locale}/soins-veterinaires`" class="hover:text-emerald-300 transition-colors">Soins</Link>
                    <Link :href="`/${locale}/ambulance-veterinaire-tanger`" class="hover:text-emerald-300 transition-colors">Ambulance</Link>
                    <Link :href="`/${locale}/pension-animaux-tanger`" class="hover:text-emerald-300 transition-colors">Pension</Link>
                    <Link :href="`/${locale}/toilettage-chien-tanger`" class="hover:text-emerald-300 transition-colors">Toilettage</Link>
                    <Link :href="`/${locale}/boutique`" class="hover:text-emerald-300 transition-colors">Boutique</Link>
                    <Link :href="`/${locale}/communaute`" class="hover:text-emerald-300 transition-colors">Communauté</Link>
                    <Link :href="`/${locale}/contact-clinique-veterinaire-tanger`" class="hover:text-emerald-300 transition-colors">Contact</Link>
                </nav>

                <div class="flex items-center gap-2">
                    <Link
                        v-if="locale === 'fr'"
                        :href="`/en`"
                        class="hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-emerald-400/60"
                    >
                        EN
                    </Link>
                    <Link
                        v-else
                        :href="`/fr`"
                        class="hidden sm:inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-100 hover:border-emerald-400/60"
                    >
                        FR
                    </Link>
                    <Link
                        :href="`/${locale}/ambulance-veterinaire-tanger`"
                        class="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-4 py-1.5 text-xs font-medium text-slate-100 shadow-sm hover:border-emerald-400/60 hover:text-emerald-200 transition"
                    >
                        Urgence 24/7
                    </Link>
                </div>
            </div>
        </header>

        <main class="flex-1">
            <slot />
        </main>

        <footer class="border-t border-slate-800 bg-slate-950/90">
            <div class="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
                <div>
                    © {{ new Date().getFullYear() }} Le Golf PetCare – Clinique vétérinaire à Tanger.
                </div>
                <div class="flex flex-wrap gap-4">
                    <span>Urgence vétérinaire · Pension · Toilettage · Ambulance</span>
                </div>
            </div>
        </footer>

        <div class="fixed bottom-5 right-4 flex flex-col gap-3 z-40">
            <a
                href="https://wa.me/212612345678?text=Bonjour%2C%20je%20souhaite%20des%20informations%20pour%20mon%20animal."
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 transition"
            >
                WhatsApp
            </a>
            <a
                href="tel:+212612345678"
                class="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-50 border border-slate-700/80 shadow-lg hover:border-emerald-400/70 hover:text-emerald-200 transition"
            >
                Appeler la clinique
            </a>
            <a
                href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-xs font-medium text-slate-50 border border-slate-700/80 shadow-lg hover:border-emerald-400/70 hover:text-emerald-200 transition"
            >
                Itinéraire Google Maps
            </a>
        </div>
    </div>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const page = usePage();
const locale = computed(() => page.props.locale ?? 'fr');
const flash = computed(() => page.props.flash ?? {});
</script>
