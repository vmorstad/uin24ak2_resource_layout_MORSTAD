export default function ProductCard({category, img, title, price, amount, setAmount}){
  const handleCLick = ()=>{
    setAmount(prev => prev + 1)
  }
    return(
      <article>
        <img src={"website_images/PROD_"+img} alt={title} />
        <a href="#">{category}</a>
        <h3>{title}</h3>
        <span>Kr.{price}</span>
        <button onClick={handleCLick}>Legg i handlekurv</button>
      </article>
    )
  }