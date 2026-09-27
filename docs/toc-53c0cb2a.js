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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aianal-01.html">인공지능 분석과 활용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aid/aid.html">교보재</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/quiz/quiz_index.html">복습문제</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/quiz/01.html">1. 인공지능의 현재와 미래</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/quiz/02.html">2. 인공지능에 관한 궁금증</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/quiz/07.html">7. AI 활용 공간문제 해결</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/quiz/08.html">8. AI와 GIS 융합 분석</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/prac.html">실습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/image_class-01.html">이미지 분류 실습</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo000.html">AI 활용 공간문제 해결 실습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo05.html">실습 1: GeoGPT</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo07.html">실습 2: 국토 변화상 파악</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo010.html">실습 3: 보스턴 주택가격</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo015.html">실습 4: 캘리포니아 주택가격</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigeo/aigeo020.html">실습 5: 도근점 찾기</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/ai20.html">AI와 GIS 융합 분석 실습</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/aigis010.html">실습 1: pyQGIS &amp; AI</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/pr03.html">실습 2: GeoAI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/install_geoai.html">GeoAI 플러그인 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/install_tms.html">TMS for Korea 플러그인 설치</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="aianal-01/aigis/export_to_geotiff.html">Export to geoTiff</a></span></li></ol></li></ol></li></ol></li></ol></li></ol>';
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
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
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

