import Link from "next/link"

const AdminNav = () => {
  return (
    <div>
        <div className="h-11">
            <ul className="text-white flex justify-center mt-9 text-4xl">
             <Link href="/admin">   <li className="mr-10">Home</li></Link>
             <Link href="/email">  <li>Email</li></Link>
             
            </ul>
        </div>
    </div>
  )
}

export default AdminNav