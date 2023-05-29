// @ts-ignore

import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from 'reactstrap';
import LicencesHeader from 'app/modules/informationPages/licencesHeader';
import LicencesFaq from 'app/modules/informationPages/licencesFaq';
import DynamicFields from 'app/shared/common/dynamicFields';
import { formatValue } from 'app/shared/common/formatValue';
import { createLicence } from 'app/modules/licence/license.reducer';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getForm } from 'app/modules/form/form.reducer';
import { Translate } from 'react-jhipster';

const Permit = () => {
  const [params] = useSearchParams();
  const nav = useNavigate();
  const form = useAppSelector(state => state.form.form);
  const account = useAppSelector(state => state.authentication.account);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('' + '');

  const toggle = id => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // @ts-ignore
    dispatch(getForm(params.get('pageKey')));
  }, []);

  const handleSubmit = values => {
    const valueToSend = {
      form: form,
      user: account,
      data: values,
    };
    console.log(valueToSend);
    // @ts-ignore

    dispatch(createLicence(valueToSend)).then(
      // @ts-ignore
      toast.success('Saved Successfully')
    );
  };

  return (
    <>
      <div className="p-1 p-md-5">
        <h1 className={'text-uppercase'}>{params.get('name')}</h1>

        <div className="header pb-8 pt-1 pt-md-">
          <Container fluid>
            <div className="header-body mb-5">
              {/* Card stats */}
              <LicencesHeader />
            </div>

            <Row>
              <Col md={8}>
                <Card>
                  {' '}
                  <CardBody>
                    <div className="">
                      <Row className="justify-content-center ">
                        <Col md="8">
                          <h1 className="">
                            <Translate contentKey={'form.for'} /> {params.get('name')}
                          </h1>
                        </Col>
                      </Row>
                      <Row className="justify-content-center">
                        <Col md="8">
                          <DynamicFields
                            fields={form.fields?.filter(f => {
                              return f.state.id === 0;
                            })}
                            handleSubmit={handleSubmit}
                            formatValue={formatValue}
                          />
                        </Col>
                      </Row>
                    </div>
                  </CardBody>{' '}
                </Card>
              </Col>

              <Col md={4}>
                <LicencesFaq />

                <Card>
                  {' '}
                  <CardBody>
                    <div className="feedback-form">
                      <h3>
                        {' '}
                        <Translate contentKey={'questions.title'} />{' '}
                      </h3>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="name">
                            <Translate contentKey={'questions.name'} />:
                          </label>
                          <input type="text" id="name" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="email">
                            <Translate contentKey={'questions.email'} />:
                          </label>
                          <input type="email" id="email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">
                            <Translate contentKey={'questions.message'} />:
                          </label>
                          <textarea id="message" className="form-control" rows={4}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <Translate contentKey={'compliance.submit'} />
                        </button>
                      </form>
                    </div>
                  </CardBody>{' '}
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/*<Button onClick={() => nav('/apply-permit?name=' + params.get('name') + '&pageKey=' + params.get('pageKey'))}>Apply</Button>*/}
      </div>
    </>
  );
};

export default Permit;
