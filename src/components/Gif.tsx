import './Gif.css'

function Gif({ title, url }: { title: string; url: string}) {
    return (
        <img src={url} alt={title} className="gif" />
    )
  }
  
export default Gif
  