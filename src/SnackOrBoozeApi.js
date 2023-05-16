import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
    static async getSnacks() {
        const response = await axios.get(`${BASE_API_URL}/snacks`);
        return response.data;
    }

    static async getDrinks() {
        const response = await axios.get(`${BASE_API_URL}/drinks`);
        return response.data;
    }

    static async addItem({ id, type, name, description, recipe, serve }) {
        const data = { id, name, description, recipe, serve };

        if (type === "drink") {
            const response = await axios.post(`${BASE_API_URL}/drinks`, data);
            return response.data.drink;
        } else {
            const response = await axios.post(`${BASE_API_URL}/snacks`, data);
            return response.data.snack;
        }
    }
}

export default SnackOrBoozeApi;
