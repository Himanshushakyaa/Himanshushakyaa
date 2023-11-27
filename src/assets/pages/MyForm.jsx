import React from 'react'
import Formone from '../../components/Formone'
import ValidationSchemaExample from '../../components/Formtwo'
import Validation from '../../components/Formthree'


export default function MyForm() {
  return (
    <div>
        <Formone />
        <hr />
        <ValidationSchemaExample />
        <hr />
        <Validation />
    </div>
  )
}

