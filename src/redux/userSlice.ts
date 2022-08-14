import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'

interface UserState {
  accessToken: string
}

const initialUserState: UserState = {
    accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    updateToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload
    },
  },
})

export const { updateToken } = userSlice.actions
export const selectToken = (state: RootState) => state.user.accessToken
export default userSlice.reducer