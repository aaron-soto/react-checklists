import './inline-link.scss';

export const InlineLink = (props) => {
	return (
		<a className='inlineLink' href={props.href}>
			{props.children}
		</a>
	);
};
