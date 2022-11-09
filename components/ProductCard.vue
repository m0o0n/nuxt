<template>
  <div class="product_card">
    <div class="product_card__image">
      <img
        src="~/assets/MEDIA_FRONT_LEFT_DIAGONAL_d1d08b48-09d9-4386-a34c-12dab64851dc.webp"
        alt="product_image"
      />
    </div>
    <div class="product_card__properties--container">
      <h6>
        <nuxt-link :to="/categories/ + item.id">{{ item.title.ru }}</nuxt-link>
      </h6>
      <div class="product_card__properties">
        <span class="product_card__properties-year"
          ><IconsCalendar /> 2013</span
        >
        <span class="product_card__properties-hp"><IconsHeart /> 118 HP</span>
        <span class="product_card__properties-hours"
          ><IconsClock /> 4,605 h</span
        >
      </div>
      <div class="product_card__cost">€23,500</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.product_card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 275px;
  height: auto;
  margin-left: 16px;
  margin-top: 24px;
  border: 1px solid gray;
  .product_card__properties--container {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 8px 16px 16px;
    h6 {
      position: relative;
      font-size: 18px;
      margin: 0 0 5px 0;
      font-size: 14px;
    }
    .product_card__properties {
      position: relative;
      display: flex;
      margin: 0 0 5px 0;
      span {
        display: flex;
        align-items: center;
        color: gray;
        font-size: 13px;
        margin-right: 5px;
        svg {
          height: 14px;
          width: 14px;
          fill: currentColor;
          color: gray;
        }
      }
    }
  }

  .product_card__image {
    position: relative;
    width: 100%;
    height: 185px;
    img {
      position: relative;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
