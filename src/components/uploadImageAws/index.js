import React, { useEffect, useState } from "react";

import AWS from "aws-sdk";

const S3_BUCKET = "mytestcareer";
const REGION = "us-east-1";
const IMAGE_URL = "https://" + S3_BUCKET + ".s3." + REGION + ".amazonaws.com/";

AWS.config.update({
  accessKeyId: "AKIAYQ6FQIMDVHQFTJBM",
  secretAccessKey: "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",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageAws = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedFile !== null) {
      const params = {
        ACL: "public-read",
        Body: selectedFile,
        Bucket: S3_BUCKET,
        Key: selectedFile.name,
      };

      myBucket
        .putObject(params)
        .on("httpUploadProgress", (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100));
        })
        .send((err) => {
          if (err) console.log(err);
        });
      localStorage.setItem(
        "imageUrl",
        "https://mytestcareer.s3.us-east-1.amazonaws.com/" +
          selectedFile["name"]
      );
    }
  }, [selectedFile]);

  return (
    <>
      <input type="file" onChange={handleFileInput} />
      {/*<button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>*/}
    </>
  );
};

export default UploadImageAws;
