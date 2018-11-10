import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';




export const BasicFilterContainer = (props) => {
  return (
    <div>
      <Jumbotron id="AdminExamContainer">
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk od:</Label>
                <Input className="ageInput" type="number" min="18" max="120"/>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <Label>Věk do:</Label>
                <Input className="ageInput" type="number" min="18" max="120"/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
