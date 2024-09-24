let iifeGlobal = (() => {
    let inyectarTodo = (url,id) => {
        id.setAttribute('src',url);
        id.style.display = 'block';
    };
    return {
        mostrarTodo: (url,id) => inyectarTodo(url,id),
    };
})();

class Multimedia {
    constructor(url){
        let _url = url;
        this.getUrl = () => _url;
    };
    get url(){
        return this.getUrl();
    };
    setInicio(){
        return 'este método es para realizar cambio en la url del video'
    };
};

class Reproductor extends Multimedia{
    constructor(url,id){
        super(url);
        let _id = id;

        this.getId = ()=> _id;
    };
    playMultimedia(){
        iifeGlobal.mostrarTodo(this.url,this.getId());
    };
    setInicio(tiempo){
        this.getId().setAttribute('src',`${this.url}?start=${tiempo}`)
    };
};

let music = document.getElementById("musica")
let movie = document.getElementById("peliculas")
let serie = document.getElementById("series")

let playMusica = new Reproductor("https://www.youtube.com/embed/-6bF2AwpBEc", music);
let playPelicula = new Reproductor("https://www.youtube.com/embed/bJCW8dkLKkw", movie);
let playSerie = new Reproductor("https://www.youtube.com/embed/ZDcWFBbChpU", serie);

playMusica.playMultimedia();
playPelicula.playMultimedia();
playSerie.playMultimedia();


playMusica.setInicio(100);

