/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import {
  Input,
  Label,
  Form,
  StartpageHeader,
  SubmitButton
} from './Styling'

export const Contact = () => {
  return (
    <div>
      <StartpageHeader>CONTACT</StartpageHeader>
      <Form action="https://formsubmit.co/your@email.com" method="POST">
        <Label> Name:
          <Input type="text" id="name" name="name" required />
        </Label>
        <Label>Email:
          <Input type="email" name="email" required />
        </Label>
        <Label>Your message:
          <Input type="text" name="name" required />
        </Label>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </div>
  )
}
