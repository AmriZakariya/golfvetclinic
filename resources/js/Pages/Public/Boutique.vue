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
                <p class="mt-3 max-w-2xl text-base leading-7" style="color: var(--brand-muted)">
                    {{ content.lead }}
                </p>

                <!-- Category filter -->
                <div v-if="products?.length" class="mt-6 flex flex-wrap gap-2">
                    <button
                        v-for="cat in categories"
                        :key="cat.value"
                        class="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition"
                        :style="activeCategory === cat.value
                            ? 'background: var(--brand-primary); color: #fff;'
                            : 'background: var(--brand-surface); border: 1px solid var(--brand-border); color: var(--brand-muted);'"
                        @click="activeCategory = cat.value"
                    >
                        {{ cat.label }}
                    </button>
                </div>
            </div>
        </section>

        <!-- Products -->
        <section class="px-4 pt-8 pb-20 lg:px-6">
            <div class="mx-auto max-w-6xl">

                <div v-if="!products?.length" class="brand-card rounded-[28px] p-12 text-center">
                    <p class="text-4xl">🛍️</p>
                    <p class="mt-4 text-base font-medium" style="color: var(--brand-ink)">{{ content.emptyTitle }}</p>
                    <p class="mt-2 text-sm" style="color: var(--brand-muted)">{{ content.emptyText }}</p>
                </div>

                <div v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <article
                        v-for="p in filteredProducts"
                        :key="p.id"
                        class="brand-card brand-card-hover group rounded-[28px] p-6 flex flex-col cursor-default"
                    >
                        <div class="mb-4 flex items-start justify-between gap-3">
                            <div class="brand-icon-badge">{{ categoryIcon(p.category) }}</div>
                            <span
                                class="rounded-full px-2.5 py-1 text-xs font-semibold"
                                style="background: var(--brand-primary-soft); color: var(--brand-primary)"
                            >
                                {{ categoryLabel(p.category) }}
                            </span>
                        </div>

                        <h2 class="text-base font-semibold leading-snug flex-1" style="color: var(--brand-ink)">{{ p.name }}</h2>
                        <p v-if="p.description" class="mt-2 text-sm leading-6" style="color: var(--brand-muted)">{{ p.description }}</p>

                        <div class="mt-5 flex items-center justify-between gap-3 pt-5" style="border-top: 1px solid var(--brand-border)">
                            <span class="text-xl font-bold" style="color: var(--brand-primary)">
                                {{ Number(p.price).toFixed(2) }} <span class="text-sm font-semibold">MAD</span>
                            </span>
                            <span class="text-xs" style="color: var(--brand-muted)">{{ content.availability }}</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppLayout from '../../Layouts/AppLayout.vue';
import { getLocale } from '../../lib/site';

const props = defineProps({
    locale: { type: String, default: 'fr' },
    products: { type: Array, default: () => [] },
});

const activeCategory = ref('all');
const locale = computed(() => getLocale(props.locale));
const contentByLocale = {
    fr: {
        eyebrow: 'Boutique · Nutrition et accessoires',
        title: 'Alimentation, accessoires et hygiene selectionnes par nos veterinaires.',
        lead: 'Catalogue indicatif. Paiement en ligne a venir. Renseignez-vous a la clinique pour la disponibilite et les conseils personnalises.',
        emptyTitle: 'Aucun produit pour le moment.',
        emptyText: 'Revenez bientot ou contactez-nous directement.',
        availability: 'Disponible en clinique',
        categories: { all: 'Tout', food: 'Alimentation', accessories: 'Accessoires', hygiene: 'Hygiene' },
    },
    en: {
        eyebrow: 'Shop · Nutrition and accessories',
        title: 'Food, accessories and hygiene selected by our veterinary team.',
        lead: 'Indicative catalog. Online payment will come later. Contact the clinic for availability and tailored advice.',
        emptyTitle: 'No products available yet.',
        emptyText: 'Check back soon or contact us directly.',
        availability: 'Available in clinic',
        categories: { all: 'All', food: 'Food', accessories: 'Accessories', hygiene: 'Hygiene' },
    },
    ar: {
        eyebrow: 'المتجر · تغذية واكسسوارات',
        title: 'اغذية واكسسوارات ومنتجات نظافة مختارة من طرف فريقنا البيطري.',
        lead: 'هذا كتالوج تعريفي في الوقت الحالي. الدفع عبر الانترنت سيضاف لاحقا. اسالوا العيادة عن التوفر والنصيحة المناسبة.',
        emptyTitle: 'لا توجد منتجات حاليا.',
        emptyText: 'عودوا لاحقا او تواصلوا معنا مباشرة.',
        availability: 'متوفر في العيادة',
        categories: { all: 'الكل', food: 'التغذية', accessories: 'الاكسسوارات', hygiene: 'النظافة' },
    },
    es: {
        eyebrow: 'Tienda · Nutricion y accesorios',
        title: 'Alimentos, accesorios e higiene seleccionados por nuestro equipo veterinario.',
        lead: 'Catalogo informativo por ahora. El pago online llegara mas adelante. Consulta la disponibilidad en la clinica.',
        emptyTitle: 'No hay productos por ahora.',
        emptyText: 'Vuelve pronto o contactanos directamente.',
        availability: 'Disponible en clinica',
        categories: { all: 'Todo', food: 'Alimentacion', accessories: 'Accesorios', hygiene: 'Higiene' },
    },
};
const content = computed(() => contentByLocale[locale.value] ?? contentByLocale.fr);

const categories = computed(() => [
    { value: 'all', label: content.value.categories.all },
    { value: 'food', label: content.value.categories.food },
    { value: 'accessories', label: content.value.categories.accessories },
    { value: 'hygiene', label: content.value.categories.hygiene },
]);

const filteredProducts = computed(() => {
    if (activeCategory.value === 'all') return props.products;
    return props.products.filter((p) => p.category === activeCategory.value);
});

function categoryLabel(cat) {
    const map = content.value.categories;
    return map[cat] || cat;
}

function categoryIcon(cat) {
    const map = { food: '🥩', accessories: '🎾', hygiene: '🛁' };
    return map[cat] || '🐾';
}
</script>
