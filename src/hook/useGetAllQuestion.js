import { useEffect, useState } from "react";

import { api } from "../api";
import { useAuth } from "../context/AuthContext";

export const useGetAllQuestion = (id) => {
    // console.log(id);
    const { auth } = useAuth();
    const authToken = auth?.authToken;

    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!id) return; // Skip fetching if no ID is provided

        const fetchData = async () => {
            setLoading(true); // Start loading

            try {
                const response = await api.get(`/quizzes/${id}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Add the Authorization header
                    },
                });
                // console.log(response);

                setQuestions(response.data.data.questions);
            } catch (err) {
                setError(err.response?.questions?.message || "Something went wrong");
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchData();
    }, [id]); // Refetch if the ID changes

    return { questions, error, loading };
};
