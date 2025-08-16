import { Movie } from '@/contexts/WatchlistContext';

// Import all movie posters
import dunePartTwo from '@/assets/dune-part-two.jpg';
import oppenheimer from '@/assets/oppenheimer.jpg';
import barbie from '@/assets/barbie.jpg';
import spiderVerse from '@/assets/spider-verse.jpg';
import johnWick4 from '@/assets/john-wick-4.jpg';
import wednesday from '@/assets/wednesday.jpg';
import houseOfDragon from '@/assets/house-of-dragon.jpg';
import strangerThings from '@/assets/stranger-things.jpg';
import theBear from '@/assets/the-bear.jpg';
import theLastOfUs from '@/assets/the-last-of-us.jpg';
import heroImage from '@/assets/hero-banner.jpg';

export const moviesData: Movie[] = [
  {
    id: 1,
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
    trailer: "https://www.youtube.com/watch?v=Way9Dexny3w"
  },
  {
    id: 2,
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
    trailer: "https://www.youtube.com/watch?v=uYPbbksJxIg"
  },
  {
    id: 3,
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
    trailer: "https://www.youtube.com/watch?v=pBk4NYhWNMM"
  },
  {
    id: 4,
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
    trailer: "https://www.youtube.com/watch?v=cqGjhVJWtEg"
  },
  {
    id: 5,
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
    trailer: "https://www.youtube.com/watch?v=qEVUtrk8_B4"
  },
  {
    id: 6,
    title: "Fast X",
    image: heroImage,
    year: "2023",
    rating: "5.8",
    genre: "Action",
    type: "movie",
    runtime: "2h 21m",
    description: "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
    director: "Louis Leterrier",
    cast: ["Vin Diesel", "Michelle Rodriguez", "Jason Statham"],
    trailer: "https://www.youtube.com/watch?v=32RAq6JzY-w"
  },
  {
    id: 7,
    title: "Scream VI",
    image: heroImage,
    year: "2023",
    rating: "6.5",
    genre: "Horror",
    type: "movie",
    runtime: "2h 3m",
    description: "The survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.",
    director: "Matt Bettinelli-Olpin",
    cast: ["Melissa Barrera", "Jenna Ortega", "Jasmin Savoy Brown"],
    trailer: "https://www.youtube.com/watch?v=h74AXqw4Opc"
  },
  {
    id: 8,
    title: "The Little Mermaid",
    image: heroImage,
    year: "2023",
    rating: "7.2",
    genre: "Family",
    type: "movie",
    runtime: "2h 15m",
    description: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs.",
    director: "Rob Marshall",
    cast: ["Halle Bailey", "Jonah Hauer-King", "Daveed Diggs"],
    trailer: "https://www.youtube.com/watch?v=kpGo2_d3oYE"
  }
];

export const tvShowsData: Movie[] = [
  {
    id: 101,
    title: "Wednesday",
    image: wednesday,
    year: "2022",
    rating: "8.1",
    genre: "Comedy",
    type: "tv",
    runtime: "45min",
    description: "Follows Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability.",
    cast: ["Jenna Ortega", "Hunter Doohan", "Percy Hynes White"],
    trailer: "https://www.youtube.com/watch?v=Di310WS8zLk"
  },
  {
    id: 102,
    title: "House of the Dragon",
    image: houseOfDragon,
    year: "2022",
    rating: "8.4",
    genre: "Fantasy",
    type: "tv",
    runtime: "60min",
    description: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
    cast: ["Paddy Considine", "Emma D'Arcy", "Matt Smith"],
    trailer: "https://www.youtube.com/watch?v=DotnJ7tTA34"
  },
  {
    id: 103,
    title: "Stranger Things",
    image: strangerThings,
    year: "2016",
    rating: "8.7",
    genre: "Sci-Fi",
    type: "tv",
    runtime: "50min",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces.",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
    trailer: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
    id: 104,
    title: "The Bear",
    image: theBear,
    year: "2022",
    rating: "8.7",
    genre: "Comedy",
    type: "tv",
    runtime: "30min",
    description: "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop.",
    cast: ["Jeremy Allen White", "Ebon Moss-Bachrach", "Abby Elliott"],
    trailer: "https://www.youtube.com/watch?v=y-cqqAJIXhs"
  },
  {
    id: 105,
    title: "The Last of Us",
    image: theLastOfUs,
    year: "2023",
    rating: "8.8",
    genre: "Drama",
    type: "tv",
    runtime: "60min",
    description: "Joel and Ellie, a pair connected through the harshness of the world they live in, are forced to survive under threatening circumstances.",
    cast: ["Pedro Pascal", "Bella Ramsey", "Anna Torv"],
    trailer: "https://www.youtube.com/watch?v=uLtkt8BonwM"
  },
  {
    id: 106,
    title: "Abbott Elementary",
    image: heroImage,
    year: "2021",
    rating: "8.2",
    genre: "Comedy",
    type: "tv",
    runtime: "22min",
    description: "A mockumentary sitcom following a group of teachers in an underfunded Philadelphia elementary school.",
    cast: ["Quinta Brunson", "Tyler James Williams", "Janelle James"],
    trailer: "https://www.youtube.com/watch?v=cHVHBnFxceI"
  },
  {
    id: 107,
    title: "Succession",
    image: heroImage,
    year: "2018",
    rating: "8.8",
    genre: "Drama",
    type: "tv",
    runtime: "60min",
    description: "The Roy family is known for controlling the biggest media and entertainment company in the world.",
    cast: ["Jeremy Strong", "Sarah Snook", "Kieran Culkin"],
    trailer: "https://www.youtube.com/watch?v=77PsqaWzwG0"
  },
  {
    id: 108,
    title: "You",
    image: heroImage,
    year: "2018",
    rating: "7.7",
    genre: "Thriller",
    type: "tv",
    runtime: "45min",
    description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
    cast: ["Penn Badgley", "Victoria Pedretti", "Elizabeth Lail"],
    trailer: "https://www.youtube.com/watch?v=srDXvt6_QAM"
  }
];

export const allContent = [...moviesData, ...tvShowsData];