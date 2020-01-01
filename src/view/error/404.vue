<template>

  <div class="page-error">
    <img
      src="../../../public/img/404.png"
      class="page-logo"
    >
    <p class="page-container">此页面不存在点<router-link to="/login"><a style="color:red;">此</a></router-link>返回登录页面</p>
  </div>

</template>

<style scoped>
.page-error {
  text-align: center;
}
n .page-logo {
  width: 75%;
  height: 75%;
  position: fixed;
}
.page-container {
  font-size: 20px;
  text-indent: 1em;
  line-height: 20px;
  text-align: center;
  color: rgb(84, 102, 123);
}
</style>
