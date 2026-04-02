<template>
    <AppLayout>
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
                        <h1 class="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-[color:var(--brand-secondary)]">
                            {{ text.home.title }}
                        </h1>
                        <p class="max-w-3xl text-lg leading-relaxed text-[color:var(--brand-secondary)]/80">
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
                    <div class="absolute inset-0 -m-6 rounded-[40px] opacity-20 blur-2xl" style="background: linear-gradient(135deg, var(--brand-primary), transparent)"></div>

                    <div class="relative rounded-[32px] border border-white/10 p-8 text-white shadow-2xl" style="background: linear-gradient(155deg, var(--brand-secondary), color-mix(in srgb, var(--brand-primary) 44%, var(--brand-secondary) 56%))">
                        <div class="mb-6">
                            <p class="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">
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
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ ageFieldLabel }}</label>
                                    <input v-model="form.animal_age" type="text" required class="field-light" :placeholder="ageFieldPlaceholder" />
                                </div>
                            </div>

                            <div v-if="form.animal_type === 'other'">
                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ otherAnimalFieldLabel }}</label>
                                <input v-model="form.animal_other_name" type="text" required class="field-light" :placeholder="otherAnimalFieldPlaceholder" />
                            </div>

                            <div class="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.date }}</label>
                                    <input v-model="form.desired_date" type="date" required class="field-light" />
                                </div>
                                <div>
                                    <label class="mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-white/60">{{ text.home.form.reason }}</label>
                                    <input v-model="form.reason" type="text" required class="field-light" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                class="w-full rounded-2xl px-4 py-3.5 text-sm font-semibold text-[color:var(--brand-secondary)] transition-all hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
                                style="background: linear-gradient(135deg, #ffffff, var(--brand-accent))"
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
                    <p class="text-xs uppercase tracking-[0.24em] font-semibold text-[color:var(--brand-primary)]">{{ text.home.servicesTitle }}</p>
                    <h2 class="mt-3 text-3xl font-bold text-[color:var(--brand-secondary)]">{{ text.home.servicesText }}</h2>
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
                            <h3 class="mt-4 text-xl font-bold text-[color:var(--brand-secondary)]">{{ service.title }}</h3>
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
                    <p class="text-xs uppercase tracking-[0.24em] font-semibold text-[color:var(--brand-primary)]">{{ text.home.trustTitle }}</p>
                    <h2 class="mt-3 text-3xl font-bold leading-tight text-[color:var(--brand-secondary)]">{{ text.home.trustText }}</h2>
                    <p class="mt-6 text-gray-500 leading-relaxed">
                        Notre clinique a été pensée pour minimiser le stress de vos animaux. Des espaces séparés, un équipement de pointe et une équipe passionnée garantissent une prise en charge optimale au cœur de Tanger.
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                    <article v-for="item in activeTrustItems" :key="item.title" class="rounded-[24px] p-6 bg-gray-50 border border-gray-100 transition hover:bg-white hover:shadow-md">
                        <div class="h-10 w-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm" style="color: var(--brand-primary)">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 class="text-lg font-bold text-[color:var(--brand-secondary)]">{{ item.title }}</h3>
                        <p class="mt-2 text-sm leading-relaxed text-gray-500">{{ item.text }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 py-24 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="grid overflow-hidden rounded-[40px] shadow-2xl lg:grid-cols-[1fr_1fr]" style="background: linear-gradient(160deg, var(--brand-secondary), color-mix(in srgb, var(--brand-primary) 38%, var(--brand-secondary) 62%))">

                    <div class="h-[400px] lg:h-auto relative">
                        <iframe
                            :src="brand.mapsEmbed"
                            class="absolute inset-0 h-full w-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div class="p-10 lg:p-14 flex flex-col justify-center">
                        <p class="text-xs uppercase tracking-[0.24em] text-[color:var(--brand-accent)]">Localisation</p>
                        <h2 class="mt-3 text-3xl font-bold text-white">Nous rendre visite</h2>

                        <dl class="mt-8 grid gap-6 text-sm text-white/80">
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 shrink-0 text-[color:var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.addressLabel }}</dt>
                                    <dd class="mt-1 leading-relaxed">{{ brand.address }}</dd>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 shrink-0 text-[color:var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.hoursLabel }}</dt>
                                    <dd class="mt-1 leading-relaxed">{{ brand.hours }}</dd>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <svg class="w-6 h-6 shrink-0 text-[color:var(--brand-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <div>
                                    <dt class="font-semibold text-white">{{ text.home.location.phoneLabel }}</dt>
                                    <dd class="mt-1 font-medium text-[color:var(--brand-accent)]">{{ brand.phoneDisplay }}</dd>
                                </div>
                            </div>
                        </dl>

                        <div class="mt-10 flex flex-wrap gap-4">
                            <a :href="brand.phoneHref" class="rounded-xl px-6 py-3 text-sm font-semibold text-[color:var(--brand-secondary)] transition hover:bg-white" style="background: linear-gradient(135deg, #ffffff, var(--brand-accent))">
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
import { Link, useForm } from '@inertiajs/vue3';
import AppLayout from '../../Layouts/AppLayout.vue';
import { brand, getLocale, getMessage, localizePath } from '../../lib/site';
import { ageLabel, agePlaceholder, otherAnimalLabel, otherAnimalPlaceholder } from '../../lib/animals';

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

