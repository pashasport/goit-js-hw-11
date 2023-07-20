import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '38290525-911726ad1b6a7f076609ffcd1';

export async function fetchPhoto(q, page, perPage) {
  const response = await axios.get(`${URL}`, {
    params: {
      q: q,
      page: page,
      per_page: perPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: ' true',
      key: KEY,
    },
  });
  return response.data;
}
