<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-5xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }} ✂️
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.5fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">✂️</div>
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
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.phone }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.phone" type="tel" required class="brand-field" :placeholder="content.phonePlaceholder" />
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.animalType }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <select v-model="form.animal_type" required class="brand-field">
                                    <option value="dog">Chien</option>
                                    <option value="cat">Chat</option>
                                    <option value="other">Autre</option>
                                </select>
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.animalAge }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.animal_age" type="text" required class="brand-field" :placeholder="content.agePlaceholder" />
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div v-if="form.animal_type === 'other'">
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.otherAnimal }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.animal_other_name" type="text" required class="brand-field" :placeholder="content.otherPlaceholder" />
                            </div>
                            <div :class="form.animal_type !== 'other' ? 'sm:col-span-2' : ''">
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.breed }} <span style="color: var(--brand-primary)">*</span>
                                </label>
                                <input v-model="form.breed" type="text" required class="brand-field" :placeholder="content.breedPlaceholder" />
                            </div>
                        </div>

                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.weight }}
                                </label>
                                <input v-model="form.weight_kg" type="number" step="0.1" min="0" class="brand-field" placeholder="Ex : 8.5" />
                            </div>
                        </div>

                        <!-- Service selector -->
                        <div>
                            <label class="mb-2 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.serviceType }}
                            </label>
                            <div class="grid gap-3 sm:grid-cols-2">
                                <label
                                    v-for="svc in serviceOptions"
                                    :key="svc.value"
                                    class="flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition"
                                    :style="form.service_type === svc.value
                                        ? 'background: var(--brand-primary-soft); border-color: var(--brand-primary);'
                                        : 'border-color: var(--brand-border); background: var(--brand-field-bg);'"
                                >
                                    <input v-model="form.service_type" type="radio" :value="svc.value" class="sr-only" />
                                    <span class="text-xl">{{ svc.icon }}</span>
                                    <div>
                                        <p class="text-sm font-semibold" style="color: var(--brand-ink)">{{ svc.label }}</p>
                                        <p class="text-xs" style="color: var(--brand-muted)">{{ svc.description }}</p>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.preferredDate }}
                            </label>
                            <input v-model="form.preferred_date" type="date" class="brand-field" />
                        </div>

                        <button type="submit" class="brand-btn-primary w-full rounded-2xl py-3.5" :disabled="form.processing">
                            {{ form.processing ? content.sending : content.submit }}
                        </button>
                    </form>
                </div>

                <!-- Info sidebar -->
                <div class="space-y-4">
                    <article v-for="info in sideInfos" :key="info.title" class="brand-card rounded-[22px] p-5">
                        <p class="text-xl">{{ info.icon }}</p>
                        <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ info.title }}</p>
                        <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ info.text }}</p>
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
    fr: { eyebrow: 'Toilettage · Bien-etre', title: 'Toilettage professionnel pour chiens et chats', lead: 'Bain, coupe, demelage et soins dans un espace dedie pense pour reduire le stress.', formTitle: 'Reservation toilettage', formSubtitle: 'Confirmation sous 24h', ownerName: 'Nom du proprietaire', ownerPlaceholder: 'Votre nom', phone: 'Telephone', phonePlaceholder: '+212 6 XX XX XX XX', animalType: "Type d'animal", animalAge: "Age de l'animal", agePlaceholder: 'Ex : 5 ans', otherAnimal: "Precisez l'animal", otherPlaceholder: 'Ex : lapin, oiseau...', breed: 'Race', breedPlaceholder: 'Golden Retriever, Persan...', weight: 'Poids (kg)', serviceType: 'Type de prestation', preferredDate: 'Date souhaitee', sending: 'Envoi en cours...', submit: 'Envoyer la demande de toilettage' },
    en: { eyebrow: 'Grooming · Wellbeing', title: 'Professional grooming for dogs and cats', lead: 'Bathing, trimming, coat care and hygiene in a dedicated low-stress space.', formTitle: 'Grooming request', formSubtitle: 'Confirmation within 24 hours', ownerName: 'Owner name', ownerPlaceholder: 'Your name', phone: 'Phone', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'Animal type', animalAge: 'Animal age', agePlaceholder: 'Example: 5 years', otherAnimal: 'Specify the animal', otherPlaceholder: 'Example: rabbit, bird...', breed: 'Breed', breedPlaceholder: 'Golden Retriever, Persian...', weight: 'Weight (kg)', serviceType: 'Service type', preferredDate: 'Preferred date', sending: 'Sending...', submit: 'Send grooming request' },
    ar: { eyebrow: 'العناية · الرفاهية', title: 'عناية احترافية للكلاب والقطط', lead: 'استحمام وقص وفك تشابك وعناية داخل فضاء مخصص لتقليل التوتر.', formTitle: 'طلب العناية', formSubtitle: 'تاكيد خلال 24 ساعة', ownerName: 'اسم المالك', ownerPlaceholder: 'اسمك', phone: 'الهاتف', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'نوع الحيوان', animalAge: 'عمر الحيوان', agePlaceholder: 'مثال: 5 سنوات', otherAnimal: 'حدد الحيوان', otherPlaceholder: 'مثال: ارنب، طائر...', breed: 'السلالة', breedPlaceholder: 'مثال: غولدن ريتريفر...', weight: 'الوزن (كلغ)', serviceType: 'نوع الخدمة', preferredDate: 'التاريخ المفضل', sending: 'جار الارسال...', submit: 'ارسال طلب العناية' },
    es: { eyebrow: 'Peluqueria · Bienestar', title: 'Peluqueria profesional para perros y gatos', lead: 'Bano, corte, desenredo y cuidados en un espacio pensado para reducir el estres.', formTitle: 'Solicitud de peluqueria', formSubtitle: 'Confirmacion en 24 horas', ownerName: 'Nombre del propietario', ownerPlaceholder: 'Tu nombre', phone: 'Telefono', phonePlaceholder: '+212 6 XX XX XX XX', animalType: 'Tipo de animal', animalAge: 'Edad del animal', agePlaceholder: 'Ejemplo: 5 anos', otherAnimal: 'Especifica el animal', otherPlaceholder: 'Ejemplo: conejo, pajaro...', breed: 'Raza', breedPlaceholder: 'Golden Retriever, Persa...', weight: 'Peso (kg)', serviceType: 'Tipo de servicio', preferredDate: 'Fecha deseada', sending: 'Enviando...', submit: 'Enviar solicitud de peluqueria' },
};
const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.fr);
const form = useForm({
    owner_name: '',
    phone: '',
    animal_type: 'dog',
    animal_other_name: '',
    animal_age: '',
    breed: '',
    weight_kg: '',
    service_type: 'Bain & brushing',
    preferred_date: '',
});

