<template>
    <q-page class="container " padding>
        <q-breadcrumbs gutter="md">
            <q-breadcrumbs-el label="Dashboard" />
            <q-breadcrumbs-el @click="$inertia.get(route('plan.index'))" label="Sections" />
            <q-breadcrumbs-el @click="$inertia.get(route('plan.create'))" label="New Plan" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center q-pa-md bg-white">
            <div class="text-lg text-dark text-weight-medium">New Plan</div>
        </div>
        <br/>
        <q-form @submit="handleSubmit" class="column bg-white q-pa-md">
            <q-input v-model="form.name"
                     outlined
                     label="Name"
                     :error="!!form?.errors?.name"
                     :error-message="form?.errors?.name?.toString()"
                     :rules="[
                         val=>!!val || 'Name is required'
                     ]"
            />
            <q-input v-model="form.fee"
                     type="number"
                     outlined
                     label="Fee"
                     :error="!!form?.errors?.fee"
                     :error-message="form?.errors?.fee?.toString()"
                     :rules="[
                         val=>!!val || 'Fee is required'
                     ]"
            />
            <q-editor
                v-model="form.card"
                :toolbar="[
                    [  {
                        label: $q.lang.editor.align,
                        icon: $q.iconSet.editor.align,
                        fixedLabel: true,
                        list: 'only-icons',
                        options: ['left', 'center', 'right', 'justify']
                      }
                    ],

                     ['bold', 'italic', 'underline'],
                     [{
                        label: $q.lang.editor.fontSize,
                        icon: $q.iconSet.editor.fontSize,
                        fixedLabel: true,
                        fixedIcon: true,
                        list: 'no-icons',
                        options: [
                          'size-1',
                          'size-2',
                          'size-3',
                          'size-4',
                          'size-5',
                          'size-6',
                          'size-7'
                        ]
                      }],
                    ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                    ['undo', 'redo'],
                    ['viewsource']
                ]" min-height="5rem"/>

            <div class="flex q-gutter-sm q-mt-sm">
                <q-btn type="submit" color="primary" class="sized-btn" label="Save"/>
                <q-btn type="reset" color="negative" outline class="sized-btn" label="Cancel"/>
            </div>
        </q-form>
    </q-page>
</template>
<script setup>
import BackendLayout from "@/Layouts/BackendLayout.vue";
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import {useQuasar} from "quasar";

defineOptions({
    layout:BackendLayout
})

const q = useQuasar();
const form=useForm({
    name:'',
    fee:1,
    card:''
})

const handleSubmit=e=>{
    form.post(route('plan.store'),{
        onStart:params => q.loading.show(),
        onFinish:params => q.loading.hide()
    })
}
</script>
