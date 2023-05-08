import matter from "gray-matter";

export const getMarkdown = async (filePath: string) => {
  const response = await fetch(filePath);
  const fileContents = await response.text();

  return matter(fileContents);
};
