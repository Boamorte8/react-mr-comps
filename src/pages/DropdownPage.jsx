import { useState } from 'react';
import Dropdown from '../components/Dropdown';

const DropdownPage = () => {
	const options = [
		{
			label: 'React',
			value: 'react'
		},
		{
			label: 'Vue',
			value: 'vue'
		},
		{
			label: 'Angular',
			value: 'angular'
		},
		{
			label: 'Node',
			value: 'node'
		},
		{
			label: 'HTML',
			value: 'html'
		},
		{
			label: 'Javascript',
			value: 'javascript'
		},
		{
			label: 'CSS',
			value: 'css'
		}
	];
	const [selectedOption, setSelectedOption] = useState(null);
	return (
		<div className='flex'>
			<Dropdown
				options={options}
				value={selectedOption}
				onChange={setSelectedOption}
			/>
			<Dropdown
				options={options}
				value={selectedOption}
				onChange={setSelectedOption}
			/>
			<Dropdown
				options={options}
				value={selectedOption}
				onChange={setSelectedOption}
			/>
		</div>
	);
};

export default DropdownPage;
