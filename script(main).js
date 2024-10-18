const movies = [
    { title: 'Action', releaseDate: 2015, image: 'P/A.jpg', link: 'Harrypotter/H1/movieruls(movie).html',  }, 
    { title: 'Adventure', releaseDate: 2020, image: 'P/AD.jpg', link: 'wonderwoman1984.html' },
    { title: 'Fantasy', releaseDate: 2016, image: 'P/SC.jpg', link: 'xmenapocalypse.html' },
    { title: 'Horror', releaseDate: 2005, image: 'P/H.jpg', link: 'gobletoffire.html' },
    { title: 'Sci-fi', releaseDate: 2013, image: 'P/F.jpg', link: 'ironman.html', genre: 'Action', year: 2013 },
    { title: 'Thriller', releaseDate: 2008, image: 'P/Th.jpg', link: 'captainmarvel.html', genre: 'Action', year: 2008 }, 


    

    
    // Your movie data...
];

const topRatedMovies = [
    { title: 'The Incredible Hulk', releaseDate: 2008, image: 'P/Hulk.jpg', link: 'captainmarvel.html', genre: 'Action', year: 2008 }, 
{ title: 'Iron Man 2', releaseDate: 2010, image: 'P/IM2.jpg', link: 'deadpool1.html', genre: 'Action', year: 2010 }, 
{ title: 'Captain America: The First Avenger', releaseDate: 2011, image: 'P/Cp1.jpg', link: 'Theavengers.html', genre: 'Action', year: 2011 }, 
{ title: 'Thor 1', releaseDate: 2011, image: 'P/Thor1.jpg', link: 'endgame.html', genre: 'Action', year: 2011 }, 
{ title: 'Iron Man 3', releaseDate: 2013, image: 'P/IM3.jpg', link: 'ironman.html', genre: 'Action', year: 2013 }, 
{ title: 'Thor 2', releaseDate: 2013, image: 'P/Thor2.jpg', link: 'spiderman.html', genre: 'Action', year: 2013 }, 
{ title: 'Guardians of the Galaxy', releaseDate: 2014, image: 'P/Gog1.jpg', link: 'Theavengers.html', genre: 'Action', year: 2014 }, 
{ title: 'The Avengers: Age Of Ultron', releaseDate: 2015, image: 'P/Avengers2.jpg', link: 'Theavengers.html', genre: 'Action', year: 2015 }, 
{ title: 'Ant-Man', releaseDate: 2015, image: 'P/AM1.jpg', link: 'endgame.html', genre: 'Action', year: 2015 }, 
{ title: 'Captain America: Civil War', releaseDate: 2016, image: 'P/Cp3.jpg', link: 'Theavengers.html', genre: 'Action', year: 2016 }, 
{ title: 'Thor 3', releaseDate: 2017, image: 'P/Thor3.jpg', link: 'captainmarvel.html', genre: 'Action', year: 2017 }, 
{ title: 'Spider-Man: Homecoming', releaseDate: 2017, image: 'P/hcm.jpeg', link: 'deadpool1.html', genre: 'Action', year: 2017 }, 
{ title: 'Guardians of the Galaxy Vol. 2', releaseDate: 2017, image: 'P/Gog2.jpg', link: 'captainmarvel.html', genre: 'Action', year: 2017 }, 
{ title: 'Captain America: The Winter Soldier', releaseDate: 2018, image: 'P/Cp2.jpg', link: 'avengersmdl.html', genre: 'Action', year: 2018 }, 
{ title: 'Avengers: Infinity War', releaseDate: 2018, image: 'P/infinitywar.jpg', link: 'avengersmdl.html', genre: 'Action', year: 2018 }, 
{ title: 'Black Panther', releaseDate: 2018, image: 'P/Bp.jpeg', link: 'ironman.html', genre: 'Action', year: 2018 }, 
{ title: 'Ant-Man and The Wasp', releaseDate: 2018, image: 'P/AM2.jpg', link: 'spiderman.html', genre: 'Action', year: 2018 }, 
{ title: 'Deadpool 2', releaseDate: 2018, image: 'P/Dp2.jpg', link: 'https:rubyvid.comjbafmg69zl32.html', genre: 'Action', year: 2018 }, 
{ title: 'Avengers: Endgame', releaseDate: 2019, image: 'P/Endgame.jpg', link: 'Theavengers.html' }, 
{ title: 'Captain Marvel', releaseDate: 2019, image: 'P/CaptainMarvel.jpg', link: 'captainmarvel.html', genre: 'Action', year: 2019 }, 
{ title: 'Spider-Man: No Way Home', releaseDate: 2021, image: 'P/nwh.jpg', link: 'spiderman.html', genre: 'Action', year: 2021 }, 
{ title: 'Black Widow', releaseDate: 2021, image: 'P/BW.jpg', link: 'Theavengers.html', genre: 'Action', year: 2021 }, 
{ title: 'Shang-Chi and the Legend of the Ten Rings', releaseDate: 2021, image: 'P/Shangchi.jpg', link: 'avengersmdl.html', genre: 'Action', year: 2021 }, 
{ title: 'Eternals', releaseDate: 2021, image: 'P/Eternal.jpg', link: 'Theavengers.html', genre: 'Action', year: 2021 }, 
{ title: 'Doctor Strange in the Multiverse of Madness', releaseDate: 2022, image: 'P/Doctor Strange2.jpg', link: 'deadpool1.html', genre: 'Action', year: 2022 }, 
{ title: 'Black Panther: Wakanda Forever', releaseDate: 2022, image: 'P/Bp2.jpg', link: 'ironman.html', genre: 'Action', year: 2022 }, 
{ title: 'Ant-Man and The Wasp: Quantumania', releaseDate: 2023, image: 'P/AM3.jpg', link: 'endgame.html', genre: 'Action', year: 2023 }, 
{ title: 'Guardians of the Galaxy Vol. 3', releaseDate: 2023, image: 'P/Gog3.jpg', link: 'spiderman.html', genre: 'Action', year: 2023 }, 
{ title: 'The Marvels', releaseDate: 2023, image: 'P/The marvels.jpeg', link: 'captainmarvel.html', genre: 'Action', year: 2023 },
    // Your top-rated movie data...
];


