import { useQuery, gql, useMutation } from "@apollo/client";

const TODOS_QUERY = gql`
  {
    todos {
      id
      title
      createdAt
    }
  }
`;

const REMOVE_TODO = gql`
  mutation RemoveATodo($input: Int!) {
    removeTodo(id: $input) {
      id
      title
    }
  }
`;

function App() {
  const { data } = useQuery(TODOS_QUERY);
  const [mutateFunction] = useMutation(REMOVE_TODO);

  const removeHandler = (id) => {
    mutateFunction({
      variables: { input: parseInt(id, 10) },
      refetchQueries: [{ query: TODOS_QUERY }],
    })
      .then((res) => {
        if (res?.data?.removeTodo?.id === id) {
          console.log("Todo removed");
        }
      })
      .catch((error) => console.error("Error removing todo:", error));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">React + GraphQL Todo App</h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
          {data && data.todos && data.todos.length > 0 ? (
            <ul className="space-y-4">
              {data.todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between p-4 bg-white rounded shadow hover:shadow-md transition-shadow"
                >
                  <span className="text-lg">
                    <strong>{index + 1})</strong> {todo.title}
                  </span>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    onClick={() => removeHandler(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No todos available.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
