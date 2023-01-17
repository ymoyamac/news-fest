import axios from 'axios';
//https://api.cognitive.microsoft.com/api/v7/news/search?q=entertamient
export const bingNewsSearchApi = axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    safeSearch: 'Off',
    offset: '20',
    textFormat: 'Raw',
    freshness: 'Week'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'cf5ec15df7msh2135a5876cf5e97p1eefe7jsn5ed53f781c2d',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
});