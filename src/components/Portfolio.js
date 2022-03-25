import React,{useState} from 'react'
import cardImage1 from '../images/01.jpg'
import cardImage2 from '../images/02.jpg'
import cardImage3 from '../images/03.jpg'
import cardImage4 from '../images/4.jpg'
import cardImage5 from '../images/5.jpg'
import cardImage6 from '../images/6.jpg'

const Portfolio = () => {
  const [cardData] = useState([
    { id: "1", name: "Ahmad Raza", expert: "CEO & MERN STACk", image: cardImage1 },
    { id: "2", name: "John Martin", expert: "Manager", image: cardImage2 },
    { id: "3", name: "Max", expert: "", image: cardImage3 },
    // { id: "4", name: "Abraham", expert: "", image: cardImage4 },
    // { id: "5", name: "Peter", expert: "", image: cardImage5 },
    // { id: "6", name: "Parker", expert: "", image: cardImage6 },
  ]);
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
          <div className="row">
            <div className="col-4">
              <div className="portfolio__content">
                <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                <h3 className="portfolio__content-h3">Our team.</h3>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                {cardData.map((person) => (
                  <div className="col-4 pl-15" key={person.id}>
                    <div className="portfolio__card">
                      <div className="portfolio__card-img">
                        <img src={person.image} alt="card" />
                      </div>
                      <h5 className="portfolio__card-name">{person.name}</h5>
                      <p className="portfolio__card-expert">{person.expert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;