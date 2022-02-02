import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/usersDucks';
import { UsersTable } from '../users-table/users-table';

export const Users = () => {

  const dispatch = useDispatch();
  const users = useSelector(store => store);

  useEffect(() => {
    dispatch(getUsersAction())
    console.log(users.users.arrayUsers)
  }, [])

  return (
    <>
      {(users.users.arrayUsers !== undefined) &&
        <UsersTable usersList={users.users.arrayUsers} />
      }
    </>
  )
};

//<UsersTable usersList={users} />>;