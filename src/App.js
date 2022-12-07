import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AddressList from './components/addresses/AddressList/AddressList';
import AddAddress from './components/addresses/AddAddress/AddAddress';
import ViewAddress from './components/addresses/ViewAddress/ViewAddress';
import EditAddress from './components/addresses/EditAddress/EditAddress';
import Loadingspin from "./components/Loadingspin/Loadingspin";

let App = () => {
  return (
    <React.Fragment> 
      <NavigationBar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/addresses/list'}/>}/>
        <Route path={'/addresses/list'} element={<AddressList/>}/>
        <Route path={'/addresses/add'} element={<AddAddress/>}/>
        <Route path={'/addresses/view/:addressId'} element={<ViewAddress/>}/>
        <Route path={'/addresses/edit/:addressId'} element={<EditAddress/>}/>
      </Routes>
    </React.Fragment>
  );
} 
export default App;

      /*{/* <button className= "btn btn-success me-2">
        <i className= "fa fa-home me-2"/>hello</button>
      <button className= "btn btn-success me-2">hello</button> */ /*}*/
