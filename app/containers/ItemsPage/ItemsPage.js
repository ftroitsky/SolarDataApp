// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../../components/Layouts/MainLayout'
import Items from '../../components/Items/Items'

import * as ItemsAction from '../../actions/items'

class ItemsPage extends Component {
  componentWillMount() {

  }

  onOpenFiles = files => this.props.dispatch(ItemsAction.getItems(files))

  render() {
    const { items } = this.props.items
    const { frames } = this.props.frames
    return (
      <MainLayout>
        <Items items={items}
               frames={frames}
               onOpenFiles={this.onOpenFiles} />
      </MainLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    frames: state.frames,
  }
}

export default connect(mapStateToProps)(ItemsPage)
