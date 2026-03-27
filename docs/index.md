---
home: true
config:
  - type: custom
navbar: false
footer: false
pageClass: custom-home-page
---

<!-- ============ 导航栏 ============ -->
<nav class="navbar" id="navbar">
  <div class="logo">
    <svg width="70" height="16" viewBox="0 0 70 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44.8875 0.682373H42.168V15.6568H44.8875V0.682373Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3359 0.682373V9.28793C25.3359 13.1627 27.9258 16 32.1118 16C36.256 16 38.7162 13.1607 38.7162 9.28793V0.682373L35.9966 0.682373V9.37373C35.9966 11.7401 34.7875 13.462 32.1118 13.462C29.4781 13.462 28.0974 11.6563 28.0974 9.37373V0.682373H25.3359Z" fill="white"/>
      <path d="M21.6663 0.682373H18.9468V15.6568H21.6663V0.682373Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02694 11.3111L12.6021 6.36288V15.6568H15.3216V0.682373H14.5016L7.63986 7.9551L0.776157 0.682373H0L0 15.6568H2.67565L2.67565 6.36288L7.38047 11.3111H8.02694Z" fill="white"/>
      <path d="M57.2098 0.682373V15.6129H54.5103V3.24628H52.3135V0.682373L57.2098 0.682373Z" fill="white"/>
      <path d="M63.9258 13.1049H69.5305V15.4593H60.6775V13.454L66.0627 6.82579C66.9127 5.80022 67.196 5.14777 67.196 4.31775C67.196 3.20638 66.346 2.42025 65.1469 2.42025C63.9258 2.42025 62.966 3.31413 62.966 4.73076H60.458C60.458 1.8516 62.4213 0 65.1469 0C67.7208 0 69.6602 1.8536 69.6602 4.31775C69.6602 5.88802 68.896 7.08717 67.7188 8.5038L63.9258 13.1049Z" fill="white"/>
    </svg>
  </div>
  <div class="nav-links">
    <a href="#">首页</a>
    <a href="#">课堂</a>
    <a href="#">视效</a>
    <a href="#">动态</a>
  </div>
</nav>

<!-- ============ 超级壁纸区域 ============ -->
<div class="super-wrapper">
  <div class="super-pin" id="superPin">
    <div class="super-content">
      <div class="phones-layer" id="phoneLayer">
        <div class="phone phone-left" id="phoneLeft">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/pSLUAM-6u.png" alt="phone left">
        </div>
        <div class="phone phone-center" id="phoneCenter">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/y8w0fwBAk.jpg" alt="main phone">
        </div>
        <div class="phone phone-right" id="phoneRight">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/LDD1f7Q2f.png" alt="phone right">
        </div>
        <div class="phone phone-back" id="phoneBack">
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/S7r8_JMUs.png" alt="back phone">
        </div>
      </div>
      <div class="super-title">
        <div class="logo-showwrite" id="logoShowWrite">ShowWrite</div>
        <h1 class="main-headline" id="dynamicHeadline">展示助力课堂</h1>
      </div>
    </div>
  </div>
</div>

<!-- ============ 动态天气 ============ -->
<section class="weather-section" id="weatherSec">
  <video id="weatherVideo" class="weather-bg-video" src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/cm-EX3rBJ.mp4" muted autoplay loop playsinline></video>
  <div class="weather-content container">
    <h2 class="weather-title fade-up">感受真实</h2>
    <p class="section-desc fade-up">将自然、极具生命力的气候元素融入系统天气应用，在指尖即可感受气候变化，欣赏阴晴雨雪之美。</p>
    <div class="replay-btn fade-up" id="weatherReplay">
      <span>重播动态天气</span>
      <svg width="16" height="14" viewBox="0 0 20 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0896 7.99925L0 7.99925V5.99925L16.0885 5.99925L12.6097 2.17249L14.0895 0.827148L19.0896 6.32715L19.7011 6.99982L19.0896 7.67249L14.0895 13.1725L12.6097 11.8271L16.0896 7.99925Z" fill="white"></path></svg>
    </div>
  </div>
</section>

