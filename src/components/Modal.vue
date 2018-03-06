<template>
    <div class="modal">
        <div class="modal-content">
            <slot name="modal-content">

            </slot>
            <div class="modal-head">
                head
                <span class="close">X</span>
            </div>
            <div class="modal-body">
                body
            </div>
            <div class="modal-foot" slot="modal-foot">
                <span class="btn" @click="cancel">{{ modal.cancelButtonText }}</span>
                <span class="btn" @click="submit">{{ modal.confirmButtonText }}</span>
            </div>
        </div>
        <div class="mask"></div>
    </div>  
</template>
<script>
export default {
    props: {
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            resolve: '',
            reject: '',
            promise: '', // 保存promise对象
        }
    },
    computed:{
        modal(){
            let options = this.options
            return {
                cancelButtonText: options.cancelButtonText ? options.cancelButtonText : '取消',
                confirmButtonText: options.confirmButtonText ? options.confirmButtonText : '确定',
            }
        }
    },
    methods:{
        //确定,将promise断定为完成态
        submit() {
            this.resolve('submit')
        },
        // 取消,将promise断定为reject状态
        cancel() {
            this.reject('cancel')
        },
        //显示confirm弹出,并创建promise对象，给父组件调用
        confirm() {
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve
                this.reject = reject
            })
            return this.promise //返回promise对象,给父级组件调用
        }
    }
}
</script>
<style lang="scss">
.modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
}
.mask{
    background:rgba(0,0,0,.6);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}
.modal-content{
    width:80%;
    background: #fff;
    position: absolute;
    left:50%;
    top:50%;
    z-index: 999;
    transform: translateX(-50%) translateY(-50%);
}
.modal-head{
    position: relative;
    height:30px;
    .close{
        position: absolute;
        right:15px;
        top:5px;
    }
}
.modal-body{
    height:100px;
}
.modal-foot{
    padding:10px 0;
}
.btn{
    display: inline-block;
    padding:5px 20px;
    color:#fff;
    background: #998822;
    border-radius: 5px;
}
</style>

