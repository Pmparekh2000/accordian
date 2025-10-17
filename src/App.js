import logo from './logo.svg';
import './App.css';
import Faq from './components/Faq';
import { DUMMY_ACCORDIAN_DATA } from './utils/constants';

function App() {
  return (
    <div className="faq-container">
      <Faq accordianData={DUMMY_ACCORDIAN_DATA}/>
    </div>
  );
}

export default App;
