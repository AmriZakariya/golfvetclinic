<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 space-y-8">
            <header class="space-y-3">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Toilettage · Bien-être
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Toilettage professionnel pour chiens et chats, tout en douceur.
                </h1>
                <p class="text-sm text-slate-300 max-w-2xl">
                    Bain, coupe, démêlage, trimming, soins des oreilles et des griffes dans un espace dédié, pensé pour
                    réduire le stress de votre animal.
                </p>
            </header>

            <form class="max-w-xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6" @submit.prevent="submit">
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Nom du propriétaire</label>
                    <input v-model="form.owner_name" type="text" required class="input-field" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Téléphone</label>
                    <input v-model="form.phone" type="tel" required class="input-field" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Race</label>
                    <input v-model="form.breed" type="text" required class="input-field" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Poids (kg)</label>
                    <input v-model="form.weight_kg" type="number" step="0.1" min="0" class="input-field" />
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Type de prestation</label>
                    <select v-model="form.service_type" class="input-field">
                        <option>Bain & brushing</option>
                        <option>Coupe complète</option>
                        <option>Démêlage</option>
                        <option>Forfait premium</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Date souhaitée</label>
                    <input v-model="form.preferred_date" type="date" class="input-field" />
                </div>
                <button
                    type="submit"
                    class="w-full rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300 disabled:opacity-60"
                    :disabled="form.processing"
                >
                    Envoyer la demande
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
    owner_name: '',
    phone: '',
    breed: '',
    weight_kg: '',
    service_type: 'Bain & brushing',
    preferred_date: '',
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        weight_kg: data.weight_kg === '' ? null : Number(data.weight_kg),
    })).post(`/${props.locale}/toilettage`);
};
</script>

<style scoped>
@reference "../../../css/app.css";

.input-field {
    @apply w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40;
}
</style>
