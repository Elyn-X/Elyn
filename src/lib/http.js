import axios from 'axios' //导入axios
// 设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'


// 实现install方法
// 把axios设置到Vue原型上
// export default暴露出去
export default {
    install(Vue) {
        Vue.prototype.$http = axios
    }
}