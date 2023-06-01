<template>
  <div class="bg-cover bg-left bg-mainpage">
    <div class="container mx-auto md:h-[96vh]">
      <div class="flex flex-col text-white justify-center md:h-96 mx-4">
        <p class="uppercase text-4xl md:text-6xl font-bold py-4">{{ $t("YOU_ARE_WELCOME") }}</p>
        <p class="uppercase text-xl md:text-2xl">{{ $t("HOW_ABOUT_TRYING_SOMETHING_NEW_TODAY") }}</p>
      </div>

      <div class="flex flex-col md:flex-row justify-around items-center gap-2 my-4 md:my-2">
        <div class="w-[330px] md:w-[330px] cursor-pointer" v-for="option in options" :key="option" @click="resolveLink(option.link)">
          <img :src="option.image" alt="" />
          <button
            class="bg-[#ffc301] uppercase text-[#2E2E2E] w-full py-4 font-bold text-2xl flex flex-col items-center"
          >
            {{ $t(option.title) }}
            <span class="text-xs">{{ $t(option.comments) }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default defineComponent({
  async setup() {
    const options = [
        {
          image: "/img/tapioca.png",
          title: "ORDER_NOW",
          link: "https://my.flipdish.com/padoca/",
          comments: "PICKS_DELIVERY"
        },
        {
          image: "/img/party.png",
          title: "ASK_FOR_PARTY",
          link: "https://www.checktime.ie/en/store/padoca/1489057",
          comments: "CAKES_KITS"
        },
      ];
    function resolveLink(url) {
      window.open(url, "_blank");
    }
    return { options, resolveLink };
  },
});
</script>
