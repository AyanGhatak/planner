import React, { Component } from 'react';
import { createStore} from 'redux';
import config from '../config.js';

class NavBar extends Component {
  render () {
    return (
      <div className={this.props.className}>
        {this.props.content}
      </div>
    );
  }
}

class Section extends Component {
  render() {
    let section = this.props.section,
      body = section.body;
    return (
      <div className={section.group.className} onClick={this.props.clickFN}>

        <div className={section.head.className}>
            {section.head.content}
        </div>
        <GridView className={body.className} content={body.content} visible = {body.visible}/>

      </div>
    );
  }
}

class GridView extends Component {
  render() {
    let props = this.props;
    console.log(props.visible)
    return (
      <div style={{display: props.visible ? 'block' : 'none' }}>
        {
          props.content.map((content, index) =>
            <div className={props.className} key={index.toString()}>
              <p>{content.name}</p>
              <button >Add</button>
              <Lists lists={content.lists}/>
            </div>
          )
        }
      </div>
    );
  }
}

class Lists extends Component {
  render() {
    let displayTime = (list) => {
      if (list.start && list.end) {
        return (
          <div>{list.start} - {list.end}</div>
        );
      }
    }
    return (
      <div>
        {
          this.props.lists.map((list, key) =>
            <div className='planner-lists' key={key.toString()}>
              {displayTime(list)}
              <div>{list.name}</div>
            </div>
          )
        }
      </div>
    )
  }
}

const head = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBLITY':
      if (state.head.content !== action.id) {
        return state
      }
      state.body.visible = !state.body.visible;
      /*return Object.assign({}, state, {
        visible: !state.visible
      })*/
      return state;

    default:
      return state
  }
}

const heads = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_VISIBLITY':
      state.body = state.body.map(t =>
        head(t, action)
      );
  }
  return state;
}

export const store = createStore(heads, config);

export class App extends Component {
  render() {
    let config = this.props.config;
    return (
      <div>
        <NavBar className={config.head.className} content={config.head.content} />
        <div>
          {
            config.body.map((section, index) =>
              <Section key={section.head.content} section={section} clickFN={() => {
                  let content = section.head.content;
                  store.dispatch({
                    type: 'TOGGLE_VISIBLITY',
                    id: content
                  });
                }
              }/>
            )
          }
        </div>
      </div>
    )
  }
}
