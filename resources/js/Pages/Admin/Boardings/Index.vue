<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Pension</h1>
        <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-900 text-slate-400 text-xs uppercase">
                    <tr>
                        <th class="px-4 py-3">Propriétaire</th>
                        <th class="px-4 py-3">Période</th>
                        <th class="px-4 py-3">Animal</th>
                        <th class="px-4 py-3">Statut</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                    <tr v-for="b in boardings.data" :key="b.id" class="hover:bg-slate-900/50">
                        <td class="px-4 py-2">{{ b.owner_name }} · {{ b.phone }}</td>
                        <td class="px-4 py-2 text-slate-400">{{ b.start_date }} → {{ b.end_date }}</td>
                        <td class="px-4 py-2">{{ b.animal_type }}</td>
                        <td class="px-4 py-2">
                            <select
                                :value="b.status"
                                class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs"
                                @change="patch(b, { status: $event.target.value })"
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
    boardings: { type: Object, required: true },
});

const patch = (row, data) => {
    router.patch(`/admin/boardings/${row.id}`, data, { preserveScroll: true });
};
</script>
