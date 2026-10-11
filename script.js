/* =========================================================
   CONFIGURACIÓN — aquí cambias lo importante
   ========================================================= */
const START_DATE = new Date(2026, 8, 7, 0, 0, 0);      // 07 · 09 · 2026 (año, mes-1, día, hora, min, seg)
const PHOTOS = [                                         // fotos en la carpeta "fotos/" (déjalo vacío [] si aún no las tienes)
  'fotos/recuerdo1.jpeg','fotos/recuerdo2.png', 'fotos/recuerdo3.png', 'fotos/recuerdo4.jpeg', 'fotos/recuerdo5.png', 'fotos/recuerdo6.jpeg'
];

const SONGS = [
  'musica/cancion1.mp3',
  'musica/cancion2.mp3',
  'musica/cancion3.mp3',
  'musica/cancion4.mp3',
  'musica/cancion5.mp3',
  'musica/cancion6.mp3',
  'musica/cancion7.mp3',
  'musica/cancion8.mp3',
  'musica/cancion9.mp3',
  'musica/cancion10.mp3'
];

const REASONS = [
  { name: '😊 Tu sonrisa',    text: 'Amo tu sonrisa, porque tiene esa forma tan tuya de volver bonito un día cualquiera. 🌞💗' },
  { name: '🌷 Tu forma de ser', text: 'Amo tu manera de hablar, tus ocurrencias y esas cosas tuyas que no cambiaría por nada. 🥰' },
  { name: '✨ Tu magia',      text: 'Amo cómo puedes aparecer en mis pensamientos de repente y hacerme sonreír sin darte cuenta. 🪄💫' },
  { name: '🫂 Tus abrazos',   text: 'Amo tus abrazos, porque en ellos quisiera quedarme un ratito más. 🤗💞' },
  { name: '🎁 Tus detalles',  text: 'Amo tus detalles, incluso esos que quizá tú consideras pequeños y yo guardo con mucho cariño. 🥹' },
  { name: '🎶 Tu voz',        text: 'Amo tu voz, porque a veces basta con escucharla para que todo dentro de mí se acomode. 🎧💗' },
  { name: '🏡 Mi lugar',      text: 'Amo cómo, a tu lado, me siento en casa, incluso cuando solamente estamos platicando de cualquier cosa. 🏠💞' },
  { name: '💗 Que seas tú',   text: 'Y amo que seas tú. No una versión perfecta, sino tú, con todo eso que te hace única. 🌸✨' }
];

const ENVELOPES = [
  { when: '🌧️ estés triste', title: '🌧️ Para cuando te duela el día',
    text: 'Respira conmigo, mi niña. Lo que hoy pesa no te define, y no tienes que poder con todo tú sola. Aquí hay alguien que te quiere en tus días brillantes y también en los que no lo son tanto. Cierra los ojitos, imagina mi abrazo… y recuerda que mañana el cielo vuelve a tener estrellas. 🌙✨🤍' },
  { when: '😴 no puedas dormir', title: '🌙 Para las noches largas',
    text: 'Si la noche se quedó despierta contigo, mira por la ventana: la misma luna que ves tú la estoy mirando yo. Piensa en algo bonito (puedes pensar en mí, no me enojo), y deja que el silencio te arrulle. Dulces sueños, mi princesa. Yo cuido tus pensamientos desde aquí. 🌛💤💗' },
  { when: '🥺 me extrañes', title: '🥺 Para cuando me extrañes',
    text: 'Extrañar también es una forma de querer, y yo lo sé muy bien, porque te extraño incluso en los ratos más simples. Si hoy me necesitas cerquita, ponte nuestra canción, abraza fuerte algo suave y piensa que mi cariño llega hasta ti de todas formas. Pronto toca abrazo de verdad. 🫂💞' },
  { when: '👑 dudes de lo valiosa que eres', title: '👑 Para recordarte quién eres',
    text: 'Mi niña, si algún día se te olvida lo valiosa que eres, vuelve a leer esto: eres bonita por fuera, pero más por dentro; tu forma de querer, de reír y de ser te hace única. No necesitas ser perfecta para ser increíble para mí. Eres exactamente la persona que mi corazón eligió. 👑💗' }
];

