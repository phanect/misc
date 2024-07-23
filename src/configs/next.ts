import deepmerge from "deepmerge";
import react from "./react.ts";

export default deepmerge(react, {
  extends: [ "next/core-web-vitals" ],
});
