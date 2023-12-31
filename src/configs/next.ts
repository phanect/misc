import deepmerge from "deepmerge";
import react from "./react.js";

export default deepmerge(react, {
  extends: [ "next/core-web-vitals" ],
});
