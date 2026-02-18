document.addEventListener("DOMContentLoaded", function() {
  // 找到所有带有 .scroll-reveal 类的元素
  const revealElements = document.querySelectorAll('.scroll-reveal');

  function updateScroll() {
    const windowHeight = window.innerHeight;
    const centerPoint = windowHeight / 2; // 屏幕中心线

    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + (rect.height / 2);
      
      // 计算元素距离屏幕中心的距离 (绝对值)
      const distanceFromCenter = Math.abs(centerPoint - elementCenter);
      
      // 计算“活跃度” (1 = 在中心, 0 = 远离中心 500px 以上)
      // 你可以调整 500 这个数值来控制敏感度
      let activeLevel = 1 - (distanceFromCenter / 500);
      
      // 限制在 0 到 1 之间
      if (activeLevel < 0) activeLevel = 0;
      if (activeLevel > 1) activeLevel = 1;

      // --- 效果 1: 透明度变化 (类似 trumprx.gov) ---
      // 最小透明度 0.1 (灰色), 最大 1 (黑色)
      const opacity = 0.1 + (0.9 * activeLevel);
      el.style.opacity = opacity;

      // --- 效果 2: 字重变化 (利用 Inter 可变字体) ---
      // 最小字重 200, 最大字重 700 (你可以根据喜好调整范围)
      // 如果不喜欢字重变化，可以注释掉下面这一行
      // const weight = 200 + (500 * activeLevel);
      // el.style.fontWeight = weight;
    });
  }

  // 监听滚动事件
  window.addEventListener('scroll', updateScroll);
  // 初始化一次
  updateScroll();
});