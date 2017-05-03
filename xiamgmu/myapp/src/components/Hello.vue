<template>
  <div class="hello">
    <div>{{ $store.state.count }}</div>
    <button @click="increase">+</button>
    <ul>
      <router-link tag="li" to="/youhuo/boy" id="hello_boy"><a>Boy</a></router-link>
      <router-link tag="li" to="/youhuo/girl" ><a>Girl</a></router-link>
      <router-link tag="li" to="/youhuo/kid" ><a>Kid</a></router-link>
      <router-link tag="li" to="/youhuo/lifestyle" ><a>LifeStyle</a></router-link>
    </ul>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions } from 'vuex'

export default {
  
    
  
  methods: {
    ...mapActions([
      'increase',
    ])
  },
  render(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 0.2rem;
  margin: 1rem 1rem;
  height: 1.1rem;
  width: 10.4rem;
  background: black;
  display: block;
  line-height: 1.1rem;
}

a {
  color: #42b983;
  font-size: 0.2rem;
}
#hello_boy{

}
</style>
