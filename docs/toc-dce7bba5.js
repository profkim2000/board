// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/index.html">파이썬 기초 및 활용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/assets.html">학습자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-01.html">1. 파이썬의 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-02.html">2. 파이썬 자료형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-03.html">3. 파이썬 조건문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-04.html">4. 파이썬 반복문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-08.html">5. 파이썬 자료형 II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-05.html">6. 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/python-06.html">7. 파이썬 입출력</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/html-01.html">8. HTML</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/scrqaping-01.html">9. 파이썬을 이용한 스크래핑</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/autojob-01.html">10. 파이썬을 이용한 업무자동화</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/quiz/office-01.html">11. 파이썬을 이용한 오피스연동</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/index.html">연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/python-01.html">1. 파이썬의 자료형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/python-02.html">2. 파이썬의 조건문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/python-03.html">3. 파이썬의 반복문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/python-04.html">4. 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/practice/python-05.html">5. 파이썬입출력</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/codes/index.html">소스코드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/qna/index.html">QnA</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2025/qna/list_del.html">1. list del</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="proposal_2025/index.html">영업전문가 양성 과정</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="proposal_2025/pds.html">자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="proposal_2025/quiz/index.html">복습문제</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="proposal_2025/quiz/speedquiz.html">스피드퀴즈</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/index.html">공간정보 웹서비스 개발 2024</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/assets.html">학습자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/quiz/index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/quiz/postgresql-01.html">1. 공간 데이터베이스</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/quiz/postgresql-02.html">2. postgreSQL, postgis 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/quiz/postgresql-03.html">3. SQL</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/quiz/postgresql-04.html">4. postgis</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/practice/index.html">연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="gisws/practice/postgresql-01.html">1. 공간데이터베이스</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/index.html">공간정보 웹서비스 개발 2025</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/assets.html">학습자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/quiz/index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/quiz/webspatial-01.html">1. 복습문제 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/quiz/webspatial-02.html">2. 복습문제 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/quiz/webspatial-03.html">3. 복습문제 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webspatial_2025/practice/practice.html">연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/index.html">국토정보프로그래밍(python) 2024</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/assets.html">학습자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-01.html">1. 파이썬의 개요</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-02.html">2. 파이썬 자료형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-03.html">3. 파이썬 조건문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-04.html">4. 파이썬 반복문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-08.html">5. 파이썬 자료형 II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-05.html">6. 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-09.html">7. 정규표현식</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-06.html">8. 파이썬 입출력</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/quiz/python-07.html">9. 파이썬 라이브러리</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/index.html">연습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/python-01.html">1. 파이썬의 자료형</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/python-02.html">2. 파이썬의 조건문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/python-03.html">3. 파이썬의 반복문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/python-04.html">4. 함수</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/practice/python-05.html">5. 파이썬입출력</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="python_2024/codes/index.html">소스코드</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="goodphotos/photos.html">사진 보정의 세계</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="goodphotos/samples.html">샘플사진</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="goodphotos/tutorial.html">스냅시드 튜토리얼</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/geo3d.html">3차원 공간정보 서비스 구현</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/sample/samples.html">샘플: 웹 3D 지도</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/exercise/blender_exercise.html">블렌더 활용실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/codes/codes.html">소스코드</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/sample/flat.html">평면도 샘플</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/blender-01.html">1. 블렌더 기초 실습(1)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/blender-02.html">2. 블렌더 기초 실습(2)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/blender-03.html">3. 블렌더 기초 실습(3)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/blender-04.html">4. 블렌더 활용 실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/cesium-01.html">5. 세슘 기초 실습(1)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/cesium-02.html">6. 세슘 기초 실습(2)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/cesium-03.html">7. 세슘 활용 실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geo3D_2024/quiz/cesium-04.html">8. 공간정보 웹서비스 구현</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/cesium.html">세슘기반 디지털트윈 구현</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/pds/pds.html">자료</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/pds/pds_youtube.html">asset 등록 안내 영상</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/quiz/quiz.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/quiz/cesium-01.html">1. 세슘 기초 실습(1)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/quiz/cesium-02.html">2. 세슘 기초 실습(2)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="cesium_2025/quiz/cesium-03.html">3. 세슘 활용</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="database_2025/database.html">공간정보 DB 기본</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="database_2025/sql.html">sql</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="database_2025/sql_practice.html">sql 실습</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/webprog.html">웹프로그래밍 기본</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/humortube.html">실습 1 - 유머튜브</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/humortube-01.html">1. 프로젝트 생성 &amp; 세팅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/humortube-02.html">2. 유튜브 재생</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/humortube-03.html">3. 빌드하고 서버에 올리기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/humortube-04.html">4. 기타, 크기 정리</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project02.html">실습 2 - 더하기 1</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project02-01.html">1. 프로젝트 세팅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project02-02.html">2. 버튼 누르면 1더하기</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01.html">실습 3 - 나 그거 했던가?</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01-01.html">1. 프로젝트 세팅</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01-02.html">2. 버튼 누르면 시간 기록</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01-03.html">3. 차 잘 잠궜나 확인 추가</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01-04.html">4. 기타, 정리</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="webprog_2025/project01-05.html">5. 2개 이상의 기록 보여주기</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis/qgis.html">QGIS</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis/exercise.html">연습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/3dgraphics.html">3D 그래픽 기본</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorials.html">따라하기</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-01.html">건물 모델링</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-02.html">책상만들기 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-03.html">책상만들기 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-04.html">책상만들기 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-05.html">평면도 모델링</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-06.html">재질</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-07.html">라이트</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-08.html">렌더</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/tutorials/tutorial-09.html">애니메이션</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/quiz/quiz.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/quiz/quiz-01.html">3D 그래픽 기본</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/quiz/quiz-02.html">blender 실습 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/quiz/quiz-03.html">blender 실습 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="3dgraphics/quiz/quiz-04.html">blender 실습 3</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="droneai/droneai.html">AI를 이용한 드론 운용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="droneai/sample/samples.html">자료</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/qgis_prog.html">국토정보 프로그래밍_파이썬</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/quiz/quiz.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/quiz/python-01.html">1. 파이썬 환경 이해</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/quiz/python-02.html">2. 파이썬 자료구조</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/quiz/python-03.html">3. 파이썬 조건문</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="qgis_prog/quiz/python-04.html">4. 파이썬 반복문</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/geofusion.html">공간정보플랫폼 기술융합</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/videos.html">자료 영상</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/quiz/quiz.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/quiz/geofusion-01.html">1. 공간정보 코딩 기초</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/quiz/geofusion-02.html">2. 공간정보 서비스 개발</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/quiz/geofusion-03.html">3. 공간정보 시각화</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="geofusion/quiz/geofusion-04.html">4. 공간정보 매시업</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/ai.html">인공지능 실용기술 이해와 활용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/lmstudio_rag.html">LM Studio LLM RAG 실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/podman_ailab.html">podman AI Lab 실습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/samples.html">음성인식 샘플</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui.html">ComfyUI 실습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-000.html">ComfyUI 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-001.html">로컬에서 이미지 만들기 - NetaYume Lumina</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-002.html">로컬에서 이미지 편집하기 - Flux</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-003.html">로컬에서 음악만들기 - Stable Audio</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-004.html">로컬에서 가사있는 음악만들기 - Ace Step v1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2025/comfyui-005.html">로컬에서 동영상 만들기 - Wan 2.1</a></span></li></ol></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/ai.html">신입사원과정 2026 - AI 이해 및 활용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/lmstudio_inst.html">LM Studio 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/lmstudio_chat.html">LM Studio 사용</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/lmstudio_rag.html">LM Studio LLM RAG 실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/mcp.html">MCP</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="ai2026-1/quiz.html">복습문제</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dict/dict.html">dictionary</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dict/alphachannel.html">알파채널</a></span></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            if (link.href === current_page
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

