<template>
  <div id="translateForm">
    <form @submit="formSubmit">
      <input type="text" placeholder="请输入需要翻译的内容" v-model="textToTranslate">
      <select v-model="language">
        <option value="en">English</option>
        <option value="ru">Russian</option>
        <option value="fr">French</option>
        <option value="ko">Korean</option>
        <option value="ja">Japanese</option>
        <option value="zh">Chinese</option>
      </select>
      <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  methods:{
    formSubmit:function(e){
      e.preventDefault();
      //alert(this.textToTranslate)
      this.$emit("formSubmit",this.textToTranslate,this.language);
    }
  },
  data () {
    return {
      textToTranslate:"",
      language:""
    }
  },
  created:function(){
    this.language="en";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
