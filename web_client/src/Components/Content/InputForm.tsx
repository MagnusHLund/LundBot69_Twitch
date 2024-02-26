import React from 'react'
import { Formik, Field, Form } from 'formik'
import './InputForm.scss'
import Title from './Title'

interface IInputFormProps {
  title: string
  children: React.ReactNode[]
  initialValues: any
  submitTitle?: string
}

const InputForm: React.FC<IInputFormProps> = ({
  title,
  children,
  initialValues,
  submitTitle = 'submit',
}) => {
  return (
    <div className="input-form__container">
      <Title text={title} fontSize="16px" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        <Form className="input-form">
          {children}
          <input
            type="submit"
            value={submitTitle}
            className="input-form--submit"
          />
        </Form>
      </Formik>
    </div>
  )
}

export default InputForm
