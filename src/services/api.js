import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const key = '39038842-507cdb0c8ef13fbd02c51e5f3';

export const fetchGallery = async params => {
    const { data } = await axios.get('api/', {
        params: {
            ...params,
            key,
        },
    });
    return data;
};
