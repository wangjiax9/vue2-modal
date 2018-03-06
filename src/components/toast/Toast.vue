<template>
    <div class="toast" v-show="isShow">
        <div class="top">{{msg}}</div>
    </div>
</template>
<script>
export default {
    props:{
        msg: String
    },
    data(){
        return {
            config:{
                show: false
            }
        }
    },
    computed:{
        isShow(){
            return this.show
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>