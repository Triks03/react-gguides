import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/layout';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import WeaponsPage from './pages/WeaponsPage/WeaponsPage';
import WeaponPage from './pages/WeaponPage/WeaponPage';
import ArtifactsPage from './pages/ArtifactsPage/ArtifactsPage';
import ArtifactPage from './pages/ArtifactPage/ArtifactPage';
import AdminPage from './pages/AdminPage/AdminPage';
import CreateCharacterPage from './pages/CreateCharacterPage/CreateCharacterPage';
import UpdateCharacterPage from './pages/UpdateCharacterPage/UpdateCharacterPage'




import './App.sass';

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element ={<LoginPage/>}/>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='character' element ={<CharactersPage/>}/>
          <Route path='character/:id' element ={<CharacterPage/>}/>
          <Route path='weapon' element ={<WeaponsPage/>}/>
          <Route path='weapon/:id' element ={<WeaponPage/>}/>
          <Route path='artifact' element ={<ArtifactsPage/>}/>
          <Route path='artifact/:id' element ={<ArtifactPage/>}/>
          <Route path='admin-panel' element ={<AdminPage/>}/>
          <Route path='admin-panel/create-character' element ={<CreateCharacterPage/>}/>
          <Route path='admin-panel/update-character/:id' element ={<UpdateCharacterPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
