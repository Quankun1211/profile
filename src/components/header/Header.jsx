import Toggle from "../Theme/Toggle"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = ({handleTheme}) => {
  return (
    <div className="navbar bg-base-100 shadow-2xl fixed z-20">
      <div className="flex-1">
        <AnchorLink href="#introduce">
          <a className="btn btn-ghost text-xl">Personal website</a>
        </AnchorLink>
      </div>
      <div className="flex-none gap-2">

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