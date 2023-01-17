import { createContext } from 'react';
import { NewsState } from '../../interfaces';

export interface NewsContextProps {
  newsState: NewsState,
  handleSetFocusDigitalEconomy: () => void
}

export const NewsContext = createContext<NewsContextProps>({} as NewsContextProps);