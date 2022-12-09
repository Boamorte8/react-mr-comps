import classNames from 'classnames';
import Link from './Link';

const Sidebar = ({ ...props }) => {
	const links = [
		{ label: 'Dropdown', path: '/' },
		{ label: 'Accordion', path: '/accordion' },
		{ label: 'Buttons', path: '/buttons' }
	];

	const renderedLinks = links.map(({ label, path }) => {
		const classes = classNames('mb-3 pl-2');

		return (
			<Link
				key={label}
				to={path}
				className={classes}
				activeClassName='font-bold border-l-4 border-blue-500'
			>
				{label}
			</Link>
		);
	});

	return (
		<div
			{...props}
			className='sticky top-0 overflow-y-scroll flex flex-col items-start'
		>
			{renderedLinks}
		</div>
	);
};

export default Sidebar;
