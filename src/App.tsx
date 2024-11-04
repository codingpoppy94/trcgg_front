import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import * as Page from './pages/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page.Root />}>
          <Route index element={<Page.Home />} />
          <Route path="Summoners/:searchValue" element={<Page.Summoners />} />
          <Route path="Auction" element={<Page.Auction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
