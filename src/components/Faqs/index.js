import { Component } from "react";
import './index.css'
import FaqItem from "../FaqItem";

const faqsData = [
    {
      id: 0,
      questionText:'Can I pre-order items for delivery?',
      answerText:'Yes. However, pre-order items will be specifically indicated as such; this generally applies to new releases. We will only accept orders on items that we have in stock at the time.',
      isActive:false
    },
    {
      id: 1,
      questionText: 'Can I change my order?',
      answerText:'Once the order has been placed, it cannot be changed online. If you want to change your order, please call 1 (800) 555 0199, and if it has not yet been processed we will change or re-issue a new amended order ',
      isActive:false
    },
    {
      id: 2,
      questionText:'When do I get my refund once I have returned an item?',
      answerText:'Once we have received the item in our warehouse, we aim to process a refund onto the original payment card within two weeks',
      isActive:false
    },
    {
      id: 3,
      questionText: 'Do you deliver overseas?',
      answerText:'Yes, with the exception of gift certificatesBack to Top',
      isActive:false
    },
  ]
  

class Faqs extends Component {
    state = {faqsData:faqsData}

    onToggleAnswer = id => {
        this.setState(prevState => ({
          faqsData: prevState.faqsData.map(eachItem => {
            if (id === eachItem.id) {
              return {...eachItem, isActive: !eachItem.isActive}
            }
            return eachItem
          }),
        }))
      }

    render() {
        const {faqsData} = this.state
        return (
            <div className="bg-container">
                <div className="card-container">
                    <div className="title-heading">F A Q s</div>
                    <hr className="line"/>
                    {faqsData.map(eachItem => (
                        <FaqItem 
                        eachFaq = {eachItem}
                        key = {eachItem.id}
                        onToggleAnswer = {this.onToggleAnswer}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default Faqs