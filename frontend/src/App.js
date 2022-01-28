import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import ManagePage from './pages/ManagePage/ManagePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import React from 'react';
import axios from 'axios';
import './App.css';
import isObjEmpty from './utils/isObjEmpty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      redirect: false
    }
  }

  user_login = async () => {
    const username = document.getElementById('username').value;
		const body = await axios.post('http://localhost:8080/user/login', { username: username });
		this.setState({ user: body.data });
  }

  reset_user = () => {
    this.setState({user: {}});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/manage" element={ <ManagePage user={ this.state.user } resetUserFunc={ this.reset_user }/> }></Route>
          <Route path="/login" element={ <LoginPage userLoginFunc={ this.user_login } user={ this.state.user } /> }></Route>
          <Route path="/register" element={ <RegisterPage /> }></Route>
          <Route path="*" element={ <LoginPage userLoginFunc={ this.user_login }  user={ this.state.user } /> }></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
