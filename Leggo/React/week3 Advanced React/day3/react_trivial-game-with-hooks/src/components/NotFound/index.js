import { Link } from 'react-router-dom';
// The <Routes> will select this component whenever the URL doesn't match any of the other route paths
const NotFound = () => {
  return (
    <div>
      <h2>"This is not the page you are looking for" - Obi-Wan Kenobi</h2>
      <Link to='/'>
        <button>back to home</button>
      </Link>
    </div>
  );
};

export default NotFound;