const topRatedMovies2 = [
    { title: 'Batman Begins', releaseDate: 2005, image: 'P/Batman Begins.jpg', link: 'Dc/Dc1/movieruls(movie).html' },  
{ title: 'The Dark Knight', releaseDate: 2008, image: 'P/The Dark Knight.jpg', link: 'Dc/Dc2/movieruls(movie).html' }, 
{ title: 'Green Lantern', releaseDate: 2012, image: 'P/Green Lantern.jpg', link: 'Dc/Dc3/movieruls(movie).html' },
{ title: 'The Dark Knight Rises', releaseDate: 2011, image: 'P/The Dark Knight Rises.jpeg', link: 'Dc/Dc4/movieruls(movie).html' },
{ title: 'Man of Steel', releaseDate: 2013, image: 'P/Man of Steel.jpg', link: 'Dc/Dc5/movieruls(movie).html' }, 
{ title: 'Batman v Superman: Dawn of Justice', releaseDate: 2016, image: 'P/BVS.jpg', link: 'Dc/Dc6/movieruls(movie).html' }, 
{ title: 'Suicide Squad', releaseDate: 2016, image: 'P/Suicide squad.jpg', link: 'Dc/Dc7/movieruls(movie).html' }, 
{ title: 'Wonder Woman', releaseDate: 2017, image: 'P/Wonder Woman.jpg', link: 'Dc/Dc8/movieruls(movie).html' }, 
{ title: 'Justice League', releaseDate: 2017, image: 'P/Justice League.jpg', link: 'Dc/Dc9/movieruls(movie).html' }, 
{ title: 'Aquaman', releaseDate: 2018, image: 'P/Aquaman.jpg', link: 'Dc/Dc10/movieruls(movie).html' }, 
{ title: 'Shazam!', releaseDate: 2019, image: 'P/Shazam!.jpg', link: 'Dc/Dc11/movieruls(movie).html' }, 
{ title: 'Joker', releaseDate: 2019, image: 'P/joker.jpg', link: 'Dc/Dc12/movieruls(movie).html' }, 
{ title: 'Birds of Prey', releaseDate: 2020, image: 'P/Birds of Prey.webp', link: 'Dc/Dc13/movieruls(movie).html' }, 
{ title: 'Wonder Woman 1984', releaseDate: 2020, image: 'P/Wonder Woman2.jpg', link: 'Dc/Dc14/movieruls(movie).html' }, 
{ title: 'Zack Snyder\'s Justice League', releaseDate: 2021, image: 'P/Justice League1.jpg', link: 'Dc/Dc15/movieruls(movie).html' }, 
{ title: 'The Suicide Squad', releaseDate: 2021, image: 'P/Suicide squad.jpg', link: 'Dc/Dc16/movieruls(movie).html' }, 
{ title: 'The Batman', releaseDate: 2022, image: 'P/The Batman.jpg', link: 'Dc/Dc17/movieruls(movie).html' },  
{ title: 'Black Adam', releaseDate: 2022, image: 'P/Black Adam.jpg', link: 'Dc/Dc18/movieruls(movie).html' },
{ title: 'Shazam! Fury of the Gods', releaseDate: 2023, image: 'P/Shazam!2.jpg', link: 'Dc/Dc19/movieruls(movie).html' }, 
{ title: 'The Flash', releaseDate: 2023, image: 'P/The flash.jpg', link: 'Dc/Dc20/movieruls(movie).html' }, 
{ title: 'Blue Beetle', releaseDate: 2023, image: 'P/blue Beetle.jpg', link: 'Dc/Dc21/movieruls(movie).html' }, 
{ title: 'Aquaman and the Lost Kingdom', releaseDate: 2023, image: 'P/Aquaman2.jpg', link: 'Dc/Dc22/movieruls(movie).html' },

    
    // Your top-rated movie data...
];

