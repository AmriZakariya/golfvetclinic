<template>
    <div class="min-h-screen bg-slate-950 text-slate-100 flex">
        <aside class="w-56 border-r border-slate-800 p-4 flex flex-col gap-2 shrink-0">
            <div class="text-sm font-semibold text-emerald-300 mb-4">Le Golf PetCare</div>
            <Link href="/admin/dashboard" class="nav-link">Tableau de bord</Link>
            <Link href="/admin/appointments" class="nav-link">Rendez-vous</Link>
            <Link href="/admin/ambulance-requests" class="nav-link">Ambulance</Link>
            <Link href="/admin/boardings" class="nav-link">Pension</Link>
            <Link href="/admin/groomings" class="nav-link">Toilettage</Link>
            <Link href="/admin/community-posts" class="nav-link">Communauté</Link>
            <Link href="/fr" class="nav-link mt-6 text-slate-500">Voir le site</Link>
            <button type="button" class="nav-link text-left text-red-400 mt-auto" @click="logout">
                Déconnexion
            </button>
        </aside>
        <div class="flex-1 overflow-auto">
            <main class="p-8 max-w-6xl">
                <slot />
            </main>
        </div>
    </div>
</template>

<script setup>
import { Link, router } from '@inertiajs/vue3';

const logout = () => {
    router.post('/logout');
};
</script>

<style scoped>
@reference "../../css/app.css";

.nav-link {
    @apply block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition;
}
</style>
