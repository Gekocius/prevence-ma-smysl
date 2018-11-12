import React, { Component } from "react"
import {Row, Col} from 'reactstrap';
import {AdvancedFilterContainer} from '../molecules/AdvancedFilterContainer';

export class AdminAdvancedSearch extends Component {
  render() {
    return (
        <Row>
          <Col><AdvancedFilterContainer></AdvancedFilterContainer></Col>
        </Row>
    );
  }
}
