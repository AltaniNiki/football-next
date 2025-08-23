// src/lib/http/apiClient.ts
import axios from 'axios';
import { APISPORTS_BASE, APISPORTS_KEY } from './env';

export const apiClient = axios.create({
    baseURL: APISPORTS_BASE,
    timeout: 15_000,
    headers: {
        'x-apisports-key': APISPORTS_KEY, // ή x-rapidapi-key αν χρησιμοποιείς RapidAPI
    },
});

// (optional) request/response interceptors
apiClient.interceptors.response.use(
    (res) => res,
    (err) => {
        // Μπορείς εδώ να χαρτογραφήσεις errors σε δική σου κλάση
        return Promise.reject(err);
    }
);