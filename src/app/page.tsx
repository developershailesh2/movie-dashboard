import Link from "next/link";
import { FaComment, FaStar } from "react-icons/fa";

export default function Home() {
  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 200,
      rating: 4.9,
      description: "Batman faces the Joker in this iconic Nolan film.",
    },
    {
      id: "4",
      title: "Fight Club",
      comments: 150,
      rating: 4.6,
      description: "An underground fight club turns into anarchy.",
    },
    {
      id: "5",
      title: "The Matrix",
      comments: 180,
      rating: 4.8,
      description: "A hacker discovers reality is a simulation.",
    },
    {
      id: "6",
      title: "Pulp Fiction",
      comments: 130,
      rating: 4.7,
      description: "A Quentin Tarantino classic with intertwined stories.",
    },
    {
      id: "7",
      title: "The Shawshank Redemption",
      comments: 220,
      rating: 5.0,
      description: "Hope and friendship blossom in prison.",
    },
    {
      id: "8",
      title: "Forrest Gump",
      comments: 170,
      rating: 4.9,
      description: "A heartfelt journey through American history.",
    },
    {
      id: "9",
      title: "The Godfather",
      comments: 210,
      rating: 5.0,
      description: "A powerful saga of a mafia family.",
    },
    {
      id: "10",
      title: "The Prestige",
      comments: 115,
      rating: 4.6,
      description: "Two magicians compete in a battle of illusions.",
    },
    {
      id: "11",
      title: "Parasite",
      comments: 140,
      rating: 4.8,
      description: "A poor family infiltrates a wealthy household.",
    },
    {
      id: "12",
      title: "Joker",
      comments: 160,
      rating: 4.5,
      description: "An origin story of Gotham's infamous villain.",
    },
    {
      id: "13",
      title: "Gladiator",
      comments: 135,
      rating: 4.7,
      description: "A Roman general seeks vengeance as a gladiator.",
    },
    {
      id: "14",
      title: "Avengers: Endgame",
      comments: 300,
      rating: 4.8,
      description: "The epic conclusion to the Avengers saga.",
    },
    {
      id: "15",
      title: "Titanic",
      comments: 190,
      rating: 4.7,
      description: "A love story aboard the ill-fated RMS Titanic.",
    },
    {
      id: "16",
      title: "The Lion King",
      comments: 160,
      rating: 4.6,
      description: "A lion cub's journey to become king.",
    },
    {
      id: "17",
      title: "Whiplash",
      comments: 145,
      rating: 4.7,
      description: "A young drummer's pursuit of greatness.",
    },
    {
      id: "18",
      title: "The Social Network",
      comments: 125,
      rating: 4.5,
      description: "The rise of Facebook and its founder.",
    },
    {
      id: "19",
      title: "Django Unchained",
      comments: 130,
      rating: 4.6,
      description: "A freed slave sets out to rescue his wife.",
    },
    {
      id: "20",
      title: "Mad Max: Fury Road",
      comments: 150,
      rating: 4.8,
      description: "A high-octane post-apocalyptic chase film.",
    },
    {
      id: "21",
      title: "Blade Runner 2049",
      comments: 110,
      rating: 4.5,
      description: "A visually stunning sci-fi sequel.",
    },
    {
      id: "22",
      title: "Her",
      comments: 105,
      rating: 4.4,
      description: "A man falls in love with an AI assistant.",
    },
    {
      id: "23",
      title: "La La Land",
      comments: 120,
      rating: 4.6,
      description: "A musical romance in modern-day LA.",
    },
    {
      id: "24",
      title: "The Grand Budapest Hotel",
      comments: 95,
      rating: 4.3,
      description: "A quirky comedy centered around a luxury hotel.",
    },
    {
      id: "25",
      title: "The Wolf of Wall Street",
      comments: 160,
      rating: 4.7,
      description: "A wild ride through Wall Street excess.",
    },
    {
      id: "26",
      title: "The Truman Show",
      comments: 115,
      rating: 4.6,
      description: "A man discovers his entire life is a TV show.",
    },
    {
      id: "27",
      title: "The Imitation Game",
      comments: 100,
      rating: 4.5,
      description:
        "The story of Alan Turing and his code-breaking work during WWII.",
    },
  ];

  const totalMovies = movies.length;
  const totalComments = movies.reduce((sum, movie) => sum + movie.comments, 0);
  const averageRating = (
    movies.reduce((sum, movie) => sum + movie.rating, 0) / totalMovies
  ).toFixed(1);

  return (
    <div className="min-h-screen space-y-8 bg-gray-800  p-8">
      <div className=" bg-gradient-to-r  from-blue-500 to-indigo-500 rounded-lg p-4 bg-white shadow-xl">
        <h2 className="font-bold text-4xl text-white mb-6">
          Dashboard Overview in{" "}
          <span className="font-bold text-black">Next.js</span>{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  text-white">
          <div className=" p-4 rounded-lg bg-gray-800 flex flex-col items-center ">
            <p className="text-lg font-medium ">Total Movies </p>
            <p className="text-4xl font-bold">{totalMovies}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center ">
            <p className="text-lg font-medium ">Total Comments </p>
            <p className="text-4xl font-bold">{totalComments}</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center ">
            <p className="text-lg font-medium ">Average Rating </p>
            <p className="text-4xl font-bold">{averageRating}</p>
          </div>
        </div>
      </div>
      {/* movie list */}

      <h2 className="text-white font-semibold text-3xl">Movie List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="bg-gray-800 border border-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link
              className="text-2xl font-bold text-blue-400 hover:text-blue-600"
              href={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
            <p className="text-white mt-2 text-lg">{movie.description}</p>

            <div className="flex justify-around items-center mt-4">
              <div className="flex items-center text-sm text-gray-300">
                <FaComment className="mr-1" />
                <span>{movie.comments}</span>
              </div>

              <div className="flex items-center text-sm text-gray-300">
                <FaStar className="mr-1" />
                <span>{movie.rating}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
