import NewsItem from "./newsItem";
import './news.css';
import { useEffect, useState } from "react";


function News({category, setProgress}) {
    const [news, setNews] = useState([]);
    const [page,setPage] = useState(1);
    const [totalResults, setTotoalResults] = useState();
    const [pageSize, setPageSize] = useState(9);
    useEffect(() => {
        try {
            async function fetchData() {
                let res = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=482dd35b3b884691a5236331de3391c1&page=1&pageSize=9`);
                let data = await res.json();
                let article = data.articles;
                setNews(article);
                setTotoalResults(data.totalResults);
            }
            fetchData()
        }
        catch (e) {
            console.log(e)
        }
        setProgress(100);
    }, [])

    const handleNextClick = () => {
        async function fetchData() {
            let res = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=482dd35b3b884691a5236331de3391c1&page=${page+1}&pageSize=${pageSize}`);
            let data = await res.json();
            let article = data.articles;
            setNews(article)
        }
        fetchData()
        setPage(page+1)
    }

    const handlePrevClick = () => {
        async function fetchData() {
            let res = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${category}&apiKey=482dd35b3b884691a5236331de3391c1&page=${page-1}&pageSize=${pageSize}`);
            let data = await res.json();
            let article = data.articles;
            setNews(article);
        }
        fetchData()
        setPage(page-1)
    }
    return (
        <>
        <h2>Top Headlines - {category}</h2>
            <div className="news_container">
                {news.map((art, id) =>
                    <div key={id.source}>
                        <NewsItem title={art.title ? art.title : 'No title'} des={art.description ? art.description.slice(0,120) : "No description available"} pic={art.urlToImage ? art.urlToImage : "https://i.cbc.ca/1.6540653.1659577064!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/bc-wildfire-crews-ignite-planned-fires-along-highway-3a-aug-2-2022.jpg"} url={art.url} author={art.author ? art.author : 'Unknown'} dateTime={art.publishedAt ? art.publishedAt : null}/>
                    </div>
                )}
            </div>
            <div className="button">
                <button disabled={page<=1} onClick={handlePrevClick}>&larr;Previous</button>
                <button disabled={page+1>Math.ceil(totalResults/pageSize)} onClick={handleNextClick}>Next &rarr;</button>
            </div>
        </>
    );
}

export default News;