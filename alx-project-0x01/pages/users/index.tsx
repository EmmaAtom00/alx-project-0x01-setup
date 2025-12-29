import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'
import React from 'react'

type PageProps = {
  users: UserProps[]
}


function Index({ users }: PageProps) {
  return (
    <div>
      <Header />

      <div className="grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}



export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Index