import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './TestsList.css'

// Mock data - array of data: pretend we called an API and this is the data that we got back
import mockData from '../../mock-data.json'

const TestsList = () => {

  const [testData] = useState(mockData);

  function handleRunTestClick(e) {
    e.preventDefault();
    /* Code to tell server to run test */
    console.log('run test was clicked.');
  }

  function handleReportClick(e) {
    e.preventDefault();
    console.log('report was clicked');
  }

  function returnDuration(seconds) {
    if (seconds < 60) {
      return seconds + "s"
    }
    else {
      // Round up or down
      return Math.round(seconds / 60) + "m"
    }
  }

  function createNewTest(e) {
    /* Create New Test --> redirect to a new page */
    console.log('creating new test');
  }
  return (
    <div className='testslist-container'>
      <div className='testslist-top'>
        {/* TODO: change (5) to something else using a function to calculate */}
        <div className='list-title'><h1>Tests (5)</h1></div>
        <div className='new-test-btn-container'>
          <button className='new-test-btn' onClick={createNewTest}>
            <Link to='tests'>Create Test</Link>
          </button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Update Date</th>
            <th>Users</th>
            <th>Duration</th>
            <th>Actions</th>
            <th>Reports</th>
          </tr>
        </thead>
        <tbody>
          {console.log(mockData.length)}
          {mockData.length ?
            testData.map((data, index) =>
              <tr key={index}>
                <td className='list-item'>
                  <Link
                    to={{
                      pathname: data.testName,
                      search: "?sort=name",
                      hash: "#the-hash"
                    }}
                    state={{
                      data: data
                    }}
                  >{data.testName}</Link>
                </td>
                <td className='list-item'>{data.updateDate}</td>
                <td className='list-item'>{
                  /* Maps out the list of users... */
                  data.ThreadGroups.map((tg_data, index) => {
                    return <div key={index} className='list-item'>
                      {index ? "/" + tg_data.num_threads : tg_data.num_threads}
                    </div>
                  })
                }</td>
                <td className='list-item'>{
                  /* Maps out the list of durations... */
                  data.ThreadGroups.map((tg_data, index) => {
                    return <div key={index} className="list-item">
                      {index ? "/" + returnDuration(tg_data.duration) : returnDuration(tg_data.duration)}
                    </div>
                  })
                }</td>
                <td className='list-item'><a href='#' onClick={handleRunTestClick}>▶ Run Test</a></td>
                <td className='list-item'><a href='#' onClick={handleReportClick}>Report</a></td>
              </tr>
            )
            : <div>empty</div>} {/* TODO: Change this later! */}
        </tbody>
      </table>
    </div>
  );

}

export default TestsList;