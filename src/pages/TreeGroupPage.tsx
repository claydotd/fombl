import { Link } from 'react-router'
import { ArticleFigure } from '../components/ArticleFigure'
import { ArticleGallery } from '../components/ArticleGallery'
import { DocumentList } from '../components/DocumentList'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/trees/${encodeURI(file)}`)
}

export function TreeGroupPage() {
  usePageTitle("Tree Group")

  return (
    <>
      <PageHero
        title={"Tree Group"}
        lede={
          'Every Friday from about 1:30pm the FoMBL Tree Group plants and maintains young trees across the Meadows and Bruntsfield Links, and also looks after wildflower meadows, copse maintenance and bulb planting.'
        }
        backTo={{ to: '/volunteering', label: 'Back to Volunteering' }}
      />

      <div className="container section about-history about-article tree-group-page">
        <OnThisPageNav
          links={[
            { href: '#when', label: "When we meet" },
            { href: '#planting', label: "Bruntsfield planting" },
            { href: '#species', label: "Planted species" },
            { href: '#new-trees', label: "New trees" },
            { href: '#plants-surveys', label: "Trees and plants" },
          ]}
        />

        <SectionBlock heading="When we meet" id="when">
          <p className="meta-line">
            <span>When:</span> Every Friday, almost always 1:30pm
          </p>
          <p className="meta-line">
            <span>Where:</span> Usually either at The Links green store (at the rear of the
            Bruntsfield public toilets) or at the rear of the Pavilion Cafe beside Melville Drive,
            opposite Marchmont Road. Email{' '}
            <a href="mailto:projects@fombl.org.uk">projects@fombl.org.uk</a> to check the meeting
            location before you come.
          </p>
          <p>
            Since hundreds of trees were planted in the Links and Meadows, the FoMBL Tree Group have
            worked hard every Friday to weed, mulch and water the young trees and bushes which were
            planted by local schoolchildren in the early spring. Friday sessions now also include
            the wildflower meadows, copse maintenance and bulb planting.
          </p>
          <p>
            Anyone who wants to help is welcome. Email{' '}
            <a href="mailto:projects@fombl.org.uk">projects@fombl.org.uk</a> to check the meeting
            location.
          </p>
          <p>
            <Link className="more" to="/volunteering#friday-sessions">
              More about volunteering
            </Link>
          </p>
        </SectionBlock>

        <SectionBlock heading={"Planting at Bruntsfield Links"} id="planting">
          <p>{"The recent copse/hedgerow planting was agreed by CEC Parks, James Gillespie's school and Friends of the Meadows and Bruntsfield Links as part of the council's biodiversity strategy. We are planting close to achieve a dense hedge/copse where the public can't easily enter (like a normal field hedge). The result will provide a habitat for birds and insect life as well as all the microorganisms which will flourish within a biodiverse system."}</p>
          <p>{"Berry/fruit and nut producing trees such as rowan, alder, hazel and crab apple will grow above the bushes (holly, dog rose, elder, hawthorn, blackthorn etc) to provide birds with essential food as well as a safe place to survey the food below."}</p>
          <p>{"In addition such planting absorbs huge amounts of carbon dioxide which will be of particular relevance alongside the highly polluting Bruntsfield Place. It is expected dense copses will provide some shelter from prevailing west winds."}</p>
          <p>{"A plan will be produced to follow from this project with the aim of increasing such planting throughout the park. We will follow CEC approved policy on Biodiversity (Biodiversity Action Plan 2022-2027) in conjunction with CEC officials."}</p>
          <ArticleGallery
            tiles
            images={[
              { src: photo("Links-Tree-Planting-1.jpg"), alt: "Volunteers and schoolchildren planting a hedge and copse on Bruntsfield Links" },
              { src: photo("Links-Tree-Planting-2.jpeg"), alt: "Newly planted saplings staked along Bruntsfield Links" },
              { src: photo("Links-Tree-Planting-3.jpeg"), alt: "A planted tree protected by a stake and tube on the Links" },
              { src: photo("Links-Tree-Planting-4.jpeg"), alt: "A row of young trees planted beside the path" },
              { src: photo("Links-Tree-Planting-5.jpeg"), alt: "Planted saplings with Bruntsfield Place beyond" },
            ]}
          />
        </SectionBlock>

        <SectionBlock heading="Planted species" id="species">
          <ul className="species-grid">
            <li className="species-card">
              <h3>{"Wild cherry"}</h3>
              <p>{"Wild cherry is a real stunner with white blossom and shiny, striped bark. Its fruits are edible and are loved by birds and small mammals."}</p>
            </li>
            <li className="species-card">
              <h3>{"Elder"}</h3>
              <p>{"Elder is famous for its dense clusters of white flowers which support pollinators and can be used to make cordial, wine or tea."}</p>
            </li>
            <li className="species-card">
              <h3>{"Blackthorn"}</h3>
              <p>{"Blackthorn is one of our earliest flowering trees, providing a vital source of food for bees at the start of spring, and edible sloe fruits in autumn."}</p>
            </li>
            <li className="species-card">
              <h3>{"Crab apple"}</h3>
              <p>{"Crab apple is a wild ancestor of the cultivated apple and provides a springtime feast for insects with its blossom, while birds and mammals eat its fruits in autumn."}</p>
            </li>
            <li className="species-card">
              <h3>{"Guelder rose"}</h3>
              <p>{"Guelder rose blossom is especially attractive to hoverflies, while its red fruits are eaten by bullfinches and mistle thrushes."}</p>
            </li>
            <li className="species-card">
              <h3>{"Hawthorn"}</h3>
              <p>{"Hawthorn, known as the 'May tree' for its late spring blossom, supports hundreds of different wildlife species with its flowers, leaves and fruits."}</p>
            </li>
            <li className="species-card">
              <h3>{"Rowan"}</h3>
              <p>{"Rowan flowers herald the start of summer and its berries are a rich source of autumn food for birds, especially blackbirds, mistle thrushes, redstarts, redwings, song thrushes, fieldfares and waxwings."}</p>
            </li>
          </ul>
        </SectionBlock>

        <SectionBlock heading={"New trees"} id="new-trees">
          <h3>{"New trees on Bruntsfield Links"}</h3>
          <ArticleFigure
            src={photo("LinksTrees.jpeg")}
            alt={"Map of trees planted by FoMBL on Bruntsfield Links in 2023"}
            caption={"Trees planted by Friends of the Meadows and Bruntsfield Links at Bruntsfield Links in 2023, near James Gillespie’s Primary School, Muriel Spark Walk, Warrender Park Road and Bruntsfield Terrace."}
          />

          <h3>{"New trees for North Meadow Walk"}</h3>
          <ArticleFigure
            src={photo("NorthMeadowWalkTrees.jpg")}
            alt={"Map of new trees along North Meadow Walk"}
          />
          <p>{"Nine new trees were planted along North Meadow Walk on 4th February 2022, and it is planned to put in another ten or eleven later in February."}</p>
          <p>{"FoMBL hope to water all the trees over the next 2 months especially during dry spells and before leaf growth. We also hope to mulch the bases."}</p>
          <ArticleGallery
            tiles
            images={[
              { src: photo("Oak9.jpg"), alt: "Oak 9" },
              { src: photo("Lime7.jpg"), alt: "Lime 7" },
              { src: photo("Oak8.jpg"), alt: "Oak 8" },
              { src: photo("Walnut10.jpg"), alt: "Walnut 10" },
            ]}
          />
        </SectionBlock>

        <SectionBlock heading={"Trees and plants"} id="plants-surveys">
          <p>{"Some plants to be found on the Meadows are illustrated in this guide."}</p>
          <DocumentList
            items={[
              {
                title: "Plants of the Meadows & Bruntsfield Links",
                href: "documents/Plants%20of%20the%20Meadows%20&%20Bruntsfield%20Links.pdf",
                meta: "Illustrated plant guide",
              },
            ]}
          />

          <h3>Photographs of trees</h3>
          <p>{"These photographs of trees on the Meadows and Bruntsfield Links were taken in June 2007 by Max Coleman of the Royal Botanic Garden, Edinburgh."}</p>
          <ArticleGallery
            tiles
            images={[
              { src: photo("tr_Corstorphine_sycamore.jpg"), alt: "Corstorphine sycamore", caption: "Corstorphine sycamore" },
              { src: photo("tr_Huntingdon_elm_avenue.jpg"), alt: "Huntingdon elm avenue", caption: "Huntingdon elm avenue" },
              { src: photo("tr_Huntingdon_elm.jpg"), alt: "Huntingdon elm", caption: "Huntingdon elm" },
              { src: photo("tr_Japanese_elm_1.jpg"), alt: "Japanese elm", caption: "Japanese elm" },
              { src: photo("tr_Japanese_elm_2.jpg"), alt: "Japanese elm", caption: "Japanese elm" },
              { src: photo("tr_Wych_elm_1.jpg"), alt: "Wych elm", caption: "Wych elm" },
              { src: photo("tr_Wych_elm_2.jpg"), alt: "Wych elm", caption: "Wych elm" },
            ]}
          />

          <h3>Tree surveys</h3>
          <p>
            {"A good source of information about trees in Edinburgh can be found on the City of Edinburgh Council trees map. The documents below are specific to the Meadows and Bruntsfield Links."}{' '}
            <a href={"https://data.edinburghcouncilmaps.info/datasets/cityofedinburgh::trees/explore"} target="_blank" rel="noreferrer">
              Trees | City of Edinburgh Council
            </a>
            .
          </p>
          <DocumentList
            items={[
              { title: "Tree survey, January 2009", meta: "CEC Parks survey", href: "https://www.fombl.org.uk/Trees/treesurvey.pdf" },
              { title: "Tree list, June 2015", meta: "Forestry Department species list", href: "https://www.fombl.org.uk/Trees/Meadows%20%20B-Links%20tree%20species.pdf" },
            ]}
          />
        </SectionBlock>
      </div>
    </>
  )
}
