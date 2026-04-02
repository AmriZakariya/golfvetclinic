import { brand } from './site';

const seoByLocale = {
    fr: {
        home: {
            title: 'Clinique veterinaire Tanger | Le Golf PetCare',
            description:
                'Clinique veterinaire a Tanger avec consultations, urgences 24/7, ambulance, pension, toilettage et conseils pour chiens et chats.',
            keywords:
                'veterinaire Tanger, clinique veterinaire Tanger, urgence veterinaire Tanger, ambulance veterinaire Tanger, pension chien Tanger, toilettage chat Tanger',
        },
        care: {
            title: 'Soins veterinaires Tanger | Le Golf PetCare',
            description:
                'Consultations, vaccination, chirurgie, imagerie et suivi veterinaire complet a Tanger pour chiens et chats.',
            keywords:
                'soins veterinaires Tanger, consultation veterinaire Tanger, vaccination chien Tanger, clinique chat Tanger',
        },
        ambulance: {
            title: 'Urgence et ambulance veterinaire Tanger | Le Golf PetCare',
            description:
                'Service d urgence et ambulance veterinaire a Tanger pour intervention rapide, transport et prise en charge prioritaire.',
            keywords:
                'urgence veterinaire Tanger, ambulance veterinaire Tanger, veterinaire urgence Tanger',
        },
        boarding: {
            title: 'Pension animaux Tanger | Le Golf PetCare',
            description:
                'Pension pour chiens et chats a Tanger avec environnement securise, suivi et reservation rapide.',
            keywords: 'pension chien Tanger, pension chat Tanger, pension animaux Tanger',
        },
        grooming: {
            title: 'Toilettage chien et chat Tanger | Le Golf PetCare',
            description:
                'Toilettage professionnel pour chiens et chats a Tanger avec bain, coupe, entretien et reservation simple.',
            keywords: 'toilettage chien Tanger, toilettage chat Tanger, toilettage animaux Tanger',
        },
        shop: {
            title: 'Boutique veterinaire Tanger | Le Golf PetCare',
            description:
                'Boutique veterinaire a Tanger avec alimentation, accessoires et hygiene selectionnes pour chiens et chats.',
            keywords: 'boutique veterinaire Tanger, alimentation chien Tanger, accessoires chat Tanger',
        },
        community: {
            title: 'Animaux perdus et trouves Tanger | Le Golf PetCare',
            description:
                'Flux communautaire local pour animaux perdus, trouves et temoignages a Tanger.',
            keywords: 'animal perdu Tanger, chat perdu Tanger, chien trouve Tanger, communaute animaux Tanger',
        },
        contact: {
            title: 'Contact clinique veterinaire Tanger | Le Golf PetCare',
            description:
                'Adresse, telephone, horaires et localisation Google Maps de la Clinique Veterinaire Le Golf a Tanger.',
            keywords: 'contact veterinaire Tanger, adresse clinique veterinaire Tanger, telephone veterinaire Tanger',
        },
    },
    en: {
        home: {
            title: 'Veterinary clinic in Tangier | Le Golf PetCare',
            description:
                'Veterinary clinic in Tangier with consultations, 24/7 emergency care, ambulance, boarding and grooming for dogs and cats.',
            keywords:
                'veterinary clinic Tangier, vet Tangier, emergency vet Tangier, pet boarding Tangier, grooming Tangier',
        },
        care: {
            title: 'Veterinary care in Tangier | Le Golf PetCare',
            description:
                'Consultations, vaccination, surgery, diagnostics and full veterinary care in Tangier for dogs and cats.',
            keywords: 'veterinary care Tangier, pet clinic Tangier, dog vaccination Tangier',
        },
        ambulance: {
            title: 'Emergency vet and ambulance in Tangier | Le Golf PetCare',
            description:
                'Fast emergency veterinary response and pet ambulance service in Tangier.',
            keywords: 'emergency vet Tangier, pet ambulance Tangier',
        },
        boarding: {
            title: 'Pet boarding in Tangier | Le Golf PetCare',
            description:
                'Safe pet boarding in Tangier for dogs and cats with easy booking and veterinary supervision.',
            keywords: 'pet boarding Tangier, dog boarding Tangier, cat boarding Tangier',
        },
        grooming: {
            title: 'Dog and cat grooming in Tangier | Le Golf PetCare',
            description:
                'Professional grooming in Tangier for dogs and cats with bath, coat care and easy appointment requests.',
            keywords: 'dog grooming Tangier, cat grooming Tangier',
        },
        shop: {
            title: 'Veterinary shop in Tangier | Le Golf PetCare',
            description:
                'Pet food, hygiene and accessories selected by our veterinary team in Tangier.',
            keywords: 'pet shop Tangier, veterinary shop Tangier',
        },
        community: {
            title: 'Lost and found pets in Tangier | Le Golf PetCare',
            description:
                'Local lost and found pet community feed in Tangier.',
            keywords: 'lost pet Tangier, found dog Tangier, found cat Tangier',
        },
        contact: {
            title: 'Contact veterinary clinic in Tangier | Le Golf PetCare',
            description:
                'Address, phone, hours and Google Maps access for Le Golf PetCare in Tangier.',
            keywords: 'contact vet Tangier, veterinary clinic address Tangier',
        },
    },
    ar: {
        home: {
            title: 'عيادة بيطرية في طنجة | Le Golf PetCare',
            description:
                'عيادة بيطرية في طنجة تقدم الاستشارات والطوارئ والاسعاف والايواء والعناية للكلاب والقطط.',
            keywords:
                'عيادة بيطرية طنجة, طبيب بيطري طنجة, طوارئ بيطرية طنجة, ايواء الحيوانات طنجة',
        },
        care: {
            title: 'الرعاية البيطرية في طنجة | Le Golf PetCare',
            description:
                'استشارات وتلقيح وتشخيص وجراحة ورعاية بيطرية متكاملة في طنجة.',
            keywords: 'رعاية بيطرية طنجة, استشارة بيطرية طنجة',
        },
        ambulance: {
            title: 'طوارئ واسعاف بيطري في طنجة | Le Golf PetCare',
            description:
                'خدمة طوارئ واسعاف بيطري سريع في طنجة للحالات المستعجلة.',
            keywords: 'طوارئ بيطرية طنجة, اسعاف بيطري طنجة',
        },
        boarding: {
            title: 'ايواء الحيوانات في طنجة | Le Golf PetCare',
            description:
                'خدمة ايواء امنة للكلاب والقطط في طنجة مع اشراف ورعاية.',
            keywords: 'ايواء كلاب طنجة, ايواء قطط طنجة',
        },
        grooming: {
            title: 'العناية بالكلاب والقطط في طنجة | Le Golf PetCare',
            description:
                'خدمة عناية ونظافة احترافية للكلاب والقطط في طنجة.',
            keywords: 'تزيين الكلاب طنجة, عناية القطط طنجة',
        },
        shop: {
            title: 'متجر بيطري في طنجة | Le Golf PetCare',
            description:
                'اغذية واكسسوارات ومنتجات نظافة مختارة للحيوانات في طنجة.',
            keywords: 'متجر حيوانات طنجة, اغذية الحيوانات طنجة',
        },
        community: {
            title: 'حيوانات ضائعة وموجودة في طنجة | Le Golf PetCare',
            description:
                'منصة محلية للاعلانات عن الحيوانات الضائعة والموجودة في طنجة.',
            keywords: 'حيوان ضائع طنجة, كلب ضائع طنجة, قط مفقود طنجة',
        },
        contact: {
            title: 'التواصل مع العيادة البيطرية في طنجة | Le Golf PetCare',
            description:
                'العنوان والهاتف وساعات العمل وموقع العيادة البيطرية Le Golf PetCare في طنجة.',
            keywords: 'رقم طبيب بيطري طنجة, عنوان عيادة بيطرية طنجة',
        },
    },
    es: {
        home: {
            title: 'Clinica veterinaria en Tanger | Le Golf PetCare',
            description:
                'Clinica veterinaria en Tanger con consultas, urgencias 24/7, ambulancia, residencia y peluqueria para perros y gatos.',
            keywords:
                'clinica veterinaria Tanger, veterinario Tanger, urgencia veterinaria Tanger, residencia perros Tanger',
        },
        care: {
            title: 'Cuidados veterinarios en Tanger | Le Golf PetCare',
            description:
                'Consultas, vacunacion, cirugia, diagnostico y seguimiento veterinario completo en Tanger.',
            keywords: 'cuidados veterinarios Tanger, consulta veterinaria Tanger',
        },
        ambulance: {
            title: 'Urgencia y ambulancia veterinaria en Tanger | Le Golf PetCare',
            description:
                'Respuesta rapida de urgencia y ambulancia veterinaria en Tanger.',
            keywords: 'urgencia veterinaria Tanger, ambulancia veterinaria Tanger',
        },
        boarding: {
            title: 'Residencia para mascotas en Tanger | Le Golf PetCare',
            description:
                'Residencia segura para perros y gatos en Tanger con reserva sencilla.',
            keywords: 'residencia canina Tanger, residencia gatos Tanger',
        },
        grooming: {
            title: 'Peluqueria canina y felina en Tanger | Le Golf PetCare',
            description:
                'Peluqueria profesional para perros y gatos en Tanger.',
            keywords: 'peluqueria canina Tanger, peluqueria gatos Tanger',
        },
        shop: {
            title: 'Tienda veterinaria en Tanger | Le Golf PetCare',
            description:
                'Alimentos, accesorios e higiene para mascotas en Tanger.',
            keywords: 'tienda veterinaria Tanger, comida para perros Tanger',
        },
        community: {
            title: 'Animales perdidos y encontrados en Tanger | Le Golf PetCare',
            description:
                'Comunidad local para animales perdidos, encontrados y testimonios en Tanger.',
            keywords: 'animal perdido Tanger, perro perdido Tanger, gato encontrado Tanger',
        },
        contact: {
            title: 'Contacto clinica veterinaria Tanger | Le Golf PetCare',
            description:
                'Direccion, telefono, horarios y acceso a Google Maps de Le Golf PetCare en Tanger.',
            keywords: 'contacto veterinario Tanger, direccion clinica veterinaria Tanger',
        },
    },
};

