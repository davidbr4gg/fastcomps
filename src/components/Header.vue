<template>
  <div class="top-bar">
    <div class="container">
      <header class="row">
        <nav class="navbar navbar-toggleable-md navbar-light">
          <a class="navbar-brand" href="/">
            <img src="../assets/fastcomps.png" alt="Fastcomps Logo" />
          </a>
          <ul class="nav">
            <router-link :to="{ name: 'homeLink' }" tag="li">
              <a class="nav-link">Home</a>
            </router-link>
            <router-link :to="{ name: 'menuLink' }">
              <a class="nav-link">Menu</a>
            </router-link>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
header {
  margin-bottom: 0px;
}

.navbar-brand {
  font-size: 2em;
}
img {
  width: 250px;
}
</style>