<!-- ============ MAML 光锥架构 ============ -->
<section class="maml-section">
  <div class="container maml-grid">
    <div class="maml-text fade-up">
      <h2>光锥动效架构</h2>
      <p>自研物理引擎，重写底层渲染。通过 MAML 插画引擎、Folme 物理引擎，实现完美动态圆角、高级混色，系统动画焕然一新。</p>
    </div>
    <div class="maml-img fade-up">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/b6OFyNhHl.png" alt="光锥架构">
    </div>
  </div>
</section>

<!-- ============ 图标动效 ============ -->
<section class="icons-section">
  <div class="container">
    <div class="icon-cards">
      <div class="icon-card fade-up">
        <h3>应用图标删除动效</h3>
        <p>绽放精彩，传递律动</p>
        <video id="deleteVideo" class="icon-video" src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/fKpZszP22.mp4" poster="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/9ZQ9UCHeN.png" muted playsinline></video>
        <div class="replay-btn" id="deleteReplay">重播<img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/_PidVi45D.svg" style="width:16px; margin-left:6px;"></div>
      </div>
      <div class="icon-card fade-up">
        <h3>系统图标动效</h3>
        <p>按钮仿真动效 · 每次点击怦然心动</p>
        <video id="systemVideo" class="icon-video" src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/8ej86ffM_.mp4" poster="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/uRnK3dHxs.png" muted playsinline></video>
        <div class="replay-btn" id="systemReplay">重播<img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/_PidVi45D.svg" style="width:16px; margin-left:6px;"></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ 通感可视化 ============ -->
<section class="maml-section" style="background:#050505">
  <div class="container">
    <h2 class="section-title fade-up">通感可视化 · 跨越语言</h2>
    <div class="visual-grid">
      <div class="vis-item fade-up">
        <video class="vis-video" id="dailyVideo" src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/SWoBjDSNl.mp4" muted autoplay loop playsinline></video>
        <h3>为每一个纪念日增加仪式感</h3>
      </div>
      <div class="vis-item fade-up">
        <video class="vis-video" id="electricVideo" src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/jxycHQDYC.mp4" muted autoplay loop playsinline></video>
        <h3>全新可视化UI，高效传递信息</h3>
      </div>
    </div>
  </div>
</section>

<!-- ============ 发版计划 ============ -->
<section class="plan-section">
  <div class="container">
    <h2 class="section-title fade-up">MIUI 12 发版计划</h2>
    <div class="phone-slider" id="phoneSlider">
      <div class="phone-item"><img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/part3/phone10u.png" onerror="this.src='https://placehold.co/120x240?text=Mi10U'"><p>小米10 至尊版</p></div>
      <div class="phone-item"><img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/part3/k30u.png" onerror="this.src='https://placehold.co/120x240?text=K30U'"><p>Redmi K30 Ultra</p></div>
      <div class="phone-item"><img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/part3/mi10pro.png" onerror="this.src='https://placehold.co/120x240?text=Mi10Pro'"><p>小米10 Pro</p></div>
      <div class="phone-item"><img src="https://cdn.cnbj1.fds.api.mi-img.com/miui12-homepage/part3/mi10.png" onerror="this.src='https://placehold.co/120x240?text=Mi10'"><p>小米10</p></div>
    </div>
    <div class="slider-controls">
      <button class="ctrl-btn" id="scrollLeftBtn">←</button>
      <button class="ctrl-btn" id="scrollRightBtn">→</button>
    </div>
    <div class="footer-links">
      <div class="footer-link-item"><a href="#">隐私课堂</a></div>
      <div class="footer-link-item"><a href="#">助力社区</a></div>
    </div>
  </div>
</section>

<!-- ============ Vue 脚本：初始化动画 ============ -->
<script setup>
import { onMounted, onUnmounted } from 'vue'

let cleanupFns = []

onMounted(() => {
  // 动态加载 GSAP（如果 config.head 未预加载）
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve()
        return
      }
      const script = document.createElement('script')
      script.src = src
      script.async = true
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  Promise.all([
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js')
  ]).then(() => {
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger)
      initAnimations()
    }
  }).catch(err => console.error('GSAP 加载失败:', err))
})

