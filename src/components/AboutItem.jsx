import circle from '../assets/img/svg/circle.svg';

function AboutItem({data}) {
  return (
    <div className={`aboutDescription ${data.order?"reverse":""}`}>
        <div className={`aboutImgWrapper ${data.order?"reverse":""}`}>
            <img src={data.img} alt="about reload" />
            <img className="circleIcon" src={circle} alt="about reload" />
        </div>
        <div className="aboutTxtWrapper">
            <h3 className="title">{data.title}</h3>
            <p className="text">{data.text}</p>
        </div>
    </div>
  );
}

export default AboutItem;
