import React, { Fragment } from 'react'

import Form from './Form';
import Notes from './Notes';

export default function Dashboard() {
  return (
    <Fragment>
      <div className="col-3"><Notes /></div>
      <div className="col-9"><Form /></div>
    </Fragment>
  )
}
