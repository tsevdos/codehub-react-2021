import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "reactstrap";
import { Dashboard, Courses, Course, AddCourse } from "./views";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/courses/:id" component={Course} />
        <Route exact path="/add-course" component={AddCourse} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
