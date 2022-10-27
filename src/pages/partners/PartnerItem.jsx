
function PartnerItem({partner}) {
  return (
    <li className="partnerItem">
        <img src={partner.img} alt="reload freight career"/>
        <div className="partnersInfo">
            <h4 className="partnerName">{partner.name}</h4>            
            <p className="partnerPosition">{partner.position}</p>
            <p className="partnerTeam">{partner.team}</p>
        </div>
    </li>
  )
}

export default PartnerItem