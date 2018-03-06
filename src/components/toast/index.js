import Toast from './Toast'

export default{
    install(Vue, options) {
        const toast = new Vue({
            components: { Toast },
            template: '<toast/>'
        })
        document.body.appendChild(toast.$mount().$el)
        Vue.prototype.$toast =  opts => {
            console.log(toast.config)
            toast.msg = opts.msg
            toast.config.show = true
        }
    }
}