import React from 'react';
import { useParams } from 'react-router-dom';
import { publicationsArr } from '../../data/dataPublications';
import illustration from '../../images/Illustration.png';
import { Paragraph } from '../../UI/Paragraph/Paragraph';
import { Separator } from '../../UI/Separator/Separator';
import { PublicationsMain } from '../Main/Publications/PublicationsMain';
import { OrderedList } from './OrderedList/OrderedList';
import { SocialMedia } from './SocialMedia/SocialMedia';

export const PublicationSection: React.FC = () => {
  const params = useParams();
  const selectedPublication = publicationsArr.find(item => params.id && item.id === +params.id);

  return (
    <section className='publication'>
      <div className="container">
         <div className='publication__block'>
          <img 
            src={selectedPublication?.img}
            className="publication__img" 
            alt=""
          />
          <h2 className='publication__name'>
            {selectedPublication?.name}
          </h2>
          <p className='publication__date'>
            {selectedPublication?.date}
          </p>
          <Paragraph>
            On January 21, the French National Data Protection Commission (CNIL) announced on its website that it had fined Google for violating the EU's General Data Protection Regulation (GDPR). It took six months for the EU countries to make a quality level-up in the amount of fines for non-compliance with this standard. Prior to that, the fine was mainly € 20,000-30,000, with the largest fine amounting to € 400,000 and related to a hospital in Portugal. But this precedent is interesting not so much the amount of the fine as the rigidity of the regulator's approaches. Denis Beregovyi, Axon Partners, explains why, especially for Mind.
              For what? The group complaints against Google arrived at CNIL on the same day that the GDPR came into force. The complainants reported that Google processed users' personal data without due cause, in particular to create personalized advertising offers.
          </Paragraph>
          <h1 className='publication__header'>
            To the attention of Ukrainian security officers: the inspection was conducted online, without searches, without seizure of servers or other visible interference for business. And so it was possible.
          </h1>
          <h3 className='publication__h3'>
            According to the results of CNIL inspections revealed violations of two requirements of the GDPR:
          </h3>
          <OrderedList />
          <Paragraph>
            In the case of personalization of advertising, Google was sure to obtain the consent of users, because, firstly, when creating Google accounts, the user agrees to the Privacy Policy, and secondly, Google has a section "Ads personalization", where you can disable this feature.
          </Paragraph>
          <img src={illustration} alt="" className='publication__illustration'/>
          <p className='publication__title'>
            This is what the ad personalization settings window in your Google Account looks like
          </p>
          <Paragraph>
            However, CNIL does not think so, because the information about the personalization of advertising is not clear enough to users. As an example, the Commission claims that the relevant "Personalization" window does not contain information on the full range of Google services that collect and process personal data for this purpose (YouTube, Google search, Play Store, Google pictures, Gmail, etc.), and therefore, the user cannot realize to what extent the data is used and how exactly they can be combined.
          </Paragraph>
          <h3 className='publication__h3'>
            So, let's walk through the text of the CNIL decision
          </h3>
          <Paragraph>
            Why France and not Ireland. Google operates in Europe through a legal entity in Ireland. But the case was not initiated by the Irish, but by the French regulator. This is why it happened.
              If data processing decisions are taken anywhere outside the EU, there is a one-stop mechanism - where the complaint is received, the body considers it. Because Google's data processing center is located in the United States and the complaint was first received in France, CNIL considered it.
          </Paragraph>
          <Separator />
          <SocialMedia />
         </div>
         </div>
         <div className='publication__recommended'>
          <PublicationsMain header="Reccomended"/>
         </div>
    </section>
  );
};

