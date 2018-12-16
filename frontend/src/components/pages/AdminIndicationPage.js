import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron} from 'reactstrap';

import {Heading} from '../atoms/Heading';
import {NewIndicationButton} from '../atoms/NewIndicationButton';
import {AdminNav} from '../organisms/AdminNav';
import {AdminIndicationTab} from '../organisms/AdminIndicationTab';

export class AdminIndicationPage extends Component {
  render() {
    return (
      <div>
        <AdminNav/>
        <Container>
          <Row>
            <Col>
              <Heading className="AdminWelcH2">Správa indikací</Heading>
            </Col>
          </Row>
          <Row>
            <Col md="9"></Col>
            <Col md="3">
              <a href="/admin-indikace"><NewIndicationButton/></a>
            </Col>
          </Row>
          <Row>
            <AdminIndicationTab/>
          </Row>
        </Container>
      </div>
    );
  }
}
