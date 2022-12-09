import classNames from 'classnames';
import PropTypes from 'prop-types';
import useNavigation from '../hooks/useNavigation';

const Link = ({ to, className, activeClassName, ...props }) => {
	const { currentPath, navigate } = useNavigation();
	const classes = classNames(
		'text-blue-500',
		className,
		currentPath === to && activeClassName
	);
	const handleClick = event => {
		if (event.metaKey || event.ctrlKey) return;
		event.preventDefault();
		navigate(to);
	};
	return <a href={to} {...props} className={classes} onClick={handleClick} />;
};

Link.propTypes = {
	className: PropTypes.string,
	to: PropTypes.string
};

export default Link;
