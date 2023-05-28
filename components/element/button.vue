<template>
  <div
    class="mt-4 cursor-pointer text-white text-center md:self-start border-2 border-transparent md:mt-4 bg-[#583625] hover:bg-[#7A5E51] focus:ring-4 focus:ring-[#583625] font-medium rounded-lg text-sm px-5 py-2 dark:bg-[#583625] dark:hover:bg-[#7A5E51] focus:outline-none dark:focus:ring-[#583625] transition duration-150 ease-in-out"
    href="https://www.facebook.com/greengroupevents/"
    @click="linkTo"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "#",
    },
  },
  methods: {
    linkTo() {
      window.open(this.link, "_blank");
    },
  },
};
</script>
