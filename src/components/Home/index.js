// Write your code here

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    newIplData: [],
  }

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplData = await response.json()
    const newData = iplData.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({newIplData: newData})
  }

  render() {
    const {newIplData} = this.state

    return (
      <div className="Home-container">
        <div className="image-container">
          <img
            className="ipl-logo"
            alt="ilp logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {newIplData.map(eachItem => (
            <TeamCard key={eachItem.id} matchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
