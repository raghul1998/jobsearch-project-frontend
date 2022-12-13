import React from "react";
import NavigationBar from "../navigationSidebar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom";
import {createPost} from "../../../service/studentJobShareService";
import {alertService} from "../../../service/alertService";
import UploadImageAws from "../../uploadImageAws";

const ShareJob = () => {
    let navigate = useNavigate();
    localStorage.setItem('imageUrl', '');

    const initialData = {
        image: '',
        shortDescription: ''
    };

    const validateSchema = Yup.object().shape({
                                                  shortDescription: Yup.string()
                                                      .required('Job summary is mandatory'),
                                              });

    const submitJobPost = (fields, {setStatus, setSubmitting}) => {
        const userData = JSON.parse(localStorage.getItem('userProfile'));
        setStatus();

        const newJobPost = {
            "userId": localStorage.getItem('userId'),
            "eventId": localStorage.getItem('jobIdForJobPage'),
            "shortDescription": fields["shortDescription"],
            "image": localStorage.getItem('imageUrl'),
            "firstName": userData['firstName'],
            "lastName": userData['lastName'],
            "profileImage": userData['profileImage']
        }

        console.log(newJobPost);

        createPost(newJobPost).then(() => {
            if (localStorage.getItem('userRole').toString() === 'student'
                || localStorage.getItem('userRole').toString() === 'both') {
                alertService.success('Job successfully added',
                                     {keepAfterRouteChange: true});
                navigate('/job-event');
            } else {
                alertService.error('Accessible only to students.');
            }
        })
    }

    return (
        <>
            <NavigationBar/>
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <div className="card m-3">
                        <Formik initialValues={initialData}
                                onSubmit={submitJobPost}
                                validationSchema={validateSchema}>
                            {
                                (
                                    {
                                        errors,
                                        touched,
                                        isSubmitting
                                    }) => (

                                    <Form>
                                        <h4 className="card-header">
                                            Add New Job
                                        </h4>

                                        <div className="card-body">

                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label></label>
                                                    <Field name="shortDescription" type="text"
                                                           placeholder="summary"
                                                           className={'form-control'
                                                                      + (errors.shortDescription
                                                                         && touched.shortDescription
                                                                         ? ' is-invalid' : '')}/>
                                                    <ErrorMessage name="shortDescription"
                                                                  component="div"
                                                                  className="invalid-feedback"/>
                                                </div>
                                            </div>

                                            <div className="row pt-3">
                                                <div className="form-group col-12">
                                                    <label></label>
                                                    <UploadImageAws/>
                                                </div>
                                            </div>

                                            <div className="form-group pt-2">
                                                <button type="submit" disabled={isSubmitting}
                                                        className="buy-button me-3"
                                                        style={{marginLeft : "0px"}}>
                                                    {
                                                        isSubmitting &&
                                                        <span
                                                            className="spinner-border spinner-border-sm mr-1">
                                                        </span>
                                                    }
                                                    Create Job
                                                </button>

                                                <Link to="/job-event" className="btn btn-link">
                                                    Cancel
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShareJob;