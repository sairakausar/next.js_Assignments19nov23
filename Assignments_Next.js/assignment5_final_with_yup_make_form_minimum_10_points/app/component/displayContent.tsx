import React from 'react'

export default function DisplayContent(props:any) {
  return (
    <div>
      Display Content Child
      <br />
      First Name: {props.childObject.firstname}
      <br />
      Last Name: {props.childObject.lastname}
      <br />
      Email: {props.childObject.email}
      <br />
      Phone: {props.childObject.Phone}
      <br />
      CNIC: {props.childObject.cnic}
      <br />
      Gender: {props.childObject.gender}
      <br />
      Age: {props.childObject.age}
      <br />
      City: {props.childObject.city}
      <br />
      Country: {props.childObject.country}
      <br />
      Message: {props.childObject.message}
    </div>
  );
}
