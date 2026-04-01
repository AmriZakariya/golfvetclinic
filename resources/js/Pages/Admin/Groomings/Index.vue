<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Toilettage</h1>
        <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-900 text-slate-400 text-xs uppercase">
                    <tr>
                        <th class="px-4 py-3">Client</th>
                        <th class="px-4 py-3">Race / poids</th>
                        <th class="px-4 py-3">Prestation</th>
                        <th class="px-4 py-3">Statut</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                    <tr v-for="g in groomings.data" :key="g.id" class="hover:bg-slate-900/50">
                        <td class="px-4 py-2">{{ g.owner_name }} · {{ g.phone }}</td>
                        <td class="px-4 py-2">{{ g.breed }} · {{ g.weight_kg ?? '—' }} kg</td>
                        <td class="px-4 py-2">{{ g.service_type }}</td>
                        <td class="px-4 py-2">
                            <select
                                :value="g.status"
                                class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs"
                                @change="patch(g, { status: $event.target.value })"
                            >
                                <option value="pending">En attente</option>
                                <option value="confirmed">Confirmé</option>
                                <option value="cancelled">Annulé</option>
                                <option value="done">Terminé</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../../Layouts/AdminLayout.vue';
import { router } from '@inertiajs/vue3';

defineProps({
    groomings: { type: Object, required: true },
});

const patch = (row, data) => {
    router.patch(`/admin/groomings/${row.id}`, data, { preserveScroll: true });
};
</script>
