import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
// SSC
import {
  CharactersList,
  CharactersListContainer,
  CharactersListContainer2,
  UserCard,
} from "./examples/SSC/";
// HoC
import {
  CharactersListHoC,
  CharactersListHoC2,
  CharactersListHoC3,
  CharactersListHoC4,
  HoCUserCard,
} from "./examples/HoC/";
// RP
import {
  CharactersListRP,
  CharactersListRP2,
  CharactersListRP3,
  CharactersListRP4,
  CharactersListRP5,
  RPUserCard,
} from "./examples/RP";
// Custom hooks
import {
  CharactersListCH,
  CharactersListCH2,
  CharactersListCH3,
  CharactersListCH4,
  CHUserCard,
} from "./examples/hooks";
// Compound components
import { CCApp1, CCApp2, CCApp3, CCApp4 } from "./examples/CC";

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
              {/* SSC */}
              <Route exact path="/ssc/1" component={CharactersList} />
              <Route exact path="/ssc/2" component={CharactersListContainer} />
              <Route exact path="/ssc/3" component={CharactersListContainer2} />
              <Route exact path="/ssc/exercise">
                <UserCard title="My user card!" />
              </Route>
              {/* HoC */}
              <Route exact path="/hoc/1" component={CharactersListHoC} />
              <Route exact path="/hoc/2" component={CharactersListHoC2} />
              <Route exact path="/hoc/3" component={CharactersListHoC3} />
              <Route exact path="/hoc/4" component={CharactersListHoC4} />
              <Route exact path="/hoc/exercise">
                <HoCUserCard title="My user card!" />
              </Route>
              {/* RP */}
              <Route exact path="/rp/1" component={CharactersListRP} />
              <Route exact path="/rp/2" component={CharactersListRP2} />
              <Route exact path="/rp/3" component={CharactersListRP3} />
              <Route exact path="/rp/4" component={CharactersListRP4} />
              <Route exact path="/rp/5" component={CharactersListRP5} />
              <Route exact path="/rp/exercise">
                <RPUserCard title="My user card!" />
              </Route>
              {/* Custom hooks */}
              <Route exact path="/ch/1" component={CharactersListCH} />
              <Route exact path="/ch/2" component={CharactersListCH2} />
              <Route exact path="/ch/3" component={CharactersListCH3} />
              <Route exact path="/ch/4" component={CharactersListCH4} />
              <Route exact path="/ch/exercise">
                <CHUserCard title="My user card!" />
              </Route>
              {/* Compound Components */}
              <Route exact path="/cc/1" component={CCApp1} />
              <Route exact path="/cc/2" component={CCApp2} />
              <Route exact path="/cc/3" component={CCApp3} />
              <Route exact path="/cc/4" component={CCApp4} />

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
