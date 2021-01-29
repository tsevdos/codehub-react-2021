import React, { Component } from "react";

const withUser = (WrappedComponent) => {
  class withUserComponent extends Component {
    state = {
      user: null,
    };

    componentDidMount() {
      fetch("http://localhost:3001/user")
        .then((res) => res.json())
        .then((user) => {
          this.setState({ user });
        });
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  }

  return withUserComponent;
};

export default withUser;
