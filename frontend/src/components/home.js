import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
            <div
            className="container col-md-8 mt-6"
            style={{
              boxShadow: "8px 8px 10px gray",
              background:
                "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
              border: "1px solid gray",
              padding: "70px 50px",
              margin: "30px auto"
            }}
          >
            <h2>Home!</h2>
          </div>
            </React.Fragment>
          );
    }
}
 
export default Home;