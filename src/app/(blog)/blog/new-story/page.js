"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { verifyToken } from "@/utils/auth";
import { useFetchData } from "@/hooks/useFetchData";
import { Slide, ToastContainer, toast } from "react-toastify";
import Loading from "@/components/ui/loading";
import TextAreaGroup from "./TextAreaGroup";
import FileInputGroup from "./FileInputGroup";
import SelectInputGroup from "./SelectInputGroup";
import FormControls from "./FormControls.jsx";
import MetaFileDisplay from "./MetaFileDisplay";
import API_URL from "@/utils/config";
import LoadingSpinner from "@/components/ui/loading-spinner";
import "react-toastify/dist/ReactToastify.css";

const NewStoryForm = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [textareas, setTextareas] = useState([{ id: 1 }]);
  const [showFileInput, setShowFileInput] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [contentFile, setContentFile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedTagId, setSelectedTagId] = useState("");
  const [thumbnailFileName, setThumbnailFileName] = useState("");
  const [contentFileName, setContentFileName] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [selectedTagName, setSelectedTagName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = useFetchData("categories");
  const tags = useFetchData("tags");
  const router = useRouter();

  useEffect(() => {
    verifyToken(router, setAuthorized, setLoading, setUserId);
  }, [router]);

  if (loading) {
    return <Loading height="h-screen" margintop={"-mt-28"} />;
  }

  const addTextarea = (e) => {
    e.preventDefault();
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
    setThumbnailFileName(file ? file.name : "");
  };

  const handleContentChange = (file) => {
    setContentFile(file);
    setContentFileName(file ? file.name : "");
  };

  const handleCategoryChange = (value, name) => {
    setSelectedCategoryId(value);
    setSelectedCategoryName(name);
  };

  const handleTagChange = (value, name) => {
    setSelectedTagId(value);
    setSelectedTagName(name);
  };

  const createPost = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
        toast.success("Story submitted successfully!");
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        if (data.errors) {
          Object.entries(data.errors).forEach(([key, value]) => {
            toast.error(value[0]);
          });
        } else {
          toast.error("Failed to submit story.");
        }
      }
    } catch (error) {
      toast.error("Failed to submit story.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={createPost}
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
          <FormControls
            addTextarea={addTextarea}
            toggleFileInput={toggleFileInput}
            toggleSelect={toggleSelect}
            showFileInput={showFileInput}
            showSelect={showSelect}
          />
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
          <MetaFileDisplay
            thumbnailFileName={thumbnailFileName}
            contentFileName={contentFileName}
            selectedCategoryName={selectedCategoryName}
            selectedTagName={selectedTagName}
          />
          <div className="flex justify-end w-full">
            <Button
              variant="secondary"
              size="lg"
              className="my-8 rounded-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <LoadingSpinner />
                  <span className="ml-2">Publishing...</span>
                </span>
              ) : (
                "Publish"
              )}
            </Button>
          </div>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
        className={"toast-message"}
      />
    </>
  );
};

export default NewStoryForm;
