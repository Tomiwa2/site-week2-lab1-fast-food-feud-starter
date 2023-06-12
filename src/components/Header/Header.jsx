import "./Header.css"

export function Header({props}) {
  return (
    <header className="header">
      <h1 className={props.title}></h1>
      <h4 className={props.tagline}></h4>
      <p className={props.description}></p>
    </header>
  )
}

export default Header
