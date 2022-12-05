import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './index.css';
import { createEvent } from '../../../services/eventService';
import {alertService} from "../../../services/alertService";
import UploadImageToS3WithNativeSdk from "../../UploadImageToS3WithNativeSdk/index";
import UploadImageToS3WithReactS3 from '../../UploadImageToS3WithReactS3/index';
import {createPost} from "../../../services/postService";
import NavigationBar from "../../FeedPage/NavigationBar";

const NewPost = () => {
    let navigate = useNavigate();

    localStorage.setItem('imageUrl', '');

    const initialValues = {
        shortDescription: '',
        image:''
    };

    const validationSchema = Yup.object().shape({
        shortDescription: Yup.string()
            .required('Event summary is required'),
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        const userDetails = JSON.parse(localStorage.getItem('userProfile'));
        setStatus();
        const newEvent = {
            "userId": localStorage.getItem('userId'),
            "eventId": localStorage.getItem('eventIdForEventPage'),
            "postId": localStorage.getItem('_id'),
            "shortDescription": fields["shortDescription"],
            "image": localStorage.getItem('imageUrl'),
            "firstName": userDetails['firstName'],
            "lastName": userDetails['lastName'],
            "profileImage": userDetails['profileImage']

        }

        console.log("newEvent", newEvent);

        createPost(newEvent)
            .then(() => {
                if(localStorage.getItem('userRole').toString() === 'student' || localStorage.getItem('userRole').toString() === 'both') {
                    alertService.success('Post added successful', {keepAfterRouteChange: true});
                    navigate('/event');
                    window.location.reload(false);
                }
                else
                {
                    alertService.error('Only students can post here.');
                }
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <>
            <NavigationBar/>
            <div className="row">
                <div className="col-sm-8  offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <h3 className="card-header">Add New Post</h3>
                                    <div className="card-body">



                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label></label>
                                                <Field name="shortDescription" type="text" placeholder = "summary" className={'form-control' + (errors.shortDescription && touched.shortDescription ? ' is-invalid' : '')} />
                                                <ErrorMessage name="shortDescription" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                        <div className="row pt-3">
                                            <div className="form-group col-12">
                                                <label></label>
                                                <UploadImageToS3WithNativeSdk/>
                                            </div>
                                        </div>



                                        <div className="form-group pt-2">
                                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                                Create Post
                                            </button>
                                            <Link to="/event" className="btn btn-link">Cancel</Link>
                                            {/*<button className="btn btn-link" onClick={()=>setAddPost(true)}>Cancel</button>*/}
                                        </div>


                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewPost;