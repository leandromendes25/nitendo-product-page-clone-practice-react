"use client";
import { useEffect, useState } from "react";

interface SearchImage {
  src: string;
  alt: string;
}

interface redirectGames {
  name: string;
  href: string;
  image: SearchImage;
}
export interface SearchData {
  id: string;
  gameName: string;
  title: string;
  descriptions: string[];
  images: SearchImage[];
  demonstrationImage: SearchImage[];
  otherGames: redirectGames;
}

// Hook personalizado para buscar dados com base em um ID
export default function useSearchData(id: string) {
  const [data, setData] = useState<SearchData[]>([] as SearchData[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDataGameUrl = async () => {
      try {
        const response = await fetch(`http://localhost:8000/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    getDataGameUrl();
  }, [id]);

  return { data, loading, error };
}
