import React, { Component } from 'react';
import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle,
  } from '@shopify/polaris';
import store from 'store-js';

class Appstatusform extends Component {

    // const emptyState = !store.get('ids');
  state = {
      appStatus:true
  };

  handleToggle = () => {
    this.setState(({ appStatus }) => {
      store.set('appStatus', this.state.appStatus);
      console.log(store.get('appStatus'));
      return { appStatus: !appStatus };
    });
  };

  render() {
    const { appStatus } = this.state;
    const contentStatus = appStatus ? 'Disable' : 'Enable';
    const textStatus = appStatus ? 'enabled' : 'disabled';
      
    return (
        <Layout.AnnotatedSection
        title="Application Status"
        description="Disable or enable application"
      >
        <SettingToggle
          action={{
            content: contentStatus,
            onAction: this.handleToggle,
          }}
          enabled={appStatus}
        >
          This setting is{' '}
          <TextStyle variation="strong">{textStatus}</TextStyle>.
        </SettingToggle>
      </Layout.AnnotatedSection>
    );
  }
}

export default Appstatusform;
