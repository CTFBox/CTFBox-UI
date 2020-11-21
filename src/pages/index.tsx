import { NextPage } from 'next'
import { MainLayout } from '../layouts/MainLayout'

/**
 * HomePage component.
 */
export const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
    </MainLayout>
  )
}

export default HomePage
