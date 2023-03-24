import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
import Imagen from './imagen.js'
import { setTituloPagina } from './util.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Portafolio"></barra-titulo>    
    <barra-menu activo="portafolio"></barra-menu>
    
    <div class="w3-row parrafo w3-margin-top">
        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div><br></div>
                <div><span style="color: blue;">Desk-js</span><br></div>
                <div><img src="./img/logo.png" style="width: 20px"> <a href="https://saulsalazarmendez.github.io/ejemplos/desk-js/" style="color: green;" target="_blank">Desk-js</a><br></div>
                <div class="parrafo">
                <div >Escritorio web, creado con el puro fin de tener una interfaz estilo escritorio en el explorador, de momento tiene una par de aplicaciones y se pueden agregar otras mediante e-frames.</div>
                </div>
                <imagen url="./img/ide.png" />
                <div><span><br></span></div>
                <div><span style="color: blue;">w3-ide</span></div>
                <div><img src="./img/logo.png" style="width: 20px"> <a href="https://saulsalazarmendez.github.io/ejemplos/w3studio/" style="color: green;" target="_blank">w3-ide</a><br></div>
                <div class="parrafo">
                    <div>
                    El proposito era crear una aplicación RAD para crear prototipos rápidos usando la w3css y bootstrap pero durante de la pandemia se quedo en stan by.
                    </div>
                </div>
                <video id="video" propiedades="" src="./video/ejemplo-edicion.webm" controls="controls" style="width: 180px;" contenido-componente="">        
                </video>
                <div><span><br></span></div>
                <div><span style="color: blue;">try-codding</span></div>                
                <div><img src="./img/try-coding.svg" style="width: 20px"> <a href="https://saulsalazarmendez.github.io/ejemplos/try-coding/" style="color: green;" target="_blank">try-codding</a><br></div>
                <div><span>Cree un editor de código para hacer pruebas rápidas de javascript, css y html. Sirve para compartir código y es lo que utilizo para los demos de npm.</span></div>
                <imagen url="./img/try-codding.png" />
                <div><span><br></span></div>
                <div><span style="color: blue;">Recetario</span></div>                
                <div><img src="./img/fruta.svg" style="width: 20px"> <a href="https://saulsalazarmendez.github.io/ejemplos/recetario/" style="color: green;" target="_blank">Recetario</a><br></div>
                <div><span>Cree un recetario en React solo para saber algonos datos básicos de la comida. Lo interezante es que aprendi a hacer un tour sobre la aplicación.</span></div>
                <imagen url="./img/recetas.png" />
                <div><span><br></span></div>
                <div><span style="color: blue;">tour-web</span></div>
                <div><img src="./img/npm.png" style="width: 20px"> <a href="https://www.npmjs.com/package/tour-web" style="color: green;" target="_blank">https://www.npmjs.com/package/crud-indexeddb</a><br></div>
                <div><span>Una librería para dar tour en aplicaciones web. Esta herramienta la cree por necesidad, dado que las otras librerias dejaban colgado a las app React</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">crud-indexeddb</span></div>
                <div><img src="./img/npm.png" style="width: 20px"> <a href="https://www.npmjs.com/package/crud-indexeddb" style="color: green;" target="_blank">https://www.npmjs.com/package/crud-indexeddb</a><br></div>
                <div><span>Una librería para usar indexedDb con operaciones crud. Funciona solo en el explorador, esta alojada en npm</span></div>
                <div><span><br></span></div>
                <div><span style="color: blue;">notificaciones-w3css</span></div>
                <div><img src="./img/npm.png" style="width: 20px"> <a href="https://www.npmjs.com/package/notificaciones-w3css" style="color: green;" target="_blank">https://www.npmjs.com/package/notificaciones-w3css</a><br></div>
                <div><span>Una librería para mostrar notificaciones en el explorador. Utilizamos w3css para mostrar notificaciones, esta alojada en npm</span></div>
            </div>
        </div>        
    </div>
</div>
`;

export default {    
    template: template,
    components: {
        BarraTitulo,
        BarraMenu,
        Imagen
    },
    mounted() {
        setTituloPagina('Saúl CV - Contacto');
    }
}