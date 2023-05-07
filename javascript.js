document.addEventListener("DOMContentLoaded", function() {


const razasDePerros = [
    {
      nombre: "CHIHUAHUA",
      imagenURL: "imagenes/descarga.jpg"
    },
    {
        nombre: "SHIH TZU",
        imagenURL: "imagenes/shih_tzu.jpg" 
    },
    {
        nombre: "BEAGLE",
        imagenURL: "imagenes/beagle.jpg"  
    },
    {
        nombre: "BORDER COLLIE",
        imagenURL: "imagenes/border_collie.jpg"  
    },
    {
        nombre: "PINSCHER MINIATURA",
        imagenURL: "imagenes/pinscher_miniatura.jpg"  
    },
    {
        nombre: "BICHON MALTES",
        imagenURL: "imagenes/bichon_maltes.jpg"  
    },
    {
        nombre: "COCKER SPANIEL INGLES",
        imagenURL: "imagenes/cocker_spaniel_ingles.jpg"  
    },
    {
        nombre: "PERRO PERUANO",
        imagenURL: "imagenes/perro_peruano.jpg"  
    },
    {
        nombre: "FRENCH PODDLE",
        imagenURL: "imagenes/french_poddle.jpg"  
    },
    {
        nombre: "LABRADOR",
        imagenURL: "imagenes/labrador.jpg"  
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
      
      card.appendChild(image);
      card.appendChild(cardBody);
      container.appendChild(card); 
      
    });
  }
  generarTarjetas();

});