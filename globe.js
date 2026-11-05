(function () {
  var cv = document.getElementById('globe');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d');
  var cs = getComputedStyle(document.documentElement);
  var accent = cs.getPropertyValue('--color-accent').trim();
  var soft = cs.getPropertyValue('--color-rule-2').trim();
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var N = 260, pts = [], i, S, dpr, R;
  for (i = 0; i < N; i++) {
    var y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = i * 2.399963;
    pts.push([Math.cos(t) * r, y, Math.sin(t) * r]);
  }
  function ring(tx, tz) {
    var a = [], k;
    for (k = 0; k <= 72; k++) {
      var u = (k / 72) * Math.PI * 2, x = Math.cos(u), z = Math.sin(u);
      a.push([x, z * Math.sin(tx), z * Math.cos(tx) + 0 * tz]);
    }
    return a;
  }
  var rings = [ring(0.5), ring(1.2), ring(2.1)];
  var ry = 0, rx = 0.35, tx = 0.35, ty = 0, vis = true, raf = 0;

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = cv.clientWidth, h = cv.clientHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    S = Math.min(w, h); R = S * 0.47;
  }
  function proj(p) {
    var cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
    var x = p[0] * cy + p[2] * sy, z = -p[0] * sy + p[2] * cy, y = p[1];
    var y2 = y * cx - z * sx, z2 = y * sx + z * cx;
    var k = 1 / (1 - z2 * 0.28);
    return [cv.clientWidth / 2 + x * R * k, cv.clientHeight / 2 + y2 * R * k, z2];
  }
  function draw() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cv.clientWidth, cv.clientHeight);
    ctx.lineWidth = 1; ctx.strokeStyle = soft; ctx.globalAlpha = 0.8;
    rings.forEach(function (rg) {
      ctx.beginPath();
      rg.forEach(function (p, j) { var q = proj(p); j ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]); });
      ctx.stroke();
    });
    ctx.fillStyle = accent;
    pts.forEach(function (p) {
      var q = proj(p), d = (q[2] + 1) / 2;
      ctx.globalAlpha = 0.15 + d * 0.8;
      ctx.beginPath(); ctx.arc(q[0], q[1], 1 + d * 2, 0, 6.2832); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }
  function frame() {
    ry += 0.0035; rx += (tx - rx) * 0.05; ry += ty * 0.002;
    draw();
    raf = vis ? requestAnimationFrame(frame) : 0;
  }
  size(); draw();
  window.addEventListener('resize', function () { size(); draw(); });
  if (reduce) return;
  var stage = cv.parentNode;
  stage.addEventListener('pointermove', function (e) {
    var b = stage.getBoundingClientRect();
    var nx = (e.clientX - b.left) / b.width - 0.5, ny = (e.clientY - b.top) / b.height - 0.5;
    tx = 0.35 + ny * 0.9; ty = nx;
  });
  stage.addEventListener('pointerleave', function () { tx = 0.35; ty = 0; });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (es) {
      vis = es[0].isIntersecting;
      if (vis && !raf) raf = requestAnimationFrame(frame);
    }).observe(cv);
  }
  raf = requestAnimationFrame(frame);
})();
