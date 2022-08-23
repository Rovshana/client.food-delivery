import {useState} from 'react'
function FAQs(props) {
   const [selected, setSelected]  = useState(null)
const toggle = (i)=>{
 
  if(selected == i){
return setSelected(null)
  }
  setSelected(i)
}
    return (
<div className='container myContainer'>

      <div className="wrapper">
      <h3 className='faqs'>F.A.Q</h3>
        
        <div className="accordian">
          {
            data.map((item, i)=>(
              <div className="item" key={i}>
                <div className="titleAccordian" onClick={()=>toggle(i)}>
                  <h2 className='question'>{item.question}</h2>
                  <img src={`${ selected == i ? "/icons/minus.svg" : "/icons/plus.svg"}`} alt="" />
                </div>
                <div className={selected == i ? 'contentAccordian show' : 'contentAccordian'}>
                  <p>{item.answer}</p>
                </div>
                </div>
            ))
          }
        </div>

      </div>
      </div>
    )
        
    
}
export default FAQs


const data = [
  {
    question: "How to contact with Customer Service?",
    answer: "For payment, we accept Credit Cards, PayPal and as well as you can pay at door."
  },
  {
    question: "I am completely alien to everything that is technology. Can I adopt Foody?",
    answer: "Foody is exactly for you, it has flexible structure, you can easily order whatever dishes you want."
  },
  {
    question: "How long is delivery time?",
    answer: "Delivery time varies by location and by time of day. However, you will be notified when your order is ready or when it is picked up."
  },
  {
    question: "What Payment method can I use?",
    answer: "For payment, we accept Credit Cards, PayPal and as well as you can pay at door."
  },
  {
question: "What are your delivery Hours?",
answer: " Our delivery hour is from 10:00 AM  to 11PM."
  }
]