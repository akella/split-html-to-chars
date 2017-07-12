import HTML from "html-parse-stringify";

function SplitText(obj, LetterTemplate, WordTemplate) {
	if (obj.type == "text") {
		obj.content = obj.content
			.split(/(?!$)/u)
			.map(char => {
				return LetterTemplate.replace(/\$/g, char);
			})
			.join("");

		if (WordTemplate) {
			obj.content = obj.content
				.split(LetterTemplate.replace(/\$/g, " "))
				.filter(item => {
					return item != "";
				})
				.map(parsedword => {
					return WordTemplate.replace(/\$/g, parsedword);
				})
				.join("");
		}
	}
	if (obj.children) {
		obj.children.forEach(tag => {
			SplitText(tag, LetterTemplate, WordTemplate);
		});
	}
}

export default function Splitter(html, LetterTemplate, WordTemplate) {
	var ast = HTML.parse(html);
	ast.forEach(tag => {
		SplitText(tag, LetterTemplate, WordTemplate);
	});
	return HTML.stringify(ast);
}