const serviceOptions = [
    {
        value: 'Bain & brushing',
        icon: '🛁',
        label: 'Bain & brushing',
        description: 'Lavage, séchage, brossage et parfum.',
    },
    {
        value: 'Coupe complète',
        icon: '✂️',
        label: 'Coupe complète',
        description: 'Tonte ou coupe de race avec finitions.',
    },
    {
        value: 'Démêlage',
        icon: '🧶',
        label: 'Démêlage',
        description: 'Pour les pelages longs ou emmêlés.',
    },
    {
        value: 'Forfait premium',
        icon: '⭐',
        label: 'Forfait premium',
        description: 'Bain + coupe + soins oreilles & griffes.',
    },
];

const sideInfos = [
    { icon: '💆', title: 'Environnement zen', text: 'Espace calme, sans agressivité sonore, pour minimiser le stress.' },
    { icon: '🐾', title: 'Praticiens formés', text: 'Nos toiletteurs maîtrisent les spécificités de chaque race.' },
    { icon: '🧴', title: 'Produits doux', text: 'Shampooings dermatologiques adaptés à chaque type de peau.' },
    { icon: '🩺', title: 'Suivi santé', text: 'Contrôle des pattes, oreilles et peau à chaque session.' },
];

const submit = () => {
    form
        .transform((data) => ({
            ...data,
            weight_kg: data.weight_kg === '' ? null : Number(data.weight_kg),
            animal_other_name: data.animal_type === 'other' ? data.animal_other_name : null,
        }))
        .post(`/${props.locale}/toilettage`);
};
</script>