ENVELOPES.push(
  { when: '🥳 estés feliz', title: '🌞 Para tus días brillantes',
    text: 'Si estás leyendo esto con una sonrisa, ya me hiciste el día. Ojalá guardes este momento bien dentro del corazón. Quiero que sepas que me alegra tu alegría como si fuera mía, y que ver feliz a mi niña es una de las cosas más bonitas que existen. Celébralo, presúmelo, y cuéntamelo todo. 🎉🥰' },
  { when: '🫶 tengas miedo', title: '🫶 Para cuando el miedo toque la puerta',
    text: 'No tienes que ser valiente todo el tiempo, mi vida. Está bien temblar un poquito, está bien no saber. Lo que sí sé es que eres más fuerte de lo que crees, y que no tienes que atravesarlo sola. Respira hondo, apóyate en mí y recuerda: lo que hoy parece enorme, juntos lo hacemos pequeño. 🛡️💞' }
);

const MORE_REASONS = [
  'Porque contigo hasta lo más simple se siente especial.',
  'Porque tu risa tiene el poder de arreglarme el día entero.',
  'Porque me haces sentir en casa, incluso a la distancia.',
  'Porque eres hermosa de una forma que no se explica, solo se siente.',
  'Porque sabes escuchar con el corazón.',
  'Porque contigo puedo ser yo, sin miedo y sin máscaras.',
  'Porque tus abrazos arreglan lo que las palabras no pueden.',
  'Porque hasta tus ocurrencias más tontas me parecen un tesoro.',
  'Porque me haces querer ser una mejor persona.',
  'Porque cuando hablas de lo que te apasiona, brillas.',
  'Porque tu cariño es sincero y se nota en los detalles.',
  'Porque eres mi pensamiento favorito antes de dormir.',
  'Porque contigo el silencio también es bonito.',
  'Porque tu forma de querer es suave, pero se queda para siempre.',
  'Porque me das ganas de cuidarte todos los días.',
  'Porque tu nombre me hace sonreír antes de que lo piense.',
  'Porque eres fuerte, incluso cuando crees que no lo eres.',
  'Porque me enseñaste que lo bonito puede ser tranquilo.',
  'Porque me haces sentir afortunado sin que tengas que hacer nada.',
  'Porque aun en tus días difíciles, sigues siendo luz.',
  'Porque imaginarte a mi lado me llena de paz.',
  'Porque eres de esas personas que se quedan en el alma.',
  'Porque tu sonrisa cambia el clima de mi corazón.',
  'Porque contigo hasta esperar es bonito.',
  'Porque cada mensaje tuyo se siente como un regalo.',
  'Porque eres tierna sin dejar de ser fuerte.',
  'Porque mi corazón te reconoció antes de que yo lo entendiera.',
  'Porque quiero compartirte todos mis días, hasta los aburridos.',
  'Porque eres mi niña, mi princesa, mi vida.',
  'Porque, simplemente, eres tú. Y yo te elijo.'
];

const REASON_EMOJIS = ['💗','🌙','✨','🥹','🌷','💫','🫶','🤍','🌸','💞','🥰','🌟'];
MORE_REASONS.forEach((t, i) => { MORE_REASONS[i] = t + ' ' + REASON_EMOJIS[i % REASON_EMOJIS.length]; });

const WISH_REPLIES = [
  'Deseo pedido. Yo ya sé cuál fue el mío: seguir coincidiendo contigo. 🌠💗',
  'Una estrella fugaz te escuchó. Dicen que si es un deseo bonito, se cumple… y el tuyo seguro lo es. 🌟🤞',
  'Guárdalo en secreto, mi niña. Yo me encargo de ayudarle al universo a cumplirlo. 🤫🌌💞'
];

/* =========================================================
   Utilidades
   ========================================================= */
