import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
//import { getAdminIndication } from '../../services/AdminIndication/reducer';
//import { startFetchIndication, startDeleteIndication } from '../../services/AdminIndication/actions'

export class AdminIndicationTabRaw extends Component {

//  componentDidMount(){
//    this.props.startFetchIndication();
//  }
  render() {
    const { indication } = this.props;
    console.log(this.props);
    return (
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Název indikace</th>
            {/* <th>Upravit</th> */}
            <th>Odstranit</th>
          </tr>
        </thead>
{/*        <tbody>
          {indication.map( item => (
            <tr key={item.IDIndication}>
              <th scope="row">{item.IDIndication}</th>
              <td>{item.Name}</td> */}
              {/* <td><a href=""><i class="material-icons" id="cssFooterArrow">create</i></a></td> */}
{/*              <td><i onClick={() =>{this.props.startDeleteIndication(item.IDIndication)}} class="material-icons" id="cssFooterArrow">delete</i></td>
            </tr>
          ))}
        </tbody> */}
      </Table>
    );
  }
}

//const mapStateToProps = (state) => {
//  const indication = getAdminIndication(state.adminIndication);

//  return {
//    indication,
//  };
//};

//const mapDispatchToProps = {
//  startFetchIndication,
//  startDeleteIndication
//}

export const AdminIndicationTab = connect(/*mapStateToProps, mapDispatchToProps*/)(AdminIndicationTabRaw);
