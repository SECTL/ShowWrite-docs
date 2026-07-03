---
home: true
config:
- type: custom
navbar: false
footer: false
pageClass: gov-home-page
---

<style>
/* =========================================
   1. 基础变量与重置 (限定在 gov-home-page 作用域)
   ========================================= */
.gov-home-page {
  --gov-blue: #1859b4;
  --gov-blue-dark: #0d47a1;
  --gov-bg: #f5f7fa;
  --gov-text: #333;
  --gov-border: #e4e7ed;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: var(--gov-text);
  background: var(--gov-bg);
  margin: -2rem; /* 抵消 VuePress 默认的 padding */
  padding: 0;
}
.gov-home-page * { box-sizing: border-box; margin: 0; padding: 0; }
.gov-home-page a { text-decoration: none; color: inherit; transition: color 0.2s; }
.gov-home-page a:hover { color: var(--gov-blue); }
.gov-home-page ul { list-style: none; }
.gov-home-page .g-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.gov-home-page .g-flex { display: flex; }

/* =========================================
   2. 顶部 Header
   ========================================= */
.gov-home-page .g-header {
  background: #fff;
  border-bottom: 1px solid var(--gov-border);
  padding: 20px 0;
}
.gov-home-page .g-header .g-flex { justify-content: space-between; align-items: center; }
.gov-home-page .g-logo {
  font-size: 24px; font-weight: bold; color: var(--gov-blue);
  display: flex; align-items: center; gap: 10px;
}
.gov-home-page .g-logo::before { content: "🏛️"; font-size: 28px; }
.gov-home-page .g-search { display: flex; }
.gov-home-page .g-search input {
  width: 240px; height: 36px; border: 1px solid var(--gov-border);
  border-right: none; padding: 0 12px; outline: none; font-size: 14px;
  border-radius: 4px 0 0 4px;
}
.gov-home-page .g-search button {
  width: 60px; height: 36px; background: var(--gov-blue); color: #fff;
  border: none; cursor: pointer; font-size: 14px; border-radius: 0 4px 4px 0;
}
.gov-home-page .g-search button:hover { background: var(--gov-blue-dark); }

/* =========================================
   3. 导航栏 Nav (纯 CSS 下拉)
   ========================================= */
