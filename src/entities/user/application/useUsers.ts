import { useEffect } from "react";
import { useAppDispatch } from "../../../shared";
import {  useUserSelect } from "../model";
import { fetchAllUsers,  fetchOneUserId, fetchRemoveUser, fetchUpdateUser } from "../model/thunk";
import { UserService } from "../domain/services";

const userService = new UserService();

export function useUpdateUser() {
  const dispatch = useAppDispatch();
  const { user } = useUserSelect()

  async function updateUser({name, email, id}: {name: string, email: string, id?: number}) {
    const updateUser = userService.createNewUser({ name, email }) //валидация 

    const currentId = id ? id : Number(user && user.id)

    dispatch(fetchUpdateUser({...updateUser, id: currentId}))
  }

  return { updateUser };
}


export function useRemoveUser() {
  const dispatch = useAppDispatch();
  const { user } = useUserSelect()

  async function removeUser({ id }: { id?: number }) {

    const currentId = id ? id : Number(user && user.id)

    dispatch(fetchRemoveUser({ id: currentId }))
  }

  return { removeUser };
}

export function useAllUsers() {
    const { loading, error, usersList } = useUserSelect()
    const dispatch = useAppDispatch()
    
  
  useEffect(() => { 
      dispatch(fetchAllUsers())
  },[dispatch])


return { loading, error, usersList }
}

export function useGetUsersId() {
  const dispatch = useAppDispatch()
    

  const getOneUser = ({ id }: { id: number }) => {
    if (!id) return;
    dispatch(fetchOneUserId({ id }))
  }


return { getOneUser }
}

export function useGetUserInfo() {
  const { userInfo, loading, error } = useUserSelect()

  return { userInfo, loading, error }
}