const topRatedMovies3 = [

    { title: 'Harry Potter and the Sorcerer\'s Stone', releaseDate: 2001, image: 'P/hp1.jpg', link: 'Harrypotter/H1/movieruls(movie).html' },
    { title: 'Harry Potter and the Chamber of Secrets', releaseDate: 2002, image: 'P/hp2.jpg', link: 'Harrypotter/H2/movieruls(movie).html' },
    { title: 'Harry Potter and the Prisoner of Azkaban', releaseDate: 2004, image: 'P/hp3.jpg', link: 'Harrypotter/H3/movieruls(movie).html' },
    { title: 'Harry Potter and the Goblet of Fire', releaseDate: 2005, image: 'P/hp4.jpg', link: 'Harrypotter/H4/movieruls(movie).html' },
    { title: 'Harry Potter and the Order of the Phoenix', releaseDate: 2007, image: 'P/hp5.jpg', link: 'Harrypotter/H5/movieruls(movie).html' },
    { title: 'Harry Potter and the Half-Blood Prince', releaseDate: 2009, image: 'P/hp6.jpg', link: 'Harrypotter/H6/movieruls(movie).html' },
    { title: 'Harry Potter and the Deathly Hallows Part 1', releaseDate: 2010, image: 'P/hp7.jpg', link: 'Harrypotter/H7/movieruls(movie).html' },
    { title: 'Harry Potter and the Deathly Hallows Part 2', releaseDate: 2011, image:'P/hp8.jpg', link: 'Harrypotter/H8/movieruls(movie).html' },
       
        
        // Your top-rated movie data...
    ];


const topRatedMovies4 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'X-MEN/X1/movieruls(movie).html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'X-MEN/X2/movieruls(movie).html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'X-MEN/X3/movieruls(movie).html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'X-MEN/X4/movieruls(movie).html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'X-MEN/X5/movieruls(movie).html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'X-MEN/X6/movieruls(movie).html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'X-MEN/X7/movieruls(movie).html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'X-MEN/X8/movieruls(movie).html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'X-MEN/X9/movieruls(movie).html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'X-MEN/X10/movieruls(movie).html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'X-MEN/X11/movieruls(movie).html' }




]

const topRatedMovies5 = [
    { title: 'Transformers', releaseDate: 2007, image: 'P/TF1.webp', link: 'Transformers/TF1/movieruls(movie).html' }, 
    { title: 'Transformers: Revenge of the Fallen', releaseDate: 2009, image: 'P/TF2.avif', link: 'Transformers/TF2/movieruls(movie).html' },  
    { title: 'Transformers: Dark of the Moon', releaseDate: 2011, image: 'P/TF3.jpg', link: 'Transformers/TF3/movieruls(movie).html' },  
    { title: 'Transformers: Age of Extinction', releaseDate: 2014, image: 'P/TF4.jpg', link: 'Transformers/TF4/movieruls(movie).html' },  
    { title: 'Transformers: The Last Knight', releaseDate: 2017, image: 'P/TF5.jpg', link: 'Transformers/TF5/movieruls(movie).html' },  
    { title: 'Bumblebee', releaseDate: 2018, image: 'P/TF6.jpg', link: 'Transformers/TF6/movieruls(movie).html' },  
    { title: 'Transformers: Rise of the Beasts', releaseDate: 2023, image: 'P/TF7.jpg', link: 'Transformers/TF7/movieruls(movie).html' }
    



]

