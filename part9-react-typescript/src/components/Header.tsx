
type Props = {
  name: String
}

const Header = (props: Props) => {
  return (
    <header>{props.name}</header>
  )
}

export default Header