function initAnimations() {
  const { gsap, ScrollTrigger } = window
  if (!gsap || !ScrollTrigger) return

  // 导航栏滚动样式
  const handleScroll = () => {
    const nav = document.getElementById('navbar')
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('scrolled')
      else nav.classList.remove('scrolled')
    }
  }
  window.addEventListener('scroll', handleScroll)
  cleanupFns.push(() => window.removeEventListener('scroll', handleScroll))

  // 元素获取 + 空值判断
  const headline = document.getElementById('dynamicHeadline')
  const logo = document.getElementById('logoShowWrite')
  const phones = document.querySelectorAll('.phone')
  
  // 设置初始状态
  if (logo) gsap.set(logo, { opacity: 1, y: 0 })
  if (headline) gsap.set(headline, { opacity: 0, y: 300, letterSpacing: '0.5em' })
  if (phones.length) gsap.set(phones, { opacity: 0 })
  
  // 手机目标透明度
  const phoneTargets = {
    '#phoneCenter': 1,
    '#phoneLeft': 0.7,
    '#phoneRight': 0.7,
    '#phoneBack': 0.6
  }
  
  // 过渡动画时间线
  const tlTransition = gsap.timeline({
    scrollTrigger: {
      trigger: ".super-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 1.2,
      invalidateOnRefresh: true
    }
  })
  
  tlTransition.to(logo, { opacity: 0, y: -20, duration: 0.15, ease: "none" }, 0)
  
  tlTransition.to('#phoneCenter', { opacity: phoneTargets['#phoneCenter'], duration: 0.4, ease: "none" }, 0)
    .to('#phoneLeft', { opacity: phoneTargets['#phoneLeft'], duration: 0.4, ease: "none" }, 0)
    .to('#phoneRight', { opacity: phoneTargets['#phoneRight'], duration: 0.4, ease: "none" }, 0)
    .to('#phoneBack', { opacity: phoneTargets['#phoneBack'], duration: 0.4, ease: "none" }, 0)
  
  if (headline) {
    tlTransition.to(headline, { y: 0, opacity: 1, duration: 0.25, ease: "none" }, 0.3)
      .to(headline, { letterSpacing: '0px', duration: 0.25, ease: "none" }, 0.3)
      .to(headline, { y: -80, opacity: 0, letterSpacing: '1.2em', duration: 0.4, ease: "none" }, 0.6)
  }
  
  // 手机视差动画
  const tlPhones = gsap.timeline({
    scrollTrigger: {
      trigger: ".super-wrapper",
      start: "top top",
      end: "bottom top",
      scrub: 1.0
    }
  })
  tlPhones.fromTo("#phoneCenter", { scale: 1, y: 0 }, { scale: 1.25, y: -50, duration: 1 }, 0)
          .to("#phoneCenter", { scale: 0.95, y: 40, duration: 1 }, 1)
          .fromTo("#phoneLeft", { x: -280, scale: 0.8 }, { x: -380, scale: 0.5, duration: 1.2 }, 0.3)
          .fromTo("#phoneRight", { x: 280, scale: 0.8 }, { x: 380, scale: 0.5, duration: 1.2 }, 0.3)
          .fromTo("#phoneBack", { scale: 1.2 }, { scale: 1, duration: 1 }, 0.5)
  
  // 确保初始位置
  gsap.set("#phoneLeft", { x: -280, scale: 0.8 })
  gsap.set("#phoneRight", { x: 280, scale: 0.8 })
  gsap.set("#phoneCenter", { x: 0, scale: 1 })
  gsap.set("#phoneBack", { scale: 1.2 })
  
  // 其他模块滚动动画
  const fadeUp = (selector, trigger, start = "top 80%") => {
    gsap.utils.toArray(selector).forEach(el => {
      gsap.fromTo(el, { autoAlpha: 0, y: 50 }, {
        scrollTrigger: { trigger, start, toggleActions: "play none none reverse" },
        duration: 1, y: 0, autoAlpha: 1, ease: "power2.out"
      })
    })
  }
  
  fadeUp(".weather-section .fade-up", ".weather-section")
  fadeUp(".maml-section .fade-up", ".maml-section", "top 70%")
  fadeUp(".icon-card", ".icons-section", "top 75%")
  fadeUp(".vis-item", ".visual-grid", "top 80%")
  
  // 视频重播按钮
  const bindReplay = (videoId, btnId) => {
    const video = document.getElementById(videoId)
    const btn = document.getElementById(btnId)
    if (video && btn) {
      const handler = () => { video.currentTime = 0; video.play().catch(()=>{}) }
      btn.addEventListener('click', handler)
      cleanupFns.push(() => btn.removeEventListener('click', handler))
    }
  }
  bindReplay('weatherVideo', 'weatherReplay')
  bindReplay('deleteVideo', 'deleteReplay')
  bindReplay('systemVideo', 'systemReplay')
  
  // 自动播放视频
  document.querySelectorAll('video').forEach(vid => {
    vid.muted = true
    vid.play().catch(()=>{})
  })
  
  // 滑块控制
  const slider = document.getElementById('phoneSlider')
  const leftBtn = document.getElementById('scrollLeftBtn')
  const rightBtn = document.getElementById('scrollRightBtn')
  if (slider && leftBtn && rightBtn) {
    const scrollBy = (dir) => slider.scrollBy({ left: dir * 260, behavior: 'smooth' })
    leftBtn.addEventListener('click', () => scrollBy(-1))
    rightBtn.addEventListener('click', () => scrollBy(1))
    cleanupFns.push(() => {
      leftBtn.removeEventListener('click', () => scrollBy(-1))
      rightBtn.removeEventListener('click', () => scrollBy(1))
    })
  }
  
  // 标题动画
  gsap.fromTo(".plan-section .section-title", { autoAlpha: 0, y: 40 }, {
    scrollTrigger: { trigger: ".plan-section", start: "top 80%" },
    duration: 1, y: 0, autoAlpha: 1
  })
  
  // 刷新 ScrollTrigger
  ScrollTrigger.refresh()
}

