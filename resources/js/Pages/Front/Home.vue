<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Internet rintlak leh chaktha duh tan a chenfakawm"/>
    </Head>
    <q-page class="container">
        <div style="min-width: 540px" class="row ">
            <div class="col-xs-12 col-sm-6">
                <div class="text-italic text-md column justify-center full-height">
                    <h1 class="hero-title text-accent">
                        DHIINTERNET
                    </h1>
                    <p class="text-italic text-lg text-grey-7">Internet chak leh tha, rinthlak bawk si office leh mahni chenna a hmang duh tan</p>
                    <div class="flex q-gutter-sm q-mt-xl">
                        <q-btn class="book-btn" label="Book Now" rounded color="primary" no-caps/>
                        <div class="flex items-center q-gutter-sm cursor-pointer  q-ml-lg">
                                <q-icon name="play_circle"/>
                                <q-item-label>Watch Our Story</q-item-label>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-img v-if="$q.screen.gt.sm" class="q-my-xl"  src="assets/images/hero.svg"/>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
<!--        FEATURES-->
        <div class="full-width text-center text-page-header q-my-lg text-grey-9">
            Features
        </div>
        <div class="flex justify-between items-center">
            <div class="feature-card column q-gutter-sm justify-center items-center  ">
                <q-avatar size="120px">
                    <q-img width="150px" src="assets/images/happy_customer.svg"/>
                </q-avatar>
                <div>
                    <p class="feature-title">More than 2k</p>
                    <p class="text-caption q-ma-none text-grey-7">Satisfied Customer</p>
                </div>
            </div>
            <div class="feature-card column q-gutter-sm justify-center items-center ">
                <q-avatar size="120px">
                    <q-img width="150px" src="assets/images/map.svg"/>
                </q-avatar>
                <div>
                    <p class="feature-title">Champhai</p>
                    <p class="text-caption q-ma-none text-grey-7">Covered Region</p>
                </div>
            </div>
            <div class="feature-card column q-gutter-sm justify-center items-center ">
                <q-avatar size="120px">
                    <q-img width="150px" src="assets/images/customer_support.svg"/>
                </q-avatar>
                <div>
                    <p class="feature-title">24x7 Support</p>
                    <p class="text-caption q-ma-none text-grey-7">
                        We provide a service related help to cover 24x7
                    </p>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <!--        TESTIMONIAL-->
        <div class="full-width text-center text-page-header q-my-lg text-grey-9">
            Testmonials
        </div>
        <div class="flex justify-between items-center ">
            <div class="column q-gutter-md justify-center items-center testimonial-card">
                <q-avatar rounded>
                    <q-img width="150" :ratio="1" src="assets/images/people-1.png"/>
                </q-avatar>
                <p class="text-lg text-bold">Lalrinawma</p>
                <p class="text-caption text-grey-7">CEO Airtel</p>
                <blockquote class="text-quote">
                    "Interet Tha leh rintlak hnathawk nan a duhthusam ngei mai ka hmu ve ta e,"
                </blockquote>
            </div>

            <div class="column q-gutter-md justify-center items-center testimonial-card">
                <q-avatar rounded>
                    <q-img width="150" :ratio="1" src="assets/images/people-3.png"/>
                </q-avatar>
                <p class="text-lg text-bold">Sangkima</p>
                <p class="text-caption text-grey-7">Sales Manager HDFC</p>
                <blockquote class="text-quote">
                    "A tha in a van rinthlak em"
                </blockquote>
            </div>

            <div class="column q-gutter-md justify-center items-center testimonial-card">
                <q-avatar rounded>
                    <q-img width="150" :ratio="1" src="assets/images/people-2.png"/>
                </q-avatar>
                <p class="text-lg text-bold ">Juliati</p>
                <p class="text-caption text-grey-7 ">Manager ICICI</p>
                <blockquote class="text-quote">
                    "DHIInternet ka dawr chinah chang dang ka kan thei ta lo,"
                </blockquote>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <!--        PLANS-->

        <div class="full-width text-center text-page-header q-my-lg text-grey-9">
            Our Plans
        </div>
        <div class="row q-col-gutter-md">
            <div class="col-xs-12 col-sm-4">
                <div class="plan-card bg-red-3 text-white column justify-between">
                    <div>
                        <div class="flex q-gutter-sm">
                            <q-icon name="military_tech" size="42px" color="blue-4"/>
                            <div class="text-weight-medium text-lg">Plan one</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-md ">Feature one</div>
                            <div class="text-md ">Value2</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-md ">Feature two</div>
                            <div class="text-md ">Value2</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-md ">Feature tjree</div>
                            <div class="text-md ">Value2</div>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="text-md text-grey-7">Feature one</div>
                            <div class="text-md text-dark">Value2</div>
                        </div>
                    </div>
                    <div>
                        <q-btn class="" rounded color="primary" outline label="Book Now" no-caps/>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="plan-card bg-secondary ">
                    <div class="flex q-gutter-sm">
                        <q-icon name="military_tech" size="42px" color="blue-4"/>
                        <div class="text-weight-medium text-lg">Plan one</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature one</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature two</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature tjree</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md text-grey-7">Feature one</div>
                        <div class="text-md text-dark">Value2</div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-4">
                <div class="plan-card bg-green-6 text-white">
                    <div class="flex q-gutter-sm">
                        <q-icon name="military_tech" size="42px" color="blue-4"/>
                        <div class="text-weight-medium text-lg">Plan one</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature one</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature two</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md ">Feature tjree</div>
                        <div class="text-md ">Value2</div>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="text-md text-grey-7">Feature one</div>
                        <div class="text-md text-dark">Value2</div>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="full-width text-center text-page-header q-my-lg text-grey-9">
            Frequently Asked Question
        </div>
        <q-list style="border-radius: 20px"  class="bg-white shadow-1 rounded-borders">
            <q-expansion-item
                class=" overflow-hidden text-lg"
                icon="info"
                label="Enge in that bikna"
            >
                <q-card>
                    <q-card-section>
                        Hre bik nang
                    </q-card-section>
                </q-card>
            </q-expansion-item>
            <q-expansion-item
                class=" overflow-hidden text-lg"
                icon="info"
                label="Engtia booking tih tur nge">
                <q-card>
                    <q-card-section>
                        Hre bik nang
                    </q-card-section>
                </q-card>
            </q-expansion-item>
        </q-list>
        <br/>
        <br/>
        <br/>
    </q-page>
</template>
<script setup>
import {Head} from '@inertiajs/vue3';
import BackendLayout from "@/Layouts/BackendLayout.vue";

defineOptions({
    layout: BackendLayout
})
</script>
<style scoped>
p{
    margin: 0;
}
.hero-title{
    font-weight: 700;
    font-size: 42px;
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
</style>
