export const supportedLocales = ['fr', 'en', 'ar', 'es'];

export const localeMeta = {
    fr: { label: 'FR', nativeLabel: 'Francais', dir: 'ltr' },
    en: { label: 'EN', nativeLabel: 'English', dir: 'ltr' },
    ar: { label: 'AR', nativeLabel: 'العربية', dir: 'rtl' },
    es: { label: 'ES', nativeLabel: 'Espanol', dir: 'ltr' },
};

export const brand = {
    name: 'Le Golf PetCare',
    clinicName: 'Clinique Veterinaire Le Golf',
    city: 'Tanger',
    phoneDisplay: '+212 5 39 37 63 88',
    phoneHref: 'tel:+212539376388',
    whatsappHref:
        'https://wa.me/212539376388?text=Bonjour%2C%20je%20souhaite%20des%20informations%20pour%20mon%20animal.',
    mapsHref: 'https://maps.google.com?q=Clinique+Veterinaire+Le+Golf+Tanger',
    mapsEmbed:
        'https://www.google.com/maps?q=Clinique+Veterinaire+Le+Golf+Tanger&z=15&output=embed',
    address: 'Quartier du Golf, Tanger',
    hours: 'Lun-Sam 9h00-19h30 · Urgences 24/7',
    logo: '/images/logo-golf-petcare.jpg',
};

export const serviceLinks = [
    { key: 'care', href: '/soins-veterinaires' },
    { key: 'ambulance', href: '/ambulance-veterinaire-tanger' },
    { key: 'boarding', href: '/pension-animaux-tanger' },
    { key: 'grooming', href: '/toilettage-chien-tanger' },
    { key: 'shop', href: '/boutique' },
    { key: 'community', href: '/communaute' },
    { key: 'contact', href: '/contact-clinique-veterinaire-tanger' },
];

