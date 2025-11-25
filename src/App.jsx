import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { Facilities, Footer, Header, PageNotFound, Rooms} from './components';
import { Home, RoomDetails } from './pages';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


const App = () => {
  return (

    <main className=''>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/room/:id'} element={<RoomDetails />} />
          <Route path={''} element={<PageNotFound />} />
          <Route path={'/rooms'} element={<Rooms />} />
          <Route path={'/facilities'} element={<Facilities />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/contact'} element={<ContactPage />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </main>
  )
}

export default App