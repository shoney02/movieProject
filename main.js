import { fetchMovies, fetchMovieDetails } from './api.js';
import { displayMovies, openModal, closeModal } from './ui.js';
import { getBookmarks } from './bookmark.js';

const movieContainer = document.getElementById('movie-container');
const searchInput = document.getElementById('search-input');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const bookmarkButton = document.getElementById('bookmark-button');

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

// 검색 함수
function filterMovies(searchTerm, container) {
    const movieCards = container.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        const title = card.querySelector('h5').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
}

// 검색창 이벤트
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    filterMovies(searchTerm, movieContainer);
});

// 북마크 보기 버튼 클릭 이벤트
bookmarkButton.addEventListener('click', () => {
    const bookmarks = getBookmarks();
    displayMovies(bookmarks, movieContainer, handleMovieClick);

    // 기존 검색값으로 필터 적용
    const searchTerm = searchInput.value.toLowerCase();
    filterMovies(searchTerm, movieContainer);
});

// 모달 닫기 이벤트
modalClose.addEventListener('click', () => closeModal(modal));
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal(modal);
});

// 초기화 실행
initialize();
