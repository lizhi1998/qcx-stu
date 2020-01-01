export default {
    isCrossDomain: true, // 是否启用跨域
    withCredentials: true,
    // 生产环境接口
    build: {
        url: '/api'
    },
    // 开发环境接口
    dev: {
        url: 'http://47.106.151.144:8080'
    },
    console: {
        show: true, // 是否显示控制台语句
        level: 'debug' // 设置等级( debug -> info -> warn -> error)
    },
    homePage: '/home', //主页路由
    loginPage: '/login', //登录页面路由
    useEslint: true,
};