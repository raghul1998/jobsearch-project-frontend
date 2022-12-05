import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';
import "./signupStyle.css";
import { createEvent } from '../../services/eventService';
import {alertService} from "../../services/alertService";
import UploadImageToS3WithNativeSdk from "../UploadImageToS3WithNativeSdk/index";
import UploadImageToS3WithReactS3 from '../UploadImageToS3WithReactS3/index';
import NavigationBar from "../FeedPage/NavigationBar";

const NewEventPage = () => {
    let navigate = useNavigate();

    localStorage.setItem('imageUrl', '');

    const initialValues = {
        eventName: '',
        organiserName: '',
        dateOfEvent: '',
        timeOfEvent: '',
        location: '',
        shortDescription: '',
        longDescription: '',
        image:''
    };

    const validationSchema = Yup.object().shape({
        eventName: Yup.string()
            .required('Event name is required'),
        organiserName: Yup.string()
            .required('Orgnaiser name is required'),
        dateOfEvent: Yup.string()
            .required('Date of event is required'),
        timeOfEvent: Yup.string()
            .required('Time of event is required'),
        location: Yup.string()
            .required('Location is required'),
        shortDescription: Yup.string()
            .required('Event summary is required'),
        longDescription: Yup.string()
            .required('Event description is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        const newEvent = {
            "userId": localStorage.getItem('userId'),
            "eventName": fields["eventName"],
            "organiserName": fields["organiserName"],
            "dateOfEvent": fields["dateOfEvent"],
            "timeOfEvent": fields["timeOfEvent"],
            "location": fields["location"],
            "shortDescription": fields["shortDescription"],
            "longDescription": fields["longDescription"],
            "image": localStorage.getItem('imageUrl'),
        }

        console.log("newEvent", newEvent);

        createEvent(newEvent)
            .then(() => {
                alertService.success('Event added successful', { keepAfterRouteChange: true });
                navigate('/feedpage');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <>
            <NavigationBar/>
                    <div className="signup">
                        <div className="container">
                            <div className="signup-content">
                                <div className="signup-form">
                                    <h2 className="form-title">Add Event</h2>
                                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                        {({errors, touched, isSubmitting }) => (
                                            <Form>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-12">

                                                    <Field name="eventName" type="text" placeholder="Event name" className={'form-control' + (errors.eventName && touched.eventName ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="eventName" component="div" className="invalid-feedback" />
                                                </div>

                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <Field name="location" type="text" placeholder="Location" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <Field name="shortDescription" type="text" placeholder="Short Description Of Event / Summary" className={'form-control' + (errors.shortDescription && touched.shortDescription ? ' is-invalid' : '')} />
                                            <ErrorMessage name="shortDescription" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <Field name="longDescription" rows={"7"} component="textarea" placeholder="Description" className={'form-control' + (errors.longDescription && touched.longDescription ? ' is-invalid' : '')} />
                                            <ErrorMessage name="longDescription" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <Field name="dateOfEvent" type="date" className={'form-control' + (errors.dateOfEvent && touched.dateOfEvent ? ' is-invalid' : '')} />
                                                <ErrorMessage name="dateOfEvent" component="div" className="invalid-feedback" />
                                                <br/><br/><br/><label className="labelcolor">Date of event</label>
                                            </div>
                                            <div className="form-group col-6">

                                                    <Field name="timeOfEvent" type="time" className={'form-control' + (errors.timeOfEvent && touched.timeOfEvent ? ' is-invalid' : '')} />
                                                <ErrorMessage name="timeOfEvent" component="div" className="invalid-feedback" />
                                                <br/><label className="labelcolor">   Time</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="labelcolor">Upload Image</label><br/><br/><br/>
                                            <UploadImageToS3WithNativeSdk/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Create Event
                                            </button>
                                            <Link to="/feedpage" className="btn btn-link">Cancel</Link>
                                        </div>
                                    </Form>
                                        )}
                                        </Formik>
                                </div>
                                <div className="signup-image">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <figure><img src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/undraw_add_information_j2wg.png?raw=true" alt="sing up image"/></figure>


                                </div>
                            </div>
                        </div>
                    </div>


        </>

    )
}

export default NewEventPage;