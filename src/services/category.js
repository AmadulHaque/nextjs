
import axiosInstance from '@/utils/axios'; 

export default  async function CategoryList() {
    try {
        const response = await axiosInstance.get('/api/categories');
        return response.data;
    } catch (error) {
        console.error('Failed ', error);
        return error
    }
}