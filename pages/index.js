import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import products from "../products.json";
import styles from "../styles/Home.module.css";
import { fromImgToUrl } from "../utils/urls";
import Link from "next/link";
import { twoDecimals } from "../utils/format";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {products.map((product) => {
        return (
          <div key={product.name} className={styles.product}>
            <Link href={`/products/${product.slug}`}>
              <div className={styles.product__Row}>
                <div className={styles.product__ColImg}>
                  {" "}
                  <img src={fromImgToUrl(product.image)} />
                </div>
                <div className={styles.product__Col}>
                  {product.name} £{twoDecimals(product.price)}
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
