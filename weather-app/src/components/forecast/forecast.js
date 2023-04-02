import "./forecast.css"
import{Accordion} from "react-accessible-accordion"
export default function forecast(){

    return(
        <>
          <label className="title">Daily forecast</label>
          <Accordion></Accordion>
        </>
    )
}