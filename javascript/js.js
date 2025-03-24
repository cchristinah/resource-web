function openTab(tabName) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  

function openTab(tabName) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the element with id="defaultOpen" and click on it
    var defaultOpen = document.getElementById("defaultOpen");
    if (defaultOpen) {
        defaultOpen.click();
    } else {
        console.error("Element with id 'defaultOpen' not found");
    }

    // Get the modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    // Ensure modal elements exist
    if (!modal || !modalImg || !captionText) {
        console.error("Modal elements not found");
        return;
    }

    // Get all gallery images
    var images = document.getElementsByClassName("galleryImages");

    // Add click event to each image
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            console.log("Image clicked"); // Debugging log
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Ensure close button exists
    if (!span) {
        console.error("Close button not found");
        return;
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        console.log("Close button clicked"); // Debugging log
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            console.log("Outside modal clicked"); // Debugging log
            modal.style.display = "none";
        }
    }
});

function openTab(tabName) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
}