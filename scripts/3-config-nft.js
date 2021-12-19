import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xB699f1db970d58862d262893ed1BCE44C438044E",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The 0xCrypto Cat NFT",
        description: "This NFT will give you access to 0xCryptoDAO!",
        image: readFileSync("scripts/assets/workingcat.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()