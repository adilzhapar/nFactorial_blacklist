import './App.css';
import Sidebar from './components/sidebar'
import Header from './components/header';
import CreatePost from './components/create-post';

function App() {
  return(
    <div className="app-wrapper">
      <Sidebar/>
      <div className="main">
        <Header />
        <CreatePost/>
      </div>

    </div>
  );
}

export default App;