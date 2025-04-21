
  document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".accordion li");

    items.forEach(item => {
      const a = item.querySelector("a");
      const p = item.querySelector("p");

      a.addEventListener("click", function () {
        const isActive = a.classList.contains("active");


        items.forEach(i => {
          i.querySelector("a").classList.remove("active");
          i.querySelector("p").style.display = "none";
        });

        if (!isActive) {
          a.classList.add("active");
          p.style.display = "block";
        }

      });
    });
  });
