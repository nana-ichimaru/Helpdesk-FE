import { Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Helpdesk</div>} />
      </Routes>
    </>
  )
}
