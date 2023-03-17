import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
import { setTituloPagina } from './util.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Experiencia"></barra-titulo>    
    <barra-menu activo="experiencia"></barra-menu>
    <div class="w3-row parrafo w3-margin-top">
        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div><br></div>

                <div><span style="color: blue;">Desarrollo en pandemia(Campeche)</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> Feb 2020 - Ene 2023
                </div>                
                <div>
                    <ul>
                    <li>En mis tiempos libres me dedique hacer diferentes aplicaciones como un escritorio web, una herramienta RAD para crear web componentes, un editor de código estilo codepen y un recetario que calcula las calorias, carbohidratos y proteinas</li>
                    <li>Cree algunas librerías que necesitaba para las aplicaciones anteriores y las aloje en npm.</li>
                    </ul> 
                    
                    
                </div><br>

                <div><span style="color: blue;">Front End Developer(Angular) / Evomatik(Veracruz)</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> Oct 2017 - Mar 2019
                </div>                
                <div> 
                    <ul>
                        <li>Encargado del desarrollo y mantenimiento del proyecto de SIGI* del estado México(SEAGeD® Fiscalía).</li>
                        <li>Utilización de Angular y las últimas tecnologías. </li>
                        <li>Desarrollo de herramientas que facilitaron la implementación del front-end lo que implico que nuevos miembros del equipo fueran productivos.</li>
                        <li>Mantener el proyecto de sigi de la fiscalía del estado de México.</li>
                        <li>Como desarrollador estuve encargado de crear componentes, servicios y guards en Angular. Realizar pruebas unitarias.</li>
                        <li>Como líder de equipo dirigía a los miembros del equipo para alcanzar los objetivos establecidos. Otras tareas que tenia era el pedir versiones, administrar los cambios en git y participar en las juntas de Scrum. También era el encargado que los nuevos miembros se integraran al equipo y darles una pequeña capacitación de las herramientas utilizábamos. </li>
                    </ul>
                    <div>*SIGI: Sistema Integral de Gestión de la Información</div>
                </div><br>

                <div><span style="color: blue;">Web Developer / Evomatik(Veracruz)</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> Nov 2016 - Jul 2017
                </div>                
                <div> 
                    Desarrollo en Java usando el framaework Play(https://www.playframework.com/) y jquery para el proyecto de gestión de Price Shoes.
                </div><br>

                <div><span style="color: blue;">Simulador de procesos / Cimat (Guanajuato)</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> Oct 2007 - Ene 2008
                </div>                
                <div> 
                    Organizador y creador de material para simulación de procesos en c++ y R.
                </div><br>

            </div>
        </div>
    </div>
</div>
`;

export default {    
    template: template,
    components: {
        BarraTitulo,
        BarraMenu
    },
    mounted() {
        setTituloPagina('Saúl CV - Experiencia');
    }
}