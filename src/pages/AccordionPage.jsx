import Accordion from '../components/Accordion';

const AccordionPage = () => {
	const items = [
		{
			id: crypto.randomUUID(),
			label: 'How I can use React?',
			content:
				'You have 2 choices. First, you can use React adding an script to your application or creating a new application using a cli. CRA or Vite. Eiusmod est officia duis est Lorem Lorem eu et sunt nostrud velit eiusmod ullamco voluptate. Ullamco adipisicing mollit quis aute fugiat fugiat excepteur commodo cupidatat labore. Enim pariatur ex et esse consequat occaecat adipisicing eu nisi. Enim tempor nisi irure dolor ad. Pariatur labore in aliquip velit amet dolor nulla officia adipisicing ipsum ea.'
		},
		{
			id: crypto.randomUUID(),
			label: 'How I can use Vue?',
			content:
				'You have 2 choices. First, you can use Vue adding an script to your application or creating a new application using Vite. Magna Lorem eiusmod officia excepteur. Lorem adipisicing cupidatat do velit sint. Labore exercitation est laborum quis et labore veniam ea minim duis cupidatat deserunt laboris. Pariatur est officia incididunt exercitation do ad exercitation labore dolor eu cupidatat culpa nostrud consequat. Esse labore aute et reprehenderit. Excepteur nulla cillum in culpa adipisicing velit exercitation Lorem ullamco amet ad aliqua.'
		},
		{
			id: crypto.randomUUID(),
			label: 'How I can use Angular?',
			content:
				'You need to create a project with ng-cli, this is the command line interface of angular. Voluptate eiusmod ex labore exercitation laborum nostrud deserunt labore exercitation dolore incididunt nulla dolor occaecat. Exercitation deserunt aute ea ea. Et dolore tempor ex pariatur excepteur ut enim do. Duis adipisicing anim duis esse fugiat consequat enim. Ipsum consectetur velit magna et. Ipsum laborum Lorem ipsum reprehenderit magna.'
		},
		{
			id: crypto.randomUUID(),
			label: 'How I can use Node?',
			content:
				'You only need install node in your machine and you can use the console of Node REPL for running javascript code or you can use a .js file. Voluptate eiusmod ex labore exercitation laborum nostrud deserunt labore exercitation dolore incididunt nulla dolor occaecat. Exercitation deserunt aute ea ea. Et dolore tempor ex pariatur excepteur ut enim do. Duis adipisicing anim duis esse fugiat consequat enim. Ipsum consectetur velit magna et. Ipsum laborum Lorem ipsum reprehenderit magna.'
		}
	];
	return (
		<div className=''>
			<Accordion items={items} />
		</div>
	);
};

export default AccordionPage;
