import React, { Component } from 'react';
import Appstatusform from '../components/Appstatusform';
import Notificationform from '../components/Notificationform';
import {
  Button,
  Card,
  Form,
  FormLayout,
  Layout,
  Page,
  Stack,
  TextField,
} from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';

class Index extends Component {

  state = { open: false };

  render() {
    return (
        <Page>
          <TitleBar
            primaryAction={{
              content: 'Change design',
              onAction:console.log('btn tbn btntbnt ')
            }}
          />
          <Layout>
            <Appstatusform/>
            <Notificationform/>
          </Layout>
        </Page>
    );
  }
}

export default Index;
