import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


// 导入组件
import login from '../components/login.vue'
import index from '../components/index.vue'
import users from '../components/users.vue'


// 规则
let routes = [{
        path: '/login',
        component: login
    },
    {
        path: '/',
        component: index,
        children: [{
            path: 'users',
            component: users
        }]
    }
]


// 路由对象
let router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    // to去哪
    // console.log(to);
    // form从哪来
    // console.log(from);
    if (to.path == "/login") {
        // 就放过去
        next()
    } else {
        if (window.sessionStorage.getItem('token')) {
            // 登录了
            next()
        } else {
            Vue.prototype.$message.warning('请登录')
                // 没有登录
            next('/login')
        }
    }
})

export default router;