import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({
	primary,
	secondary,
	success,
	warning,
	danger,
	rounded,
	outline,
	className,
	...props
}) => {
	const classes = classNames(
		className,
		'px-3 py-1.5 border flex gap-2 items-center',
		{
			'border-blue-600 bg-blue-500 text-white': !!primary,
			'border-gray-900 bg-gray-900 text-white': !!secondary,
			'border-green-600 bg-green-500 text-white': !!success,
			'border-yellow-600 bg-yellow-500 text-white': !!warning,
			'border-red-600 bg-red-500 text-white': !!danger,
			'rounded-full': !!rounded,
			'bg-white': !!outline,
			'text-blue-500': outline && primary,
			'text-gray-900': outline && secondary,
			'text-green-500': outline && success,
			'text-yellow-500': outline && warning,
			'text-red-500': outline && danger
		}
	);
	return <button {...props} className={classes}></button>;
};

Button.propTypes = {
	checkKindVariation: function ({
		primary,
		secondary,
		success,
		warning,
		danger
	}) {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!success) +
			Number(!!warning) +
			Number(!!danger);
		if (count > 1) {
			return new Error(
				'Only one of `primary`, `secondary`, `success`, `warning` and `danger` can be true'
			);
		}
	},
	rounded: PropTypes.bool,
	outline: PropTypes.bool,
	className: PropTypes.string
};

export default Button;
