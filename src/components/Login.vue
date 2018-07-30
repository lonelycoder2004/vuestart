<template>
  <div class="container">
    <h1>Registration</h1>
    <form v-on:submit.prevent="addTicket">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Email ID:</label>
            <input type="text" class="form-control" v-model="email"/>
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Password</label>
              <input typ="text" class="form-control" v-model="password"/>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Register</button>
        </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
        return {
          email : "",
          password : ""
        }
    },
   methods: {
       addTicket() {
             axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
       }
    }
}
</script>