import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Here we are importing all the components that will be directly passed to <Route component={<ComponentName>} />
// You could even go so far as to move these components from /src/components to /src/routes in large scale applications
import Home from '../components/Home';
import Questions from '../components/Questions';
import Result from '../components/Result';
import NotFound from '../components/NotFound';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/questions/:order' element={<Questions />} />
          <Route path='/result' element={<Result />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
