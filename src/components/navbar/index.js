import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: []
    };

  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark">

        <NavLink to="/" className="navbar-brand" >Nana Product Performance</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Views</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/apistock" className="dropdown-item no-background">Product importance score</NavLink>
                <NavLink to="/apistock" className="dropdown-item no-background">Product total ordered</NavLink>
                <NavLink to="/apistock" className="dropdown-item no-background">Product total ordered but not found</NavLink>
                <NavLink to="/apistock" className="dropdown-item no-background">Product sales indicator chart as dot’s for one month</NavLink>
                <NavLink to="/chartSales" className="dropdown-item no-background">Product chart of sales</NavLink>
                <NavLink to="/apiupdatesync" className="dropdown-item no-background">Product api update price</NavLink>
                <NavLink to="/apistock" className="dropdown-item no-background">Product api stock</NavLink>
                <NavLink to="/availabilityratio" className="dropdown-item no-background">Product availability ratio</NavLink>
              </div>
            </li>

          </ul>
        </div>
      </nav>
      );
  }

}

export default Navbar;
