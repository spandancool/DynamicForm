import React,{useState} from 'react';
import { Button, FormGroup ,Input, Label} from 'reactstrap';
const Flexi = (props) => {
    const [formData, setFormData] = useState({});
    const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
   const formDataSubmit = () =>{
    props.onSubmit(formData)
   }
    return (
        <>
        {props.config.items.map((e,i)=>
        <FormGroup key={i}>
        <Label htmlFor={e.name}>{e.label}</Label>
        <Input
          type={e.type}
          name={e.name}
          onChange={handleChange}
          value={formData.name}
        >
            <option>Please select</option>
          {e.values.map((opt, index) => (
            <option
              key={index}
              value={opt}
            >
              {opt}
            </option>
          ))}
        </Input>
      </FormGroup>
        
        )}
     
                
                <FormGroup className="mt-3">
                  <Button color="action-btn" onClick={formDataSubmit}>Submit</Button>
                </FormGroup>

        </>
    )
}
export default Flexi
