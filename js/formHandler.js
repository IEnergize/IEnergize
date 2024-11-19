document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const emailInput = document.getElementById("email").value;
    const formMessage = document.getElementById("formMessage");

    // Clear previous messages
    formMessage.textContent = "";
    formMessage.style.color = "";

    // Validate email format
    if (!isValidEmail(emailInput)) {
        formMessage.textContent = "Please provide a valid email address.";
        formMessage.style.color = "red";
        return; // Stop form submission if email is invalid
    }

    const serviceID = "service_khw6sdp"; // Replace with your EmailJS service ID
    const templateID = "template_udd83eh"; // Replace with your EmailJS template ID

    // Send the form data using EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            formMessage.textContent = "Message sent successfully. A confirmation email will be sent if the provided email address is valid.";
            formMessage.style.color = "green";
            // Optionally, reset the form
            document.getElementById("contactForm").reset();
        })
        .catch(() => {
            formMessage.innerHTML = `
                An error occurred. Please try again or email us directly at 
                <a href="mailto:Info.IEnergize@gmail.com">Info.IEnergize@gmail.com</a>.
            `;
            formMessage.style.color = "red";
        });
});

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/; // Updated regex for stricter validation
    return emailRegex.test(email);
}
