const template = /*html*/`
<div class="w3-bar w3-light-grey">
    <router-link class="w3-bar-item" to="/">
        <img src="./solosaul.png" style="width: 4em;">
    </router-link>
    <div class="w3-bar-item" id="span-buscar" style="margin-left: 10%;">            
        <input id="buscar" :value="titulo">
        <i class="fa fa-search"></i>
    </div>
    <div class="w3-dropdown-hover w3-right">
        <button class="w3-button  w3-light-grey"><i class="fa fa-th"></i></button>
        <div class="w3-dropdown-content w3-card-4 w3-round" style="right:10px;">
            <div class="w3-center w3-padding">
                <a href="https://saulsalazarmendez.github.io/ejemplos/ide">
                    <i class="fa fa-html5 w3-text-blue w3-xxlarge"></i>
                    <h5>Ide</h5>
                </a>
            </div>
        </div>
    </div>        
    <router-link class="w3-bar-item w3-right w3-button" to="/resumen">Resumen</router-link>
</div>
`;

export default {
    props: ['titulo'],
    template: template
}