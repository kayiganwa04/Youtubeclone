import './App.css';
import Header from './components/Navigation/Header'
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/Videos/RecommendedVideos';

function App() {
  return (
    <div className="app">
    <Header />
    <div className='app__page'>
      <Sidebar />
    <RecommendedVideos /> 
    </div>
   
    </div>
  );
}

export default App;
