(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"8a68":function(t,e,n){"use strict";var i=n("f3b0"),r=n.n(i);e["default"]=r.a},b5fb:function(t,e,n){t.exports=n.p+"img/text-fixarea-output.b2684beb.jpg"},e1de8:function(t,e,n){t.exports=n.p+"img/text-fixarea-demo.a0142503.png"},f3b0:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"title":"About This Project","title.introduction":"Introduction","title.control":"How to use","introduction":"<p>This project is an artwork ported from <a href=\'http://www.complexification.net/gallery/machines/substrate/index.php\'>Substrate by j.tarbell</a>. With time passing by, lines slowly grow on white canvas with perpendicular growth rule, and finally illustrate city-like crystal structure.</p> <p>Technically, this project is originally implemented in <strong>processing</strong> language. Even though we have <strong><a href=\'https://p5js.org/\'> p5.js</a></strong> which handles entire rendering flow, <strong>p5.js</strong> still have some different behavior from original <strong>processing</strong> due to javascript\'s nature. In order to lower the resource usage (such as CPU), the <q>findStart</q>, <q>move</q> functions and line/color dithering behavior are re-designed.</p> <p>A fixed text area functionality is implemented in this project. In current implementation, users can set a short string as fixed area which will not be paint.</p><p>I\'m keeping adding other functionalities such as assigning fix area by image. If you have other good idea, please don\'t hesitate to submit this project\'s issue tracker.</p>","control":"<p>Rendering:</p> <ul> <li>Start button: start rendering.</li> <li>Pause button: pause rendering.</li> <li>Reset button: reset canvas and stop rendering.</li> </ul> <p>Text settings area:</p> <p>When text is set, remember to click <em>Apply</em> button to apply text setting. After applying, a rendered text will apply on rendering area. The text can be moved by dragging. </p>"},"zhtw":{"title":"關於本專案","title.introduction":"簡介","title.control":"操作方式","introduction":"<p>本專案是從 <a href=\'http://www.complexification.net/gallery/machines/substrate/index.php\'>Substrate by j.tarbell</a> 移殖而來的 computational artwork。隨著時間，畫布上的線條會慢慢的依據設計好的垂直規則成長，最終繪出像城市一樣的晶格結構。</p> <p>技術上來說，substrate 𠩤本是由 <strong>processing</strong> 語言編寫。雖然現在有 <strong><a href=\'https://p5js.org/\'>p5.js</a></strong> 實作出原本 <strong>processing</strong> 語言的繪圖流程，但<strong> p5.js </strong> 由於本質上為 javascript 的關係，所以部份行為和原本會有所 不同。為了把占用資源 (像 CPU) 控制在合理範圍，<q>findStart</q>、<q>move</q> 等 functions 以及線條與色彩隨機變動的方式都必須重新設計。</p> <p>本專案另外實作了<strong>靜態區域</strong>。目前專案的情況，用者可以設定一段簡單的文字作為<strong>靜態區域</strong>。</p><p>目前專案仍在持續開發中，像是「以圖片作為<strong>靜態區域</strong>」的功能計劃在未來加入。如果有認何想法，歡迎在本專案的 issue tracker 上 提出。</p>","control":"<p>繪圖區域:</p> <ul> <li>開始: 開始繪圖。</li> <li>暫停: 暫停繪圖流程.</li> <li>重設: 停止繪圖並清除繪圖區。.</li> </ul> <p>文字設定:</p> <p>此區用來設定文字靜態區域。在設定好文字參數後，記得點選<em>套用</em>。在套用設定後，繪制好的文字會顯示在下方的繪圖區域內。這時可以透過拖拉 的方式來移動文字的位置。</p>"}}'),delete t.options._Ctor}},f820:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v(t._s(t.$t("title")))]),i("h2",[t._v(t._s(t.$t("title.introduction")))]),i("hr"),i("div",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.$t("introduction"))}}),i("img",{staticStyle:{width:"40%"},attrs:{src:n("e1de8"),alt:"Text fixed area."}}),i("img",{staticStyle:{width:"40%"},attrs:{src:n("b5fb"),alt:"Result of text fixed area."}}),i("h2",[t._v(t._s(t.$t("title.control")))]),i("hr"),i("div",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.$t("control"))}})])},r=[],o={data:function(){return{}}},s=o,a=n("2877"),l=n("8a68"),p=Object(a["a"])(s,i,r,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(p);e["default"]=p.exports}}]);