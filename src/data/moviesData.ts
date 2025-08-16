import { Movie } from '@/contexts/WatchlistContext';

// Import all movie posters
import dunePartTwo from '@/assets/dune-part-two-correct.jpg';
import oppenheimer from '@/assets/oppenheimer-fixed.jpg';
import barbie from '@/assets/barbie-correct.jpg';
import spiderVerse from '@/assets/spider-man-across-spider-verse.jpg';
import johnWick4 from '@/assets/john-wick-chapter-4.jpg';
import wednesday from '@/assets/wednesday-correct.jpg';
import houseOfDragon from '@/assets/house-of-dragon-correct.jpg';
import strangerThings from '@/assets/stranger-things-correct.jpg';
import theBear from '@/assets/the-bear-correct.jpg';
import theLastOfUs from '@/assets/the-last-of-us-correct.jpg';
import heroImage from '@/assets/hero-banner.jpg';
import avatar2 from '@/assets/avatar-2.jpg';
import topGunMaverick from '@/assets/top-gun-maverick-correct.jpg';
import blackPanther from '@/assets/black-panther-correct.jpg';
import parasite from '@/assets/parasite-correct.jpg';
import theBatman from '@/assets/batman-2022.jpg';
import everythingEverywhere from '@/assets/everything-everywhere-correct.jpg';
import doctorStrange2 from '@/assets/doctor-strange-2.jpg';
import squidGame from '@/assets/squid-game-fixed.jpg';
import moneyHeist from '@/assets/money-heist-fixed.jpg';
import mirzapur from '@/assets/mirzapur-correct.jpg';
import scam1992 from '@/assets/scam-1992-correct.jpg';
import breakingBad from '@/assets/breaking-bad-correct.jpg';
import bahubali2 from '@/assets/baahubali-2-correct.jpg';
import minionsRiseOfGru from '@/assets/minions-rise-gru-correct.jpg';

