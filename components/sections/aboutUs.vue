<template>
  <div class="bg-[#ececec] w-[90wh]">
    <div class="container mx-auto flex flex-col justify-center">
      <div>
        <div class="mx-4 md:mx-auto mt-4">
          <div class="font-medium text-2xl uppercase text-[#7A5E51]">
            {{ $t("ABOUT_US") }}
          </div>
          <div class="font-bold text-2xl uppercase text-[#583625]">
            {{ $t("A_LITTLE_BIT_ABOUT_OUR_HISTORY") }}
          </div>
        </div>
      </div>
      <div class="flex md:flex-row flex-col gap-4 my-4">
        <div class="md:w-1/3">
          <img class="" src="/img/founders.png" />
        </div>
        <div class="md:w-2/3 flex flex-col justify-between mx-5">
          <div class="">
            <div class="font-bold text-2xl text-[#583625] tracking-wide my-2">
              {{ $t("COME_TO_PADOCA") }}
            </div>
            <div class="font-normal text-xl text-[#583625] text-justify">
              <div class="indent-8">
                {{ $t("ABOUT_US_TEXT") }}
              </div>
            </div>
          </div>
          <element-button link="https://www.instagram.com/padoca_dublin/">
            <span class="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                viewBox="0 96 960 960"
                width="32"
              >
                <path
                  d="M442 814q-115 0-198.5-81.5T160 539V276q0-24 18-42t42-18h529q54.271 0 92.636 37Q880 290 880 344t-38.364 91Q803.271 472 749 472h-25v67q0 112-83.5 193.5T442 814ZM220 412h444V276H220v136Zm222 342q91 0 156.5-63.5T664 539v-67H220v67q0 88 65.5 151.5T442 754Zm282-342h25q29 0 50-19.5t21-48.5q0-29-21-48.5T749 276h-25v136ZM160 936v-60h634v60H160Zm282-464Z"
                  fill="#fff"
                />
              </svg>
              <p class="uppercase text-xl font-bold px-4">
                {{ $t("WORK_WITH_US") }}
              </p>
            </span>
          </element-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainImage {
  filter: drop-shadow(10px -10px 0px #583625);
}
</style>
