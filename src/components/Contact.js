/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
// import { Thanks } from 'components/Thanks'
import {
  Input,
  Label,
  Form,
  Formwrapper,
  Outerwrapper,
  StartpageHeader,
  SubmitButton
} from './Styling'

export const Contact = () => {
  return (
    <Outerwrapper>
      <StartpageHeader>CONTACT</StartpageHeader>
      <Formwrapper>
        <Form action="https://formsubmit.co/maria.westling@gmail.com" method="POST">
          <Label> Name:
            <Input type="text" id="name" name="name" required />
          </Label>
          <Label>Email:
            <Input type="email" name="email" required />
          </Label>
          <Label>Your message:
            <Input type="text" name="name" required />
          </Label>
          {/* <Input type="hidden" name="_next" value="localhost:3000/Thanks.js" /> */}
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </Formwrapper>
    </Outerwrapper>
  )
}
