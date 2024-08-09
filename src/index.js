
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(props){
  const {name, city, age} = props;
  return(
    <div>
      <h1>I am {name} from {city}. I am {age} years old.</h1>
      <hr/>
    </div>
  )
}
root.render(
  <>
  <h1>Information</h1><hr/>
  <Greeting name = "karishma" city = "sausar" age = "23"/>
  <Greeting name = "kajal" city = "nagpur" age = "23"/>
  <Greeting name = "ananya" city = "pune" age = "23"/>
  <Greeting name = "anshul" city = "kondhali" age = "23"/>
  </>
)

