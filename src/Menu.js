import React, { Component } from 'react';
import styled from 'styled-components';
import Slide from './Slide.js';


const Frame = styled.div`
  height: 100%;
  width: 100%;
`;

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.settings.active,
    }
  }

  get(slide, from) {
    let end = (from === 'r') ? 'l' : 'r';
    this.refs[this.state.active].move('c', end);

    this.refs[slide].move(from, 'c');
    this.setState({
      active: slide,
    });
  }

  slides(object) {
    return Object.keys(object).map((key, index) => {
      let obj = object[key];
      obj['name'] = key;
      return obj;
    });
  }

  render() {

    return (
      <Frame>

        { this.slides(this.props.slides).map((slide, index) => {
          return (
            <Slide
              key={ index }
              slide={ slide }
              active={ this.state.active === slide.name }
              settings={ this.props.settings }
              get={ this.get.bind(this) }
              ref={ slide.name }/>
          );
        }) }

      </Frame>
    );
  }

}

export default Menu;
