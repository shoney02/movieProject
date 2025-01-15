import { fetchMovies, fetchMovieDetails } from './api.js';
import { displayMovies, openModal, closeModal } from './ui.js';

const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');

// 초기 데이터 가져오기
async function initialize() {
    const movies = await fetchMovies();
    displayMovies(movies, movieContainer, handleMovieClick);
}

// 영화 클릭 핸들러
async function handleMovieClick(movieId) {
    const movie = await fetchMovieDetails(movieId);
    if (movie) {
        openModal(modal, movie);
    }
}

// 검색창 이벤트
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

// 모달 닫기 이벤트
modalClose.addEventListener('click', () => closeModal(modal));
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
});

// 초기화 실행
initialize();
