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
      <StartpageHeader>KONTAKT</StartpageHeader>
      <Formwrapper>
        <Form action="https://formsubmit.co/maria.westling@gmail.com" method="POST">
          <Label> Namn:
            <Input type="text" id="name" name="name" required />
          </Label>
          <Label>Epost:
            <Input type="email" name="email" required />
          </Label>
          <Label>Ditt meddelande:
            <Input type="text" name="name" required />
          </Label>
          {/* <Input type="hidden" name="_next" value="localhost:3000/Thanks.js" /> */}
          <SubmitButton type="submit">Skicka</SubmitButton>
        </Form>
      </Formwrapper>
    </Outerwrapper>
  )
}
