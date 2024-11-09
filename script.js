// Sidebar toggle functionality
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('toggled');
    document.getElementById('content').classList.toggle('toggled');
});

let sections = ["profile", "summary", "education", "skills", "experience", "projects", "languages"];
let currentSectionIndex = 0;

document.getElementById('next-btn').style.display = "inline"; // Ensure Next button is visible initially
document.getElementById('finish-btn').style.display = "none"; // Hide Finish button initially
document.getElementById('back-btn').style.display = "none"; // Hide Back button on first section

// Show the current section based on its index
function showSection(sectionId) {
    // Hide all sections
    sections.forEach((section) => {
        document.getElementById(section).classList.add('d-none');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.remove('d-none');
    highlightSidebar(sectionId);
}

// Highlight the active section in the sidebar
function highlightSidebar(activeSection) {
    const items = document.querySelectorAll('#sidebar .list-group-item');
    
    items.forEach((item) => {
        // Compare section id with the sidebar item text or data attributes
        if (item.textContent.trim().toLowerCase() === activeSection.toLowerCase()) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Move to the next section
function moveNext() {
    if (currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
        showSection(sections[currentSectionIndex]);
        updateNavigationButtons();
    }
}

// Move to the previous section
function moveBack() {
    if (currentSectionIndex > 0) {
        currentSectionIndex--;
        showSection(sections[currentSectionIndex]);
        updateNavigationButtons();
    }
}

// Update navigation buttons visibility based on the current section
function updateNavigationButtons() {
    if (currentSectionIndex === 0) {
        document.getElementById('back-btn').style.display = "none"; // Hide back button on first section
    } else {
        document.getElementById('back-btn').style.display = "inline";
    }

    if (currentSectionIndex === sections.length - 1) {
        document.getElementById('next-btn').style.display = "none"; // Hide next button on last section
        document.getElementById('finish-btn').style.display = "inline"; // Show finish button
    } else {
        document.getElementById('next-btn').style.display = "inline"; // Show next button
        document.getElementById('finish-btn').style.display = "none"; // Hide finish button
    }
}

// Finish the resume (for example, save it or generate a preview)
function finish() {
    alert('Resume Finished! You can now download it or preview.');
}

// Initially show the first section
showSection(sections[currentSectionIndex]);

// Trigger the file input when the button is clicked
document.getElementById('upload-btn').addEventListener('click', function() {
    document.getElementById('photo').click(); // Trigger the hidden file input
});

// Handle the photo upload and preview
document.getElementById('photo').addEventListener('change', function(event) {
    var reader = new FileReader();

    reader.onload = function(e) {
        var photoPreview = document.getElementById('photo-preview');

        // Set the image source to the uploaded file
        photoPreview.src = e.target.result;
    };

    if (this.files && this.files[0]) {
        reader.readAsDataURL(this.files[0]); // Read the image as a Data URL
    }
});