// 组件卸载时清理副作用
onUnmounted(() => {
  cleanupFns.forEach(fn => fn())
  cleanupFns = []
  if (window.ScrollTrigger) {
    window.ScrollTrigger.getAll().forEach(t => t.kill())
  }
})
</script>

<!-- ============ 样式（scoped + 前缀限定） ============ -->
<style scoped>
/* 基础重置（仅限本页） */
.custom-home-page,
.custom-home-page * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.custom-home-page {
  font-family: 'Helvetica Neue', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background-color: #000;
  color: #fff;
  overflow-x: hidden;
}

/* 滚动条 */
.custom-home-page ::-webkit-scrollbar {
  width: 6px;
  background: #111;
}
.custom-home-page ::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 3px;
}

/* 导航栏 */
.custom-home-page .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 1.2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(0,0,0,0.5);
  transition: all 0.3s ease;
}
.custom-home-page .navbar.scrolled {
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(12px);
  padding: 0.8rem 3rem;
}
.custom-home-page .logo svg path {
  fill: white;
}
.custom-home-page .nav-links {
  display: flex;
  gap: 2rem;
}
.custom-home-page .nav-links a {
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.2s;
}
.custom-home-page .nav-links a:hover {
  color: white;
}

/* 超级壁纸区域 */
.custom-home-page .super-wrapper {
  height: 300vh;
  position: relative;
  background-color: #000;
}
.custom-home-page .super-pin {
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #000;
}
.custom-home-page .super-pin video {
  display: none;
}
.custom-home-page .super-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-home-page .phones-layer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-home-page .phone {
  position: absolute;
  width: 280px;
  will-change: transform;
  pointer-events: none;
  opacity: 0;
}
.custom-home-page .phone img {
  width: 100%;
  display: block;
  border-radius: 32px;
  box-shadow: 0 20px 35px rgba(0,0,0,0.5);
}
.custom-home-page .phone-center {
  width: 340px;
  z-index: 10;
}
.custom-home-page .phone-left {
  transform: translateX(-280px) scale(0.8);
  z-index: 5;
}
.custom-home-page .phone-right {
  transform: translateX(280px) scale(0.8);
  z-index: 5;
}
.custom-home-page .phone-back {
  transform: translateX(0px) scale(1.2);
  z-index: 2;
}

/* 标题区域 */
.custom-home-page .super-title {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  pointer-events: none;
  text-align: center;
}
.custom-home-page .logo-showwrite {
  font-size: 4.5rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #fff;
  text-shadow: 0 0 20px rgba(0,0,0,0.5);
  white-space: nowrap;
  opacity: 1;
  transform: translateY(0);
  transition: none;
  margin-top: -20vh;
}
.custom-home-page .main-headline {
  font-size: 4.5rem;
  font-weight: 400;
  letter-spacing: 0.5em;
  color: #fff;
  text-shadow: 0 0 20px rgba(0,0,0,0.5);
  white-space: nowrap;
  opacity: 0;
  transform: translateY(300px);
  will-change: transform, letter-spacing, opacity;
}

