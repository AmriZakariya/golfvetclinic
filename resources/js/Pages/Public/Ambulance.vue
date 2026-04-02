<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-4xl">
                <div class="flex items-center gap-3">
                    <span class="pulse-dot"></span>
                    <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-danger)">
                        {{ content.eyebrow }}
                    </p>
                </div>

                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }}
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>

                <!-- Emergency quick-call -->
                <div class="mt-6 inline-flex items-center gap-3 rounded-2xl px-5 py-3" style="background: var(--brand-danger-soft); border: 1px solid var(--brand-danger-border)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--brand-danger); flex-shrink: 0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.89 5.89l1.67-1.67a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span class="text-sm font-semibold" style="color: var(--brand-danger)">{{ content.critical }}</span>
                    <a href="tel:+212539376388" class="text-sm font-bold underline underline-offset-2 transition hover:opacity-80" style="color: var(--brand-danger)">
                        {{ content.callDirect }} → +212 5 39 37 63 88
                    </a>
                </div>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_0.5fr] items-start">

                <!-- Form -->
                <div class="brand-card rounded-[28px] p-7">
                    <div class="mb-6 flex items-center gap-3">
                        <div class="brand-icon-badge">🚑</div>
                        <div>
                            <p class="text-sm font-semibold" style="color: var(--brand-ink)">{{ content.formTitle }}</p>
                            <p class="text-xs" style="color: var(--brand-muted)">{{ content.formSubtitle }}</p>
                        </div>
                    </div>

                    <form class="space-y-5" @submit.prevent="submit">
                        <div class="grid gap-5 sm:grid-cols-2">
                            <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.animalType }}
                            </label>
                            <select v-model="form.animal_type" class="brand-field">
                                <option value="dog">Chien</option>
                                <option value="cat">Chat</option>
                                <option value="other">Autre</option>
                            </select>
                            </div>
                            <div>
                                <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                    {{ content.animalAge }}
                                </label>
                                <input v-model="form.animal_age" type="text" required class="brand-field" :placeholder="content.agePlaceholder" />
                            </div>
                        </div>

                        <div v-if="form.animal_type === 'other'">
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.otherAnimal }}
                            </label>
                            <input v-model="form.animal_other_name" type="text" required class="brand-field" :placeholder="content.otherPlaceholder" />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.symptoms }} <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <textarea
                                v-model="form.symptoms"
                                rows="4"
                                required
                                class="brand-field brand-field-danger"
                                :placeholder="content.symptomsPlaceholder"
                            />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.location }} <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <input v-model="form.location_text" type="text" required class="brand-field" :placeholder="content.locationPlaceholder" />
                        </div>

                        <div>
                            <label class="mb-1.5 block text-xs font-medium uppercase tracking-[0.18em]" style="color: var(--brand-muted)">
                                {{ content.phone }} <span style="color: var(--brand-danger)">*</span>
                            </label>
                            <input v-model="form.phone" type="tel" required class="brand-field" :placeholder="content.phonePlaceholder" />
                        </div>

                        <button
                            type="submit"
                            class="brand-btn-danger"
                            :disabled="form.processing"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 11l19-9-9 19-2-8-8-2z"/>
                            </svg>
                            {{ form.processing ? content.sending : content.submit }}
                        </button>
                    </form>
                </div>

                <!-- Side info -->
                <div class="space-y-4">
                    <article class="brand-card rounded-[24px] p-5">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">{{ content.signsTitle }}</p>
                        <ul class="mt-4 space-y-3">
                            <li v-for="sign in urgencySigns" :key="sign" class="flex items-start gap-2.5 text-sm leading-6" style="color: var(--brand-muted)">
                                <span class="mt-0.5 text-base" style="color: var(--brand-danger)">⚠</span>
                                {{ sign }}
                            </li>
                        </ul>
                    </article>

                    <article class="brand-card rounded-[24px] p-5">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">{{ content.availabilityTitle }}</p>
                        <p class="mt-3 text-2xl font-bold" style="color: var(--brand-ink)">24h / 7j</p>
                        <p class="mt-1 text-sm" style="color: var(--brand-muted)">{{ content.availabilityText }}</p>
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
    fr: {
        eyebrow: 'Urgence veterinaire · Ambulance 24/7',
        title: 'Ambulance veterinaire a Tanger — intervention rapide.',
        lead: 'En cas de detresse respiratoire, d accident ou de comportement anormal grave, decrivez la situation ci-dessous.',
        critical: 'Urgence critique ?',
        callDirect: 'Appelez directement',
        formTitle: "Demande d'ambulance",
        formSubtitle: 'Reponse en moins de 10 minutes',
        animalType: "Type d'animal",
        animalAge: "Age de l'animal",
        agePlaceholder: 'Ex : 2 ans ou 6 mois',
        otherAnimal: "Precisez l'animal",
        otherPlaceholder: 'Ex : lapin, oiseau...',
        symptoms: 'Symptomes / situation',
        symptomsPlaceholder: 'Decrivez ce que vous observez (blessure, respiration, douleur...)',
        location: 'Localisation (quartier, adresse)',
        locationPlaceholder: 'Ex : Quartier du Golf, Rue de Fes...',
        phone: 'Telephone de contact',
        phonePlaceholder: '+212 6 XX XX XX XX',
        submit: "Envoyer la demande d'ambulance",
        sending: 'Envoi en cours...',
        signsTitle: "Signes d'urgence",
        availabilityTitle: 'Disponibilite',
        availabilityText: 'Tanger et environs',
        signs: ['Difficultes respiratoires severes', 'Perte de conscience ou convulsions', 'Saignement abondant', 'Ingestion de substances toxiques', 'Traumatisme suite a un accident', 'Incapacite a se lever ou a marcher'],
    },
    en: { eyebrow: 'Emergency veterinary ambulance · 24/7', title: 'Veterinary ambulance in Tangier — rapid response.', lead: 'If your pet has breathing distress, an accident or severe abnormal behavior, describe the situation below.', critical: 'Critical emergency?', callDirect: 'Call now', formTitle: 'Ambulance request', formSubtitle: 'Response in under 10 minutes', animalType: 'Animal type', animalAge: 'Animal age', agePlaceholder: 'Example: 2 years or 6 months', otherAnimal: 'Specify the animal', otherPlaceholder: 'Example: rabbit, bird...', symptoms: 'Symptoms / situation', symptomsPlaceholder: 'Describe what you are seeing (injury, breathing, pain...)', location: 'Location (district, address)', locationPlaceholder: 'Example: Golf district, main street...', phone: 'Contact phone', phonePlaceholder: '+212 6 XX XX XX XX', submit: 'Send ambulance request', sending: 'Sending...', signsTitle: 'Emergency signs', availabilityTitle: 'Availability', availabilityText: 'Tangier and nearby areas', signs: ['Severe breathing difficulty', 'Loss of consciousness or seizures', 'Heavy bleeding', 'Toxic substance ingestion', 'Accident trauma', 'Unable to stand or walk'] },
    ar: { eyebrow: 'طوارئ بيطرية · اسعاف 24/7', title: 'اسعاف بيطري في طنجة — تدخل سريع.', lead: 'اذا كان الحيوان يعاني من صعوبة تنفس او حادث او سلوك خطير غير عادي فصف الحالة ادناه.', critical: 'حالة حرجة؟', callDirect: 'اتصل مباشرة', formTitle: 'طلب اسعاف', formSubtitle: 'الرد في اقل من 10 دقائق', animalType: 'نوع الحيوان', animalAge: 'عمر الحيوان', agePlaceholder: 'مثال: سنتان او 6 اشهر', otherAnimal: 'حدد الحيوان', otherPlaceholder: 'مثال: ارنب او طائر', symptoms: 'الاعراض / الحالة', symptomsPlaceholder: 'اشرح ما تلاحظه', location: 'الموقع (الحي، العنوان)', locationPlaceholder: 'مثال: حي الغولف...', phone: 'هاتف التواصل', phonePlaceholder: '+212 6 XX XX XX XX', submit: 'ارسال طلب الاسعاف', sending: 'جار الارسال...', signsTitle: 'علامات الطوارئ', availabilityTitle: 'التوفر', availabilityText: 'طنجة والنواحي', signs: ['صعوبة تنفس شديدة', 'فقدان الوعي او تشنجات', 'نزيف كبير', 'ابتلاع مواد سامة', 'صدمة بعد حادث', 'عدم القدرة على الوقوف او المشي'] },
    es: { eyebrow: 'Urgencia veterinaria · Ambulancia 24/7', title: 'Ambulancia veterinaria en Tanger — respuesta rapida.', lead: 'Si tu mascota tiene dificultad respiratoria, accidente o comportamiento grave inusual, describe la situacion abajo.', critical: 'Urgencia critica?', callDirect: 'Llamar ahora', formTitle: 'Solicitud de ambulancia', formSubtitle: 'Respuesta en menos de 10 minutos', animalType: 'Tipo de animal', animalAge: 'Edad del animal', agePlaceholder: 'Ejemplo: 2 anos o 6 meses', otherAnimal: 'Especifica el animal', otherPlaceholder: 'Ejemplo: conejo, pajaro...', symptoms: 'Sintomas / situacion', symptomsPlaceholder: 'Describe lo que observas', location: 'Ubicacion (barrio, direccion)', locationPlaceholder: 'Ejemplo: Barrio du Golf...', phone: 'Telefono de contacto', phonePlaceholder: '+212 6 XX XX XX XX', submit: 'Enviar solicitud de ambulancia', sending: 'Enviando...', signsTitle: 'Senales de urgencia', availabilityTitle: 'Disponibilidad', availabilityText: 'Tanger y alrededores', signs: ['Dificultad respiratoria severa', 'Perdida de conciencia o convulsiones', 'Sangrado abundante', 'Ingestion de sustancias toxicas', 'Traumatismo por accidente', 'No puede caminar o levantarse'] },
};
const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.fr);
const form = useForm({
    animal_type: 'dog',
    animal_other_name: '',
    animal_age: '',
    symptoms: '',
    location_text: '',
    phone: '',
});

const urgencySigns = computed(() => content.value.signs);

const submit = () => {
    form.transform((data) => ({
        ...data,
        animal_other_name: data.animal_type === 'other' ? data.animal_other_name : null,
    })).post(`/${props.locale}/ambulance`);
};
</script>
