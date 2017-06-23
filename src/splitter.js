import HTML from "html-parse-stringify";

function recur(obj, template) {
	if (obj.type == "text") {
		obj.content = obj.content
			.split(/(?!$)/u)
			.map(char => {
				return template.replace(/\$/g, char);
			})
			.join("");
	}
	if (obj.children) {
		obj.children.forEach(tag => {
			recur(tag, template);
		});
	}
}

export default function Splitter(html, template) {
	var ast = HTML.parse(html);
	ast.forEach(tag => {
		recur(tag, template);
	});
	return HTML.stringify(ast);
}
