import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    umpires,
    competingTeamLogo,
    result,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    venue,
  } = latestMatchDetails
  //   console.log(latestMatchDetails)
  return (
    <div className="latest-match-container">
      <h1 className="heading">Latest Match</h1>
      <div className="card-main-container">
        <div className="left-side">
          <h1 className="heading">{competingTeam}</h1>
          <p className="description">{date}</p>
          <p className="description">{venue}</p>
          <p className="description">{result}</p>
        </div>
        <img
          className="competing-logo"
          src={competingTeamLogo}
          alt={competingTeam}
        />
        {/* <hr className="line" /> */}
        <div className="right-side">
          <p className="description">FirstInnings</p>
          <p className="description">{firstInnings}</p>
          <p className="description">SecondInnings</p>
          <p className="description">{secondInnings}</p>
          <p className="description">Man Of The Match</p>
          <p className="description">{manOfTheMatch}</p>
          <p className="description">Umpires</p>
          <p className="description">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
