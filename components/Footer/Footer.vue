<template>
  <div class="footer">
    <div class="footer_columns">
      <div class="footer__logo-column">
        <Logo />
        <div class="footer__language-switcher"></div>
        <div class="footer__media"></div>
      </div>

      <div>
        <h5>Information</h5>
        <ul>
          <li>Imprint</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Cookie and settings</li>
        </ul>
      </div>

      <div>
        <h5>Company</h5>
        <ul>
          <li>About us</li>
          <li>Career</li>
          <li>Press & News</li>
          <li>Trustpilot</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Wrapper/Logo';
export default {
  name: 'Footer',
  components: {
    Logo,
  },
};
</script>
