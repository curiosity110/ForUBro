import { useDispatch, useSelector } from 'react-redux';
import { change_filter } from '../../store/slices/filter';
import './index.scss';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.selected);
  const handleFilterChange = (e) => {
    const activeFilter = e.target.getAttribute('filter');
    dispatch(change_filter(activeFilter));
  };

  return (
    <div className='Filter'>
      <div
        className={`filter-item ${filter === 'all' && 'active'}`}
        onClick={handleFilterChange}
        filter='all'
      >
        <p>all</p>
      </div>
      <div
        className={`filter-item ${filter === 'completed' && 'active'}`}
        onClick={handleFilterChange}
        filter='completed'
      >
        <p>completed</p>
      </div>
      <div
        className={`filter-item ${filter === 'uncompleted' && 'active'}`}
        onClick={handleFilterChange}
        filter='uncompleted'
      >
        <p>uncompleted</p>
      </div>
    </div>
  );
}

export default Filter;