const topRatedMovies6 = [
    { title: 'Star Wars: Episode IV – A New Hope', releaseDate: 1977, image: 'P/sw1.jpg', link: 'newhope.html' },
{ title: 'Star Wars: Episode V – The Empire Strikes Back', releaseDate: 1980, image: 'P/sw2.jpg', link: 'empirestrikesback.html' },
{ title: 'Star Wars: Episode VI – Return of the Jedi', releaseDate: 1983, image: 'P/sw3.jpg', link: 'returnofthejedi.html' },
{ title: 'Star Wars: Episode I – The Phantom Menace', releaseDate: 1999, image: 'P/sw4.jpg', link: 'phantommenace.html' },
{ title: 'Star Wars: Episode II – Attack of the Clones', releaseDate: 2002, image: 'P/sw5.jpg', link: 'attackoftheclones.html' },
{ title: 'Star Wars: Episode III – Revenge of the Sith', releaseDate: 2005, image: 'P/sw6.jpg', link: 'revengeofthesith.html' },
{ title: 'Star Wars: Episode VII – The Force Awakens', releaseDate: 2015, image: 'P/sw7.jpeg', link: 'theforceawakens.html' },
{ title: 'Rogue One: A Star Wars Story', releaseDate: 2016, image: 'P/sw8.jpg', link: 'rogueone.html' },
{ title: 'Star Wars: Episode VIII – The Last Jedi', releaseDate: 2017, image: 'P/sw9.jpg', link: 'thelastjedi.html' },
{ title: 'Solo: A Star Wars Story', releaseDate: 2018, image: 'P/sw10.jpg', link: 'solo.html' },
{ title: 'Star Wars: Episode IX – The Rise of Skywalker', releaseDate: 2019, image: 'P/sw11.jpg', link: 'theriseofskywalker.html' }




]

const topRatedMovies7 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'xmen.html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'xmenunited.html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'xmenlaststand.html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'xmenoriginswolverine.html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'xmenfirstclass.html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'thewolverine.html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'xmendaysoffuturepast.html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'xmenapocalypse.html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'logan.html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'darkphoenix.html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'thenewmutants.html' }



]
const topRatedMovies8 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'xmen.html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'xmenunited.html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'xmenlaststand.html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'xmenoriginswolverine.html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'xmenfirstclass.html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'thewolverine.html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'xmendaysoffuturepast.html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'xmenapocalypse.html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'logan.html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'darkphoenix.html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'thenewmutants.html' }



]
const topRatedMovies9 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'xmen.html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'xmenunited.html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'xmenlaststand.html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'xmenoriginswolverine.html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'xmenfirstclass.html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'thewolverine.html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'xmendaysoffuturepast.html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'xmenapocalypse.html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'logan.html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'darkphoenix.html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'thenewmutants.html' }



]
const topRatedMovies10 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'xmen.html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'xmenunited.html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'xmenlaststand.html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'xmenoriginswolverine.html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'xmenfirstclass.html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'thewolverine.html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'xmendaysoffuturepast.html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'xmenapocalypse.html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'logan.html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'darkphoenix.html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'thenewmutants.html' }



]
const topRatedMovies11 = [
    { title: 'X-Men', releaseDate: 2000, image: 'P/x1.jpg', link: 'xmen.html' },
{ title: 'X2: X-Men United', releaseDate: 2003, image: 'P/x2.jpg', link: 'xmenunited.html' },
{ title: 'X-Men: The Last Stand', releaseDate: 2006, image: 'P/x3.jpg', link: 'xmenlaststand.html' },
{ title: 'X-Men Origins: Wolverine', releaseDate: 2009, image: 'P/x4.jpg', link: 'xmenoriginswolverine.html' },
{ title: 'X-Men: First Class', releaseDate: 2011, image: 'P/x5.jpg', link: 'xmenfirstclass.html' },
{ title: 'The Wolverine', releaseDate: 2013, image: 'P/x6.jpg', link: 'thewolverine.html' },
{ title: 'X-Men: Days of Future Past', releaseDate: 2014, image: 'P/x7.webp', link: 'xmendaysoffuturepast.html' },
{ title: 'X-Men: Apocalypse', releaseDate: 2016, image: 'P/x8.jpg', link: 'xmenapocalypse.html' },
{ title: 'Logan', releaseDate: 2017, image: 'P/x9.jpg', link: 'logan.html' },
{ title: 'Dark Phoenix', releaseDate: 2019, image: 'P/x10.jpg', link: 'darkphoenix.html' },
{ title: 'The New Mutants', releaseDate: 2020, image: 'P/x11.jpg', link: 'thenewmutants.html' }



]



const colors = ['white']; // Different colors for movie titles

let currentPage = 1;
const moviesPerPage = 24;

