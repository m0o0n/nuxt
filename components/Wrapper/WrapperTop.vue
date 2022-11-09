<template>
  <section class="header-top">
    <div class="header-top__phone">
      <IconsPhone />
      <a tabIndex="0" href="tel:+494087407541"> +49(0) 40 874 075 41 </a>
    </div>
    <div class="header-top__menu">
      <ul class="header-top__list">
        <li class="header-top__item"><nuxt-link to="/">Sell with E-FARM</nuxt-link></li>
        <li class="header-top__item"><nuxt-link to="/about/">About us</nuxt-link></li>
        <li class="header-top__item"><nuxt-link to="/">Why E-FARM</nuxt-link></li>
        <li class="header-top__item">
          <nuxt-link to="/">
            <span>More</span>
            <IconsDropDown />
          </nuxt-link>
        </li>
      </ul>
      <hr class="vertical-split" />
      <div class="wrapper_top__languageSwicher">
        <div class="wrapper_top__languageSwicher_flag"></div>
        <!-- select locales -->
      </div>
      <hr class="vertical-split" />
      <div class="header-top__search">
        <IconsSearch />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WrapperTop',
};
</script>
