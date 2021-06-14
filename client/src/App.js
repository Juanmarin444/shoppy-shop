import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Screens
import HomeScreen from './screens/HomeScreen/HomeScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';

// Components
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
