import React, { Component } from "react"
class FallBackUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  render() {
    const refresh = () => window.location.reload(true);
    if (this.state.hasError) {
      return (
        <>
          <div>
            <div className="d-flex justify-content-center">
              <h1 className="text-white">Oops... Can't search</h1>
            </div>
            <div className="d-flex justify-content-center">
              <button onClick={refresh}>Relord</button>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}

export default FallBackUI;
