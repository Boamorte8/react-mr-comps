import {
	GoBell,
	GoCloudDownload,
	GoCreditCard,
	GoDashboard
} from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
	const handleClick = () => {
		console.log('handleClick');
	};
	return (
		<div className='grid grid-cols-5 gap-2'>
			<div className='flex flex-col gap-4'>
				<div>
					<Button onClick={handleClick}>Test</Button>
				</div>
				<div>
					<Button primary>Test Primary</Button>
				</div>
				<div>
					<Button secondary>Test secondary</Button>
				</div>
				<div>
					<Button success>Test success</Button>
				</div>
				<div>
					<Button warning>Test warning</Button>
				</div>
				<div>
					<Button danger>Test danger</Button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					<Button rounded>Test</Button>
				</div>
				<div>
					<Button primary rounded>
						Test Primary
					</Button>
				</div>
				<div>
					<Button secondary rounded>
						Test secondary
					</Button>
				</div>
				<div>
					<Button success rounded>
						Test success
					</Button>
				</div>
				<div>
					<Button warning rounded>
						Test warning
					</Button>
				</div>
				<div>
					<Button danger rounded>
						Test danger
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					<Button outline>Test</Button>
				</div>
				<div>
					<Button primary outline>
						Test Primary
					</Button>
				</div>
				<div>
					<Button secondary outline>
						Test secondary
					</Button>
				</div>
				<div>
					<Button success outline>
						Test success
					</Button>
				</div>
				<div>
					<Button warning outline>
						Test warning
					</Button>
				</div>
				<div>
					<Button danger outline>
						Test danger
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					<Button rounded outline>
						Test
					</Button>
				</div>
				<div>
					<Button primary rounded outline>
						Test Primary
					</Button>
				</div>
				<div>
					<Button secondary rounded outline>
						Test secondary
					</Button>
				</div>
				<div>
					<Button success rounded outline>
						Test success
					</Button>
				</div>
				<div>
					<Button warning rounded outline>
						Test warning
					</Button>
				</div>
				<div>
					<Button danger rounded outline>
						Test danger
					</Button>
				</div>
			</div>
			<div className='flex flex-col gap-4'>
				<div>
					<Button rounded outline>
						<GoBell />
						Test
					</Button>
				</div>
				<div>
					<Button primary rounded outline>
						<GoCloudDownload />
						Test Primary
					</Button>
				</div>
				<div>
					<Button secondary rounded outline>
						<GoCreditCard />
						Test secondary
					</Button>
				</div>
				<div>
					<Button success rounded outline>
						<GoDashboard />
						Test success
					</Button>
				</div>
				<div>
					<Button warning rounded outline>
						<GoBell />
						Test warning
					</Button>
				</div>
				<div>
					<Button danger rounded outline>
						<GoBell />
						Test danger
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ButtonPage;
