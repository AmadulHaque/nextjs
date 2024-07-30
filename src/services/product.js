
import axiosInstance from '@/utils/axios';


// category,voltage,brand
export default  async function ProductList( page=1,category="", voltage="", brand="") {
    try {
        const response = await axiosInstance.get(`/api/products?perPage=8&page=${page}&category_id=${category}&brand_id=${brand}&voltage_type_id=${voltage}`);
        return response.data;
    } catch (error) {
        console.error('Failed', error);
        return error
    }
}

export async function ProductShow(id) {
    try {
        const response = await axiosInstance.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Failed', error);
        return error
    }
}