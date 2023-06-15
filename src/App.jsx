import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Posts from './pages/Posts'
import Post from './pages/Post'
import EditPost from './pages/EditArticle'
import CreateNewArticle from './pages/NewArticle'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import { route } from './helpers/paths'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Posts />} />
      <Route path={route.articlePage} element={<Posts />} />
      <Route path={`${route.articlePage}/:slug`} element={<Post />} />
      <Route path={`${route.articlePage}/:slug/edit`} element={<EditPost />} />
      <Route path={route.articleNew} element={<CreateNewArticle />} />
      <Route path={route.signUp} element={<SignUp />} />
      <Route path={route.signIn} element={<SignIn />} />
      <Route path={route.profile} element={<Profile />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
