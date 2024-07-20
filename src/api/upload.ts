import axios from 'axios';

export const upload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await axios.post(
        'https://api.imgbb.com/1/upload',
        formData,
        {
            params: {
                key: process.env.NEXT_PUBLIC_IMGBB_API_KEY,
            },
        },
    );

    return response.data.data.url;
};
