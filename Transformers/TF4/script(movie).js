const movies = [ 
    { title: 'Transformers', releaseDate: 2007, image: '../P/TF1.webp', link: '../TF1/movieruls(movie).html' },  
{ title: 'Transformers: Revenge of the Fallen', releaseDate: 2009, image: '../P/TF2.avif', link: '../TF2/movieruls(movie).html' },  
{ title: 'Transformers: Dark of the Moon', releaseDate: 2011, image: '../P/TF3.jpg', link: '../TF3/movieruls(movie).html' },  
{ title: 'Transformers: Age of Extinction', releaseDate: 2014, image: '../P/TF4.jpg', link: 'movieruls(movie).html' },  
{ title: 'Transformers: The Last Knight', releaseDate: 2017, image: '../P/TF5.jpg', link: '../TF5/movieruls(movie).html' },  
{ title: 'Bumblebee', releaseDate: 2018, image: '../P/TF6.jpg', link: '../TF6/movieruls(movie).html' },  
{ title: 'Transformers: Rise of the Beasts', releaseDate: 2023, image: '../P/TF7.jpg', link: '../TF7/movieruls(movie).html' }

];




const colors = ['white']; // Different colors for movie titles

let currentPage = 1;
const moviesPerPage = 24;

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        displayMovies(); // Display the existing featured movies
        displayTopRatedMovies(); // Display the top-rated movies in the first section
        displayTopRatedMovies2(); // Display the top-rated movies in the second section
        
    }, 2000); // Simulates 2 seconds of loading time
};

function displayMovies() {
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = movies.slice(startIndex, endIndex);

    currentMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
    updateHorizontalScroll('movieGrid');
}


function updateHorizontalScroll(gridId) {
    const grid = document.getElementById(gridId);
    grid.style.display = 'flex';
    grid.style.overflowX = 'auto';
    grid.style.scrollSnapType = 'x mandatory';

    const cards = grid.querySelectorAll('.movie-card');
    cards.forEach(card => {
        card.style.flex = '0 0 auto';
        card.style.scrollSnapAlign = 'start';
    });
}


// Function to filter and display movies
// Function to filter and display movies
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieGrid = document.getElementById('movieGrid');
    movieGrid.innerHTML = ''; // Clear the grid

    // Filtering movies based on search input
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));

    // Displaying filtered movies
    filteredMovies.forEach((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });

    // Optionally update horizontal scroll functionality if needed
    updateHorizontalScroll('movieGrid');
}

// Function to handle the Enter key event for search
document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchMovies(); // Trigger search when Enter is pressed
    }
});

/// Select the elements
const searchButton = document.querySelector('.search-container button');
const searchInput = document.querySelector('.search-container input');
const mainContent = document.querySelector('main'); // Or the main container for the website content

// Expand the search bar and blur background
searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('expanded');

    if (searchInput.classList.contains('expanded')) {
        mainContent.classList.add('blur-background'); // Add blur effect
    } else {
        mainContent.classList.remove('blur-background'); // Remove blur effect
    }
});

// Remove blur when clicking outside the search input
document.addEventListener('click', (e) => {
    if (!document.querySelector('.search-container').contains(e.target)) {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
    }
});

// Remove blur when pressing Enter in the search input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchInput.classList.remove('expanded');
        mainContent.classList.remove('blur-background');
        // Add functionality to handle search action here if needed
    }
});




function toggleMenu() {
    const sideNav = document.getElementById("sideNav");
    const menuToggle = document.querySelector(".menu-toggle");

    if (sideNav.classList.contains("open")) {
        sideNav.classList.remove("open");
        menuToggle.classList.remove("hidden"); // Show the menu toggle button when sideNav is closed
    } else {
        sideNav.classList.add("open");
        menuToggle.classList.add("hidden"); // Hide the menu toggle button when sideNav is open
    }
}


// Scroll event for transparency effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const movieHeading = document.querySelector('.movieheading');

    if (window.scrollY > 1) { 
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        movieHeading.style.opacity = '0.5';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        movieHeading.style.opacity = '1';
    }
});

// Variables to store the previous scroll position and the navbar element
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Function to handle scroll events
const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Check if scrolling down
    if (currentScroll > lastScrollTop) {
        // Scrolling down, hide the navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up, show the navbar
        navbar.classList.remove('hidden');
    }

    // Update the last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

const sliderContainer = document.querySelector('.slider-container');
const dotsContainer = document.querySelector('.dots-container');
const slides = document.querySelectorAll('.movie-poster');
let currentIndex = 0;

// Create dots based on the number of slides
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Set initial dot
const setActiveDot = () => {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
};

// Go to a specific slide
const goToSlide = (index) => {
    if (index < 0 || index >= slides.length) return;
    sliderContainer.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
    setActiveDot();
};

// Initialize slider
const initSlider = () => {
    setActiveDot();
};

// Call initialization
initSlider();

// Optional: Add automatic sliding if needed
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
}, 5000); // Change slide every 5 seconds

// JavaScript to show/hide scroll-to-top button
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Scroll to top function
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
