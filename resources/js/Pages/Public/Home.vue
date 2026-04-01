<template>
    <AppLayout>
        <section class="overflow-hidden px-4 pt-10 lg:px-6 lg:pt-14">
            <div class="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div class="space-y-8">
                    <div
                        class="inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] shadow-sm"
                        style="border: 1px solid var(--brand-border); background: var(--brand-surface); color: var(--brand-primary)"
                    >
                        <span class="h-2 w-2 rounded-full" style="background: var(--brand-primary)"></span>
                        {{ text.home.badge }}
                    </div>

                    <div class="space-y-5">
                        <h1 class="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl" style="color: var(--brand-ink)">
                            {{ text.home.title }}
                        </h1>
                        <p class="max-w-3xl text-lg leading-8" style="color: var(--brand-ink); opacity: 0.85">
                            {{ text.home.highlight }}
                        </p>
                        <p class="max-w-2xl text-base leading-8" style="color: var(--brand-muted)">
                            {{ text.home.lead }}
                        </p>
                    </div>

                    <div class="flex flex-wrap gap-3">
                        <a
                            href="#appointment"
                            class="brand-btn-primary"
                        >
                            {{ text.ctas.appointment }}
                        </a>
                        <Link
                            :href="localizePath(locale, '/ambulance-veterinaire-tanger')"
                            class="brand-btn-outline"
                        >
                            {{ text.ctas.emergency }}
                        </Link>
                        <Link
                            :href="localizePath(locale, '/contact-clinique-veterinaire-tanger')"
                            class="rounded-full px-6 py-3 text-sm font-semibold transition"
                            style="color: var(--brand-muted)"
                            onmouseover="this.style.color='var(--brand-primary)'"
                            onmouseout="this.style.color='var(--brand-muted)'"
                        >
                            {{ text.ctas.contact }}
                        </Link>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-3">
                        <article v-for="stat in stats" :key="stat.label" class="brand-card rounded-[28px] p-5">
                            <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ stat.label }}</p>
                            <p class="mt-3 text-base font-semibold" style="color: var(--brand-ink)">{{ stat.value }}</p>
                        </article>
                    </div>
                </div>

                <div class="relative" id="appointment">
                    <div class="brand-grid absolute inset-6 rounded-[32px] opacity-60"></div>
                    <div class="relative grid gap-4">
                        <div class="brand-card rounded-[32px] p-4 sm:p-5">
                            <div class="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                                <div class="brand-logo-frame overflow-hidden rounded-[28px] border p-2" style="border-color: var(--brand-border)">
                                    <img :src="brand.logo" :alt="brand.name" class="h-full min-h-[220px] w-full rounded-[22px] object-cover" />
                                </div>
                                <div class="rounded-[28px] p-6 text-white shadow-2xl" style="background: linear-gradient(160deg, rgba(31,61,75,0.98), rgba(31,61,75,0.84)); box-shadow: 0 24px 64px -16px rgba(31,61,75,0.35);">
                                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-accent)">
                                        {{ text.home.appointmentCardTitle }}
                                    </p>
                                    <h2 class="mt-3 text-2xl font-semibold">
                                        {{ text.ctas.appointment }}
                                    </h2>
                                    <p class="mt-3 text-sm leading-7" style="color: rgba(255,255,255,0.75)">
                                        {{ text.home.appointmentCardText }}
                                    </p>

                                    <form class="mt-5 space-y-3" @submit.prevent="submit">
                                        <div>
                                            <label class="mb-1 block text-xs uppercase tracking-[0.18em]" style="color: rgba(255,255,255,0.65)">{{ text.home.form.name }}</label>
                                            <input v-model="form.name" type="text" class="field-light" />
                                        </div>
                                        <div>
                                            <label class="mb-1 block text-xs uppercase tracking-[0.18em]" style="color: rgba(255,255,255,0.65)">{{ text.home.form.phone }}</label>
                                            <input v-model="form.phone" type="tel" class="field-light" />
                                        </div>
                                        <div class="grid gap-3 sm:grid-cols-2">
                                            <div>
                                                <label class="mb-1 block text-xs uppercase tracking-[0.18em]" style="color: rgba(255,255,255,0.65)">{{ text.home.form.animalType }}</label>
                                                <select v-model="form.animal_type" class="field-light">
                                                    <option value="dog">{{ animalLabels.dog }}</option>
                                                    <option value="cat">{{ animalLabels.cat }}</option>
                                                    <option value="other">{{ animalLabels.other }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label class="mb-1 block text-xs uppercase tracking-[0.18em]" style="color: rgba(255,255,255,0.65)">{{ text.home.form.date }}</label>
                                                <input v-model="form.desired_date" type="date" class="field-light" />
                                            </div>
                                        </div>
                                        <div>
                                            <label class="mb-1 block text-xs uppercase tracking-[0.18em]" style="color: rgba(255,255,255,0.65)">{{ text.home.form.reason }}</label>
                                            <textarea v-model="form.reason" rows="3" class="field-light"></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            class="w-full rounded-2xl px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                                            style="background: var(--brand-primary)"
                                            :disabled="form.processing"
                                        >
                                            {{ form.processing ? text.home.form.sending : text.home.form.submit }}
                                        </button>
                                        <p class="text-xs leading-6" style="color: rgba(255,255,255,0.65)">{{ text.home.form.helper }}</p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-3">
                            <article v-for="item in quickFacts" :key="item.title" class="brand-card rounded-[28px] p-5">
                                <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ item.title }}</p>
                                <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">{{ item.text }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-4 pt-20 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="max-w-3xl">
                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.servicesTitle }}</p>
                    <h2 class="mt-3 text-3xl font-semibold" style="color: var(--brand-ink)">{{ text.home.servicesText }}</h2>
                </div>

                <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <Link
                        v-for="service in serviceCards"
                        :key="service.key"
                        :href="service.href"
                        class="brand-card brand-card-hover group rounded-[30px] p-6 transition hover:-translate-y-1"
                    >
                        <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ service.eyebrow }}</p>
                        <h3 class="mt-4 text-xl font-semibold" style="color: var(--brand-ink)">{{ service.title }}</h3>
                        <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">{{ service.text }}</p>
                        <div class="mt-6 text-sm font-semibold" style="color: var(--brand-primary)">{{ text.ctas.explore }}</div>
                    </Link>
                </div>
            </div>
        </section>

        <section class="px-4 pt-20 lg:px-6">
            <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.trustTitle }}</p>
                    <h2 class="mt-3 text-3xl font-semibold" style="color: var(--brand-ink)">{{ text.home.trustText }}</h2>
                </div>

                <div class="grid gap-4">
                    <article v-for="item in trustItems" :key="item.title" class="brand-card rounded-[30px] p-6">
                        <h3 class="text-lg font-semibold" style="color: var(--brand-ink)">{{ item.title }}</h3>
                        <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">{{ item.text }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section v-if="testimonials.length" class="px-4 pt-20 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="max-w-3xl">
                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.testimonialsTitle }}</p>
                    <h2 class="mt-3 text-3xl font-semibold" style="color: var(--brand-ink)">{{ text.home.testimonialsText }}</h2>
                </div>

                <div class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <article v-for="item in testimonials" :key="item.id" class="brand-card rounded-[30px] p-6">
                        <p class="text-sm tracking-[0.28em]" style="color: var(--brand-primary)">{{ starText(item.rating) }}</p>
                        <p class="mt-4 text-base leading-8" style="color: var(--brand-ink)">{{ item.content }}</p>
                        <p class="mt-5 text-sm font-semibold" style="color: var(--brand-secondary)">{{ item.client_name }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 py-20 lg:px-6">
            <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.95fr]">
                <div class="brand-card overflow-hidden rounded-[34px] p-4">
                    <iframe
                        :src="brand.mapsEmbed"
                        class="h-[420px] w-full rounded-[26px] border-0"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div class="grid gap-5">
                    <article class="brand-card rounded-[34px] p-7">
                        <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.locationTitle }}</p>
                        <h2 class="mt-3 text-3xl font-semibold" style="color: var(--brand-ink)">{{ text.home.locationText }}</h2>
                        <div class="mt-6 grid gap-4">
                            <div class="rounded-[24px] p-5" style="background: var(--brand-panel)">
                                <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.location.cardTitle }}</p>
                                <dl class="mt-4 grid gap-4 text-sm" style="color: var(--brand-muted)">
                                    <div>
                                        <dt class="font-semibold" style="color: var(--brand-ink)">{{ text.home.location.addressLabel }}</dt>
                                        <dd class="mt-1">{{ brand.address }}</dd>
                                    </div>
                                    <div>
                                        <dt class="font-semibold" style="color: var(--brand-ink)">{{ text.home.location.hoursLabel }}</dt>
                                        <dd class="mt-1">{{ brand.hours }}</dd>
                                    </div>
                                    <div>
                                        <dt class="font-semibold" style="color: var(--brand-ink)">{{ text.home.location.phoneLabel }}</dt>
                                        <dd class="mt-1">{{ brand.phoneDisplay }}</dd>
                                    </div>
                                </dl>
                            </div>
                            <div class="flex flex-wrap gap-3">
                                <a :href="brand.phoneHref" class="brand-btn-primary">{{ text.ctas.call }}</a>
                                <a :href="brand.mapsHref" target="_blank" rel="noreferrer" class="brand-btn-outline">{{ text.ctas.directions }}</a>
                            </div>
                        </div>
                    </article>

                    <article class="brand-card rounded-[34px] p-7">
                        <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">{{ text.home.galleryTitle }}</p>
                        <h2 class="mt-3 text-3xl font-semibold" style="color: var(--brand-ink)">{{ text.home.galleryText }}</h2>
                        <div class="mt-6 grid gap-4 sm:grid-cols-[1fr_1fr]">
                            <div class="brand-logo-frame overflow-hidden rounded-[28px] border p-2" style="border-color: var(--brand-border)">
                                <img :src="brand.logo" :alt="brand.name" class="h-full min-h-[220px] w-full rounded-[22px] object-cover" />
                            </div>
                            <div class="grid gap-4">
                                <div class="rounded-[28px] p-5" style="background: var(--brand-panel)">
                                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">Palette</p>
                                    <div class="mt-4 flex gap-3">
                                        <span v-for="swatch in swatches" :key="swatch" class="h-12 w-12 rounded-2xl shadow-sm" style="border: 1px solid rgba(255,255,255,0.3)" :style="{ backgroundColor: swatch }"></span>
                                    </div>
                                </div>
                                <div class="rounded-[28px] p-5" style="background: var(--brand-panel-alt)">
                                    <p class="text-xs uppercase tracking-[0.24em]" style="color: var(--brand-primary)">Brand system</p>
                                    <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">
                                        Theme tokens and logo usage are centralized, so a future rebrand only needs a color and asset update instead of a full redesign.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import { brand, getLocale, getMessage, localizePath } from '../../lib/site';

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

