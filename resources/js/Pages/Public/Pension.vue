<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-5xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    Pension animalière · Séjour
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Pension sécurisée pour chiens et chats, comme à la maison 🏠
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    Hébergement quotidien ou longue durée dans un environnement calme, propre et surveillé, avec sorties
                    régulières, alimentation adaptée et suivi vétérinaire sur place.
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.45fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">🐾</div>
                        <div>
                            <p class="text-sm font-semibold" style="color: var(--brand-ink)">Réservation de pension</p>
                            <p class="text-xs" style="color: var(--brand-muted)">Confirmation par téléphone sous 2h</p>
                        </div>
                    </div>

                    <form class="space-y-5" @submit.prevent="submit">
                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Nom du propriétaire <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.owner_name" type="text" required class="brand-field" placeholder="Votre nom complet" />
                                <p v-if="form.errors.owner_name" class="mt-1.5 text-xs" style="color: var(--brand-danger)">{{ form.errors.owner_name }}</p>
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Téléphone <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.phone" type="tel" required class="brand-field" placeholder="+212 6 XX XX XX XX" />
                                <p v-if="form.errors.phone" class="mt-1.5 text-xs" style="color: var(--brand-danger)">{{ form.errors.phone }}</p>
                            </div>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Type d'animal
                            </label>
                            <div class="flex gap-3">
                                <label
                                    v-for="opt in animalOptions"
                                    :key="opt.value"
                                    class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border py-3 text-sm font-medium transition"
                                    :style="form.animal_type === opt.value
                                        ? 'background: var(--brand-primary-soft); border-color: var(--brand-primary); color: var(--brand-primary);'
                                        : 'border-color: var(--brand-border); color: var(--brand-muted); background: var(--brand-field-bg);'"
                                >
                                    <input v-model="form.animal_type" type="radio" :value="opt.value" class="sr-only" />
                                    {{ opt.icon }} {{ opt.label }}
                                </label>
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Date de début <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.start_date" type="date" required class="brand-field" />
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    Date de fin <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.end_date" type="date" required class="brand-field" />
                            </div>
                        </div>

                        <div v-if="stayDuration > 0" class="rounded-2xl px-5 py-3 text-sm" style="background: var(--brand-primary-soft); color: var(--brand-primary)">
                            🗓 Durée du séjour : <strong>{{ stayDuration }} nuit(s)</strong>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                Instructions particulières
                            </label>
                            <textarea
                                v-model="form.special_instructions"
                                rows="3"
                                class="brand-field"
                                placeholder="Alimentation, médicaments, habitudes, allergie…"
                            />
                        </div>

                        <button type="submit" class="brand-btn-primary w-full rounded-2xl py-3.5" :disabled="form.processing">
                            {{ form.processing ? 'Envoi en cours…' : 'Envoyer la demande de pension' }}
                        </button>
                    </form>
                </div>

                <!-- Side info -->
                <div class="space-y-4">
                    <article v-for="feature in features" :key="feature.title" class="brand-card rounded-[22px] p-5">
                        <p class="text-xl">{{ feature.icon }}</p>
                        <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ feature.title }}</p>
                        <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ feature.text }}</p>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';

const props = defineProps({
    locale: { type: String, default: 'fr' },
});

const form = useForm({
    owner_name: '',
    phone: '',
    animal_type: 'Chien',
    start_date: '',
    end_date: '',
    special_instructions: '',
});

const animalOptions = [
    { value: 'Chien', label: 'Chien', icon: '🐕' },
    { value: 'Chat', label: 'Chat', icon: '🐈' },
    { value: 'NAC', label: 'NAC', icon: '🐇' },
];

const stayDuration = computed(() => {
    if (!form.start_date || !form.end_date) return 0;
    const diff = new Date(form.end_date) - new Date(form.start_date);
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
});

const features = [
    { icon: '🛌', title: 'Espaces séparés', text: 'Chiens et chats hébergés dans des zones distinctes et sécurisées.' },
    { icon: '🍽️', title: 'Alimentation adaptée', text: 'Rations personnalisées selon votre animal.' },
    { icon: '🏃', title: 'Sorties quotidiennes', text: 'Promenades et stimulation pour les chiens.' },
    { icon: '🩺', title: 'Suivi vétérinaire', text: 'Un vétérinaire sur place en cas de besoin.' },
];

const submit = () => {
    form.post(`/${props.locale}/pension`);
};
</script>
