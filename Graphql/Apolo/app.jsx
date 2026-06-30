import { gql, useQuery } from "@apollo/client";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div>
      <h1>Countries List</h1>

      <ul>
        {data.countries.map((country, index) => (
          <li key={index}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
