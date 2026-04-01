<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 space-y-10">
            <header class="space-y-3">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Communauté · Tanger
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Animal perdu, trouvé ou témoignage
                </h1>
                <p class="text-sm text-slate-300 max-w-2xl">
                    Publications modérées par l’équipe de la clinique. Merci de rester respectueux et précis.
                </p>
            </header>

            <div class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                <div class="space-y-4">
                    <h2 class="text-sm font-semibold text-slate-200">Flux</h2>
                    <div v-if="!posts.data?.length" class="text-sm text-slate-500">Aucune publication pour le moment.</div>
                    <article
                        v-for="post in posts.data"
                        :key="post.id"
                        class="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
                    >
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <span class="text-xs font-medium text-emerald-300">{{ typeLabel(post.type) }}</span>
                            <span class="text-xs text-slate-500">{{ post.posted_at }}</span>
                        </div>
                        <p class="text-slate-200 whitespace-pre-wrap">{{ post.description }}</p>
                        <p v-if="post.location_text" class="text-xs text-slate-500 mt-2">📍 {{ post.location_text }}</p>
                        <p class="text-xs text-slate-500 mt-1">Contact : {{ post.phone }}</p>
                    </article>

                    <div v-if="posts.links?.length > 3" class="flex flex-wrap gap-2 pt-4">
                        <Link
                            v-for="(link, i) in posts.links"
                            :key="i"
                            :href="link.url || '#'"
                            class="px-3 py-1 rounded-lg text-xs border border-slate-700"
                            :class="link.active ? 'bg-emerald-500/20 border-emerald-500/50' : ''"
                            v-html="link.label"
                        />
                    </div>
                </div>

                <form class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 h-fit" @submit.prevent="submit">
                    <h2 class="text-sm font-semibold text-slate-200">Publier</h2>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Type</label>
                        <select v-model="form.type" class="fld">
                            <option value="lost">Animal perdu</option>
                            <option value="found">Animal trouvé</option>
                            <option value="story">Témoignage</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Description</label>
                        <textarea v-model="form.description" rows="5" required class="fld" />
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Localisation (optionnel)</label>
                        <input v-model="form.location_text" type="text" class="fld" />
                    </div>
                    <div>
                        <label class="block text-xs text-slate-400 mb-1">Téléphone</label>
                        <input v-model="form.phone" type="tel" required class="fld" />
                    </div>
                    <button
                        type="submit"
                        class="w-full rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 disabled:opacity-60"
                        :disabled="form.processing"
                    >
                        Envoyer pour modération
                    </button>
                </form>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    locale: { type: String, default: 'fr' },
    posts: { type: Object, required: true },
});

const form = useForm({
    type: 'lost',
    description: '',
    location_text: '',
    phone: '',
});

function typeLabel(t) {
    const m = { lost: 'Perdu', found: 'Trouvé', story: 'Témoignage' };
    return m[t] || t;
}

const submit = () => {
    form.post(`/${props.locale}/communaute`);
};
</script>

<style scoped>
@reference "../../../css/app.css";

.fld {
    @apply w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 focus:border-emerald-400/80 focus:outline-none focus:ring-1 focus:ring-emerald-400/40;
}
</style>
