<template>
    <AppLayout>
        <section class="relative overflow-hidden px-4 pb-8 pt-6 lg:px-6 lg:pt-8">
            <div class="mx-auto max-w-7xl">
                <div class="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div class="space-y-7">
                        <span class="brand-chip">
                            <span class="h-2 w-2 rounded-full bg-[color:var(--brand-primary)]"></span>
                            {{ text.home.badge }}
                        </span>

                        <div class="space-y-5">
                            <h1 class="brand-section-title max-w-5xl">
                                {{ text.home.title }}
                            </h1>
                            <p class="max-w-3xl text-lg leading-8 text-[color:var(--brand-secondary)]/80">
                                {{ text.home.highlight }}
                            </p>
                            <p class="max-w-2xl text-base leading-8 text-[color:var(--brand-muted)]">
                                {{ text.home.lead }}
                            </p>
                        </div>

                        <div class="flex flex-wrap gap-3">
                            <a href="#appointment" class="brand-btn-primary">
                                {{ text.ctas.appointment }}
                            </a>
                            <Link :href="localizePath(locale, '/soins-veterinaires')" class="brand-btn-outline">
                                {{ text.ctas.explore }}
                            </Link>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-3">
                            <article v-for="stat in stats" :key="stat.label" class="brand-soft-panel rounded-[28px] p-5">
                                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">{{ stat.label }}</p>
                                <p class="mt-3 text-sm font-semibold leading-6 text-[color:var(--brand-secondary)]">{{ stat.value }}</p>
                            </article>
                        </div>

                        <div class="brand-glass rounded-[32px] p-5 sm:p-6">
                            <div class="grid gap-4 md:grid-cols-3">
                                <div v-for="item in reassuranceItems" :key="item.title" class="rounded-[24px] bg-white/70 p-4">
                                    <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--brand-primary-soft)] text-[color:var(--brand-primary)]">
                                        <component :is="item.icon" class="h-5 w-5" />
                                    </div>
                                    <h2 class="text-sm font-semibold text-[color:var(--brand-secondary)]">{{ item.title }}</h2>
                                    <p class="mt-2 text-sm leading-6 text-[color:var(--brand-muted)]">{{ item.text }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid gap-5" id="appointment">
                        <div class="brand-gradient-panel relative overflow-hidden rounded-[36px] p-6 text-white shadow-2xl shadow-[color:var(--brand-shadow)] sm:p-7">
                            <div class="absolute -right-10 -top-12 h-40 w-40 rounded-full bg-white/8 blur-2xl"></div>
                            <div class="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[color:var(--brand-accent)]/15 blur-2xl"></div>

                            <div class="relative grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
                                <div class="brand-logo-frame flex flex-col justify-between rounded-[28px] border border-white/15 p-3 text-[color:var(--brand-secondary)]">
                                    <img :src="brand.logo" :alt="brand.name" class="h-52 w-full rounded-[22px] object-cover" />
                                    <div class="mt-4 space-y-2 rounded-[20px] bg-white/85 p-4">
                                        <p class="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">{{ text.home.locationTitle }}</p>
                                        <p class="text-sm font-semibold">{{ brand.address }}</p>
                                        <p class="text-xs leading-6 text-[color:var(--brand-muted)]">{{ brand.hours }}</p>
                                    </div>
                                </div>

                                <div class="space-y-5">
                                    <div>
                                        <p class="text-xs uppercase tracking-[0.24em] text-white/65">{{ text.home.appointmentCardTitle }}</p>
                                        <h2 class="mt-2 text-2xl font-semibold">{{ text.ctas.appointment }}</h2>
                                        <p class="mt-2 text-sm leading-7 text-white/72">{{ text.home.appointmentCardText }}</p>
                                    </div>

                                    <div v-if="form.recentlySuccessful" class="rounded-[22px] border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">
                                        Votre demande a bien ete envoyee. Notre equipe vous contacte rapidement.
                                    </div>

                                    <form class="space-y-4" @submit.prevent="submit">
                                        <div class="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ text.home.form.name }}</label>
                                                <input v-model="form.name" type="text" required class="field-light" />
                                            </div>
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ text.home.form.phone }}</label>
                                                <input v-model="form.phone" type="tel" required class="field-light" />
                                            </div>
                                        </div>

                                        <div class="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ text.home.form.animalType }}</label>
                                                <select v-model="form.animal_type" class="field-light appearance-none">
                                                    <option value="dog" class="text-slate-900">{{ animalLabels.dog }}</option>
                                                    <option value="cat" class="text-slate-900">{{ animalLabels.cat }}</option>
                                                    <option value="other" class="text-slate-900">{{ animalLabels.other }}</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ ageFieldLabel }}</label>
                                                <input v-model="form.animal_age" type="text" required class="field-light" :placeholder="ageFieldPlaceholder" />
                                            </div>
                                        </div>

                                        <div v-if="form.animal_type === 'other'">
                                            <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ otherAnimalFieldLabel }}</label>
                                            <input v-model="form.animal_other_name" type="text" required class="field-light" :placeholder="otherAnimalFieldPlaceholder" />
                                        </div>

                                        <div class="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ text.home.form.date }}</label>
                                                <input v-model="form.desired_date" type="date" required class="field-light" />
                                            </div>
                                            <div>
                                                <label class="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-white/65">{{ text.home.form.reason }}</label>
                                                <input v-model="form.reason" type="text" required class="field-light" />
                                            </div>
                                        </div>

                                        <button type="submit" class="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-[color:var(--brand-secondary)] transition hover:bg-[color:var(--brand-accent)] disabled:opacity-60" :disabled="form.processing">
                                            {{ form.processing ? text.home.form.sending : text.home.form.submit }}
                                        </button>
                                        <p class="text-center text-[11px] text-white/55">{{ text.home.form.helper }}</p>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="grid gap-4 md:grid-cols-3">
                            <article v-for="item in quickActions" :key="item.title" class="brand-soft-panel rounded-[26px] p-5">
                                <p class="text-xs uppercase tracking-[0.22em] text-[color:var(--brand-primary)]">{{ item.title }}</p>
                                <p class="mt-2 text-sm leading-6 text-[color:var(--brand-muted)]">{{ item.text }}</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-4 pt-16 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div class="max-w-3xl">
                        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{{ text.home.servicesTitle }}</p>
                        <h2 class="mt-3 brand-section-title">{{ text.home.servicesText }}</h2>
                    </div>
                    <Link :href="localizePath(locale, '/contact-clinique-veterinaire-tanger')" class="brand-btn-outline">
                        {{ text.ctas.contact }}
                    </Link>
                </div>

                <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    <Link
                        v-for="service in serviceCards"
                        :key="service.key"
                        :href="service.href"
                        class="group brand-glass relative overflow-hidden rounded-[32px] p-6 transition hover:-translate-y-1"
                    >
                        <div class="absolute right-0 top-0 h-24 w-24 translate-x-6 -translate-y-6 rounded-full bg-[color:var(--brand-primary-soft)] transition group-hover:scale-125"></div>
                        <div class="relative">
                            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{{ service.eyebrow }}</p>
                            <h3 class="mt-4 text-xl font-semibold text-[color:var(--brand-secondary)]">{{ service.title }}</h3>
                            <p class="mt-3 text-sm leading-7 text-[color:var(--brand-muted)]">{{ service.text }}</p>
                            <div class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-primary)]">
                                {{ text.ctas.explore }}
                                <ArrowIcon class="h-4 w-4 transition group-hover:translate-x-1" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        <section class="px-4 pt-20 lg:px-6">
            <div class="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div class="space-y-5">
                    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{{ text.home.trustTitle }}</p>
                    <h2 class="brand-section-title">{{ text.home.trustText }}</h2>
                    <p class="max-w-xl text-base leading-8 text-[color:var(--brand-muted)]">
                        Une presentation plus moderne, plus lisible et plus rassurante aide les familles a comprendre vos services, agir vite en cas d urgence et faire confiance a la clinique.
                    </p>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                    <article v-for="item in activeTrustItems" :key="item.title" class="brand-soft-panel rounded-[28px] p-6">
                        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--brand-primary-soft)] text-[color:var(--brand-primary)]">
                            <ShieldIcon class="h-5 w-5" />
                        </div>
                        <h3 class="mt-4 text-lg font-semibold text-[color:var(--brand-secondary)]">{{ item.title }}</h3>
                        <p class="mt-2 text-sm leading-7 text-[color:var(--brand-muted)]">{{ item.text }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 py-20 lg:px-6">
            <div class="mx-auto max-w-7xl">
                <div class="grid overflow-hidden rounded-[40px] border border-[color:var(--brand-border)] bg-white shadow-2xl shadow-[color:var(--brand-shadow)] lg:grid-cols-[0.92fr_1.08fr]">
                    <div class="relative min-h-[320px]">
                        <div class="absolute inset-0 bg-[linear-gradient(145deg,rgba(15,47,92,0.88),rgba(37,99,235,0.64))]"></div>
                        <div class="absolute inset-0">
                            <iframe
                                :src="brand.mapsEmbed"
                                class="h-full w-full border-0 opacity-35 mix-blend-luminosity"
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="relative flex h-full flex-col justify-between p-8 text-white">
                            <div>
                                <p class="text-xs uppercase tracking-[0.24em] text-white/65">{{ text.home.locationTitle }}</p>
                                <h2 class="mt-3 text-3xl font-semibold">{{ brand.address }}</h2>
                            </div>
                            <div class="grid gap-5 text-sm text-white/80">
                                <div>
                                    <p class="font-semibold text-white">{{ text.home.location.hoursLabel }}</p>
                                    <p class="mt-1 leading-7">{{ brand.hours }}</p>
                                </div>
                                <div>
                                    <p class="font-semibold text-white">{{ text.home.location.phoneLabel }}</p>
                                    <p class="mt-1 leading-7">{{ brand.phoneDisplay }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-8 lg:p-10">
                        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-primary)]">{{ text.home.galleryTitle }}</p>
                        <h2 class="mt-3 brand-section-title">{{ text.home.galleryText }}</h2>
                        <p class="mt-4 max-w-2xl text-base leading-8 text-[color:var(--brand-muted)]">
                            Le nouveau template met davantage en avant la confiance, la rapidite de contact, la qualite percue et l identite de la clinique. Il est pense pour une clinique veterinaire premium, pas pour un simple site vitrine generique.
                        </p>

                        <div class="mt-8 grid gap-4 sm:grid-cols-3">
                            <article class="brand-soft-panel rounded-[24px] p-5">
                                <p class="text-xs uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">SEO</p>
                                <p class="mt-3 text-sm leading-7 text-[color:var(--brand-muted)]">Structure plus lisible pour les services cles a Tanger et la recherche locale.</p>
                            </article>
                            <article class="brand-soft-panel rounded-[24px] p-5">
                                <p class="text-xs uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">UX</p>
                                <p class="mt-3 text-sm leading-7 text-[color:var(--brand-muted)]">Actions prioritaires visibles immediatement : RDV, urgence, appel et itineraire.</p>
                            </article>
                            <article class="brand-soft-panel rounded-[24px] p-5">
                                <p class="text-xs uppercase tracking-[0.2em] text-[color:var(--brand-primary)]">Brand</p>
                                <p class="mt-3 text-sm leading-7 text-[color:var(--brand-muted)]">Une interface plus medicale, plus premium et plus adaptee a une clinique veterinaire.</p>
                            </article>
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
import { ArrowIcon, MapPinIcon, PhoneIcon, ShieldIcon, StethoscopeIcon } from '../../components/home-icons';

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

