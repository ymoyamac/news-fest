import { useEffect, useState } from 'react';
import { FetchNews, News } from '../interfaces';
import { startLoadingNews } from '../helpers/getNews';

export const useFetchNews = (newsCategory: string): FetchNews => {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [news, setNews] = useState<News[]>([]);

  const getNews = async() => {
    const newsLoaded = await startLoadingNews(newsCategory);
    setNews(newsLoaded);
    setIsLoading(false);
  }

  useEffect(() => {
    getNews();
  }, [newsCategory]);

  return {
    isLoading,
    news,
  };
}