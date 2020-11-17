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
                                <div class="w3-margin-bottom">
                                <p>Esta simulación muestra el esparcimiento de una enfermedad en un lote de plantas de maguey con probabilidad p de contangio.</p> 
                                <p>Este proyecto se utilzo en Cimat para dar respuesta a los productores de maguey de cual era la forma mas adecuada de tomar muestras para saber si un lote estaba contagiado.</p>
                                <p>Se inicia con un lote sano donde se cree que hay plantas enfermas. Se agrega donde se cree que estan las plantas enfremas (puntos verdes) y se inicia la simulación. El tiempo de contagio se representa con la transicion de color de azul a rojo.
                                Si esta en cerca de azul quiere decir que se contagio al inicio del tiempo y en rojo al finalizar el tiempo.</p>
                                <p>La conclusión es que dada la forma de espación que tiene la enfermedad en el lote, las muestras deben ser en forma de circulos. Si se encuentra alguna planta enferma se descatara TODO el lote.</p>
                                
                                </div>
                            </div>       
                        </div>
                    </div>

                    <div class="w3-col s12 w3-padding">
                        <div class="w3-card-4">
                            <video id="video" propiedades="" src="./video/paint.webm" controls="controls" class="w3-col" contenido-componente="">        
                            </video>
                            <div class="w3-container">
                                <h2>Simple paint</h2>
                                <div class="w3-margin-bottom">
                                <p>Ejemplo de uso del api canvas para dibujar, esto es para probar que hay alternativas de uso a 
                                svg o a los divs  al momento de seleccionar imágenes y moverlas.</p>
                                <p>Comparando con el dibujado SVG se tiene el dibujo en Canvas es superior y no afecta al performance del explorador.</p>
                                </div>
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