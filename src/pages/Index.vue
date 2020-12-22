<template>
  <Layout :hideHeader="true" :disableScroll="true">
    <div class="container sm:pxi-0 mx-auto overflow-x-hidden py-5">
      <Header
        :title="$page.markdownPage.header_title"
        :image="$page.markdownPage.header_image"
        :altImg="$page.markdownPage.header_altImg"
        :excerpt="$page.markdownPage.header_excerpt"
        :button="$page.markdownPage.button"
        :link="$page.markdownPage.link"
      />
    </div>
  </Layout>
</template>

<page-query>
  query {
    markdownPage(id: "home") {
        id
        path
        header_title
        header_image
        header_excerpt
        header_altImg
        button
        link
    }  
  }

</page-query>

<script>
import Header from "~/components/marketing/sections/cta-sections/Header.vue";

export default {
  components: {
    Header,
  },
  metaInfo() {
    return {
      title: this.$page.markdownPage.title,
    };
  },
};
</script>