const ageFieldLabel = computed(() => ageLabel(locale.value));
const ageFieldPlaceholder = computed(() => agePlaceholder(locale.value));
const otherAnimalFieldLabel = computed(() => otherAnimalLabel(locale.value));
const otherAnimalFieldPlaceholder = computed(() => otherAnimalPlaceholder(locale.value));

const form = useForm({
    name: '',
    phone: '',
    animal_type: 'dog',
    animal_other_name: '',
    animal_age: '',
    desired_date: '',
    reason: '',
});

// Adapted for realistic presentation instead of meta-commentary
const stats = computed(() => {
    if (locale.value === 'ar') {
        return [
            { label: text.value.home.stats.emergency, value: 'استجابة سريعة طوال اليوم' },
            { label: text.value.home.stats.location, value: brand.address },
            { label: text.value.home.stats.services, value: 'استشارات وجراحة ورعاية يومية' },
        ];
    }

    if (locale.value === 'en') {
        return [
            { label: text.value.home.stats.emergency, value: 'Fast response all day' },
            { label: text.value.home.stats.location, value: brand.address },
            { label: text.value.home.stats.services, value: 'Consultations, surgery and daily care' },
        ];
    }

    if (locale.value === 'es') {
        return [
            { label: text.value.home.stats.emergency, value: 'Respuesta rapida todo el dia' },
            { label: text.value.home.stats.location, value: brand.address },
            { label: text.value.home.stats.services, value: 'Consultas, cirugia y cuidados diarios' },
        ];
    }

    return [
        { label: text.value.home.stats.emergency, value: 'Reponse rapide toute la journee' },
        { label: text.value.home.stats.location, value: brand.address },
        { label: text.value.home.stats.services, value: 'Consultations, chirurgie et suivi quotidien' },
    ];
});

const activeTrustItems = computed(() => {
    if (locale.value === 'ar') {
        return [
            { title: 'رعاية متكاملة', text: 'من الفحص الروتيني الى الجراحة والمتابعة الطبية في مكان واحد.' },
            { title: 'تجهيزات حديثة', text: 'مختبر وتصوير وتشخيص سريع لمساعدة العائلات على اتخاذ القرار بسرعة.' },
            { title: 'بيئة مطمئنة', text: 'تنظيم واضح ومساحات مريحة تقلل التوتر على الحيوانات واصحابها.' },
            { title: 'فريق يهتم فعلا', text: 'اطباء ومساعدون يركزون على الرفق والوضوح وجودة التواصل.' },
        ];
    }

    if (locale.value === 'en') {
        return [
            { title: 'Complete care', text: 'From routine checkups to surgery and follow-up in one place.' },
            { title: 'Modern equipment', text: 'On-site diagnostics and imaging for faster, clearer medical decisions.' },
            { title: 'Calmer experience', text: 'Clear navigation and reassuring spaces for pets and families alike.' },
            { title: 'Human-focused team', text: 'A caring team that combines medical rigor with approachable communication.' },
        ];
    }

    if (locale.value === 'es') {
        return [
            { title: 'Atencion completa', text: 'Desde controles de rutina hasta cirugia y seguimiento en un solo lugar.' },
            { title: 'Equipamiento moderno', text: 'Diagnostico e imagen en la clinica para decisiones mas rapidas.' },
            { title: 'Experiencia tranquila', text: 'Un entorno mas claro y mas calmado para mascotas y familias.' },
            { title: 'Equipo cercano', text: 'Un equipo atento que combina exigencia medica y trato humano.' },
        ];
    }

    return [
        { title: 'Prise en charge complete', text: 'De la consultation de routine a la chirurgie et au suivi dans un meme lieu.' },
        { title: 'Equipements modernes', text: 'Diagnostic et imagerie sur place pour des decisions plus rapides.' },
        { title: 'Experience apaisante', text: 'Une interface claire et un cadre rassurant pour les animaux et leurs familles.' },
        { title: 'Equipe attentive', text: 'Un accompagnement humain qui combine rigueur medicale et communication simple.' },
    ];
});

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
    form.transform((data) => ({
        ...data,
        animal_other_name: data.animal_type === 'other' ? data.animal_other_name : null,
    })).post(localizePath(locale.value, '/rdv'), {
        preserveScroll: true,
        onSuccess: () => form.reset('name', 'phone', 'animal_type', 'animal_other_name', 'animal_age', 'desired_date', 'reason'),
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
