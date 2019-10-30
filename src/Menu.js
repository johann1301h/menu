import React, { Component } from 'react';
import styled from 'styled-components';
import Slide001 from './Slide001.js';
import Slide002 from './Slide002.js';
import Slide003 from './Slide003.js';
import Slide004 from './Slide004.js';
import Slide005 from './Slide005.js';

const Frame = styled.div`
  height: 100%;
  width: 100%;
`;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      someData: true,
    }
  }

  render() {

    return (
      <Frame>
        <Slide001/>
      </Frame>
    );
  }

}

export default Menu;
