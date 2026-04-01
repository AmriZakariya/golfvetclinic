<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Demandes d’ambulance</h1>
        <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-900 text-slate-400 text-xs uppercase">
                    <tr>
                        <th class="px-4 py-3">#</th>
                        <th class="px-4 py-3">Tél</th>
                        <th class="px-4 py-3">Animal</th>
                        <th class="px-4 py-3">Symptômes</th>
                        <th class="px-4 py-3">Lieu</th>
                        <th class="px-4 py-3">Statut</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                    <tr v-for="r in requests.data" :key="r.id" class="hover:bg-slate-900/50">
                        <td class="px-4 py-2">{{ r.id }}</td>
                        <td class="px-4 py-2 font-medium text-red-300">{{ r.phone }}</td>
                        <td class="px-4 py-2">{{ r.animal_type }}</td>
                        <td class="px-4 py-2 max-w-xs">{{ r.symptoms }}</td>
                        <td class="px-4 py-2 max-w-xs">{{ r.location_text }}</td>
                        <td class="px-4 py-2">
                            <select
                                :value="r.status"
                                class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs"
                                @change="patch(r, { status: $event.target.value })"
                            >
                                <option value="pending">En attente</option>
                                <option value="in_progress">En cours</option>
                                <option value="done">Terminé</option>
                                <option value="cancelled">Annulé</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="requests.links?.length > 3" class="mt-4 flex gap-2 flex-wrap">
            <Link
                v-for="(l, i) in requests.links"
                :key="i"
                :href="l.url || '#'"
                class="px-3 py-1 rounded text-xs border border-slate-700"
                :class="l.active ? 'bg-emerald-500/20' : ''"
                v-html="l.label"
            />
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../../Layouts/AdminLayout.vue';
import { Link, router } from '@inertiajs/vue3';

defineProps({
    requests: { type: Object, required: true },
});

const patch = (row, data) => {
    router.patch(`/admin/ambulance-requests/${row.id}`, data, { preserveScroll: true });
};
</script>
