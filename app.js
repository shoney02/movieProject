const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmU3ZjAzNjA5MmVkNjMwOTFlYjNhNzEzYzE0ZDE5MCIsIm5iZiI6MTczNjMxMzgzOS4zNTYsInN1YiI6IjY3N2UwYmVmMjAzN2ZmMDRjOTRlNTlmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pNxV2dUSWqGWsjcftHfvDtCYm65NSyuLRV8zzlPnEH0'
    }
};

const API_url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
let movieInfo = [];

fetch(API_url, options)
    .then(res => res.json())
    // 가져와야 할 속성
    // results -> 영화 이미지: backdrop_path, 영화 제목: title, 영화 설명: overview, 개봉일: release_date, 평점: vote_average, 영화 ID
    .then(data => {
        movieInfo = data['results']; // 영화 데이터 저장 배열
        renderMovies(movieInfo); // 초기 영화 리스트 렌더링
    })
    // 에러 발생 시 에러 메시지 콘솔 출력
    .catch(error => {
        console.error("영화 데이터를 가져오는데 오류 발생 ", error);
    });

// 영화 리스트 렌더링 함수
function renderMovies(movies) {
    $('#card').empty(); // 기존 영화 카드 초기화

    movies.forEach(item => {
        let img = 'https://image.tmdb.org/t/p/w500' + item['backdrop_path'];
        let title = item['title'];
        let overview = item['overview'];
        let date = item['release_date'];
        let vote = item['vote_average'];
        let id = item['id'];

        let temp_html = `
        <div id="${id}" class="card">
            <img class="card-img-top" src="${img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">평점: ${vote}</p>
            </div>
        </div>`;

        $('#card').append(temp_html);
    });
}

// 영화 검색 필터 함수
function filterMovies(searchKeyword) {
    const filterdMovies = movieInfo.filter(movie =>
        movie.title.toLowerCase().include(searchKeyword.toLowerCase())
    ); // 대소문자 구분 없애기
    renderMovies(filterdMovies);
}

$(document).ready(function () {
    const searchBar = $('.searchBar');

    // 실시간 검색 이벤트
    searchBar.on('input', function () {
        const searchKeyword = $(this).val(); // 검색창 입력값
        filterMovies(searchKeyword); // 입력값에 따라 필터링
    });

    // Enter 키 검색 이벤트
    searchBar.on('keyup', function (e) {
        if (e.key === 'Enter') {
            const searchKeyword = $(this).val(); // 검색창 입력값
            filterMovies(searchKeyword); // 입력값에 따라 필터링
        }
    });
})
