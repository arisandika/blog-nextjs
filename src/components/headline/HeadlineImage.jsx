import Image from "next/image";

const HeadlineImage = () => {
  return (
    <div className="w-full col-span-12 mx-auto mt-10 lg:mt-8">
      <Image
        src="/images/banner.jpg"
        alt="hero image"
        className="object-cover w-full aspect-square md:aspect-auto"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default HeadlineImage;