const $ = (id) => document.getElementById(id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function spawnHearts(n = 18) {
  for (let i = 0; i < n; i++) {
    const h = document.createElement('span');
    h.className = 'float-heart';
    h.textContent = ['💗', '💖', '✨', '🌸', '💞', '⭐', '🥰'][Math.floor(Math.random() * 7)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.color = ['#f3a9e8', '#fff0fb', '#c9a0ff'][Math.floor(Math.random() * 3)];
    h.style.fontSize = (18 + Math.random() * 24) + 'px';
    document.body.appendChild(h);
    requestAnimationFrame(() => {
      h.style.transform = `translateY(-${window.innerHeight + 80}px) rotate(${Math.random() * 100 - 50}deg)`;
      h.style.opacity = '0';
    });
    setTimeout(() => h.remove(), 3400);
  }
}

function shootingStar() {
  const s = document.createElement('span');
  s.className = 'shooting';
  s.style.left = (Math.random() * 40) + 'vw';
  s.style.top = (5 + Math.random() * 25) + 'vh';
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 1700);
}

/* =========================================================
   Cielo estrellado (canvas)
   ========================================================= */
(function sky() {
  const c = $('sky'), ctx = c.getContext('2d');
  let w, h, stars = [], dpr = Math.min(window.devicePixelRatio || 1, 2), shoot = null, nextShoot = 6000;

  function resize() {
    w = window.innerWidth; h = window.innerHeight;
    c.width = w * dpr; c.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round((w * h) / 5500);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + .3, p: Math.random() * 6.28, v: .4 + Math.random() * 1.2,
      pink: Math.random() < .22
    }));
    draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const a = reduceMotion ? .7 : .35 + .65 * Math.abs(Math.sin(t / 1000 * s.v + s.p));
      ctx.globalAlpha = a;
      ctx.fillStyle = s.pink ? '#f3a9e8' : '#ffffff';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 6.283); ctx.fill();
    }
    if (shoot) {
      const k = (t - shoot.t0) / 900;
      if (k >= 1) shoot = null;
      else {
        const x = shoot.x + k * 320, y = shoot.y + k * 170;
        const g = ctx.createLinearGradient(x, y, x - 120, y - 64);
        g.addColorStop(0, 'rgba(255,240,251,' + (1 - k) + ')'); g.addColorStop(1, 'rgba(255,240,251,0)');
        ctx.globalAlpha = 1; ctx.strokeStyle = g; ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 120, y - 64); ctx.stroke();
      }
    }
    ctx.globalAlpha = 1;
  }

  function loop(t) {
    if (t > nextShoot && !shoot && document.body.classList.contains('lit')) {
      shoot = { x: Math.random() * w * .6, y: Math.random() * h * .4, t0: t };
      nextShoot = t + 9000 + Math.random() * 9000;
    }
    draw(t);
    requestAnimationFrame(loop);
  }
  window.addEventListener('resize', resize);
  resize();
  if (!reduceMotion) requestAnimationFrame(loop);
})();

/* =========================================================
   Puerta (la luna) + navegación
   ========================================================= */
const audio = $('audio'), musicFile = $('musicFile'), musicToggle = $('musicToggle'), musicStatus = $('musicStatus');
let musicLoaded = false;


let currentSongIndex = 0;

if (SONGS.length > 0) {
  audio.src = SONGS[currentSongIndex];
  musicLoaded = true;
  musicStatus.textContent = 'Canción 1 de 10 💗';
}

$('gateMoon').addEventListener('click', () => {
  $('gate').classList.add('open');
  document.body.classList.add('lit');
  setTimeout(() => document.body.classList.remove('locked'), 1400);
  if (musicLoaded) audio.play().then(() => musicToggle.textContent = 'Ⅱ').catch(() => {});
});

const nav = $('nav'), menuBtn = $('menuBtn');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
$('enterBtn').addEventListener('click', () => $('mi-nina').scrollIntoView({ behavior: 'smooth' }));

/* =========================================================
   Contador
   ========================================================= */
function tick() {
  let diff = Math.max(0, Date.now() - START_DATE.getTime());
  const s = Math.floor(diff / 1000);
  $('cDias').textContent = Math.floor(s / 86400);
  $('cHoras').textContent = Math.floor(s % 86400 / 3600);
  $('cMin').textContent = Math.floor(s % 3600 / 60);
  $('cSeg').textContent = s % 60;
}
tick(); setInterval(tick, 1000);

/* =========================================================
   Cartas que aparecen línea a línea
   ========================================================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.querySelectorAll('p').forEach((p, i) => setTimeout(() => p.classList.add('in'), i * 450));
    io.unobserve(e.target);
  });
}, { threshold: .15 });
document.querySelectorAll('.reveal-lines').forEach(el => io.observe(el));

/* =========================================================
   Polaroids
   ========================================================= */
document.querySelectorAll('.polaroid').forEach((fig, i) => {
  const slot = fig.querySelector('.photo-slot'), input = fig.querySelector('input');
  const setImg = (src) => {
    slot.innerHTML = '';
    const img = new Image(); img.src = src; img.alt = 'Foto de nosotros';
    slot.appendChild(img);
  };
  if (PHOTOS[i]) { setImg(PHOTOS[i]); slot.style.cursor = 'default'; slot.addEventListener('click', e => e.preventDefault()); }
  else input.addEventListener('change', () => { if (input.files[0]) setImg(URL.createObjectURL(input.files[0])); });
});

