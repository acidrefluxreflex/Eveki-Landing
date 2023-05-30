import { useEffect, useState } from "react";
import {  markdownToHtml } from "@/libs/markdown-to-html";


type Props = {
  mdPath: string;
};

const MarkdownContent = ({ mdPath }: Props) => {

  const proseSetting: string =
    "prose  text-black prose-h1:text-black prose-h2:text-black prose-a:text-blue-500 prose-strong:text-blue-500 prose-strong:font-bold prose-h2:border-b-2  prose-h2:text-3xl";

  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(mdPath);
      const text = await response.text();

      const html = await  markdownToHtml(text);
      setHtmlContent(html);
    };
    fetchMarkdown();
  }, []);

  return (
    <div id="content" className="prose px-4  lg:w-2/5 ">
      <div className={proseSetting} dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );

  
};



export default MarkdownContent;
