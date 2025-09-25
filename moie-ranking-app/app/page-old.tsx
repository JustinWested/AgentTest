import Image from "next/image";

import React, { useState } from 'react';

interface Movie {
  id: number;
  title: string;
  year: number;
}

const initialMovies: Movie[] = [
  { id: 1, title: 'The Godfather', year: 1972 },
  { id: 2, title: 'Star Wars: Episode IV – A New Hope', year: 1977 },
  { id: 3, title: 'Pulp Fiction', year: 1994 },
  { id: 4, title: 'The Shawshank Redemption', year: 1994 },
  { id: 5, title: 'The Dark Knight', year: 2008 },
];

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
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
