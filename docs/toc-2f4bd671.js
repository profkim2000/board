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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/nocodegeoai.html">노코드 기반 GeoAI 이해와 활용</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/iris.html">실습 1 - iris</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/dogun.html">실습 2 - 도근점 사진찾기</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/boston.html">실습 3 - 보스턴 주택 가격</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/regression01.html">실습 4 - 선형회귀 다항회귀</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/overfit.html">실습 5 - 과적합</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/regression02.html">실습 6 - K-NN</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/regression03.html">실습 7 - Decision Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/regression04.html">실습 8 - Random Forest</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/regression05.html">실습 9 - Gradient Boosting</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/qgis_geoai.html">실습 10 - QGIS + GeoAI</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/review01.html">복습문제 1 - AI 이해와 활용</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/review02.html">복습문제 2 - AI 모델학습의 이해</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/review03.html">복습문제 3 - 노코드 오픈소스 AI툴</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="nocodegeoai-01/review04.html">복습문제 4 - 회귀 알고리즘</a></span></li></ol></li></ol>';
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

