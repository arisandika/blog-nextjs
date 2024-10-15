import { useEffect, useState } from "react";
import API_URL from "@/utils/config";
import { useParams } from "next/navigation";

export function useFetchPostDetail() {
  const { alias } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const response = await fetch(API_URL + `api/posts/show/${alias}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ alias }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        console.log("Post fetched successfully:", data);

        // Convert content JSON string to array
        const postData = {
          ...data.data,
          content: Array.isArray(JSON.parse(data.data.content)) ? JSON.parse(data.data.content) : [],
        };
        setPost(postData);
      } catch (error) {
        setError(error);
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostDetail();
  }, [alias]);

  return { post, loading, error };
}
