import Body from '../components/Body.js'
import Link from 'next/link'

const colorBlue = '#0e47d4'

const actionButton = {
  background: colorBlue,
  border: 0,
  borderRadius: 0,
  color: '#FFF',
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 45,
  padding: 15,
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '250px',
  maxWidth: '100%'
}

const Index = () => (
  <Body>
    <h1>Tutkintojen tunnustamisen palveluneuvoja</h1> 
    <p>Lorem ipsum dolor sit amet</p>
    <Link as={`/q/1`} href={`/question?id=1`}>
      <button style={ actionButton }>Aloita</button>
    </Link>
  </Body>
)

export default Index