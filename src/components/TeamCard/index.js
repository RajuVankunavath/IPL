import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {name, teamImageUrl, id} = matchDetails

  return (
    <li className="list">
      <Link className="list-items" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