/* =========================================================
   Constelación en forma de corazón
   ========================================================= */
(function constellation() {
  const NS = 'http://www.w3.org/2000/svg', svg = $('skyHeart'), box = $('constellation');
  const N = REASONS.length, lit = new Array(N).fill(false), msg = $('revealMessage');
  const pt = (t) => {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return [200 + x * 11.5, 185 - y * 11];
  };
  const path = (a, b, steps) => {
    let d = '';
    for (let i = 0; i <= steps; i++) {
      const [x, y] = pt(a + (b - a) * i / steps);
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    return d;
  };
  const el = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e); return e;
  };
  const step = (2 * Math.PI) / N, t0 = Math.PI;

  el('path', { d: path(t0, t0 + 2 * Math.PI, 160) + 'Z', class: 'heart-fill' });
  el('path', { d: path(t0, t0 + 2 * Math.PI, 160), class: 'guide' });
  const segs = [];
  for (let k = 0; k < N; k++) segs.push(el('path', { d: path(t0 + k * step, t0 + (k + 1) * step, 18), class: 'seg', pathLength: 1 }));

  const stars = REASONS.map((r, k) => {
    const [x, y] = pt(t0 + k * step);
    const g = el('g', { class: 'star', transform: `translate(${x.toFixed(1)} ${y.toFixed(1)})`, tabindex: 0, role: 'button', 'aria-label': r.name });
    el('circle', { class: 'halo', r: 16 }, g);
    el('path', { class: 'core', d: 'M0,-10 L2.4,-2.4 L10,0 L2.4,2.4 L0,10 L-2.4,2.4 L-10,0 L-2.4,-2.4Z' }, g);
    el('circle', { class: 'hit', r: 26 }, g);
    const dx = x - 200, dy = y - 185, len = Math.hypot(dx, dy) || 1;
    const t = el('text', { class: 'name', x: (dx / len * 30).toFixed(1), y: (dy / len * 30 + 5).toFixed(1) }, g);
    t.textContent = r.name;
    const act = () => light(k);
    g.addEventListener('click', act);
    g.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
    return g;
  });

  function light(k) {
    lit[k] = true;
    stars.forEach((s, i) => { s.classList.toggle('lit', lit[i]); s.classList.toggle('current', i === k); });
    segs.forEach((s, i) => s.classList.toggle('on', lit[i] && lit[(i + 1) % N]));
    const count = lit.filter(Boolean).length;
    $('progress').textContent = count + ' de ' + N + ' estrellas';
    msg.textContent = REASONS[k].text;
    msg.classList.remove('final');
    if (count === N) {
      box.classList.add('complete');
      setTimeout(() => {
        msg.textContent = 'Ocho estrellas, mi niña, y todavía me faltan palabras. Eso también eres tú: más de lo que cabe en todo un cielo. 🌌💗🥹';
        msg.classList.add('final');
        spawnHearts(24); shootingStar();
      }, 2600);
    }
  }
})();

/* =========================================================
   Sobres "Ábreme cuando…" + modal
   ========================================================= */
const modal = $('modal');
function openModal(title, text) {
  $('modalTitle').textContent = title;
  $('modalText').textContent = text;
  modal.classList.add('show');
  $('closeModal').focus();
}
function closeModal() { modal.classList.remove('show'); }
$('closeModal').addEventListener('click', closeModal);
$('modalContinue').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

ENVELOPES.forEach(env => {
  const b = document.createElement('button');
  b.className = 'envelope';
  b.innerHTML = '<span class="seal">♥</span><small>ábreme cuando</small><strong></strong>';
  b.querySelector('strong').textContent = env.when;
  b.addEventListener('click', () => { b.classList.add('opened'); openModal(env.title, env.text); });
  $('envelopes').appendChild(b);
});

/* =========================================================
   Deseo y abrazo
   ========================================================= */
let wishN = 0;
$('wishBtn').addEventListener('click', () => {
  shootingStar();
  setTimeout(() => { $('finalMessage').textContent = WISH_REPLIES[wishN++ % WISH_REPLIES.length]; }, 700);
});
$('hugBtn').addEventListener('click', () => {
  $('finalMessage').textContent = 'Cierra los ojitos un segundo, mi niña… imagina que tu niño te está dando el abrazo más bonito del mundo. 🫂💗';
  spawnHearts(18);
});

