import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (value, page) => {
  const response = await axios.get(``, {
    params: {
      key: '38277841-eb81ae53a2f64c4ae8aa9bab6',
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
    },
  });

  return response.data;
};
