<template>
  <div class="footer">
    <div class="footer__columns">
      <div class="footer__logo-column footer__item">
        <IconsLogo />
        <div class="footer__language-switcher"></div>
        <div class="footer__media"></div>
      </div>

      <div class="footer__item">
        <h5 class="footer__title">Information</h5>
        <ul class="footer__list">
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Imprint</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Cookie Policy</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Privacy Policy</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Terms and Conditions</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Cookie and settings</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="footer__item">
        <h5 class="footer__title">Company</h5>
        <ul class="footer__list">
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">About us</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Career</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Press & News</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Trustpilot</nuxt-link>
          </li>
          <li class="footer__list-item">
            <nuxt-link to="/" class="footer__link">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!-- <script>
import Logo from '~/components/Wrapper/Logo';
export default {
  name: 'Footer',
  components: {
    Logo,
  },
};
</script> -->
