import Greetings from "./Greetings";


const StateLessComponent = () => {
  const personList = [{
    "firstName": "Alice",
    "lastName": "Lannie",
    "address": {
      "city": "Kolkata"
    }
  },
  {
    "firstName": "John",
    "lastName": "Doe",
    "address": {
      "city": "Mumbai"
    }
  },
  {
    "firstName": "Matt",
    "lastName": "Sneed",
    "address": {
      "city": "Delhi"
    }
  }];

  let count = 0;
  function counter(count){
    console.log(count+1);
  }

  return (
    <div className="App">
      Count : {count}
      {
        personList.map((person, index) => (
          <Greetings message="hello" firstName={person.firstName} lastName={person.lastName} address={person.address} />
        ))
      }
      <button onClick={()=>counter(count)}>click me!</button>
    </div>
  );
}

export default StateLessComponent;
