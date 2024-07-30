

import axiosInstance from '@/utils/axios'; 

export default  async function BrandList() {
    try {
        const response = await axiosInstance.get('/api/brands');
        return response.data;
    } catch (error) {
        console.error('Failed ', error);
        return error
    }
}