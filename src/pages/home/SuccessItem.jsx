function SuccessItem({employeeIcon,info}) {
  return (
    <li>
        <img src={info.imgSrc} alt="success" />
        <h3 className="growthTitle">{info.year}</h3>
        <div className="successInfoWrapper">
            <div className="emplQuantity">
                <img src={employeeIcon} alt="employeeIcon" />
                {info.employee}
            </div>
            <div className="emplArea">
                
                {info.employee} m<sup>2</sup>
            </div>
        </div>
    </li>
  )
}

export default SuccessItem