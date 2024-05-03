import Toggle from "../Theme/Toggle"

const Header = ({handleTheme}) => {
  return (
    <div className="navbar bg-base-100 shadow-2xl fixed z-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Personal website</a>
      </div>
      <div className="flex-none gap-2">

        <a className="btn btn-ghost text-xl">About me</a>
        <a className="btn btn-ghost text-xl">My project</a>
        <a className="btn btn-ghost text-xl">Contact</a>

        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        <Toggle handleTheme={handleTheme}/>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header