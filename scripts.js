// document.querySelector(".menu-btn").addEventListener("click", function() {
//     let menu = document.querySelector(".menu");
//     menu.style.display = (menu.style.display === "block") ? "none" : "block";
// });

// function getSupport() {
//     alert("Redirecting to the support page...");
//     window.location.href = "support.html"; // Change this to the actual page
// }
// Smooth Scrolling for Menu Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Get Support Button Alert
document.querySelector('.support-btn a').addEventListener('click', function () {
    alert("Your request is being processed. Support will contact you soon.");
});

// Hover Animation on Boxes
const infoBoxes = document.querySelectorAll('.info-box');
infoBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'scale(1.1)';
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     let isLoggedIn = localStorage.getItem("loggedIn") === "true";

//     const authBtn = document.getElementById("auth-btn");
//     const dashboardLink = document.getElementById("dashboard-link");
//     const supportLink = document.getElementById("support-link");

//     if (isLoggedIn) {
//         authBtn.innerHTML = '<a href="#">Logout</a>';
//         dashboardLink.style.display = "block";
//         supportLink.style.display = "block";

//         authBtn.addEventListener("click", function() {
//             localStorage.setItem("loggedIn", "false");
//             location.reload();
//         });
//     } else {
//         authBtn.innerHTML = '<a href="#">Login</a>';
//         dashboardLink.style.display = "none";
//         supportLink.style.display = "none";

//         authBtn.addEventListener("click", function() {
//             localStorage.setItem("loggedIn", "true");
//             location.reload();
//         });
//     }
// });
document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("mouseenter", function() {
        dropdownContent.style.display = "block";
        dropdownContent.style.opacity = "1";
        dropdownContent.style.visibility = "visible";
    });

    dropdown.addEventListener("mouseleave", function() {
        setTimeout(function() {
            if (!dropdown.matches(":hover") && !dropdownContent.matches(":hover")) {
                dropdownContent.style.display = "none";
                dropdownContent.style.opacity = "0";
                dropdownContent.style.visibility = "hidden";
            }
        }, 300);
    });

    dropdownContent.addEventListener("mouseleave", function() {
        dropdownContent.style.display = "none";
        dropdownContent.style.opacity = "0";
        dropdownContent.style.visibility = "hidden";
    });
});


