<template>
  <div>
    <div class="lg:py-12 lg:flex lg:justify-center flex flex-col">
      <div
        class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
      >
        <div class="lg:w-1/2">
          <div class="h-64 bg-cover lg:rounded-lg lg:h-full" :style="img"></div>
        </div>
        <div class="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
          <h2 class="text-3xl text-gray-700 font-bold">{{ card.title }}</h2>
          <p class="mt-4 text-gray-700">{{ card.excerpt }}</p>
          <PostButton v-if="card.button" :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostButton from "~/components/custom/Buttons/PostButton.vue";

export default {
  props: ["card"],
  components: {
    PostButton,
  },
  computed: {
    img: function () {
      if (this.card.image.src)
        return "background-image:url(" + this.card.image.src + ")";
      return this.card.image;
    },
  },
};
</script>