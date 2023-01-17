import { useNews } from '../../hooks';
import { NewsContext, newsReducer } from '../context';
import { NewsLayout } from '../layout';
import { NewsView } from '../views';

export const NewsPage = () => {

  const { newsState, handleSetFocusDigitalEconomy, handleSetFocusEntertaiment, handleSetFocusBusiness } = useNews();

  return (
    <NewsContext.Provider value={{
      newsState,
      handleSetFocusDigitalEconomy
    }}>
      <NewsLayout
        newsState={newsState}
        handleSetFocusDigitalEconomy={handleSetFocusDigitalEconomy}
        handleSetFocusEntertaiment={handleSetFocusEntertaiment}
        handleSetFocusBusiness={handleSetFocusBusiness}
      >
        <NewsView newsState={newsState}/>
      </NewsLayout>

    </NewsContext.Provider>
  );
}
