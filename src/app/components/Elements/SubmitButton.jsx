'use client'
import { PropagateLoader } from "react-spinners";

const overrideStyle = {
  display: 'flex',
  margin: '0 auto',
  height: '24px',
  justifyContent: 'center',
  alignItems: "center"
}

export function SubmitButton({type="submit",classes, title='submit',loader=false}) {
  return (
    <button   type={type}  disabled={loader ? true : false}  className={classes} >
        {loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : title}
    </button>
  )
}