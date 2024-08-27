import { useEffect, useState } from "react";
import API_URL from "@/utils/config";

export function useFetchCategories() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URL + `api/categories/all`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setCategories(data);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Fetch categories only if they haven't been fetched yet
    if (!categories) {
      fetchCategories();
    }
  }, [categories]);

  return categories;
}
