import { graphql } from 'gatsby';
import React from 'react';
import { CaseStudies, GrowthHero, ImageContent } from "../components/Growth";
import { ClientSlider, Future, GetInTouch, Hero, HeroBottom, HomeServices, TrustedPartner, Vision } from '../components/Homepage';
// import { CaseStudies, GrowthHero, ImageContent } from "../components/Growth";
// import { ClientSlider, Future, GetInTouch, Hero, HeroBottom, HomeServices, TrustedPartner, Vision } from '../components/Homepage';
import Layouts from '../components/Layouts';

const Page = ({data}) => {
  const { seo } = data.wpPage
  const sections = data.wpPage.PostFields.sections;

  //console.log('Sections', sections)

  return (
    <Layouts path={data.wpPage.uri} title={seo.title} description={seo?.metaDesc}>

        {sections?.map((section, index) => {
          const typeName = section.fieldGroupName;
          
          switch (typeName) {
            case 'page_Postfields_Sections_HomeHero':
              return <Hero key={index} data={section} />;

            case 'page_Postfields_Sections_HomeHeroBottom':
              return <HeroBottom key={index} data={section} />;

            case 'page_Postfields_Sections_HomeTrustedPartner':
              return <TrustedPartner key={index} data={section} />;

            case 'page_Postfields_Sections_HomeServices':
              return <HomeServices key={index} data={section} />;

            case 'page_Postfields_Sections_HomeFuture':
              return <Future key={index} data={section} />;

            case 'page_Postfields_Sections_HomeVision':
              return <Vision key={index} data={section} />;

            case 'page_Postfields_Sections_HomeContact':
              return <GetInTouch key={index} data={section} />;

            case 'page_Postfields_Sections_HomeClients':
              return <ClientSlider key={index} data={section} />;

            // Services Inner Page

            case 'page_Postfields_Sections_GrowthHero':
              return <GrowthHero key={index} data={section} />;

            case 'page_Postfields_Sections_GrowthImageContent':
              return <ImageContent key={index} data={section} />;

            case 'page_Postfields_Sections_GrowthCaseStudies':
              return <CaseStudies key={index} data={section} />;

            // Services Inner Page
            

            default:
              return null;
          }
        })}
    </Layouts>
  )
}

export const query = graphql`
  query getPageData($id: String) {
    wpPage(id: { eq: $id }) {
      title
      uri
      seo {
        title
        metaDesc
      }
      PostFields {
        sections {
          ...Hero
          ...HeroBottom
          ...TrustedPartner
          ...HomeServices
          ...Future
          ...Vision
          ...GetInTouch
          ...ClientSlider
          ...GrowthHero
          ...ImageContent
          ...CaseStudies
        }
      }
    }
  }
`

export default Page
