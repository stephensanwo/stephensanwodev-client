let URL;
if (process.env.REACT_APP_ENV === "production") {
  URL = process.env.REACT_APP_API_URL_PROD;
} else {
  URL = process.env.REACT_APP_API_URL_PROD;
}
export default URL;
