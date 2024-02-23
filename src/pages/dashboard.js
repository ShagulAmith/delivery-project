import React, {Component} from 'react';
import Header from '../layout/header';
import Sidebar from '../layout/sidebar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="screen-wrap">
        <Header />
        <main className="app-main">
            <Sidebar />
            <div className="app-content">
                <div className="app-body"></div>
            </div>
        </main>
      </div>
    )
  }
}