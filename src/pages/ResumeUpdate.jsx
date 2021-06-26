import React from 'react'
import CustomTextInput from "../utilities/customFormControls/CustomTextInput";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ResumeService from '../services/ResumeService';
import { FormField, Button, Label } from "semantic-ui-react";

export default function ResumeUpdate() {
    const initialValues = {
        coverLetter: "",
        educationId: "",
        schoolDepartmentId: "",
        githubLink: "",
        id: "",
        languageId: "",
        languageLevelId: "",
        linkedinLink: "",
        photoId: "",
        skillId:""
    }

    let resumeService = new ResumeService();

    const schema = Yup.object({
        coverLetter: Yup.string().required("Bos birakilmaz"),
        id: Yup.number().required("Degistirmek istediginiz cv idsini giriniz"),
        educationId: Yup.number().required("Egitim idsini yaziniz"),
        schoolDepartmentId: Yup.number().required("Okudugunuz bolumun idsini yaziniz"),
       // githubLink: Yup.string().__inputType(URL).required("github linkinizi url seklinde giriniz"),
       // linkedinLink: Yup.string().__inputType(URL).required("linkedin linkinizi url seklinde giriniz"),
        photoId: Yup.number().required("Fotografi giriniz"),
        skillId: Yup.number().required("yeteneklerinizin idsini yaziniz.")
    });


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    resumeService.updateResume(values);
                }}
            >
                <Form className="ui form">
                    <CustomTextInput name="coverLetter" placeholder="Tanitim yazisi" />
                    <CustomTextInput name="id" placeholder="Cv Id" />
                    <CustomTextInput name="educationId" placeholder="Egitim id" />
                    <CustomTextInput name="schoolDepartmentId" placeholder="Department Id" />
                    <CustomTextInput name="githubLink" placeholder="Github Link" />
                    <CustomTextInput name="linkedinLink" placeholder="Linkedin Link" />
                    <CustomTextInput name="photoId" placeholder="Photo id" />
                    <CustomTextInput name="skillId" placeholder="Skill Id" />
                    <Button color="blue" type="submit">
guncelle
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
