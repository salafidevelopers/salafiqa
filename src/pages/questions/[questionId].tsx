import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import ContentLayout from "@/components/contentLayout";

interface ArticleProps {
  content: string;
}

const Question: React.FC<ArticleProps> = ({ content }) => {
  const router = useRouter();
  const { slug } = router.query;

  const paths = usePathname();
  return (
    <ContentLayout>
      <article className="border p-3 my-4 border-[#00000026] rounded-md prose prose-h3:text-lg prose-p:text-sm">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </ContentLayout>
  );
};

export default Question;

// Implement getStaticPaths to define dynamic paths
export async function getStaticPaths() {
  // Define the list of possible slugs dynamically (e.g., from a data source)
  const articlesDirectory = path.join(process.cwd(), "src/utils/questions");
  const fileNames = fs.readdirSync(articlesDirectory);

  console.log({ fileNames });

  const paths = fileNames.map((fileName) => ({
    params: { questionId: fileName.replace(/\.md$/, "") },
  }));

  return {
    paths,
    fallback: false, // Set fallback to false to pre-render only the defined paths
  };
}

// Implement getStaticProps to fetch data for a specific slug
export async function getStaticProps({
  params,
}: {
  params: { questionId: string };
}) {
  // Decode the slug to handle non-ASCII characters properly
  const decodedSlug = decodeURIComponent(params.questionId);

  // Construct the file path using the decoded slug
  const filePath = path.join(
    process.cwd(),
    "src/utils/questions",
    `${decodedSlug}.md`
  );

  try {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { content } = matter(fileContent);

    return {
      props: {
        content,
      },
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      notFound: true, // Return 404 page if file not found or cannot be read
    };
  }
}
