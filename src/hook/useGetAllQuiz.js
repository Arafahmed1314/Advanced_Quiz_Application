import { useEffect, useState } from "react";
// import axios from "axios";
// import { api } from "../api";
import { useAxios } from "./useAxios";

export const useGetAllQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { api } = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true); // Start loading
            try {
                const response = await api.get("http://localhost:5000/api/quizzes");
                setQuizzes(response.data);
            } catch (err) {
                setError(err.response?.data?.message || "Something went wrong"); // Handle error
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchData();
    }, []);

    return { quizzes, error, loading }; // Return the state
};
