<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el label="Testimonials" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div>
                <div class="text-lg text-bold">Testimonial</div>
            </div>
            <q-btn @click="$inertia.get(route('testimony.create'))" label="New Testimony" color="primary"/>

        </div>
        <br/>
        <div class="column q-pa-md  bg-white">
            <q-item v-for="item in list" :key="item.id">
                <q-item-section avatar>
                    <q-avatar>
                        <q-img :src="item.url"/>
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <div v-html="item.content"/>
                </q-item-section>
                <q-item-section side>
                    <div class="q-mt-sm flex q-gutter-sm">
                        <q-btn size="sm" @click="$inertia.get(route('testimony.edit',item.id))" icon="edit" color="accent" outline/>
                        <q-btn size="sm" @click="handleDelete(item)" icon="delete" color="negative" outline/>
                    </div>
                </q-item-section>

            </q-item>
        </div>

    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {useQuasar} from "quasar";
import {router} from "@inertiajs/vue3";

defineOptions({
    layout:BackendLayout
})
const props = defineProps(['list']);
const q = useQuasar();

const handleDelete=val=>{
    q.dialog(({
        title:'Confirmation',
        message:'Are you sure to delete?',
        ok:'Yes',
        cancel:'No'
    }))
    .onOk(()=>{
        router.delete(route('testimony.destroy',val.id),{
            onStart:params => q.loading.show(),
            onFinish:params => q.loading.hide()
        })
    })
}

</script>
<style scoped>

.section-card{

}

</style>
