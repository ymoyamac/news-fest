import { Category, NewsState } from "../../interfaces";
type CategoryAction =
  | { type: 'setFocusDigitalEconomyCategory', payload: Category }
  | { type: 'setFocusEntertaimentCategory', payload: Category }
  | { type: 'setFocusDigitalBusiness', payload: Category }

export const newsReducer = (state: NewsState, action: CategoryAction) => {
  switch (action.type) {
    case 'setFocusDigitalEconomyCategory':
      return {
        digitalEconomy: { state: true, value: action.payload.value },
        entertaiment: { state: false, value: 'entertaiment' },
        business: { state: false, value: 'business' },
      }
    case 'setFocusEntertaimentCategory':
      return {
        digitalEconomy: { state: false, value: 'digitalEconomy' },
        entertaiment: { state: true, value: action.payload.value },
        business: { state: false, value: 'business' },
      }
    case 'setFocusDigitalBusiness':
      return {
        digitalEconomy: { state: false, value: 'digitalEconomy' },
        entertaiment: { state: false, value: 'entertaiment' },
        business: { state: true, value: action.payload.value },
      }
    default:
      return state;
  }
}
