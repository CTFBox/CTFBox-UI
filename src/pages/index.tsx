import { NextPage } from 'next'
import { useState } from 'react'
import { GridContainer } from '../components/GridContainer'
import { PageTitle } from '../components/PageTitle'
import { QuestionCard } from '../components/QuestionCard'
import { MainLayout } from '../layouts/MainLayout'
import { Question } from '../types/Question'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  const [questions] = useState<Question[]>([
    {
      questionID: 1001,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
    {
      questionID: 1002,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
    {
      questionID: 1003,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
    {
      questionID: 1004,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
    {
      questionID: 1005,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
    {
      questionID: 1006,
      title: 'Start of CTFBox',
      detail: 'Welcome to CTFBox!',
    },
  ])

  return (
    <MainLayout>
      <PageTitle>Problems</PageTitle>
      <GridContainer>
        {questions.map((q) => (
          <QuestionCard key={q.questionID} question={q}></QuestionCard>
        ))}
      </GridContainer>
    </MainLayout>
  )
}

export default HomePage
