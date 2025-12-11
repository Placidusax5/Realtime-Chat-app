import axios from "axios";
import { HOST } from "../utils/constants";

// If VITE_SERVER_URL is not set, use a relative base URL so Vite's proxy
// can forward `/api` calls to the backend during development.
const baseURL = HOST || "";

export const apiClient = axios.create({
  baseURL,
  withCredentials: true,
});
