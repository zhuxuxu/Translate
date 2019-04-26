<template>
  <div id="app">
    <h1>在线翻译</h1>
    <h5>简单 / 易用 / 便捷</h5>
    <translateForm @formSubmit="translateText"></translateForm>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import  TranslateForm from './components/TranslateForm'
import  TranslateOutput from './components/TranslateOutput'
export default {
  name: 'App',
  components:{
    TranslateForm,TranslateOutput
  },
  data:function(){
    return {
      translatedText:""
    }
  },
  methods:{
    translateText:function(text,language){
      // alert(text);
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190425T110151Z.965989ef52b1d18a.0cf91f3c585080bdaef95c2c1542694d6596b943&lang='+language+'&text='+text).then((response)=>{
        // console.log(response.body.text[0]);
        this.translatedText=response.body.text[0];
      })
    }
  }
}
</script>

<style>
#app{
  text-align: center;
}
</style>
