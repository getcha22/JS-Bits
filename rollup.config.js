import rollup from "rollup";
import babel from "rollup-plugin-babel";

export default {
  entry: "src/main.js",
  plugins: [ babel() ],
  dest: "src/dist/bundle.js",
}
