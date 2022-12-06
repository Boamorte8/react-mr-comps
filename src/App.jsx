import {
	GoBell,
	GoCloudDownload,
	GoCreditCard,
	GoDashboard
} from 'react-icons/go';
import Button from './components/Button';
import style from './styles/App.module.css';

const App = () => {
	const handleClick = () => {
		console.log('handleClick');
	};
	return (
		<div className='grid grid-cols-5 gap-2'>
			<div>
				<div className={style.wrapper}>
					<Button onClick={handleClick}>Test</Button>
				</div>
				<div className={style.wrapper}>
					<Button primary>Test Primary</Button>
				</div>
				<div className={style.wrapper}>
					<Button secondary>Test secondary</Button>
				</div>
				<div className={style.wrapper}>
					<Button success>Test success</Button>
				</div>
				<div className={style.wrapper}>
					<Button warning>Test warning</Button>
				</div>
				<div className={style.wrapper}>
					<Button danger>Test danger</Button>
				</div>
			</div>
			<div>
				<div className={style.wrapper}>
					<Button rounded>Test</Button>
				</div>
				<div className={style.wrapper}>
					<Button primary rounded>
						Test Primary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button secondary rounded>
						Test secondary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button success rounded>
						Test success
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button warning rounded>
						Test warning
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button danger rounded>
						Test danger
					</Button>
				</div>
			</div>
			<div>
				<div className={style.wrapper}>
					<Button outline>Test</Button>
				</div>
				<div className={style.wrapper}>
					<Button primary outline>
						Test Primary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button secondary outline>
						Test secondary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button success outline>
						Test success
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button warning outline>
						Test warning
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button danger outline>
						Test danger
					</Button>
				</div>
			</div>
			<div>
				<div className={style.wrapper}>
					<Button rounded outline>
						Test
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button primary rounded outline>
						Test Primary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button secondary rounded outline>
						Test secondary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button success rounded outline>
						Test success
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button warning rounded outline>
						Test warning
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button danger rounded outline>
						Test danger
					</Button>
				</div>
			</div>
			<div>
				<div className={style.wrapper}>
					<Button rounded outline>
						<GoBell />
						Test
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button primary rounded outline>
						<GoCloudDownload />
						Test Primary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button secondary rounded outline>
						<GoCreditCard />
						Test secondary
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button success rounded outline>
						<GoDashboard />
						Test success
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button warning rounded outline>
						<GoBell />
						Test warning
					</Button>
				</div>
				<div className={style.wrapper}>
					<Button danger rounded outline>
						<GoBell />
						Test danger
					</Button>
				</div>
			</div>
		</div>
	);
};

export default App;
