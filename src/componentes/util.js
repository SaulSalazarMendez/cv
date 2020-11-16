/**
 * Setea el titulo de la página
 * @param {string} titulo 
 */
export function setTituloPagina(titulo) {
    let t = document.querySelector('#titulo-pagina');
    t.innerHTML = titulo;
}