// const cloudinary = require("cloudinary").v2;
import axios from "axios";
import Cookies from "universal-cookie";

const base64ToHttps = (dataURI) => {
  const BASEURL = process.env.REACT_APP_SAMPLE;
  const cookies = new Cookies();  

  let URLEnd;

  async function uploadToCloudinary(base64Image) {
    const cloudName = "dztfrtajl"; // Replace with your Cloudinary cloud name
    const apiKey = "667977251421997"; // Replace with your Cloudinary API key
    const apiSecret = "xSGbKD9hpB-wQya5bHzc_c4Nao8"; // Replace with your Cloudinary API secret
    const uploadPreset = "h0ivhmwn"; // Replace with your Cloudinary upload preset name

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    try {
      const response = await axios.post(url, {
        file: `${base64Image}`,
        upload_preset: uploadPreset,
        api_key: apiKey,
        api_secret: apiSecret,
      });
      const fetchInterview = async () => {
        const viewData = await axios
          .post(`${BASEURL}/DetectEmotion`, {
            imageUrl: response.data.secure_url,
          })
          .then((Data) => {
            let OriginalStorage =JSON.parse((localStorage.getItem("AWSResult")));
            console.log("------>",OriginalStorage);
            let finalStorage=[...OriginalStorage,Data.data.result[0]];
            localStorage.setItem("AWSResult", JSON.stringify(finalStorage));
          })
          .catch((ErrorR) => {
            console.log("kkkkk", ErrorR);
          });
      };
      fetchInterview();
      return response.data.secure_url;
    } catch (error) {
      console.error(
        "Error uploading image to Cloudinary:",
        error.response.data
      );
      throw error;
    }
  }
  // Example usage
  const base64Image = dataURI;

  uploadToCloudinary(base64Image)
    .then((secureUrl) => {
      URLEnd = secureUrl;
    })
    .catch((error) => {
      console.error("Error uploading image:", error);
    });

  return URLEnd;
};

export default base64ToHttps;
