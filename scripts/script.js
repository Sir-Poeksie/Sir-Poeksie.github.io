const introScreen = document.getElementById('introScreen');
const typedText = document.getElementById('typedText');
const message = "Sir Poeksie - Portfolio";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    if (message.substring(index, index + 9) === "Portfolio") {
      typedText.innerHTML += `<span class="gray">Portfolio</span>`;
      index += 9;
    } else {
      typedText.innerHTML += message[index];
      index++;
    }
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      introScreen.style.opacity = 0;
      setTimeout(() => {
        introScreen.style.display = 'none';
      }, 1000);
    }, 1000);
  }
}
window.onload = typeWriter;

// Section toggle
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = e.target.getAttribute('href').substring(1);
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  });
});

