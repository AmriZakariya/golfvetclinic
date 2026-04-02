<template>
    <AppLayout>
        <section class="px-4 pt-12 pb-2 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">
                    {{ content.eyebrow }}
                </p>
                <h1 class="mt-4 text-3xl font-semibold leading-tight sm:text-4xl" style="color: var(--brand-ink)">
                    {{ content.title }} <span aria-hidden="true">🩺</span>
                </h1>
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>

                <div class="mt-6 flex flex-wrap gap-3">
                    <a href="#appointment" class="brand-btn-primary">{{ content.book }}</a>
                </div>
            </div>
        </section>

        <section class="px-4 pt-12 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">{{ content.servicesEyebrow }}</p>
                <h2 class="mt-3 text-2xl font-semibold" style="color: var(--brand-ink)">{{ content.servicesTitle }}</h2>

                <div class="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    <article
                        v-for="service in services"
                        :key="service.title"
                        class="brand-card brand-card-hover rounded-[26px] p-6 h-full flex flex-col"
                    >
                        <div class="mb-4 flex items-center gap-3">
                            <div class="brand-icon-badge" aria-hidden="true">{{ service.icon }}</div>
                            <p class="text-xs font-semibold uppercase tracking-[0.2em]" style="color: var(--brand-primary)">
                                {{ service.category }}
                            </p>
                        </div>
                        <h3 class="text-base font-semibold" style="color: var(--brand-ink)">{{ service.title }}</h3>
                        <p class="mt-2 text-sm leading-6 flex-grow" style="color: var(--brand-muted)">{{ service.description }}</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="px-4 pt-14 lg:px-6">
            <div class="mx-auto max-w-6xl">
                <div class="brand-card rounded-[32px] p-8 lg:p-10">
                    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-center">
                        <div>
                            <p class="text-xs font-semibold uppercase tracking-[0.22em]" style="color: var(--brand-primary)">{{ content.whyEyebrow }}</p>
                            <h2 class="mt-3 text-2xl font-semibold leading-snug" style="color: var(--brand-ink)">
                                {{ content.whyTitle }}
                            </h2>
                            <p class="mt-3 text-sm leading-7" style="color: var(--brand-muted)">
                                {{ content.whyText }}
                            </p>
                        </div>
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div
                                v-for="item in whyUs"
                                :key="item.title"
                                class="rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1"
                                style="background: var(--brand-panel)"
                            >
                                <p class="text-2xl" aria-hidden="true">{{ item.icon }}</p>
                                <p class="mt-2 text-sm font-semibold" style="color: var(--brand-ink)">{{ item.title }}</p>
                                <p class="mt-1 text-xs leading-5" style="color: var(--brand-muted)">{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="px-4 pt-14 pb-20 lg:px-6" id="appointment">
            <div class="mx-auto max-w-6xl">
                <div class="brand-card rounded-[32px] p-8 text-center">
                    <p class="text-4xl" aria-hidden="true">🐾</p>
                    <h2 class="mt-4 text-2xl font-semibold" style="color: var(--brand-ink)">
                        {{ content.ctaTitle }}
                    </h2>
                    <p class="mx-auto mt-3 max-w-lg text-sm leading-7" style="color: var(--brand-muted)">
                        {{ content.ctaText }}
                    </p>
                    <div class="mt-6 flex flex-wrap justify-center gap-3">
                        <a :href="`/${locale}`" class="brand-btn-primary">{{ content.bookOnline }}</a>
                        <a href="tel:+212539376388" class="brand-btn-outline"><span aria-hidden="true">📞</span> +212 5 39 37 63 88</a>
                    </div>
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
        eyebrow: 'Soins veterinaires · Tanger',
        title: 'Soins complets pour chiens, chats et autres animaux',
        lead: 'Consultations, vaccination, imagerie, chirurgie, analyses et suivi preventif dans une clinique moderne a Tanger.',
        book: 'Prendre rendez-vous',
        servicesEyebrow: 'Nos prestations',
        servicesTitle: 'Une prise en charge globale',
        whyEyebrow: 'Pourquoi nous choisir',
        whyTitle: 'Une equipe passionnee au service de votre animal',
        whyText: 'La clinique reunit des praticiens experimentes dans un espace moderne pense pour rassurer les familles a chaque visite.',
        ctaTitle: 'Pret a prendre soin de votre compagnon ?',
        ctaText: 'Prenez rendez-vous depuis la page d accueil ou appelez-nous directement. Notre equipe sera ravie de vous accueillir.',
        bookOnline: 'Prendre rendez-vous en ligne',
    },
    en: {
        eyebrow: 'Veterinary care · Tangier',
        title: 'Complete care for dogs, cats and other pets',
        lead: 'Consultations, vaccination, imaging, surgery, lab testing and preventive follow-up in a modern clinic in Tangier.',
        book: 'Book an appointment',
        servicesEyebrow: 'Our services',
        servicesTitle: 'Comprehensive veterinary support',
        whyEyebrow: 'Why choose us',
        whyTitle: 'A passionate team focused on your pet',
        whyText: 'Our clinic brings together experienced practitioners in a modern environment designed to lower stress at every visit.',
        ctaTitle: 'Ready to care for your companion?',
        ctaText: 'Book from the homepage or call us directly. Our veterinary team will be happy to welcome you.',
        bookOnline: 'Book online',
    },
    ar: {
        eyebrow: 'الرعاية البيطرية · طنجة',
        title: 'رعاية متكاملة للكلاب والقطط والحيوانات الاخرى',
        lead: 'استشارات وتلقيح وتصوير وجراحة وتحاليل ومتابعة وقائية داخل عيادة حديثة في طنجة.',
        book: 'احجز موعدا',
        servicesEyebrow: 'خدماتنا',
        servicesTitle: 'رعاية شاملة ومتكاملة',
        whyEyebrow: 'لماذا نحن',
        whyTitle: 'فريق شغوف يهتم بحيوانك',
        whyText: 'تجمع العيادة بين الخبرة والتنظيم الحديث لتقديم تجربة اكثر طمانينة ووضوحا في كل زيارة.',
        ctaTitle: 'هل انت مستعد للاهتمام بحيوانك؟',
        ctaText: 'احجز من الصفحة الرئيسية او اتصل بنا مباشرة. فريقنا البيطري سعيد باستقبالكم.',
        bookOnline: 'احجز عبر الموقع',
    },
    es: {
        eyebrow: 'Cuidados veterinarios · Tanger',
        title: 'Atencion completa para perros, gatos y otras mascotas',
        lead: 'Consultas, vacunacion, imagen, cirugia, analisis y seguimiento preventivo en una clinica moderna en Tanger.',
        book: 'Reservar cita',
        servicesEyebrow: 'Nuestros servicios',
        servicesTitle: 'Atencion veterinaria integral',
        whyEyebrow: 'Por que elegirnos',
        whyTitle: 'Un equipo comprometido con tu mascota',
        whyText: 'La clinica reune profesionales con experiencia en un entorno moderno pensado para reducir el estres.',
        ctaTitle: 'Listo para cuidar de tu companero?',
        ctaText: 'Reserva desde la pagina principal o llamanos directamente. Estaremos encantados de recibirte.',
        bookOnline: 'Reservar en linea',
    },
};
const content = computed(() => pageContent[locale.value] ?? pageContent.fr);

