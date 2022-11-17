import React from 'react';
import { useParams } from 'react-router-dom';
import { listService1, listService2, mainServicesArr } from '../../data/dataServices';
import { Button } from '../../UI/Button/Button';
import { Separator } from '../../UI/Separator/Separator';
import { UnOrderedList } from './UnOrderedList/UnOrderedList';

export const ServiceSection: React.FC = () => {
  const params = useParams();

  const selectedService = mainServicesArr.find(service => params.id && service.id === +params.id)
  return (
    <section className='service'>
      <div 
        dangerouslySetInnerHTML={selectedService &&{__html: selectedService?.icon}}
        className="service__img"
      >
      </div>
      <h1 className='service__header'>
        {selectedService?.title}
      </h1>
      <p className='service__paragraph'>
        An endless stream of contracts, tax issues, labor relations, corporate papers - legal work distracts you from doing business. But there is not much work to do to hire an in-house lawyer.
        In addition, over time, the work will become the same type and uninteresting for a full-time lawyer. And we know very well how difficult it is to find a good candidate with experience in the field of information technology in Ukraine.
      </p>
      <div className='service__button'>
        <Button className=''>
          Free consultation
        </Button>
      </div>
      <Separator />
      <h3 className='service__h3'>
        Services in this area:
      </h3>
      <div className='service__block'>
        <UnOrderedList list={listService1} />
        <UnOrderedList list={listService2} />
      </div>
    </section>
  );
};

