/**
 *  适配js，百分比为100
 * 
 * 
 * * */
if (location.href.indexOf('t=') < 0) {
    if(location.href.match(/\?/)) {
      location.replace(location.href + '&t=' + new Date().valueOf())
    }else{
      location.replace(location.href + '?t=' + new Date().valueOf())
    }
  }
  window.lib = {};
  const win = window
  const doc = win.document;
  const docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  const flexibleEl = doc.querySelector('meta[name="flexible"]');
  let dpr = 0;
  let scale = 0;
  let tid;
  let flexible = lib.flexible || (lib.flexible = {});
  if (metaEl) {
    console.warn('??????meta?????????');
    const match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  } else if (flexibleEl) {
    const content = flexibleEl.getAttribute('content');
    if (content) {
      const initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
      const maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  if (!dpr && !scale) {
    const isAndroid = win.navigator.appVersion.match(/android/gi);
    const isIPhone = win.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = win.devicePixelRatio;
    if (isIPhone) {
      // iOS????2?3????2?????????1???
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // ??????????1????
      dpr = 1;
    }
    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr);
  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      const wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  function refreshRem(){
    let width = docEl.getBoundingClientRect().width;
    if (width / dpr > 720) {
      width = 720 * dpr;
    }
    const rem = 100 * (width / 750);
    flexible.rem = win.rem = rem;
    docEl.style.fontSize = rem + 'px';
    const computed = window.getComputedStyle(docEl);
    const htmLSize = parseFloat(computed.getPropertyValue( 'fontSize' ) || computed.fontSize);
    if (htmLSize != rem) {
      const newRem    = rem * rem / htmLSize;
      docEl.style.fontSize = newRem + 'px';
    }
  }

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function(e) {
      doc.body.style.fontSize = 12 * dpr + 'px';
    }, false);
  }


  refreshRem();

  flexible.dpr = win.dpr = dpr;
  flexible.refreshRem = refreshRem;
  flexible.rem2px = function(d) {
    let val = parseFloat(d) * this.rem;
    if (typeof d === 'string' && d.match(/rem$/)) {
      val += 'px';
    }
    return val;
  }
  flexible.px2rem = function(d) {
    let val = parseFloat(d) / this.rem;
    if (typeof d === 'string' && d.match(/px$/)) {
      val += 'rem';
    }
    return val;
  }