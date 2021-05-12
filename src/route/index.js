import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home";
import Info from "@/views/Info";
import Login from "@/views/Login";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/info',
        component: Info
    },
    {
        path: '/login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router