import { API_USERS, API_PINS } from "../constants";
import { dispatch } from "./api-config";

export const api = {

    signIn({ username, password }) {
        return dispatch({
            method: "POST",
            url: `${API_USERS}/login`,
            body: { username, password },
        });
    },

    signUp({ username, email, password }) {
        return dispatch({
            method: "POST",
            url: `${API_USERS}/register`,
            body: { username, email, password },
        });
    },

    createPin({ username, title, desc, rating, lat, long }) {
        return dispatch({
            method: "POST",
            url: `${API_PINS}`,
            body: { username, title, desc, rating, lat, long },
        });
    },

    fetchPinItems() {
        return dispatch({
            url: `${API_PINS}`
        })
    }
};