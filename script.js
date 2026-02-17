const video = document.getElementById("player");
const btn = document.getElementById("cambiar");

const canales = [

"https://files.catbox.moe/1u2sdo.mp4",
"https://files.catbox.moe/q20qnr.mp4",
"https://files.catbox.moe/v88mo6.mp4",
"https://files.catbox.moe/adxbdb.mp4",
"https://files.catbox.moe/wt5oki.mp4",
"https://files.catbox.moe/gi0k7r.mp4",
"https://files.catbox.moe/74n5nj.mp4",
"https://files.catbox.moe/rp53jv.mp4",
"https://files.catbox.moe/awf609.mp4",
"https://files.catbox.moe/jsaag3.mp4",
"https://files.catbox.moe/znmyjj.mp4",
"https://files.catbox.moe/e9e4f8.mp4",
"https://files.catbox.moe/oxjk3y.mp4",
"https://files.catbox.moe/cu92a9.mp4",
"https://files.catbox.moe/hm0vu5.mp4",
"https://files.catbox.moe/dr90l0.mp4",
"https://files.catbox.moe/15an4h.mp4",
"https://files.catbox.moe/jwfxr0.mp4",
"https://files.catbox.moe/umxcnp.mp4",
"https://files.catbox.moe/xkfmgy.mp4",

"https://files.catbox.moe/q9t4m2.mp4",
"https://files.catbox.moe/rkvi8b.mp4",
"https://files.catbox.moe/9k8gy0.mp4",
"https://files.catbox.moe/4ouwdx.mp4",
"https://files.catbox.moe/7l7v6a.mp4",
"https://files.catbox.moe/pc5p1m.mp4",
"https://files.catbox.moe/l20hze.mp4",
"https://files.catbox.moe/j01hv3.mp4",
"https://files.catbox.moe/tmo314.mp4",
"https://files.catbox.moe/vynv3a.mp4",
"https://files.catbox.moe/jr5a3i.mp4",
"https://files.catbox.moe/tex5wj.mp4",
"https://files.catbox.moe/lh2n79.mp4",
"https://files.catbox.moe/6pvgmq.mp4",
"https://files.catbox.moe/flar2h.mp4",
"https://files.catbox.moe/hyaxhf.mp4",
"https://files.catbox.moe/7jazc2.mp4",
"https://files.catbox.moe/y7mfvh.mp4",
"https://files.catbox.moe/z0rkua.mp4",
"https://files.catbox.moe/3s2mgr.mp4",
"https://files.catbox.moe/crexzs.mp4",

"https://files.catbox.moe/jdmsvh.mp4",
"https://files.catbox.moe/g0ohtw.mp4",
"https://files.catbox.moe/03irny.mp4",
"https://files.catbox.moe/md1wt7.mp4",
"https://files.catbox.moe/8leey8.mp4",
"https://files.catbox.moe/2ta98a.mp4",
"https://files.catbox.moe/8ubop4.mp4",
"https://files.catbox.moe/8uvs8e.mp4",
"https://files.catbox.moe/pg0qk6.mp4",
"https://files.catbox.moe/4eo5r6.mp4",
"https://files.catbox.moe/2xqadp.mp4",
"https://files.catbox.moe/ech8fh.mp4",
"https://files.catbox.moe/cn7s7e.mp4",

"https://files.catbox.moe/x3vinp.mp4",
"https://files.catbox.moe/fyygwn.mp4",
"https://files.catbox.moe/cs90d6.mp4",
"https://files.catbox.moe/svjhz9.mp4",
"https://files.catbox.moe/iyyasu.mp4",
"https://files.catbox.moe/13wbpa.mp4",
"https://files.catbox.moe/szxe18.mp4",
"https://files.catbox.moe/q3bhzh.mp4",
"https://files.catbox.moe/va58oo.mp4",
"https://files.catbox.moe/92k4fy.mp4",
"https://files.catbox.moe/3sa5m8.mp4",
"https://files.catbox.moe/n4z055.mp4",
"https://files.catbox.moe/3nvkub.mp4",
"https://files.catbox.moe/ca46s9.mp4",
"https://files.catbox.moe/uzumtw.mp4",
"https://files.catbox.moe/tdgess.mp4",
"https://files.catbox.moe/4oz4mq.mp4",
"https://files.catbox.moe/mh3hlf.mp4",
"https://files.catbox.moe/7txijj.mp4",
"https://files.catbox.moe/vheohu.mp4",
"https://files.catbox.moe/ryiu8t.mp4",
"https://files.catbox.moe/kmea1h.mp4",
"https://files.catbox.moe/d80ycs.mp4",
"https://files.catbox.moe/fri7o5.mp4",
"https://files.catbox.moe/qnvst0.mp4",
"https://files.catbox.moe/zji3tp.mp4"
];

let primeraVez = true;

function cambiarCanal() {
    const random = Math.floor(Math.random() * canales.length);

    video.pause();
    video.src = canales[random];

    if (primeraVez) {
        video.muted = true;
    }

    video.load();

    video.onloadeddata = () => {
        video.play().catch(() => {});
    };
}

document.addEventListener("click", () => {
    video.muted = false;
    primeraVez = false;
    document.documentElement.requestFullscreen().catch(()=>{});
}, { once: true });

btn.addEventListener("click", cambiarCanal);
video.addEventListener("ended", cambiarCanal);

document.addEventListener("mousemove", () => {
    btn.style.opacity = 1;
    clearTimeout(window.hideBtn);
    window.hideBtn = setTimeout(() => {
        btn.style.opacity = 0;
    }, 2000);
});

cambiarCanal();
