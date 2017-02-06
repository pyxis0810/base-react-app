import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Map from 'components/Map';

class Main extends Component {
  render() {
    return(
      <div>
        <FormattedMessage id="app.message.main" />
        <Map />
      </div>
    );
  }
}

module.exports =  connect(null, { })(Main);
