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
  const querySnapshot = await getDocs(collection(db, "movies"));
  const movieRow = document.querySelector(".movie-row");

  movieRow.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const movie = doc.data();

    movieRow.innerHTML += `
      <div class="movie-card">
        <img src="${movie.imageUrl}" width="150">
        <h4>${movie.title}</h4>
      </div>
    `;
  });
}

loadMovies();
