import Layout from "../../components/layout";
import { getAllPostIDs, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title} <br /> {postData.id} <br /> {postData.date}
    </Layout>
  );
}

// set dynamic paths
export async function getStaticPaths() {
  const paths = getAllPostIDs();
  return {
    paths,
    fallback: false,
  };
}

// set dynamic props
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: { postData },
  };
}
