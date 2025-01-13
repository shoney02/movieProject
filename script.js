const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const bookmarkButton = document.getElementById('bookmark-button');

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmU3ZjAzNjA5MmVkNjMwOTFlYjNhNzEzYzE0ZDE5MCIsIm5iZiI6MTczNjMxMzgzOS4zNTYsInN1YiI6IjY3N2UwYmVmMjAzN2ZmMDRjOTRlNTlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pNxV2dUSWqGWsjcftHfvDtCYm65NSyuLRV8zzlPnEH0'
    }
};

const API_KEY = 'efe7f036092ed63091eb3a713c14d190';
const API_URL = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`;

// TMDB API 영화 데이터 가져오기
async function fetchMovies() {
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        displayMovies(data.results);
    } catch (err) {
        console.error("영화 데이터를 가져오는데 오류 발생: ", err);
    }
}

// 영화 데이터 화면 출력
function displayMovies(movies){
    movieContainer.innerHTML = ''; // 기존 영화 리스트 초기화
    movies.forEach(movie => {
        const movieCard = document.createElement('div'); // 새로운 div 생성
        movieCard.classList.add('movie-card'); // movie-card 클래스 추가
        movieCard.innerHTML = `
        <div id="${id}" class="card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">평점: ${movie.vote_average}</p>
            </div>
        </div>`;
        movieContainer.appendChild(movieCard);
    })
}

// 검색창 입력 이벤트 리스너
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
})

// 초기 데이터 가져오기
fetchMovies();