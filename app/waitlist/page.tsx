import { prisma } from '@/prisma/client'
import React from 'react'
export const dynamic = 'force-dynamic'
const page = async() => {
    const emails = await prisma.waitlist.findMany({orderBy:{createdAt:"asc"}})
  return (
    <div className='w-xl p-2 bg-red'>
        <table>
            <thead>
                <tr className='bg-blue-800'>
                    <th className='p-2'>#</th>
                    <th className='p-2'>Email</th>
                </tr>
            </thead>
            <tbody>
                {emails.map((email, index)=>(
                    <tr key={email.email}>
                    <td className='p-2'>{index+1}</td>
                    <td className='p-2'>{email.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default page
