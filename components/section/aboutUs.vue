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
