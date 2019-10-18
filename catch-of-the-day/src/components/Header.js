import React from 'react';

class Header extends React.Component {
    render(){

        return (
            <React.Fragment>
          <header className="top">
              <h1>Catch o the Day</h1>
          </header>
          <h3 className="tagline">
              <span>Fresh Daily</span>
          </h3>
          </React.Fragment>
        )
    }

}

export default Header;