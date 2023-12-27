import react from "./react.ts";
import { mergeConfigs } from "../helpers.ts";

export default mergeConfigs(react, {
  extends: [ "next/core-web-vitals" ],
});
