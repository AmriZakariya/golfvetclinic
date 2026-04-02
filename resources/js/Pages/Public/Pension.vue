<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-5xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }} 🏠
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.45fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">🐾</div>
                        <div>
                            <p class="text-sm font-semibold" style="color: var(--brand-ink)">{{ content.formTitle }}</p>
                            <p class="text-xs" style="color: var(--brand-muted)">{{ content.formSubtitle }}</p>
                        </div>
                    </div>

                    <form class="space-y-5" @submit.prevent="submit">
                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.ownerName }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.owner_name" type="text" required class="brand-field" :placeholder="content.ownerPlaceholder" />
                                <p v-if="form.errors.owner_name" class="mt-1.5 text-xs" style="color: var(--brand-danger)">{{ form.errors.owner_name }}</p>
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.phone }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.phone" type="tel" required class="brand-field" :placeholder="content.phonePlaceholder" />
                                <p v-if="form.errors.phone" class="mt-1.5 text-xs" style="color: var(--brand-danger)">{{ form.errors.phone }}</p>
                            </div>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.animalType }}
                            </label>
                            <div class="grid gap-3 sm:grid-cols-3">
                                <label
                                    v-for="opt in animalOptions"
                                    :key="opt.value"
                                    class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-2xl border py-3 text-sm font-medium transition"
                                    :style="form.animal_type === opt.value
                                        ? 'background: var(--brand-primary-soft); border-color: var(--brand-primary); color: var(--brand-primary);'
                                        : 'border-color: var(--brand-border); color: var(--brand-muted); background: var(--brand-field-bg);'"
                                >
                                    <input v-model="form.animal_type" type="radio" :value="opt.value" class="sr-only" />
                                    {{ opt.icon }} {{ opt.label }}
                                </label>
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div v-if="form.animal_type === 'other'">
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.otherAnimal }}
                                </label>
                                <input v-model="form.animal_other_name" type="text" required class="brand-field" :placeholder="content.otherPlaceholder" />
                            </div>
                            <div :class="form.animal_type !== 'other' ? 'sm:col-span-2' : ''">
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.animalAge }}
                                </label>
                                <input v-model="form.animal_age" type="text" required class="brand-field" :placeholder="content.agePlaceholder" />
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.startDate }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.start_date" type="date" required class="brand-field" />
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.endDate }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.end_date" type="date" required class="brand-field" />
                            </div>
                        </div>

                        <div v-if="stayDuration > 0" class="rounded-2xl px-5 py-3 text-sm" style="background: var(--brand-primary-soft); color: var(--brand-primary)">
                            {{ content.duration }} : <strong>{{ stayDuration }} {{ content.nights }}</strong>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.instructions }}
                            </label>
                            <textarea
                                v-model="form.special_instructions"
                                rows="3"
                                class="brand-field"
                                :placeholder="content.instructionsPlaceholder"
                            />
                        </div>

                        <button type="submit" class="brand-btn-primary w-full rounded-2xl py-3.5" :disabled="form.processing">
                            {{ form.processing ? content.sending : content.submit }}
                        </button>
                    </form>
                </div>

                <!-- Side info -->
                <div class="space-y-4">
                    <article v-for="feature in features" :key="feature.title" class="brand-card rounded-[22px] p-5">
                        <p class="text-xl">{{ feature.icon }}</p>
                        <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ feature.title }}</p>
                        <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ feature.text }}</p>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import { useForm } from '@inertiajs/vue3';
import { getLocale } from '../../lib/site';

const props = defineProps({
    locale: { type: String, default: 'fr' },
});

