import React from 'react';
import { Jumbotron, Button, Row, Col, Form, FormGroup, Label, Input, Container } from 'reactstrap';

import {ExamName} from '../molecules/ExamName';
import {TooltipItem} from '../molecules/TooltipItem';
import {MultiSelect} from '../atoms/MultiSelect';
import {ExamDescription} from '../molecules/ExamDescription';
import {ExamDiagnosis} from '../molecules/ExamDiagnosis';
import {AdminShowBasicSearch} from '../molecules/AdminShowBasicSearch';



export const AdminBasicFilterContainer = (props) => {
  return (
      <Jumbotron id="AdminExamContainer">
        <Row><AdminShowBasicSearch></AdminShowBasicSearch></Row>
      </Jumbotron>
  );
};
