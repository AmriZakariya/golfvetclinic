<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }} 🐾
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-start">

                <!-- Posts feed -->
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <h2 class="text-sm font-semibold" style="color: var(--brand-ink)">{{ content.feedTitle }}</h2>
                        <span class="text-xs" style="color: var(--brand-muted)">{{ posts.data?.length ?? 0 }} {{ content.posts }}</span>
                    </div>

                    <div v-if="!posts.data?.length" class="brand-card rounded-[28px] p-10 text-center">
                        <p class="text-3xl">🐕</p>
                        <p class="mt-3 text-sm" style="color: var(--brand-muted)">{{ content.empty }}</p>
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
                        <h2 class="text-sm font-semibold" style="color: var(--brand-ink)">{{ content.publishTitle }}</h2>
                    </div>

                    <form class="space-y-4" @submit.prevent="submit">
                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.typeLabel }}</label>
                            <select v-model="form.type" class="brand-field">
                                <option value="lost">🔍 {{ content.typeLost }}</option>
                                <option value="found">🏠 {{ content.typeFound }}</option>
                                <option value="story">💬 {{ content.typeStory }}</option>
                            </select>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.descriptionLabel }} <span style="color: var(--brand-primary)">*</span></label>
                            <textarea
                                v-model="form.description"
                                rows="5"
                                required
                                class="brand-field"
                                :placeholder="content.descriptionPlaceholder"
                            />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.locationLabel }}</label>
                            <input v-model="form.location_text" type="text" class="brand-field" :placeholder="content.locationPlaceholder" />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.phoneLabel }} <span style="color: var(--brand-primary)">*</span></label>
                            <input v-model="form.phone" type="tel" required class="brand-field" :placeholder="content.phonePlaceholder" />
                        </div>

                        <button
                            type="submit"
                            class="brand-btn-primary w-full rounded-2xl"
                            :disabled="form.processing"
                        >
                            {{ form.processing ? content.sending : content.submit }}
                        </button>
                        <p class="text-xs leading-5 text-center" style="color: var(--brand-muted)">{{ content.helper }}</p>
                    </form>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { getLocale } from '../../lib/site';

const props = defineProps({
    locale: { type: String, default: 'fr' },
    posts: { type: Object, required: true },
});

const locale = computed(() => getLocale(props.locale));
const contentByLocale = {
    fr: { eyebrow: 'Communaute · Tanger', title: 'Animal perdu, trouve ou temoignage', lead: "Publications moderees par l equipe de la clinique pour maximiser les chances de retrouver un animal.", feedTitle: 'Publications recentes', posts: 'post(s)', empty: 'Aucune publication pour le moment.', publishTitle: 'Publier une annonce', typeLabel: "Type d'annonce", typeLost: 'Animal perdu', typeFound: 'Animal trouve', typeStory: 'Temoignage', descriptionLabel: 'Description', descriptionPlaceholder: "Decrivez l animal, les circonstances, signalement...", locationLabel: 'Localisation (optionnel)', locationPlaceholder: 'Quartier, rue...', phoneLabel: 'Telephone', phonePlaceholder: '+212 6 XX XX XX XX', sending: 'Envoi...', submit: 'Envoyer pour moderation', helper: 'Votre publication sera visible apres validation par notre equipe.' },
    en: { eyebrow: 'Community · Tangier', title: 'Lost pet, found pet or story', lead: 'Posts are moderated by the clinic team to improve clarity and trust.', feedTitle: 'Recent posts', posts: 'post(s)', empty: 'No posts yet.', publishTitle: 'Publish a post', typeLabel: 'Post type', typeLost: 'Lost pet', typeFound: 'Found pet', typeStory: 'Story', descriptionLabel: 'Description', descriptionPlaceholder: 'Describe the animal, context and identifying details...', locationLabel: 'Location (optional)', locationPlaceholder: 'District, street...', phoneLabel: 'Phone', phonePlaceholder: '+212 6 XX XX XX XX', sending: 'Sending...', submit: 'Send for review', helper: 'Your post will appear after moderation by our team.' },
    ar: { eyebrow: 'المجتمع · طنجة', title: 'حيوان ضائع او موجود او شهادة', lead: 'يتم الاشراف على المنشورات من طرف العيادة لرفع الوضوح والثقة.', feedTitle: 'احدث المنشورات', posts: 'منشور', empty: 'لا توجد منشورات حاليا.', publishTitle: 'انشر اعلانا', typeLabel: 'نوع الاعلان', typeLost: 'حيوان ضائع', typeFound: 'حيوان موجود', typeStory: 'شهادة', descriptionLabel: 'الوصف', descriptionPlaceholder: 'صف الحيوان والظروف والعلامات...', locationLabel: 'الموقع (اختياري)', locationPlaceholder: 'الحي، الشارع...', phoneLabel: 'الهاتف', phonePlaceholder: '+212 6 XX XX XX XX', sending: 'جار الارسال...', submit: 'ارسال للمراجعة', helper: 'سيظهر منشورك بعد مراجعته من طرف فريقنا.' },
    es: { eyebrow: 'Comunidad · Tanger', title: 'Animal perdido, encontrado o testimonio', lead: 'Las publicaciones son moderadas por el equipo de la clinica para mejorar la confianza.', feedTitle: 'Publicaciones recientes', posts: 'publicacion(es)', empty: 'No hay publicaciones todavia.', publishTitle: 'Publicar un anuncio', typeLabel: 'Tipo de anuncio', typeLost: 'Animal perdido', typeFound: 'Animal encontrado', typeStory: 'Testimonio', descriptionLabel: 'Descripcion', descriptionPlaceholder: 'Describe el animal, el contexto y las senales...', locationLabel: 'Ubicacion (opcional)', locationPlaceholder: 'Barrio, calle...', phoneLabel: 'Telefono', phonePlaceholder: '+212 6 XX XX XX XX', sending: 'Enviando...', submit: 'Enviar para moderacion', helper: 'Tu publicacion aparecera despues de la validacion del equipo.' },
};
const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.fr);
const form = useForm({
    type: 'lost',
    description: '',
    location_text: '',
    phone: '',
});

function typeLabel(t) {
    const m = { lost: content.value.typeLost, found: content.value.typeFound, story: content.value.typeStory };
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
