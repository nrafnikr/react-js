import './news.css';


function NewsItem({title,pic,url,des,author, dateTime}) {
    const handleClick = () => {
        window.open(url,'_blank', 'noopener,noreferrer');
      };
    return(
        <>
        <div>
            <div className="card_body" >
                <img className='img' src={pic} />
                <h4 className='heading' onClick={handleClick}>{title}</h4>
                <h5>{des}...</h5>
                <p>By {author} on {new Date(dateTime).toLocaleString()}</p>
            </div>
        </div>
        </>
    );
}

export default NewsItem;