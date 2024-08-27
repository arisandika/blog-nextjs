"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { verifyToken } from "@/utils/auth";
import { CircleFadingPlus } from "lucide-react";
import Loading from "@/components/ui/loading";
import TextAreaGroup from "./TextAreaGroup";
import FileUploadPopover from "./FileUploadPopover";
import API_URL from "@/utils/config";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const NewStory = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [textareas, setTextareas] = useState([{ id: 1 }]);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    verifyToken(router, setAuthorized, setLoading, setUserId);
  }, [router]);

  if (loading) {
    return <Loading height="h-screen" margintop={"-mt-28"} />;
  }

  const addTextarea = () => {
    setTextareas([...textareas, { id: textareas.length + 1 }]);
  };

  const postSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("thumbnail_url", e.target.thumbnail_url.files[0]);
    formData.append("content_image_url", e.target.content_image_url.files[0]);

    for (let i = 0; i < textareas.length; i++) {
      formData.append(`content[]`, e.target[`content-${i + 1}`].value);
    }

    // Menambahkan data tambahan ke FormData
    formData.append("user_id", userId);
    formData.append("category_id", 1);
    formData.append("tag_id", 1);

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
      }
    } catch (error) {
      console.error("Error submitting story:", error);
    }
  };

  return (
    <form onSubmit={postSubmit} encType="multipart/form-data" className="w-full">
      <div className="flex flex-col max-w-4xl gap-4 mx-auto">
        <Textarea
          name="title"
          placeholder="Title"
          className="text-2xl md:text-3xl min-h-[60px] md:min-h-[80px] border"
        />
        <TextAreaGroup textareas={textareas} setTextareas={setTextareas} />
        <div className="flex gap-3">
          <Button
            variant="icon"
            size="iconInput"
            className="border rounded-full border-zinc-700"
            onClick={addTextarea}
          >
            <CircleFadingPlus className="w-5 h-5" />
          </Button>
          <FileUploadPopover />
        </div>
        <div className="grid gap-4">
          <div className="mb-2 space-y-2 border-b border-zinc-700">
            <h4 className="font-medium leading-none">Upload files</h4>
            <p className="pb-2 text-sm text-zinc-400">Add images</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="thumbnail_url">Thumbnail</Label>
            <Input
              id="thumbnail"
              name="thumbnail_url"
              type="file"
              className="w-full"
              onChange={(e) => {
                if (e.target.files) {
                  const thumbnail_url = e.target.files[0];
                  console.log(thumbnail_url);
                } else {
                  console.log("No file selected");
                }
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="content">Content</Label>
            <Input
              id="content"
              name="content_image_url"
              type="file"
              className="w-full"
              onChange={(e) => {
                if (e.target.files) {
                  const content_image_url = e.target.files[0];
                  console.log(content_image_url);
                } else {
                  console.log("No file selected");
                }
              }}
            />
          </div>
        </div>
        <div className="flex justify-end w-full">
          <Button type="submit">Publish</Button>
        </div>
      </div>
    </form>
  );
};

export default NewStory;
