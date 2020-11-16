const template = /*html*/`
<div>
    <div class="w3-bar w3-white w3-padding-left-64 w3-hide-small">           
        <router-link :class="getClase('skills')" style="margin-left: 10%;" to="/skills">Skills</router-link>
        <router-link :class="getClase('experiencia')" to="/experiencia">Experiencia</router-link>
        <router-link :class="getClase('estudios')" to="/estudios">Estudios</router-link>
        <router-link :class="getClase('resumen')" to="/resumen">Resumen</router-link>
        <router-link :class="getClase('contacto')" to="/contacto">Contacto</router-link>
        <router-link :class="getClase('portafolio')" to="/portafolio">Portafolio</router-link>
    </div>

    <div class="w3-bar-block w3-white w3-padding-left-64 w3-hide-large w3-hide-medium">       
        <router-link :class="getClase('skills')" to="/skills">Skills</router-link>
        <router-link :class="getClase('experiencia')" to="/experiencia">Experiencia</router-link>
        <router-link :class="getClase('estudios')" to="/estudios">Estudios</router-link>
        <router-link :class="getClase('resumen')" to="/resumen">Resumen</router-link>
        <router-link :class="getClase('contacto')" to="/contacto">Contacto</router-link>
        <router-link :class="getClase('portafolio')" to="/portafolio">Portafolio</router-link>
    </div>
</div>
`;

export default {
    props: ['activo'],
    template: template,
    methods: {
        getClase(nombre) {
            if (nombre == this.activo) {
                return 'w3-bar-item w3-button w3-border-bottom w3-bottombar w3-text-blue w3-border-blue';
            }
            return 'w3-bar-item w3-button';
        }
    }
}