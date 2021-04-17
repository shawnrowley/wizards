import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlayerScreen from "./screens/PlayerScreen";
import InfoScreen from "./screens/InfoScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={PlayerScreen} exact />
          <Route path="/player/:id" component={InfoScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
