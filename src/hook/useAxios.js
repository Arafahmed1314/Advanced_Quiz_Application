import { useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";
export const useAxios = () => {
    const { auth, setAuth } = useAuth();
    // console.log(auth.authToken);

    useEffect(() => {
        const requestIntercept = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        const responseIntercept = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalReqeust = error.config;
                if (error.response.status === 401 && !originalReqeust._retry) {
                    originalReqeust._retry = true;
                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(
                            `http://localhost:5000/api/auth/refresh-token`,
                            { refreshToken }
                        );
                        const { newAuthToken } = response.data;
                        console.log(newAuthToken);
                        setAuth({ ...auth, authToken: newAuthToken.accessToken, refreshToken: newAuthToken.refreshToken });
                        originalReqeust.headers.Authorization = `Bearer ${newAuthToken.accessToken}`;

                        return axios(originalReqeust);
                    } catch (error) {
                        throw new Error(error);
                    }
                }
                return Promise.reject(error);
            }
        );
        return () => {
            api.interceptors.request.eject(requestIntercept);
            api.interceptors.response.eject(responseIntercept);
        };
    }, [auth.authToken, auth.refreshToken, setAuth, auth]);
    return { api };
};
