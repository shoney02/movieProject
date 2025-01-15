// const movieContainer = document.getElementById('movie-container');
// const searchInput = document.getElementById('search-input');

// const modal = document.getElementById('modal');
// const modalClose = document.querySelector('.modal-close');
// const modalImage = document.getElementById('modal-image');
// const modalTitle = document.getElementById('modal-title');
// const modalBody = document.getElementById('modal-body');
// const modalDate = document.getElementById('modal-date');
// const modalVote = document.getElementById('modal-vote');

// const bookmarkButton = document.getElementById('bookmark-button');


// const API_KEY = 'efe7f036092ed63091eb3a713c14d190';
// const API_URL = `https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1&api_key=${API_KEY}`;

// // TMDB API 영화 데이터 가져오기
// async function fetchMovies() {
//     try {
//         const res = await fetch(API_URL);
//         const data = await res.json();
//         displayMovies(data.results);
//     } catch (err) {
//         console.error("영화 데이터를 가져오는데 오류 발생: ", err);
//     }
// }

// // 영화 상세 정보 가져오기
// async function fetchMovieDetails(movieId) {
//     try {
//         const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR&api_key=${API_KEY}`);
//         return await res.json();
//     } catch (err) {
//         console.error("영화 상세 정보를 가져오는데 오류 발생: ", err);
//         return null;
//     }
// }

// // 영화 데이터 화면 출력
// function displayMovies(movies) {
//     movieContainer.innerHTML = ''; // 기존 영화 리스트 초기화
//     movies.forEach(movie => {
//         const movieCard = document.createElement('div'); // 새로운 div 생성
//         movieCard.classList.add('movie-card'); // movie-card 클래스 추가
//         movieCard.innerHTML = `
//         <div class="card">
//             <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
//             <div class="card-body">
//                 <h5 class="card-title">${movie.title}</h5>
//                 <p class="card-text">평점: ${movie.vote_average}</p>
//             </div>
//         </div>`;

//         movieCard.addEventListener('click', () => openModal(movie.id));
//         movieContainer.appendChild(movieCard);
//     });
// }

// // 검색창 입력 이벤트 리스너
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase();
//     const movieCards = document.querySelectorAll('.movie-card');

//     movieCards.forEach(card => {
//         const title = card.querySelector('h5').textContent.toLowerCase();
//         card.style.display = title.includes(searchTerm) ? 'block' : 'none';
//     });
// })

// // 초기 데이터 가져오기
// fetchMovies();

// // 모달 열기
// async function openModal(movieID) {
//     const movie = await fetchMovieDetails(movieID);
//     if (movie) {
//         modal.style.display = 'flex';
//         modalImage.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
//         modalTitle.textContent = movie.title;
//         modalBody.textContent = movie.overview || "내용 없음";
//         modalDate.textContent = `개봉일: ${movie.release_date}`;
//         modalVote.textContent = `평점: ${movie.vote_average}`;
//     }
// }

// // 모달 닫기
// modalClose.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// window.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// });

