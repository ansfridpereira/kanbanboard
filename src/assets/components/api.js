import axios from 'axios';

const fetchData = () => {
  return axios.get('https://apimocha.com/quicksell/data')
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
};

export { fetchData };
