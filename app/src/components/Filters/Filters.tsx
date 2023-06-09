import { FC, useEffect, useState } from "react";
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import styles from "./Filter.module.scss";
import Menu from "./Menu/Menu";
import Head from "./Head/Head";
import UserList from "./UserList/UserList";
import { IContact } from "../../types/IContact";
import { getContacts } from "../../api/contacts";
import WelcomePage from "./WelcomePage/WelcomePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

const Filters: FC = () => {
  const [users,setUsers] = useState<IContact[]>([]);
  const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com/users/2");
  useEffect(()=>{
    getContacts().then(res=>setUsers(res || []));
  },[])
  return (
    <div className={styles.container}>
      <Menu/>
      <div className={styles.content}>
        <Head/>
        <NotFoundPage/>
        {/*<WelcomePage/>*/}
      </div>
      {/*<Admin dataProvider={dataProvider}>*/}
      {/*  <Resource name="users" list={UserList} />*/}
      {/*</Admin>*/}
    </div>
  );
};

export default Filters;