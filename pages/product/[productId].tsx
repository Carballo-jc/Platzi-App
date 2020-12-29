import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const router = useRouter()
  const {
    query: { productId },
  } = router
  return <div>esta e slapagina de prueba:{productId}</div>
}

export default ProductItem
