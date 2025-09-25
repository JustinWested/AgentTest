// test
import React, { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
}

const initialMovies: Movie[] = [
  { id: 1, title: 'The Godfather', year: 1972 },
  { id: 2, title: 'Star Wars: Episode IV \u2013 A New Hope', year: 1977 },
  { id: 3, title: 'Pulp Fiction', year: 1994 },
  { id: 4, title: 'The Shawshank Redemption', year: 1994 },
  { id: 5, title: 'The Dark Knight', year: 2008 },
];

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return;
    const newList = [...movies];
    const draggedItem = newList[draggedIndex];
    newList.splice(draggedIndex, 1);
    newList.splice(index, 0, draggedItem);
    setDraggedIndex(index);
    setMovies(newList);
  };

  const handleSave = () => {
    alert('Order saved!');
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">My Movie Rankings</h1>
      <ul className="max-w-md mx-auto">
        {movies.map((movie, index) => (
          <li
            key={movie.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => {
              e.preventDefault();
              handleDragOver(index);
            }}
            className="border border-gray-300 rounded-md p-2 my-2 bg-white cursor-move"
          >
            <span className="font-semibold mr-2">{index + 1}.</span>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
      <div className="text-center mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSave}
        >
          Save Order
        </button>
      </div>
    </div>
  );
}
