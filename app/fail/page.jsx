"use client"
const FailPage = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("number");
  return (
    <div>FailPage</div>
  )
}
export default FailPage