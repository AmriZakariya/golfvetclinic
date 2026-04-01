<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Publications communauté</h1>
        <div class="space-y-4">
            <article
                v-for="p in posts.data"
                :key="p.id"
                class="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm"
            >
                <div class="flex flex-wrap items-start justify-between gap-4">
                    <div class="flex-1 min-w-0">
                        <span class="text-xs text-emerald-400">{{ p.type }} · #{{ p.id }}</span>
                        <p class="text-slate-200 mt-2 whitespace-pre-wrap">{{ p.description }}</p>
                        <p class="text-xs text-slate-500 mt-2">{{ p.location_text }} · {{ p.phone }}</p>
                    </div>
                    <select
                        :value="p.status"
                        class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs shrink-0"
                        @change="patch(p, { status: $event.target.value })"
                    >
                        <option value="pending">En attente</option>
                        <option value="approved">Approuvé</option>
                        <option value="rejected">Rejeté</option>
                    </select>
                </div>
            </article>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../../Layouts/AdminLayout.vue';
import { router } from '@inertiajs/vue3';

defineProps({
    posts: { type: Object, required: true },
});

const patch = (row, data) => {
    router.patch(`/admin/community-posts/${row.id}`, data, { preserveScroll: true });
};
</script>
