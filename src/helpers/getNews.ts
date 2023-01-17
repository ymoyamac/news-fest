import { v4 as uuid } from 'uuid';
import { bingNewsSearchApi } from '../api/bignNewsSearchApi';
import { News, BingNewsSearchResponse, NewsResponse } from '../interfaces';

export const startLoadingNews = async(newsCategory: string): Promise<News[]> => {
  const { data } = await bingNewsSearchApi.get<BingNewsSearchResponse>('/', {params: {q: newsCategory}});
  const { value } = data;
  const news: News[] = value.map((n: NewsResponse) => ({
    _id: uuid(),
    title: n.name,
    description: n.description,
    image: n.image?.thumbnail.contentUrl,
    publicationDate: n.datePublished,
  }));
  return news;
}