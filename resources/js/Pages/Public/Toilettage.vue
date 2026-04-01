<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-5xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    Toilettage · Bien-être
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Toilettage professionnel pour chiens et chats ✂️
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    Bain, coupe, démêlage, trimming, soins des oreilles et des griffes dans un espace dédié,
                    pensé pour réduire le stress de votre animal.
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.5fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">✂️</div>
                        <div>
                            <p class="text-sm font-semibold" style="color: var(--brand-ink)">Réservation toilettage</p>
                            <p class="text-xs" style="color: var(--brand-muted)">Confirmation sous 24h</p>
                        </div>
                    </div>

                    <form class="space-y-5" @submit.prevent="submit">
                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Nom du propriétaire <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.owner_name" type="text" required class="brand-field" placeholder="Votre nom" />
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Téléphone <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.phone" type="tel" required class="brand-field" placeholder="+212 6 XX XX XX XX" />
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Race <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.breed" type="text" required class="brand-field" placeholder="Golden Retriever, Persan…" />
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Poids (kg)
                                </label>
                                <input v-model="form.weight_kg" type="number" step="0.1" min="0" class="brand-field" placeholder="Ex : 8.5" />
                            </div>
                        </div>

                        <!-- Service selector -->
                        <div>
                            <label class="mb-2 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Type de prestation
                            </label>
                            <div class="grid gap-3 sm:grid-cols-2">
                                <label
                                    v-for="svc in serviceOptions"
                                    :key="svc.value"
                                    class="flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition"
                                    :style="form.service_type === svc.value
                                        ? 'background: var(--brand-primary-soft); border-color: var(--brand-primary);'
                                        : 'border-color: var(--brand-border); background: var(--brand-field-bg);'"
                                >
                                    <input v-model="form.service_type" type="radio" :value="svc.value" class="sr-only" />
                                    <span class="text-xl">{{ svc.icon }}</span>
                                    <div>
                                        <p class="text-sm font-semibold" style="color: var(--brand-ink)">{{ svc.label }}</p>
                                        <p class="text-xs" style="color: var(--brand-muted)">{{ svc.description }}</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Date souhaitée
                            </label>
                            <input v-model="form.preferred_date" type="date" class="brand-field" />
                        </div>

                        <button type="submit" class="brand-btn-primary w-full rounded-2xl py-3.5" :disabled="form.processing">
                            {{ form.processing ? 'Envoi en cours…' : 'Envoyer la demande de toilettage' }}
                        </button>
                    </form>
                </div>

                <!-- Info sidebar -->
                <div class="space-y-4">
                    <article v-for="info in sideInfos" :key="info.title" class="brand-card rounded-[22px] p-5">
                        <p class="text-xl">{{ info.icon }}</p>
                        <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ info.title }}</p>
                        <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ info.text }}</p>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    locale: { type: String, default: 'fr' },
});

const form = useForm({
    owner_name: '',
    phone: '',
    breed: '',
    weight_kg: '',
    service_type: 'Bain & brushing',
    preferred_date: '',
});

const serviceOptions = [
    {
        value: 'Bain & brushing',
        icon: '🛁',
        label: 'Bain & brushing',
        description: 'Lavage, séchage, brossage et parfum.',
    },
    {
        value: 'Coupe complète',
        icon: '✂️',
        label: 'Coupe complète',
        description: 'Tonte ou coupe de race avec finitions.',
    },
    {
        value: 'Démêlage',
        icon: '🧶',
        label: 'Démêlage',
        description: 'Pour les pelages longs ou emmêlés.',
    },
    {
        value: 'Forfait premium',
        icon: '⭐',
        label: 'Forfait premium',
        description: 'Bain + coupe + soins oreilles & griffes.',
    },
];

const sideInfos = [
    { icon: '💆', title: 'Environnement zen', text: 'Espace calme, sans agressivité sonore, pour minimiser le stress.' },
    { icon: '🐾', title: 'Praticiens formés', text: 'Nos toiletteurs maîtrisent les spécificités de chaque race.' },
    { icon: '🧴', title: 'Produits doux', text: 'Shampooings dermatologiques adaptés à chaque type de peau.' },
    { icon: '🩺', title: 'Suivi santé', text: 'Contrôle des pattes, oreilles et peau à chaque session.' },
];

const submit = () => {
    form
        .transform((data) => ({
            ...data,
            weight_kg: data.weight_kg === '' ? null : Number(data.weight_kg),
        }))
        .post(`/${props.locale}/toilettage`);
};
</script>
