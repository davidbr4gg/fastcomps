<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-centre">
            <div class="background">
                <h1>Welcome to fastComps!</h1>
                <h2>Need A Fast Computer?</h2>
                <button class="btn btn-success" @click="goToMenu">Shop Here!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    methods: {
        goToMenu() {
            this.$router.push( { name: 'menuLink' } )
        }
    }
}
</script>

<style>
    #home {
        background: url('../assets/pc.jpg');
        height: 600px;
        padding: 15%;
        background-size: cover;
    }

    h1, h2 {
        margin: 6%;
        text-align: center;
    }

    .background {
        background: #eee;
        opacity: 0.9;
        max-width: 60%;
        margin: 0 auto;
        padding: 20px 0;
    }

    .btn-success {
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
    }
</style>