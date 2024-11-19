// drop down menu

document.addEventListener("DOMContentLoaded", function() {
    // Select all dropbtn elements
    var dropbtns = document.querySelectorAll('.dropbtn');

    // Loop through each dropbtn and attach a click event listener
    dropbtns.forEach(function(dropbtn) {
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownContent = this.nextElementSibling; // Get the next dropdown content

            // Close all dropdowns
            var allDropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < allDropdowns.length; i++) {
                if (allDropdowns[i] !== dropdownContent) {
                    allDropdowns[i].style.display = 'none'; // Hide other dropdowns
                }
            }

            // Toggle the clicked dropdown
            dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                dropdowns[i].style.display = 'none'; // Hide all dropdowns
            }
        }
    };
});

