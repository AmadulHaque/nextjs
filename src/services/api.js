

import axiosInstance from '@/utils/axios'; 

export default  async function paymentInfos() {
    try {
        const response = await axiosInstance.get('/api/paymentInfos');
        return response.data;
    } catch (error) {
        console.error('Failed ', error);
        return error
    }
}


export  async function voltageTypes() {
    try {
        const response = await axiosInstance.get('/api/voltageTypes');
        return response.data;
    } catch (error) {
        console.error('Failed ', error);
        return error
    }
}