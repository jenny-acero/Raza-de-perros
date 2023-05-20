document.addEventListener("DOMContentLoaded", function() {


const razasDePerros = [
    {
        nombre: "CHIHUAHUA",
        imagenURL: "imagenes/descarga.jpg",
        descripcion:"Su origen es de    mexico del estado de Chihuahua, un adulto suele medir entre 15 y 23 cm y pesar de 1,8 a 2,7 kg. Si no recibe una eduacación apropiada puede llegar a ser nervioso, ladrador y ruidoso.",
        url: "chihuahua.html"
    },
    {
        nombre: "SHIH TZU",
        imagenURL: "imagenes/shih_tzu.jpg",
        descripcion:"Originario del Tíbet. Es un perro inteligente y muy cariñoso pero de caracter testarudo por esta razón debe tener pautas de obedencia temprana.",
        url: "shih-tzu.html"
    },
    {
        nombre: "BEAGLE",
        imagenURL: "imagenes/beagle.jpg",
        descripcion:"Miden de 33 a 40 cm y pesan de 10 o 11 kg. Les encanta convivir con niños lo contrario que con los gatos.No es un perro guardian.",
        url: "beagle.html"
    },
    {
        nombre: "BORDER COLLIE",
        imagenURL: "imagenes/border_collie.jpg",
        descripcion:"Los border collie siempre están listos para trabajar y se muestran atentos, activos y vigilantes.Los machos adultos miden unos 53 cm y la altura de las hembras es algo inferior. Suelen pesar entre 14 y 20 kg.",
        url: "border-collie.html"
    },
    {
        nombre: "PINSCHER MINIATURA",
        imagenURL: "imagenes/pinscher_miniatura.jpg",
        descripcion:"El Pinscher miniatura es un perro elegante. Los adultos miden entre 25 y 30 cm y pesan de 4 a 6 kilos.Suele ser un buen perro guardián para la casa.", 
        url: "pinscher-miniatura.html"
    },
    {
        nombre: "BICHON MALTES",
        imagenURL: "imagenes/bichon_maltes.jpg",
        descripcion:"Los machos y las hembras adultos miden entre 23 y 28 cm y pesan de 3 a 6 kg. les encanta la vida familiar.", 
        url: "bichon-maltes.html"
    },
    {
        nombre: "COCKER SPANIEL INGLES",
        imagenURL: "imagenes/cocker_spaniel_ingles.jpg",
        descripcion:"Su origen es Español. Los machos adultos miden entre 39 y 41 cm y las hembras, entre 38 y 39 cm. Pesan entre 13 y 14,5 kg.",  
        url: "cocker-spaniel.html"
    },
    {
        nombre: "PERRO PERUANO",
        imagenURL: "imagenes/perro_peruano.jpg",
        descripcion:"Es una raza de perro sin pelo originaria del Perú. Genéticamente tiene un síndrome de hipoplasia ectodérmica, lo cual significa que posee piel cálida que al entrar en contacto con la piel humana la puede calentar",  
        url: "perro-peruano.html"
    },
    {
        nombre: "FRENCH PODDLE",
        imagenURL: "imagenes/french_poddle.jpg",
        descripcion:"Los ejemplares grandes adultos miden un mínimo de 38 cm y pesan entre 20 y 32 kilos. Es un perro jovial y cariñoso que será un compañero muy gratificante. ", 
        url: "french-poddle.html"
    },
    {
        nombre: "LABRADOR",
        imagenURL: "imagenes/labrador.jpg",
        descripcion:"Se origino en las costas de Terranova en el siglo XVII. Los machos adultos miden entre 56 y 57 cm y pesan unos 30 kg. Las hembras miden entre 55 y 56 cm y pesan 28 kg.",
        url: "labrador.html"
    },
  ];

  function generarTarjetas() {
    const container = document.getElementById("tarjetas");
    
    razasDePerros.forEach(raza => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-6");
      
      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = raza.imagenURL;
      image.alt = raza.nombre;
      
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      
      const title = document.createElement("h3");
      title.classList.add("card-title");
      title.textContent = raza.nombre;

      const description = document.createElement("p");
      description.classList.add("card-text");
      description.textContent = raza.descripcion;
      
      cardBody.appendChild(title);
      cardBody.appendChild(description);

      
      card.appendChild(image);
      card.appendChild(cardBody);
      container.appendChild(card); 

        const url = document.createElement("a");
        url.href = raza.url;
        url.textContent ="Ver más...";
        cardBody.appendChild(url);

});
}
generarTarjetas();
});
