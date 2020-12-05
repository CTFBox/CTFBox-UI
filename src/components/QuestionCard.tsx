import styled from 'styled-components'
import { Question } from '../types/Question'
import { Card, CardText, CardTitle } from './Card'
import { Divider } from './Divider'

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
    </Card>
  )
}
