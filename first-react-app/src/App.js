import { Component } from 'react';
import './App.css';
import Dashboard from './component/HOC/ProtectedDashboard';
import withAuth from './component/HOC/WithAuth';
import { Counter } from './component/StateFulFunComp';
import { ToDoList } from './component/ToDoList';
import Component1 from './component/Context/Component1';
import AuthProvider from './component/LoginContext/AuthProvider';
import LoginComponent from './component/LoginContext/LoginComponent';
import ProtectedComponent from './component/LoginContext/ProtectedComponent';

// const EnhancedComponent = withGreeting(MyComponent);

const ProtectedDashboard = withAuth(Dashboard);
const App = () => {
  sessionStorage.setItem("isAuthenticated", false);
  let isAuthenticated = Boolean(sessionStorage.getItem("isAuthenticated"));
  // console.log("isAuthenticated",sessionStorage.getItem("isAuthenticated"))

  // sessionStorage.removeItem("message");
  // sessionStorage.clear();

  return (
    <div className="App">
      {/* <StateLessComponent /> */}
      {/* <EnhancedComponent name="Chris" /> */}
      {/* <ProtectedDashboard isLoggedIn={isAuthenticated} /> */}
      {/* <Counter /> */}
      {/* <ToDoList /> */}
      {/* <Component1 /> */}
      <AuthProvider>
        <>
          <LoginComponent />
          <ProtectedComponent />
        </>
      </AuthProvider>
    </div>
  );
}

export default App;