const locale = computed(() => getLocale(props.locale));
const contentByLocale = {
    fr: { eyebrow: 'Pension animaliere · Sejour', title: 'Pension securisee pour chiens et chats, comme a la maison', lead: 'Hebergement quotidien ou longue duree dans un environnement calme, propre et surveille.', formTitle: 'Reservation de pension', formSubtitle: 'Confirmation par telephone sous 2h', ownerName: 'Nom du proprietaire', ownerPlaceholder: 'Votre nom complet', phone: 'Telephone', phonePlaceholder: '+212 6 XX XX XX XX', animalType: "Type d'animal", otherAnimal: "Precisez l'animal", otherPlaceholder: 'Ex : lapin, oiseau...', animalAge: "Age de l'animal", agePlaceholder: 'Ex : 3 ans ou 8 mois', startDate: 'Date de debut', endDate: 'Date de fin', duration: 'Duree du sejour', nights: 'nuit(s)', instructions: 'Instructions particulieres', instructionsPlaceholder: 'Alimentation, medicaments, habitudes, allergie...', sending: 'Envoi en cours...', submit: 'Envoyer la demande de pension' },
    en: { eyebrow: 'Pet boarding · Stay', title: 'Safe boarding for dogs and cats, just like home', lead: 'Short or long stays in a calm, clean and supervised environment.', formTitle: 'Boarding request', formSubtitle: 'Phone confirmation within 2 hours', ownerName: 'Owner name', ownerPlaceholder: 'Your full name', phone: 'Phone', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'Animal type', otherAnimal: 'Specify the animal', otherPlaceholder: 'Example: rabbit, bird...', animalAge: 'Animal age', agePlaceholder: 'Example: 3 years or 8 months', startDate: 'Start date', endDate: 'End date', duration: 'Length of stay', nights: 'night(s)', instructions: 'Special instructions', instructionsPlaceholder: 'Food, medication, habits, allergies...', sending: 'Sending...', submit: 'Send boarding request' },
    ar: { eyebrow: 'الايواء · الاقامة', title: 'ايواء امن للكلاب والقطط كأنه المنزل', lead: 'اقامة قصيرة او طويلة في بيئة هادئة ونظيفة وتحت المراقبة.', formTitle: 'طلب ايواء', formSubtitle: 'تاكيد هاتفي خلال ساعتين', ownerName: 'اسم المالك', ownerPlaceholder: 'اسمك الكامل', phone: 'الهاتف', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'نوع الحيوان', otherAnimal: 'حدد الحيوان', otherPlaceholder: 'مثال: ارنب او طائر', animalAge: 'عمر الحيوان', agePlaceholder: 'مثال: 3 سنوات او 8 اشهر', startDate: 'تاريخ البداية', endDate: 'تاريخ النهاية', duration: 'مدة الاقامة', nights: 'ليلة', instructions: 'تعليمات خاصة', instructionsPlaceholder: 'غذاء، ادوية، عادات، حساسية...', sending: 'جار الارسال...', submit: 'ارسال طلب الايواء' },
    es: { eyebrow: 'Residencia · Estancia', title: 'Residencia segura para perros y gatos, como en casa', lead: 'Estancias cortas o largas en un entorno tranquilo, limpio y supervisado.', formTitle: 'Solicitud de residencia', formSubtitle: 'Confirmacion por telefono en menos de 2 horas', ownerName: 'Nombre del propietario', ownerPlaceholder: 'Tu nombre completo', phone: 'Telefono', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'Tipo de animal', otherAnimal: 'Especifica el animal', otherPlaceholder: 'Ejemplo: conejo, pajaro...', animalAge: 'Edad del animal', agePlaceholder: 'Ejemplo: 3 anos u 8 meses', startDate: 'Fecha de inicio', endDate: 'Fecha de fin', duration: 'Duracion de la estancia', nights: 'noche(s)', instructions: 'Instrucciones especiales', instructionsPlaceholder: 'Comida, medicacion, habitos, alergias...', sending: 'Enviando...', submit: 'Enviar solicitud de residencia' },
};
const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.fr);
const form = useForm({
    owner_name: '',
    phone: '',
    animal_type: 'dog',
    animal_other_name: '',
    animal_age: '',
    start_date: '',
    end_date: '',
    special_instructions: '',
});

const animalOptions = [
    { value: 'dog', label: 'Chien', icon: '🐕' },
    { value: 'cat', label: 'Chat', icon: '🐈' },
    { value: 'other', label: 'Autre', icon: '🐾' },
];

const stayDuration = computed(() => {
    if (!form.start_date || !form.end_date) return 0;
    const diff = new Date(form.end_date) - new Date(form.start_date);
    return Math.max(0, Math.round(diff / (1000 * 60 * 60 * 24)));
});

const featuresByLocale = {
    fr: [
        { icon: '🛌', title: 'Espaces separes', text: 'Chiens et chats heberges dans des zones distinctes et securisees.' },
        { icon: '🍽️', title: 'Alimentation adaptee', text: 'Rations personnalisees selon votre animal.' },
        { icon: '🏃', title: 'Sorties quotidiennes', text: 'Promenades et stimulation pour les chiens.' },
        { icon: '🩺', title: 'Suivi veterinaire', text: 'Un veterinaire sur place en cas de besoin.' },
    ],
    en: [
        { icon: '🛌', title: 'Separate spaces', text: 'Dogs and cats stay in distinct and secure areas.' },
        { icon: '🍽️', title: 'Tailored feeding', text: 'Meals adapted to your pet and routine.' },
        { icon: '🏃', title: 'Daily activity', text: 'Walks and stimulation for dogs.' },
        { icon: '🩺', title: 'Veterinary supervision', text: 'A veterinarian is on site if needed.' },
    ],
    ar: [
        { icon: '🛌', title: 'مساحات منفصلة', text: 'اقامة منفصلة وامنة للكلاب والقطط.' },
        { icon: '🍽️', title: 'غذاء مناسب', text: 'وجبات ملائمة حسب احتياجات الحيوان.' },
        { icon: '🏃', title: 'نشاط يومي', text: 'خروج وتحفيز يومي للكلاب.' },
        { icon: '🩺', title: 'متابعة بيطرية', text: 'طبيب بيطري متوفر عند الحاجة.' },
    ],
    es: [
        { icon: '🛌', title: 'Espacios separados', text: 'Perros y gatos alojados en zonas distintas y seguras.' },
        { icon: '🍽️', title: 'Alimentacion adaptada', text: 'Raciones personalizadas segun tu mascota.' },
        { icon: '🏃', title: 'Actividad diaria', text: 'Paseos y estimulacion para los perros.' },
        { icon: '🩺', title: 'Seguimiento veterinario', text: 'Veterinario disponible si hace falta.' },
    ],
};
const features = computed(() => featuresByLocale[locale.value] ?? featuresByLocale.fr);

const submit = () => {
    form.transform((data) => ({
        ...data,
        animal_other_name: data.animal_type === 'other' ? data.animal_other_name : null,
    })).post(`/${props.locale}/pension`);
};
</script>
