import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
import { setTituloPagina } from './util.js';
import AboutMe from './about-me.js';
import AboutMePeque from './about-me-peque.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Resumen"></barra-titulo>    
    <barra-menu activo="resumen"></barra-menu>    
    <div class="w3-row parrafo w3-margin-top">
        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m6 l5" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div class="responsivo-peque">
                    <about-me-peque></about-me-peque>
                </div>
                <div><br></div>
                <div><span style="color: blue;">Mis skills</span><br></div>
                <div><router-link to="/skills" style="color: green;">/skills</router-link><br></div>
                <div><span class="">Manejo de las últimas tecnologías&nbsp;web para el desarrollo de páginas web impresionantes.</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">Mi experiencia</span></div>
                <div><router-link style="color: green;" to="/experiencia">/experiencia</router-link></div>
                <div><span>Front End Developer(Angular) / Evomatik Oct 2017 - Mar 2019 Encargado del desarrollo y mantenimiento del proyecto de SIGI del estado del México(SEAGeD® Fiscalía).</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">Contacto</span></div>
                <div><router-link style="color: green;" to="/contacto">/contacto</router-link></div>
                <div><span>Ve el perfil de Saúl Salazar en LinkedIn. Cominicate a través de email o WhatsApp. O explora los pens en codepen. </span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">Estudios</span></div>
                <div><router-link style="color: green;" to="/estudios">/estudios</router-link></div>
                <div><span>Licenciado en Informática en la UV 2012 - 2016 El programa académico de la Licenciatura en Informática de la Universidad Veracruzana.</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">Portafolio</span></div>
                <div><router-link style="color: green;" to="/portafolio">/portafolio
                    </router-link></div>
                <div><span>W3Studio - Escritorio Iterface web que simula un escriotrio virtual, el propósito de esta interface es dar una opción más al usuario para su aplicación web.</span></div>
            </div>
        </div>
        <div class="w3-col s3 responsivo" propiedades="" contenido-componente="">
            <about-me></about-me>
        </div>
    </div>
</div>
`;

export default {    
    template: template,
    components: {
        BarraTitulo,
        BarraMenu,
        AboutMe,
        AboutMePeque
    },
    mounted() {
        setTituloPagina('Saúl CV - Resumen');
    }
}