<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    Communauté · Tanger
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    Animal perdu, trouvé ou témoignage 🐾
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    Publications modérées par l'équipe de la clinique. Merci de rester respectueux et précis pour
                    maximiser les chances de retrouver un animal.
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">

                <!-- Posts feed -->
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <h2 class="text-sm font-semibold" style="color: var(--brand-ink)">Publications récentes</h2>
                        <span class="text-xs" style="color: var(--brand-muted)">{{ posts.data?.length ?? 0 }} post(s)</span>
                    </div>

                    <div v-if="!posts.data?.length" class="brand-card rounded-[28px] p-10 text-center">
                        <p class="text-3xl">🐕</p>
                        <p class="mt-3 text-sm" style="color: var(--brand-muted)">Aucune publication pour le moment.</p>
                    </div>

                    <article
                        v-for="post in posts.data"
                        :key="post.id"
                        class="brand-card rounded-[24px] p-5"
                    >
                        <div class="mb-3 flex items-center justify-between gap-3">
                            <span
                                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                                :style="typeStyle(post.type)"
                            >
                                {{ typeIcon(post.type) }} {{ typeLabel(post.type) }}
                            </span>
                            <span class="text-xs" style="color: var(--brand-muted)">{{ post.posted_at }}</span>
                        </div>
                        <p class="text-sm leading-7 whitespace-pre-wrap" style="color: var(--brand-ink)">{{ post.description }}</p>
                        <div class="mt-4 flex flex-wrap gap-4 pt-3" style="border-top: 1px solid var(--brand-border)">
                            <p v-if="post.location_text" class="flex items-center gap-1.5 text-xs" style="color: var(--brand-muted)">
                                <span>📍</span> {{ post.location_text }}
                            </p>
                            <p class="flex items-center gap-1.5 text-xs" style="color: var(--brand-muted)">
                                <span>📞</span> {{ post.phone }}
                            </p>
                        </div>
                    </article>

                    <!-- Pagination -->
                    <div v-if="posts.links?.length > 3" class="flex flex-wrap gap-2 pt-2">
                        <Link
                            v-for="(link, i) in posts.links"
                            :key="i"
                            :href="link.url || '#'"
                            class="rounded-xl px-3.5 py-1.5 text-xs font-medium transition"
                            :style="link.active
                                ? 'background: var(--brand-primary); color: #fff;'
                                : 'background: var(--brand-surface); border: 1px solid var(--brand-border); color: var(--brand-muted);'"
                            v-html="link.label"
                        />
                    </div>
                </div>

                <!-- Publish form -->
                <div class="brand-card rounded-[28px] p-6">
                    <div class="mb-5 flex items-center gap-3">
                        <div class="brand-icon-badge">✏️</div>
                        <h2 class="text-sm font-semibold" style="color: var(--brand-ink)">Publier une annonce</h2>
                    </div>

                    <form class="space-y-4" @submit.prevent="submit">
                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Type d'annonce</label>
                            <select v-model="form.type" class="brand-field">
                                <option value="lost">🔍 Animal perdu</option>
                                <option value="found">🏠 Animal trouvé</option>
                                <option value="story">💬 Témoignage</option>
                            </select>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Description <span style="color: var(--brand-primary)">*</span></label>
                            <textarea
                                v-model="form.description"
                                rows="5"
                                required
                                class="brand-field"
                                placeholder="Décrivez l'animal, les circonstances, signalement…"
                            />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Localisation (optionnel)</label>
                            <input v-model="form.location_text" type="text" class="brand-field" placeholder="Quartier, rue…" />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">Téléphone <span style="color: var(--brand-primary)">*</span></label>
                            <input v-model="form.phone" type="tel" required class="brand-field" placeholder="+212 6 XX XX XX XX" />
                        </div>

                        <button
                            type="submit"
                            class="brand-btn-primary w-full rounded-2xl"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? 'Envoi…' : 'Envoyer pour modération' }}
                        </button>
                        <p class="text-xs leading-5 text-center" style="color: var(--brand-muted)">Votre publication sera visible après validation par notre équipe.</p>
                    </form>
                </div>
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

function typeIcon(t) {
    const m = { lost: '🔍', found: '🏠', story: '💬' };
    return m[t] || '🐾';
}

function typeStyle(t) {
    if (t === 'lost') return 'background: rgba(239,68,68,0.1); color: rgb(220,38,38);';
    if (t === 'found') return 'background: var(--brand-primary-soft); color: var(--brand-primary);';
    return 'background: var(--brand-panel); color: var(--brand-secondary);';
}

const submit = () => {
    form.post(`/${props.locale}/communaute`);
};
</script>
