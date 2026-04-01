<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-4xl">
                <div class="flex items-center gap-3">
                    <span class="pulse-dot"></span>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-danger)">
                        Urgence vétérinaire · Ambulance 24/7
                    </p>
                </div>

                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Ambulance vétérinaire à Tanger — intervention rapide.
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    En cas de détresse respiratoire, d'accident ou de comportement inhabituel grave, décrivez la situation
                    ci-dessous. Notre équipe traite votre demande en priorité, 24h/24 et 7j/7.
                </p>

                <!-- Emergency quick-call -->
                <div class="mt-6 inline-flex items-center gap-3 rounded-2xl px-5 py-3" style="background: var(--brand-danger-soft); border: 1px solid var(--brand-danger-border)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--brand-danger); flex-shrink: 0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.89 5.89l1.67-1.67a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span class="text-sm font-semibold" style="color: var(--brand-danger)">Urgence critique ?</span>
                    <a href="tel:+212539376388" class="text-sm font-bold underline underline-offset-2 transition hover:opacity-80" style="color: var(--brand-danger)">
                        Appelez directement → +212 6 12 34 56 78
                    </a>
                </div>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_0.5fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">🚑</div>
                        <div>
                            <p class="text-sm font-semibold" style="color: var(--brand-ink)">Demande d'ambulance</p>
                            <p class="text-xs" style="color: var(--brand-muted)">Réponse en moins de 10 minutes</p>
                        </div>
                    </div>

                    <form class="space-y-5" @submit.prevent="submit">
                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Type d'animal
                            </label>
                            <select v-model="form.animal_type" class="brand-field">
                                <option>Chien</option>
                                <option>Chat</option>
                                <option>NAC</option>
                            </select>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Symptômes / situation <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <textarea
                                v-model="form.symptoms"
                                rows="4"
                                required
                                class="brand-field brand-field-danger"
                                placeholder="Décrivez ce que vous observez (comportement, blessure, respiration…)"
                            />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Localisation (quartier, adresse) <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <input v-model="form.location_text" type="text" required class="brand-field" placeholder="Ex : Quartier du Golf, Rue de Fès…" />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Téléphone de contact <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <input v-model="form.phone" type="tel" required class="brand-field" placeholder="+212 6 XX XX XX XX" />
                        </div>

                        <button
                            type="submit"
                            class="brand-btn-danger"
                            :disabled="form.processing"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                            </svg>
                            {{ form.processing ? 'Envoi en cours…' : 'Envoyer la demande d\'ambulance' }}
                        </button>
                    </form>
                </div>

                <!-- Side info -->
                <div class="space-y-4">
                    <article class="brand-card rounded-[24px] p-5">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">Signes d'urgence</p>
                        <ul class="mt-4 space-y-3">
                            <li v-for="sign in urgencySigns" :key="sign" class="flex items-start gap-2.5 text-sm leading-6" style="color: var(--brand-muted)">
                                <span class="mt-0.5 text-base" style="color: var(--brand-danger)">⚠</span>
                                {{ sign }}
                            </li>
                        </ul>
                    </article>

                    <article class="brand-card rounded-[24px] p-5">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">Disponibilité</p>
                        <p class="mt-3 text-2xl font-bold" style="color: var(--brand-ink)">24h / 7j</p>
                        <p class="mt-1 text-sm" style="color: var(--brand-muted)">Tanger et environs</p>
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
    animal_type: 'Chien',
    symptoms: '',
    location_text: '',
    phone: '',
});

const urgencySigns = [
    'Difficultés respiratoires sévères',
    'Perte de conscience ou convulsions',
    'Saignement abondant',
    'Ingestion de substances toxiques',
    'Traumatisme suite à un accident',
    'Incapacité à se lever ou à marcher',
];

const submit = () => {
    form.post(`/${props.locale}/ambulance`);
};
</script>
