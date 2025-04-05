document.addEventListener("DOMContentLoaded", () => {
    const text = "I'm an innovative tech mind focused on 4IR-driven African solutions.";
    const el = document.getElementById("typed-text");
    let index = 0;
  
    function typeChar() {
      if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeChar, 60);
      }
    }
  
    typeChar();
  });
  