import { Regards } from "./Regards";
import { Salutation } from "./Salutation";

export const Email = ({
  receiverName="Sir", 
  senderName="Anonymous", 
  salutation="Hi", 
  regards="Regards",
  children}) => {


  return <div>
    <Salutation salutation={salutation} receiverName={receiverName} /> <br />
    {children}<br />
    <Regards regards={regards} senderName={senderName} />
  </div>
}