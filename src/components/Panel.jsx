import classNames from 'classnames';
import PropTypes from 'prop-types';

const Panel = ({ className, ...props }) => {
	const classes = classNames(
		'border rounded p-3 shadow bg-white w-full',
		className
	);
	return <div {...props} className={classes} />;
};

Panel.propTypes = {
	className: PropTypes.string
};

export default Panel;
