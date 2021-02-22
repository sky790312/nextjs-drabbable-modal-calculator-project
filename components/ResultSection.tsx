import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { RootState } from '@/store/index'
import { User } from '@/components/User'

export const ResultSection: React.FC = () => {
  const winnerUser = useSelector(
    (state: RootState) => state.users.winnerUser,
    shallowEqual
  )

  return (
    <div>
      <h1>抽獎結果</h1>
      {winnerUser && (
        <div>
          <User user={winnerUser} />
          <h3>恭喜！！ 🎉🎉🎉</h3>
        </div>
      )}
    </div>
  )
}
