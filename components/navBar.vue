<template>
  <div class="bg-white bg-opacity-90 w-screen md:w-full">
    <nav
      class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center  "
      fixed
    >
      <div class="flex items-center justify-between md:w-screen">
        <a
          href="/"
          class="flex items-center text-xl font-bold text-black md:text-2xl hover:text-white-400"
        >
          <img
            src="@/assets/img/padoca-logo.png"
            alt="padoca"
            class="w-36 h-14 mr-2"
          />
        </a>
        <img
          :src="flag"
          width="48"
          @click="changeCountry"
          class="cursor-pointer"
        />

        <!-- Mobile menu button -->
        <!-- <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button type="button">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div> -->
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <!-- <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.link">
            <div class="text-lg font-bold">
              {{ $t(item.name) }}
            </div>
          </a>
        </li>
      </ul> -->
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    changeCountry() {
      if (this.$i18n.locale === `pt`) {
        this.flag = `https://hatscripts.github.io/circle-flags/flags/us.svg`;
        this.$i18n.locale = "en";
      } else {
        this.flag = `https://hatscripts.github.io/circle-flags/flags/br.svg`;
        this.$i18n.locale = "pt";
      }
    },
  },
  data() {
    return {
      flag: `https://hatscripts.github.io/circle-flags/flags/us.svg`,
      toggleNav: false,
      showMenu: false,
      items: [
        // {
        //   name: "HOME",
        //   link: "/",
        // },
        // {
        //   name: "ABOUT_US",
        //   link: "#about-us",
        // },
        // {
        //   name: "CLASSES",
        //   link: "#our-classes",
        // },
        // {
        //   name: "Contate-nos",
        //   link: "#contact-us",
        // },
      ],
    };
  },
};
</script>
