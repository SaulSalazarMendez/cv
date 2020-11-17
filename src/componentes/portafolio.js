import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
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

                <div class="w3-row-padding">
                    <div class="w3-col s12 w3-padding">
                        <div class="w3-card-4">
                            <img src="./img/ide.png" style="width: 100%;">
                            <div class="w3-container">
                                <h2>W3Studio - Escritorio</h2>
                                <div class="w3-margin-bottom"><p>Iterface web que simula un escriotrio virtual, el proposito de esta interface es dar una opción más al usuario para su aplicación web.</p></div>
                            </div>                    
                        </div>
                    </div>
                    <div class="w3-col s12 w3-padding">
                        <div class="w3-card-4">
                            <video id="video" propiedades="" src="./video/ejemplo-edicion.webm" controls="controls" class="w3-col" contenido-componente="">        
                            </video>
                            <div class="w3-container">
                                <h2>W3Studio - IDE</h2>
                                <div class="w3-margin-bottom">Controla el código HTML, CSS y javascript directamente en el ide de W3Studio. Edita los estilos visuales de manera sencilla y exporta el contenido a web componente. Utiliza la interfaz de escritorio web.</div>
                            </div>                    
                        </div>
                    </div>

                    <div class="w3-col s12 w3-padding">
                        <div class="w3-card-4">
                            <video id="video" propiedades="" src="./video/simulacion.webm" controls="controls" class="w3-col" contenido-componente="">        
                            </video>
                            <div class="w3-container">
                                <h2>Simulación</h2>
                                <div class="w3-margin-bottom">Esta simulación muestra el esparcimiento de una enfermedad en un lote de plantas con probabilidad p de contangio</div>
                            </div>       
                        </div>
                    </div>

                    <div class="w3-col s12 w3-padding">
                        <div class="w3-card-4">
                            <video id="video" propiedades="" src="./video/paint.webm" controls="controls" class="w3-col" contenido-componente="">        
                            </video>
                            <div class="w3-container">
                                <h2>Simple paint</h2>
                                <div class="w3-margin-bottom">Ejemplo de uso del api canvas para dibujar, esto es para probar que hay alternativas de uso a svg o a los divs  al momento de seleccionar imágenes y moverlas.</div>
                            </div>       
                        </div>
                    </div>
    
                </div>

                
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
        setTituloPagina('Saúl CV - Portafolio');
    }
}