import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../../store/actions';

import Layout from '../Layout';
import AppRoutes from '../../routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions(4));
  });

  return (
    <Layout>
      <AppRoutes />
    </Layout>
  );
}

export default App;
