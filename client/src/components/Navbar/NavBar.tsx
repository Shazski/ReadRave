import { Link, NavLink } from "react-router-dom"
import { useTypeDispatch, useTypeSelector } from "../../hooks"
import { FormEvent, useState } from "react";
import Modal from "../Modal/Modal";
import useForm from "../../hooks/useForm";
import { imageUpload } from "../../cloudinary/upload";
import { toast } from "react-hot-toast";
import { pusblishBook } from "../../redux/actions/book/bookActions";

const NavBar = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const { formData, handleChange } = useForm()

  const { user } = useTypeSelector((state) => state.user)
  const dispatch = useTypeDispatch()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return toast.error("cover image is not provided")
    setIsImageUploading(true)
    const imgUrl = await imageUpload(file)
    setIsImageUploading(false)
    formData.coverimage = imgUrl
    const response = await dispatch(pusblishBook(formData))
    if (response) {
      setIsModalOpen(false)
      toast.success("Book published successfully")
    }
  }
  return (
    <div className="navbar sticky top-0  z-50 flex bg-base-100 shadow-lg shadow-gray-900">
      <div className="flex-1">
        <NavLink to='/' className={({ isActive }) => {
          return ` btn btn-ghost text-xl ${isActive ? 'bg-gray-700' : ''}`
        }}>ReadRave</NavLink>
        {
          user &&
          <NavLink to='/book-list' className={({ isActive }) => {
            return ` btn btn-ghost text-xl ${isActive ? 'bg-gray-700' : ''}`
          }}>Books List</NavLink>
        }
      </div>
      <div className="flex-none gap-2 ">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        {
          user ?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Profile pic" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <h1 onClick={() => setIsModalOpen(true)} className="justify-between">
                    Add Book
                  </h1>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div> : <>
              <Link className="btn btn-info" to={'/login'}>Login</Link>
            </>
        }
      </div>
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form action="" onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files && e.target.files[0])} accept="image/*" name="coverimage" />
          <input type="text" className="input input-bordered flex items-center gap-2 mt-2" placeholder="title" name="title" onChange={handleChange} required />
          <input type="text" className="input input-bordered flex items-center gap-2 mt-2" placeholder="author" name="author" onChange={handleChange} required />
          <textarea className="textarea textarea-bordered flex items-center gap-2 mt-2" placeholder="description" name="description" onChange={handleChange} required />
          <button type="submit" className="btn btn-primary right-24 me-2 absolute">{isImageUploading ? "Publishing..." : "Publish"}</button>
        </form>
      </Modal>
    </div>
  )
}

export default NavBar