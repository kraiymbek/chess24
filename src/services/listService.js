import makeRequest from "../utils/api/makeRequest";

const BASE_URL = 'https://baconipsum.com/api/?type=meat-and-filler';

class ListService {
    getFillers() {
        return makeRequest
            .get(`${BASE_URL}`)
            .then((response) => response.data);
    }
}

export const listService = new ListService();
