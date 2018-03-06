<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="openModal">open modal</button>
    <button @click="openToast">open toast</button>
    <modal 
      v-show="showModal"
      :options="modalOptions"
      ref="modal"
      >
      <div slot="modal-content">是的护肤水水水水</div>
      </modal>
  </div>
</template>

<script>
import modal from './Modal'
export default {
  name: 'HelloWorld',
  components:{
    'modal': modal
  },
  data () {
    return {
      msg: 'modal',
      modalOptions: {
        title: '模块框'
      },
      showModal: false
    }
  },
  methods: {
    openModal(){
      this.showModal = true
      this.$refs.modal.confirm().then(() => {
        this.showModal = false
        console.log('queding')
      }).catch(e => {
        this.showModal = false
        console.log('cancel')
      })
    },
    openToast() {
      this.$toast({msg:'ttttttttttttttttttt'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
