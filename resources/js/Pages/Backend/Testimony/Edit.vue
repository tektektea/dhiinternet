<template>
    <q-page class="container" padding>
        <q-breadcrumbs>
            <q-breadcrumbs-el @click="$inertia.get(route('dashboard'))" label="Dashboard" />
            <q-breadcrumbs-el @click="$inertia.get(route('testimony.index'))" label="Testimonial" />
            <q-breadcrumbs-el @click="$inertia.get(route('testimony.edit',item.id))" label="Edit" />
        </q-breadcrumbs>
        <br/>
        <div class="flex justify-between items-center bg-white q-pa-md">
            <div class="text-lg text-dark text-weight-medium">Edit Testimony</div>
        </div>
        <br/>
        <q-form @submit="handleSubmit" class="column  bg-white q-pa-md">
            <q-input v-model="form.url"
                     outlined
                     label="URL"
                     :error="!!form?.errors?.url"
                     :error-message="form?.errors?.url?.toString()"
                     :rules="[
                         val=>!!val || 'url is required'
                     ]"
            />

            <q-editor
                v-model="form.content"
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
const props=defineProps(['item'])
const q = useQuasar();
const form=useForm({
    url:props?.item?.url,
    content:props?.item?.content,
})

const handleSubmit=e=>{
    form.put(route('testimony.update',props.item.id),{
        onStart:params => q.loading.show(),
        onFinish:params => q.loading.hide()
    })
}
</script>
