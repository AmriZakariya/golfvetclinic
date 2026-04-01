<template>
    <AdminLayout>
        <h1 class="text-2xl font-semibold text-white mb-6">Tableau de bord</h1>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="text-xs text-slate-500 uppercase tracking-wider">RDV en attente</p>
                <p class="text-3xl font-semibold text-emerald-400 mt-2">{{ counts.appointments_pending }}</p>
            </div>
            <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="text-xs text-slate-500 uppercase tracking-wider">Ambulance en attente</p>
                <p class="text-3xl font-semibold text-red-400 mt-2">{{ counts.ambulance_pending }}</p>
            </div>
            <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="text-xs text-slate-500 uppercase tracking-wider">Pension en attente</p>
                <p class="text-3xl font-semibold text-amber-400 mt-2">{{ counts.boarding_pending }}</p>
            </div>
            <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="text-xs text-slate-500 uppercase tracking-wider">Toilettage en attente</p>
                <p class="text-3xl font-semibold text-sky-400 mt-2">{{ counts.grooming_pending }}</p>
            </div>
            <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="text-xs text-slate-500 uppercase tracking-wider">Publications à modérer</p>
                <p class="text-3xl font-semibold text-violet-400 mt-2">{{ counts.community_pending }}</p>
            </div>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../Layouts/AdminLayout.vue';

defineProps({
    counts: { type: Object, required: true },
});
</script>
