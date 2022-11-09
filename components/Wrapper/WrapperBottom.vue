<template>
  <section class="header-bottom">
    <div class="header-bottom__logo">
      <IconsLogo />
    </div>
    <div class="header-bottom__menu">
      <ul class="header-bottom__list">
        <li class="header-bottom__item"><nuxt-link to="/categories/">Категории</nuxt-link></li>
        <li class="header-bottom__item"><nuxt-link to="/">Комбайны</nuxt-link></li>
        <li class="header-bottom__item"><nuxt-link to="/">Пресс-подборщики</nuxt-link></li>
        <li class="header-bottom__item"><nuxt-link to="/">Картофелеуборочный комбайн</nuxt-link></li>
        <li class="header-bottom__item"><nuxt-link to="/">Телескопические погрузчики</nuxt-link></li>
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
