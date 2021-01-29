import React, { Component } from "react";

const withData = ({ url, format, resource }) => (WrappedComponent) => {
  class withDataComponent extends Component {
    state = {
      data: [],
    };

    componentDidMount() {
      fetch(`${url}/${resource}?format=${format}`)
        .then((res) => res.json())
        .then((characters) => this.setState({ data: characters }));
    }

    render() {
      return <WrappedComponent {...this.state} {...this.props} />;
    }
  }

  return withDataComponent;
};

export default withData;
