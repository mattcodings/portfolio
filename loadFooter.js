document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((error) => {
      console.log("Error loading footer:", error);
    });
});
