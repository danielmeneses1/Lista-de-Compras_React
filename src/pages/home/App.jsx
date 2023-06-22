import {useRef,useState} from 'react'
import {v4} from 'uuid'
import { AddButton,Container } from './styles'



function App() {
  const inputRef = useRef()

  const [products, setProducts] = useState([])

  function buttonClick(){
    setProducts([
      {id : v4(), nome: inputRef.current.value}, ...products]),
      inputRef.current.value = ''
  }

  function deleteProduct(id){
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="produto..." ref={inputRef}/>
      <AddButton onClick={buttonClick}>Adicionar</AddButton>
      
      {products.map((product)=>(
        <div key={product.id}>
          <p>{product.nome}</p>
          <button onClick={() => deleteProduct(product.id)}>🗑️</button>
          </div>
      ))}


    </Container>
  )
}

export default App
