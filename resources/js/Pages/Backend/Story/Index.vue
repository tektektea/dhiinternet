<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el label="Stories" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div>
                <div class="text-lg text-bold">Stories</div>
                <div class="text-caption text-grey-7">Story is a content which will be rendered in the landing page</div>
            </div>
            <q-btn @click="$inertia.get(route('story.create'))" color="primary" label="New Story" no-caps/>

        </div>
        <br/>
        <div class="column q-pa-md  bg-white">
            <div class="flex justify-between items-center q-mt-sm" v-for="(item,index) in list">
                <div class="text-md text-weight-medium text-grey-7">
                    {{item?.title}}
                </div>

                <div class="flex  q-gutter-md <">
                    <q-btn  @click="$inertia.get(route('story.edit',item.id))" outline color="secondary" label="Edit"/>
                    <q-btn @click="handleDelete(item)" color="negative" outline label="Delete"/>
                </div>
            </div>


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
        router.delete(route('story.destroy',val.id),{
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
