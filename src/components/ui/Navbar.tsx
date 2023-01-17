import { useState } from 'react';
import { NewsState } from '../../interfaces';

interface NavbarProps {
  newsState: NewsState
  handleSetFocusDigitalEconomy: () => void
  handleSetFocusEntertaiment: () => void
  handleSetFocusBusiness: () => void
}

export function Navbar({ newsState, handleSetFocusDigitalEconomy, handleSetFocusEntertaiment, handleSetFocusBusiness }: NavbarProps): JSX.Element {
  const [ navbarOpen, setNavbarOpen ] = useState<boolean>(false);
  const { digitalEconomy, entertaiment, business } = newsState;
  
  return (
    <>
      <nav className="flex flex-wrap items-center justify-around px-2 py-3 bg-[#202124] mb-3 sticky top-0 z-50">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <p
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
            >
              News<span className="text-indigo-700">Fest</span>
            </p>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer ${(digitalEconomy.state) ? 'border-b-2 border-indigo-700 text-indigo-700' : ''}`}
                id="digitalEconomy"
                onClick={() => handleSetFocusDigitalEconomy()}
              >
                Digital economy
              </li>
              <li
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer ${(entertaiment.state) ? 'border-b-2 border-indigo-700 text-indigo-700' : ''}`}
                onClick={() => handleSetFocusEntertaiment()}

              >
                entertaiment
              </li>
              <li
                className={`px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:cursor-pointer ${(business.state) ? 'border-b-2 border-indigo-700 text-indigo-700' : ''}`}
                onClick={() => handleSetFocusBusiness()}
              >
                business
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
