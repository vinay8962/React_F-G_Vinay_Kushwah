import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/Form.css';
import Swal from 'sweetalert2';

const FormComponent = () => {
  return (
    <div className='main-div'>
      <nav>
        <h1>Aromatic Bar</h1>
      </nav>

      <div className="container w-100 form-div">
        <Formik
          initialValues={{
            customerName: '',
            email: '',
            customerPhone: '',
            serviceQuality: '',
            beverageQuality: '', // Changed to a string instead of an array
            restaurantQuality: '', // Changed to a string instead of an array
            diningQuality: '', // Changed to a string instead of an array
          }}
          validationSchema={Yup.object().shape({
            customerName: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            customerPhone: Yup.string()
              .required('Required')
              .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
            serviceQuality: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // Get existing data from local storage
            const existingData = JSON.parse(localStorage.getItem('formData')) || [];

            // Append new data to existing data
            const newData = [...existingData, values];

            // Save updated data to local storage
            localStorage.setItem('formData', JSON.stringify(newData));

            // Show success message
            Swal.fire({
              title: 'Thank you for completing the information',
              icon: 'success',
              text: "We will work toward improving your experience",
              confirmButtonText: 'Close',
            });

            // Reset form fields
            resetForm();

            setSubmitting(false);
          }}
        >
          <Form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="customerName" className="form-label">Customer Name</label>
                <Field type="text" className="form-control" id="customerName" name="customerName" />
                <ErrorMessage name="customerName" component="div" className="error" />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <Field type="email" className="form-control" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="customerPhone" className="form-label">Phone</label>
                <Field type="text" className="form-control" id="customerPhone" name="customerPhone" />
                <ErrorMessage name="customerPhone" component="div" className="error" />
              </div>
            </div>

            {/* Question 1: Quality of Service */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Please rate the quality of the service you received from your host:</label>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="serviceQualityExcellent" name="serviceQuality" value="Excellent" />
                  <label className="form-check-label" htmlFor="serviceQualityExcellent">Excellent</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="serviceQualityGood" name="serviceQuality" value="Good" />
                  <label className="form-check-label" htmlFor="serviceQualityGood">Good</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="serviceQualityFair" name="serviceQuality" value="Fair" />
                  <label className="form-check-label" htmlFor="serviceQualityFair">Fair</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="serviceQualityBad" name="serviceQuality" value="Bad" />
                  <label className="form-check-label" htmlFor="serviceQualityBad">Bad</label>
                </div>
                <ErrorMessage name="serviceQuality" component="div" className="error" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Please rate the quality of your beverage:</label>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="beverageQualityExcellent" name="beverageQuality" value="Excellent" />
                  <label className="form-check-label" htmlFor="beverageQualityExcellent">Excellent</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="beverageQualityGood" name="beverageQuality" value="Good" />
                  <label className="form-check-label" htmlFor="beverageQualityGood">Good</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="beverageQualityFair" name="beverageQuality" value="Fair" />
                  <label className="form-check-label" htmlFor="beverageQualityFair">Fair</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="beverageQualityBad" name="beverageQuality" value="Bad" />
                  <label className="form-check-label" htmlFor="beverageQualityBad">Bad</label>
                </div>
                <ErrorMessage name="beverageQuality" component="div" className="error" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Was our restaurant clean?</label>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="restaurantQualityExcellent" name="restaurantQuality" value="Excellent" />
                  <label className="form-check-label" htmlFor="restaurantQualityExcellent">Excellent</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="restaurantQualityGood" name="restaurantQuality" value="Good" />
                  <label className="form-check-label" htmlFor="restaurantQualityGood">Good</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="restaurantQualityFair" name="restaurantQuality" value="Fair" />
                  <label className="form-check-label" htmlFor="restaurantQualityFair">Fair</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="restaurantQualityBad" name="restaurantQuality" value="Bad" />
                  <label className="form-check-label" htmlFor="restaurantQualityBad">Bad</label>
                </div>
                <ErrorMessage name="restaurantQuality" component="div" className="error" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Please rate your overall dining experience.</label>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="diningQualityExcellent" name="diningQuality" value="Excellent" />
                  <label className="form-check-label" htmlFor="diningQualityExcellent">Excellent</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="diningQualityGood" name="diningQuality" value="Good" />
                  <label className="form-check-label" htmlFor="diningQualityGood">Good</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="diningQualityFair" name="diningQuality" value="Fair" />
                  <label className="form-check-label" htmlFor="diningQualityFair">Fair</label>
                </div>
                <div className="form-check">
                  <Field type="radio" className="form-check-input" id="diningQualityBad" name="diningQuality" value="Bad" />
                  <label className="form-check-label" htmlFor="diningQualityBad">Bad</label>
                </div>
                <ErrorMessage name="diningQuality" component="div" className="error" />
              </div>
            </div>
                <div className='form-submit-btn-div'>
            <button type='submit' className='btn btn-primary'>Submit Review</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