window.onload = () => {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        displayMovies(); // Display the existing featured movies
        displayTopRatedMovies(); // Display the top-rated movies in the first section
        displayTopRatedMovies2(); // Display the top-rated movies in the second section
        displayTopRatedMovies3();
        displayTopRatedMovies4();
        displayTopRatedMovies5();
        displayTopRatedMovies6();
        displayTopRatedMovies7();
        displayTopRatedMovies8();
        displayTopRatedMovies9();
        displayTopRatedMovies10();
        displayTopRatedMovies11();
        displayTopRatedMovies12();


    }, 2000); // Simulates 2 seconds of loading time
};

function displayMovies() { 
    const movieGrid = document.getElementById('movieGrid'); 
    movieGrid.innerHTML = ''; // Clear the grid 
    const startIndex = (currentPage - 1) * moviesPerPage; 
    const endIndex = startIndex + moviesPerPage; 
    const currentMovies = movies.slice(startIndex, endIndex); 
 
    currentMovies.forEach((movie) => { 
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
        `; 
        movieGrid.appendChild(movieCard); 
    }); 
    updateHorizontalScroll('movieGrid'); 
}


function displayTopRatedMovies() {
    const topRatedMoviesGrid = document.getElementById('topRatedMoviesGrid');
    topRatedMoviesGrid.innerHTML = ''; // Clear the grid

    topRatedMovies.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid');
}

function displayTopRatedMovies2() {
    const topRatedMoviesGrid2 = document.getElementById('topRatedMoviesGrid2');
    topRatedMoviesGrid2.innerHTML = ''; // Clear the grid

    topRatedMovies2.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid2.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid2');
}

function displayTopRatedMovies3() {
    const topRatedMoviesGrid3 = document.getElementById('topRatedMoviesGrid3');
    topRatedMoviesGrid3.innerHTML = ''; // Clear the grid

    topRatedMovies3.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid3.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid3');
}

function displayTopRatedMovies4() {
    const topRatedMoviesGrid4 = document.getElementById('topRatedMoviesGrid4');
    topRatedMoviesGrid4.innerHTML = ''; // Clear the grid

    topRatedMovies4.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid4.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid4');


}


function displayTopRatedMovies5() {
    const topRatedMoviesGrid5 = document.getElementById('topRatedMoviesGrid5');
    topRatedMoviesGrid5.innerHTML = ''; // Clear the grid

    topRatedMovies5.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid5.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid5');

  
}


function displayTopRatedMovies6() {
    const topRatedMoviesGrid6 = document.getElementById('topRatedMoviesGrid6');
    topRatedMoviesGrid6.innerHTML = ''; // Clear the grid

    topRatedMovies6.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid6.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid6');

    
}


function displayTopRatedMovies7() {
    const topRatedMoviesGrid7 = document.getElementById('topRatedMoviesGrid7');
    topRatedMoviesGrid7.innerHTML = ''; // Clear the grid

    topRatedMovies7.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid7.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid7');

    
}


function displayTopRatedMovies8() {
    const topRatedMoviesGrid8 = document.getElementById('topRatedMoviesGrid8');
    topRatedMoviesGrid8.innerHTML = ''; // Clear the grid

    topRatedMovies8.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid8.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid8');

    
}


function displayTopRatedMovies9() {
    const topRatedMoviesGrid9 = document.getElementById('topRatedMoviesGrid9');
    topRatedMoviesGrid9.innerHTML = ''; // Clear the grid

    topRatedMovies9.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid9.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid9');

    
}


function displayTopRatedMovies10() {
    const topRatedMoviesGrid10 = document.getElementById('topRatedMoviesGrid10');
    topRatedMoviesGrid10.innerHTML = ''; // Clear the grid

    topRatedMovies10.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid10.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid10');

    
}


function displayTopRatedMovies11() {
    const topRatedMoviesGrid11 = document.getElementById('topRatedMoviesGrid11');
    topRatedMoviesGrid11.innerHTML = ''; // Clear the grid

    topRatedMovies11.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid11.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid11');

    
}


function displayTopRatedMovies12() {
    const topRatedMoviesGrid12 = document.getElementById('topRatedMoviesGrid12');
    topRatedMoviesGrid12.innerHTML = ''; // Clear the grid

    topRatedMovies12.forEach((movie) => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <a href="${movie.link}">
                <img src="${movie.image}" alt="${movie.title}">
            </a>
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.releaseDate}</p>
        `;
        topRatedMoviesGrid12.appendChild(movieCard);
    });
    updateHorizontalScroll('topRatedMoviesGrid12');

    
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
