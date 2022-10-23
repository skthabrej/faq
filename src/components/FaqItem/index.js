import './index.css'

const plusUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusUrl = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

const FaqItem = props => {
    const {eachFaq,onToggleAnswer} = props
    const {id,questionText,answerText,isActive} = eachFaq
    const showItem = isActive ? 'show' : 'hide'
    const imgActive = isActive ? minusUrl : plusUrl
    

    const onShowAnswer = () => {
        onToggleAnswer(id)
    }

    return (
        <ul className="ul-container">
            <li className="li-container">
                <div className="item-container">
                    <h1 className="heading">{questionText}</h1>
                    <button className="btn" onClick={onShowAnswer}><img src={imgActive} alt='plus'/></button>
                </div>
                <div className={`answer-container ${showItem}`}>
                    <p className="answer-paragraph">{answerText}</p>
                </div>
            </li>
        </ul>
    )
}
export default FaqItem