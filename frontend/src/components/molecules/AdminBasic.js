import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {BasicFilterContainer} from '../molecules/BasicFilterContainer';

export class AdminBasic extends Component {
  render() {
    return (
        <Row>
          <Col><BasicFilterContainer></BasicFilterContainer></Col>
        </Row>
    );
  }
}
