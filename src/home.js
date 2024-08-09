import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState();
  const [image, setImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let confidence = 0;

  const clearData = () => {
    setData(null);
    setImage(false);
    setSelectedFile(null);
    setPreview(null);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  }, [selectedFile, image]);

  useEffect(() => {
    if (!preview) {
      return;
    }
    setIsLoading(true);
    const sendFile = async () => {
      if (image) {
        let formData = new FormData();
        formData.append("file", selectedFile);
        let res = await axios({
          method: "post",
          url: process.env.REACT_APP_API_URL,
          data: formData,
        });
        if (res.status === 200) {
          setData(res.data);
          console.log(res.data);
        }
        setIsLoading(false);
      }
    };

    sendFile();
  }, [image, preview, selectedFile]);

  const onSelectFile = (files) => {
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setImage(false);
      setData(undefined);
      return;
    }
    setSelectedFile(files[0]);
    setData(undefined);
    setImage(true);
  };

  if (data) {
    confidence = (parseFloat(data.confidence) * 100).toFixed(2);
  }

  return (
      <div className="text-[3vh] flex flex-col items-center justify-center xl:mx-[5vh] py-[1vh] md:py-[5vh] ">
       
        <div className=" flex flex-col gap-2 2xl:gap-[1vh] justify-center shadow-lg rounded-lg p-[2vh] w-full h-full md:h-[70vh] bg-gray-200 bg-opacity-10 bg-blur-xl rounded-2xl ">
          {image && (
            <div className="overflow-hidden rounded-lg ">
              <img
                className="relative object-cover w-full h-full"
                src={preview}
                alt="Preview"
              />
            </div>
          )}
          {!image && (
            <div className="flex justify-center items-center p-6 text-center bg-gray-50 border-dashed border-4 border-gray-300 rounded-lg h-full">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => onSelectFile(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="block cursor-pointer text-blue-600 hover:text-blue-800"
              >
                Choose an image of a potato plant leaf to process
              </label>
            </div>
          )}
          {data && (
            <div className="bg-white rounded-lg p-2 shadow-sm">
            
                  <div className="flex flex-col md:flex-row justify-between ">
                    <div className="px-4 xl:py-[2vh] text-gray-700 text-sm font-bold text-[2.5vh] 2xl:text-[3vh]">
                      Label:  {data.class}
                    </div>
                    <div className="px-4 xl:py-[2vh] text-gray-700 text-sm font-bold text-[2.5vh] 2xl:text-[3vh]">
                      Confidence:  {confidence}%
                    </div>
                  </div>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center justify-center mt-[1vh]">
              <svg
                className="animate-spin w-[3vh] h-[3vh] text-pink-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <p className=" font-semibold mt-2">Processing</p>
            </div>
          )}
        </div>

        {data && (
          <button
            onClick={clearData}
            className="w-full  bg-white text-black text-[3vh] font-bold rounded-lg p-[1vh] hover:bg-gray-200 flex items-center justify-center mt-[1vh]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[3vh] w-[3vh] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Clear
          </button>
        )}
      </div>
   
  );
};
