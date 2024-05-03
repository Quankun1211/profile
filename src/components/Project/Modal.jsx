
const Modal = ({data, index}) => {
  return (
    <dialog id={`modal-${index}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Project #{index + 1}</h3>
          <p className="py-4">{data.name}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
    </dialog>
  )
}

export default Modal