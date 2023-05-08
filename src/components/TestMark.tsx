import { useEffect, useState } from "react";
import { markdownToHtml } from "@/libs/markdown-to-html";

type Props = {
  mdPath: string;
};

const MarkdownContent = ({ mdPath }: Props) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(mdPath);
      const text = await response.text();
      console.log(mdPath)
      const html = await markdownToHtml(text);
      setHtmlContent(html);
    };
    fetchMarkdown();
  }, []);

  return (
    <div id="content" className="lg:w-2/5 ">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default MarkdownContent;
