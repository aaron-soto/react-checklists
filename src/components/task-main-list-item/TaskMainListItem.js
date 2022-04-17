export const TaskMainListItem = ({ id, total, complete }) => {
	return (
		<li>
			<div
				className='progress'
				style={{ width: `${(complete / total) * 100}%` }}
			></div>
			<span>{id}</span>
			<span>tasks: {total}</span>
		</li>
	);
};
