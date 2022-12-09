import PropTypes from 'prop-types';
import useNavigation from '../hooks/useNavigation';

const Route = ({ path, children }) => {
	const { currentPath } = useNavigation();
	return path === currentPath ? children : null;
};

Route.propTypes = {
	path: PropTypes.string.isRequired
};

export default Route;
