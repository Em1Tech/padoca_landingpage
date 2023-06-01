<template>
  <div class="bg-[#ffffff] text-white container mx-auto">
    <div class="flex flex-col md:flex-row justify-between items-center mt-10">
      <div
        class="flex text-[#583625] justify-between self-center md:self-start py-4 mx-4"
      >
        <div
          class="flex flex-col justify-center md:justify-start items-center md:items-start"
        >
          <img
            src="@/assets/img/padoca-logo.png"
            alt="padoca"
            class="mr-2 md:h-20 self-start"
          />
          <div class="flex gap-2 my-4">
            <element-button
              @click="resolveLink('https://www.instagram.com/padoca_dublin')"
            >
              {{ $t("TALK_WITH_US") }}
            </element-button>
            <element-outlined-button
              @click="
                resolveLink('https://www.facebook.com/PadocaBakeryDublin')
              "
            >
              {{ $t("WORK_WITH_US") }}
            </element-outlined-button>
          </div>
          <div class="flex gap-4 ml-2">
            <div
              class="rounded-full bg-[#E8E8E8] h-10 w-10 flex justify-center items-center cursor-pointer"
              @click="resolveLink('https://www.instagram.com/padoca_dublin/')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#583625"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
                ></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M16.5 7.5l0 .01"></path>
              </svg>
            </div>
            <div
              class="rounded-full bg-[#E8E8E8] h-10 w-10 flex justify-center items-center cursor-pointer"
              @click="
                resolveLink('https://www.facebook.com/PadocaBakeryDublin')
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#583625"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <div class="flex flex-col justify-center text-[#583625]">
          <p class="font-bold text-xl mb-4">{{ $t("OPEN_HOURS") }}</p>
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-clock-hour-4"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#583625"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M12 12l3 2"></path>
              <path d="M12 7v5"></path>
            </svg>
            <div class="font-medium">
              <p>{{ $t("WEEKDAYS") }}: 8:30am-7:00pm</p>
              <p>{{ $t("WEEKEND") }}: 9:00am-7:00pm</p>
            </div>
          </div>
        </div>
        <div>
          <div
            class="flex flex-col text-[#583625] cursor-pointer md:mt-2 "
            @click="
              resolveLink(
                'https://www.google.com.br/maps/place/Padoca+Dublin+-+Brazilian+food/@53.277199,-6.4941019,10.92z/data=!4m8!1m2!2m1!1s64+Capel+St+Rotunda!3m4!1s0x48670fc1ed335707:0xf610eb58b59aa198!8m2!3d53.3499159!4d-6.2691591'
              )
            "
          >
            <p class="font-semibold text-xl mb-4">{{ $t("WHERE_WE_ARE") }}</p>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#583625"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                <path
                  d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                ></path>
              </svg>
              <div class="font-medium">
                <p>64, Capel Street</p>
                <p>Dublin | Ireland, D01 CX79</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto border-2 border-[#EABA83]"></div>
    <div class="text-[#9E7D58] my-5 flex justify-center gap-1">
      ©2019 - {{ year }} Padoca
      <a class="text-em1-orange cursor-pointer" @click="resolveLink('https://em1.tech/')">
        | Developed by Em1Tech
      </a>
    </div>
  </div>
</template>

<!-- <style scoped>
.linha {
  border: 2px solid #eeeeee;
  transform: matrix(1, 0, 0, 1, 0, 0);
} 
</style> -->

<script>
export default defineComponent({
  async setup() {
    const year = new Date().getFullYear();
    function resolveLink(url) {
      window.open(url, "_blank");
    }
    return { year, resolveLink };
  },
});
</script>
