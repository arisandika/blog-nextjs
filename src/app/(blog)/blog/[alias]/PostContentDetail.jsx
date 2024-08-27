const PostContent = ({ content }) => {
  // Pastikan `content` adalah array
  if (!Array.isArray(content)) {
    console.error('Invalid content format:', content);
    return <div>Content is not available or invalid format.</div>;
  }

  return (
    <article>
      {content.map((paragraph, index) => (
        <div key={index} className="mx-auto text-base md:text-lg">
          {paragraph}
        </div>
      ))}
    </article>
  );
};

export default PostContent;
