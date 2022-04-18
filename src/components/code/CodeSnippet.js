import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeSnippet = (props) => {
	const codeString = `
	export const CodeBlock = () => {
		return(
			<SyntaxHighlighter
			language='javascript'
			style={vscDarkPlus}
			showLineNumbers
		>
			{codeString}
		</SyntaxHighlighter>
		)
	}
	`;

	return (
		<SyntaxHighlighter language={props.language} style={vscDarkPlus}>
			{props.children}
			{/* {codeString} */}
		</SyntaxHighlighter>
	);
};
