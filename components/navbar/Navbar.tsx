import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a>Inicio</a>
        </Link>
        <Link href="/about">
          <a>Sobre</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar
