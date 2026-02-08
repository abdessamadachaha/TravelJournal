function Article({id, img, title, country, googleMapsLink, dates, text}) {
   return(
      <article className="article" key={id}>
         <img src={img.src} alt={img.alt} />
         <div className="data">
            <div>
               <p><span></span> {country}</p>
               <a href={googleMapsLink}>View on Google Maps</a>
            </div>
            <p>{title}</p>
            <p>{dates}</p>
            <p>{text}</p>
         </div>
      </article>
   );

}

export default Article;