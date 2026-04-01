<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Rendez-vous</h1>
        <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-sm text-left">
                <thead class="bg-slate-900 text-slate-400 text-xs uppercase">
                    <tr>
                        <th class="px-4 py-3">Date</th>
                        <th class="px-4 py-3">Nom</th>
                        <th class="px-4 py-3">Tél</th>
                        <th class="px-4 py-3">Animal</th>
                        <th class="px-4 py-3">Motif</th>
                        <th class="px-4 py-3">Statut</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-800">
                    <tr v-for="a in appointments.data" :key="a.id" class="hover:bg-slate-900/50">
                        <td class="px-4 py-2 text-slate-500">{{ a.desired_date || '—' }}</td>
                        <td class="px-4 py-2">{{ a.name }}</td>
                        <td class="px-4 py-2">{{ a.phone }}</td>
                        <td class="px-4 py-2">{{ a.animal_type }}</td>
                        <td class="px-4 py-2 max-w-xs truncate">{{ a.reason }}</td>
                        <td class="px-4 py-2">
                            <select
                                :value="a.status"
                                class="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs"
                                @change="patch(a, { status: $event.target.value })"
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
        <div v-if="appointments.links?.length > 3" class="mt-4 flex gap-2 flex-wrap">
            <Link
                v-for="(l, i) in appointments.links"
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
    appointments: { type: Object, required: true },
});

const patch = (row, data) => {
    router.patch(`/admin/appointments/${row.id}`, data, { preserveScroll: true });
};
</script>
