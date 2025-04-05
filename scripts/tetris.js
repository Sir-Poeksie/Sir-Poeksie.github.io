// Simple Tetris game logic
document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("tetrisCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 600;

    function drawBlock(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 30, 30);
        ctx.strokeRect(x, y, 30, 30);
    }

    function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBlock(30, 30, "red");
        drawBlock(60, 30, "blue");
    }

    drawBoard();
});

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("tetris-grid");
    const skills = [
      "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS",
      "MongoDB", "SQL", "MySQL", "NodeJS", "ExpressJS",
      "Python", "C#", "C++", ".NET", "VB .NET", "PHP",
      "Java", "Kotlin", "AWS", "Docker", "Terraform"
    ];
  
    skills.forEach((skill, i) => {
      setTimeout(() => {
        const block = document.createElement("div");
        block.classList.add("block");
        block.innerText = skill;
        grid.appendChild(block);
      }, i * 250);
    });
  });
  
  skills.forEach((skill, i) => {
    setTimeout(() => {
      const block = document.createElement("div");
      block.classList.add("block");
      block.innerText = skill;
      block.title = `Skill: ${skill}`;
      grid.appendChild(block);
    }, i * 250);
  });
  