import axios from 'axios';

export const baseUrl = 'https://www.speedrun.com/api/v1';

export const getRecords = () => (
  axios.get(`${baseUrl}/games`)
);

export const getRecordDetails = id => (
  axios.get(`${baseUrl}/games/${id}`)
);
