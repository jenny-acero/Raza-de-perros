document.addEventListener("DOMContentLoaded", function() {


const razasDePerros = [
    {
        nombre: "CHIHUAHUA",
        imagenURL: "imagenes/descarga.jpg",
        descripcion:"Su origen es de mexico del estado de Chihuahua, un adulto suele medir entre 15 y 23 cm y pesar de 1,8 a 2,7 kg. Si no recibe una eduacación apropiada puede llegar a ser nervioso, ladrador y ruidoso." 
    },
    {
        nombre: "SHIH TZU",
        imagenURL: "imagenes/shih_tzu.jpg",
        descripcion:"Originario del Tíbet.Es un perro inteligente y muy cariñoso pero de caracter testarudo por esta razón debe tener pautas de obedencia temprana."
    },
    {
        nombre: "BEAGLE",
        imagenURL: "imagenes/beagle.jpg",
        descripcion:"Miden de 33 a 40 cm y pesan de 10 o 11 kg.Les encanta convivir con niños lo contrario que con los gatos.No es un perro guardian."
    },
    {
        nombre: "BORDER COLLIE",
        imagenURL: "imagenes/border_collie.jpg",
        descripcion:""
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
      cardBody.appendChild(description);

      
      card.appendChild(image);
      card.appendChild(cardBody);
      container.appendChild(card); 

    card.addEventListener('mouseenter', () => {
        description.style.display = 'block';
      
    });

    card.addEventListener('mouseleave', () => {
        description.style.display = 'none';

  });

});
}
generarTarjetas();
});
