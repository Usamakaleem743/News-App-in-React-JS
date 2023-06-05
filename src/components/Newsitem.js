import React  from "react";
const Newsitem =(props)=> {
  
    let { title, description, imageurl, newsurl, date, author, source } = props;
    return (
      <div style={{ background: props.mode ===`dark`?`#1F1E1F`:`white`,color: props.mode ===`dark`?`white`:`black`, width: "22rem"} }>

        <div className="card "   >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '80%', zindex: '1' }}>{source}</span>
          <img style={{ height: "12rem" }}src={ !imageurl ? "https://i0.wp.com/indiaeducationdiary.in/wp-content/uploads/2022/06/University-of-Sheffield.jpg?fit=680%2C383&ssl=1": imageurl }
            className="card-img-top"
            alt="..."
          />
          <div className={`card-body `}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{!description?"24 ילדים נרצחו בטבח בתאילנד, במהלכו נכנס שוטר לשעבר למעון חמוש באקדח וסכין. הרוצ" :description}</p>
            <p className="card-text">
              <small className="text-danger">
                By {author ?+author : "Unknown"} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
