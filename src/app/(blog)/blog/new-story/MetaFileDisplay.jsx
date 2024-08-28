import MetaItem from "@/components/ui/meta-item";

const MetaFileDisplay = ({ thumbnailFileName, contentFileName, selectedCategoryName, selectedTagName }) => (
  <div className="flex flex-wrap items-center gap-2 mt-2 text-xs">
    {thumbnailFileName && <MetaItem label="Thumbnail" value={thumbnailFileName} />}
    {contentFileName && <MetaItem label="Content Image" value={contentFileName} />}
    {selectedCategoryName && <MetaItem label="Category" value={selectedCategoryName} />}
    {selectedTagName && <MetaItem label="Tag" value={selectedTagName} />}
  </div>
);

export default MetaFileDisplay;
