"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { verifyToken } from "@/utils/auth";
import {
  CircleFadingPlus,
  X as Close,
  TableProperties,
  ImageIcon,
} from "lucide-react";
import Loading from "@/components/ui/loading";
import TextAreaGroup from "./TextAreaGroup";
import API_URL from "@/utils/config";
import FileInputGroup from "./FileInputGroup";
import SelectInputGroup from "./SelectInputGroup";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewStory = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [textareas, setTextareas] = useState([{ id: 1 }]);
  const [showFileInput, setShowFileInput] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [contentFile, setContentFile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedTagId, setSelectedTagId] = useState("");
  const router = useRouter();

  useEffect(() => {
    verifyToken(router, setAuthorized, setLoading, setUserId);
  }, [router]);

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

        console.log("Categories fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(API_URL + `api/tags/all`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        setTags(data);

        console.log("Tags fetched successfully:", data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []);

  if (loading) {
    return <Loading height="h-screen" margintop={"-mt-28"} />;
  }

  const addTextarea = (e) => {
    e.preventDefault(); // Mencegah pengiriman form
    setTextareas([...textareas, { id: textareas.length + 1 }]);
  };

  const toggleFileInput = (e) => {
    e.preventDefault();
    setShowFileInput(!showFileInput);
    if (!showFileInput) {
      setShowSelect(false);
    }
  };

  const toggleSelect = (e) => {
    e.preventDefault();
    setShowSelect(!showSelect);
    if (!showSelect) {
      setShowFileInput(false);
    }
  };

  const handleThumbnailChange = (file) => {
    setThumbnailFile(file);
  };

  const handleContentChange = (file) => {
    setContentFile(file);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategoryId(value);
  };

  const handleTagChange = (value) => {
    setSelectedTagId(value);
  };

  const postSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    if (thumbnailFile) {
      formData.append("thumbnail_url", thumbnailFile);
    }

    for (let i = 0; i < textareas.length; i++) {
      formData.append(`content[]`, e.target[`content-${i + 1}`].value);
    }

    if (contentFile) {
      formData.append("content_image_url", contentFile);
    }

    formData.append("user_id", userId);
    formData.append("category_id", selectedCategoryId);
    formData.append("tag_id", selectedTagId);

    try {
      const response = await fetch(API_URL + "api/posts/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Story submitted successfully!");
        router.push("/blog/new-story");
      } else {
        console.log("Failed to submit story");

        if (data.errors) {
          Object.entries(data.errors).forEach(([key, value]) => {
            toast.error(value[0]); // Display the first error message for each field
          });
        } else {
          toast.error("Failed to submit story.");
        }
      }
    } catch (error) {
      console.error("Error submitting story:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={postSubmit}
        encType="multipart/form-data"
        className="w-full"
      >
        <div className="flex flex-col max-w-4xl gap-4 mx-auto">
          <Textarea
            name="title"
            placeholder="Title"
            className="text-2xl md:text-3xl min-h-[60px] md:min-h-[80px]"
          />
          <TextAreaGroup textareas={textareas} setTextareas={setTextareas} />
          <div className="flex gap-3">
            <Button
              variant="icon"
              size="iconInput"
              className="border rounded-full border-zinc-800"
              onClick={addTextarea}
            >
              <CircleFadingPlus className="w-5 h-5" />
            </Button>
            <Button
              variant="icon"
              size="iconInput"
              className="border rounded-full border-zinc-800"
              onClick={toggleFileInput}
            >
              {showFileInput ? (
                <Close className="w-5 h-5" />
              ) : (
                <ImageIcon className="w-5 h-5" />
              )}
            </Button>
            <Button
              variant="icon"
              size="iconInput"
              className="border rounded-full border-zinc-800"
              onClick={toggleSelect}
            >
              {showSelect ? (
                <Close className="w-5 h-5" />
              ) : (
                <TableProperties className="w-5 h-5" />
              )}
            </Button>
          </div>
          {showFileInput && (
            <FileInputGroup
              onThumbnailChange={handleThumbnailChange}
              onContentChange={handleContentChange}
              initialThumbnailFile={thumbnailFile}
              initialContentFile={contentFile}
            />
          )}
          {showSelect && categories && (
            <SelectInputGroup
              categories={categories}
              tags={tags}
              onCategoryChange={handleCategoryChange}
              onTagChange={handleTagChange}
            />
          )}

          <div className="flex justify-end w-full">
            <Button
              variant="secondary"
              size="lg"
              className="my-8 rounded-full"
              type="submit"
            >
              Publish
            </Button>
          </div>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
};

export default NewStory;
