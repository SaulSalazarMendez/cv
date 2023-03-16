import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
import { setTituloPagina } from './util.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Contacto"></barra-titulo>    
    <barra-menu activo="contacto"></barra-menu>
    
    <div class="w3-row parrafo w3-margin-top">
        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div><br></div>
                <div><span style="color: blue;">Linkedin</span><br></div>
                <div><a href="https://www.linkedin.com/in/sa%C3%BAl-salazar-270668151/" style="color: green;" target="_blank">Linkedin</a><br></div>
                <div><span class="">Ve el perfil de Saúl Salazar en LinkedIn, la mayor red profesional del mundo. Saúl tiene 1 empleo en su perfil. Ve el perfil completo en LinkedIn y descubre los contactos y empleos de Saúl en empresas similares.</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">Email</span></div>
                <div><a href="mailto:saul.salazar.mendez@gmail.com?subject=Mail de Pagina Personal" style="color: green;" target="_blank">saul.salazar.mendez@gmail.com</a><br></div>
                <div><span>Gmail es un servicio de correo electrónico proporcionado por la empresa estadounidense Google desde el 1 de abril de 2004. Saúl cuenta con un correo electrónico en esta aplicación.</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">WhatsApp</span></div>                
                <div><a href="https://wa.me/522281064455" style="color: green;" target="_blank">2281064455</a><br></div>
                <div><span>WhatsApp Messenger es una aplicación de mensajería instantánea para teléfonos inteligentes. Utiliza este medio para comunicarte con Saúl.</span></div>
                <div><span><br></span></div>
                
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
        setTituloPagina('Saúl CV - Contacto');
    }
}