<template>
  <section class="header-bottom">
    <div class="header-bottom__logo">
      <nuxt-link to="/">
        <IconsLogo />
      </nuxt-link>
    </div>
    <div class="header-bottom__menu">
      <ul class="header-bottom__list">
        <li class="header-bottom__item">
          <nuxt-link to="/categories/">Категории</nuxt-link>
        </li>
        <li
          class="header-bottom__item"
          v-for="category of categories
            .filter(el => el.title.length < 10)
            .slice(0, 4)"
          :key="category.slug"
        >
          <nuxt-link :to="/categories/ + category.slug">{{
            category.title
          }}</nuxt-link>
        </li>
        <li class="header-bottom__item">
          <nuxt-link to="/">
            <span>Больше</span>
            <IconsDropDown />
          </nuxt-link>
        </li>

        <hr class="vertical-split" />
        <li class="header-bottom__item">
          <span>Услуги</span>
          <IconsDropDown />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      categories: state => state.categories.categories.categories,
    }),
  },
};
</script>
