import Card from '@/app/Ui/Card'
import Link from 'next/link'
import React from 'react'

const ArchivedNotification = () => {
  return (
    <Card>Archieve <Link className='text-blue-500' href="/complex-dashboard">default</Link>  </Card>
  )
}

export default ArchivedNotification