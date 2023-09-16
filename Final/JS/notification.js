const notificationButton = document.getElementById("notificationButton");
const notificationDropdown = document.getElementById("notificationDropdown");

notificationButton.addEventListener("click", (event) => {
    // Prevent the click event from propagating and closing the dropdown immediately
    event.stopPropagation();
    
    if (notificationDropdown.style.display === "block" || notificationDropdown.style.display === "") {
        notificationDropdown.style.display = "none";
    } else {
        notificationDropdown.style.display = "block";
    }
});

// Close the dropdown when clicking outside of it
window.addEventListener("click", () => {
    notificationDropdown.style.display = "none";
});
