/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'scale-down-ver-open': {
					'0%': { transform: 'scaleY(0)', 'transform-origin': '100% 0%' },
					'100%': { transform: 'scaleY(1)', 'transform-origin': '100% 0%' }
				}
			},
			animation: {
				'scale-down-ver-open':
					'scale-down-ver-open 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
			}
		}
	},
	plugins: []
};
