import point from "../assets/placeholder.png";

function Article({id, img, title, country, googleMapsLink, dates, text}) {
   return(
      <article className="article" key={id}>
         <img src={img.src} alt={img.alt} />
         <div className="data">
            <div>
               <p><span><img src={point} alt="icon" /></span> {country}</p>
               <a href={googleMapsLink} target="_blank">View on Google Maps</a>
            </div>
            <p className="title">{title}</p>
            <p className="date">{dates}</p>
            <p>{text}</p>
         </div>
      </article>
   );

}

export default Article;