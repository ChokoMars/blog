import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

import storageService from '../../services/storageService'
import { getUserLocal, logOut } from '../../services/userSlice'
import HeaderSignBtns from '../HeaderSignBtns/HeaderSignBtns'
import HeaderUserInfo from '../HeaderUserInfo/HeaderUserInfo'

import style from './layout.module.css'

function Layout() {
  const userLocal = storageService.getLocalStorage('user') || null
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const user = useSelector((state) => state.user.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!isLoggedIn && userLocal) {
      dispatch(getUserLocal(JSON.parse(userLocal)))
    }
  }, [dispatch, isLoggedIn, userLocal])

  const onLogout = () => {
    dispatch(logOut())
  }

  return (
    <>
      <header className={style.header}>
        <div className={style.logo}>
          <Link to="/">Realworld Blog</Link>
        </div>
        {isLoggedIn ? <HeaderUserInfo user={user} logout={onLogout} /> : <HeaderSignBtns />}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
