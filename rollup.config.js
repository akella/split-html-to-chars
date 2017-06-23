import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: "src/splitter.js",
	format: "cjs",
	plugins: [
		resolve(),
		babel({
			exclude: "node_modules/**" // only transpile our source code
		}),
        commonjs({
          namedExports: {
            'node_modules/html-parse-stringify/index.js': [ 'HTML' ]
          }
        })
	],
	dest: "index.js" // equivalent to --output
};
