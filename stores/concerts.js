import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export const useConcert = defineStore('concert', {
   state() {
      return {
         concerts: [],
      }
   },

   actions: {
      async getResults() {
         const response = await $fetch('/api/info', { method: 'GET' })
         this.concerts = response
      },
      clearCharacters() {
         this.concerts = []
      }
   },

   getters: {
      showCharacters() {
         return 'A listagem é essa: ' + this.characters
      }
   }

})

