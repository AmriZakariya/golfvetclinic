<template>
    <div class="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <form class="w-full max-w-sm space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-8" @submit.prevent="submit">
            <h1 class="text-lg font-semibold text-white text-center">Administration</h1>
            <p class="text-xs text-slate-500 text-center">Le Golf PetCare</p>
            <div>
                <label class="block text-xs text-slate-400 mb-1">Email</label>
                <input v-model="form.email" type="email" required autocomplete="username" class="fld" />
                <p v-if="form.errors.email" class="text-xs text-red-400 mt-1">{{ form.errors.email }}</p>
            </div>
            <div>
                <label class="block text-xs text-slate-400 mb-1">Mot de passe</label>
                <input v-model="form.password" type="password" required autocomplete="current-password" class="fld" />
            </div>
            <label class="flex items-center gap-2 text-sm text-slate-400">
                <input v-model="form.remember" type="checkbox" class="rounded border-slate-600" />
                Se souvenir de moi
            </label>
            <button
                type="submit"
                class="w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
                :disabled="form.processing"
            >
                Connexion
            </button>
        </form>
    </div>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post('/login');
};
</script>

<style scoped>
@reference "../../../css/app.css";

.fld {
    @apply w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/40;
}
</style>
