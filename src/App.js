import React, { createContext, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/home/navbar/Navbar';
import Footer from './components/home/Footer/Footer';
import Authentication from "./pages/Authentication/Authentication";

const PrivateRoute = lazy(() => import("./components/privateRoute/PrivateRoute"));
const AdminPage = lazy(() => import('./pages/admin/AdminPage'));
const BlogPage = lazy(() => import('./pages/blogPage/BlogPage'));
const ServicePage = lazy(() => import('./pages/servicePage/ServicePage'));
const PortfolioPage = lazy(() => import('./pages/portfolioPage/PortfolioPage'));
const Home = lazy(() => import('./pages/home/Home'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));


export const UserContext = createContext();


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState();

  


  return (
    <UserContext.Provider value={[isUserLoggedIn, setIsUserLoggedIn]}>
      <Router>
        <Navbar />
        <Switch>
          <Suspense fallback={<div className='text-center h-screen flex justify-center items-center'>Loading...</div>}>
            <PrivateRoute path='/admin'>
              <AdminPage />
            </PrivateRoute>
            <Route path='/login' component={Authentication} />
            <Route path='/blogs' component={BlogPage} />
            <Route path='/services' component={ServicePage} />
            <Route path='/portfolio' component={PortfolioPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/' component={Home} />

          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>

  );
}

export default App;


