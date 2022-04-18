import { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { FiCopy } from 'react-icons/fi';

import './codesnippet.scss';

export const CodeSnippet = (props) => {
	const [visible, setVisible] = useState(false);
	const copyToClipboard = () => {
		navigator.clipboard.writeText(props.children);
		setVisible(true);

		const timer = setTimeout(() => {
			setVisible(false);
		}, 3000);
		return () => clearTimeout(timer);
	};

	return (
		<>
			<div className='syntax-wrapper'>
				<span className='language'>{props.language}</span>
				<span className='clickToCopy' onClick={copyToClipboard}>
					<FiCopy className='copy-icon' />
				</span>
				<SyntaxHighlighter language={props.language} style={vscDarkPlus}>
					{props.children}
					{/* {codeString} */}
				</SyntaxHighlighter>
			</div>
			<div className={`copied ${visible ? 'active' : ''}`}>
				Copied to clipboard
			</div>
		</>
	);
};
