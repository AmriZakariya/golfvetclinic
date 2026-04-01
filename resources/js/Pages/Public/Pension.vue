<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 space-y-8">
            <header class="space-y-3">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Pension animalière · Séjour
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Pension sécurisée pour chiens et chats, comme à la maison.
                </h1>
                <p class="text-sm text-slate-300 max-w-2xl">
                    Hébergement quotidien ou longue durée dans un environnement calme, propre et surveillé, avec sorties
                    régulières, alimentation adaptée et suivi vétérinaire sur place.
                </p>
            </header>

            <form class="max-w-xl space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6" @submit.prevent="submit">
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Nom du propriétaire</label>
                    <input v-model="form.owner_name" type="text" required class="input-field" />
                    <p v-if="form.errors.owner_name" class="text-xs text-red-400 mt-1">{{ form.errors.owner_name }}</p>
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Téléphone</label>
                    <input v-model="form.phone" type="tel" required class="input-field" />
                    <p v-if="form.errors.phone" class="text-xs text-red-400 mt-1">{{ form.errors.phone }}</p>
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Type d’animal</label>
                    <select v-model="form.animal_type" class="input-field">
                        <option>Chien</option>
                        <option>Chat</option>
                        <option>NAC</option>
                    </select>
                </div>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Date de début</label>
                        <input v-model="form.start_date" type="date" required class="input-field" />
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Date de fin</label>
                        <input v-model="form.end_date" type="date" required class="input-field" />
                    </div>
                </div>
                <div>
                    <label class="block text-xs text-slate-400 mb-1">Instructions particulières</label>
                    <textarea v-model="form.special_instructions" rows="3" class="input-field" placeholder="Alimentation, médicaments, habitudes…" />
                </div>
                <button
                    type="submit"
                    class="w-full rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-300 disabled:opacity-60"
                    :disabled="form.processing"
                >
                    Envoyer la demande de pension
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
    animal_type: 'Chien',
    start_date: '',
    end_date: '',
    special_instructions: '',
});

const submit = () => {
    form.post(`/${props.locale}/pension`);
};
</script>

<style scoped>
@reference "../../../css/app.css";

.input-field {
    @apply w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-600 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40;
}
</style>
