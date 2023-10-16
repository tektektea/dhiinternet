<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Mizoram chhunga Internet rintlak leh chak tha duh tan biak theih reng kan ni"/>
    </Head>
    <q-page class="bg-dark">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <div class="flex justify-end">
                    <div class="q-pa-md relative-position">
                        <video v-if="$q.screen.lt.sm" style="z-index: 1" class="absolute-top " width="320" loop autoplay>
                            <source src="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4" type="video/mp4" />
                            <p>
                                Your browser doesn't support HTML video. Here is a
                                <a href="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4">link to the video</a> instead.
                            </p>
                        </video>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div class="relative-position " style="z-index: 1000">
                            <q-item class="watch-btn">
                                <q-item-section>
                                    <q-item-label>Click here to watch our stories</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-icon name="chevron_right"/>
                                </q-item-section>
                            </q-item>
                            <h5 class="hero-title text-white"><span style="color: #f24baf" class=" text-weight-bolder">Connecting</span>  You to Tomorrow, Today!</h5>
                            <div class="text-accent text-lg">Internet Chak tha leh rintlak i hmang duh em?</div>
                            <div class="text-md text-weight-bolder text-weight-medium text-white">Call Us : +919862614297</div>
                            <br/>
                            <div class="flex q-gutter-sm">
                                <q-btn  :href="route('page.booking')" style="width: 230px;color: #f24baf" class="text-white" size="xl"  color="primary" label="Book Now" no-caps/>
                                <q-separator dark vertical/>
                                <q-btn href="https://wa.me/919862614297" class="text-white" size="xl" icon="chat" outline color="secondary" label="Let's Chat" no-caps/>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div class="col-xs-6">
                <div v-if="$q.screen.gt.sm" class="relative-position">

                    <video width="550" loop autoplay>
                        <source src="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4" type="video/mp4" />
                        <p>
                            Your browser doesn't support HTML video. Here is a
                            <a href="https://github.githubassets.com/images/modules/site/home/globe-500.h264.mp4">link to the video</a> instead.
                        </p>
                    </video>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div class="container">
            <div  class="bg-secondary rounded-borders q-pa-md">
                <q-timeline dark color="white">
                    <q-timeline-entry class="text-bold" heading>
                        Our Stories
                    </q-timeline-entry>

                    <q-timeline-entry
                        title="Rising Day"
                        subtitle="February 22, 2020"
                    >
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </q-timeline-entry>
                </q-timeline>
            </div>

            <br/>
            <br/>
            <section v-for="item in sections" :key="item.id">
                <div v-html="item?.content"/>
            </section>
            <br/>
            <br/>
            <!--        PLANS-->
            <div class="full-width text-center text-page-header q-my-lg text-white text-bold">
               Our Plans
            </div>
            <br/>
            <section class="row q-col-gutter-md" >
                <div v-for="item in plans" :key="item.id" class="col-xs-12 col-sm-3">
                    <div v-html="item?.card"/>
                </div>
            </section>
            <!--        TESTIMONIAL-->
            <div class="full-width text-center text-page-header q-my-lg text-white text-bold">
                Testimonial
            </div>
            <div class="row q-col-gutter-md">
                <div v-for="item in testimonial" class="col-xs-6 col-sm-3">
                    <div class="column items-center">
                        <q-avatar>
                            <q-img :src="item.url"/>
                        </q-avatar>
                        <div v-html="item.content"/>
                    </div>

                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <!--        PLANS-->


            <br/>
            <div class="full-width text-center text-page-header q-my-lg text-white text-bold">
                Frequently Asked Question
            </div>
            <q-list style="border-radius: 20px"  class=" shadow-up-8 rounded-borders">
                <q-expansion-item  v-for="question in questions"
                    class=" overflow-hidden text-weight-medium text-md text-accent"
                    icon="o_help"
                    :label="question.question"
                >
                    <div class="q-pa-md" v-html="question.answer"/>
                </q-expansion-item>

            </q-list>
            <br/>
            <br/>

        </div>


    </q-page>
</template>
<script setup>
import {Head} from '@inertiajs/vue3';
import BackendLayout from "@/Layouts/BackendLayout.vue";

defineOptions({
    layout: BackendLayout
})

const props=defineProps(['sections','plans','questions','testimonial'])

</script>
<style scoped>
p{
    margin: 0;
}
.hero-title{
    font-weight: 700;
    font-size: 36px;
    line-height: 1;
}
.book-btn{
    font-size: 21px;
    min-width: 180px;
}
.feature-card{
    width: 380px;
    padding: 8px 16px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
    border-radius: 21px;
}
.feature-title{
    margin: 0;
    font-weight: bold;
    font-size: 32px;
}
.text-quote{
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    color: #444444;

}
.testimonial-card{
    width: 320px;
    text-align: center;
}
.plan-card{
    width: 380px;
    height: 410px;
    border-radius: 21px;
    padding: 16px 24px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.16);
}
.watch-btn{
    width: 290px;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-width: 2px;
    border-style: solid;
    font-size: 14px;
    color: #eae8e8;
    border-color: #0d47a1;
}
</style>
