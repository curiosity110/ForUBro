import './index.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <Link to='/questions/1'>Start Quiz</Link>
    </div>
  );
};

export default Home;
