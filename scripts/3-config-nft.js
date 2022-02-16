import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x19ca35d06a0557e46Bd68014266682CB52739F53",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "SoloPoket DAO NFT!",
        description: "This NFT will give you access to SoloPoket UI!",
        image: readFileSync("scripts/assets/SN4.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()