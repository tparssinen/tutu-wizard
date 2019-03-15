import Link from 'next/link'

const colorBlue = '#0e47d4'

const linkStyle = {
  color: colorBlue,
  marginRight: 15,
  textDecoration: 'none'
}

const topBarStyle = {
  borderBottom: '1px solid silver',
  marginBottom: 45,
  paddingBottom: 15
}

const appNameStyle = {
  color: '#aaa',
  fontSize: 14,
  fontWeight: 300,
  textTransform: 'uppercase'
}

const Header = () => (
  <div>
    <div style={topBarStyle}>
      <Link href="/">
        <a style={linkStyle}>Aloita alusta</a>
      </Link>
    </div>
    <h1 style={appNameStyle}>Tutkintojen tunnustamisen palveluneuvoja</h1>
  </div>
)

export default Header