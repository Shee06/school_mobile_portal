import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboardstudent from '../../components/Dashboardstudent';
function Enrollmentform() {

  return (
    <>
    <Dashboardstudent/>
    <div style={{padding: '40px' ,paddingTop: '300px'}}></div>
<div style={{backgroundColor: 'blue', marginTop: '-40px',  marginBottom: '-40px'}}></div>
<div className='text-center'>
<form>
  <button type="submit" className="btn btn-primary btn-block " style={{backgroundColor: '#004aad'}}>VIEW ENROLLMENT</button>
</form>
</div>


  </>
  )
}

export default Enrollmentform