const movies = [
    { title: 'Batman Begins', releaseDate: 2005, image: 'P/Batman Begins.jpg', link: 'batmanbegins.html' },
{ title: 'The Dark Knight', releaseDate: 2008, image: 'P/The Dark Knight.jpg', link: 'thedarkknight.html' },
{ title: 'Green Lantern', releaseDate: 2011, image: 'P/Green Lantern.jpg', link: 'greenlantern.html' },
{ title: 'The Dark Knight Rises', releaseDate: 2012, image: 'P/The Dark Knight Rises.jpeg', link: 'thedarkknightrises.html' },
{ title: 'Man of Steel', releaseDate: 2013, image: 'P/Man of Steel.jpg', link: 'manofsteel.html' },
{ title: 'Batman v Superman: Dawn of Justice', releaseDate: 2016, image: 'P/BVS.jpg', link: 'batmanvsuperman.html' },
{ title: 'Wonder Woman', releaseDate: 2017, image: 'P/Wonder Woman.jpg', link: 'wonderwoman.html' },
{ title: 'Justice League', releaseDate: 2017, image: 'P/Justice League.jpg', link: 'justiceleague.html' },
{ title: 'Aquaman', releaseDate: 2018, image: 'P/aquaman.jpg', link: 'aquaman.html' },
{ title: 'Shazam!', releaseDate: 2019, image: 'P/Shazam!.jpg', link: 'shazam.html' },
{ title: 'Birds of Prey', releaseDate: 2020, image: 'P/Birds of Prey.webp', link: 'birdsofprey.html' },
{ title: 'Wonder Woman 1984', releaseDate: 2020, image: 'P/Wonder Woman2.jpg', link: 'wonderwoman1984.html' },
{ title: 'Zack Snyder\'s Justice League', releaseDate: 2021, image: 'P/Justice League1.jpg', link: 'snyderjusticeleague.html' },
{ title: 'The Batman', releaseDate: 2022, image: 'P/The Batman.jpg', link: 'The Batman.html' },
{ title: 'Black Adam', releaseDate: 2022, image: 'P/Black Adam.jpg', link: 'Black Adam.html' },
{ title: 'The Flash', releaseDate: 2023, image: 'P/The flash.jpg', link: 'The flash.html' },
{ title: 'Blue Beetle', releaseDate: 2023, image: 'P/blue Beetle.jpg', link: 'blue beetle.html' },
{ title: 'Aquaman and the Lost Kingdom', releaseDate: 2023, image: 'P/aquaman2.jpg', link: 'bluebeetle.html' },
    // Your movie data...
];


const colors = ['white']; // Different colors for movie titles

let currentPage = 1;
const moviesPerPage = 18;

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
        movieCard.style.margin = '10px'; // Add margin here for spacing
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3 style="color: ${colors[index % colors.length]}">${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}


// Remove horizontal scroll functionality by not applying the flex and overflow styling
function updateHorizontalScroll(gridId) {
    const grid = document.getElementById(gridId);
    grid.style.display = '';  // Reset display to default, which will use the existing grid or block layout
    grid.style.overflowX = '';  // Remove horizontal scroll
    grid.style.scrollSnapType = '';  // Disable scroll snapping

    const cards = grid.querySelectorAll('.movie-card');
    cards.forEach(card => {
        card.style.flex = '';  // Reset flexbox behavior
        card.style.scrollSnapAlign = '';  // Remove snap alignment
    });
}
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayMovies();
    }
}

function nextPage() {
    const totalPages = Math.ceil(movies.length / moviesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayMovies();
    }
}

function goToPage(pageNumber) {
    currentPage = pageNumber;
    displayMovies();
}




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

