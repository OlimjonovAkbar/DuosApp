import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './layout/Layout'
import Dashboard from './pages/Dashboard/Dashboard'

export const App = () => {
  return (
      <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>} />
      </Route>
      </Routes>
      </>
  )
}
