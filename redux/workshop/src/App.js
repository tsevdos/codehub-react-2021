import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
import Redux04 from "./examples/04/index";
import Exercise01 from "./examples/exercise1/index";
import Redux05 from "./examples/05/index";

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
              <Route exact path="/redux/4" component={Redux04} />
              <Route exact path="/exercise/1" component={Exercise01} />
              <Route exact path="/redux/5" component={Redux05} />

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
