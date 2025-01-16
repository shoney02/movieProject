// 북마크 가져오기
export function getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks')) || [];
}

// 북마크 추가 함수
export function addBookmark(movie) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const isAlreadyBookmarked = bookmarks.some(bookmark => bookmark.id === movie.id);

    if (isAlreadyBookmarked) {
        alert('이미 북마크된 영화입니다.');
    } else {
        bookmarks.push(movie);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        alert('북마크에 추가되었습니다.');
    }
}

// 북마크 제거
export function removeBookmark(movieID) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const updatedBookmarks = bookmarks.filter(movie => movie.id !== movieID);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));

    if (updatedBookmarks) {
        alert('북마크에서 제거되었습니다.');
    }
}

// 북마크 여부 확인
export function isBookmarked(movieID) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    return bookmarks.some(movie => movie.id === movieID);
}