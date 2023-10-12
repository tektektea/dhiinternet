<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el label="Sections" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div>
                <div class="text-lg text-bold">List of Sections</div>
                <div class="text-caption text-grey-7">(Section is a component which is to be rendered in a landing Page)</div>
            </div>

            <q-btn @click="$inertia.get(route('section.create'))" color="primary" label="New Section"/>
        </div>
        <br/>
        <div class="column q-pa-md  bg-white">
            <div v-for="(item,index) in list">
                <div class="column q-mt-sm section-card">
                    <div class="text-lg text-weight-medium text-grey-7">
                        {{item?.name}}
                    </div>
                    <section>
                        <div v-html="item.content"/>
                    </section>
                </div>
                <div class="flex justify-end q-gutter-md q-mt-sm">
                    <q-btn class="sized-btn" @click="$inertia.get(route('section.edit',item.id))" outline color="secondary" label="Edit"/>
                    <q-btn class="sized-btn" @click="handleDelete(item)" color="negative" outline label="Delete"/>
                </div>
                <q-separator v-if="index!==list.length-1" class="q-mt-sm"/>
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
        router.delete(route('section.destroy',val.id),{
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
