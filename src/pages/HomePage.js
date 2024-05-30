    import React from 'react';
    // { Component } from 'react';
    import "./HomePage.css";
    import axios from "axios";
    import Content from"../component/Content";
    
    class HomePage extends React.Component{
       state = {
          isLoading : true,
          contents:[]
       };
    
       getContents = async () => {
          try {
            const {
              data: {
                data: { movies: contents } // 샘플 API 응답에서 movies를 contents로 사용
              }
            } = await axios.get(
              "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
            );
            this.setState({ contents, isLoading: false });
          } catch (error) {
            console.error("Error fetching data: ", error);
            this.setState({ isLoading: false });
          }
        };
        componentDidMount() {
          this.getContents();
        }
    
       render() {
          const {isLoading, contents} = this.state;
          return(
             <section className='container01'>
                {isLoading ? (
                   <div className='loader'>
                   <span className='loader__text'>추천목록 로딩중..</span>
                   </div>
                ):(
                   <div className="contents">
                     {contents.length > 0 ? (
                        contents.map(content => (
                          <Content
                            key={content.id}
                            id={content.id}
                            year={content.year}
                            title={content.title}
                            summary={content.summary}
                            poster={content.medium_cover_image}
                            genres={content.genres}
                          />
                        ))
                     ) : (
                        <div>No contents available</div>
                     )}
                   </div>
                )}
             </section>
          );
       }
    }
    export default HomePage;