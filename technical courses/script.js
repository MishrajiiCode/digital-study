// Toggle Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal and Dropdown Functionality
const cards = document.querySelectorAll('.card');
const dropdownModal = document.querySelector('#dropdown-modal');
const dropdownTitle = document.querySelector('#dropdown-title');
const dropdownDescription = document.querySelector('#dropdown-description');
const dropdownOptions = document.querySelector('#dropdown-options');
const closeButton = document.querySelector('.close-button');

// Feature Data with Dropdown Options
const featureData = {
    technical: {
        title: 'Topic For LKG',
        description: 'Select the Topic for LKG you need to assistance with:',
        options: ['Engineering', 'Computer Science & IT','Robotics and AI','Networking','Data Science & Analytics'],
    },
   

};

// Handle card click to open dropdown modal
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const feature = card.getAttribute('data-feature');
        const data = featureData[feature];
        dropdownTitle.textContent = data.title;
        dropdownDescription.textContent = data.description;

        // Clear previous options
        dropdownOptions.innerHTML = '';

        // Add new dropdown options
        data.options.forEach((option) => {
            const button = document.createElement('button');
            button.className = 'dropdown-option';
            button.textContent = option;

            // Handle option click for navigation
            button.addEventListener('click', () => {
                // Redirect based on the selected option
                switch (option.toLowerCase()) {
                    case "engineering":
                        location.href = 'engineering.html';  // Adjust the path if needed
                        break;
                    case "wedding":
                        location.href = 'wedding.html';  // Adjust the path if needed
                        break;
                    case "puja":
                        location.href = 'puja.html';  // Adjust the path if needed
                        break;
                    case "shradh ceremony":
                        location.href = 'shradh.html';  // Adjust the path if needed
                        break;
                    case "nearby temples":
                        location.href = 'nearby-temples.html';  // Adjust the path if needed
                        break;
                    case "virtual darshan":
                         location.href = 'virtual-darshan.html';  // Adjust the path if needed
                         break;
                    case "special pujas":
                        location.href = 'special-pujas.html';  // Adjust the path if needed
                         break;
                    case "mythology explorer":
                        location.href = 'mythology-explorer.html';  // Adjust the path if needed
                        break;
                    case "temple history":
                        location.href = 'temple-history.html';  // Adjust the path if needed
                        break;
                    case "ramayana":
                        location.href = 'ramayana.html'; // Adjust the path if
                        break;
                    case "mahabharata":
                        location.href = 'mahabharata.html'; // Adjust the path
                        break;
                    case "Puranas":
                        location.href = 'puranas.html'; // Adjust the path
                        break;
                    case "Vedic Stories":
                        location.href = 'vedic stories.html'; // Adjust the path
                        break;
                    
                    
                    
                    
                     


                                    

                    default:
                        console.log(`No action defined for ${option}`);
                }
            });

            dropdownOptions.appendChild(button);
        });

        // Show the modal
        dropdownModal.style.display = 'flex';
    });
});

// Close Modal
closeButton.addEventListener('click', () => {
    dropdownModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === dropdownModal) {
        dropdownModal.style.display = 'none';
    }
});