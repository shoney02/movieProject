import { isBookmarked, addBookmark, removeBookmark } from "./bookmark.js";

// 영화 데이터 화면 출력
export function displayMovies(movies, container, onClickMovie) {
    container.innerHTML = ''; // 기존 영화 리스트 초기화
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">평점: ${movie.vote_average}</p>
            </div>
        </div>`;

        movieCard.addEventListener('click', () => onClickMovie(movie.id));
        container.appendChild(movieCard);
    });
}

// 모달 열기
export function openModal(modal, movie) {
    modal.style.display = 'flex';
    modal.querySelector('#modal-image').src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    modal.querySelector('#modal-title').textContent = movie.title;
    modal.querySelector('#modal-body').textContent = movie.overview || "내용 없음";
    modal.querySelector('#modal-date').textContent = `개봉일: ${movie.release_date}`;
    modal.querySelector('#modal-vote').textContent = `평점: ${movie.vote_average}`;

    const bookmarkButton = modal.querySelector('#modal-bookmark');
    if (isBookmarked(movie.id)) {
        bookmarkButton.textContent = '북마크 제거';
    } else {
        bookmarkButton.textContent = '북마크 추가';
    }

    // 북마크 추가/제거 이벤트
    bookmarkButton.onclick = () => {
        if (isBookmarked(movie.id)) {
            removeBookmark(movie.id);
            bookmarkButton.textContent = '북마크 추가';
        } else {
            addBookmark(movie);
            bookmarkButton.textContent = '북마크 제거';
        }
    };
}

// 모달 닫기
export function closeModal(modal) {
    modal.style.display = 'none';
}

// 북마크된 영화 표시
export function displayBookmarks(container, onClickMovie) {
    const bookmarks = getBookmarks();

    if (bookmarks.length === 0) {
        container.innerHTML = '<p>북마크된 영화가 없습니다.</p>';
        return;
    }

    container.innerHTML = '';
    bookmarks.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
                <p class="card-text">평점: ${movie.vote_average}</p>
            </div>
        </div>`;

        movieCard.addEventListener('click', () => onClickMovie(movie.id));
        container.appendChild(movieCard);
    });
}