export function getSeo(locale, url = '/') {
    const loc = seoByLocale[locale] ? locale : 'fr';
    const path = (url || '/').split('?')[0];

    if (path.includes('/soins-veterinaires')) return seoByLocale[loc].care;
    if (path.includes('/ambulance-veterinaire-tanger')) return seoByLocale[loc].ambulance;
    if (path.includes('/pension-animaux-tanger')) return seoByLocale[loc].boarding;
    if (path.includes('/toilettage-chien-tanger')) return seoByLocale[loc].grooming;
    if (path.includes('/boutique')) return seoByLocale[loc].shop;
    if (path.includes('/communaute')) return seoByLocale[loc].community;
    if (path.includes('/contact-clinique-veterinaire-tanger')) return seoByLocale[loc].contact;

    return seoByLocale[loc].home;
}

export function getCanonicalUrl(url = '/') {
    return `https://www.legolfpetcare.ma${url || '/'}`;
}

export function getOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'VeterinaryCare',
        name: brand.clinicName,
        image: brand.logo,
        telephone: brand.phoneDisplay,
        address: {
            '@type': 'PostalAddress',
            addressLocality: brand.city,
            streetAddress: brand.address,
            addressCountry: 'MA',
        },
        areaServed: 'Tangier',
        url: 'https://www.legolfpetcare.ma',
        sameAs: [brand.mapsHref, brand.whatsappHref],
    };
}
