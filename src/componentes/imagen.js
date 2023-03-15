export default {
	props: ['url'],
	data() {
  		return {
    		activo: 1 
  		}
  	},
  	methods: {
  		swap() {
  			this.activo = !this.activo;
  		}
  	},
	template: `
	<div>
    <img :src=url  class="img-activa" v-if="!activo" @click="swap()"/>
	<img :src=url class="img-normal"  v-if="activo" @click="swap()"/>
    </div>
	`
}