const servicesByLocale = {
fr: [
    {
        icon: '🩺',
        category: 'Medecine generale',
        title: 'Consultation et diagnostic',
        description: 'Examen clinique complet, bilan preventif et suivi des maladies chroniques.',
    },
    {
        icon: '💉',
        category: 'Prevention',
        title: 'Vaccination et antiparasitaires',
        description: 'Protocoles adaptes et traitements preventifs contre puces, tiques et vers.',
    },
    {
        icon: '🔬',
        category: 'Laboratoire',
        title: 'Analyses de sang & urines',
        description: "Bilan sanguin, analyse d urine et tests rapides pour un diagnostic precis.",
    },
    {
        icon: '📡',
        category: 'Imagerie',
        title: 'Radiographie & échographie',
        description: 'Imagerie médicale sur place pour un diagnostic rapide sans délai de transfert.',
    },
    {
        icon: '🔪',
        category: 'Chirurgie',
        title: 'Interventions chirurgicales',
        description: 'Sterilisation, extraction dentaire, chirurgie des tissus mous et suivi post-operatoire.',
    },
    {
        icon: '🦷',
        category: 'Dentisterie',
        title: 'Soins dentaires',
        description: 'Détartrage, extraction et hygiène bucco-dentaire pour prévenir les maladies parodontales.',
    },
    {
        icon: '💊',
        category: 'Pharmacie',
        title: 'Medicaments et prescriptions',
        description: 'Dispensation des medicaments veterinaires et conseils de traitement personnalises.',
    },
    {
        icon: '🐾',
        category: 'NAC & exotiques',
        title: 'Autres animaux de compagnie',
        description: 'Prise en charge des lapins, oiseaux et autres petits animaux par des praticiens formes.',
    },
    {
        icon: '🚑',
        category: 'Urgences',
        title: "Soins d urgence 24h/24",
        description: 'Disponibilite permanente pour les urgences vitales avec ambulance veterinaire.',
    },
],
en: [],
ar: [],
es: [],
};
servicesByLocale.en = servicesByLocale.fr.map((item, index) => ([
    { ...item, category: 'General care', title: 'Consultation and diagnosis', description: 'Full clinical exams, preventive checkups and chronic care follow-up.' },
    { ...item, category: 'Prevention', title: 'Vaccination and parasite care', description: 'Tailored vaccination plans and preventive care against fleas, ticks and worms.' },
    { ...item, category: 'Laboratory', title: 'Blood and urine tests', description: 'On-site tests for quicker and clearer diagnosis.' },
    { ...item, category: 'Imaging', title: 'X-ray and ultrasound', description: 'Medical imaging in the clinic for faster decisions.' },
    { ...item, category: 'Surgery', title: 'Surgical procedures', description: 'Sterilization, soft tissue surgery and post-operative follow-up.' },
    { ...item, category: 'Dentistry', title: 'Dental care', description: 'Scaling, extraction and oral hygiene support.' },
    { ...item, category: 'Pharmacy', title: 'Medication and prescriptions', description: 'Veterinary medication and treatment guidance.' },
    { ...item, category: 'Other pets', title: 'Care for other pets', description: 'Care for rabbits, birds and other small pets.' },
    { ...item, category: 'Emergency', title: '24/7 emergency care', description: 'Permanent availability for critical cases and urgent transport.' },
][index]));
servicesByLocale.ar = servicesByLocale.fr.map((item, index) => ([
    { ...item, category: 'رعاية عامة', title: 'استشارة وتشخيص', description: 'فحص سريري كامل ومتابعة وقائية ومرافقة للحالات المزمنة.' },
    { ...item, category: 'وقاية', title: 'تلقيح ومكافحة الطفيليات', description: 'خطط تلقيح وعلاجات وقائية مناسبة لكل حيوان.' },
    { ...item, category: 'مختبر', title: 'تحاليل دم وبول', description: 'تحاليل داخل العيادة لتشخيص اسرع واوضح.' },
    { ...item, category: 'تصوير', title: 'اشعة وايكو', description: 'تصوير طبي داخل العيادة لاتخاذ القرار بسرعة.' },
    { ...item, category: 'جراحة', title: 'تدخلات جراحية', description: 'تعقيم وجراحات الانسجة الرخوة ومتابعة بعد العملية.' },
    { ...item, category: 'اسنان', title: 'العناية بالاسنان', description: 'تنظيف ومعالجة مشاكل الفم والاسنان.' },
    { ...item, category: 'صيدلية', title: 'ادوية ووصفات', description: 'توفير الادوية البيطرية مع توجيهات واضحة.' },
    { ...item, category: 'حيوانات اخرى', title: 'رعاية الحيوانات الاخرى', description: 'رعاية الارانب والطيور والحيوانات الصغيرة الاخرى.' },
    { ...item, category: 'طوارئ', title: 'رعاية طارئة 24/7', description: 'جاهزية دائمة للحالات الحرجة والتنقل المستعجل.' },
][index]));
servicesByLocale.es = servicesByLocale.fr.map((item, index) => ([
    { ...item, category: 'Atencion general', title: 'Consulta y diagnostico', description: 'Examen clinico completo, control preventivo y seguimiento de enfermedades cronicas.' },
    { ...item, category: 'Prevencion', title: 'Vacunacion y antiparasitarios', description: 'Planes adaptados y tratamiento preventivo contra pulgas, garrapatas y parasitos.' },
    { ...item, category: 'Laboratorio', title: 'Analisis de sangre y orina', description: 'Pruebas en la clinica para un diagnostico mas rapido.' },
    { ...item, category: 'Imagen', title: 'Radiografia y ecografia', description: 'Imagen medica en la clinica para decisiones mas rapidas.' },
    { ...item, category: 'Cirugia', title: 'Procedimientos quirurgicos', description: 'Esterilizacion, cirugia de tejidos blandos y seguimiento posterior.' },
    { ...item, category: 'Odontologia', title: 'Cuidados dentales', description: 'Limpieza, extraccion e higiene oral.' },
    { ...item, category: 'Farmacia', title: 'Medicacion y recetas', description: 'Medicacion veterinaria y orientacion terapeutica.' },
    { ...item, category: 'Otras mascotas', title: 'Cuidados para otras mascotas', description: 'Atencion para conejos, aves y otros pequenos animales.' },
    { ...item, category: 'Urgencia', title: 'Urgencias 24/7', description: 'Disponibilidad permanente para situaciones criticas.' },
][index]));
const services = computed(() => servicesByLocale[locale.value] ?? servicesByLocale.fr);

