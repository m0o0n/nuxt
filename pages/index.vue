<template>
  <div> Hi</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "IndexPage",

  computed: {
    ...mapState({
      productInfo: state => state.products.productInfo.test,
      folderInfo: state => state.folder.folderInfo.folder
      // galleryInfo: state => state.product.productGallery.gallery,
    }),
  },
  methods: {
    ...mapActions({
      SET_PRODUCT_INFO_ACTION: "product/productInfo/SET_PRODUCT_INFO_ACTION",
      SET_GALLERY_ACTION: "product/productGallery/SET_GALLERY_ACTION",
    }),
  },
  data() {
    return {
      productTemp: {},
    };
  },
  async asyncData() {
    const productTemp = {
      title: 1,
      price: 7000,
      oldPrice: 10000,
    };

    return { productTemp };
  },
  mounted() {
    console.log(this);
    console.log(this.productInfo);
    console.log(this.folderInfo);
  },
};
</script>
