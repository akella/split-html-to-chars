import HTML from "html-parse-stringify";

function recur(obj, template, words) {
	if (obj.type == "text") {
		obj.content = obj.content
			.split(/(?!$)/u)
			.map(char => {
				return template.replace(/\$/g, char);
			})
			.join("");

		if (words) {
			obj.content = obj.content
				.split(template.replace(/\$/g, " "))
				.filter(item => {
					return item != "";
				})
				.map(parsedword => {
					return words.replace(/\$/g, parsedword);
				})
				.join("");
		}
	}
	if (obj.children) {
		obj.children.forEach(tag => {
			recur(tag, template, words);
		});
	}
}

export default function Splitter(html, template, words) {
	var ast = HTML.parse(html);
	ast.forEach(tag => {
		recur(tag, template, words);
	});
	return HTML.stringify(ast);
}
