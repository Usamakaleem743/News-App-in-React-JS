import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalresults] = useState(0);
   

  const updatenews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&apikey=235a054426474cf2bcc93a73246bd43f&page=${page}&pagesize=${props.pagesize}&language=en`;
    setLoading(true);
    setPage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(parseddata.articles);
    setTotalresults(parseddata.totalResults);
    setLoading(false);
  };
  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=235a054426474cf2bcc93a73246bd43f&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parseddata = await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalresults(parseddata.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    updatenews()
    //eslint-disable-next-line;
    document.title=`${capitalizeFirstLetter(props.category)} - Newsmonkey`
  }, [])
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  

  return (
    <>
      <h2 style={{marginTop:'10px'}} className= {` mt-7 text-center text-${props.mode ===`light`?`dark`:`light`}`}  >
        Newsmonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
      >
        <div className="container" style={{color: props.mode ===`dark`?`white`:`black`}}>
          <div className="row my-3 ">
            {articles.map((element) => {
              return (
                <div
                  className=" col-sm-12 col-md-6 col-lg-6 col-xl-4  my-3"
                  key={element.url} 
                >
                
                  <Newsitem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 50)
                        : ""
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {loading && <Spinner />}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "sports",
};

export default News;
