import React from 'react'
import { Formik, Field, Form } from 'formik'
import './InputForm.scss'
import Title from './Title'
import cn from 'classnames'

interface IInputFormProps {
  title: string
  children: React.ReactNode[] | React.ReactNode
  initialValues: any
  submitTitle?: string
  isInline?: boolean
  className?: string
}

const InputForm: React.FC<IInputFormProps> = ({
  title,
  children,
  initialValues,
  submitTitle = 'submit',
  isInline = false,
  className = '',
}) => {
  return (
    <div className={`input-form__container ${className}`}>
      <Title text={title} fontSize="16px" isInline={isInline} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }}
      >
        <Form className={cn('input-form', { isInline: isInline })}>
          {children}
          <input
            type="submit"
            value={submitTitle}
            className={cn('input-form--submit', { isInline: isInline })}
          />
        </Form>
      </Formik>
    </div>
  )
}

export default InputForm
