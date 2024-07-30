

import axiosInstance from '@/utils/axios'; 

export default  async function User() {
    try {
        const response = await axiosInstance.get('/api/user');
        return response.data;
    } catch (error) {
        console.error('Failed ', error);
        return error
    }
}