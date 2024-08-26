import { useEffect, useState } from "react";
import API_URL from "@/utils/config";
import { useParams } from "next/navigation";

export function useFetchPostDetail() {
  const { alias } = useParams();
  const [post, setPost] = useState(null);

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

        const data = await response.json();
        setPost(data.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPostDetail();
  }, [alias]);

  return post;
}
