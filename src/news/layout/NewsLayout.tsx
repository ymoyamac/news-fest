import { SingupForm, Navbar, Footer, Header } from '../../components';
import { NewsState } from '../../interfaces';

interface NewsLayoutProps {
  children: JSX.Element;
  newsState: NewsState
  handleSetFocusDigitalEconomy: () => void
  handleSetFocusEntertaiment: () => void
  handleSetFocusBusiness: () => void
}

export const NewsLayout = ({ children, newsState, handleSetFocusDigitalEconomy, handleSetFocusEntertaiment, handleSetFocusBusiness }: React.PropsWithChildren<NewsLayoutProps>) => {

  return (
    <>
      <Navbar
        newsState={newsState}
        handleSetFocusDigitalEconomy={handleSetFocusDigitalEconomy}
        handleSetFocusEntertaiment={handleSetFocusEntertaiment}
        handleSetFocusBusiness={handleSetFocusBusiness}
      />
      <Header />
      { children }
      <SingupForm />
      <Footer />
    </>
  )
}
