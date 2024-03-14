<template>
  <div class="bg-opacity-90 md:w-full z-[1] w-[1000px] m-auto">
    <nav
      class="container py-[40px] mx-auto md:flex md:justify-between md:items-center"
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

        <div class="z-[2]">
          <ul class="flex gap-[55px] text-[20px]">
            <li class="text-[#7A4E1D]">Home</li>
            <!-- <li class="text-[#7A4E1D]">Menu</li> -->
            <!-- <li class="text-[#7A4E1D]">Find us</li> -->
            <li class="text-[#7A4E1D]">About</li>
            <!-- <li class="text-[#7A4E1D]">I W</li> -->
            <!-- <li class="text-[#7A4E1D]">PT-BR</li> -->
          </ul>
        </div>
        <!-- <img
          :src="flag"
          width="48"
          @click="changeCountry"
          class="cursor-pointer"
        /> -->
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    changeCountry() {
      if (this.$i18n.locale === `pt`) {
        this.flag = `https://hatscripts.github.io/circle-flags/flags/ie.svg`;
        this.$i18n.locale = "en";
      } else {
        this.flag = `https://hatscripts.github.io/circle-flags/flags/br.svg`;
        this.$i18n.locale = "pt";
      }
    },
  },
  data() {
    return {
      flag: `https://hatscripts.github.io/circle-flags/flags/ie.svg`,
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
