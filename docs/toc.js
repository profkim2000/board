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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="python_2025/index.html">파이썬 기초 및 활용</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2025/assets.html">학습자료</a></li><li class="chapter-item "><a href="python_2025/quiz/index.html">복습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2025/quiz/python-01.html">1. 파이썬의 개요</a></li><li class="chapter-item "><a href="python_2025/quiz/python-02.html">2. 파이썬 자료형</a></li><li class="chapter-item "><a href="python_2025/quiz/python-03.html">3. 파이썬 조건문</a></li><li class="chapter-item "><a href="python_2025/quiz/python-04.html">4. 파이썬 반복문</a></li><li class="chapter-item "><a href="python_2025/quiz/python-08.html">5. 파이썬 자료형 II</a></li><li class="chapter-item "><a href="python_2025/quiz/python-05.html">6. 함수</a></li><li class="chapter-item "><a href="python_2025/quiz/python-06.html">7. 파이썬 입출력</a></li><li class="chapter-item "><a href="python_2025/quiz/html-01.html">8. HTML</a></li><li class="chapter-item "><a href="python_2025/quiz/scrqaping-01.html">9. 파이썬을 이용한 스크래핑</a></li><li class="chapter-item "><a href="python_2025/quiz/autojob-01.html">10. 파이썬을 이용한 업무자동화</a></li><li class="chapter-item "><a href="python_2025/quiz/office-01.html">11. 파이썬을 이용한 오피스연동</a></li></ol></li><li class="chapter-item "><a href="python_2025/practice/index.html">연습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2025/practice/python-01.html">1. 파이썬의 자료형</a></li><li class="chapter-item "><a href="python_2025/practice/python-02.html">2. 파이썬의 조건문</a></li><li class="chapter-item "><a href="python_2025/practice/python-03.html">3. 파이썬의 반복문</a></li><li class="chapter-item "><a href="python_2025/practice/python-04.html">4. 함수</a></li><li class="chapter-item "><a href="python_2025/practice/python-05.html">5. 파이썬입출력</a></li></ol></li><li class="chapter-item "><a href="python_2025/codes/index.html">소스코드</a></li><li class="chapter-item "><a href="python_2025/qna/index.html">QnA</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2025/qna/list_del.html">1. list del</a></li></ol></li></ol></li><li class="chapter-item "><a href="proposal_2025/index.html">영업전문가 양성 과정</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="proposal_2025/pds.html">자료</a></li><li class="chapter-item "><a href="proposal_2025/quiz/index.html">복습문제</a></li><li class="chapter-item "><a href="proposal_2025/quiz/speedquiz.html">스피드퀴즈</a></li></ol></li><li class="chapter-item "><a href="gisws/index.html">공간정보 웹서비스 개발</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="gisws/assets.html">학습자료</a></li><li class="chapter-item "><a href="gisws/quiz/index.html">복습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="gisws/quiz/postgresql-01.html">1. 공간 데이터베이스</a></li><li class="chapter-item "><a href="gisws/quiz/postgresql-02.html">2. postgreSQL, postgis 설치</a></li><li class="chapter-item "><a href="gisws/quiz/postgresql-03.html">3. SQL</a></li><li class="chapter-item "><a href="gisws/quiz/postgresql-04.html">4. postgis</a></li></ol></li><li class="chapter-item "><a href="gisws/practice/index.html">연습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="gisws/practice/postgresql-01.html">1. 공간데이터베이스</a></li></ol></li></ol></li><li class="chapter-item "><a href="python_2024/index.html">국토정보프로그래밍(python)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2024/assets.html">학습자료</a></li><li class="chapter-item "><a href="python_2024/quiz/index.html">복습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2024/quiz/python-01.html">1. 파이썬의 개요</a></li><li class="chapter-item "><a href="python_2024/quiz/python-02.html">2. 파이썬 자료형</a></li><li class="chapter-item "><a href="python_2024/quiz/python-03.html">3. 파이썬 조건문</a></li><li class="chapter-item "><a href="python_2024/quiz/python-04.html">4. 파이썬 반복문</a></li><li class="chapter-item "><a href="python_2024/quiz/python-08.html">5. 파이썬 자료형 II</a></li><li class="chapter-item "><a href="python_2024/quiz/python-05.html">6. 함수</a></li><li class="chapter-item "><a href="python_2024/quiz/python-09.html">7. 정규표현식</a></li><li class="chapter-item "><a href="python_2024/quiz/python-06.html">8. 파이썬 입출력</a></li><li class="chapter-item "><a href="python_2024/quiz/python-07.html">9. 파이썬 라이브러리</a></li></ol></li><li class="chapter-item "><a href="python_2024/practice/index.html">연습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="python_2024/practice/python-01.html">1. 파이썬의 자료형</a></li><li class="chapter-item "><a href="python_2024/practice/python-02.html">2. 파이썬의 조건문</a></li><li class="chapter-item "><a href="python_2024/practice/python-03.html">3. 파이썬의 반복문</a></li><li class="chapter-item "><a href="python_2024/practice/python-04.html">4. 함수</a></li><li class="chapter-item "><a href="python_2024/practice/python-05.html">5. 파이썬입출력</a></li></ol></li><li class="chapter-item "><a href="python_2024/codes/index.html">소스코드</a></li></ol></li><li class="chapter-item "><a href="goodphotos/photos.html">사진 보정의 세계</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="goodphotos/samples.html">샘플사진</a></li><li class="chapter-item "><a href="goodphotos/tutorial.html">스냅시드 튜토리얼</a></li></ol></li><li class="chapter-item "><a href="geo3D_2024/geo3d.html">3차원 공간정보 서비스 구현</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="geo3D_2024/sample/samples.html">샘플: 웹 3D 지도</a></li><li class="chapter-item "><a href="geo3D_2024/exercise/blender_exercise.html">블렌더 활용실습</a></li><li class="chapter-item "><a href="geo3D_2024/codes/codes.html">소스코드</a></li><li class="chapter-item "><a href="geo3D_2024/sample/flat.html">평면도 샘플</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/index.html">복습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="geo3D_2024/quiz/blender-01.html">1. 블렌더 기초 실습(1)</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/blender-02.html">2. 블렌더 기초 실습(2)</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/blender-03.html">3. 블렌더 기초 실습(3)</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/blender-04.html">4. 블렌더 활용 실습</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/cesium-01.html">5. 세슘 기초 실습(1)</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/cesium-02.html">6. 세슘 기초 실습(2)</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/cesium-03.html">7. 세슘 활용 실습</a></li><li class="chapter-item "><a href="geo3D_2024/quiz/cesium-04.html">8. 공간정보 웹서비스 구현</a></li></ol></li></ol></li><li class="chapter-item "><a href="cesium_2025/cesium.html">세슘기반 디지털트윈 구현</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="cesium_2025/pds/pds.html">자료</a></li><li class="chapter-item "><a href="cesium_2025/pds/pds_youtube.html">asset 등록 안내 영상</a></li><li class="chapter-item "><a href="cesium_2025/quiz/quiz.html">복습문제</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="cesium_2025/quiz/cesium-01.html">1. 세슘 기초 실습(1)</a></li><li class="chapter-item "><a href="cesium_2025/quiz/cesium-02.html">2. 세슘 기초 실습(2)</a></li><li class="chapter-item "><a href="cesium_2025/quiz/cesium-03.html">3. 세슘 활용</a></li></ol></li></ol></li><li class="chapter-item "><a href="database_2025/database.html">공간정보 DB 기본</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="database_2025/sql.html">sql</a></li><li class="chapter-item "><a href="database_2025/sql_practice.html">sql 실습</a></li></ol></li><li class="chapter-item "><a href="webprog_2025/webprog.html">웹프로그래밍 기본</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="webprog_2025/humortube.html">실습 1 - 유머튜브</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="webprog_2025/humortube-01.html">1. 프로젝트 생성 &amp; 세팅</a></li><li class="chapter-item "><a href="webprog_2025/humortube-02.html">2. 유튜브 재생</a></li><li class="chapter-item "><a href="webprog_2025/humortube-03.html">3. 빌드하고 서버에 올리기</a></li><li class="chapter-item "><a href="webprog_2025/humortube-04.html">4. 기타, 크기 정리</a></li></ol></li><li class="chapter-item "><a href="webprog_2025/project02.html">실습 2 - 더하기 1</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="webprog_2025/project02-01.html">1. 프로젝트 세팅</a></li><li class="chapter-item "><a href="webprog_2025/project02-02.html">2. 버튼 누르면 1더하기</a></li></ol></li><li class="chapter-item "><a href="webprog_2025/project01.html">실습 3 - 나 그거 했던가?</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="webprog_2025/project01-01.html">1. 프로젝트 세팅</a></li><li class="chapter-item "><a href="webprog_2025/project01-02.html">2. 버튼 누르면 시간 기록</a></li><li class="chapter-item "><a href="webprog_2025/project01-03.html">3. 차 잘 잠궜나 확인 추가</a></li><li class="chapter-item "><a href="webprog_2025/project01-04.html">4. 기타, 정리</a></li><li class="chapter-item "><a href="webprog_2025/project01-05.html">5. 2개 이상의 기록 보여주기</a></li></ol></li></ol></li><li class="chapter-item "><a href="qgis/qgis.html">QGIS</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="qgis/exercise.html">연습문제</a></li></ol></li><li class="chapter-item "><a href="3dgraphics/3dgraphics.html">3D 그래픽 기본</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="3dgraphics/quiz/quiz-01.html">복습문제-01</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
