const PostContent = ({ content }) => {
  return (
    <article>
      <div className="mx-auto text-base md:text-lg">
        {content}
      </div>
    </article>
  );
};

export default PostContent;
