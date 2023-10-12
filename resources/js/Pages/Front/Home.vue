<template>
    <Head>
        <title>Home</title>
        <meta name="description" content="Internet rintlak leh chaktha duh tan a chenfakawm"/>
    </Head>
    <q-page>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <div  style="margin-top:auto;margin-bottom: auto">
                    <h1 class="hero-text"><span class="text-primary"> DHI</span> INTERNET</h1>
                    <div class="text-secondary text-lg">Mizoram Internet Service Provider Chak tha leh ropui</div>
                    <br/>
                    <br/>
                    <div class="text-lg text-weight-medium text-grey-7">Call Us : 8987878887/1231312</div>
                    <br/>
                    <button class="hero-btn">Book Now</button>
                </div>
            </div>
            <div class="col-xs-6">
                <q-img src="https://img.freepik.com/free-vector/flat-people-with-wifi-sign-background_23-2148198524.jpg?w=826&t=st=1697105821~exp=1697106421~hmac=cdebb85a9b7ad7902adc0a7d1271e451b5c673891cb8ea2a1503f16bfd80b381"/>
            </div>
        </div>
        <div class="container">
            <br/>
            <br/>
            <section v-for="item in sections" :key="item.id">
                <div v-html="item?.content"/>
            </section>
            <br/>
            <br/>
            <!--        PLANS-->
            <div class="full-width text-center text-page-header q-my-lg text-grey-9">
                Plans
            </div>
            <br/>
            <section class="row q-col-gutter-md" >
                <div v-for="item in plans" :key="item.id" class="col-xs-12 col-sm-3">
                    <div v-html="item?.card"/>
                </div>
            </section>
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

        </div>


    </q-page>
</template>
<script setup>
import {Head} from '@inertiajs/vue3';
import BackendLayout from "@/Layouts/BackendLayout.vue";

defineOptions({
    layout: BackendLayout
})

const props=defineProps(['sections','plans'])

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
