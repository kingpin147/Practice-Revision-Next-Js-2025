import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </>
    
  )
}

export default Home