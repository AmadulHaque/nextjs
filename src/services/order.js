
import axiosInstance from '@/utils/axios'; 

export default  async function OrderCreate(formData) {
    try {
        const response = await axiosInstance.post('/api/order-create',formData);
        console.log(response);
        return response;
    } catch (error) {
        // console.error('Failed ', error);
        return  error;
    }
}