.gov-home-page .g-nav { background: var(--gov-blue); }
.gov-home-page .g-nav-list { display: flex; }
.gov-home-page .g-nav-list > li { position: relative; }
.gov-home-page .g-nav-list > li > a {
  display: block; padding: 0 30px; line-height: 50px; color: #fff; font-size: 16px;
}
.gov-home-page .g-nav-list > li > a:hover,
.gov-home-page .g-nav-list > li:hover > a { background: var(--gov-blue-dark); }
.gov-home-page .g-dropdown {
  display: none; position: absolute; top: 100%; left: 0; min-width: 150px;
  background: #fff; border: 1px solid var(--gov-border); box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 100;
}
.gov-home-page .g-nav-list > li:hover .g-dropdown { display: block; }
.gov-home-page .g-dropdown a {
  display: block; padding: 10px 20px; color: var(--gov-text); font-size: 14px;
  border-bottom: 1px solid #f0f0f0;
}
.gov-home-page .g-dropdown a:last-child { border-bottom: none; }
.gov-home-page .g-dropdown a:hover { background: #f5f7fa; color: var(--gov-blue); }

/* =========================================
   4. 主体内容 (左轮播 + 右新闻)
   ========================================= */
.gov-home-page .g-main { padding: 20px 0; gap: 20px; }
/* 纯 CSS 轮播图 */
.gov-home-page .g-slider {
  width: 600px; height: 320px; position: relative; overflow: hidden;
  border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.gov-home-page .g-slide {
  position: absolute; width: 100%; height: 100%;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 30px; color: #fff; opacity: 0;
  animation: gSlideFade 12s infinite;
}
.gov-home-page .g-slide.s1 { background: linear-gradient(135deg, #1859b4 0%, #4facfe 100%); animation-delay: 0s; }
.gov-home-page .g-slide.s2 { background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%); animation-delay: 4s; }
.gov-home-page .g-slide.s3 { background: linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%); animation-delay: 8s; }
.gov-home-page .g-slide h2 { font-size: 22px; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.gov-home-page .g-slide p { font-size: 14px; opacity: 0.9; }

@keyframes gSlideFade {
  0%, 25% { opacity: 1; z-index: 2; }
  33.33%, 100% { opacity: 0; z-index: 1; }
}

/* 新闻列表 */
.gov-home-page .g-news {
  flex: 1; background: #fff; border-radius: 8px; padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative;
}
.gov-home-page .g-news input[type="radio"] { display: none; }
.gov-home-page .g-tabs {
  display: flex; border-bottom: 2px solid var(--gov-border); margin-bottom: 15px;
}
.gov-home-page .g-tabs label {
  padding: 10px 20px; cursor: pointer; font-size: 16px; font-weight: bold;
  color: #666; border-bottom: 2px solid transparent; margin-bottom: -2px;
}
.gov-home-page .g-panel { display: none; }
.gov-home-page .g-panel li {
  display: flex; justify-content: space-between; padding: 10px 0;
  border-bottom: 1px dashed #eee; font-size: 14px;
}
.gov-home-page .g-panel li span { color: #999; font-size: 13px; white-space: nowrap; margin-left: 10px; }
.gov-home-page .g-panel li a { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }

/* 纯 CSS Tab 切换逻辑 */
.gov-home-page #tab1:checked ~ .g-tabs label[for="tab1"],
.gov-home-page #tab2:checked ~ .g-tabs label[for="tab2"] {
  color: var(--gov-blue); border-bottom-color: var(--gov-blue);
}
.gov-home-page #tab1:checked ~ .g-panels .p1,
.gov-home-page #tab2:checked ~ .g-panels .p2 { display: block; }

/* =========================================
   5. 快捷入口网格
   ========================================= */
.gov-home-page .g-quick {
  background: #fff; margin: 20px auto; padding: 30px; border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.gov-home-page .g-quick h3 {
  font-size: 20px; color: var(--gov-blue); margin-bottom: 20px;
  padding-left: 10px; border-left: 4px solid var(--gov-blue);
}
.gov-home-page .g-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px;
}
.gov-home-page .g-grid a {
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  padding: 20px 0; border: 1px solid var(--gov-border); border-radius: 8px;
  transition: all 0.3s;
}
.gov-home-page .g-grid a:hover {
  border-color: var(--gov-blue); transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(24,89,180,0.1);
}
.gov-home-page .g-grid span { font-size: 32px; }
.gov-home-page .g-grid p { font-size: 14px; color: #666; }

/* =========================================
   6. 底部 Footer
   ========================================= */
.gov-home-page .g-footer {
  background: #2c3e50; color: #fff; padding: 30px 0; text-align: center;
  margin-top: 20px;
}
.gov-home-page .g-footer p { margin: 5px 0; font-size: 14px; opacity: 0.8; }
.gov-home-page .g-footer a { color: #fff; margin: 0 10px; }

/* =========================================
   7. 响应式适配
   ========================================= */
@media (max-width: 900px) {
  .gov-home-page .g-main { flex-direction: column; }
  .gov-home-page .g-slider { width: 100%; height: 200px; }
  .gov-home-page .g-grid { grid-template-columns: repeat(3, 1fr); }
  .gov-home-page .g-nav-list > li > a { padding: 0 15px; font-size: 14px; }
}
</style>

<!-- 1. 顶部 Header -->
<header class="g-header">
  <div class="g-container g-flex">
    <div class="g-logo">浙江省教育厅</div>
    <div class="g-search">
      <input type="text" placeholder="请输入关键字搜索...">
      <button>搜索</button>
    </div>
  </div>
</header>

<!-- 2. 导航栏 Nav -->
<nav class="g-nav">
  <div class="g-container">
    <ul class="g-nav-list">
      <li><a href="#">首页</a></li>
      <li>
        <a href="#">机构概况</a>
        <div class="g-dropdown">
          <a href="#">领导信息</a>
          <a href="#">直属单位</a>
          <a href="#">机构职能</a>
        </div>
      </li>
      <li>
        <a href="#">政府信息公开</a>
        <div class="g-dropdown">
          <a href="#">最新文件</a>
          <a href="#">政策解读</a>
          <a href="#">依申请公开</a>
        </div>
      </li>
      <li><a href="#">政务服务</a></li>
      <li><a href="#">互动交流</a></li>
    </ul>
  </div>
</nav>

<!-- 3. 主体内容区 -->
<main class="g-main g-container g-flex">
  <!-- 纯 CSS 轮播图 (无需 JS，自动淡入淡出) -->
  <div class="g-slider">
    <div class="g-slide s1">
      <h2>省教育厅召开党组理论学习中心组会议</h2>
      <p>2026-07-02 | 深入学习贯彻重要指示精神</p>
    </div>
    <div class="g-slide s2">
      <h2>全省高校“两优一先”表彰会在杭召开</h2>
      <p>2026-07-01 | 表彰先进，树立典型</p>
    </div>
    <div class="g-slide s3">
      <h2>省教育厅领导“七一”前夕走访慰问老党员</h2>
      <p>2026-07-01 | 传递组织关怀，致以节日问候</p>
    </div>
  </div>

  <!-- 纯 CSS Tab 新闻列表 -->
  <div class="g-news">
    <input type="radio" name="g-tab" id="tab1" checked>
    <input type="radio" name="g-tab" id="tab2">
    
    <div class="g-tabs">
      <label for="tab1">图文报道</label>
      <label for="tab2">教育动态</label>
    </div>
    
    <div class="g-panels">
      <ul class="g-panel p1">
        <li><a href="#">省教育厅召开党组会议传达学习近期重要会议精神</a><span>06-27</span></li>
        <li><a href="#">省教育厅举办2026年全省教育系统第四期“校安大讲堂”</a><span>06-26</span></li>
        <li><a href="#">全省国际中文教育工作会议在杭召开</a><span>06-24</span></li>
        <li><a href="#">强化正风肃纪 推进学习教育走深走实</a><span>06-17</span></li>
        <li><a href="#">浙江省教育厅关于2025年度省科学技术奖候选提名成果的公示</a><span>06-16</span></li>
        <li><a href="#">省教育厅教研室2026年公开招聘人员公告</a><span>03-27</span></li>
      </ul>
      <ul class="g-panel p2">
        <li><a href="#">海盐县深化“中职-高职-企业”一体化发展模式</a><span>06-23</span></li>
        <li><a href="#">绍兴市加快推进学前教育“优共体”建设</a><span>06-12</span></li>
        <li><a href="#">宁波城市职业技术学院以“三新”模式推进产教深度融合</a><span>06-10</span></li>
        <li><a href="#">嘉兴市强内涵塑体系 打造市域现代职教体系新样板</a><span>05-27</span></li>
        <li><a href="#">东阳市构建“三维协同”体系推动区域教育生态持续优化</a><span>05-27</span></li>
        <li><a href="#">宁波市聚“三力”塑造产教融合新形态</a><span>04-21</span></li>
      </ul>
    </div>
  </div>
</main>

<!-- 4. 快捷入口 (使用 Emoji 替代图片，秒开) -->
<section class="g-quick g-container">
  <h3>政务服务与互动</h3>
  <div class="g-grid">
    <a href="#"><span>📂</span><p>公开目录</p></a>
    <a href="#"><span>✉️</span><p>依申请公开</p></a>
    <a href="#"><span>📜</span><p>公开制度</p></a>
    <a href="#"><span>💬</span><p>我要咨询</p></a>
    <a href="#"><span>📢</span><p>我要反映</p></a>
    <a href="#"><span>📝</span><p>领导信箱</p></a>
  </div>
</section>

<!-- 5. 底部 Footer -->
<footer class="g-footer">
  <div class="g-container">
    <p>
      <a href="#">友情链接</a> | 
      <a href="#">下属机构</a> | 
      <a href="#">网站地图</a> | 
      <a href="#">联系我们</a>
    </p>
    <p>版权所有：浙江省教育厅 &nbsp; 网站标识码：3300000000</p>
  </div>
</footer>
