import './App.css';
import Counter from './components/counter';
import Photos from './components/photos';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <AboutUs />
      <Counter />
      <Photos />
      <Footer />
    </div>
  );
}

export default App;
