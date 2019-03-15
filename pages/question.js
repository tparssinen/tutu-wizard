import Body from '../components/Body.js'
import Layout from '../components/Layout.js'
import Link from 'next/link'
import questions from '../const/Questions'

const colorBlue = '#0e47d4'

const linkStyle = {
  color: colorBlue,
  marginRight: 15,
  textDecoration: 'none'
}

const answerButton = {
  background: '#eee',
  border: 0,
  borderRadius: 0,
  color: colorBlue,
  cursor: 'pointer',
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 5,
  padding: 20,
  textAlign: 'left',
  width: '100%'
}

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

const Question = (props) => {
  const answers = props.question.answers.map((item) =>
    <Link as={`/q/${ item.target }`} href={`/question?id=${ item.target }`} key={ item.id }>
      <button style={ answerButton }>{ item.label }</button>
    </Link>
  );

  let restartButton

  if (answers.length == 0) {
    restartButton = (
      <Link href="/">
        <button style={ actionButton }>Aloita alusta</button>
      </Link>
    )
  }

  return (
    <Body>
      <Layout key={ props.question.id }>
        <h2>{ props.question.title }</h2>
        <div>
          { require('html-react-parser')(
            props.question.body
          )}
        </div>
        { answers }
        { restartButton }
      </Layout>
    </Body>
  )
}

Question.getInitialProps = async function (context) {
  const { id } = context.query
  console.log(`Fetched question: ${ id }`)
  const question = questions.questions.filter(question => question.id == id)[0]
  return { question }
}

export default Question