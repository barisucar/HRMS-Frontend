import React from 'react'
import { useFormik } from "formik";
import { Button, Form, Message } from "semantic-ui-react";
import * as Yup from "yup";
import JobAdvertService from '../services/JobAdvertService';

export default function ConfirmJobAdvertById() {

    const {
        values,
        error,
        handleSubmit,
        handleChange,
        touched
    } = useFormik({
        initialValues: {
            id: ""
        },
        validationSchema: Yup.object({
            id: Yup.number().required("Id should not be empty")
        }),
        onSubmit: (values) => {
            let jobAdvertService = new JobAdvertService();
            jobAdvertService.ConfirmJobAdvertById(values).then();
        }
    });



    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Job Advertisement Id</label>
                    <input
                        name="id"
                        placeholder="Please enter advert id"
                        value={values.id}
                        onChange={handleChange}
                    />
                    {Error.id && touched.id && (<Message color="red">{error.id}</Message> )}
                </Form.Field>
                <Button type="submit">Confirm</Button>
            </Form>
        </div>
    )
}
