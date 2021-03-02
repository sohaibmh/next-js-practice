import Head from "next/head";
import { fromImgToUrl, API_URL } from "../../utils/urls";
import { twoDecimals } from "../../utils/format";

const Product = ({ product }) => {
  return (
    <div>
      <Head>
        {product.meta_title && <title>{product.meta_title}</title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImgToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>£{twoDecimals(product.price)}</p>

      <p>{product.content}</p>
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  // Using slug query parameter
  const product_response = await fetch(`${API_URL}/products/?slug=${slug}`);
  const found = await product_response.json();

  return {
    props: { product: found[0] }, // Because the API response for filters is an array
  };
}

export async function getStaticPaths() {
  // Retrieve all the possible paths
  const product_response = await fetch(`${API_URL}/products/`);
  const products = await product_response.json();

  // Return them to NextJS context
  return {
    paths: products.map((product) => ({
      params: {
        slug: String(product.slug),
      },
    })),
    fallback: false, // tells nextjs to show a 404 if the param is not found
  };
}

export default Product;
