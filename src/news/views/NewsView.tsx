import { NewsState } from '../../interfaces';
import { NewsGrid } from '../components';

interface NewsViewProps {
  newsState: NewsState
}

export const NewsView = ({ newsState }: NewsViewProps) => {
  return (
    <main className="w-9/12 m-auto text-white text-2xl">
      <NewsGrid
        newsState={newsState}
      />
    </main>
  )
}
