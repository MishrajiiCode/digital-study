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
    early: {
        title: 'Topic For LKG',
        description: 'Select the Topic for LKG you need to assistance with:',
        options: ['Junior', 'Mid-Junior'],
    },
    primary: {
        title: 'Temple Finder',
        description: 'Find temples for various purposes:',
        options: ['Class 1', 'Class 2', 'Class 3', 'Class 4','Class 5'],
    },
    middle: {
        title: 'Mythology Explorer',
        description: 'Select a mythology topic to explore:',
        options: ['Class 6', 'Class 7', 'Class 8'],
    },
    high: {
        title: 'Advance Panchang',
        description: 'Select a panchang to explore:',
        options: ['Class 9', 'Class 10'],
    },
    senior: {
        title: 'Sacred Epics Explorer',
        description: 'Explore Ramayana and Mahabharata with interactive maps, timelines, and multimedia stories:',
        options: ['Class 11 PCM', 'Class 11 PCB', 'Class 11 Commerce','Class 11 Arts'],
    },
    secondary: {
        title: 'shloka',
        description: 'Sanskrit & Shloka Learning Hub:',
        options: ['Class 12 PCM', 'Class 12 PCB', 'Class 12 Commerce','Class 12 Arts'],
    },
    courses: {
        title: 'Digital Donation & Seva Platform',
        description: 'Make donations, sponsor rituals, and contribute to charity causes directly online:',
        options: ['Technical Courses','Management Courses','Medical Courses','Semi-Medical/Paramedical Courses','Arts and Humanities'],
    },
    other: {
        title: 'Ayurvedic Lifestyle & Wellness',
        description:'Personalized Ayurvedic advice based on your Dosha and seasonal health tips:',
        options: ['Vocational and Skill-Based Courses', 'Law and Legal Studies', 'Science and Research','Agriculture and Forestry','Design and Creative Arts','Mass Media and Communication'],
    },
    mantra: {
        title: 'Mantra Chanting Tracker',
        description: 'Track your mantra chanting progress and receive guided sessions for spiritual growth:',
        options: ['Mantra Tracker', 'Track your chanting progress', 'Set Personal Milestones with the Japa Mala'],
    },
    blog: {
        title: 'Knowledge & Spirituality Blog',
        description: 'Read daily articles on festivals, rituals, and spiritual guidance from Hindu scriptures:',
        options: ['Blog', 'Discover Daily Articles', 'Spiritual Advice', 'Community Stories'],
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
                    case "technical courses":
                        location.href = 'technical courses/technical.html';  // Adjust the path if needed
                        break;
                    case "vocational and skill-based courses":
                        location.href = 'other courses/vocational.html';  // Adjust the path if needed
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