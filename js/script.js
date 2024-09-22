// Yale AI Society Website JavaScript

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#00FFFF"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00FFFF",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
            }
        },
        retina_detect: true
    });

    // Typing animation for logo
    new Typed('#typed-logo', {
        strings: ['Yale AI Society'],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: false
    });

    // Typing animation for title
    new Typed('#typed-title', {
        strings: ['Yale AI Society'],
        typeSpeed: 50,
        backSpeed: 0,
        startDelay: 1000,
        loop: false,
        showCursor: false
    });

    // Typing animation for slogan
    new Typed('#typed-slogan', {
        strings: ['Exploring the Future of Artificial Intelligence'],
        typeSpeed: 30,
        backSpeed: 0,
        startDelay: 2500,
        loop: false,
        showCursor: false
    });

    // Call functions to set up the website
    populateLeadershipSection();
    setupSmoothScrolling();
});

/**
 * Populates the leadership section with member profiles
 */
function populateLeadershipSection() {
    // Array of leadership members
    const leaders = [
        {
            name: "Jane Doe",
            role: "President",
            bio: "AI enthusiast with a focus on natural language processing.",
            image: "img/placeholder-1.svg",
            linkedin: "https://www.linkedin.com/in/janedoe"
        },
        {
            name: "John Smith",
            role: "Vice President",
            bio: "Researching applications of machine learning in healthcare.",
            image: "img/placeholder-2.svg",
            linkedin: "https://www.linkedin.com/in/johnsmith"
        },
        {
            name: "Alice Johnson",
            role: "Secretary",
            bio: "Specializing in computer vision and its applications in robotics.",
            image: "img/placeholder-3.svg",
            linkedin: "https://www.linkedin.com/in/alicejohnson"
        }
    ];

    const leadershipGrid = document.querySelector('.leadership-grid');

    // Create and append a card for each leader
    leaders.forEach(leader => {
        const leaderCard = createLeaderCard(leader);
        leadershipGrid.appendChild(leaderCard);
    });
}

/**
 * Creates a card element for a leadership member
 * @param {Object} leader - The leader's information
 * @returns {HTMLElement} The created leader card element
 */
function createLeaderCard(leader) {
    const card = document.createElement('div');
    card.className = 'leader-card';

    card.innerHTML = `
        <img src="${leader.image}" alt="${leader.name}" class="leader-image">
        <h3>${leader.name}</h3>
        <p class="leader-role">${leader.role}</p>
        <p class="leader-bio">${leader.bio}</p>
        <a href="${leader.linkedin}" target="_blank" rel="noopener noreferrer" class="linkedin-link">LinkedIn Profile</a>
    `;

    return card;
}

/**
 * Sets up smooth scrolling for navigation links
 */
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add a scroll event listener to change header opacity
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        header.style.backgroundColor = 'rgba(10, 25, 47, 1)';
    } else {
        header.style.backgroundColor = 'rgba(10, 25, 47, 0.8)';
    }
});