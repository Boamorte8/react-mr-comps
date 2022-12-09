import PropTypes from 'prop-types';
import { useState } from 'react';
import { GoChevronLeft } from 'react-icons/go';

const Accordion = ({ items, className, ...props }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = index => {
		setExpandedIndex(currentIndex => (index === currentIndex ? -1 : index));
	};

	const renderedItems = items.map((item, index) => {
		const expanded = expandedIndex === index;
		return (
			<div key={item.id} className='border-b border-gray-300'>
				<div
					className='flex items-center justify-between p-3 border-b border-gray-300 bg-gray-50 cursor-pointer'
					onClick={() => handleClick(index)}
				>
					<span>{item.label}</span>
					<GoChevronLeft
						className={`text-xl transition-transform duration-300 ${
							expanded ? '-rotate-90' : ''
						}`}
					/>
				</div>
				{expanded && (
					<div className={`p-5 animate-scale-down-ver-open`}>
						{item.content}
					</div>
				)}
			</div>
		);
	});
	return (
		<div {...props} className='border-x border-t rounded'>
			{renderedItems}
		</div>
	);
};

Accordion.propTypes = {
	className: PropTypes.string
};

export default Accordion;
