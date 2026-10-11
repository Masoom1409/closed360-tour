(function(){
var WA='923132723988',FORM='https://docs.google.com/forms/d/e/1FAIpQLScCGGbphHk3xfAa6EflnnQdolOUhg2Cyta7kfWFp404xFambg/viewform?pli=1';
var DEF='Hi Closed 360, I want to reserve a free seat for the upcoming Demo Class at Karachi Campus.';
var wa=function(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t)};
function links(){
  document.querySelectorAll('[data-wa]').forEach(function(a){a.href=wa(a.getAttribute('data-wa')||DEF);a.target='_blank';a.rel='noopener'});
  document.querySelectorAll('[data-form]').forEach(function(a){a.href=FORM;a.target='_blank';a.rel='noopener'});
}
var m=document.createElement('div');m.id='demo-modal';m.className='modal';m.hidden=true;m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.setAttribute('aria-label','Reserve a free demo seat');
m.innerHTML='<div class="mb"><button class="btn x" type="button" aria-label="Close">✕</button><h2>Reserve your free demo seat</h2>'+
 '<p>Scan the QR code with your phone camera to open the registration form, or send us a WhatsApp message.</p>'+
 '<img class="qr" src="assets/signup-qr.png" alt="QR code for the Closed 360 registration form"><div class="cap">Scan with your phone camera to open the form</div>'+
 '<input id="dm-name" placeholder="Your name" aria-label="Your name" autocomplete="name"><input id="dm-phone" type="tel" placeholder="WhatsApp number" aria-label="WhatsApp number" autocomplete="tel">'+
 '<div class="row"><button class="btn gold" id="dm-send" type="button">Send on WhatsApp</button><a class="btn" data-form>Open registration form</a></div></div>';
document.body.appendChild(m);
function open_(){m.hidden=false;var i=document.getElementById('dm-name');if(i)setTimeout(function(){i.focus()},50)}
function close_(){m.hidden=true}
window.openDemo=open_;
m.addEventListener('click',function(e){if(e.target===m)close_()});
m.querySelector('.x').addEventListener('click',close_);
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){close_()}});
document.getElementById('dm-send').addEventListener('click',function(){
  var n=document.getElementById('dm-name').value.trim(),p=document.getElementById('dm-phone').value.trim(),b=this;
  if(!n||!p){b.textContent='Enter name and number';return}
  window.open(wa('Hello, my name is '+n+'. I want to reserve a free demo seat at Closed 360 Karachi. My number: '+p),'_blank');
});
document.addEventListener('click',function(e){var t=e.target.closest&&e.target.closest('[data-demo]');if(t){e.preventDefault();open_()}});
var nav=document.querySelector('.nav'),mb=document.querySelector('.menu-btn');
if(nav&&mb){mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)})}
var page=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.nav nav a').forEach(function(a){if(a.getAttribute('href')===page)a.setAttribute('aria-current','page')});
if(document.body.getAttribute('data-page')!=='tour'){var f=document.createElement('a');f.className='wa-float';f.setAttribute('data-wa','');f.textContent='WhatsApp';f.setAttribute('aria-label','Chat with us on WhatsApp');document.body.appendChild(f)}
links();
})();
