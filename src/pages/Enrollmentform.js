import React from 'react';
import '../styles/Enrollmentform.css';
function Enrollmentform() {

  return (
    <>
<div style={{backgroundColor: 'blue', marginTop: '-40px',  marginBottom: '-40px'}}>
    <br/>
    <br/> 
<div class="wrapper rounded" style={{backgroundColor: 'white', marginTop: '40px', marginBottom: '40px'}}>
<div class="h3">Enrollment Form</div>
<header>STUDENT INFORMATION</header>

<form class="form">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <label>PSA Birth Certificate No.</label>
            <input type="number" class="form-control" placeholder="Enter your PSA Birth Certificate No. " required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Learners Reference Number</label>
            <input type="number" class="form-control" placeholder="Enter your LRN no." required />
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
            <label>First Name</label>
            <input type="text" class="form-control" placeholder="Enter your first Name " required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Middle Name</label>
            <input type="text" class="form-control" placeholder="Enter your Middle Name " required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Last Name</label>
            <input type="text" class="form-control" placeholder="Enter your  Last name " required />
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Extension Name (if afflicable) </label>
            <input type="text" class="form-control" placeholder="e.g. Jr. III" required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Birthday</label>
            <input type="date" class="form-control" placeholder="Enter birth date" required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3 ">
            <label>Email </label>
            <input type="email" class="form-control" style={{height:'40px'}} placeholder="Enter your email" required />
        </div>
    </div>

    <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Mobile Number</label>
            <input type="number" class="form-control"  placeholder="Enter mobile number" required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
        <label>Gender</label>
        <select id="sub" style={{height:'40px'}} required>
            <option selected hidden>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
    </div>
        <div class="col-md-4 mt-md-0 mt-3 ">
            <label>Age</label>
            <input type="number" class="form-control" placeholder="Enter your Age" required />
        </div>
    </div>
        
    <div class="row">
    <p>Belonging to any Indigenous People (IP)Community/Indigenous Cultural Community?</p>
        <div class="col-md-1 mt-md-0">
        <div class="form-check ">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required/>
            <label class="form-check-label" for="flexRadioDefault1"> Yes</label>
         </div>
         </div>
         <div class="col-md-1 mt-md-0">
         <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required/>
              <label class="form-check-label" for="flexRadioDefault2"> No</label>
              </div>
        </div>    
    </div>

</form>
</div>
<div class="wrapper rounded bg-white">
<header>ADDRESS</header>

<form class="form">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <label>House Number and Street</label>
            <input type="text" class="form-control" placeholder="Enter your HouseNo./ Street" required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Barangay</label>
            <input type="text" class="form-control" placeholder="Enter  your Barangay" required />
        </div>
        </div>
    <div class="row">  
        <div class="col-md-6 mt-md-0 mt-3">
            <label>City/Municipality/Province</label>
            <input type="text" class="form-control" placeholder="Enter your City/Municipality/Province" required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Zip Code</label>
            <input type="text" class="form-control" placeholder="Enter  Zip Code" required />
        </div>
    </div>
    <header>PARENT'S/GUARDIAN'S INFORMATION</header>
    <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Father's Name </label>
            <input type="text" class="form-control" placeholder="Ex: Dela Cruz, Juan A." required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Mother's Name</label>
            <input type="text" class="form-control"  placeholder="Ex: Dela Cruz, Lucita A." required />
        </div>
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Guardian's Name</label>
            <input type="text" class="form-control" placeholder="Ex: Dela Cruz, Sissy A." required />
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Grandfather </label>
            <input type="text" class="form-control"  placeholder="Ex: Dela Cruz Juanito A." required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Grandmother </label>
            <input type="text" class="form-control" placeholder="Ex: Dela Cruz Juanita A." required />
        </div>
        </div>
<div class="row">      
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Father In Law </label>
            <input type="number" class="form-control" placeholder="Ex: Dela Cruz Juanito A." required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Mother in Law </label>
            <input type="number" class="form-control" placeholder="Ex: Dela Cruz Juanita A." required />
        </div>
        </div>

    <div class="row">
        <div class="col-md-4 mt-md-0 mt-3">
            <label>Telephone or Cellphone No.</label>
            <input type="number" class="form-control" placeholder="(+63)" required />
        </div>
        </div>

</form>
</div>

<div class="wrapper rounded bg-white">
<div class="h3">For Returning Learners (Balik-Aral) and Those who shall Transfer / Move In</div>

<form class="form">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3">
            <label>Last Grade Level Completed </label>
            <input type="text" class="form-control"  placeholder="Enter Grade Level" required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>School Name </label>
            <input type="number" class="form-control" placeholder="Previous School Name" required />
        </div>
        </div>

    <div class="row"> 
        <div class="col-md-6 mt-md-0 mt-3">
            <label>School Address</label>
            <input type="number" class="form-control" placeholder="Enter School address" required />
        </div>
        <div class="col-md-6 mt-md-0 mt-3">
            <label>School ID</label>
            <input type="number" class="form-control" placeholder="Enter your School Id " required />
        </div>
    </div>

</form>
<br/>
<div class="h3">For Learners in Senior High School</div>
<form class="form">
<div class="row">
<header>SEMESTER</header>
        <div class="col-md-2 mt-md-0">
        <div class="form-check ">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required/>
            <label class="form-check-label" for="flexRadioDefault1"> First Semester</label>
         </div>
         </div>
         <div class="col-md-2 mt-md-0">
         <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required/>
              <label class="form-check-label" for="flexRadioDefault2"> Second Semester</label>
              </div>
        </div>    
    </div>  

<div class="row">
<div class="col-md-6 mt-md-0 mt-3">
        <label>Track</label>
        <select id="sub" style={{height:'40px'}} required>
            <option selected hidden>Please Choose</option>
            <option value="Male">Academic Track</option>
            <option value="Female">Technical-Vocational-Livelihood (TVL) Track</option>
            <option value="Others">Sports Track</option>
            <option value="Others">Art and Design Track</option>
        </select>
    </div>
<div class="col-md-6 mt-md-0 mt-3">
        <label>Strand</label>
        <select id="sub" style={{height:'40px'}} required>
            <option selected hidden>Please Choose</option>
            <option value="Male">ABM</option>
            <option value="Female">HUMSS</option>
            <option value="Others">STEM</option>
            <option value="Others">GAS</option>
            <option value="Others">TVL</option>
            <option value="Others">Sports</option>
        </select>
    </div>
</div>
<br/><br/><br/>

<div class="position-relative" style={{width: "100%"}}><button type="Button" class="btn col-lg-1 col-5 btn-primary mt-3 position-absolute bottom-0 end-0" >Submit</button></div>

</form>
</div>
<br/>
</div>

  </>
  )
}

export default Enrollmentform