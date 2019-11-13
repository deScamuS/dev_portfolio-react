import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class TabNation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  handlTabChange = tabId => {
    this.setState = { activeTab: tabId };
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTabs={this.state.activeTab} onChange={this.handleTabChange}>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>HTML</Tab>
          <Tab>MaterialUI</Tab>
          <Tab>Css&Sass</Tab>
        </Tabs>
      </div>
    );
  }
}
export default TabNation ;
