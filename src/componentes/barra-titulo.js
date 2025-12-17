const template = /*html*/`
<div class="w3-bar w3-light-grey">
    <router-link class="w3-bar-item" to="/">
        <img src="./img/solosaul.png" style="width: 4em;">
    </router-link>
    <div class="w3-bar-item" id="span-buscar" style="margin-left: 10%;">            
        <input id="buscar" :value="titulo" readonly>
        <i class="fa fa-search"></i>
    </div>
    <div class="w3-dropdown-hover w3-right" style="border-radius: 50%;">
        <button class="w3-button  w3-light-grey" style="border-radius: 50%;"  @click="activo=!activo"><i class="fa fa-th"></i></button>
        <div v-if="activo" class="w3-dropdown-content w3-card-4 w3-round" style="right:10px; padding: 8px 6px; display: block;">
            <rutas-apps></rutas-apps>
        </div>
    </div>        
    <router-link class="w3-bar-item w3-right w3-button" to="/resumen">Resumen</router-link>
</div>
`;

import RutasApps from './rutas-apps.js';

export default {
    data() {
        return {
            activo: false
        }
    },
    props: ['titulo'],
    components: {
        RutasApps
    },
    template: template
}