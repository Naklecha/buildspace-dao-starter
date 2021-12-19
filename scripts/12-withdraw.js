import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0xB699f1db970d58862d262893ed1BCE44C438044E");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const output = await app.withdrawFunds("0xda14dfA381B4621b8fC282B9521Ce65e01bdE1E4", "0xE64E68dd14EEe85794eEd044d08a45e35d007A55");
  } catch (error) {
    console.error("failed to withdraw", error);
  }
})();