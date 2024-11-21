import { useEffect, useState } from "react";
import { api } from "../api";
import { useAuth } from "../context/AuthContext";

export const useGetResult = (id) => {
    const { auth } = useAuth();
    const { authToken } = auth;

    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/quizzes/${id}/attempts`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Add the Authorization header
                    },
                });

                setResult(response?.data?.data);
            } catch (err) {
                setError(err.response?.data?.message || "Something went wrong");
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchData();
    }, [id, authToken]); // Refetch if the ID or authToken changes

    return { result, error, loading };
};
