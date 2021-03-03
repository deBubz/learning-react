import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

// example of fetch external data
async function f() {
  const res = await fetch(/* api rul */);
  return res.json();
}
// not used anywhere here
