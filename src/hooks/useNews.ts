import { useReducer, useState } from 'react';
import { newsReducer } from '../news/context';
import { NewsState } from '../interfaces';

const initialState: NewsState = {
  digitalEconomy: {
    state: false,
    value: 'digitalEconomy'
  },
  entertaiment: {
    state: false,
    value: 'entertaiment'
  },
  business: {
    state: false,
    value: 'business'
  }
}

export const useNews = () => {
  const [ newsState, dispatch ] = useReducer(newsReducer, initialState);

  const handleSetFocusDigitalEconomy = () => {
    dispatch({ type: 'setFocusDigitalEconomyCategory', payload: {
      state: true,
      value: 'digitalEconomy'
    }});
  }
  const handleSetFocusEntertaiment = () => {
    dispatch({ type: 'setFocusEntertaimentCategory', payload: {
      state: true,
      value: 'entertaiment'
    }});
  }
  const handleSetFocusBusiness = () => {
    dispatch({ type: 'setFocusDigitalBusiness', payload: {
      state: true,
      value: 'business'
    }});
  }
  
  return {
    ...newsState,
    newsState,
    handleSetFocusDigitalEconomy,
    handleSetFocusEntertaiment,
    handleSetFocusBusiness,
  }
}
