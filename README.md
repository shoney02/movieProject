# 영화 검색 사이트

## 프로젝트 소개

TMDB API를 활용하여 인기 있는 영화를 검색하고, 상세 정보를 확인하며, 관심 있는 영화를 북마크할 수 있는 웹 애플리케이션입니다.

개발기간 : 25/01/08 ~ 25/01/17

## 주요 기능

1. 인기 영화 조회
   
  홈 화면에 인기 영화 데이터를 노출시켜 역대 인기 영화를 살펴볼 수 있습니다.

2. 실시간 검색 기능
  
  영화 제목 검색 시 실시간으로 검색한 제목 키워드와 동일한 영화를 볼 수 있습니다.

3. 영화 상세정보 확인
  
  영화 카드를 클릭하면 모달 창이 열려 해당 영화의 포스터, 줄거리 요약, 개봉일 및 평점을 확인할 수 있습니다.

4. 북마크 추가 및 제거
  
  브라우저의 Local Storage를 통해 관심 있는 영화를 북마크 추가하거나 삭제할 수 있습니다.

## Stacks

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

## 프로젝트 구조
```
project-directory/
│── index.html      # 메인 HTML 파일
│── style.css       # 스타일시트
│── main.js         # 메인 스크립트 파일
│── api.js          # TMDB API 관련 함수 관리
│── ui.js           # UI 관련 함수 관리 (모달, 영화 리스트 표시 등)
│── bookmark.js     # 북마크 기능 관련 로직 관리
```
