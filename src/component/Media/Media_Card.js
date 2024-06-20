//Media: poster, title, rate, likeButton, etc..

const Media_Card = () => {
return (    
  <div className="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h5 className="data__summary">{summary}</h5>
      <div className="card-actions justify-end">
        <Link to="/content/:id">
        <button className="btn btn-primary">상세페이지로</button>
        </Link>
      </div>
    </div>
  </div>

);
}
return Media_Card



//<section className="cards container">
//  <div className="data-card_skeleton"/>
//    <div className="flex flex-col gap-4 w-52">
//      <div className="skeleton h-32 w-full"></div>
//      <div className="skeleton h-4 w-28"></div>
//      <div className="skeleton h-4 w-full"></div>
//      <div className="skeleton h-4 w-full"></div>
//  </div>
//
//</section>