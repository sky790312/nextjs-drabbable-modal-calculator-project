import React from 'react'
import { UserSchema } from '@/schema/userSchema'
import styled from 'styled-components/'

type Props = {
  user: UserSchema
}

export const User: React.FC<Props> = ({ user }) => {
  return (
    <UserContainer>
      <Left>
        <UserImage name={user.name} />
      </Left>
      <Right>
        {user.id}. {user.name}
      </Right>
    </UserContainer>
  )
}

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.gray};
`

const Left = styled.div`
  padding: 20px;
`

const Right = styled.div`
  padding: 20px;
`

const UserImage = styled.div<{ name: string }>`
  width: 50px;

  &:before {
    background: ${({ theme }) => theme.colors.lightBlue};
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
    content: '${(props) => props.name}';
    display: inline-block;
    font-weight: 600;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.5em;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
`
