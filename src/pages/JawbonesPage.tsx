import { ArticleGallery } from '../components/ArticleGallery'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/jawbones/${encodeURI(file)}`)
}

export function JawbonesPage() {
  usePageTitle('The Jawbone Arch')

  return (
    <>
      <PageHero
        title="The Jawbone Arch"
        lede="A history of the Jawbone restoration and what may replace the arches."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section has-sticky-titles prose-page">
        <p className="intro">This page provides a history of the Jawbone 'restoration'.</p>

        <SectionBlock heading="Update February 2024">
          <p>On 10 August 2023, a deputation from FoMBL addressed the Culture and Communities Committee on the subject of the jawbones. As background, FoMBL trustees were not supportive of the bronze replica proposal agreed by the committee the previous year. For example, the site was thought to be unsuitable and there was no consultation with FoMBL or the wider community prior to the decision being taken to pursue that option.</p>
          <p>The committee approved the “disposal” of the jawbones including to artists and similar groups (the details are in the report) as it had been acknowledged for some time that they are in an advanced state of disrepair. What was of more immediate importance was the replacement plans.</p>
          <p>Our suggestion that the bronze replica proposal was likely to be unwelcome was well received and so when the councillors approved the report (with sentence 1.1.5: “Agree to advance discussions with stakeholders and potential funders on the commission of a bronze replacement.”), it was decided to remove the word “bronze” from the motion. It was also noted that there was no funding in place for the bronze replica option.</p>
          <p>We departed very sure that the councillors were well aware of the sensitivities around the replacement and that we would be properly consulted before any final decision was taken. We later sent a short “thank you note” to Cllr Hal Osler who moved the motion to remove the word bronze.</p>
          <p>The debate starts around 2 hours 44 minutes and lasts about 15 minutes. Our deputation can be found early on, about ten minutes from the start (click on the arrow to the right of “Deputations”).</p>
          <p>
            <a className="more" href="https://democracy.edinburgh.gov.uk/mgConvert2PDF.aspx?ID=59682" target="_blank" rel="noreferrer">
              Council report for 10 August 2023
            </a>
          </p>
          <p>
            <a className="more" href="https://edinburgh.public-i.tv/core/portal/webcast_interactive/798940" target="_blank" rel="noreferrer">
              Webcast of the debate
            </a>
          </p>
        </SectionBlock>

        <SectionBlock heading="Update February 2022">
          <p>It seems unlikely that the Meadows will see the Jawbones again. After all the conservation work it is now recognised that they are too fragile to erect in an outdoor situation, and would be best put into a museum.</p>

        </SectionBlock>

        <SectionBlock heading="Update September 2018">
          <p>The situation is that a couple of months ago Edinburgh World Heritage (EWH) secured additional funding to proceed with the restoration of the jawbones following the failure of the original bone specialist. The hold-up since then has been in getting the City of Edinburgh Council (CEC) to appoint the whale bone specialist. He is the only one in the UK and therefore can’t be procured through the normal competitive tender process. A special waiver report is required to be signed off at the highest level. Once this is done the bones will go to Shropshire for 6 months or so to be fully restored and then will come back for reinstallation.</p>
          <p>The railings, which have partly gone missing, will be installed after the erection of the jawbones along with a new information board. Based on this information it is hoped that full reinstatement will be completed before the summer of 2019.</p>

        </SectionBlock>

        <SectionBlock heading="Update May 2018">
          <p>Just before the end of the financial year additional funding was discussed with City of Edinburgh Council (which was quite positive) and Edinburgh World Heritage made an offer of further funds. EWH have to push CEC hard to get the project going again and the bones moved down to Shropshire for work by the new conservator; no doubt there will be a delay whilst there is a procurement process.</p>
          <p>Whatever happens, it is unlikely the arch will be reinstalled this year. It will be at least 6 months down south and then further work required on a new metal structure before installation.</p>
          <p>Mike Sheilds, CEC officer in charge of the Meadows, has agreed to fund the reinstatement of the metal railings as soon as possible.</p>

        </SectionBlock>

        <SectionBlock heading="Update March 2017">
          <p>Last week the pathway at the site of the Jawbone Arch in the Meadows was re-surfaced. The jawbones themselves are still undergoing conservation work, which is taking longer than previous estimates anticipated: this delay has led to the ongoing closure of the pathway and we are aware of the inconvenience this has caused to Meadows users. As the conservation processes are still underway, the pathway has been resurfaced and reopened for normal use. Once the conservation works are completed, the pathway will be closed for a short period while the reinstallation takes place.</p>
          <p>The conservation of whale jawbones is a complex and unusual task, which requires specialist conservation experts to develop and implement the best approach. The project has taken longer than initial studies anticipated, due to a number of factors including the complexity of conserving “organic” whalebone, and the going into liquidation of a specialist conservation company which was working on the project. Once restored, the Jawbone Arch will return to the Meadows, and this important Edinburgh landmark will be in place for people to enjoy for another hundred years.</p>

        </SectionBlock>

        <SectionBlock heading="Update, November 2016">
          <p>The City of Edinburgh Council and Edinburgh World Heritage issued a further update on the Jawbones project.</p>

        </SectionBlock>

        <SectionBlock heading="News, October 2016">
          <p>The site for the refurbished jawbones was prepared in July, but it looks as if it will be January 2017 before the jawbones are erected again. We have been told by the Council: “Latest information we received from the Edinburgh World Heritage Trust is there have been some further unforeseen delays and the latest timetable we have had for installation is now the end of December, but would envisage with the festive period more likely to be January.” This means the Melville Drive end of Jawbone Walk will stay closed. Apparently it is not safe to open for public use until the jawbones have been put back in place.</p>

        </SectionBlock>

        <ArticleGallery
          images={[
            { src: photo('jawboneprepss.jpg'), alt: 'Preparations for the Jawbones', caption: 'Preparations for the Jawbones' },
            { src: photo('exhibition jawboness.jpg'), alt: 'The Zetland and Fair Isle knitters at the International Exhibition in 1886. Photograph courtesy of The Shetland Museum.', caption: 'The Zetland and Fair Isle knitters at the International Exhibition in 1886. Photograph courtesy of The Shetland Museum.' },
            { src: photo('Jawbones up hellyaas.jpg'), alt: 'The Up Helly Aa Jarl Squad at the Jawbones. Photo by Heidi Pearson', caption: 'The Up Helly Aa Jarl Squad at the Jawbones. Photo by Heidi Pearson' },
            { src: photo('jawbonewalkss.jpg'), alt: 'Jawbone Walk on the Meadows', caption: 'Jawbone Walk on the Meadows' },
          ]}
        />

        <SectionBlock heading="Restoration appeal" id="appeal">
          <p>The Jawbone Arch has become a well-loved Edinburgh landmark, but recent investigations have shown that restoration work is needed. The bones have been removed for detailed examination, before specialist conservation can take place. The City of Edinburgh Council, Edinburgh World Heritage, the Friends of the Meadows and Bruntsfield Links and local resident Heidi Pearson (a Shetlander) are collaborating on an appeal to raise £60,000 to ensure the arch is preserved for future generations.</p>
          <p>The Up Helly Aa Jarl Squad from Shetland were visiting Edinburgh to take part in the Hogmanay events and kindly gave their time to help promote the appeal. A Facebook page has been created to help raise awareness for the project, in addition Summerhall TV have produced a video interviewing Heidi about her involvement with the appeal and the recent support shown by the Vikings’ visit to the Jawbone Arch.</p>
        </SectionBlock>

        <SectionBlock heading="Shetland grant for Jawbones">
          <p>Edinburgh World Heritage report that Shetland Amenity Trust has contributed to the Jawbones Restoration appeal.</p>
        </SectionBlock>

        <SectionBlock heading="Report 15 July 2015">
          <p>One of our members visited the conservation workshop where the Jawbones are being restored and reported on the work then underway.</p>
        </SectionBlock>

        <SectionBlock heading="Report, 1 December 2014">
          <p>Progress report on the Jawbone Arch project from the World Heritage Site Project Manager, 1 December 2014.</p>
          <p>We managed to meet up with the conservator in October and we were taken out to where the bones are being stored. They have dried out very well and are now completely dry without any new fungal growth on the surface. The bones survived the dismantling and transportation process better than expected by the contractor and the only real problem was the two ends of bones that broke because they had been so damaged by being embedded on wet concrete footings. The contractor is confident that these broken ends can be reattached and missing areas (old repairs) infilled.</p>
          <p>The next stage will involve removal of the tissue paper wrapping the bones and a thorough inspection of each bone to calculate what percentage of each needs to be repaired. The contractor is talking of using Nanolime technology and has some recent results from a similar project elsewhere. We think this sounds like the route to take but will of course need to know more about the materials being proposed.</p>
          <p>We then plan to have a new metal structure designed to carry the loading from the bones and winds, so that the arch will be much better supported than before when it is re-erected.</p>
          <p>We now have enough funds to instruct the next phase in the restoration while we carry on fundraising for the last £8,800. If we can raise this we hope to have the arch back home by the summer.</p>
        </SectionBlock>
      </div>
    </>
  )
}