/* 响应式 */
@media (max-width: 800px) {
  .custom-home-page .navbar { padding: 1rem; }
  .custom-home-page .nav-links { display: none; }
  .custom-home-page .logo-showwrite,
  .custom-home-page .main-headline { 
    font-size: 2.5rem; 
    white-space: normal; 
    padding: 0 20px;
  }
  .custom-home-page .logo-showwrite { margin-top: -15vh; }
  .custom-home-page .main-headline {
    transform: translateY(200px);
    letter-spacing: 0.3em;
  }
  .custom-home-page .phone-center { width: 220px; }
  .custom-home-page .phone-left { transform: translateX(-180px) scale(0.7); }
  .custom-home-page .phone-right { transform: translateX(180px) scale(0.7); }
}

/* 其他模块 */
.custom-home-page .weather-section {
  background: #000;
  position: relative;
  min-height: 100vh;
}
.custom-home-page .weather-bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
  z-index: 0;
}
.custom-home-page .weather-content {
  position: relative;
  z-index: 2;
  padding: 15% 0;
  text-align: center;
}
.custom-home-page .weather-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.custom-home-page .section-desc {
  font-size: 1.1rem;
  color: #ccc;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}
.custom-home-page .replay-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(4px);
  padding: 8px 20px;
  border-radius: 40px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 30px;
  border: 1px solid rgba(255,255,255,0.3);
  transition: 0.2s;
}
.custom-home-page .replay-btn:hover {
  background: rgba(255,255,255,0.3);
}

.custom-home-page .maml-section {
  background: #000;
  padding: 100px 0;
}
.custom-home-page .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4%;
}
.custom-home-page .maml-grid {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
  justify-content: center;
}
.custom-home-page .maml-text {
  flex: 1;
  text-align: left;
}
.custom-home-page .maml-text h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: white;
}
.custom-home-page .maml-text p {
  color: #aaa;
  line-height: 1.7;
}
.custom-home-page .maml-img {
  flex: 1;
  text-align: center;
}
.custom-home-page .maml-img img {
  max-width: 100%;
  width: 400px;
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
}

.custom-home-page .icons-section {
  background: #030303;
  padding: 120px 0;
}
.custom-home-page .icon-cards {
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
}
.custom-home-page .icon-card {
  background: rgba(20,20,20,0.7);
  backdrop-filter: blur(8px);
  border-radius: 48px;
  padding: 30px;
  width: 480px;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
}
.custom-home-page .icon-video {
  width: 100%;
  border-radius: 32px;
  margin: 20px 0;
}
.custom-home-page .icon-card h3 {
  font-size: 1.8rem;
  margin-top: 20px;
}

.custom-home-page .visual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 60px;
}
.custom-home-page .vis-item {
  background: rgba(20,20,20,0.6);
  border-radius: 40px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(4px);
}
.custom-home-page .vis-video {
  width: 100%;
  border-radius: 28px;
  margin-bottom: 20px;
}

.custom-home-page .plan-section {
  background: #000;
  padding: 100px 0;
  text-align: center;
}
.custom-home-page .section-title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
.custom-home-page .phone-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 40px 0;
  scroll-behavior: smooth;
  scrollbar-width: thin;
}
.custom-home-page .phone-item {
  flex: 0 0 180px;
  text-align: center;
  background: rgba(30,30,30,0.6);
  border-radius: 32px;
  padding: 20px 10px;
  backdrop-filter: blur(5px);
}
.custom-home-page .phone-item img {
  width: 120px;
  margin-bottom: 12px;
  border-radius: 20px;
}
.custom-home-page .slider-controls {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
}
.custom-home-page .ctrl-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  font-size: 1.8rem;
  width: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;
}
.custom-home-page .footer-links {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}
.custom-home-page .footer-link-item a {
  color: #aaa;
  text-decoration: none;
}

@media (max-width: 800px) {
  .custom-home-page .visual-grid { grid-template-columns: 1fr; }
  .custom-home-page .icon-card { width: 90%; }
  .custom-home-page .section-title { font-size: 2.2rem; }
}
</style>
