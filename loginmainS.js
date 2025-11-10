document.addEventListener("DOMContentLoaded", function () {
    const loginBoxes = document.querySelectorAll(".login-box");

    loginBoxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.1)";
            box.style.transition = "transform 0.3s ease";
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)";
        });
    });
});
