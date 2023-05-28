<template>
  <div
    class="mt-4 cursor-pointer text-[#583625] border-2 border-[#808080] hover:border-[#583625] text-center md:self-start  font-medium rounded-lg text-sm px-5 py-2 transition duration-150 ease-in-out"
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
