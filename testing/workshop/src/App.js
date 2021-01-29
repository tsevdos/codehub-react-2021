import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
import WordCountApp from "./examples/01/WordCountApp";
import CharacterList1 from "./examples/03/CharacterList";
import CharacterList2 from "./examples/04/CharacterList";
import TodoApp from "./examples/05/index";
import Input from "./examples/06/Input";

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Router>
      <Layout className="layout-container">
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Switch>
              {/* Unit */}
              <Route exact path="/01" component={WordCountApp} />
              {/* React testing library */}
              <Route exact path="/03" component={CharacterList1} />
              <Route exact path="/04" component={CharacterList2} />
              <Route exact path="/05" component={TodoApp} />
              <Route exact path="/06" component={Input} />

              <Route exact path="/">
                <Title>Demos</Title>
              </Route>
            </Switch>
            <footer>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Athens, Greece.
            </footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
