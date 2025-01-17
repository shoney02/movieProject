const API_KEY = 'efe7f036092ed63091eb3a713c14d190';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOP_RATED_API = '/movie/top_rated?language=ko-KR&page=1';
const SEARCH_API = '/search/movie?include_adult=false&language=ko-KO&page=1';

// TMDB API 영화 데이터 가져오기
export async function fetchMovies() {
    try {
        const res = await fetch(`${BASE_URL}${TOP_RATED_API}&api_key=${API_KEY}`);
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

// TMDB API 영화 검색하기
export async function searchMovies(query) {
    try {
        const res = await fetch(`${BASE_URL}${SEARCH_API}&query=${encodeURIComponent(query)}&api_key=${API_KEY}`);
        const data = await res.json();
        return data.results || []; // 검색된 영화 리스트 반환
    } catch (err) {
        console.error("영화 검색 중 오류 발생: ", err);
        return [];
    }
}
