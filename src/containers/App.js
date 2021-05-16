import './App.css';
import CardList from '../components/CardList';
import Filter from '../components/Filter';

function App() {
  return (
    <div className='tc'>
      <h1>Maltego</h1>
      <h2>Coding Challenge</h2>
      <Filter/>
      <CardList/>
    </div>
  );
}

export default App;
