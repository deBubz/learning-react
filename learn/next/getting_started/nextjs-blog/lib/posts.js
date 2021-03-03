import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

// find dir to posts folder
const postDir = path.join(process.cwd(), "posts");

// grap blog post info from posts/
export function getSortedPostData() {
  // get filenames under posts
  const fileName = fs.readdirSync(postDir);
  const allPostsData = fileName.map((fn) => {
    // remove md
    const id = fn.replace(/\.md$/, "");

    // read md as string
    const fullPath = path.join(postDir, fn);
    const contents = fs.readFileSync(fullPath, "utf8");

    // gray matter
    const matterRes = matter(contents);

    // combine data
    return { id, ...matterRes.data };
  });

  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

// return list of file name from posts/
export function getAllPostIDs() {
  const filename = fs.readdirSync(postDir);

  // returns
  // [
  // { params: { id: filename }}
  // ]

  return filename.map((e) => {
    return {
      params: {
        id: e.replace(/\.md$/, ""),
      },
    };
  });

  // must be an array of objects or getStaticPaths will fail
}

// get blog post data
export async function getPostData(id) {
  const fullPath = path.join(postDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // parse data with gray-matter
  const matterResult = matter(fileContents);

  // convert markdown to html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const htmlContent = processedContent.toString();
  // data need to be fetch asynchronously

  return {
    id,
    htmlContent,
    ...matterResult.data,
  };
}

// example of fetch external data
async function f() {
  const res = await fetch(/* api rul */);
  return res.json();
}
// not used anywhere here
