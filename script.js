import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKFeb8wHcBE5-5Y0u7EAkC5LhJHMtVvwM",
  authDomain: "teleplay-9d847.firebaseapp.com",
  projectId: "teleplay-9d847",
  storageBucket: "teleplay-9d847.firebasestorage.app",
  messagingSenderId: "573062216058",
  appId: "1:573062216058:web:478585d42fc91a224fbec3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMovies() {
  const movieRow = document.querySelector(".movie-row");

  // Limpa os cartões antigos
  movieRow.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "movies"));

  querySnapshot.forEach((doc) => {
    const movie = doc.data();

    // Cria o cartão dinamicamente
    const card = document.createElement("div");
    card.className = "movie-card";

    card.innerHTML = `
      <img src="${movie.imageUrl}" alt="${movie.title}" width="150">
      <h4>${movie.title}</h4>
    `;

    movieRow.appendChild(card);
  });
}

loadMovies();
