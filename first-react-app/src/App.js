import './App.css';
import Dashboard from './component/HOC/ProtectedDashboard';
import withAuth from './component/HOC/WithAuth';
import { Counter } from './component/StateFulFunComp';
import { ToDoList } from './component/ToDoList';

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
      <ProtectedDashboard isLoggedIn={isAuthenticated} />
      {/* <Counter /> */}
      {/* <ToDoList /> */}
    </div>
  );
}

export default App;
