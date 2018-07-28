<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Episode No</th>
      <th scope="col">Title</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="data in allen" v-bind:key="data">
      <td>{{data.episode}}</td>
      <td>{{data.titile}}</td>
      <td><iframe width="260" height="115" :src="'http://www.youtube.com/embed/'+data.link+''" frameborder="0" allowfullscreen></iframe></td>
    </tr>
   
  </tbody>
</table>
</template>
<script>
export default {
    data(){
        return {
          reg: {},
          status: [],
          allen: [],

        }
    },
   created() {
       var vm = this;
    const url = '';
    this.$http.get(url).then(data => {
        vm.status = data.data;
        if(vm.status.status == true){
            vm.allen = vm.status.data;
        }
        else{
            alert("Failure")
        }
      })
  }
}
</script>