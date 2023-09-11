export function cardPeliculas(
  url,
  texto2,
  texto3,
  texto4,
  texto5,
  texto6,
  texto7,
  texto8
) {
  const card = document.createElement("div");
  card.className = "carta";

  //elementos de la carta
  const contain_i = document.createElement("div");
  contain_i.className = "contain-img";

  //creamos un parrafo para la carta
  const titulo = document.createElement("h3");
  titulo.className = "text-card";
  titulo.innerHTML = texto2;

  const genero = document.createElement("p");
  genero.className = "text-card";
  genero.innerHTML = texto3;

  const añoPublicación = document.createElement("p");
  añoPublicación.className = "text-card";
  añoPublicación.innerHTML = texto4; // Asegúrate de que texto4 sea el año de publicación

  const descripción = document.createElement("p");
  descripción.className = "text-card";
  descripción.innerHTML = texto5;

  const director = document.createElement("p");
  director.className = "text-card";
  director.innerHTML = texto6;

  const canVistas = document.createElement("p");
  canVistas.className = "text-card";
  canVistas.innerHTML = texto7;

  const duración = document.createElement("p");
  duración.className = "text-card";
  duración.innerHTML = texto8;

  //agregar elemento al contain-imagen

  const img_movies = document.createElement("img");
  img_movies.className = "img-movies";
  img_movies.src = url;

  //agregar una imagen al contenedor de imagen
  contain_i.appendChild(img_movies);

  //agregar elementos al contenedor carta
  card.appendChild(contain_i);
  card.appendChild(titulo);
  card.appendChild(genero);
  card.appendChild(añoPublicación);
  card.appendChild(descripción);
  card.appendChild(director);
  card.appendChild(canVistas);
  card.appendChild(duración);


  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modal-content");
  const closeButton = document.querySelector(".close");
  const reproducirButton = document.getElementById("reproducir");
    

    card.addEventListener("click", () => {
      console.log("p")
      // Obtén los datos de la tarjeta haciendo referencia a los elementos correspondientes
      const titulo = card.querySelector(".text-card:nth-child(2)").textContent;
      const genero = card.querySelector(".text-card:nth-child(3)").textContent;
      const añoPublicación = card.querySelector(
        ".text-card:nth-child(4)"
      ).textContent;
      const descripción = card.querySelector(
        ".text-card:nth-child(5)"
      ).textContent;
      const director = card.querySelector(
        ".text-card:nth-child(6)"
      ).textContent;
      const canVistas = card.querySelector(
        ".text-card:nth-child(7)"
      ).textContent;
      const duración = card.querySelector(
        ".text-card:nth-child(8)"
      ).textContent;

      // Construye el contenido del modal con los datos de la tarjeta
     modalContent.innerHTML =  "";
      const modalHTML = `
      <h3>${titulo}</h3>
      <p>${genero}</p>
      <p>Año de Publicación: ${añoPublicación}</p>
      <p>${descripción}</p>
      <p>Director: ${director}</p>
      <p>Cantidad de Vistas: ${canVistas}</p>
      <p>Duración: ${duración}</p>`;

      // Asigna el contenido al modal
      modalContent.innerHTML = modalHTML;

      // Muestra el modal
      modal.style.display = "block";
    });

  // Agrega un evento de clic al botón de cierre para ocultar el modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Agrega un evento de clic al fondo del modal para ocultar el modal cuando se hace clic fuera de él
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  return card;
}

export function cardSeries(
  url,
  texto2,
  texto3,
  texto4,
  texto5,
  texto6,
  texto7,
  texto8
) {
  const card2 = document.createElement("div");
  card2.className = "carta";

  //elementos de la carta
  const contain_i = document.createElement("div");
  contain_i.className = "contain-img";

  //creamos un parrafo para la carta
  const titulo = document.createElement("h3");
  titulo.className = "text-card";
  titulo.innerHTML = texto2;

  const genero = document.createElement("p");
  genero.className = "text-card";
  genero.innerHTML = texto3;

  const descripción = document.createElement("p");
  descripción.className = "text-card";
  descripción.innerHTML = texto4; // Asegúrate de que texto4 sea el año de publicación

  const can_Episodios = document.createElement("p");
  can_Episodios.className = "text-card";
  can_Episodios.innerHTML = texto5;

  const duración_Episodio = document.createElement("p");
  duración_Episodio.className = "text-card";
  duración_Episodio.innerHTML = texto6;

  const añoPublicación = document.createElement("p");
  añoPublicación.className = "text-card";
  añoPublicación.innerHTML = texto7;

  const canVistas = document.createElement("p");
  canVistas.className = "text-card";
  canVistas.innerHTML = texto8;

  //agregar elemento al contain-imagen

  const img_movies = document.createElement("img");
  img_movies.className = "img-movies";
  img_movies.src = url;

  //agregar una imagen al contenedor de imagen
  contain_i.appendChild(img_movies);

  //agregar elementos al contenedor carta
  card2.appendChild(contain_i);
  card2.appendChild(titulo);
  card2.appendChild(genero);
  card2.appendChild(descripción);
  card2.appendChild(can_Episodios);
  card2.appendChild(duración_Episodio);
  card2.appendChild(añoPublicación);
  card2.appendChild(canVistas);

  // Agrega un evento de clic a las tarjetas
  const cards2 = document.querySelectorAll(".carta");
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modal-content");
  const closeButton = document.querySelector(".close");
  const reproducirButton = document.getElementById("reproducir");

  // ...

  // Agrega elementos al contenedor carta
  card2.appendChild(contain_i);
  card2.appendChild(titulo);
  card2.appendChild(genero);
  card2.appendChild(descripción);
  card2.appendChild(can_Episodios);
  card2.appendChild(duración_Episodio);
  card2.appendChild(añoPublicación);
  card2.appendChild(canVistas);

  // ...

 
    card2.addEventListener("click", () => {
      console.log("s")
      // Obtén los datos de la tarjeta haciendo referencia a los elementos correspondientes
      const titulo = card2.querySelector(".text-card:nth-child(2)").textContent;
      const genero = card2.querySelector(".text-card:nth-child(3)").textContent;
      const descripción = card2.querySelector(
        ".text-card:nth-child(4)"
      ).textContent;
      const can_Episodios = card2.querySelector(
        ".text-card:nth-child(5)"
      ).textContent;
      const duracion_Episodio = card2.querySelector(
        ".text-card:nth-child(6)"
      ).textContent;
      const añoPublicación = card2.querySelector(
        ".text-card:nth-child(7)"
      ).textContent;
      const canVistas = card2.querySelector(
        ".text-card:nth-child(8)"
      ).textContent;

      // Construye el contenido del modal con los datos de la tarjeta
      modalContent.innerHTML =  "";
      const modalHTML = `
    <h3>${titulo}</h3>
    <p>Género: ${genero}</p>
    <p>Descripción: ${descripción}</p>
    <p>Cantidad de Episodios: ${can_Episodios}</p>
    <p>Duración del Episodio: ${duracion_Episodio}</p>
    <p>Año de Publicación: ${añoPublicación}</p>
    <p>Cantidad de Vistas: ${canVistas}</p>`;

      // Asigna el contenido al modal
      modalContent.innerHTML = modalHTML;

      // Muestra el modal
      modal.style.display = "block";
    });

  // ...

  // Agrega un evento de clic al botón de cierre para ocultar el modal
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Agrega un evento de clic al fondo del modal para ocultar el modal cuando se hace clic fuera de él
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  return card2;
}
