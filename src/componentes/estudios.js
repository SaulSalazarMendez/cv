import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Estudios"></barra-titulo>    
    <barra-menu activo="estudios"></barra-menu>    
    <div class="w3-row parrafo w3-margin-top">

        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div><br></div>

                <div><span style="color: blue;">Licenciado en Informática en la UV</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> 2012 - 2016
                </div>                
                <div> 
                    El programa académico de la Licenciatura en Informática de la Universidad Veracruzana, tiene como misión la formación de profesionales preparados para servir en el desarrollo de soluciones a las necesidades de personas, empresas y de la colectividad que forma la sociedad mexicana, con respeto al medio ambiente, al marco legal y ético, mediante un uso adecuado de la Tecnología de la Información. Además, deberá lograr un lugar destacado en el mundo como creadores de software.            
                </div><br>

                <div><span style="color: blue;">Licenciado en Computación Matemática en la UG(truncada)</span><br></div>
                <div class="w3-text-green">
                    <i class="fa fa-calendar"></i> 2004 - 2008
                </div>                
                <div> 
                    El Programa pretende formar integralmente Licenciados en Computación Matemática, con conocimientos, habilidades, actitudes y valores que les permitan analizar problemas reales y abstraerlos para obtener modelos matemáticos, especificar algoritmos e implementarlos en sistemas eficientes y robustos.             
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
    }
}