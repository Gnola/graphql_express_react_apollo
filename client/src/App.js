import './App.css';
import logo from './logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto'}}/>
          <Routes>
            <Route exact path="/" element={<Launches/>} />
            <Route exact path="/launch/:flight_number" element={<Launch/>} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
