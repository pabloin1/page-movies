import { cardPeliculas, cardSeries } from "./cards.js";

renderCardPeliculas();
renderCardseries();


async function renderCardseries(){
  const contain2 = document.getElementById("contain-cards2");
  try {
    // Hacer una solicitud a una API ficticia
    const response2 = await fetch("http://localhost:9000/Series/Recientes");
    const data2 = await response2.json();

    // Iterar sobre los datos y crear tarjetas para cada elemento
    data2.forEach((item2) => {
      const card2 = cardSeries(
        item2.urlImg,
        item2.Nombre_Serie,
        item2.Genero,
        item2.Descripción,
        item2.Can_Episodios,
        item2.Duración_Episodio,
        item2.Año_Publicación,
        item2.Can_Vistas
      );
      contain2.appendChild(card2);
    });
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
}

async function renderCardPeliculas() {
  const contain = document.getElementById("contain-cards");

  try {
    // Hacer una solicitud a una API ficticia
    const response = await fetch("http://localhost:9000/Peliculas/Recientes");
    const data = await response.json();

    // Iterar sobre los datos y crear tarjetas para cada elemento
    data.forEach((item) => {
      const card = cardPeliculas(
        item.urlImg,
        item.Nombre_Pelicula,
        item.Genero,
        item.Año_Publicación,
        item.Descripción,
        item.Director,
        item.Can_Vistas,
        item.Duración,
        item.urlVideo
      );

      contain.appendChild(card);
    });
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
  }
}


