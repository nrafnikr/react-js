import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general",
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    constructor(props) {
        super(props);
        //console.log("I am a constructor");
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        };

        document.title = `${this.capitalizer(this.props.category)}  - News`;
    }

    capitalizer = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    async UpdateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        this.props.setProgress(60);

        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(60);
        // console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();

        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
        });
    };

    render() {
        return (
            <>
            
                {/* <h2 className="text-center" style={{margin: "30px 0px"}}>
                    NewsAdda - Top {this.capitalizer(this.props.category)}{" "}
                    Headlines
                </h2> */}
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={
                                                element.title
                                                    ? element.title.slice(0, 45)
                                                    : ""
                                            }
                                            description={
                                                element.description
                                                    ? element.description.slice(
                                                          0,
                                                          90
                                                      )
                                                    : ""
                                            }
                                            imgUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author}
                                            pubDate={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                            {/* console.table(this.state.articles) */}
                        </div>
                    </div>
                </InfiniteScroll>
                
            </>
        );
    }
}

export default NewsComponent;