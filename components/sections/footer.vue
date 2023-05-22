<template>
  <div class="bg-[#ffffff] text-white container mx-auto">
    <div>
      <div
        class="flex flex-col md:flex-row text-[#583625] self-start justify-between md:py-10 py-4 mx-4"
      >
        <!-- not in mobile -->
        <img
          src="@/assets/img/padoca-logo.png"
          alt="padoca"
          class="mr-2 md:h-20 self-start hidden md:block"
        />
        <div class="flex flex-col justify-center">
          <p class="font-bold text-xl mb-4">{{ $t("SOCIAL_NETWORK") }}</p>
          <div class="flex md:flex-col gap-3">
            <span class="flex items-center">
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
              <p class="font-bold">Facebook</p>
            </span>
            <span class="flex items-center">
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
              <p class="font-bold">Instagram</p>
            </span>
          </div>
        </div>
        <div>
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
              <div>
                <p class="font-bold">Mon-Fri: 8:30am-7:00pm</p>
                <p class="font-bold">Weekend: 9:00am-7:00pm</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-center text-[#583625]">
            <p class="font-bold text-xl mb-4">{{ $t("WHERE_WE_ARE") }}</p>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
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
              <div>
                <p class="font-bold">64, Capel Street</p>
                <p class="font-bold">Dublin | Ireland, D01 CX79</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="my-10 text-[#583625] text-center font-bold">
        ©2019 - {{ year }} Padoca |
        <a class="text-em1-orange" href="https://em1.tech/" target="_blank">
          Developed by Em1Tech
        </a>
      </div>
    </div>
  </div>
</template>

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
