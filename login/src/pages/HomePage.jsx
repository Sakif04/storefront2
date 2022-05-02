import jwt_decode from "jwt-decode";

export default function Homepage() {
const tokens=localStorage.getItem("storefront")
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>You are logged in</h1>
    </div>
  )
}
