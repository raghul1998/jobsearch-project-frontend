import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';
import "./style.css";
import { createEvent } from '../../service/eventService';
import {alertService} from "../../service/alertService";
// import UploadImageToS3WithNativeSdk from "../UploadImageToS3WithNativeSdk/index";
// import UploadImageToS3WithReactS3 from '../UploadImageToS3WithReactS3/index';
import NavigationBar from "../dashboard/navigationSidebar/index";

const NewEvent = () => {
    let history = useNavigate();

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
                history('/dashboard');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <>
            <NavigationBar/>
            <div className="container mt-5">
                <div className="row mt-5">
                        <div className="col-sm-12 col-md-6">
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                {({ errors, touched, isSubmitting }) => (
                                    <Form>
                                        <h3 className="pt-5 ps-3">Add New Event</h3>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="form-group col-6">
                                                    {/*<label>Event name</label>*/}
                                                    <Field name="eventName" type="text" placeholder="Event name" className={'form-control' + (errors.eventName && touched.eventName ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="eventName" component="div" className="invalid-feedback" />
                                                </div>

                                                <div className="form-group col-6">
                                                    {/*<label>Organiser Name</label>*/}
                                                    <Field name="organiserName" type="text" placeholder="Organiser Name" className={'form-control' + (errors.organiserName && touched.organiserName ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="organiserName" component="div" className="invalid-feedback" />
                                                </div>
                                            </div>


                                                <div className="form-group col-12">
                                                    {/*<label>Location</label>*/}
                                                    <Field name="location" type="text" placeholder="Location" className={'form-control' + (errors.location && touched.location ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="location" component="div" className="invalid-feedback" />
                                                </div>



                                                <div className="form-group col-12">
                                                    {/*<label>Summary</label>*/}
                                                    <Field name="shortDescription" type="text" placeholder="Summary" className={'form-control' + (errors.shortDescription && touched.shortDescription ? ' is-invalid' : '')} />
                                                    <ErrorMessage name="shortDescription" component="div" className="invalid-feedback" />
                                                </div>

                                                <div className="form-group col-12">
                                                    {/*<label>Description</label>*/}
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
                                                    <br/><br/><br/><label className="labelcolor">   Time</label>
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="form-group col-12">
                                                    <label className="labelcolor">Upload Image</label><br/><br/><br/>
                                                    {/* <UploadImageToS3WithNativeSdk/> */}
                                                </div>
                                            </div>



                                            <div className="form-group pt-2">
                                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                    Create Event
                                                </button>
                                                <Link to="/dashboard" className="btn btn-link">Cancel</Link>
                                            </div>


                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    <div className="col-md-5 pt-5">
                        <figure><img src="https://github.com/Sanjana-Nalawade/repoForAssetsOfProject/blob/main/undraw_add_information_j2wg.png?raw=true" alt="sing up image"/></figure>
                    </div>

                </div>
            </div>
        </>

    )
}

export default NewEvent;