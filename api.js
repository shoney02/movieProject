const API_KEY = 'efe7f036092ed63091eb3a713c14d190';
const BASE_URL = 'https://api.themoviedb.org/3';

// TMDB API 영화 데이터 가져오기
export async function fetchMovies() {
    try {
        const res = await fetch(`${BASE_URL}/movie/top_rated?language=ko-KR&page=1&api_key=${API_KEY}`);
        const data = await res.json();
        return data.results; // 영화 리스트 반환
    } catch (err) {
        console.error("영화 데이터를 가져오는데 오류 발생: ", err);
        return [];
    }
}

// 특정 영화의 상세 정보 가져오기
export async function fetchMovieDetails(movieId) {
    try {
        const res = await fetch(`${BASE_URL}/movie/${movieId}?language=ko-KR&api_key=${API_KEY}`);
        return await res.json(); // 영화 상세 데이터 반환
    } catch (err) {
        console.error("영화 상세 정보를 가져오는데 오류 발생: ", err);
        return null;
    }
}
