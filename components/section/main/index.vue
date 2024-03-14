<template>
    <div class="w-[1100px] mx-auto my-0">
    <div class="bg-opacity-90 md:w-[1000px] z-[1] w-[1000px] m-auto max-w-[1300px]:w-[700px]">
      <nav class="container py-[40px] mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between md:w-screen">
          <a href="/" class="flex items-center text-xl font-bold text-black md:text-2xl hover:text-white-400">
            <img src="@/assets/img/padoca-logo.png" alt="padoca" class="w-36 h-14 mr-2" />
          </a>

          <div class="z-[2]">
            <MenuHorizontal />
          </div>
        </div>
      </nav>
    </div>

    <div class="absolute top-0 right-0">
      <img class="2xl:w-[1000px] min-[1200px]:w-[800px] lg:w-[750px] w-[100%]" src="@/assets/img/background-vetor.svg">
    </div>

    <div class="flex">
      <div class="z-[2] w-[50%] pt-[100px]">
        <div class="h-[205px] flex justify-center">
          <p class="font-noto-serif-telugu text-[#5A2B00]">BRAZILIAN SNACKS</p>
          <p class="font-amalfi-coast text-[65px] absolute w-max text-[#7A4E1D]" style="line-height: normal">baked with
            love</p>
        </div>
        <div class="flex w-auto pb-[1rem] flex-col  justify-center items-center gap-3">
          <button
            class="w-[320px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] px-[30px] text-[20px] rounded-[50px] py-[10px] text-[#5A2B00] bg-[#F3E0CB] flex align-middle justify-center gap-4  ">Peça
            para Você
            <div>
              <icon name="material-symbols:arrow-right-alt"></icon>
            </div>
          </button>
          <button
            class="w-[320px] shadow-[0_4px_10px_0px_rgba(0,0,0,0.25)] px-[30px] text-[20px] rounded-[50px] py-[10px] text-[#5A2B00] bg-[#FFF] flex align-middle justify-center gap-4">Peça
            para Festas
            <div>
              <icon name="material-symbols:arrow-right-alt"></icon>
            </div>
          </button>
        </div>
      </div>

      <div class="text-right w-[50%] z-[0]">
        <div class="h-[650px] static">
          <div class="absolute w-[700px]">
            <img class=" w-[615px] mt-[70px] z-[3]" src="@/assets/img/coxinha.png">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>