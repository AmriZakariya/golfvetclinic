<template>
    <AppLayout>
        <Head>
            <title>{{ text.layout.subtitle }}</title>
            <meta name="description" :content="text.home.lead" />
        </Head>

        <section class="overflow-hidden px-4 pt-10 lg:px-6 lg:pt-14">
            <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

                <div class="space-y-8 animate-fade-in-up">
                    <div
                        class="inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] shadow-sm bg-white border border-gray-100"
                        style="color: var(--brand-primary)"
                    >
                        <span class="h-2 w-2 rounded-full animate-pulse" style="background: var(--brand-primary)"></span>
                        {{ text.home.badge }}
                    </div>

                    <div class="space-y-6">
                        <h1 class="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-[#1f3d4b]">
                            {{ text.home.title }}
                        </h1>
                        <p class="max-w-3xl text-lg leading-relaxed text-[#1f3d4b]/80">
                            {{ text.home.highlight }}
                        </p>
                        <p class="max-w-2xl text-base leading-relaxed text-gray-500">
                            {{ text.home.lead }}
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-4">
                        <a
                            href="#appointment"
                            class="rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
                            style="background: var(--brand-primary)"
                        >
                            {{ text.ctas.appointment }}
                        </a>
                        <Link
                            :href="localizePath(locale, '/ambulance-veterinaire-tanger')"
                            class="rounded-full border-2 px-8 py-3 text-sm font-semibold transition-all hover:bg-gray-50"
                            style="border-color: var(--brand-primary); color: var(--brand-primary)"
                        >
                            {{ text.ctas.emergency }}
                        </Link>
                    </div>

                    <div class="grid gap-4 sm:grid-cols-3 pt-4 border-t border-gray-100">
                        <article v-for="stat in stats" :key="stat.label" class="p-2">
                            <p class="text-xs uppercase tracking-[0.2em] font-semibold" style="color: var(--brand-primary)">{{ stat.label }}</p>
                            <p class="mt-2 text-sm font-medium text-[#1f3d4b]">{{ stat.value }}</p>
                        </article>
                    </div>
                </div>

                <div class="relative w-full" id="appointment">
                    <div class="absolute inset-0 -m-6 rounded-[40px] opacity-10 bg-gradient-to-tr from-[#1f3d4b] to-transparent blur-2xl"></div>

                    <div class="relative rounded-[32px] p-8 text-white shadow-2xl bg-[#1f3d4b] border border-white/10">
                        <div class="mb-6">
                            <p class="text-xs uppercase tracking-[0.24em] text-[#cba16d]">
                                {{ text.home.appointmentCardTitle }}
                            </p>
                            <h2 class="mt-3 text-2xl font-semibold">
                                {{ text.ctas.appointment }}
                            </h2>
                            <p class="mt-2 text-sm leading-relaxed text-white/70">
                                {{ text.home.appointmentCardText }}
                            </p>
                        </div>

                        <div v-if="form.recentlySuccessful" class="rounded-2xl bg-green-500/10 p-4 border border-green-500/20 mb-6">
                            <p class="text-sm text-green-400 font-medium">Votre demande a bien été envoyée. Notre équipe vous contactera sous peu.</p>
                        </div>

                        <form class="space-y-4" @submit.prevent="submit">
                            <div class="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.name }}</label>
                                    <input v-model="form.name" type="text" required class="field-light" />
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.phone }}</label>
                                    <input v-model="form.phone" type="tel" required class="field-light" />
                                </div>
                            </div>

                            <div class="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.animalType }}</label>
                                    <select v-model="form.animal_type" class="field-light appearance-none">
                                        <option value="dog" class="text-gray-900">{{ animalLabels.dog }}</option>
                                        <option value="cat" class="text-gray-900">{{ animalLabels.cat }}</option>
                                        <option value="other" class="text-gray-900">{{ animalLabels.other }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.date }}</label>
                                    <input v-model="form.desired_date" type="date" required class="field-light" />
                                </div>
                            </div>

                            <div>
                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.reason }}</label>
                                <textarea v-model="form.reason" rows="2" required class="field-light resize-none"></textarea>
                            </div>

                            <button
                                type="submit"
                                class="w-full rounded-2xl px-4 py-3.5 text-sm font-semibold text-[#1f3d4b] transition-all hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 bg-[#cba16d]"
                                :disabled="form.processing"
                            >
                                <span v-if="form.processing" class="flex items-center justify-center gap-2">
                                    <svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    {{ text.home.form.sending }}
                                </span>
                                <span v-else>{{ text.home.form.submit }}</span>
                            </button>
                            <p class="text-[11px] text-center text-white/50">{{ text.home.form.helper }}</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-4 pt-24 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="text-center max-w-2xl mx-auto mb-12">
                    <p class="text-xs uppercase tracking-[0.24em] font-semibold text-[#cba16d]">{{ text.home.servicesTitle }}</p>
                    <h2 class="mt-3 text-3xl font-bold text-[#1f3d4b]">{{ text.home.servicesText }}</h2>
                </div>

                <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    <Link
                        v-for="service in serviceCards"
                        :key="service.key"
                        :href="service.href"
                        class="group relative overflow-hidden rounded-[30px] p-8 transition-all hover:-translate-y-1 hover:shadow-xl bg-white border border-gray-100"
                    >
                        <div class="absolute right-0 top-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-gray-50 transition-transform group-hover:scale-150"></div>
                        <div class="relative">
                            <p class="text-xs uppercase tracking-[0.24em] font-semibold" style="color: var(--brand-primary)">{{ service.eyebrow }}</p>
                            <h3 class="mt-4 text-xl font-bold text-[#1f3d4b]">{{ service.title }}</h3>
                            <p class="mt-3 text-sm leading-relaxed text-gray-500">{{ service.text }}</p>
                            <div class="mt-8 inline-flex items-center gap-2 text-sm font-semibold" style="color: var(--brand-primary)">
                                {{ text.ctas.explore }}
                                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <section class="px-4 pt-24 lg:px-6">
            <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] items-center">
                <div>
                    <p class="text-xs uppercase tracking-[0.24em] font-semibold text-[#cba16d]">{{ text.home.trustTitle }}</p>
                    <h2 class="mt-3 text-3xl font-bold leading-tight text-[#1f3d4b]">{{ text.home.trustText }}</h2>
                    <p class="mt-6 text-gray-500 leading-relaxed">
                        Notre clinique a été pensée pour minimiser le stress de vos animaux. Des espaces séparés, un équipement de pointe et une équipe passionnée garantissent une prise en charge optimale au cœur de Tanger.
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                    <article v-for="item in activeTrustItems" :key="item.title" class="rounded-[24px] p-6 bg-gray-50 border border-gray-100 transition hover:bg-white hover:shadow-md">
                        <div class="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm" style="color: var(--brand-primary)">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="text-lg font-bold text-[#1f3d4b]">{{ item.title }}</h3>
                        <p class="mt-2 text-sm leading-relaxed text-gray-500">{{ item.text }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 py-24 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="rounded-[40px] overflow-hidden bg-[#1f3d4b] grid lg:grid-cols-[1fr_1fr] shadow-2xl">

                    <div class="h-[400px] lg:h-auto relative">
                        <iframe
                            :src="brand.mapsEmbed"
                            class="absolute inset-0 h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="p-10 lg:p-14 flex flex-col justify-center">
                        <p class="text-xs uppercase tracking-[0.24em] text-[#cba16d]">Localisation</p>
                        <h2 class="mt-3 text-3xl font-bold text-white">Nous rendre visite</h2>

                        <dl class="mt-8 grid gap-6 text-sm text-white/80">
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 text-[#cba16d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.addressLabel }}</dt>
                                    <dd class="mt-1 leading-relaxed">{{ brand.address }}</dd>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 text-[#cba16d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.hoursLabel }}</dt>
                                    <dd class="mt-1 leading-relaxed">{{ brand.hours }}</dd>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 text-[#cba16d] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.phoneLabel }}</dt>
                                    <dd class="mt-1 font-medium text-[#cba16d]">{{ brand.phoneDisplay }}</dd>
                                </div>
                            </div>
                        </dl>

                        <div class="mt-10 flex flex-wrap gap-4">
                            <a :href="brand.phoneHref" class="rounded-xl bg-[#cba16d] px-6 py-3 text-sm font-semibold text-[#1f3d4b] transition hover:bg-white">
                                {{ text.ctas.call }}
                            </a>
                            <a :href="brand.mapsHref" target="_blank" rel="noreferrer" class="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                                {{ text.ctas.directions }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
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
    if (locale.value === 'ar') return { dog: 'كلب', cat: 'قط', other: 'حيوان آخر' };
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

// Adapted for realistic presentation instead of meta-commentary
const stats = computed(() => [
    { label: text.value.home.stats.emergency, value: 'Intervention Rapide' },
    { label: text.value.home.stats.location, value: brand.address },
    { label: text.value.home.stats.services, value: 'Consultations & Chirurgie' },
]);

// Replaced the "meta" trust text from site.js with production-ready copy
const activeTrustItems = computed(() => [
    {
        title: locale.value === 'en' ? 'Complete Medical Care' : 'Prise en charge complète',
        text: locale.value === 'en'
            ? 'From routine checkups to complex surgeries, all under one roof.'
            : 'De la consultation de routine à la chirurgie complexe, tout est centralisé.',
    },
    {
        title: locale.value === 'en' ? 'Modern Equipment' : 'Équipement moderne',
        text: locale.value === 'en'
            ? 'In-house laboratory and imaging to provide quick and accurate diagnoses.'
            : 'Laboratoire sur place et imagerie pour des diagnostics rapides et précis.',
    },
    {
        title: locale.value === 'en' ? 'Stress-Free Environment' : 'Environnement apaisant',
        text: locale.value === 'en'
            ? 'Separate waiting areas for dogs and cats to minimize anxiety.'
            : 'Espaces d\'attente séparés pour chiens et chats afin de réduire l\'anxiété.',
    },
    {
        title: locale.value === 'en' ? 'Passionate Team' : 'Équipe passionnée',
        text: locale.value === 'en'
            ? 'Veterinarians and assistants dedicated entirely to animal welfare.'
            : 'Des vétérinaires et assistants dédiés au bien-être de vos compagnons.',
    }
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

const submit = () => {
    form.post(localizePath(locale.value, '/rdv'), {
        preserveScroll: true,
        onSuccess: () => form.reset('name', 'phone', 'desired_date', 'reason'),
    });
};
</script>

<style scoped>
@reference "../../../css/app.css";

.field-light {
    @apply w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#cba16d] focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-[#cba16d] transition-colors;
}

/* Base custom animations if not defined in your tailwind config */
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
}
</style>
