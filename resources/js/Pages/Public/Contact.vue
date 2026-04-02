<template>
    <AppLayout>
        <!-- Page Header -->
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }}
                </h1>
                <p class="mt-3 max-w-xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>
            </div>
        </section>

        <!-- Main content -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">

                <!-- Contact info -->
                <div class="space-y-5">
                    <div class="brand-card rounded-[28px] p-7">
                        <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">
                            {{ content.detailsTitle }}
                        </p>
                        <dl class="mt-5 space-y-5">
                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">📍</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.addressLabel }}</dt>
                                    <dd class="mt-1 text-sm leading-6" style="color: var(--brand-ink)">
                                        Quartier du Golf, Tanger<br />Maroc
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">📞</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.phoneLabel }}</dt>
                                    <dd class="mt-1">
                                        <a
                                            href="tel:+212539376388"
                                            class="text-sm font-semibold transition hover:opacity-80"
                                            style="color: var(--brand-ink)"
                                        >
                                            +212 5 39 37 63 88
                                        </a>
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">✉️</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.emailLabel }}</dt>
                                    <dd class="mt-1">
                                        <a
                                            href="mailto:contact@legolfpetcare.ma"
                                            class="text-sm font-semibold transition hover:opacity-80"
                                            style="color: var(--brand-ink)"
                                        >
                                            contact@legolfpetcare.ma
                                        </a>
                                    </dd>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="brand-icon-badge mt-0.5">🕐</div>
                                <div>
                                    <dt class="text-xs font-semibold uppercase tracking-[0.18em]" style="color: var(--brand-muted)">{{ content.hoursLabel }}</dt>
                                    <dd class="mt-1 text-sm leading-6" style="color: var(--brand-ink)">
                                        {{ content.hoursText }}<br />
                                        <span style="color: var(--brand-primary)">{{ content.emergencyText }}</span>
                                    </dd>
                                </div>
                            </div>
                        </dl>

                        <!-- CTA buttons -->
                        <div class="mt-7 flex flex-wrap gap-3">
                            <a href="tel:+212539376388" class="brand-btn-primary">
                                {{ content.call }}
                            </a>
                            <a
                                href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                                target="_blank"
                                rel="noreferrer"
                                class="brand-btn-outline"
                            >
                                {{ content.directions }}
                            </a>
                        </div>
                    </div>

                    <!-- Quick facts -->
                    <div class="grid gap-4 sm:grid-cols-2">
                        <article
                            v-for="fact in quickFacts"
                            :key="fact.title"
                            class="brand-card rounded-[22px] p-5"
                        >
                            <p class="text-lg">{{ fact.icon }}</p>
                            <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ fact.title }}</p>
                            <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ fact.text }}</p>
                        </article>
                    </div>
                </div>

                <!-- Map -->
                <div class="space-y-3">
                    <div class="brand-card overflow-hidden rounded-[28px] p-3">
                        <iframe
                            :title="content.mapTitle"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-5.800!3d35.780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzQ4LjAiTiA1wrA0OCcyMC4wIlc!5e0!3m2!1sfr!2sma!4v1700000000000"
                            width="100%"
                            height="340"
                            style="border: 0; border-radius: 20px; display: block;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <a
                        href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                        target="_blank"
                        rel="noreferrer"
                        class="brand-btn-outline w-full"
                    >
                        {{ content.openMaps }}
                    </a>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { computed } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import { getLocale } from '../../lib/site';

const props = defineProps({
    locale: { type: String, default: 'fr' },
});

