import { useInputValidation } from "6pp"
import { Search as SearchIcon } from '@mui/icons-material'
import { Dialog, DialogTitle, InputAdornment, List, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLazySearchUserQuery, useSendFriendRequestMutation } from '../../redux/api/api'
import { setIsSearch } from '../../redux/reducers/misc'
import UserItem from '../shared/UserItem'
import { useAsyncMutation } from "../../hooks/hook"



const Search = () => {

  const {isSearch} = useSelector((state) => state.misc);

  const [searchUser] = useLazySearchUserQuery()

  const [sendFriendRequest,isLoadingSenderFriendRequest] = useAsyncMutation(useSendFriendRequestMutation);

  const dispatch = useDispatch();

const search =useInputValidation("")


const [users,setUsers] =useState([]);

const addFriendHandler = async (id) => {
 await sendFriendRequest("Sending friend request...", { userId: id });
};
 const searchCloseHandler = () => dispatch(setIsSearch(false));
 
 useEffect(() => {

  const timeOutId = setTimeout(() => {

    searchUser(search.value)
    .then(({data}) => setUsers(data.users))
    .catch((e) => console.log(e));
  },1000);

  return () => {
    clearTimeout(timeOutId);
  }
},[search.value]);

  return <Dialog open={isSearch} onClose={searchCloseHandler}>
  <Stack p={"2rem"} direction={"column"} width={"25rem"}>
   <DialogTitle textAlign={"center"}>Find People</DialogTitle>
   <TextField 
   label="" 
   value={search.value}
    onChange={search.changeHandler}
    variant='outlined'
    size='small'
    InputProps={{
      startAdornment: (
        <InputAdornment position='start'>
          <SearchIcon/>
        </InputAdornment>
      ),
    }}
    />
<List>

{
  users.map((user) =>(
    <UserItem
     user={user}
      key={user._id}
       handler={addFriendHandler}
        handlerIsLoading={isLoadingSenderFriendRequest}
    />
  ))
}

</List>

  </Stack>
 

  </Dialog>
    
}

export default Search
