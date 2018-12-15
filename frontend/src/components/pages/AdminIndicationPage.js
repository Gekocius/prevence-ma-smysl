import React, {Component} from 'react'
import { Row, Col, Container, Jumbotron} from 'reactstrap';

import {Heading} from '../atoms/Heading';
import {NewIndiButton} from '../atoms/NewIndiButton';
import {AdminNav} from '../organisms/AdminNav';
import {AdminIndiTab} from '../organisms/AdminIndiTab';

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
              <a href="/admin-indikace"><NewIndiButton/></a>
            </Col>
          </Row>
          <Row>
            <AdminIndiTab/>
          </Row>
        </Container>
      </div>
    );
  }
}
