import React from 'react'
// import img1 from './pr.jpg'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
// import { Pics as Akshay}  from './component/section/shopbycategories';
// function Add(first, second, third){
//   return first + second + third
// }

// Add(4,5)
// Add(4,5,6)

// export default function Prod_spec(props) {
  // export default function Prod_spec({name : updated_n}) {

// const {title : Heading}= Akshay[0]
// console.log(Heading)

const ProdSpec = ({name : updated_n}) => {
  return (
    <>
     <div>
        <div>
            {/* {updated_n === "Kumar" ? <img src={img1}/> : "Hello"} */}
        </div>
        <div>
            <span>Home / Mattress / Baby mattress for cribs </span>
            <h5>Baby Crib Mattress - Small ( 80 cm x 50 cm x 5 cm )</h5>
            <span>Small</span>

            <label for='size'>Size</label>
            <select name='size'>
                <option value ='Small'>Small</option>
                <option value ='Medium'>Medium</option>
                <option value ='Large'>Large</option>
                <option value ='Toddler'>Toddler</option>
                <option value ='Extra Large'>Extra Large</option>
            </select>

            <hr></hr>
            <small>HAPPYHOME SALE(40% OFF) ENDS IN</small>
            <h1><CurrencyRupeeOutlinedIcon/> 999 <span>MRP <CurrencyRupeeOutlinedIcon/>1,650</span><span>(40% OFF)</span></h1>
            <hr></hr>
        </div>
     </div> 
    </>
  )
}

export default ProdSpec;