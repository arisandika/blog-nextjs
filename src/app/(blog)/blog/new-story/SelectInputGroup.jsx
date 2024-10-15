import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CardSkeleton from "@/components/ui/card-skeleton";
import LabelSelect from "@/components/ui/label-select";

const SelectInputGroup = ({
  categories,
  tags,
  onCategoryChange,
  onTagChange,
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedTagId, setSelectedTagId] = useState("");

  useEffect(() => {
    if (onCategoryChange) {
      const selectedCategory = categories.data.find(
        (category) => category.id === parseInt(selectedCategoryId)
      );
      onCategoryChange(selectedCategoryId, selectedCategory?.name);
    }
  }, [selectedCategoryId, onCategoryChange, categories]);

  useEffect(() => {
    if (onTagChange) {
      const selectedTag = tags.data.find(
        (tag) => tag.id === parseInt(selectedTagId)
      );
      onTagChange(selectedTagId, selectedTag?.name);
    }
  }, [selectedTagId, onTagChange, tags]);

  if (!categories || !tags) return <CardSkeleton />;

  const selectedCategoryName =
    categories.data.find(
      (category) => category.id === parseInt(selectedCategoryId)
    )?.name || "Select a category";

  const selectedTagName =
    tags.data.find((tag) => tag.id === parseInt(selectedTagId))?.name ||
    "Select a tag";

  return (
    <div className="relative grid gap-4 p-4 border rounded-md md:w-80 md:left-[120px] border-zinc-800">
      <div className="mb-2 space-y-2 border-b border-zinc-800">
        <h4 className="font-medium leading-none">Category and Tag</h4>
        <p className="pb-2 text-sm text-zinc-400">Add details to your post</p>
      </div>
      <div className="grid gap-2">
        <LabelSelect>Select a category</LabelSelect>
        <Select
          name="category_id"
          value={selectedCategoryId}
          onValueChange={setSelectedCategoryId}
        >
          <SelectTrigger className="w-full">
            <SelectValue>{selectedCategoryName}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {categories.data.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <LabelSelect>Select a tag</LabelSelect>
        <Select
          name="tag_id"
          value={selectedTagId}
          onValueChange={setSelectedTagId}
        >
          <SelectTrigger className="w-full">
            <SelectValue>{selectedTagName}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {tags.data.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {tag.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectInputGroup;
