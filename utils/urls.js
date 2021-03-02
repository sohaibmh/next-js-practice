export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

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
