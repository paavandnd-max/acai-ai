console.log("JS LOADED ✅");

window.onload = function () {

  console.log("DOM READY ✅");

  document.getElementById("dashboardBtn")?.addEventListener("click", function () {
    alert("Dashboard clicked");
    window.location.href = "dashboard.html";
  });

  document.getElementById("arBtn")?.addEventListener("click", function () {
    alert("AR clicked");
    window.location.href = "ar.html";
  });

  document.getElementById("summaryBtn")?.addEventListener("click", function () {
    alert("Summary clicked");
  });

  document.getElementById("quizBtn")?.addEventListener("click", function () {
    alert("Quiz clicked");
  });

};