const locale = computed(() => getLocale(props.locale));
const pageContent = {
    fr: {
        eyebrow: 'Contact et localisation',
        title: 'Clinique veterinaire Le Golf · Tanger',
        lead: 'Retrouvez-nous dans le quartier du Golf a Tanger avec acces facile, parking proche et prise en charge rapide.',
        detailsTitle: 'Nos coordonnees',
        addressLabel: 'Adresse',
        phoneLabel: 'Telephone',
        emailLabel: 'Email',
        hoursLabel: 'Horaires',
        hoursText: 'Lun – Sam : 9h00 – 19h00',
        emergencyText: 'Urgences : 24h/24, 7j/7',
        call: 'Appeler',
        directions: 'Itineraire',
        openMaps: 'Ouvrir dans Google Maps',
        mapTitle: 'Clinique Veterinaire Le Golf – Tanger',
    },
    en: {
        eyebrow: 'Contact and location',
        title: 'Le Golf veterinary clinic · Tangier',
        lead: 'Find us in the Golf district in Tangier with easy access, nearby parking and quick support for your pet.',
        detailsTitle: 'Contact details',
        addressLabel: 'Address',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        hoursLabel: 'Opening hours',
        hoursText: 'Mon – Sat: 9:00 – 19:00',
        emergencyText: 'Emergency: 24/7',
        call: 'Call us',
        directions: 'Directions',
        openMaps: 'Open in Google Maps',
        mapTitle: 'Le Golf Veterinary Clinic – Tangier',
    },
    ar: {
        eyebrow: 'التواصل والموقع',
        title: 'عيادة لو غولف البيطرية · طنجة',
        lead: 'زورونا في حي الغولف بطنجة مع وصول سهل وموقف قريب واستقبال سريع لحيوانكم.',
        detailsTitle: 'معلومات التواصل',
        addressLabel: 'العنوان',
        phoneLabel: 'الهاتف',
        emailLabel: 'البريد الالكتروني',
        hoursLabel: 'اوقات العمل',
        hoursText: 'الاثنين – السبت: 9:00 – 19:00',
        emergencyText: 'الطوارئ: 24/7',
        call: 'اتصل بنا',
        directions: 'الاتجاهات',
        openMaps: 'افتح في خرائط Google',
        mapTitle: 'عيادة لو غولف البيطرية – طنجة',
    },
    es: {
        eyebrow: 'Contacto y ubicacion',
        title: 'Clinica veterinaria Le Golf · Tanger',
        lead: 'Encuentranos en el barrio du Golf en Tanger con acceso facil, aparcamiento cercano y atencion rapida.',
        detailsTitle: 'Datos de contacto',
        addressLabel: 'Direccion',
        phoneLabel: 'Telefono',
        emailLabel: 'Email',
        hoursLabel: 'Horario',
        hoursText: 'Lun – Sab: 9:00 – 19:00',
        emergencyText: 'Urgencias: 24/7',
        call: 'Llamar',
        directions: 'Como llegar',
        openMaps: 'Abrir en Google Maps',
        mapTitle: 'Clinica Veterinaria Le Golf – Tanger',
    },
};
const content = computed(() => pageContent[locale.value] ?? pageContent.fr);
const factsByLocale = {
    fr: [
        { icon: '🅿️', title: 'Parking gratuit', text: 'Acces facile avec parking a proximite immediate.' },
        { icon: '🐾', title: 'Chiens et chats', text: 'Prise en charge claire pour chiens, chats et autres besoins sur demande.' },
        { icon: '💉', title: 'Equipee', text: 'Imagerie, chirurgie et laboratoire sur place.' },
        { icon: '🚑', title: 'Ambulance', text: 'Intervention a domicile sur appel 24h/24.' },
    ],
    en: [
        { icon: '🅿️', title: 'Free parking', text: 'Easy access with nearby parking.' },
        { icon: '🐾', title: 'Dogs and cats', text: 'Clear support for dogs, cats and other needs on request.' },
        { icon: '💉', title: 'Well equipped', text: 'Imaging, surgery and lab services on site.' },
        { icon: '🚑', title: 'Ambulance', text: 'Home intervention available on urgent call.' },
    ],
    ar: [
        { icon: '🅿️', title: 'موقف مجاني', text: 'وصول سهل مع موقف قريب.' },
        { icon: '🐾', title: 'كلاب وقطط', text: 'رعاية واضحة للكلاب والقطط واحتياجات اخرى عند الطلب.' },
        { icon: '💉', title: 'مجهزة جيدا', text: 'تصوير وجراحة ومختبر داخل العيادة.' },
        { icon: '🚑', title: 'اسعاف', text: 'تدخل منزلي عند الحاجة للحالات المستعجلة.' },
    ],
    es: [
        { icon: '🅿️', title: 'Parking gratuito', text: 'Acceso facil con aparcamiento cercano.' },
        { icon: '🐾', title: 'Perros y gatos', text: 'Atencion clara para perros, gatos y otras necesidades bajo demanda.' },
        { icon: '💉', title: 'Bien equipada', text: 'Imagen, cirugia y laboratorio en la clinica.' },
        { icon: '🚑', title: 'Ambulancia', text: 'Intervencion a domicilio en caso urgente.' },
    ],
};
const quickFacts = computed(() => factsByLocale[locale.value] ?? factsByLocale.fr);
</script>
