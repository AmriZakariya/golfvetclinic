<template>
    <AppLayout>
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    Soins vétérinaires · Tanger
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Soins complets pour chiens, chats et NAC <span aria-hidden="true">🩺</span>
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    Consultations générales, vaccination, imagerie, chirurgie, analyses de laboratoire et suivi
                    préventif dans une clinique moderne, équipée pour accueillir votre compagnon dans les meilleures
                    conditions.
                </p>

                <div class="mt-6 flex flex-wrap gap-3">
                    <a href="#appointment" class="brand-btn-primary">Prendre rendez-vous</a>
                </div>
            </div>
        </section>

        <section class="px-4 pt-12 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">Nos prestations</p>
                <h2 class="mt-3 text-2xl font-semibold" style="color: var(--brand-ink)">Une prise en charge globale</h2>

                <div class="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    <article
                        v-for="service in services"
                        :key="service.title"
                        class="brand-card brand-card-hover rounded-[26px] p-6 h-full flex flex-col"
                    >
                        <div class="mb-4 flex items-center gap-3">
                            <div class="brand-icon-badge" aria-hidden="true">{{ service.icon }}</div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">
                                {{ service.category }}
                            </p>
                        </div>
                        <h3 class="text-base font-semibold" style="color: var(--brand-ink)">{{ service.title }}</h3>
                        <p class="mt-2 text-sm leading-6 flex-grow" style="color: var(--brand-muted)">{{ service.description }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 pt-14 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <div class="brand-card rounded-[32px] p-8 lg:p-10">
                    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">Pourquoi nous choisir</p>
                            <h2 class="mt-3 text-2xl font-semibold leading-snug" style="color: var(--brand-ink)">
                                Une équipe passionnée au service de votre animal
                            </h2>
                            <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">
                                La Clinique Vétérinaire Le Golf réunit des praticiens expérimentés dans un espace
                                moderne, pensé pour réduire le stress de votre compagnon lors de chaque visite.
                            </p>
                        </div>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div
                                v-for="item in whyUs"
                                :key="item.title"
                                class="rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1"
                                style="background: var(--brand-panel)"
                            >
                                <p class="text-2xl" aria-hidden="true">{{ item.icon }}</p>
                                <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ item.title }}</p>
                                <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-4 pt-14 pb-20 lg:px-6" id="appointment">
            <div class="mx-auto max-w-6xl">
                <div class="brand-card rounded-[32px] p-8 text-center">
                    <p class="text-4xl" aria-hidden="true">🐾</p>
                    <h2 class="mt-4 text-2xl font-semibold" style="color: var(--brand-ink)">
                        Prêt à prendre soin de votre compagnon ?
                    </h2>
                    <p class="mx-auto mt-3 max-w-lg text-sm leading-7" style="color: var(--brand-muted)">
                        Prenez rendez-vous depuis la page d'accueil ou appelez-nous directement. Nos vétérinaires
                        seront ravis de vous accueillir.
                    </p>
                    <div class="mt-6 flex flex-wrap justify-center gap-3">
                        <a href="/" class="brand-btn-primary">Prendre rendez-vous en ligne</a>
                        <a href="tel:+212539376388" class="brand-btn-outline"><span aria-hidden="true">📞</span> +212 5 39 37 63 88</a>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';

const services = [
    {
        icon: '🩺',
        category: 'Médecine générale',
        title: 'Consultation & diagnostic',
        description: 'Examen clinique complet, bilan de santé préventif et suivi des maladies chroniques.',
    },
    {
        icon: '💉',
        category: 'Prévention',
        title: 'Vaccination & antiparasitaires',
        description: 'Protocoles de vaccination adaptés et traitements préventifs contre puces, tiques et vers.',
    },
    {
        icon: '🔬',
        category: 'Laboratoire',
        title: 'Analyses de sang & urines',
        description: "Bilan sanguin, analyse d'urine et tests rapides pour un diagnostic précis en clinique.",
    },
    {
        icon: '📡',
        category: 'Imagerie',
        title: 'Radiographie & échographie',
        description: 'Imagerie médicale sur place pour un diagnostic rapide sans délai de transfert.',
    },
    {
        icon: '🔪',
        category: 'Chirurgie',
        title: 'Interventions chirurgicales',
        description: 'Stérilisation, extraction dentaire, chirurgie des tissus mous et suivi post-opératoire.',
    },
    {
        icon: '🦷',
        category: 'Dentisterie',
        title: 'Soins dentaires',
        description: 'Détartrage, extraction et hygiène bucco-dentaire pour prévenir les maladies parodontales.',
    },
    {
        icon: '💊',
        category: 'Pharmacie',
        title: 'Médicaments & prescriptions',
        description: 'Dispensation des médicaments vétérinaires et conseils de traitement personnalisés.',
    },
    {
        icon: '🐾',
        category: 'NAC & exotiques',
        title: 'Nouveaux animaux de compagnie',
        description: 'Prise en charge des lapins, rongeurs, oiseaux et reptiles par des praticiens formés.',
    },
    {
        icon: '🚑',
        category: 'Urgences',
        title: "Soins d'urgence 24h/24",
        description: 'Disponibilité permanente pour les urgences vitales, avec ambulance vétérinaire à domicile.',
    },
];

const whyUs = [
    { icon: '🏆', title: 'Expertise reconnue', text: 'Équipe diplômée avec spécialisation en médecine interne et chirurgie.' },
    { icon: '🏥', title: 'Équipements modernes', text: 'Matériel de diagnostic de pointe pour des résultats fiables.' },
    { icon: '❤️', title: 'Approche bienveillante', text: 'Médecine douce et réduction du stress pour chaque animal.' },
    { icon: '🌍', title: 'Multilingue', text: 'Consultation disponible en français, arabe et anglais.' },
];
</script>
