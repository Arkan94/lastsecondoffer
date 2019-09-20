import React, { Component } from 'react';
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
import store from 'store-js';

class Notificationform extends Component {

  state = {
      ntext:'Lorem ipsum azazazaza'
  };

  handleSubmit = () => {
    this.setState({
        ntext: this.state.ntext,
    });
    store.set('ntext', this.state.ntext);
    console.log('submission', this.state);
  };

  handleChange = (field) => {
    return (value) => this.setState({ [field]: value });
  };

  render() {
    const { ntext } = this.state;
    return (
        <Layout.AnnotatedSection
        title="Notification text"
        description="Lasct second text in notification popup."
      >
        <Card sectioned>
          <Form onSubmit={this.handleSubmit}>
            <FormLayout>
              <TextField
                value={ntext}
                onChange={this.handleChange('ntext')}
                label="Notification text"
                type="ntext"
              />
              <Stack distribution="trailing">
                <Button primary submit>
                  Save
                </Button>
              </Stack>
            </FormLayout>
          </Form>
        </Card>
      </Layout.AnnotatedSection>
    );
  }
}

export default Notificationform;
