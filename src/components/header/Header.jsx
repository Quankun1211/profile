import Toggle from "../Theme/Toggle"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = ({handleTheme}) => {
  return (
    <div className="navbar bg-base-100 shadow-2xl fixed z-20">
      <div className="flex-1 " >
        <AnchorLink href="#introduce">
          <a className="btn btn-ghost text-xl">Personal website</a>
        </AnchorLink>
      </div>
      
      <div className="">
          <div className="hidden toggle-config">
            <Toggle handleTheme={handleTheme}/>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <AnchorLink href="#introduce">
                  <a className="btn btn-ghost text-sm">About me</a>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#project">
                  <a className="btn btn-ghost text-sm">My project</a>
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">
                  <a className="btn btn-ghost text-sm">Contact</a>
                </AnchorLink>
              </li>
            </ul>
          </div>
      </div>
      
      
      
      <div className="flex-none hidden-header gap-2">

        <AnchorLink href="#introduce">
          <a className="btn btn-ghost text-xl">About me</a>
        </AnchorLink>
        <AnchorLink href="#project">
          <a className="btn btn-ghost text-xl">My project</a>
        </AnchorLink>
        <AnchorLink href="#contact">
          <a className="btn btn-ghost text-xl">Contact</a>
        </AnchorLink>

        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>

        <Toggle handleTheme={handleTheme}/>

      </div>
    </div>
  )
}

export default Header