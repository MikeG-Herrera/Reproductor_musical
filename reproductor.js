class Reproductor {
  constructor(listaCanciones) {
    this.listaCanciones = listaCanciones;
    this.enReproduccion = false;
    this.ahoraSuena = 0;
  }

  playPause() {
    this.enReproduccion = !this.enReproduccion;
    let mensaje = this.enReproduccion ? `Ahora suena: ${this.listaCanciones[this.ahoraSuena].nombre}` : "Haz pausado la reproducción";
    console.log(mensaje);
  }

  shuffle() {
    let indiceAleatorio = Math.floor(Math.random() * this.listaCanciones.length);
    this.ahoraSuena = indiceAleatorio;
    this.showSongInSite();
  }

  next() {
    if (this.ahoraSuena < this.listaCanciones.length - 1) {
      this.ahoraSuena++;
      this.showSongInSite();
    }
  }

  prev() {
    if (this.ahoraSuena > 0) {
      this.ahoraSuena--;
      this.showSongInSite();
    }
  }

  stop() {
    console.log("Haz detenido la reproducción");
    this.ahoraSuena = -1;
    this.showSongInSite();
    document.getElementById("portada-album").src = "https://images.vexels.com/media/users/3/163240/isolated/preview/2f5a168ac9a6765dc5edfeb0b375d2ef-musica-icono-de-nota-musical.png";
  }

  play(songIndex) {
    this.ahoraSuena = songIndex;
    this.showSongInSite();
  }

  songsList() {
    let listaHTML = "";
    this.listaCanciones.forEach((cancion, index) => {
      listaHTML += `<li><a href="#" onclick="miReproductor.play(${index})">${cancion.nombre}</a></li>`;
    });
    document.getElementById("lista-de-canciones").innerHTML = listaHTML;
  }

  showSongInSite() {
    if (this.ahoraSuena !== -1) {
      const cancionActual = this.listaCanciones[this.ahoraSuena];

      document.getElementById("titulo-cancion").textContent = cancionActual.nombre;
      document.getElementById("artista-cancion").textContent = cancionActual.artista;
      document.getElementById("album-cancion").textContent = cancionActual.album;
      document.getElementById("duracion-cancion").textContent = `Duración: ${cancionActual.duracion}`;
      document.getElementById("portada-album").src = cancionActual.imagen;
    } else {
      document.getElementById("titulo-cancion").textContent = "No hay canción seleccionada";
      document.getElementById("artista-cancion").textContent = "";
      document.getElementById("album-cancion").textContent = "";
      document.getElementById("duracion-cancion").textContent = "";
      document.getElementById("portada-album").src = "";
    }
  }
}

let listaCanciones = [
  {
    nombre: "Si una vez - En Vivo Desde Monterrey",
    album: "En Vivo Desde Monterrey",
    artista: "La Casetera",
    duracion: "3:46",
    imagen: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/196587622022.jpg?scale=700&qlty=80"
},

{
    nombre: "Happy Now?",
    album: "Optimist",
    artista: "FINNEAS",
    duracion: "2:52",
    imagen: "https://m.media-amazon.com/images/I/815mEfSGA8L._AC_SX385_.jpg"
},

{
    nombre: "Rosa Pastel",
    album: "Dulce Beat",
    artista: "Belanova",
    duracion: "3:05",
    imagen: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/47/33/9a/47339ae3-67ad-96c1-7410-311c89343eb0/06UMGIM53035.rgb.jpg/1200x1200bf-60.jpg"
},

{
    nombre: "idontwannabeyouanymore",
    album: "dont smile at me",
    artista: "Billie Eillish",
    duracion: "3:23",
    imagen: "https://m.media-amazon.com/images/I/61HKPMl7w+L._UF1000,1000_QL80_.jpg"
},

{
    nombre: "My Immortal",
    album: "Fallen",
    artista: "Evanescence",
    duracion: "4:22",
    imagen: "https://m.media-amazon.com/images/I/7163tf7rbLL._UF1000,1000_QL80_.jpg"
},

{
    nombre: "Im Not Okay (I Promise)",
    album: "Three Cheers for Sweet Revenge",
    artista: "My Chemical Romance",
    duracion: "3:06",
    imagen: "https://m.media-amazon.com/images/I/81hYuA+Gh6L._UF1000,1000_QL80_.jpg"
},

{
    nombre: "Take On Me - MTV Unplugged",
    album: "MTV Unplugged - Summer Solstice",
    artista: "a-ha",
    duracion: "4:13",
    imagen: "https://a-ha.com/uploads/discography/mtv-unplugged-summer-solstice-2017/aha-cover-900x900px.jpg"
},

{
    nombre: "Ptazeta: Bzrp Music Sessions, Vol. 45",
    album: "Ptazeta: Bzrp Music Sessions, Vol. 45",
    artista: "Bizarrap, Ptrazeta",
    duracion: "2:41",
    imagen: "https://i.scdn.co/image/ab67616d0000b273f6f7e0ce04a4f66622db1ffe"
},

{
    nombre: "Lola",
    album: "Lola",
    artista: "Pauil Thin",
    duracion: "4:04",
    imagen: "https://images.genius.com/b5967ec28d2fe9b95920675506709c87.600x600x1.jpg"
},

{
    nombre: "We Are Young (ft. Janelle Monáe)",
    album: "Some Nights",
    artista: "fun., Janelle Monáe",
    duracion: "4:10",
    imagen: "https://www.hoyesarte.com/constelac10n/files/2020/11/fun.-We-Are-Young.jpg"
},

{
    nombre: "Selección Natural",
    album: "Sinápsis",
    artista: "Chica Sobresalto",
    duracion: "5:32",
    imagen: "https://www.lahiguera.net/musicalia/artistas/chica_sobresalto/disco/11146/chica_sobresalto_sinapsis-portada.jpg"
},

{
    nombre: "BABY HELLO",
    album: "PLAYA SATURNO",
    artista: "Rauw Alejandro, Bizarrap",
    duracion: "3:42",
    imagen: "https://ca-times.brightspotcdn.com/dims4/default/f689a43/2147483647/strip/true/crop/3000x3000+0+0/resize/1200x1200!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F73%2Fca%2F62017debfe3e8db9d86eb5e7e85d%2F37d1776fcd134cee9afe1102ea291f74"
},

{
    nombre: "Fado",
    album: "Mind The Moon",
    artista: "Milky Chance",
    duracion: "4:10",
    imagen: "https://i.scdn.co/image/ab67616d0000b2734f48439a214b645bb9e62ff2"
},

{
    nombre: "Judas",
    album: "Born This Way (International Special Edition Version)",
    artista: "Lady Gaga",
    duracion: "4:09",
    imagen: "https://m.media-amazon.com/images/I/81A3LZUImhL._UF1000,1000_QL80_.jpg"
},

{
    nombre: "Tu Falta De Querer",
    album: "Mon Laferte (Vol. 1)",
    artista: "Mon Laferte",
    duracion: "4:38",
    imagen: "https://upload.wikimedia.org/wikipedia/en/a/a4/Mon_Laferte_Vol.1.jpg"
},

];

let miReproductor = new Reproductor(listaCanciones);
miReproductor.songsList();
