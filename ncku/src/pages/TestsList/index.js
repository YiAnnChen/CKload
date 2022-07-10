import React, {
  useState
} from 'react'
import './TestsList.css'

// Mock data - array of data: pretend we called an API and this is the data that we got back
import data from '../../mock-data.json'

const TestsList = () => {

  const [testData, setTestData] = useState(data);

  function handleClick(e) {
    e.preventDefault();
    /* Code to tell server to run test */
    console.log('The link was clicked.');
  }

{/* TODO: when the list is empty -> do something*/} 

  return(
    <div className='app-container'>
      <div className='list-title'>Tests</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Update Date</th>
            <th>Users</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data.length)}
          { data.length ?
          testData.map((data)=>
            <tr key={data.id}>
              <td><a href={'http://localhost:3000/tests/'+data.testName}>{data.testName}</a></td>
              <td>{data.updateDate}</td>
              <td>{data.users}</td>
              <td><a href='#' onClick={handleClick}>▶ Run Test</a></td>
            </tr>
          )
          :<div>empty</div>}
        </tbody>
      </table>
    </div>
  );

}

export default TestsList;