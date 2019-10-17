<template>
  <div>
    <h1 class="aboutus">About Us</h1>
    <nav class="navbar navbar-toggleable-md navbar-light navbar-about">
      <ul class="nav nav-about">
        <router-link :to="{ name: 'historyLink' }">
          <a class="nav-link">Our History</a>
        </router-link>
        <router-link :to="{ name: 'contactLink' }">
          <a class="nav-link">Contact Us</a>
        </router-link>
        <router-link :to="{ name: 'purchaseGuideLink' }">
          <a class="nav-link">Purchase Guide</a>
        </router-link>
        <router-link :to="{ name: 'shippingLink' }">
          <a class="nav-link">Shipping</a>
        </router-link>
      </ul>
    </nav>
    <hr class="horizontal-about">
    <router-view></router-view>
  </div>
</template>

<style>
    .nav-about a {
        color: black;
        font-weight: 100; 
    }
    .nav-about a:hover {
        color:grey;
        text-decoration: underline;
    }
    .aboutus {
        font-weight: 650;
        padding-left: 1.5%;
        margin: 0%;
        text-align: left;
    }
    .horizontal-about {
        margin-top: 0px;
    }
    .navbar-about {
        padding-left: 0%;
    }
</style>