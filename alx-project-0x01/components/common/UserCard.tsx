import { UserProps } from '@/interfaces'
import React from 'react'

type UserCardProps = {
  user: UserProps
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-header">
        <h2>{user.name}</h2>
        <span className="username">@{user.username}</span>
      </div>

      <p className="email">{user.email}</p>

      <div className="section">
        <h4>Company</h4>
        <p>{user.company.name}</p>
        <small>{user.company.catchPhrase}</small>
      </div>

      <div className="section">
        <h4>Address</h4>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="footer">
        <span>{user.phone}</span>
        <a href={`https://${user.website}`} target="_blank">
          {user.website}
        </a>
      </div>
    </div>
  )
}

export default UserCard
