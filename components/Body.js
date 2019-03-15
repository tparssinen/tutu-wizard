import Header from './Header'

const bodyWrapper = {
  textAlign: 'center'
}

const bodyStyle = {
  display: 'inline-block',
  fontFamily: 'sans-serif',
  margin: 20,
  width: '750px',
  maxWidth: '100%',
  padding: 20,
  textAlign: 'left'
}

const Body = (props) => (
  <div style={ bodyWrapper }>
    <div style={ bodyStyle }>
      { props.children }
    </div>
  </div>
)

export default Body