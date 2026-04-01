<template>
    <AppLayout>
        <section class="mx-auto max-w-6xl px-4 py-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
            <div class="space-y-4">
                <p class="text-xs uppercase tracking-[0.2em] text-emerald-300">
                    Contact & localisation
                </p>
                <h1 class="text-3xl sm:text-4xl font-semibold text-slate-50">
                    Clinique vétérinaire Le Golf · Tanger.
                </h1>
                <p class="text-sm text-slate-300 max-w-xl">
                    Retrouvez-nous dans le quartier du Golf à Tanger. Parking à proximité, accès facile et prise en
                    charge rapide de votre animal.
                </p>

                <dl class="mt-4 grid gap-4 text-sm text-slate-200">
                    <div>
                        <dt class="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Adresse
                        </dt>
                        <dd class="mt-1">
                            Quartier du Golf, Tanger<br />
                            Maroc
                        </dd>
                    </div>
                    <div>
                        <dt class="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Téléphone
                        </dt>
                        <dd class="mt-1">
                            <a href="tel:+212612345678" class="hover:text-emerald-300 transition">
                                +212 6 12 34 56 78
                            </a>
                        </dd>
                    </div>
                    <div>
                        <dt class="text-xs uppercase tracking-[0.2em] text-slate-500">
                            Email
                        </dt>
                        <dd class="mt-1">
                            <a href="mailto:contact@legolfpetcare.ma" class="hover:text-emerald-300 transition">
                                contact@legolfpetcare.ma
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>

            <div class="space-y-3">
                <div class="rounded-2xl border border-slate-800 overflow-hidden bg-slate-900/60">
                    <iframe
                        title="Clinique Vétérinaire Le Golf – Tanger"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d-5.800!3d35.780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzQ4LjAiTiA1wrA0OCcyMC4wIlc!5e0!3m2!1sfr!2sma!4v1700000000000"
                        width="100%"
                        height="260"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    />
                </div>
                <a
                    href="https://maps.google.com?q=Clinique+V%C3%A9t%C3%A9rinaire+Le+Golf+Tanger"
                    target="_blank"
                    class="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-50 border border-slate-700 hover:border-emerald-400/70 hover:text-emerald-200 transition"
                >
                    Ouvrir dans Google Maps
                </a>
            </div>
        </section>
    </AppLayout>
</template>

<script setup>
import AppLayout from '../../Layouts/AppLayout.vue';
</script>

