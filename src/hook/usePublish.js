// import { useState } from "react";
import { api } from "../api"

export const usePublish = async (id, title) => {
    var response;
    const obj = {
        title,
        status: "published",
    }
    try {
        response = await api.patch(`/admin/quizzes/${id}`, obj)
        console.log(response.data);

    } catch (error) {
        console.log(error);

    }
    return response.data;
}
