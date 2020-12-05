import { NextPage } from 'next'
import { useState } from 'react'
import { PageTitle } from '../components/PageTitle'
import { MainLayout } from '../layouts/MainLayout'
import { Question } from '../types/Question'

/**
 * QuestionPage component.
 */
export const QuestionPage: NextPage = () => {
  const [question] = useState<Question>({
    questionID: 1001,
    title: 'Start of CTFBox',
    detail: 'Welcome to CTFBox!',
  })

  return (
    <MainLayout>
      <PageTitle>{question.title}</PageTitle>
      <p>{question.detail}</p>
    </MainLayout>
  )
}

export default QuestionPage
