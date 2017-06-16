import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const titleComponent = () => (
  <AppBar title="Gymnasia Health Tracker" />
);

export default titleComponent;