/* =========================================================
   Música
   ========================================================= */

/* =========================================================
   Música — lista de 10 canciones
   ========================================================= */

const prevButton = document.createElement('button');
prevButton.textContent = '⏮';
prevButton.title = 'Canción anterior';
prevButton.setAttribute('aria-label', 'Canción anterior');

const nextButton = document.createElement('button');
nextButton.textContent = '⏭';
nextButton.title = 'Canción siguiente';
nextButton.setAttribute('aria-label', 'Canción siguiente');

// Agregar los botones junto al botón de reproducir
musicToggle.insertAdjacentElement('beforebegin', prevButton);
musicToggle.insertAdjacentElement('afterend', nextButton);


function loadSong(index, playNow = false) {
  // No pasar de la primera ni de la última canción
  if (index < 0 || index >= SONGS.length) {
    return;
  }

  currentSongIndex = index;
  audio.src = SONGS[currentSongIndex];
  musicLoaded = true;

  musicStatus.textContent =
    'Canción ' + (currentSongIndex + 1) +
    ' de ' + SONGS.length + ' 💗';

  if (playNow) {
    audio.play()
      .then(() => {
        musicToggle.textContent = 'Ⅱ';
      })
      .catch(() => {
        musicToggle.textContent = '♫';
        musicStatus.textContent =
          'Pulsa reproducir para escuchar la canción 💗';
      });
  } else {
    musicToggle.textContent = '♫';
  }
}

prevButton.addEventListener('click', () => {
  loadSong(currentSongIndex - 1, true);
});

nextButton.addEventListener('click', () => {
  loadSong(currentSongIndex + 1, true);
});

musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play()
      .then(() => musicToggle.textContent = 'Ⅱ')
      .catch(() => {
        musicStatus.textContent =
          'No se pudo reproducir. Revisa el archivo de música.';
      });
  } else {
    audio.pause();
    musicToggle.textContent = '♫';
  }
});



audio.loop = false;

audio.addEventListener('ended', function () {
  console.log('La canción terminó:', currentSongIndex + 1);

  if (currentSongIndex < SONGS.length - 1) {
    loadSong(currentSongIndex + 1, false);

    audio.play()
      .then(() => {
        musicToggle.textContent = 'Ⅱ';
      })
      .catch((error) => {
        console.error('Error al reproducir la siguiente:', error);
        musicStatus.textContent =
          'Pulsa reproducir para continuar con nuestra música 💗';
        musicToggle.textContent = '♫';
      });
  } else {
    musicToggle.textContent = '♫';
    musicStatus.textContent =
      'Terminó nuestra playlist, mi niña 💗🌙';
  }
});

// Permitir elegir otra canción desde la computadora
musicFile.addEventListener('change', () => {
  const file = musicFile.files[0];

  if (!file) return;

  audio.src = URL.createObjectURL(file);
  musicLoaded = true;
  musicStatus.textContent = file.name;

  audio.play()
    .then(() => musicToggle.textContent = 'Ⅱ')
    .catch(() => musicToggle.textContent = '♫');
});


/* =========================================================
   Frases grandes que aparecen al bajar
   ========================================================= */
const ioS = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ioS.unobserve(e.target); } });
}, { threshold: .55 });
document.querySelectorAll('.statement').forEach(el => ioS.observe(el));

/* =========================================================
   Razones (una por toque, sin repetir)
   ========================================================= */
(function reasons() {
  const text = $('reasonText'), count = $('reasonCount'), btn = $('reasonBtn');
  let pool = [], shown = 0;
  const refill = () => { pool = MORE_REASONS.map((_, i) => i).sort(() => Math.random() - .5); };
  refill();
  btn.addEventListener('click', () => {
    if (!pool.length) { refill(); shown = 0; }
    const idx = pool.pop(); shown++;
    text.classList.add('swap');
    setTimeout(() => {
      text.textContent = MORE_REASONS[idx];
      text.classList.remove('swap');
      count.textContent = shown + ' de ' + MORE_REASONS.length + ' descubiertas';
      if (shown === MORE_REASONS.length) { count.textContent = 'Las 30… y aún me quedan más guardadas, mi niña 🥹💗'; btn.textContent = 'Volver a empezar 💗'; spawnHearts(16); }
    }, 350);
  });
})();
