export interface FetchNews {
  isLoading: boolean;
  news: News[];
  digitalEconomyNews?: News[];
}

export interface News {
  _id: string;
  title: string;
  description: string;
  image?: string;
  publicationDate: Date| string;
}

export interface BingNewsSearchResponse {
  _type?:                 string;
  readLink?:              string;
  queryContext?:          QueryContext;
  totalEstimatedMatches?: number;
  sort?:                  Sort[];
  value:                  NewsResponse[];
}

export interface NewsResponse {
  _type:         ValueType;
  name:          string;
  url:           string;
  image?:        ValueImage;
  description:   string;
  about?:        About[];
  mentions?:     Mention[];
  provider:      Provider[];
  datePublished: string;
}

export interface QueryContext {
  _type:         string;
  originalQuery: string;
  adultIntent:   boolean;
}

export interface Sort {
  _type:      string;
  name:       string;
  id:         string;
  isSelected: boolean;
  url:        string;
}

export enum ValueType {
  NewsArticle = "NewsArticle",
}

export interface About {
  _type:    AboutType;
  readLink: string;
  name:     string;
}

export enum AboutType {
  Thing = "Thing",
}

export interface ValueImage {
  _type:     string;
  thumbnail: PurpleThumbnail;
}

export interface PurpleThumbnail {
  _type:      string;
  contentUrl: string;
  width:      number;
  height:     number;
}

export interface Mention {
  _type: AboutType;
  name:  string;
}

export interface Provider {
  _type:  ProviderType;
  name:   string;
  image?: ProviderImage;
}

export enum ProviderType {
  Organization = "Organization",
}

export interface ProviderImage {
  _type:     string;
  thumbnail: FluffyThumbnail;
}

export interface FluffyThumbnail {
  _type:      string;
  contentUrl: string;
}

export interface Category {
  state: boolean;
  value: string
}

export interface NewsState {
  digitalEconomy: Category;
  entertaiment: Category;
  business: Category;
}

export interface SingupInitialData {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface SingupValidationData {
  email: (string | ((value: string) => boolean))[];
  phoneNumber:  (string | ((value: string) => boolean))[];
  name:  (string | ((value: string) => boolean))[];
  lastName:  (string | ((value: string) => boolean))[];
}

export interface User {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
