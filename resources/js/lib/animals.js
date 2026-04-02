export const animalOptions = [
    {
        value: 'dog',
        label: {
            fr: 'Chien',
            en: 'Dog',
            ar: 'كلب',
            es: 'Perro',
        },
    },
    {
        value: 'cat',
        label: {
            fr: 'Chat',
            en: 'Cat',
            ar: 'قط',
            es: 'Gato',
        },
    },
    {
        value: 'other',
        label: {
            fr: 'Autre',
            en: 'Other',
            ar: 'آخر',
            es: 'Otro',
        },
    },
];

export function animalLabel(locale, type) {
    const option = animalOptions.find((item) => item.value === type);

    return option?.label?.[locale] ?? option?.label?.fr ?? type;
}

export function ageLabel(locale) {
    if (locale === 'ar') return 'عمر الحيوان';
    if (locale === 'en') return 'Animal age';
    if (locale === 'es') return 'Edad del animal';

    return "Age de l'animal";
}

export function otherAnimalLabel(locale) {
    if (locale === 'ar') return 'حدد نوع الحيوان';
    if (locale === 'en') return 'Specify the animal';
    if (locale === 'es') return 'Especifica el animal';

    return "Precisez l'animal";
}

export function agePlaceholder(locale) {
    if (locale === 'ar') return 'مثال: سنتان أو 6 أشهر';
    if (locale === 'en') return 'Example: 2 years or 6 months';
    if (locale === 'es') return 'Ejemplo: 2 anos o 6 meses';

    return 'Ex : 2 ans ou 6 mois';
}

export function otherAnimalPlaceholder(locale) {
    if (locale === 'ar') return 'مثال: طائر أو أرنب';
    if (locale === 'en') return 'Example: bird or rabbit';
    if (locale === 'es') return 'Ejemplo: pajaro o conejo';

    return 'Ex : oiseau ou lapin';
}
