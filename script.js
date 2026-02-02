const yes = document.getElementById("yes");
const no = document.getElementById("no");
const hint = document.getElementById("hint");
const result = document.getElementById("result");

let noCount = 0;

yes.addEventListener("click", () => {
  result.hidden = false;
  hint.textContent = "Correct choice 😌💘";
  no.disabled = true;
  yes.textContent = "YES!!! 💖";
  confettiBurst();
});

no.addEventListener("mouseenter", () => {
  // Make the "No" button run away
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 140 - 70;
  no.style.transform = `translate(${x}px, ${y}px)`;
});

no.addEventListener("click", () => {
  noCount++;
  const lines = [
    "Wait… really? 😭",
    "Are you sure sure? 🥺",
    "Think again 😤",
    "Ok that button seems unreliable…",
    "Let’s just say yes 😇"
  ];
  hint.textContent = lines[Math.min(noCount, lines.length - 1)];
});

function confettiBurst() {
  // tiny zero-dependency confetti
  for (let i = 0; i < 120; i++) {
    const p = document.createElement("div");
    p.style.position = "fixed";
    p.style.left = (Math.random() * 100) + "vw";
    p.style.top = "-10px";
    p.style.width = "8px";
    p.style.height = "12px";
    p.style.borderRadius = "2px";
    p.style.background = `hsl(${Math.random()*360}, 90%, 60%)`;
    p.style.opacity = "0.95";
    p.style.zIndex = "9999";
    const fall = 1200 + Math.random() * 1200;
    const drift = (Math.random() * 200 - 100);
    p.animate([
      { transform: "translate(0,0) rotate(0deg)" },
      { transform: `translate(${drift}px, 110vh) rotate(${Math.random()*720}deg)` }
    ], { duration: fall, easing: "cubic-bezier(.2,.7,.2,1)" });
    document.body.appendChild(p);
    setTimeout(() => p.remove(), fall);
  }
}
