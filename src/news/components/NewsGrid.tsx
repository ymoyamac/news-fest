import { useEffect } from 'react';
import { LoadingNews } from './LoadingNews';
import { useFetchNews, useNews } from '../../hooks'
import { NewsItem } from './'
import { NewsState } from '../../interfaces';

interface NewsGrid {
  newsState: NewsState
}

export const NewsGrid = ({newsState}: NewsGrid) => {
  const { digitalEconomy, entertaiment, business } = newsState;
  const setCategory = (): string => {
    if (digitalEconomy.state) {
      return 'digital economy'
    }
    if (entertaiment.state) {
      return 'entertaiment'
    }
    if (business.state) {
      return 'business'
    }
    return '';
  }
  const { news, isLoading } = useFetchNews(setCategory() || 'digital economy');
  
  return (
    <div className='m-auto grid gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-0 place-content-center'>
      {
        (isLoading) ? (<LoadingNews />) : (<></>)
      }
      {
        news.map((aNews) => (
          <NewsItem
            key={aNews._id}
            {...aNews}
          />
        ))
      }
    </div>
  )
}
