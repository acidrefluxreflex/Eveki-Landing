
import { promises as fs } from "fs";
import path from "path";

export const getAllSlug = async (dirPath: string) => {
  const fileNames = await fs.readdir(dirPath);
  return fileNames.map((fileName: any) => {
    return path.parse(fileName).name;
  });
};
