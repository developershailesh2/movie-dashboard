"use client";

import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa6";

interface MovieProps {
  params: {
    id: string;
  };
}

export default function MovieDetails({ params }: MovieProps) {
  const router = useRouter();

  const movies = [
    {
      id: "1",
      title: "Inception",
      comments: 124,
      rating: 4.7,
      description: "A mind-bending thriller by Christopher Nolan.",
      commentsList: [
        "Amazing movie with a complex plot!",
        "Nolans best work!",
        "Still trying to understand the ending 😅",
      ],
    },
    {
      id: "2",
      title: "Interstellar",
      comments: 98,
      rating: 4.8,
      description: "A space exploration film by Christopher Nolan.",
      commentsList: [
        "Cried during the docking scene 😭",
        "Love the soundtrack!",
        "Great visuals and emotional depth.",
      ],
    },
    {
      id: "3",
      title: "The Dark Knight",
      comments: 200,
      rating: 4.9,
      description: "Batman faces the Joker in this iconic Nolan film.",
      commentsList: [
        "Heath Ledger was phenomenal!",
        "Best superhero movie ever!",
        "The Joker stole the show.",
      ],
    },
    {
      id: "4",
      title: "Fight Club",
      comments: 150,
      rating: 4.6,
      description: "An underground fight club turns into anarchy.",
      commentsList: [
        "First rule: dont talk about it.",
        "Mind-blowing twist!",
        "Brad Pitt and Edward Norton nailed it.",
      ],
    },
    {
      id: "5",
      title: "The Matrix",
      comments: 180,
      rating: 4.8,
      description: "A hacker discovers reality is a simulation.",
      commentsList: [
        "Red pill or blue pill?",
        "Way ahead of its time.",
        "Action scenes are legendary!",
      ],
    },
    {
      id: "6",
      title: "Pulp Fiction",
      comments: 130,
      rating: 4.7,
      description: "A Quentin Tarantino classic with intertwined stories.",
      commentsList: [
        "Iconic dialogues!",
        "Tarantino's masterpiece.",
        "Non-linear storytelling done right.",
      ],
    },
    {
      id: "7",
      title: "The Shawshank Redemption",
      comments: 220,
      rating: 5.0,
      description: "Hope and friendship blossom in prison.",
      commentsList: [
        "A truly inspiring story.",
        "Morgan Freeman's narration is soothing.",
        "Masterpiece from start to end.",
      ],
    },
    {
      id: "8",
      title: "Forrest Gump",
      comments: 170,
      rating: 4.9,
      description: "A heartfelt journey through American history.",
      commentsList: [
        "Life *is* like a box of chocolates.",
        "Emotional and uplifting.",
        "Tom Hanks was perfect.",
      ],
    },
    {
      id: "9",
      title: "The Godfather",
      comments: 210,
      rating: 5.0,
      description: "A powerful saga of a mafia family.",
      commentsList: [
        "Cinematic perfection.",
        "I’m gonna make him an offer he can’t refuse.",
        "A timeless classic.",
      ],
    },
    {
      id: "10",
      title: "The Prestige",
      comments: 115,
      rating: 4.6,
      description: "Two magicians compete in a battle of illusions.",
      commentsList: [
        "Every magic trick has a cost.",
        "Kept me guessing till the end.",
        "Brilliantly executed!",
      ],
    },
    {
      id: "11",
      title: "Parasite",
      comments: 140,
      rating: 4.8,
      description: "A poor family infiltrates a wealthy household.",
      commentsList: [
        "Such a smart social commentary.",
        "Unexpected twists!",
        "Deserved the Oscar.",
      ],
    },
    {
      id: "12",
      title: "Joker",
      comments: 160,
      rating: 4.5,
      description: "An origin story of Gotham's infamous villain.",
      commentsList: [
        "Joaquin Phoenix was brilliant.",
        "Dark, disturbing, and emotional.",
        "Made me rethink villains.",
      ],
    },
    {
      id: "13",
      title: "Gladiator",
      comments: 135,
      rating: 4.7,
      description: "A Roman general seeks vengeance as a gladiator.",
      commentsList: [
        "Are you not entertained?!",
        "Epic and emotional.",
        "Russell Crowe’s best.",
      ],
    },
    {
      id: "14",
      title: "Avengers: Endgame",
      comments: 300,
      rating: 4.8,
      description: "The epic conclusion to the Avengers saga.",
      commentsList: [
        "What a finale!",
        "I cried when Iron Man...",
        "Massive fan service, loved it!",
      ],
    },
    {
      id: "15",
      title: "Titanic",
      comments: 190,
      rating: 4.7,
      description: "A love story aboard the ill-fated RMS Titanic.",
      commentsList: [
        "So emotional 😭",
        "Jack and Rose forever ❤️",
        "Beautiful and tragic.",
      ],
    },
    {
      id: "16",
      title: "The Lion King",
      comments: 160,
      rating: 4.6,
      description: "A lion cub's journey to become king.",
      commentsList: [
        "Hakuna Matata!",
        "Iconic Disney movie.",
        "Circle of Life is everything.",
      ],
    },
    {
      id: "17",
      title: "Whiplash",
      comments: 145,
      rating: 4.7,
      description: "A young drummer's pursuit of greatness.",
      commentsList: [
        "So intense!",
        "Not quite my tempo!",
        "Fantastic performances.",
      ],
    },
    {
      id: "18",
      title: "The Social Network",
      comments: 125,
      rating: 4.5,
      description: "The rise of Facebook and its founder.",
      commentsList: [
        "Fast-paced and sharp.",
        "Brilliant script and acting.",
        "Fascinating origin story.",
      ],
    },
    {
      id: "19",
      title: "Django Unchained",
      comments: 130,
      rating: 4.6,
      description: "A freed slave sets out to rescue his wife.",
      commentsList: [
        "Explosive and bold!",
        "Loved the soundtrack.",
        "Jamie Foxx nailed it.",
      ],
    },
    {
      id: "20",
      title: "Mad Max: Fury Road",
      comments: 150,
      rating: 4.8,
      description: "A high-octane post-apocalyptic chase film.",
      commentsList: [
        "Non-stop action!",
        "Visually stunning!",
        "Furiosa is a badass.",
      ],
    },
    {
      id: "21",
      title: "Blade Runner 2049",
      comments: 110,
      rating: 4.5,
      description: "A visually stunning sci-fi sequel.",
      commentsList: [
        "Haunting and beautiful.",
        "A true cinematic experience.",
        "Slow burn, but worth it.",
      ],
    },
    {
      id: "22",
      title: "Her",
      comments: 105,
      rating: 4.4,
      description: "A man falls in love with an AI assistant.",
      commentsList: [
        "Deeply emotional and unique.",
        "Made me cry 😢",
        "Loved the color palette!",
      ],
    },
    {
      id: "23",
      title: "La La Land",
      comments: 120,
      rating: 4.6,
      description: "A musical romance in modern-day LA.",
      commentsList: [
        "Beautiful visuals and music.",
        "Ending broke my heart 💔",
        "So dreamy!",
      ],
    },
    {
      id: "24",
      title: "The Grand Budapest Hotel",
      comments: 95,
      rating: 4.3,
      description: "A quirky comedy centered around a luxury hotel.",
      commentsList: [
        "Wes Anderson’s signature style!",
        "Visually delightful.",
        "Loved the quirky characters.",
      ],
    },
    {
      id: "25",
      title: "The Wolf of Wall Street",
      comments: 160,
      rating: 4.7,
      description: "A wild ride through Wall Street excess.",
      commentsList: [
        "Leo was on fire!",
        "Insanely entertaining.",
        "Based on a true story 😮",
      ],
    },
    {
      id: "26",
      title: "The Truman Show",
      comments: 115,
      rating: 4.6,
      description: "A man discovers his entire life is a TV show.",
      commentsList: [
        "Jim Carrey was amazing in this role!",
        "The concept is mind-blowing and emotional.",
        "Makes you question reality itself.",
      ],
    },
    {
      id: "27",
      title: "The Imitation Game",
      comments: 100,
      rating: 4.5,
      description:
        "The story of Alan Turing and his code-breaking work during WWII.",
      commentsList: [
        "Benedict Cumberbatch gave a powerful performance.",
        "A touching and brilliant historical film.",
        "I learned so much about Turing’s legacy.",
      ],
    },
  ];

  const find_movie = movies.find((movie) => movie.id === params.id);
  return (
    <div className="p-8 space-y-6 bg-gray-900 min-h-screen">
      {/* Movie title and movie description */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-700 p-8 rounded-xl shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">
          {find_movie?.title}
        </h2>
        <p className="text-lg text-white ">{find_movie?.description}</p>
      </div>

      {/* rating & comment summary */}
      <div className="bg-gray-600 p-6 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-xl text-gray-300">Rating:</p>
            <div className="flex items-center text-yellow-400">
              <FaStar className="mr-2" />
              <span className="text-2xl font-bold">{find_movie?.rating}</span>/5
            </div>
          </div>

          <div>
            <p className="text-xl text-gray-300">Comments:</p>
            <p className="text-2xl font-semibold text-white">
              {find_movie?.comments}
            </p>
          </div>
        </div>
      </div>

      {/* comment section */}
      <div>
        <h3 className="text-3xl font-semibold text-white mb-4 ">
          Comment List
        </h3>
        <ul className="space-y-4">
          {find_movie?.commentsList.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-800 text-white p-4 text-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p>{comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-end">
        <button
          className="text-white p-3 rounded-lg font-semibold cursor-pointer bg-red-600"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </div>
  );
}
