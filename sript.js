document.addEventListener("DOMContentLoaded", () => {

  // Dashboard
  const dashboardBtn = document.getElementById("dashboardBtn");
  if (dashboardBtn) {
    dashboardBtn.addEventListener("click", () => {
      window.location.href = "dashboard.html";
    });
  }

  // AR
  const arBtn = document.getElementById("arBtn");
  if (arBtn) {
    arBtn.addEventListener("click", () => {
      window.location.href = "ar.html";
    });
  }

  // Quiz
  const quizBtn = document.getElementById("quizBtn");
  if (quizBtn) {
    quizBtn.addEventListener("click", () => {
      startQuiz();
    });
  }

  // AI Summary
  const summaryBtn = document.getElementById("summaryBtn");
  if (summaryBtn) {
    summaryBtn.addEventListener("click", () => {
      getSummary();
    });
  }

});

function getSummary() {
  const box = document.getElementById("summary");

  box.innerHTML = "⏳ Generating summary...";

  setTimeout(() => {
    box.innerHTML = `
      <div style="padding:10px; border-radius:10px; background:rgba(255,255,255,0.1);">
        🤖 <strong>AI Summary</strong><br>
        The solar system consists of planets orbiting the sun due to gravity.
      </div>
    `;
  }, 1000);
}

function startQuiz() {
  const quiz = document.getElementById("quiz");

  quiz.innerHTML = `
    <p>Which is the largest planet?</p>
    <button onclick="checkAnswer('Jupiter')">Jupiter</button>
    <button onclick="checkAnswer('Mars')">Mars</button>
  `;
}

function checkAnswer(ans) {
  alert(ans === "Jupiter" ? "✅ Correct!" : "❌ Try again");
}