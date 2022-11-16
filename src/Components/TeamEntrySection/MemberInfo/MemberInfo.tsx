import React from 'react';

interface MemberObj {
  name: string;
  img: string;
  position: string;
  title: string;
  id: number;
}

interface Props {
  member: MemberObj | undefined;
}

export const MemberInfo: React.FC <Props> = ({ member }) => {
  return (
    <div className='memberInfo team-entry__info'>
      <h1 className='memberInfo__header'>
        {member?.name}
      </h1>
      <ul className='memberInfo__list'>
        <li className='memberInfo__item'>
          {member?.position}
        </li>
        <li className='memberInfo__item'>
          <a 
            className='memberInfo__link'
            href='mailto:kobzar@forstudy.space'>
            kobzar@forstudy.space
          </a>
        </li>
        <li className='memberInfo__item'>
          <a 
            href='https://linkedin.com' 
            target="_blank" 
            rel="noreferrer"
            className='memberInfo__link'
          >
            LinkedIn profile
          </a>
        </li>
      </ul>
      <p className='memberInfo__paragraph'>
        Oksana heads the practice of international trade and shipping. He specializes in resolving disputes related to the purchase and sale of raw materials and transportation of goods by sea.
        Desis represents the interests of shipowners, freight forwarders, cargo owners, shipping agents, container lines, as well as international banks and P&I clubs.
      </p>
      <h3 className='memberInfo__title'>
        Education
      </h3>
      <p className='memberInfo__paragraph'>
        National University "Odessa Law Academy", Master of Law.
      </p>
      <h3 className='memberInfo__title'>
        Experience
      </h3>
      <p className='memberInfo__paragraph'>
        Her professional experience includes resolving disputes under English law and representing interests in foreign commercial arbitrations such as GAFTA, FOSFA and LMAA. Danilo also represents the interests of clients in the state courts of Ukraine on similar disputes, as well as in the ICAC and IAC at the CCI of Ukraine
      </p>
    </div>
  );
};

