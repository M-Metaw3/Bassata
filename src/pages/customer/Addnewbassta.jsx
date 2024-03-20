// import React from 'react';

// const Addnewbassta = () => {
//     return (
//         <div>
//                     aaaaaaaaaaaaa
//         </div>
//     );
// }

// export default Addnewbassta;





import React from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from '@chakra-ui/react';
const Addnewbassta = () => {
  const [image,setimage]=useState(null)
  return (
    <div className="container mt-5">
      <h2> Add New Customer</h2>
      <Formik
        initialValues={{
          nationalId: "",
          email: "",
          mobilePhone: "",
          nameEn: "",
          nameAr: "",
          birthdate: "",
          gender: "",
          addressAr: "",
          addressEn: "",
          jobTitle: "",
          issuedDate: "",
          expirationDate: "",
          status: "",
          familyNameEn: "",
          familyNameAr: "",
          addressDetailsEn: "",
          addressDetailsAr: "",
          streetEn: "",
          streetAr: "",
          subDistrictEn: "",
          subDistrictAr: "",
          districtEn: "",
          districtAr: "",
          governorateEn: "",
          governorateAr: "",
          serialNumber: "",
          birthGovernorateEn: "",
          birthGovernorateAr: "",
          isExpired: false,
          jobPlace: "",
          maritalStatus: "",
          husband: "",
          religion: "",
          frontImageUrl: "",
          backImageUrl: "",
          faceImageUrl: "",
          contractUrl: "",
          kyc: ""

        }}
        onSubmit={(values) => {
          console.log(values);
          // setimage(values.frontImageUrl)
        }}
      >
        <Form>
          <div className="capitalize row">
              {/*Provide input fields for all details as specified in your data structure*/}
              {['National ID',
                'Email',
                'mobile Phone',
                'name En',
                'name Ar',
                'birth date',
                'address En',
                'address Ar',
                'job Title',
                'ID issued Date',
                'ID expiration Date',
                'status',
                'family Name En',
                'family Name Ar',
                'address Details En',
                'address Details Ar',
                'street En',
                'street Ar',
                'subDistrict En',
                'subDistrict Ar',
                'district En',
                'district Ar',
                'governorate En',
                'governorate Ar',
                'serial Number',
                'birth GovernorateEn',
                'birth GovernorateAr',
                'job Place',
                'husband',
                ].map((fieldName, index) => (
                <div key={index} className="capitalize-first col-md-6 mt-3">
                  <h1 className='capitalize-first'>{fieldName}</h1>
                  <Field name={fieldName} className="form-control" placeholder={fieldName} />
                </div>
              ))}
                    <div className="col-md-6 mt-3">
                      <h6>    ID front Image Url</h6>
        <Field  type="file"  name="frontImageUrl" className="form-control" />

      </div>
      <div className="col-md-6 mt-3">
      <h6> ID back Image Url</h6>

        <Field type="file"  name="backImageUrl" className="form-control" />
      </div>
      <div className="col-md-6 mt-3">
      <h6>     Face Image Url</h6>

        <Field type="file" name="faceImageUrl" className="form-control" />
      </div>
      <div className="col-md-6 mt-3">
      <h6>contract Url</h6>
        
        <Field type="file" name="contractUrl" className=" form-control" />
      </div>
      <div className="col-md-6 mt-3">

      <h6>Upload KYC</h6>
        
        <Field type="file" name="kyc" className=" form-control" />
      </div>
             
             {/* {image&& <img src={URL.createObjectURL(image)}/>} */}
              {/* Gender Dropdown */}
              <div className="col-md-6 mt-3">
                <Field as="select" name="gender" className=" capitalize form-select">
                  <option value="" label="Select gender" />
                  <option value="ذكر" label="Male" />
                  <option value="أنثى" label="Female" />
                </Field>
              </div>

              {/* Marital Status Dropdown */}
              <div className="col-md-6 mt-3">
                <Field as="select" name="maritalStatus" className="capitalize form-select">
                  <option value="" label="Select marital status" />
                  <option value="Single" label="Single" />
                  <option value="Married" label="Married" />
                  <option value="Divorced" label="Divorced" />
                </Field>
              </div>

              {/* Religion Dropdown */}
              <div className="col-md-6 mt-3">
                <Field as="select" name="religion" className="capitalize form-select">
                  <option value="" label="Select religion" />
                  <option value="Islam" label="Islam" />
                  <option value="Christianity" label="Christianity" />
                  <option value="Other" label="Other" />
                </Field>
              </div>

              {/* Checkbox for isExpired */}
              <div className="col-12 mt-3">
                {/* <div className="form-check">
                  <Field type="checkbox" name="isExpired" className="form-check-input" id="isExpiredCheckbox" />
                  <label className="form-check-label" htmlFor="isExpiredCheckbox">Is Expired</label>
                </div> */}
              </div>
            </div>
            
            <Button type="submit" _hover={{bg:"red.400"}} className="btn btn-primary mt-4">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Addnewbassta;