const locale = computed(() => getLocale(props.locale));
const text = computed(() => getMessage(locale.value));

const animalLabels = computed(() => {
    if (locale.value === 'ar') return { dog: 'كلب', cat: 'قط', other: 'اخر' };
    if (locale.value === 'en') return { dog: 'Dog', cat: 'Cat', other: 'Other' };
    if (locale.value === 'es') return { dog: 'Perro', cat: 'Gato', other: 'Otro' };
    return { dog: 'Chien', cat: 'Chat', other: 'Autre' };
});

const form = useForm({
    name: '',
    phone: '',
    animal_type: 'dog',
    desired_date: '',
    reason: '',
});

const stats = computed(() => [
    { label: text.value.home.stats.emergency, value: brand.hours },
    { label: text.value.home.stats.location, value: brand.address },
    { label: text.value.home.stats.services, value: 'RDV · Ambulance · Pension · Toilettage' },
]);

const quickFacts = computed(() => [
    {
        title: 'SEO',
        text: 'Service pages and local wording are easier to structure for Tangier-focused search intent.',
    },
    {
        title: 'UX',
        text: 'Main actions stay visible immediately: book, call, WhatsApp and directions.',
    },
    {
        title: 'Brand',
        text: 'Logo, colors and atmosphere now feel consistent instead of generic.',
    },
]);

