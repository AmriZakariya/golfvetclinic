<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    Contact & localisation
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Clinique vétérinaire Le Golf · Tanger
                </h1>
                <p class="mt-3 max-w-xl text-base leading-7" style="color: var(--brand-muted)">
                    Retrouvez-nous dans le quartier du Golf à Tanger. Parking à proximité, accès facile
                    et prise en charge rapide de votre animal.
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">

                <!-- Contact info -->
                <div class="space-y-5">
                    <div class="brand-card rounded-[28px] p-7">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">
                            Nos coordonnées
                        </p>
                        <dl class="mt-5 space-y-5">
                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">📍</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Adresse</dt>
                                    <dd class="mt-1 text-sm leading-6" style="color: var(--brand-ink)">
                                        Quartier du Golf, Tanger<br />Maroc
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">📞</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Téléphone</dt>
                                    <dd class="mt-1">
                                        <a
                                            href="tel:+212612345678"
                                            class="text-sm font-semibold transition hover:opacity-80"
                                            style="color: var(--brand-ink)"
                                        >
                                            +212 6 12 34 56 78
                                        </a>
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">✉️</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Email</dt>
                                    <dd class="mt-1">
                                        <a
                                            href="mailto:contact@legolfpetcare.ma"
                                            class="text-sm font-semibold transition hover:opacity-80"
                                            style="color: var(--brand-ink)"
                                        >
                                            contact@legolfpetcare.ma
                                        </a>
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">🕐</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Horaires</dt>
                                    <dd class="mt-1 text-sm leading-6" style="color: var(--brand-ink)">
                                        Lun – Sam : 9h00 – 19h00<br />
                                        <span style="color: var(--brand-primary)">Urgences : 24h/24, 7j/7</span>
                                    </dd>
                                </div>
                            </div>
                        </dl>

                        <!-- CTA buttons -->
                        <div class="mt-7 flex flex-wrap gap-3">
                            <a href="tel:+212612345678" class="brand-btn-primary">
                                📞 Appeler
                            </a>
                            <a
                                href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                                target="_blank"
                                rel="noreferrer"
                                class="brand-btn-outline"
                            >
                                🗺 Itinéraire
                            </a>
                        </div>
                    </div>

                    <!-- Quick facts -->
                    <div class="grid gap-4 sm:grid-cols-2">
                        <article
                            v-for="fact in quickFacts"
                            :key="fact.title"
                            class="brand-card rounded-[22px] p-5"
                        >
                            <p class="text-lg">{{ fact.icon }}</p>
                            <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ fact.title }}</p>
                            <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ fact.text }}</p>
                        </article>
                    </div>
                </div>

                <!-- Map -->
                <div class="space-y-3">
                    <div class="brand-card overflow-hidden rounded-[28px] p-3">
                        <iframe
                            title="Clinique Vétérinaire Le Golf – Tanger"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-5.800!3d35.780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzQ4LjAiTiA1wrA0OCcyMC4wIlc!5e0!3m2!1sfr!2sma!4v1700000000000"
                            width="100%"
                            height="340"
                            style="border: 0; border-radius: 20px; display: block;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <a
                        href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                        target="_blank"
                        rel="noreferrer"
                        class="brand-btn-outline w-full"
                    >
                        Ouvrir dans Google Maps
                    </a>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';

const quickFacts = [
    { icon: '🅿️', title: 'Parking gratuit', text: 'Accès facile avec parking à proximité immédiate.' },
    { icon: '🐾', title: 'Tous animaux', text: 'Chiens, chats, NAC et animaux exotiques acceptés.' },
    { icon: '💉', title: 'Équipé', text: 'Imagerie, chirurgie, labo sur place.' },
    { icon: '🚑', title: 'Ambulance', text: 'Intervention à domicile sur appel 24h/24.' },
];
</script>
