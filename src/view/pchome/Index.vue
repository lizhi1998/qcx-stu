<template>
  <div class="app">
    <Pcheader></Pcheader>
    <Pcmain></Pcmain>
    <Pcfooter></Pcfooter>
  </div>
</template>
<script>
/* @ is an alias to /src*/
import Pcheader from '@/component/common/Pcheader.vue'
import Pcmain from '@/component/common/Pcmain.vue'
import Pcfooter from '@/component/common/Pcfooter.vue'
export default {
  components: {
    Pcheader,
    Pcmain,
    Pcfooter
  },
  data() {
    return {

    };
  }

};
</script>