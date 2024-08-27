import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

const FileInputGroup = ({
  onThumbnailChange,
  onContentChange,
  initialThumbnailFile,
  initialContentFile,
}) => {
  const [thumbnailFile, setThumbnailFile] = useState(initialThumbnailFile);
  const [contentFile, setContentFile] = useState(initialContentFile);

  useEffect(() => {
    if (thumbnailFile) {
      onThumbnailChange(thumbnailFile);
    }
  }, [thumbnailFile]);

  useEffect(() => {
    if (contentFile) {
      onContentChange(contentFile);
    }
  }, [contentFile]);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
  };

  const handleContentChange = (e) => {
    const file = e.target.files[0];
    setContentFile(file);
  };

  return (
    <div className="relative grid gap-4 p-4 border rounded-md md:w-80 md:left-[60px] border-zinc-800">
      <div className="mb-2 space-y-2 border-b border-zinc-800">
        <h4 className="font-medium leading-none">Upload files</h4>
        <p className="pb-2 text-sm text-zinc-400">Add images</p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail_url">Thumbnail</Label>
        <Input
          id="thumbnail_url"
          name="thumbnail_url"
          type="file"
          className="w-full"
          onChange={handleThumbnailChange}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="content_image_url">Content</Label>
        <Input
          id="content_image_url"
          name="content_image_url"
          type="file"
          className="w-full"
          onChange={handleContentChange}
        />
      </div>
    </div>
  );
};

export default FileInputGroup;
