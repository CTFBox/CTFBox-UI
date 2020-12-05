import { Question } from '../types/Question'
import { Button } from './Button'
import { Card, CardActions, CardText, CardTitle } from './Card'
import { Divider } from './Divider'
import { Link } from './Link'

/**
 * QuestionCardProps type.
 */
export type QuestionCardProps = {
  question: Question
}

/**
 * QuestionCard component.
 */
export const QuestionCard: React.FC<QuestionCardProps> = (props) => {
  const { question } = props

  return (
    <Card>
      <CardTitle>{question.title}</CardTitle>
      <Divider />
      <CardText>{question.detail}</CardText>
      <Divider />
      <CardActions>
        <Link to={`/${question.questionID}`}>
          <Button>Try</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