const reassuranceItems = computed(() => {
    if (locale.value === 'en') {
        return [
            { title: 'Clinic-first clarity', text: 'The homepage now explains your care model with stronger hierarchy and less clutter.', icon: StethoscopeIcon },
            { title: 'Trust-driven layout', text: 'The design feels more premium and specialized for a real veterinary practice.', icon: ShieldIcon },
            { title: 'Fast contact flow', text: 'Appointment, emergency and contact actions remain visible without overwhelming visitors.', icon: PhoneIcon },
        ];
    }

    if (locale.value === 'ar') {
        return [
            { title: 'وضوح اكبر', text: 'الصفحة الرئيسية تشرح الخدمات بشكل اوضح وبهيكلة اقوى.', icon: StethoscopeIcon },
            { title: 'ثقة اعلى', text: 'التصميم اصبح اقرب لهوية عيادة بيطرية راقية ومتخصصة.', icon: ShieldIcon },
            { title: 'تواصل اسرع', text: 'المواعيد والطوارئ ووسائل التواصل تبقى واضحة بدون ازدحام.', icon: PhoneIcon },
        ];
    }

    if (locale.value === 'es') {
        return [
            { title: 'Mas claridad', text: 'La pagina principal explica mejor los servicios y la propuesta de la clinica.', icon: StethoscopeIcon },
            { title: 'Mas confianza', text: 'La interfaz se siente mas premium y mas propia de una clinica veterinaria real.', icon: ShieldIcon },
            { title: 'Contacto mas rapido', text: 'Las acciones clave siguen visibles sin saturar la experiencia.', icon: PhoneIcon },
        ];
    }

    return [
        { title: 'Une lecture plus claire', text: 'La homepage explique mieux l offre de soins et l identite de la clinique.', icon: StethoscopeIcon },
        { title: 'Une confiance plus forte', text: 'Le design semble plus premium, plus medical et plus adapte a une vraie clinique veterinaire.', icon: ShieldIcon },
        { title: 'Un contact plus rapide', text: 'Les actions prioritaires restent visibles sans surcharger l experience.', icon: PhoneIcon },
    ];
});

