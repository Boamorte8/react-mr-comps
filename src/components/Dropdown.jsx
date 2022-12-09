import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

const Dropdown = ({ options, value, onChange, className, ...props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleSelect = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = option => {
		toggleSelect();
		onChange(option);
	};

	useEffect(() => {
		const handleClick = event => {
			if (!dropdownRef.current) return;
			if (
				!(
					dropdownRef.current === event.target ||
					dropdownRef.current.contains(event.target)
				)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('click', handleClick, true);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	const renderedOptions = options.map(option => {
		return (
			<div
				key={option.value}
				className='hover:bg-sky-100 rounded cursor-pointer p-1'
				onClick={() => handleOptionClick(option)}
			>
				{option.label}
			</div>
		);
	});
	return (
		<div {...props} className='w-48 relative' ref={dropdownRef}>
			<Panel
				className='flex justify-between items-center cursor-pointer'
				onClick={toggleSelect}
			>
				<span>{value?.label || 'Select option'}</span>
				<GoChevronDown
					className={`text-lg transition-transform duration-300 ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</Panel>
			{isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
		</div>
	);
};

Dropdown.propTypes = {
	className: PropTypes.string,
	value: PropTypes.object,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(PropTypes.object)
};

export default Dropdown;
