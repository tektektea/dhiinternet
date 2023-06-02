<template>
    <q-page class="container">
        <div style="min-width: 540px" class="row ">
            <div class="col-xs-12 col-sm-6">
                <div class="text-italic text-md column justify-center full-height">
                    <h1 class="hero-title">
                        DHIINTERNET
                    </h1>
                    <p class="text-italic text-lg">Internet chak leh tha, rinthlak bawk si office leh mahni chenna a hmang duh tan</p>
                    <div class="flex q-gutter-sm">
                        <q-btn class="book-btn" label="Book Now" rounded color="primary" no-caps/>
                        <div class="flex items-center q-gutter-sm cursor-pointer  q-ml-lg">
                                <q-icon name="play_circle"/>
                                <q-item-label>Watch Our Story</q-item-label>
                        </div>
                    </div>


                </div>
            </div>
            <div class="col-xs-12 col-sm-6">
                <q-img height="520px" src="assets/images/hero-img.png"/>
            </div>
        </div>
    </q-page>
</template>
<script setup>

</script>
<style scoped>
.hero-title{
    font-weight: 700;
    font-size: 42px;
}
.book-btn{
    font-size: 21px;
    min-width: 180px;
}
</style>
