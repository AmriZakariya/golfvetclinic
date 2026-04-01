<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 space-y-8">
            <header class="space-y-3">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Urgence vétérinaire · Ambulance
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Ambulance vétérinaire à Tanger, pour vos urgences 24/7.
                </h1>
                <p class="text-sm text-slate-300 max-w-2xl">
                    En cas de détresse respiratoire, accident ou comportement inhabituel grave, décrivez la situation
                    ci-dessous : notre équipe traite votre demande en priorité.
                </p>
            </header>

            <form class="max-w-xl space-y-4 rounded-2xl border border-red-900/40 bg-red-950/20 p-6" @submit.prevent="submit">
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Type d’animal</label>
                    <select v-model="form.animal_type" class="input-field">
                        <option>Chien</option>
                        <option>Chat</option>
                        <option>NAC</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Symptômes / situation</label>
                    <textarea v-model="form.symptoms" rows="4" required class="input-field" placeholder="Décrivez ce que vous observez…" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Localisation (quartier, adresse)</label>
                    <input v-model="form.location_text" type="text" required class="input-field" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Téléphone de contact</label>
                    <input v-model="form.phone" type="tel" required class="input-field" />
                </div>
                <button
                    type="submit"
                    class="w-full rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-400 disabled:opacity-60"
                    :disabled="form.processing"
                >
                    Envoyer la demande d’ambulance (urgence)
                </button>
            </form>
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

const submit = () => {
    form.post(`/${props.locale}/ambulance`);
};
</script>

<style scoped>
@reference "../../../css/app.css";

.input-field {
    @apply w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40;
}
</style>
