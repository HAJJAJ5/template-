(function(){
  var prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = [];
  function ensureImages(el){
    var imgs = el.querySelectorAll('.scroll-img');
    if (imgs.length >= 2) return { sky: imgs[0], earth: imgs[1] };
    var up = el.getAttribute('data-img-up');
    var down = el.getAttribute('data-img-down');
    if(!up || !down) return null;
    var sky = document.createElement('img'); sky.className = 'scroll-img'; sky.alt = 'Sky image'; sky.src = up;
    var earth = document.createElement('img'); earth.className = 'scroll-img'; earth.alt = 'Earth image'; earth.src = down;
    el.appendChild(sky); el.appendChild(earth);
    return { sky: sky, earth: earth };
  }
  document.querySelectorAll('[data-scroll-swap]').forEach(function(el){
    el.style.position = el.style.position || 'relative';
    var pair = ensureImages(el); if(!pair) return;
    items.push({ el: el, sky: pair.sky, earth: pair.earth, mix: 0, target: 0 });
    pair.sky.style.opacity = '1'; pair.earth.style.opacity = '0';
  });
  var ticking = false; var lastY = window.scrollY;
  function setStyles(it){
    var eOpacity = it.mix;
    var sOpacity = 1 - it.mix;
    it.earth.style.opacity = eOpacity.toFixed(3);
    it.sky.style.opacity = sOpacity.toFixed(3);
    it.earth.style.transform = 'translateY(' + (-it.mix*30) + 'px) scale(' + (1 + it.mix*0.02).toFixed(3) + ')';
    it.sky.style.transform = 'translateY(' + ((1-it.mix)*30) + 'px) scale(' + (1 + (1-it.mix)*0.02).toFixed(3) + ')';
  }
  function update(){
    ticking = false;
    items.forEach(function(it){
      if (prefersReduce) { it.mix = it.target > 0.5 ? 1 : 0; }
      else { it.mix += (it.target - it.mix) * 0.2; }
      setStyles(it);
    });
  }
  function schedule(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
  function onScroll(){
    var y = window.scrollY; var dy = y - lastY; lastY = y;
    items.forEach(function(it){
      if (dy > 0) { it.target = Math.min(1, it.target + Math.min(0.25, Math.abs(dy)/300)); }
      else if (dy < 0) { it.target = Math.max(0, it.target - Math.min(0.25, Math.abs(dy)/300)); }
    });
    schedule();
  }
  function onWheel(e){ var dy = e.deltaY || 0; onDelta(dy, 600); }
  function onTouchMove(e){
    if (!e.touches || e.touches.length < 1) return;
    var y = e.touches[0].clientY;
    var last = onTouchMove._lastY == null ? y : onTouchMove._lastY;
    var dy = y - last; onTouchMove._lastY = y;
    onDelta(-dy, 300);
  }
  function onDelta(dy, denom){
    items.forEach(function(it){
      if (dy > 0) { it.target = Math.min(1, it.target + Math.min(0.25, Math.abs(dy)/denom)); }
      else if (dy < 0) { it.target = Math.max(0, it.target - Math.min(0.25, Math.abs(dy)/denom)); }
    });
    schedule();
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('wheel', onWheel, {passive:true});
  window.addEventListener('touchmove', onTouchMove, {passive:true});
  items.forEach(setStyles);
})();
