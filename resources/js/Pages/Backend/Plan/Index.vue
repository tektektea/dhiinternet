<template>
    <q-page class="container" padding>
        <q-breadcrumbs class="text-grey-7">
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el label="Plans" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div>
                <div class="text-lg text-bold">Plans</div>
                <div class="text-caption text-grey-7">Plan is a service you would offer to client</div>
            </div>

            <q-btn @click="$inertia.get(route('plan.create'))" color="primary" label="New Plan"/>
        </div>
        <br/>
        <div class="row">
            <div class="col-xs-12 col-sm-4" v-for="(item,index) in list" :key="index">
                <div class="column q-pa-md section-card bg-white">
                   <div class="flex justify-between items-center">
                       <div class="text-lg text-grey-7">{{item?.name}}</div>
                       <div class="text-lg text-bold text-secondary">{{formatMoney(item?.fee)}}</div>
                   </div>
                    <q-separator class="q-my-sm"/>
                    <section>
                        <div v-html="item.card"/>
                    </section>
                    <q-separator class="q-my-sm"/>
                    <div class="flex justify-end">
                        <q-btn round flat @click="$inertia.get(route('plan.edit',item.id))" icon="edit" color="secondary"/>
                        <q-btn round flat @click="handleDelete(item)" color="negative" icon="delete"/>
                    </div>
                </div>

            </div>

        </div>

    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {useQuasar} from "quasar";
import {router} from "@inertiajs/vue3";
import useUtils from "@/Compositions/useUtils";

defineOptions({
    layout:BackendLayout
})
const props = defineProps(['list']);
const q = useQuasar();
const {formatMoney} = useUtils();
const handleDelete=val=>{
    q.dialog(({
        title:'Confirmation',
        message:'Are you sure to delete?',
        ok:'Yes',
        cancel:'No'
    }))
    .onOk(()=>{
        router.delete(route('plan.destroy',val.id),{
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
