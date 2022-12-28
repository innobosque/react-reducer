import { Alert, Badge, Figure, Spinner } from 'react-bootstrap';
import { AddTodo, ListTodo } from './components';
import { useData } from './hooks/reducer';

export const AppReducer = () => {
  const { loading, state, handleDelete, handleAddTodo } = useData();
  return (
    <main>
      <h2>Reducer</h2>
      {/* Loader */}
      <Alert show={loading} variant="danger">
        <div className="d-flex gap-1 align-items-center">
          <Spinner /> Cargando...
        </div>
      </Alert>
      {/* listado */}
      <ListTodo items={state.data} onDelete={handleDelete} loading={loading} />
      {/* formulario */}
      <AddTodo onAddTodo={handleAddTodo} loading={loading} />
      <header className='mt-2'>
        <h1>Patrón de <strong>Reducer</strong></h1>
        <Alert>
          <p>
            En el contexto de React, un <Badge as="strong" bg="info">reductor</Badge> es una <Badge pill as="strong" bg="light" text="dark">función</Badge> que se utiliza junto con el patrón de diseño Redux para gestionar el estado de una aplicación. Un <Badge as="strong" bg="info">reductor</Badge> recibe el <Badge pill as="strong" bg="light" text="dark">estado actual</Badge> y una <Badge pill as="strong" bg="light" text="dark">acción</Badge>, y devuelve un <Badge pill as="strong" bg="light" text="dark">nuevo estado</Badge>. Esto permite una gestión sencilla y predecible del estado de la aplicación, lo que facilita la creación de aplicaciones complejas.
          </p>
          <Figure>
            <Figure.Image
            alt='Concepto de Reducer'
            src='./public/reducer.jpg' />
            <Figure.Caption>Concepto Reducer</Figure.Caption>
          </Figure>
        </Alert>
      </header>
    </main>
  )
}