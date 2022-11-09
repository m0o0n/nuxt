<template>
  <section class="header-bottom">
    <div class="header-bottom__logo">
      <IconsLogo />
    </div>
    <div class="header-bottom__menu">
      <ul class="header-bottom__list">
        <li class="header-bottom__item"><nuxt-link to="/categories/">Категории</nuxt-link></li>
        <li class="header-bottom__item">Комбайны</li>
        <li class="header-bottom__item">Пресс-подборщики</li>
        <li class="header-bottom__item">Картофелеуборочный комбайн</li>
        <li class="header-bottom__item">Телескопические погрузчики</li>
        <li class="header-bottom__item">
          <span>Больше</span>
          <IconsDropDown />
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