export const moviesData: Movie[] = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    image: avatar2,
    year: "2022",
    rating: "7.6",
    genre: "Adventure",
    type: "movie",
    runtime: "3h 12m",
    description: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldaña", "Sigourney Weaver"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0"
  },
  {
    id: 2,
    title: "Top Gun: Maverick",
    image: topGunMaverick,
    year: "2022",
    rating: "8.3",
    genre: "Action",
    type: "movie",
    runtime: "2h 11m",
    description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Jennifer Connelly", "Miles Teller"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=qSqVVswa420"
  },
  {
    id: 3,
    title: "Black Panther: Wakanda Forever",
    image: blackPanther,
    year: "2022",
    rating: "6.7",
    genre: "Action",
    type: "movie",
    runtime: "2h 41m",
    description: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    director: "Ryan Coogler",
    cast: ["Angela Bassett", "Letitia Wright", "Lupita Nyong'o"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM"
  },
  {
    id: 4,
    title: "Parasite",
    image: parasite,
    year: "2019",
    rating: "8.5",
    genre: "Drama",
    type: "movie",
    runtime: "2h 12m",
    description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
  },
  {
    id: 5,
    title: "The Batman",
    image: theBatman,
    year: "2022",
    rating: "7.8",
    genre: "Crime",
    type: "movie",
    runtime: "2h 56m",
    description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=mqqft2x_Aa4"
  },
  {
    id: 6,
    title: "Everything Everywhere All at Once",
    image: everythingEverywhere,
    year: "2022",
    rating: "7.8",
    genre: "Comedy",
    type: "movie",
    runtime: "2h 19m",
    description: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    director: "Daniels",
    cast: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=WLJJQfUCUoQ"
  },
  {
    id: 7,
    title: "Doctor Strange in the Multiverse of Madness",
    image: doctorStrange2,
    year: "2022",
    rating: "6.9",
    genre: "Fantasy",
    type: "movie",
    runtime: "2h 6m",
    description: "Dr. Stephen Strange casts a forbidden spell that opens the doorway to the multiverse, including alternate versions of himself, whose threat to humanity is too great for the combined forces of Strange, Wong, and Wanda Maximoff.",
    director: "Sam Raimi",
    cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=aWzlQ2N6qqg"
  },
  {
    id: 8,
    title: "Dune: Part Two",
    image: dunePartTwo,
    year: "2024",
    rating: "8.8",
    genre: "Sci-Fi",
    type: "movie",
    runtime: "2h 46m",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },
  {
    id: 9,
    title: "Oppenheimer",
    image: oppenheimer,
    year: "2023",
    rating: "8.6",
    genre: "Biography",
    type: "movie",
    runtime: "3h 0m",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr."],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    id: 10,
    title: "Barbie",
    image: barbie,
    year: "2023",
    rating: "7.2",
    genre: "Comedy",
    type: "movie",
    runtime: "1h 54m",
    description: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land.",
    director: "Greta Gerwig",
    cast: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=pBk4NYhWNMM"
  },
  {
    id: 11,
    title: "Spider-Man: Across the Spider-Verse",
    image: spiderVerse,
    year: "2023",
    rating: "8.7",
    genre: "Animation",
    type: "movie",
    runtime: "2h 20m",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    director: "Joaquim Dos Santos",
    cast: ["Shameik Moore", "Hailee Steinfeld", "Brian Tyree Henry"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=cqGjhVJWtEg"
  },
  {
    id: 12,
    title: "John Wick: Chapter 4",
    image: johnWick4,
    year: "2023",
    rating: "7.8",
    genre: "Action",
    type: "movie",
    runtime: "2h 49m",
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy.",
    director: "Chad Stahelski",
    cast: ["Keanu Reeves", "Donnie Yen", "Bill Skarsgård"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4"
  },
  {
    id: 13,
    title: "Baahubali 2: The Conclusion",
    image: bahubali2,
    year: "2017",
    rating: "8.2",
    genre: "Action",
    type: "movie",
    runtime: "2h 47m",
    description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    director: "S.S. Rajamouli",
    cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=G62HrubdD6o"
  },
  {
    id: 14,
    title: "Minions: The Rise of Gru",
    image: minionsRiseOfGru,
    year: "2022",
    rating: "6.5",
    genre: "Family",
    type: "movie",
    runtime: "1h 27m",
    description: "The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
    director: "Kyle Balda",
    cast: ["Steve Carell", "Pierre Coffin", "Alan Arkin"],
    streamingUrl: "https://archive.org/details/movies",
    trailer: "https://www.youtube.com/watch?v=p_CWaOAmx5s"
  }
];

export const tvShowsData: Movie[] = [
  {
    id: 101,
    title: "Squid Game",
    image: squidGame,
    year: "2021",
    rating: "8.0",
    genre: "Thriller",
    type: "tv",
    runtime: "60min",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
    cast: ["Lee Jung-jae", "Park Hae-soo", "Wi Ha-jun"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=oqxAJKy0ii4"
  },
  {
    id: 102,
    title: "Money Heist (La Casa de Papel)",
    image: moneyHeist,
    year: "2017",
    rating: "8.2",
    genre: "Crime",
    type: "tv",
    runtime: "50min",
    description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=_InqQJRqGW4"
  },
  {
    id: 103,
    title: "Breaking Bad",
    image: breakingBad,
    year: "2008",
    rating: "9.5",
    genre: "Drama",
    type: "tv",
    runtime: "47min",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
    id: 104,
    title: "Mirzapur",
    image: mirzapur,
    year: "2018",
    rating: "8.4",
    genre: "Crime",
    type: "tv",
    runtime: "45min",
    description: "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
    cast: ["Pankaj Tripathi", "Ali Fazal", "Vikrant Massey"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=ZNeGF-PvRHM"
  },
  {
    id: 105,
    title: "Scam 1992: The Harshad Mehta Story",
    image: scam1992,
    year: "2020",
    rating: "9.5",
    genre: "Biography",
    type: "tv",
    runtime: "50min",
    description: "Set in 1980s and 90s Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
    cast: ["Pratik Gandhi", "Shreya Dhanwanthary", "Hemant Kher"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=c91XUyg9gWE"
  },
  {
    id: 106,
    title: "Wednesday",
    image: wednesday,
    year: "2022",
    rating: "8.1",
    genre: "Horror",
    type: "tv",
    runtime: "45min",
    description: "Follows Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability.",
    cast: ["Jenna Ortega", "Hunter Doohan", "Percy Hynes White"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=Di310WS8zLk"
  },
  {
    id: 107,
    title: "House of the Dragon",
    image: houseOfDragon,
    year: "2022",
    rating: "8.4",
    genre: "Fantasy",
    type: "tv",
    runtime: "60min",
    description: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
    cast: ["Paddy Considine", "Emma D'Arcy", "Matt Smith"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=DotnJ7tTA34"
  },
  {
    id: 108,
    title: "Stranger Things",
    image: strangerThings,
    year: "2016",
    rating: "8.7",
    genre: "Sci-Fi",
    type: "tv",
    runtime: "50min",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
    id: 109,
    title: "The Bear",
    image: theBear,
    year: "2022",
    rating: "8.7",
    genre: "Comedy",
    type: "tv",
    runtime: "30min",
    description: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
    cast: ["Jeremy Allen White", "Ebon Moss-Bachrach", "Abby Elliott"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=y-cqqAJIXhs"
  },
  {
    id: 110,
    title: "The Last of Us",
    image: theLastOfUs,
    year: "2023",
    rating: "8.8",
    genre: "Drama",
    type: "tv",
    runtime: "60min",
    description: "Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to survive under threatening circumstances.",
    cast: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
    streamingUrl: "https://archive.org/details/television",
    trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM"
  }
];

export const allContent = [...moviesData, ...tvShowsData];