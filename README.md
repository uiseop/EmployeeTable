# <a href="https://school.programmers.co.kr/skill_check_assignments/364">(React)프로그래머스 사원 정보 테이블 구축 제작</a>

<img src="https://grepp-programmers.s3.amazonaws.com/production/file_resource/2670/img-skillup-bg-hr-table.jpg"/>

- 프로그래머스 Vanilla JS 과제를 React로 구현해봤습니다.
- 필수 요구사항 중 몇 직접 구현해보고자 하는 기술들을 구현해보자!

## 요구사항
- 인사팀으로부터 회사 계정 권한 관리를 위해 모든 사원의 정보를 테이블(table) 형태로 볼 수 있는 페이지를 만들어달라는 부탁을 받았습니다.

## 페이지네이션 처리
- 문제에서 제공되는 자료들을 가져와서 테이블을 구성한다
- 해당 문제에서는 로컬에 있는 JSON 파일을 그대로 불러오기 때문에 한 번에 모든 데이터를 불러오게 된다.
- 때문에, `https://jsonplaceholder.typicode.com/`에서는 페이지별로 데이터를 `fetch` 할 수 있기 때문에 여기서 제공되는 데이터를 바탕으로 테이블을 구축해본다.

## 테이블의 아이템 개수 변경
- 페이지당 보여주는 아이템의 개수를 제한한다.
- 5개씩 보여줄 수 있고, 15개씩 보여줄 수 있다.
- `https://jsonplaceholder.typicode.com/`에서는 전체 데이터의 총 개수를 따로 보여주고 있는지 확인해봐야 겠다.