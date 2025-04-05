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


document.addEventListener('DOMContentLoaded', function() {
    const movieCredits = document.getElementById('movie-credits');
    if (movieCredits) {
      const animationDuration = parseFloat(getComputedStyle(movieCredits).animationDuration) * 1000;
      const creditsText = movieCredits.querySelector('#content p');
      if (creditsText) {
        const textHeight = creditsText.offsetHeight;
  
        // Adjust this factor to control the scroll speed (lower = slower)
        const scrollSpeedFactor = 40;
        const estimatedVisibleTime = (textHeight / scrollSpeedFactor) * 1000;
  
        // Calculate the stop percentage, ensuring it's within a reasonable range
        const stopPercentage = Math.min(95, Math.max(60, (estimatedVisibleTime / animationDuration) * 100));
  
        const keyframes = `@keyframes movieCredits {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          ${stopPercentage}% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }`;
  
        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = keyframes;
        document.head.appendChild(styleSheet);
  
        // Force a reflow to apply the new animation (important!)
        movieCredits.style.display = 'none';
        movieCredits.offsetHeight;
        movieCredits.style.display = '';
  
        // Apply the animation to the element after the dynamic keyframes are set
        movieCredits.style.animation = `movieCredits ${animationDuration / 1000}s linear forwards`;
      }
    }
  });