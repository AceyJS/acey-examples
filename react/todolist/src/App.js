import React, {createRef, useRef} from 'react';
import styled from 'styled-components'
import { useAcey } from 'react-acey'
import { Todolist } from './@acey'

import Todo from './@components/todo'
import Input from './@components/input'

function App() {
  const inputRef = useRef()

  useAcey([ Todolist ])

  const onAddTodo = () => {
    const content = inputRef.current.getValue()
    if (!content) return

    Todolist.create(content)
    inputRef.current.reset()
  }

  const onDeleteTodo = (todo) => Todolist.delete(todo).save().store()

  const renderTodo = (todo, index) => (
    <div key={index}>
      <Todo onClickDelete={() => onDeleteTodo(todo)} todo={todo}/>
    </div>
  )

  return (
    <Container>
      <Input onClick={onAddTodo} ref={inputRef} />
      {Todolist.sortByCreationDate().map(renderTodo)}
    </Container>
  );
}

const Container = styled.div`
  margin: 100px;
`

export default App;
