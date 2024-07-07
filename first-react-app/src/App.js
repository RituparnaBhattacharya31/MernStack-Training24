import { Component } from 'react';
import './App.css';
import Dashboard from './component/HOC/ProtectedDashboard';
import withAuth from './component/HOC/WithAuth';
import { ToDoList } from './component/ToDoList';
import Component1 from './component/Context/Component1';
import AuthProvider from './component/LoginContext/AuthProvider';
import LoginComponent from './component/LoginContext/LoginComponent';
import ProtectedComponent from './component/LoginContext/ProtectedComponent';
import { TodoProvider } from './component/ToDoApp/TodoProvider';
import AddTodo from './component/ToDoApp/AddTodo';
import ViewTodoList from './component/ToDoApp/ViewTodoList';
import Counter from './component/Ref/Counter';
import AnimateButton from './component/Ref/AnimateButton';
import UnControlledForm from './component/Ref/UnControlledForm';
import ControlledForm from './component/Ref/ControlledForm';
import CallBackCounter from './component/CallBack/CallBackCounter';
import ExpensiveCalculation from './component/Memo/ExpensiveCalculation';

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
      {/* <AuthProvider>
        <>
          <LoginComponent />
          <ProtectedComponent />
        </>
      </AuthProvider> */}
      {/* <Counter /> */}
      {/* <TodoProvider>
        <h1>To do App</h1>
        <AddTodo /><br></br>
        <ViewTodoList />
      </TodoProvider> */}
      {/* <Counter /> */}
      {/* <AnimateButton /> */}
      {/* <UnControlledForm /> */}
      {/* <ControlledForm /> */}
      {/* <CallBackCounter /> */}
      <ExpensiveCalculation />
    </div>
  );
}

export default App;
