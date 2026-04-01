<template>
    <AppLayout>
        <section class="relative overflow-hidden">
            <div class="mx-auto max-w-6xl px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
                <div class="space-y-8">
                    <p class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium tracking-wide text-emerald-200 shadow-sm">
                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Clinique vétérinaire premium à Tanger
                    </p>

                    <div class="space-y-4">
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                            Le Golf PetCare,
                            <span class="text-emerald-300">référence vétérinaire</span>
                            pour vos compagnons à Tanger.
                        </h1>
                        <p class="text-sm sm:text-base text-slate-300 max-w-xl">
                            Soins vétérinaires complets, ambulance 24/7, pension sécurisée et toilettage professionnel
                            dans une clinique moderne, pensée pour le bien-être de votre animal et votre tranquillité
                            d’esprit.
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <a
                            href="#rdv"
                            class="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
                        >
                            Prendre rendez-vous
                        </a>
                        <Link
                            :href="`/${locale}/ambulance-veterinaire-tanger`"
                            class="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200 transition"
                        >
                            Urgence ambulance vétérinaire
                        </Link>
                    </div>

                    <dl class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                        <div class="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                            <dt class="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                                Disponibilité
                            </dt>
                            <dd class="mt-1 text-sm font-semibold text-slate-50">
                                Urgences vétérinaires 24/7
                            </dd>
                        </div>
                        <div class="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                            <dt class="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                                Services
                            </dt>
                            <dd class="mt-1 text-sm font-semibold text-slate-50">
                                Soins, pension, toilettage
                            </dd>
                        </div>
                        <div class="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                            <dt class="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">
                                Localisation
                            </dt>
                            <dd class="mt-1 text-sm font-semibold text-slate-50">
                                Quartier du Golf – Tanger
                            </dd>
                        </div>
                    </dl>
                </div>

                <div id="rdv" class="relative scroll-mt-24">
                    <div class="absolute -inset-10 bg-emerald-500/10 blur-3xl" />
                    <div class="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40 p-6 shadow-2xl shadow-emerald-500/20">
                        <h2 class="text-sm font-semibold text-slate-50 mb-4">
                            Demande de rendez-vous rapide
                        </h2>
                        <form
                            class="space-y-3"
                            @submit.prevent="submit"
                        >
                            <div>
                                <label class="block text-xs text-slate-400 mb-1">Nom & prénom</label>
                                <input
                                    type="text"
                                    class="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40"
                                    placeholder="Ex : Salma El Idrissi"
                                    v-model="form.name"
                                />
                            </div>
                            <div>
                                <label class="block text-xs text-slate-400 mb-1">Téléphone</label>
                                <input
                                    type="tel"
                                    class="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40"
                                    placeholder="+212 6 XX XX XX XX"
                                    v-model="form.phone"
                                />
                            </div>
                            <div class="grid grid-cols-2 gap-3">
                                <div>
                                    <label class="block text-xs text-slate-400 mb-1">Type d’animal</label>
                                    <select
                                        class="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40"
                                        v-model="form.animal_type"
                                    >
                                        <option>Chien</option>
                                        <option>Chat</option>
                                        <option>NAC</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-xs text-slate-400 mb-1">Date souhaitée</label>
                                    <input
                                        type="date"
                                        class="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40"
                                        v-model="form.desired_date"
                                    />
                                </div>
                            </div>
                            <div>
                                <label class="block text-xs text-slate-400 mb-1">Motif de la consultation</label>
                                <textarea
                                    rows="2"
                                    class="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40"
                                    placeholder="Vaccination, bilan de santé, chirurgie, urgence…"
                                    v-model="form.reason"
                                />
                            </div>
                            <button
                                type="submit"
                                class="w-full rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
                                :disabled="form.processing"
                            >
                                <span v-if="form.processing">Envoi en cours…</span>
                                <span v-else>Envoyer la demande de rendez-vous</span>
                            </button>
                            <p class="text-[0.7rem] text-slate-500">
                                Un membre de l’équipe vous rappelle rapidement pour confirmer l’horaire exact.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section v-if="testimonials?.length" class="mx-auto max-w-6xl px-4 pb-20">
            <h2 class="text-lg font-semibold text-slate-50 mb-6">Avis clients</h2>
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="t in testimonials"
                    :key="t.id"
                    class="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-sm text-slate-300"
                >
                    <p class="text-emerald-300 mb-2">{{ '★'.repeat(Number(t.rating) || 0) }}</p>
                    <p class="text-slate-200 mb-3">{{ t.content }}</p>
                    <p class="text-xs text-slate-500">— {{ t.client_name }}</p>
                </article>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    locale: {
        type: String,
        default: 'fr',
    },
    testimonials: {
        type: Array,
        default: () => [],
    },
});

const form = useForm({
    name: '',
    phone: '',
    animal_type: 'Chien',
    desired_date: '',
    reason: '',
});

const submit = () => {
    form.post(`/${props.locale}/rdv`, {
        onSuccess: () => {
            form.reset('phone', 'reason');
        },
    });
};
</script>


