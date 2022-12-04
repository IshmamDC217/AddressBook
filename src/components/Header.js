import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => 
{
  const onClick = () => 
  {
    console.log('Click')
  }
  return (
    <header className='header'>
      
      {/* Title without color and background */}
      {/* <h1>{title}</h1>   */}
      {/* Title with color and background */}
      <h1 style = {{color: 'yellow', backgroundColor: 'black'}}>  {title} </h1>
      <Button color= 'Blue' text='Add' onClick = {onClick} />
      {/* <Button color= 'Green' text='Add 2' />
      <Button color= 'Purple' text='Add 3' /> */}
      
    </header>
  )
}

Header.defaultProps = {
    title: 'Hello!', 
}

Header.propTypes = {
  title: PropTypes.string.isRequired, 
}

//CSS in JS:
// const headingStyle = {
//   color: 'yellow', backgroundColor: 'black'
// }

export default Header
