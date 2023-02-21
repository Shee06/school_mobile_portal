import React from 'react'
import Table from 'react-bootstrap/Table';
import Dashboardfaculty from '../../components/Dashboardfaculty';

function AccountFaculty() {
  return (
    <>
    <Dashboardfaculty/>
    <div style={{padding: '40px' ,paddingTop: '80px'}}></div>
    <Table striped bordered hover style={{textAlign: 'justify'}}>
    <thead>
    <h2>Dela Cruz, Juan A.</h2>
      <tr>
        <th>SCHOOL FEES</th>
        <th>PAID / UNPAID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MISCELLANOUS FEE</td>
        <td>P 60.00</td>
      </tr>
      <tr>
        <td>HOMEROOM PROJECT</td>
        <td>P 200.00</td>
      </tr>
      <tr>
        <td>PTA</td>
        <td>P 50.00</td>
      </tr>
      <tr>
        <td>INTRAMS FEE</td>
        <td>P 150.00</td>
      </tr>
    </tbody>
  </Table>
  </>
  )
}

export default AccountFaculty