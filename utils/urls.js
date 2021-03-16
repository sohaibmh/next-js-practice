export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_test_1C84D4395BC4EB8C";

export const STRIPE_PK =
  process.env.NEXT_PUBLIC_STIPE_PK || "pk_test_1C84D4395BC4EB8C";

/**
 * Given and image return the URL
 * Works for local and deployed strapis
 * @param {any} image
 */
export const fromImgToUrl = (image) => {
  if (!image) {
    return "";
  }

  // the indexOf "/" means if it is a relative path
  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }

  return image.url;
};