const quickActions = computed(() => {
    if (locale.value === 'en') {
        return [
            { title: 'Appointment', text: 'Simple intake for new and returning pet owners.' },
            { title: 'Emergency', text: 'Immediate path for urgent ambulance or critical care situations.' },
            { title: 'Access', text: 'Location, phone and WhatsApp remain visible at all times.' },
        ];
    }
    if (locale.value === 'ar') {
        return [
            { title: 'المواعيد', text: 'نموذج بسيط ومباشر للطلبات الجديدة والمتابعة.' },
            { title: 'الطوارئ', text: 'مسار واضح للحالات المستعجلة والاسعاف البيطري.' },
            { title: 'الوصول', text: 'العنوان والهاتف وواتساب تبقى واضحة طوال الوقت.' },
        ];
    }
    if (locale.value === 'es') {
        return [
            { title: 'Citas', text: 'Formulario simple para nuevos clientes y seguimiento.' },
            { title: 'Urgencias', text: 'Camino directo para ambulancia y casos criticos.' },
            { title: 'Acceso', text: 'Ubicacion, telefono y WhatsApp visibles en todo momento.' },
        ];
    }
    return [
        { title: 'Rendez-vous', text: 'Un formulaire simple pour les nouveaux clients comme pour le suivi.' },
        { title: 'Urgence', text: 'Un parcours direct pour l ambulance et les situations critiques.' },
        { title: 'Acces', text: 'Adresse, telephone et WhatsApp toujours visibles.' },
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
    @apply w-full rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-white/50 focus:bg-white/12 focus:outline-none focus:ring-1 focus:ring-white/30;
}
</style>
