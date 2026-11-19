import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const June2026Meta = {
  id: "june-2026",
  title: "FoMBL PROJECT/VOLUNTEER UPDATE - June 2026",
  navLabel: "June 2026",
} as const

export function June2026Report() {
  return (
    <section className="block project-report" id={"june-2026"}>
      <h2>{"FoMBL PROJECT/VOLUNTEER UPDATE - June 2026"}</h2>
      <ArticleFigure
        src={photo("ProjRepJun26_0.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <p>{"AGM to be held on Friday 19th June at the German Church, 1 Chalmers Cres. From 6.00- 8.30 PM refreshments provided and nonmembers welcome with donation."}</p>

      <p>{"A talk by the first chairman of FoMBL, Dr Peng Lee Yap, on his time as chairman from 2001. His talk will follow the AGM at about 6.45. He will tell fascinating stories of his time leading FoMBL all those years ago! Page 1 of the very first newsletter below:"}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_1.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"1. EDINBURGH WORLD HERITAGE - HISTORY/INFORMATION PANELS FOR MEADOWS"}</h3>

      <p>{"FoMBL still holds committed funds of £3763 allocated to this project. N.Roger did write to the new director, Terry Levinthal, but it seems that there has been no further progress due to staff shortages at EWH."}</p>

      <h3>{"2. THE TREE GROUP"}</h3>

      <p>{"The Tree Group has met most Fridays"}</p>

      <p>{"2.1 Tree work completed includes removal of most of the protective tubes at Links copses, removal of posts and wire where appropriate, watering younger trees, especially those newly planted."}</p>

      <p>{"2.2 Wire tree guards and posts have been removed from younger trees where necessary, mainly in the Meadows and a few recently in the Links."}</p>

      <p>{"2.3 Wood chip /mulch Supplied by David Kyles - woodchip has been delivered again and we have started to spread around young trees/bushes, paths and bare soil as needed. This is very valuable work as woodchip helps to suppress grass, retain moisture and feed the young trees/bushes."}</p>

      <p>{"2.4 We are working towards finalisation of a Park Improvement Plan with David Kyles which will identify future areas of planting as well as proposed new wildflower areas along with relaxed mowing definition."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun26_2.jpg"), alt: "Photograph from the June 2026 project update" },
          { src: photo("ProjRepJun26_3.jpg"), alt: "Photograph from the June 2026 project update" },
        ]}
      />

      <p>{"2.5 Water sources"}</p>

      <p>{"A new stand tap was installed last year at the the new toilets at Middle Meadow Walk but although now working we think it isn't really robust enough in this location. A new tap has now been fixed to the east toilets - thanks to CEC David Kyles. So we now have 3 water taps serving the Meadows and Links."}</p>

      <p>{"Honestly we could do with several more and we will push for Scottish Water/ CEC to come up with proposals."}</p>

      <h3>{"3.0 WILDFLOWER MEADOWS"}</h3>

      <p>{"3.1 Muriel Spark Walk wildflower meadow."}</p>

      <p>{"Some members will have noticed quite a few wildflowers appearing adjacent to the railings around the loghouse at Whitehouse Loan/Muriel Spark Way."}</p>

      <p>{"We have been surprised at the yellow rattle growth which has not only surpassed grass growth but probably inhibited the wildflowers seeded in the early spring. So we have now planted about 100 campion and clover plugs which should cope especially if we get some rain."}</p>

      <p>{"After removing a lot of invasive rosebay willowherb we dug over an area to plant red campion which will be great for pollinators."}</p>

      <p>{"So far you might spot vetch, poppy, cornflower, plantago, ragged robin, oxeye daisy, cat's ear, ribwort, clover, knapweed, campion and many more."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun26_4.jpg"), alt: "Photograph from the June 2026 project update" },
          { src: photo("ProjRepJun26_5.jpg"), alt: "Photograph from the June 2026 project update" },
          { src: photo("ProjRepJun26_6.jpg"), alt: "Photograph from the June 2026 project update" },
        ]}
      />

      <h3>{"4.0 FUTURE PLANTING Park Improvement plan"}</h3>

      <p>{"In collaboration with David Kyles (CEC SE Parks and Greenspace Officer) FoMBL tree group is helping to prepare a Park Improvement Plan which will form the basis of future planting including trees and hedgerow /copse areas. The plan will also include restricted mowing areas, identification of proposed new wildflower areas, path improvements and other park enhancements."}</p>

      <p>{"DK hopes a completed draft for comment will be circulated soon."}</p>

      <h3>{"5.0. WORKING WITH LOCAL CHILDREN"}</h3>

      <p>{"FoMBL volunteers continue to work closely with teachers and pupils from James Gillespie's school."}</p>

      <p>{"We in turn have helped to establish a new planting area within the school grounds and helped to install more wooden benches."}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_7.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"6.00 BENCH PROJECT"}</h3>

      <p>{"Two benches have been maintained this year with repairs and new coat of varnish. Funded by FoMBL and work carried out by our excellent carpenter Ricardo Ryoko. (Seen below)"}</p>

      <p>{"It is hoped another 5 benches will be treated/repaired over the next year."}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_8.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"7.0 PLAYGROUNDS"}</h3>

      <p>{"Links playground (near Croquet Pavilion and Melville Drive)"}</p>

      <p>{"City of Edinburgh Council officer, Bob McAllister, with help from Neil Roger and local parents/grandparents has chosen new replacement play equipment which is being installed now along with new surfacing. The proposal includes a new inclusive multi-play unit, a traditional slide replacement, an inclusive roundabout and two springers. (One is inclusive)"}</p>

      <p>{"In addition a new self-closing gate will be fitted and it is hoped to refurbish wooden benches and clear railing of grass and earth."}</p>

      <p>{"This has been a very lengthy process but we are pleased that our efforts have paid off with the help of local councillors, especially Cllr Munro."}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_9.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"8.0 TABLE-TENNIS TABLE AT THE LINKS"}</h3>

      <p>{"Following planning approval CEC have organised the installation of the slab and table in June. This project is part funded by FoMBL, CEC, Black Ivy and J.R.Sports."}</p>

      <p>{"We are confident this will be extremely popular and the Black Ivy are considering keeping a stock of bats and balls for those who need them."}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_10.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"9.0. FoMBL volunteers with Alison Carr"}</h3>

      <p>{"Alison continues to run the volunteer sessions on the last Saturday of every month. She has carried out a huge amount of beneficial work including dock removal, leaves/grass/weed removal, litter picking, graffiti removal, watering, removal of unwanted growth along railings and at benches, etc. Rotting leaves on pavements are not cleared by the council and Alison's volunteers cannot manage to clear all on their own."}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_11.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />

      <h3>{"10.0 PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term park improvement plan in conjunction with David.Kyles to show proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."}</li>
        <li>{"Prepare a plan to show areas of reduced mowing and agree with David Kyles Continue to maintain and plant new trees including watering Wood chip and spread on muddy paths and at base of trees."}</li>
        <li>{"Maintain wildflower meadows and plant and seed for summer growth Add more exercise equipment to augment existing Increase the areas of wildflower areas depending on volunteer resources and overall approved management plan."}</li>
        <li>{"Work with D.Kyles on production of new park improvement plan.(PIP) Design and install (method to be agreed) tree name plaques for rarer specimens."}</li>
        <li>{"Propose a new sign for Links wildflower meadow to highlight plants and benefits to insects and biodiversity and promote our work."}</li>
        <li>{"Organise refurbishment of wooden benches and installation of new ones where agreed with CEC."}</li>
        <li>{"When time permits organise the installation of additional play and exercise equipment subject to CEC approval."}</li>
        <li>{"Work with DK on provision of new basketball court/practice net."}</li>
        <li>{"Agree locations for new picnic tables."}</li>
        <li>{"Organise external volunteers for large scale work including removing grass ingress at boundaries and digging over areas for wildflower planting etc."}</li>
      </ul>

      <p>{"Neil Roger 01/06/2026. projects@fombl.org.uk"}</p>

      <ArticleFigure
        src={photo("ProjRepJun26_12.jpg")}
        alt={"Photograph from the June 2026 project update"}
      />
    </section>
  )
}
