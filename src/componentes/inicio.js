const template = /*html*/`
<div>
    <div class="w3-bar w3-white">                                
        <div class="w3-dropdown-hover w3-right">
            <button class="w3-button  w3-white"><i class="fa fa-th"></i></button>
            <div class="w3-dropdown-content w3-card-4 w3-round" style="right:10px;">
                <rutas-apps></rutas-apps>
            </div>
        </div>        
        <router-link class="w3-bar-item w3-right w3-button" to="/resumen">Resumen</router-link>
    </div>
    <div class="w3-row imagen">

        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col w3-center s8 m8 l8" propiedades="" contenido-componente="" style="margin-top: 10em;">
            <img src="./img/saul.png" class="" propiedades="" style="width: 12em;">
        </div>
    </div>    
    <div propiedades="" class="w3-row w3-margin-top">
        <div class="w3-col s1 m2 l3 espacio"></div>
        <div class="w3-col s10 m8 l6">
            <div class="w3-block w3-border w3-round-xxlarge w3-padding">
                <i class="fa fa-search"></i>
                <input id="buscador" style="outline: none; border: none; width: 80%;">                    
            </div>
        </div>
    </div>    
</div>
`;

import RutasApps from './rutas-apps.js';
import { setTituloPagina } from './util.js';

export default {    
    template: template,
    mounted() {
        this.addListeners();
        setTituloPagina('Saúl CV - Inicio');
    },
    components: {
        RutasApps
    },
    methods: {        
        //funciones
        addListeners() {
            let con = 1;
            let buscador = this.$el.querySelector('#buscador');
            buscador.focus();
            let texto = [
                'Hola soy Saúl',
                'Soy un desarrollador Web',
                'Experto en tecnologías web',
                'Vue, Angular, Vanilla js,'
            ];
            for (let linea of texto) {
                con = this.animaTexto(linea, con);
                con += 10;
                con = this.animaLimpiar(linea, con);
            }
            con = this.animaTexto('y Web componentes.', con);
        },
        animaTexto(texto, con) {
             let buscador = this.$el.querySelector('#buscador');
            for (let letra of texto) {
                this.siguienteTexto(buscador, letra, con++);
            }
            return con;
        },
        animaLimpiar(texto, con) {
             let buscador = this.$el.querySelector('#buscador');
            let n = texto.length;
            let cad = texto;
            for (let i = 0; i <= n; i++) {
                setTimeout(tik => {
                    buscador.value = cad.substr(0, n - i);
                }, 100 * (con++));
            }
            return con;
        },
        siguienteTexto(buscador, letra, t) {
            setTimeout(tik => {
                buscador.value += letra;
            }, 100 * t);
        }        
    } 
}