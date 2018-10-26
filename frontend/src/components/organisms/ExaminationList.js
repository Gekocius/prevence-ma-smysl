import React, {Component} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {Examination} from '../molecules/Examination';

export class ExaminationList extends Component {
  render() {
    return (
    <div>
        <h5>Seznam vyhledaných preventivních vyšetření</h5>
        <Examination></Examination>
      <div style={{ height: '20px' }} />
        <Button color="info">Chci vidět více výsledků</Button>{' '}
    </div>
  );
}
};