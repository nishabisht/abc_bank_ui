import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/public/Home';
// import Account from './pages/private/Account';
import Transactions from './pages/private/Transactions';
import Support from './pages/private/Support';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Notifications from './pages/private/Notifications';
import Dashboard from './pages/private/Dashboard';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import FundTransfer from './components/FundTransfer/FundTransfer';
import Profile from './pages/private/Profile';
import AccountManagement from './components/AccountManagement/AccountManagement';
import Product from './pages/private/Product';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/accountManagement" component={AccountManagement}/>
        {/* <Route path="/account" component={Account} /> */}
        {/* Auth nav */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* Private user */}
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/transactions" component={Transactions} />
        <Route path="/profile" component={Profile} />
        <Route path="/product" component={Product} />
        <Route path="/support" component={Support} />
        <Route path="/notify" component={Notifications} />
        <Route path="/fundTransfer" component={FundTransfer} />
        <Route path="/transactionHistory" component={TransactionHistory} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;