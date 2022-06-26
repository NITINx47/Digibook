import react ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>"A room without books is like<br/> a body without a soul..." </h1>
                </div>
                <div className="row2">
                    <h2>DIGIBOOK</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <br /><br /><br /><br />
                   <h3>PODCAST OF THE DAY</h3>
                   <p><iframe width="560" height="250" src="https://open.spotify.com/embed/show/0Jj6DoEoG2R5fWdIEbZ0bd?utm_source=generator&theme=0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                   <div>
                    <h1></h1>
                   </div>
                    
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
            <div className="podcastClass">
                <h1>Podcast Zone🎧  </h1>
                <h6>“The beautiful thing about podcasting is it’s just talking. It can be funny, or it can be terrifying. It can be sweet. It can be obnoxious. It almost has no definitive form. In that sense it’s one of the best ways to explore an idea, and certainly much less limiting than trying to express the same idea in stand up comedy. For some ideas stand up is best, but it’s really, really nice to have podcasts as well.” — Joe Rogan</h6>
<br />
                <h6>(New Podcast Every Sunday)</h6>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/69Y4ifNBDSuhKYkINzb4Ia?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/0NgLUtv5mbbVkgnhanAkET?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/7t3ood4YEer3nRkFeIWQse?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/7Gk80DTMwZ2SflrH4JVnYP?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/1RbqCcgsrPoOBLvyMcpkpY?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/5Os5sgcF1kmcFZejKX2m8H?utm_source=generator&theme=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
                <p><iframe width="800" height="160" src="https://open.spotify.com/embed/episode/7AIokeEjJ45HnuWo2joqlw?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </div>
            <footer className="footer"> 
        <button>ContactUs</button>
        <button>Spotify</button> 
        <button>Enquiry</button>
        <button>PrivacyPolicy</button>
        <button>SiteMap</button>
        
                
            </footer>
        </>
    )
}
export default Main;