const whyUsByLocale = {
    fr: [
        { icon: '🏆', title: 'Expertise reconnue', text: 'Equipe experimentee avec specialisation en medecine interne et chirurgie.' },
        { icon: '🏥', title: 'Equipements modernes', text: 'Materiel de diagnostic de pointe pour des resultats fiables.' },
        { icon: '❤️', title: 'Approche bienveillante', text: 'Reduction du stress et accompagnement rassurant pour chaque animal.' },
        { icon: '🌍', title: 'Multilingue', text: 'Consultation disponible en francais, arabe, anglais et espagnol.' },
    ],
    en: [
        { icon: '🏆', title: 'Trusted expertise', text: 'Experienced team with strong medical and surgical know-how.' },
        { icon: '🏥', title: 'Modern equipment', text: 'Advanced diagnostic tools for reliable results.' },
        { icon: '❤️', title: 'Compassionate approach', text: 'Gentle care and a reassuring experience for every pet.' },
        { icon: '🌍', title: 'Multilingual support', text: 'Available in French, Arabic, English and Spanish.' },
    ],
    ar: [
        { icon: '🏆', title: 'خبرة موثوقة', text: 'فريق متمرس بخبرة قوية في الطب والجراحة البيطرية.' },
        { icon: '🏥', title: 'تجهيزات حديثة', text: 'معدات تشخيص متطورة لنتائج اكثر دقة.' },
        { icon: '❤️', title: 'تعامل رحيم', text: 'رعاية هادئة وتجربة اكثر طمانينة لكل حيوان.' },
        { icon: '🌍', title: 'دعم متعدد اللغات', text: 'الخدمة متوفرة بالفرنسية والعربية والانجليزية والاسبانية.' },
    ],
    es: [
        { icon: '🏆', title: 'Experiencia reconocida', text: 'Equipo con experiencia en medicina interna y cirugia.' },
        { icon: '🏥', title: 'Equipamiento moderno', text: 'Herramientas de diagnostico avanzadas para resultados fiables.' },
        { icon: '❤️', title: 'Enfoque cercano', text: 'Atencion amable y reduccion del estres para cada animal.' },
        { icon: '🌍', title: 'Atencion multilingue', text: 'Disponible en frances, arabe, ingles y espanol.' },
    ],
};
const whyUs = computed(() => whyUsByLocale[locale.value] ?? whyUsByLocale.fr);
</script>
