
// Event Handling
document.getElementById("clickBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", function() {
    this.classList.add("hovered");
});
document.getElementById("hoverBox").addEventListener("mouseout", function() {
    this.classList.remove("hovered");
});

document.getElementById("keypressInput").addEventListener("keypress", function(event) {
    console.log("Key pressed:", event.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", function() {
    alert("Double-click detected! Secret revealed!");
});

// Interactive Elements
document.getElementById("colorChanger").addEventListener("click", function() {
    this.style.backgroundColor = "lightgreen";
    this.textContent = "Color Changed!";
});

let imageIndex = 0;
const images = [
    "https://via.placeholder.com/200/0000FF",
    "https://via.placeholder.com/200/FF0000",
    "https://via.placeholder.com/200/00FF00"
];
function nextImage() {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[imageIndex];
}

function showTab(tabId) {
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById(tabId).style.display = "block";
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});
