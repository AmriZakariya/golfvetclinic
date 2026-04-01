<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 space-y-8">
            <header class="space-y-3">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Boutique · Nutrition & accessoires
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Alimentation, accessoires et hygiène sélectionnés par nos vétérinaires.
                </h1>
                <p class="text-sm text-slate-300 max-w-2xl">
                    Catalogue indicatif — paiement en ligne à venir. Renseignez-vous à la clinique pour disponibilité et
                    conseils personnalisés.
                </p>
            </header>

            <div v-if="!products?.length" class="text-sm text-slate-500">
                Aucun produit pour le moment.
            </div>

            <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="p in products"
                    :key="p.id"
                    class="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col"
                >
                    <p class="text-xs uppercase tracking-wider text-emerald-400/90 mb-2">{{ categoryLabel(p.category) }}</p>
                    <h2 class="text-lg font-semibold text-slate-50 mb-2">{{ p.name }}</h2>
                    <p v-if="p.description" class="text-sm text-slate-400 flex-1 mb-4">{{ p.description }}</p>
                    <p class="text-emerald-300 font-semibold">{{ Number(p.price).toFixed(2) }} MAD</p>
                </article>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';

defineProps({
    locale: { type: String, default: 'fr' },
    products: { type: Array, default: () => [] },
});

function categoryLabel(cat) {
    const map = { food: 'Alimentation', accessories: 'Accessoires', hygiene: 'Hygiène' };
    return map[cat] || cat;
}
</script>
