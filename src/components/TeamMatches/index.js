import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    updatedMatchData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getLatestMatchesDetails = data => ({
    id: data.id,
    result: data.result,
    umpires: data.umpires,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    secondInnings: data.second_innings,
    venue: data.venue,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    // console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const newResponse = await response.json()
    // console.log(newResponse)
    const updatedData = {
      teamBannerUrl: newResponse.team_banner_url,
      latestMatchDetails: this.getLatestMatchesDetails(
        newResponse.latest_match_details,
      ),
    }
    this.setState({updatedMatchData: updatedData})
  }

  backgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'CSK':
        return 'csk'
      case 'MI':
        return 'mi'
      case 'RR':
        return 'rr'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      case 'KXP':
        return 'kxp'
      default:
        return ''
    }
  }

  render() {
    const className = this.backgroundColor()

    const {updatedMatchData} = this.state
    const {teamBannerUrl, latestMatchDetails} = updatedMatchData

    return (
      <div className={`team-matches-container ${className}`}>
        <img className="bannerUrl" src={teamBannerUrl} alt="team banner" />
        <div className="content-container">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
