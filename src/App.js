import React, { Suspense } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './globals/navbar/mainNav';
import BackToTop from './components/BackToTop';
import Footer from './globals/Footer/Footer';
import Spinner from './globals/Spinner/Spinner';

const HomePage = React.lazy(() => import('./pages/landing/Landing'));
const Business = React.lazy(() => import('./pages/business/Business'));
const BusinessHome = React.lazy(() =>
  import('./pages/business/Landing/HomePage')
);
const SharesHome = React.lazy(() => import('./pages/shares/HomePage'));
const SingleShare = React.lazy(() => import('./pages/shares/Share'));
const InvestorsHome = React.lazy(() => import('./pages/investors/HomePage'));
const PartnersHome = React.lazy(() => import('./pages/partner/Landing'));
const Support = React.lazy(() => import('./pages/support/Support'));
const Article = React.lazy(() => import('./pages/support/Article.js'));
const Dashboard = React.lazy(() => import('./pages/user/Dashboard'));
const RaiseFund = React.lazy(() => import('./pages/user/raise-fund/RaiseFund'));
const CompleteReg = React.lazy(() => import('./components/auth/CompleteReg'));
const Register = React.lazy(() => import('./components/auth/Register'));
const Login = React.lazy(() => import('./components/auth/Login'));
const About = React.lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Navbar />
      <BackToTop />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/business_home" component={BusinessHome} />
          <Route exact path="/investors_home" component={InvestorsHome} />
          <Route exact path="/partners_home" component={PartnersHome} />
          <Route exact path="/shares" component={SharesHome} />
          <Route exact path="/supports" component={Support} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/fund" component={RaiseFund} />
          <Route exact path="/complete_reg" component={CompleteReg} />
          <Route exact path="/signup" component={Register} />
          <Route exact path="/signin" component={Login} />
          {/* this paths should take params */}
          <Route exact path="/share" component={SingleShare} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/business" component={Business} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
