import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
// Hooks
import HookUseState from "./examples/hooks/HookUseState";
import HookUseEffect from "./examples/hooks/HookUseEffect";
import HookUseEffect2 from "./examples/hooks/HookUseEffect2";
import HookUseEffect3 from "./examples/hooks/HookUseEffect3";
import HookUseEffect4 from "./examples/hooks/HookUseEffect4";
import HookUseReducer from "./examples/hooks/HookUseReducer";
// Forms
import SimpleInput from "./examples/forms/SimpleInput";
import InputTextarea from "./examples/forms/InputTextarea";
import SelectRadioButtonCheckbox from "./examples/forms/SelectRadioButtonCheckbox";
import FormSubmit from "./examples/forms/FormSubmit";
import AntFormSubmit from "./examples/forms/AntFormSubmit";

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
              {/* Hooks */}
              <Route exact path="/hooks/use-state" component={HookUseState} />
              <Route exact path="/hooks/use-effect" component={HookUseEffect} />
              <Route
                exact
                path="/hooks/use-effect-2"
                component={HookUseEffect2}
              />
              <Route
                exact
                path="/hooks/use-effect-3"
                component={HookUseEffect3}
              />
              <Route
                exact
                path="/hooks/use-effect-4"
                component={HookUseEffect4}
              />
              <Route
                exact
                path="/hooks/use-reducer"
                component={HookUseReducer}
              />
              {/* Forms */}
              <Route exact path="/forms/simple-input" component={SimpleInput} />
              <Route
                exact
                path="/forms/input-and-textarea"
                component={InputTextarea}
              />
              <Route
                exact
                path="/forms/select-radio-button-checkbox"
                component={SelectRadioButtonCheckbox}
              />
              <Route
                exact
                path="/forms/form-submit-async"
                component={FormSubmit}
              />
              <Route
                exact
                path="/forms/ant-design-form-submit"
                component={AntFormSubmit}
              />
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
