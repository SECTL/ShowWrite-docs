---
title: 团队
pageLayout: page
---

<TeamCard lang="zh-CN" />

<CardGrid class="container">
    <LinkCard title="开发者" href="https://github.com/wwcrdrvf6u">
        <div class="card-content">
            <img src="/avatar/wwcrdrvf6u.png" alt="wwcrdrvf6u" width="80" />
            <div class="text-content">
                <p class="name">wwcrdrvf6u</p>
                <p class="role">核心开发者</p>
            </div>
        </div>
    </LinkCard>
    <LinkCard title="组织者" href="https://github.com/lzy98276">
        <div class="card-content">
            <img src="/avatar/lzy.jpg" alt="lzy" width="80" />
            <div class="text-content">
                <p class="name rainbow-name" id="rainbow-name">黎泽懿 Aionflux</p>
                <p class="role">组织创始人</p>
            </div>
        </div>
    </LinkCard>
</CardGrid>

<VPComment class="comment" />

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import VPComment from '@theme/VPComment.vue'

let animationId = null;

// 速度控制：每帧色调变化量（越大越快）
const HUE_STEP = 1;

onMounted(() => {
  const el = document.getElementById('rainbow-name');
  if (!el) return;
  
  let hue = 0;
  
  function animate() {
    el.style.color = `hsl(${hue}, 100%, 50%)`;
    hue = (hue + HUE_STEP) % 360;
    animationId = requestAnimationFrame(animate);
  }
  
  animate();
});

onBeforeUnmount(() => {
  if (animationId) cancelAnimationFrame(animationId);
});
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  padding: 30px 0;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 15px;
}

.card-content img {
  border-radius: 50%;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name {
  font-size: 1.3em;
  font-weight: 600;
  margin: 0;
  transition: color 0.08s linear;
}

.rainbow-name {
  color: hsl(0, 100%, 50%);
}

.role {
  font-size: 1em;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin: 0;
}

.comment {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

@media (max-width: 768px) {
  .container, .comment {
    margin: 0 15px;
  }
}
</style>
