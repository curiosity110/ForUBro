import './index.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      {/* active <Route> will be rendered here: https://stackoverflow.com/a/49706920 */}
      <Footer />
    </div>
  );
};

export default Layout;
