import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const defaultParams = {
  key: '38277841-eb81ae53a2f64c4ae8aa9bab6',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async () => {
  const response = await axios.get('', { params: defaultParams });
  return response.data;
};
