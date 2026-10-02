(function(){
  'use strict';

  const TIMEOUT_MS=7000;
  const loading=document.getElementById('loading');
  const gate=document.getElementById('gate');
  const timer=setTimeout(function(){
    if(window.__LEXDEN_BOOT_OK__) return;
    if(loading) loading.classList.add('hidden');
    if(gate){
      gate.classList.remove('hidden');
      gate.innerHTML='<div class="card gate-card">' +
        '<div class="eyebrow">LEXDEN ACADEMY</div>' +
        '<h2>Assessment could not finish loading</h2>' +
        '<p>The page loaded, but the assessment application did not initialize.</p>' +
        '<div class="callout">Refresh once. If the problem remains, report diagnostic code <strong>LEXDEN-CLIENT-BOOT-TIMEOUT</strong> to the teacher. Do not submit student work until the assessment loads normally.</div>' +
        '<div class="small code boot-code">Diagnostic: LEXDEN-CLIENT-BOOT-TIMEOUT</div>' +
        '</div>';
    }
  },TIMEOUT_MS);

  window.__LEXDEN_BOOT_MARK_OK__=function(){
    window.__LEXDEN_BOOT_OK__=true;
    clearTimeout(timer);
  };
})();