export const messages = {
    fr: {
        clinicTag: 'Clinique veterinaire premium a Tanger',
        nav: {
            home: 'Accueil',
            care: 'Soins',
            ambulance: 'Ambulance',
            boarding: 'Pension',
            grooming: 'Toilettage',
            shop: 'Boutique',
            community: 'Communaute',
            contact: 'Contact',
        },
        ctas: {
            appointment: 'Prendre rendez-vous',
            emergency: 'Urgence 24/7',
            call: 'Appeler la clinique',
            whatsapp: 'WhatsApp',
            directions: 'Itineraire',
            explore: 'Decouvrir les services',
            contact: 'Nous contacter',
        },
        layout: {
            subtitle: 'Clinique veterinaire · Tanger',
            switcherLabel: 'Langue',
            footerLead: 'Soins, urgence, pension, toilettage et accompagnement premium.',
            footerNote: 'Concu pour rassurer les familles et convertir les visiteurs en patients.',
        },
        home: {
            badge: 'Reference veterinaire locale, soins attentifs et accueil rassurant.',
            title: 'Une clinique veterinaire moderne qui inspire confiance des le premier regard.',
            highlight: 'Le Golf PetCare accompagne chiens, chats et NAC avec clarte, disponibilite et exigence.',
            lead: 'Soins veterinaries, ambulance, pension, toilettage et accompagnement quotidien dans un univers premium pense pour Tanger.',
            appointmentCardTitle: 'Demande de rendez-vous rapide',
            appointmentCardText: 'Laissez vos coordonnees et le motif de consultation. Notre equipe vous rappelle rapidement.',
            form: {
                name: 'Nom et prenom',
                phone: 'Telephone',
                animalType: 'Type d animal',
                date: 'Date souhaitee',
                reason: 'Motif de consultation',
                submit: 'Envoyer la demande de rendez-vous',
                sending: 'Envoi en cours...',
                helper: 'Nous revenons vers vous rapidement pour confirmer l horaire.',
            },
            servicesTitle: 'Des services clairs, visibles et faciles a contacter',
            servicesText: 'Chaque parcours a un objectif simple : informer, rassurer et encourager une prise de contact rapide.',
            trustTitle: 'Pourquoi les familles nous choisissent',
            trustText: 'Une experience plus lisible, plus rassurante et plus premium pour vos visiteurs.',
            testimonialsTitle: 'Ils nous font deja confiance',
            testimonialsText: 'Avis clients et ressentis reels pour renforcer la preuve sociale.',
            locationTitle: 'Clinique facile a trouver, equipe facile a joindre',
            locationText: 'Ajoutez vos vraies photos plus tard : la structure est deja prete pour mettre en avant localisation, acces et contact rapide.',
            galleryTitle: 'Identite visuelle et ambiance de marque',
            galleryText: 'Le design reprend la chaleur terracotta du logo pour une image plus memorisable et personnalisable.',
            stats: {
                emergency: 'Urgences 24/7',
                location: 'Quartier du Golf',
                services: 'Services digitalises',
            },
            trust: [
                {
                    title: 'Parcours simple',
                    text: 'Les informations essentielles sont visibles sans chercher : services, urgence, contact et localisation.',
                },
                {
                    title: 'Image premium',
                    text: 'Palette liee au logo, sections aeriennes, typographie nette et blocs pensés pour la conversion.',
                },
                {
                    title: 'Base multilingue',
                    text: 'Le site est pret pour francais, anglais, arabe et espagnol avec support RTL pour l arabe.',
                },
            ],
            services: {
                care: {
                    eyebrow: 'Soins',
                    title: 'Consultations et suivi veterinaire',
                    text: 'Bilans, prevention, vaccination, diagnostic et accompagnement medical.',
                },
                ambulance: {
                    eyebrow: 'Urgence',
                    title: 'Ambulance veterinaire',
                    text: 'Demande prioritaire pour situations sensibles et trajets urgents.',
                },
                boarding: {
                    eyebrow: 'Sejour',
                    title: 'Pension animaliere',
                    text: 'Reservation simple avec dates, instructions et encadrement.',
                },
                grooming: {
                    eyebrow: 'Bien-etre',
                    title: 'Toilettage',
                    text: 'Prestations lisibles avec informations de race, poids et besoins.',
                },
                shop: {
                    eyebrow: 'Boutique',
                    title: 'Catalogue de produits',
                    text: 'Une premiere vitrine simple pour alimentation, hygiene et accessoires.',
                },
                community: {
                    eyebrow: 'Communaute',
                    title: 'Flux local animaux perdus et trouves',
                    text: 'Un levier utile pour le SEO local et l engagement de quartier.',
                },
            },
            location: {
                cardTitle: 'Infos utiles',
                addressLabel: 'Adresse',
                hoursLabel: 'Horaires',
                phoneLabel: 'Telephone',
            },
        },
    },
    en: {
        clinicTag: 'Premium veterinary clinic in Tangier',
        nav: {
            home: 'Home',
            care: 'Care',
            ambulance: 'Ambulance',
            boarding: 'Boarding',
            grooming: 'Grooming',
            shop: 'Shop',
            community: 'Community',
            contact: 'Contact',
        },
        ctas: {
            appointment: 'Book an appointment',
            emergency: '24/7 emergency',
            call: 'Call the clinic',
            whatsapp: 'WhatsApp',
            directions: 'Directions',
            explore: 'Explore services',
            contact: 'Contact us',
        },
        layout: {
            subtitle: 'Veterinary clinic · Tangier',
            switcherLabel: 'Language',
            footerLead: 'Care, emergency, boarding, grooming and premium support.',
            footerNote: 'Designed to reassure families and turn visitors into patients.',
        },
        home: {
            badge: 'Local veterinary reference with thoughtful care and a reassuring experience.',
            title: 'A modern veterinary clinic that builds trust from the very first screen.',
            highlight: 'Le Golf PetCare supports dogs, cats and exotic pets with clarity, availability and high standards.',
            lead: 'Veterinary care, ambulance, boarding, grooming and daily support in a premium digital experience for Tangier.',
            appointmentCardTitle: 'Quick appointment request',
            appointmentCardText: 'Leave your contact details and consultation reason. Our team will call you back shortly.',
            form: {
                name: 'Full name',
                phone: 'Phone',
                animalType: 'Animal type',
                date: 'Preferred date',
                reason: 'Reason for consultation',
                submit: 'Send appointment request',
                sending: 'Sending...',
                helper: 'We will get back to you quickly to confirm the exact time.',
            },
            servicesTitle: 'Clear services that are easy to understand and easy to contact',
            servicesText: 'Every section is designed to inform, reassure and drive quick action.',
            trustTitle: 'Why families choose us',
            trustText: 'A clearer, stronger and more premium experience for your visitors.',
            testimonialsTitle: 'Trusted by pet owners already',
            testimonialsText: 'Real testimonials that reinforce social proof.',
            locationTitle: 'Easy to find, easy to contact',
            locationText: 'You can replace placeholders with real clinic photos later. The structure is ready for maps, access info and quick contact.',
            galleryTitle: 'Brand identity and visual direction',
            galleryText: 'The interface now follows the logo terracotta palette for a memorable and customizable brand look.',
            stats: {
                emergency: '24/7 emergency',
                location: 'Golf district',
                services: 'Digitized services',
            },
            trust: [
                {
                    title: 'Simple journey',
                    text: 'Visitors can instantly see the key information: services, emergency help, contact and location.',
                },
                {
                    title: 'Premium look',
                    text: 'Logo-driven palette, refined spacing and conversion-focused sections.',
                },
                {
                    title: 'Multilingual base',
                    text: 'Ready for French, English, Arabic and Spanish, including RTL support for Arabic.',
                },
            ],
            services: {
                care: {
                    eyebrow: 'Care',
                    title: 'Consultations and veterinary follow-up',
                    text: 'Checkups, prevention, vaccination, diagnostics and medical follow-up.',
                },
                ambulance: {
                    eyebrow: 'Emergency',
                    title: 'Veterinary ambulance',
                    text: 'Priority requests for urgent situations and critical transport.',
                },
                boarding: {
                    eyebrow: 'Stay',
                    title: 'Pet boarding',
                    text: 'Simple booking flow with dates, instructions and supervision.',
                },
                grooming: {
                    eyebrow: 'Wellbeing',
                    title: 'Grooming services',
                    text: 'Clear service intake with breed, weight and care details.',
                },
                shop: {
                    eyebrow: 'Shop',
                    title: 'Product catalog',
                    text: 'A simple first showcase for food, hygiene and accessories.',
                },
                community: {
                    eyebrow: 'Community',
                    title: 'Local lost and found pet feed',
                    text: 'A useful lever for local SEO and neighborhood engagement.',
                },
            },
            location: {
                cardTitle: 'Useful info',
                addressLabel: 'Address',
                hoursLabel: 'Hours',
                phoneLabel: 'Phone',
            },
        },
    },
    ar: {
        clinicTag: 'عيادة بيطرية راقية في طنجة',
        nav: {
            home: 'الرئيسية',
            care: 'العلاجات',
            ambulance: 'الاسعاف',
            boarding: 'الايواء',
            grooming: 'العناية',
            shop: 'المتجر',
            community: 'المجتمع',
            contact: 'اتصل بنا',
        },
        ctas: {
            appointment: 'احجز موعدا',
            emergency: 'طوارئ 24/7',
            call: 'اتصل بالعيادة',
            whatsapp: 'واتساب',
            directions: 'الاتجاهات',
            explore: 'اكتشف الخدمات',
            contact: 'تواصل معنا',
        },
        layout: {
            subtitle: 'عيادة بيطرية · طنجة',
            switcherLabel: 'اللغة',
            footerLead: 'رعاية وعناية وطوارئ وايواء وخدمات مريحة للعائلات.',
            footerNote: 'واجهة اوضح واكثر طمانينة لتحويل الزائر الى عميل فعلي.',
        },
        home: {
            badge: 'مرجع محلي للرعاية البيطرية مع تجربة واضحة ومطمئنة.',
            title: 'عيادة بيطرية حديثة تبني الثقة من اول زيارة.',
            highlight: 'Le Golf PetCare يرافق الكلاب والقطط والحيوانات الصغيرة بعناية ووضوح واستجابة سريعة.',
            lead: 'رعاية بيطرية واسعاف وايواء وعناية يومية ضمن تجربة رقمية راقية لمدينة طنجة.',
            appointmentCardTitle: 'طلب موعد سريع',
            appointmentCardText: 'اترك بياناتك وسبب الزيارة وسنتواصل معك بسرعة.',
            form: {
                name: 'الاسم الكامل',
                phone: 'الهاتف',
                animalType: 'نوع الحيوان',
                date: 'التاريخ المفضل',
                reason: 'سبب الاستشارة',
                submit: 'ارسال طلب الموعد',
                sending: 'جار الارسال...',
                helper: 'سيتم التواصل معك سريعا لتأكيد الموعد.',
            },
            servicesTitle: 'خدمات واضحة وسهلة الوصول',
            servicesText: 'كل قسم مصمم لشرح الخدمة بسرعة وخلق ثقة وتشجيع التواصل المباشر.',
            trustTitle: 'لماذا تختارنا العائلات',
            trustText: 'تجربة اوضح واقوى واجمل للزوار والعملاء.',
            testimonialsTitle: 'اراء العملاء',
            testimonialsText: 'تجارب حقيقية تعزز الثقة والمصداقية.',
            locationTitle: 'الوصول الينا سهل والتواصل معنا اسهل',
            locationText: 'يمكنك لاحقا استبدال العناصر المؤقتة بصور حقيقية للعيادة، والبنية جاهزة للموقع والمعلومات وطرق التواصل.',
            galleryTitle: 'هوية بصرية مستوحاة من الشعار',
            galleryText: 'الواجهة الجديدة تعتمد الوان الشعار الترابية لتكون مميزة وسهلة التخصيص لاحقا.',
            stats: {
                emergency: 'طوارئ 24/7',
                location: 'حي الغولف',
                services: 'خدمات رقمية',
            },
            trust: [
                {
                    title: 'رحلة ابسط',
                    text: 'الخدمات والطوارئ والموقع ووسائل التواصل تظهر بسرعة بدون بحث طويل.',
                },
                {
                    title: 'صورة راقية',
                    text: 'الوان من الشعار ومساحات مريحة واقسام تدعم التحويل بشكل افضل.',
                },
                {
                    title: 'اساس متعدد اللغات',
                    text: 'الموقع جاهز للفرنسية والانجليزية والعربية والاسبانية مع دعم الاتجاه من اليمين لليسار.',
                },
            ],
            services: {
                care: {
                    eyebrow: 'الرعاية',
                    title: 'استشارات ومتابعة بيطرية',
                    text: 'فحوصات ووقاية وتلقيح وتشخيص ومرافقة طبية مستمرة.',
                },
                ambulance: {
                    eyebrow: 'الطوارئ',
                    title: 'اسعاف بيطري',
                    text: 'طلبات ذات اولوية للحالات الحساسة والتنقل المستعجل.',
                },
                boarding: {
                    eyebrow: 'الاقامة',
                    title: 'ايواء الحيوانات',
                    text: 'حجز بسيط مع التواريخ والتعليمات والمتابعة.',
                },
                grooming: {
                    eyebrow: 'العناية',
                    title: 'خدمات العناية والنظافة',
                    text: 'نموذج واضح يراعي السلالة والوزن والاحتياجات.',
                },
                shop: {
                    eyebrow: 'المتجر',
                    title: 'عرض المنتجات',
                    text: 'واجهة اولية بسيطة للاغذية والنظافة والاكسسوارات.',
                },
                community: {
                    eyebrow: 'المجتمع',
                    title: 'منشورات الحيوانات الضائعة والموجودة',
                    text: 'قسم مفيد لتحسين الظهور المحلي وزيادة التفاعل.',
                },
            },
            location: {
                cardTitle: 'معلومات مهمة',
                addressLabel: 'العنوان',
                hoursLabel: 'ساعات العمل',
                phoneLabel: 'الهاتف',
            },
        },
    },
    es: {
        clinicTag: 'Clinica veterinaria premium en Tanger',
        nav: {
            home: 'Inicio',
            care: 'Cuidados',
            ambulance: 'Ambulancia',
            boarding: 'Residencia',
            grooming: 'Peluqueria',
            shop: 'Tienda',
            community: 'Comunidad',
            contact: 'Contacto',
        },
        ctas: {
            appointment: 'Reservar cita',
            emergency: 'Urgencia 24/7',
            call: 'Llamar a la clinica',
            whatsapp: 'WhatsApp',
            directions: 'Como llegar',
            explore: 'Explorar servicios',
            contact: 'Contactarnos',
        },
        layout: {
            subtitle: 'Clinica veterinaria · Tanger',
            switcherLabel: 'Idioma',
            footerLead: 'Cuidados, urgencias, residencia, peluqueria y acompanamiento premium.',
            footerNote: 'Pensado para tranquilizar a las familias y convertir visitas en clientes.',
        },
        home: {
            badge: 'Referencia veterinaria local con una experiencia clara y tranquilizadora.',
            title: 'Una clinica veterinaria moderna que transmite confianza desde la primera pantalla.',
            highlight: 'Le Golf PetCare acompana perros, gatos y pequenos animales con claridad, disponibilidad y exigencia.',
            lead: 'Cuidados veterinarios, ambulancia, residencia, peluqueria y apoyo diario en una experiencia premium para Tanger.',
            appointmentCardTitle: 'Solicitud rapida de cita',
            appointmentCardText: 'Deja tus datos y el motivo de la consulta. Nuestro equipo te llamara pronto.',
            form: {
                name: 'Nombre completo',
                phone: 'Telefono',
                animalType: 'Tipo de animal',
                date: 'Fecha deseada',
                reason: 'Motivo de la consulta',
                submit: 'Enviar solicitud de cita',
                sending: 'Enviando...',
                helper: 'Te responderemos rapidamente para confirmar la hora exacta.',
            },
            servicesTitle: 'Servicios claros, visibles y faciles de contactar',
            servicesText: 'Cada bloque esta pensado para informar, tranquilizar y acelerar la toma de contacto.',
            trustTitle: 'Por que nos eligen las familias',
            trustText: 'Una experiencia mas clara, fuerte y premium para tus visitantes.',
            testimonialsTitle: 'Ya confian en nosotros',
            testimonialsText: 'Opiniones reales para reforzar la prueba social.',
            locationTitle: 'Facil de encontrar, facil de contactar',
            locationText: 'Mas adelante puedes sustituir los elementos provisionales por fotos reales de la clinica. La estructura ya esta lista.',
            galleryTitle: 'Identidad visual inspirada en el logo',
            galleryText: 'La nueva interfaz toma la paleta terracota del logo para una imagen mas recordable y facil de personalizar.',
            stats: {
                emergency: 'Urgencia 24/7',
                location: 'Barrio du Golf',
                services: 'Servicios digitalizados',
            },
            trust: [
                {
                    title: 'Recorrido simple',
                    text: 'El visitante ve enseguida los servicios, la urgencia, el contacto y la ubicacion.',
                },
                {
                    title: 'Imagen premium',
                    text: 'Paleta ligada al logo, mejor respiracion visual y secciones orientadas a conversion.',
                },
                {
                    title: 'Base multilingue',
                    text: 'Lista para frances, ingles, arabe y espanol, con soporte RTL para arabe.',
                },
            ],
            services: {
                care: {
                    eyebrow: 'Cuidados',
                    title: 'Consultas y seguimiento veterinario',
                    text: 'Revision, prevencion, vacunacion, diagnostico y seguimiento medico.',
                },
                ambulance: {
                    eyebrow: 'Urgencia',
                    title: 'Ambulancia veterinaria',
                    text: 'Solicitudes prioritarias para situaciones urgentes y traslados sensibles.',
                },
                boarding: {
                    eyebrow: 'Estancia',
                    title: 'Residencia para mascotas',
                    text: 'Reserva sencilla con fechas, instrucciones y supervision.',
                },
                grooming: {
                    eyebrow: 'Bienestar',
                    title: 'Peluqueria',
                    text: 'Formulario claro con raza, peso y necesidades del animal.',
                },
                shop: {
                    eyebrow: 'Tienda',
                    title: 'Catalogo de productos',
                    text: 'Primer escaparate simple para alimentacion, higiene y accesorios.',
                },
                community: {
                    eyebrow: 'Comunidad',
                    title: 'Flujo local de animales perdidos y encontrados',
                    text: 'Una palanca util para SEO local y participacion del barrio.',
                },
            },
            location: {
                cardTitle: 'Informacion util',
                addressLabel: 'Direccion',
                hoursLabel: 'Horario',
                phoneLabel: 'Telefono',
            },
        },
    },
};

export function getLocale(locale) {
    return supportedLocales.includes(locale) ? locale : 'fr';
}

export function getMessage(locale) {
    return messages[getLocale(locale)];
}

export function localizePath(locale, suffix = '') {
    const normalized = suffix.startsWith('/') ? suffix : `/${suffix}`;

    return `/${getLocale(locale)}${suffix ? normalized : ''}`;
}

export function switchLocalePath(url, targetLocale) {
    const nextLocale = getLocale(targetLocale);
    const cleanUrl = (url || '').split('?')[0].split('#')[0];
    const segments = cleanUrl.split('/').filter(Boolean);

    if (segments.length === 0) {
        return `/${nextLocale}`;
    }

    if (supportedLocales.includes(segments[0])) {
        segments[0] = nextLocale;

        return `/${segments.join('/')}`;
    }

    return `/${nextLocale}${cleanUrl.startsWith('/') ? cleanUrl : `/${cleanUrl}`}`;
}
