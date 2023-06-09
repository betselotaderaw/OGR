import React, {useEffect, useState} from 'react';
// import {Input} from "app/shared/common/forms";
import FieldCreater from "./field-creater";
import { Button, Card, CardHeader, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner, Table } from 'reactstrap';
import {isEmail, translate, Translate, ValidatedField, ValidatedForm} from "react-jhipster";
import {languages, locales} from "app/config/translation";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppDispatch, useAppSelector} from "app/config/store";
import {getFormType, getFieldType, updateForm, getFormTypeByState} from "app/modules/form/form.reducer";
import {getState} from "app/modules/licence/license.reducer";
import {toast} from "react-toastify";

const FormCreater = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector(state => state.form.formTypes);
  const [allForm,setAllForm] = useState(null)
  const [formForEdit,setForm] = useState(null);
  const states = useAppSelector(state => state.licence.states);
  const [currentState,setCurrentState] = useState(0);
  useEffect(() => {
    dispatch(getFormType());
    dispatch(getFieldType());
    dispatch(getState());
  }, []);
  useEffect(() => {
    if(form.length > 0) {
      const ed = {...form[0]}
      ed.fields = ed.fields.filter((f)=>{return f.state.id === parseInt(currentState)})
      setForm(ed)
      setAllForm(form);
    }
  }, [form]);
  const handleFields = (fields) => {
    console.log(fields);
    if (fields.newId){
      const editedFields = [...formForEdit.fields,fields]
      setForm((prevState)=>({...prevState,fields:editedFields}));
      const allFields = [...allForm.filter((f)=>{return f.id === formForEdit.id})[0]?.fields,fields]
      const newForm = {...formForEdit,fields:allFields}
      const allf = [...allForm.map(f=>{if(f.id===newForm.id){ return newForm}  return f})]
      setAllForm(allf);
    }else{
      const editform = {...formForEdit};
      editform.fields = editform.fields.map(f=>{if(f.id==fields.id){return fields} return f})
      setForm(editform);

    }
  }

  const handleDelete= (id) =>{
    const editform = {...formForEdit};
    editform.fields = editform.fields.filter(f=> {return f.id !=id})
    setForm(editform);
  }
  const handleSelectForm = (e) => {
    const ed = {...allForm.filter(f=> f.id == e.target.value)[0]}
    ed.fields = ed.fields.filter((f)=>{return f.state.id === parseInt(currentState)})
    setForm(ed);
  }
  const handleSelectState = (e) => {
    if(formForEdit){
    const ed = {...allForm.filter(f=> f.id == formForEdit?.id)[0]}
    ed.fields = ed.fields.filter((f)=>{return f.state.id === parseInt(e.target.value)})
    setForm(ed);
    setCurrentState(e.target.value);
    }
  }
  const handleSubmit = (values)=>{
    const forms = {...allForm.filter(f=> f.id == values.id)[0]}
    const otherStateFields = {...forms.fields.filter(f=>{return f.state.id !== parseInt(currentState)})}
    const valueToSend = {...values}
    valueToSend.fields = [...valueToSend.fields,...Object.values(otherStateFields)];
    dispatch(updateForm(valueToSend)).then(()=>{
      //dispatch(getFormType())
      const allf = [...allForm.map(f=>{if(f.id===valueToSend.id){ return valueToSend}  return f})]
      setAllForm(allf);
      toast.success("Form Saved")}
    );
  }
  const trans = (v) =>{
    const returnValue =  translate("state."+v);
    return returnValue.startsWith('translation-not-found[') ? v : returnValue;
  }

   return (
     <Row className="d-flex justify-content-center">
       <Col md={"4"}>
         <ul className="nav nav-pills nav-fill flex-row flex-sm-row" id="tabs-text" role="tablist">
           <li className="nav-item">
             <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-text-1-tab" data-toggle="tab" href="#tabs-text-1"
                role="tab" aria-controls="tabs-text-1" aria-selected="true">UI/UX Design</a>
           </li>
           <li className="nav-item">
             <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-2-tab" data-toggle="tab" href="#tabs-text-2"
                role="tab" aria-controls="tabs-text-2" aria-selected="false">Programming</a>
           </li>
           <li className="nav-item">
             <a className="nav-link mb-sm-3 mb-md-0" id="tabs-text-3-tab" data-toggle="tab" href="#tabs-text-3"
                role="tab" aria-controls="tabs-text-3" aria-selected="false">Graphic</a>
           </li>
         </ul>

       </Col>
       <Col md="8">
         <Card className="shadow">
           <CardHeader className="border-0">
             <Row className="align-items-center">
               <div className="col">
                 <h3 className="mb-0"><Translate contentKey="form.edit"/></h3>
               </div>
             </Row>
           </CardHeader>

           {/*{loading ? (*/}
           {/*  <p>Loading...</p>*/}
           {/*) : (*/}
             <ValidatedForm onSubmit={()=>{}} defaultValues={formForEdit}>
               <Col md="8">
               <ValidatedField type="select" name="langKey" label={translate('form.fields.title')}
               onChange={handleSelectForm}
               >{form.map((f,i) => (
                   <option value={f.id} key={f.id}>

                     <Translate contentKey={"licence."+f.title}></Translate>
                   </option>
                 ))}
               </ValidatedField >
               </Col>
               <Col md="8">
                 <ValidatedField type="select" name="langKey" label={translate('form.state')}
                                 onChange={handleSelectState}
                 > <>

                   {states.map((f,i) => (
                   <option value={f.id} key={f.id}>
                     {trans(f.name)}

                   </option>
                 ))}
                 </>
                 </ValidatedField >
               </Col>
               <Col md="11">
                 {formForEdit &&
                <FieldCreater formForEdit={formForEdit} fields = {formForEdit.fields}
                              state={states?.filter((s)=>{return s.id === parseInt(currentState)})[0]}
                              states={parseInt(currentState) !==0 ? [] : states }
                              handleFields={handleFields} handleDelete={handleDelete}/>}
               </Col>
               <div className="pb-4 pl-4">
                 <Button
                   // color="primary"
                   className="bg-translucent-primary text-primary"
                   onClick={()=>handleSubmit(formForEdit)} >
                   <FontAwesomeIcon icon="save" />
                   &nbsp;
                   <Translate contentKey="entity.action.save">Save</Translate>
                 </Button>
               </div>
             </ValidatedForm>
          </Card>
         </Col>
       </Row>
   )
};
export default FormCreater;
