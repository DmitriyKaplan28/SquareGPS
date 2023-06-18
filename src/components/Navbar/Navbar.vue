<template>
  <div>
    <nav>
      <router-link to="/">О задании</router-link>
      <router-link to="/maps">Карта</router-link>
    </nav>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

nav a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  background-color: #111;
}
</style>
