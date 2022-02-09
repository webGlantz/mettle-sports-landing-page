let ctaBtn = document.querySelector('.cta-btn');
let mainInfo = document.querySelector('#main-info');
let infoContain = document.querySelector('.info-container');
let embedVid = document.querySelector('.embedded-video');
let footer = document.querySelector('footer');

function displayVideo() {
  if (getComputedStyle(embedVid).display == "none") {
    (infoContain.style.display = 'none') && (mainInfo.style.backgroundColor = 'rgba(35,31,32,0.9)') && (footer.style.backgroundColor = 'rgba(35,31,32,0.9)') && (embedVid.style.display = 'flex');
  };
};

function hideVideo() {
  if (getComputedStyle(infoContain).display == 'none') {
    (infoContain.style.display = 'flex') && (mainInfo.style.backgroundColor = 'rgba(35,31,32,0.70)') && (footer.style.backgroundColor = 'rgba(35,31,32,0.7)') && (embedVid.style.display = 'none');
  };
};

ctaBtn.addEventListener(
  'click', displayVideo
);

embedVid.addEventListener(
  'click', hideVideo
)