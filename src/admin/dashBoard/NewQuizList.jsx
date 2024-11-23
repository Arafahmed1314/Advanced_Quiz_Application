/* eslint-disable react/prop-types */
import axios from "axios";
import CubeIcon from "../../svg/CubeIcon";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { showDeleteSuccess, showPublishSuccess } from "../../utils/toast";

function NewQuizList({ title, description, status, id, onDelete }) {
  const [isPublish, setIsPublish] = useState(status !== "published");
  const { auth } = useAuth();
  const { authToken } = auth;

  const handlePublish = async (quizSetId) => {
    const obj = {
      status: "published",
      title,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/admin/quizzes/${quizSetId}`,
        obj,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );

      if (response.status === 200) {
        showPublishSuccess();
      }

      // Update the local state to reflect the published status
      setIsPublish(false);
    } catch (error) {
      console.error("Failed to publish quiz:", error.message);
      alert("Failed to publish quiz. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/quizzes/${id}`,
        {
          headers: { Authorization: `Bearer ${authToken}` },
        }
      );
      if (response.status == "success") {
        showDeleteSuccess();
      }
      // console.log("Delete successful", response.data);
      onDelete(id);
    } catch (error) {
      console.error("Failed to delete quiz:", error.message);
      alert("Failed to delete quiz. Please try again.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 group cursor-pointer hover:shadow-lg transition-shadow">
      <div className="text-buzzr-purple mb-4 group-hover:scale-105 transition-transform">
        <CubeIcon />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform truncate">
        {title}
      </h3>
      <p className="text-gray-600 text-sm group-hover:scale-105 transition-transform line-clamp-3">
        {description}
      </p>
      <div className="flex justify-between mt-4 space-x-4">
        <button
          onClick={handleDelete}
          className="bg-red-100 text-red-600 px-4 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition-colors"
        >
          Delete
        </button>

        <button
          onClick={() => handlePublish(id)}
          disabled={!isPublish}
          className={` bg-primary
           text-white px-4 py-2 rounded-md font-medium hover:bg-primary/80 transition-colors`}
        >
          {isPublish ? "Publish" : "Published"}
        </button>
      </div>
    </div>
  );
}

export default NewQuizList;
