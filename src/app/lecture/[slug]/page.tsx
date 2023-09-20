"use client";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

const SlugPage = ({ params }: SlugPageProps) => {
  return <h1>{params.slug}</h1>;
};
export default SlugPage;
