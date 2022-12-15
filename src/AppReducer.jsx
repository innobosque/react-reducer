import { useReducer, useState } from 'react';
import { Alert, Badge, Spinner } from 'react-bootstrap';
import { AddTodo, ListTodo } from './components';
import { todoReducer, types } from './helpers';

export const AppReducer = () => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(todoReducer, {
    user: 'Xurxo',
    data: [{ id: 1, value: 'Prueba' }]
  })

  const handleAddTodo = value => {
    setLoading(true);

    // En este método pasamos un objeto llamada action 
    // Propiedades: type y payload
    dispatch({
      type: types.add,
      payload: {
        id: Date.now(),
        value
      }
    });

    // Simulación async
    setTimeout(() => {
      setLoading(false);
    }, 500);

  }

  const handleDelete = id => {
    setLoading(true);
    dispatch({
      type: types.delete,
      payload: id
    });
    setLoading(false);
  }

  return (
    <>
      <header>
        <h1 className="text-center">Ejemplo de Reducer</h1>
        <Alert>
          <p>
            En el contexto de React, un <Badge as="strong" bg="info">reductor</Badge> es una <Badge pill as="strong" bg="light" text="dark">función</Badge> que se utiliza junto con el patrón de diseño Redux para gestionar el estado de una aplicación. Un <Badge as="strong" bg="info">reductor</Badge> recibe el <Badge pill as="strong" bg="light" text="dark">estado actual</Badge> y una <Badge pill as="strong" bg="light" text="dark">acción</Badge>, y devuelve un <Badge pill as="strong" bg="light" text="dark">nuevo estado</Badge>. Esto permite una gestión sencilla y predecible del estado de la aplicación, lo que facilita la creación de aplicaciones complejas.
          </p>
        </Alert>
      </header>


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
    </>
  )
}
