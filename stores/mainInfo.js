import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useMain = defineStore('mainInfo', {
   state() {
      return {
        info: {
            file: "https://i.ibb.co/YjfHBVL/default-big.png",
        }
      }
   },

   actions: {
      async getResults() {
         const response = await $fetch('/api/main', { method: 'GET' })
         this.info = response
      },
   },
})

