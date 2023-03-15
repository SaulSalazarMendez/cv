import BarraTitulo from './barra-titulo.js';
import BarraMenu from './barra-menus.js';
import { setTituloPagina } from './util.js';

const template = /*html*/`
<div>
    <barra-titulo titulo="Skills"></barra-titulo>    
    <barra-menu activo="skills"></barra-menu>
    <div class="w3-row parrafo w3-margin-top">

        <div class="w3-col espacio s2 m2 l2" propiedades="" espacio-componente=""></div>
        <div class="w3-col s8 m8 l8" propiedades="" contenido-componente="">
            <div propiedades="">
                <div class="w3-small"><span style="color: rgb(96, 125, 139);">Mas de 10 000 registros</span></div>
                <div><br></div>

                <div><span style="color: blue;">Angular</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.</span></div>                <div><span><br></span></div>

                <div><span style="color: blue;">Vue</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class=""> Vue es una librería de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. Fue creado por Evan You. </span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">React</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class=""> React es una librería de JavaScript creada por Meta para la construcción de interfaces de usuario. </span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Vanilla js</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>                    
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div>
                    <span class="">Vanilla JS es un framework rápido, ligero y multiplataforma para construir aplicaciones JavaScript poderozas e increibles. Básicamente es Javascript puro.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Css3</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">CSS es un lenguaje de diseño gráfico que permite definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado. Es muy usado para establecer el diseño visual de los documentos web e interfaces de usuario escritas en HTML.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Npm</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">Npm es un gestor de paquetes, el cual hará más fáciles nuestras vidas al momento de trabajar con Node, ya que gracias a él podremos tener cualquier librería disponible con solo una línea de código, npm nos ayudará a administrar nuestros módulos, distribuir paquetes y agregar dependencias de una manera sencilla.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Pruebas unitarias</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-half-o"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">En programación, una prueba unitaria es una forma de comprobar el correcto funcionamiento de una unidad de código. Por ejemplo en diseño estructurado o en diseño funcional una función o un procedimiento, en diseño orientado a objetos una clase. Esto sirve para asegurar que cada unidad funcione correctamente y eficientemente por separado.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Sql</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">SQL es un lenguaje de dominio específico utilizado en programación, diseñado para administrar y recuperar información de sistemas de gestión de bases de datos relacionales. Los sistemas de gestión de base de datos con soporte SQL más utilizados son: DB2, MariaDB, SQL Server, MySQL, Oracle y PostgreSQL.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Sqlite</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">SQLite es un sistema de gestión de base de datos relacional,  contenida en una biblioteca muy pequeña, escrita en C. SQLite no es un proceso independiente con el que el programa principal se comunica. En lugar de eso, la biblioteca SQLite se enlaza con el programa pasando a ser parte integral del mismo.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Windows</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>                
                <div><span class=""> Windows es un sistema operativo, es decir, un conjunto de programas que posibilita la administración de los recursos de una computadora. </span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">GNU/Linux</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">GNU/Linux es la denominación técnica y generalizada que reciben una serie de sistemas operativos de tipo Unix, que también suelen ser de código abierto, multiplataforma, multiusuario y multitarea. Estos sistemas operativos están formados mediante la combinación de varios proyectos, entre los cuales destaca el entorno GNU y el núcleo de sistema operativo conocido como Linux.</span></div>
                <div><span><br></span></div>

                <div><span style="color: blue;">Mac OS</span><br></div>
                <div class="w3-small w3-text-yellow">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star-o"></i>
                    <i class="fa fa-star-o"></i>
                </div>                
                <div><span class="">Mac OS es el nombre del sistema operativo creado por Apple para su línea de computadoras Macintosh. Es conocido por haber sido uno de los primeros sistemas dirigidos al gran público en contar con una interfaz gráfica compuesta por la interacción del mouse con ventanas, iconos y menús.</span></div>
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
        setTituloPagina('Saúl CV - Skills');
    }
}