const serviceCards = computed(() => [
    {
        key: 'care',
        href: localizePath(locale.value, '/soins-veterinaires'),
        ...text.value.home.services.care,
    },
    {
        key: 'ambulance',
        href: localizePath(locale.value, '/ambulance-veterinaire-tanger'),
        ...text.value.home.services.ambulance,
    },
    {
        key: 'boarding',
        href: localizePath(locale.value, '/pension-animaux-tanger'),
        ...text.value.home.services.boarding,
    },
    {
        key: 'grooming',
        href: localizePath(locale.value, '/toilettage-chien-tanger'),
        ...text.value.home.services.grooming,
    },
    {
        key: 'shop',
        href: localizePath(locale.value, '/boutique'),
        ...text.value.home.services.shop,
    },
    {
        key: 'community',
        href: localizePath(locale.value, '/communaute'),
        ...text.value.home.services.community,
    },
]);

const trustItems = computed(() => text.value.home.trust);
const testimonials = computed(() => props.testimonials ?? []);
const swatches = ['#d76631', '#bd4c22', '#1f3d4b', '#cba16d', '#f4e1d5'];

const submit = () => {
    form.post(localizePath(locale.value, '/rdv'), {
        onSuccess: () => form.reset(),
    });
};

const starText = (rating) => '★'.repeat(Number(rating) || 0);
</script>

<style scoped>
@reference "../../../css/app.css";

.field-light {
    @apply w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[color:var(--brand-accent)] focus:outline-none focus:ring-1 focus:ring-[color:var(--brand-accent)];
}
</style>
