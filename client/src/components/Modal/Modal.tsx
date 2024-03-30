import { ReactNode } from "react"

const Modal = ({ isModalOpen, onClose, children }: { isModalOpen: boolean, onClose: () => void, children: ReactNode }) => {
  if (!isModalOpen) return null

  return (
    <div className="fixed top-0 overflow-y-scroll inset-0 z-50 backdrop-blur-sm flex justify-center items-center">
      <div className="modal-box">
        {children}
        <div className="w-full flex justify-end">
          <h1 onClick={() => onClose()} className="btn ">close</h1>
        </div>
      </div>
    </div>
  )
}

export default Modal