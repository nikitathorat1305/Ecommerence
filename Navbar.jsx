import { Link } from "react-router-dom"
import './Navbar.css'


const Navbar = ({setSearch,size,data,setData}) =>{

    const filterResult=(catItem)=>{
        const result=data.filter((curData)=>{
            return curData.category===catItem
        })
        console.log(result);
        setData(result)
    }
    const filterResult2=(catItem)=>{
        const result=data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }
    const filterResult3=(catItem)=>{
        const result=data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }
    const filterResult4=(catItem)=>{
        const result=data.filter((curData)=>{
            return curData.category===catItem
        })
        setData(result)
    }
    return(
        <div>
            <nav className="navbar">
            <article className="navart">
                <img  className="logo"src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" ></img>
                <div><Link style={{color:'white',textDecoration:'none'}} to='/'>Home</Link></div>
                <div><input onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search your Products" /></div>
                <div><Link style={{color:'white',textDecoration:'none'}} to='/cart'>🛒<sup>{size}</sup></Link></div>
            </article>
            <article className="cat">
                <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
                <button onClick={()=>filterResult2(`womens's clothing`)}>Women</button>
                <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
                <button onClick={()=>filterResult4(`jewellery`)}>Jewellery</button>
                <button>Sort by Price</button>

            </article>
            </nav>
        </div>
    )
}
export default Navbar
