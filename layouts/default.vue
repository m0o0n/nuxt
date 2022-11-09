<template>
  <div>
    <Navbar />
    <main>
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '~/components/Wrapper/Navbar';
import Footer from '~/components/Footer/Footer';
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<!-- <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/categories">Categories</nuxt-link>
        </li>
      </ul> -->
