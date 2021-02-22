import React from 'react'
import { User } from '@/components/User'
import styled from 'styled-components/'
import { RootState } from '@/store/index'
import { useSelector, shallowEqual } from 'react-redux'

export const UsersSection: React.FC = React.memo(() => {
  const users = useSelector(
    (state: RootState) => state.users.users,
    shallowEqual
  )

  return (
    <div>
      <h1>參與抽獎名單</h1>
      <UsersContainer>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </UsersContainer>
    </div>
  )
})

const UsersContainer = styled.div`
  max-height: 480px;
  overflow: auto;
`
