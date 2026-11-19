import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const June2024Meta = {
  id: "june-2024",
  title: "FoMBL PROJECT UPDATE June 2024",
  navLabel: "June 2024",
} as const

export function June2024Report() {
  return (
    <section className="block project-report" id={"june-2024"}>
      <h2>{"FoMBL PROJECT UPDATE June 2024"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS AND BRUNTSFIELD LINKS PROJECT"}</h3>

      <p>{"Unfortunately the project has ground to a halt again after Fiona Rankin's return in December. A promised meeting never materialised. We still hold funds for this project but Graeme Cruikshank and I are not working on it until I hear from EWH."}</p>

      <h3>{"2. PLAYGROUNDS"}</h3>

      <p>{"The new log house so far have been a big success with plenty of local appreciation and use.The required signage still to be finalised and fixed to railings."}</p>

      <p>{"The archimedes screw water feature is due to be installed at the East Meadows playground after breaking down over 8 years ago."}</p>

      <p>{"Alan Grevers (CEC playgrounds) has asked us to come up with ideas for a replacement for the slide which was removed at Links playground."}</p>

      <h3>{"3 TREE GROUP"}</h3>

      <p>{"The Tree Group have met most Fridays in Spring and mainly spent time maintaining all the young trees planted in the autumn and winter. Watering was essential during a dry spell but was eased after considerable rainfall in May."}</p>

      <p>{"The task now is to clear grass around the base of young trees/bushes, mulch and water."}</p>

      <p>{"Thanks to David Kyles we now have a new water tap at Bruntsfield toilets and hope to have a new store installed adjacent in about a months time. We now have a store at James Gillespies where we can keep other items and tools safely. We hope to have at least 3 bowsers placed at NMWalk, the Cricket Pavilion and Bruntsfield toilets."}</p>

      <p>{"Volunteers now include students generously supplied by Stu of Uplands Roast coffee."}</p>

      <h3>{"ONGOING MAINTENANCE"}</h3>

      <p>{"This is proving to be a daunting task and we are trying to link with local schools and teachers to involve them over the next 3 weeks before schools finish for the holidays. We have now bought a long section of hose pipe to bring water much closer the planted areas."}</p>

      <h3>{"FUTURE PLANTING"}</h3>

      <p>{"It was agreed that a plan would be prepared to show all future areas of planting similar areas of hedgerow/copses especially alongside roadsides to help protect the park from traffic pollution."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PU9624_1.jpg"), alt: "Photograph from the June 2024 project update" },
          { src: photo("PU9624_2.jpg"), alt: "Photograph from the June 2024 project update" },
          { src: photo("PU9624_3.jpg"), alt: "Photograph from the June 2024 project update" },
          { src: photo("PU9624_4.jpg"), alt: "Photograph from the June 2024 project update" },
        ]}
      />

      <h3>{"4 WILDFLOWER MEADOWS"}</h3>

      <p>{"We have been very pleased with the excellent spread of wildflowers and grasses growing at the Links Wildflower Meadow, due partly to abundant rain in May which is usually a very dry month. Regular volunteers including Alastair Philp, Neil Roger, Martin Howarth, Anke Bremer, Alistair Cant, Clive Kempe, Amanda and family have been active carrying out removal of invasive plants such as nettles, docks and rosebay willow herb."}</p>

      <p>{"The ongoing work will include watering and removal of invasive plants as well as planting additional wildflowers and herbs."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PU9624_5.jpg"), alt: "Azure damselfly" },
          { src: photo("PU9624_6.jpg"), alt: "Red campion" },
          { src: photo("PU9624_7.jpg"), alt: "Knapweed" },
          { src: photo("PU9624_8.jpg"), alt: "Meadow crane's bill" },
          { src: photo("PU9624_9.jpg"), alt: "Yellow rattle" },
          { src: photo("PU9624_10.jpg"), alt: "Oxeye daisy" },
        ]}
      />

      <h3>{"5 MOWING"}</h3>

      <p>{"There has been an abundance of wildflowers growing where mowers would normally have cut by now. We hope that in future mowing will be limited to central areas. So far we have not been able to agree a mowing plan despite a big effort by David Kyles to persuade mowers to plan for future cuts."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PU9624_11.jpg"), alt: "View over to log house with tulip tree" },
          { src: photo("PU9624_12.jpg"), alt: "Vetch growing wild amongst grass" },
        ]}
      />

      <h3>{"6 VOLUNTEERS"}</h3>

      <p>{"Alison Carr has run the volunteer group every month and have cleared huge amounts of litter, leaves and grass as well as removed graffiti. Unfortunately the numbers of volunteers are going down so an effort should be made to attract more and younger volunteers. NR is hoping to design a new sign to invite volunteers which will be placed to avoid graffiti if possible."}</p>

      <h3>{"TREE GROUP"}</h3>

      <p>{"The tree group have worked every Friday as well as other days when available."}</p>

      <h3>{"SCHOOL VOLUNTEERS"}</h3>

      <p>{"A new council officer, Claire Watson, has been appointed and it is hoped she will liaise with us to provide a link with local school children. Claire Watson | Project Worker, Wilding Wee Spaces | Wider Achievement and Lifelong Learning | Children, Education and Justice Services | The City of Edinburgh Council |"}</p>

      <p>
        <a href={"https://www.experienceoutdoors.org.uk"} target="_blank" rel="noreferrer">{"www.experienceoutdoors.org.uk"}</a>
      </p>

      <h3>{"PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term plan to show areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."}</li>
        <li>{"Prepare a plan to show areas of reduced mowing and agree with David Kyles Raise funds and apply for planning permission to install a table tennis table at South Links Continue to fix tree name notices to newly planted tree wire enclosures."}</li>
        <li>{"Design and install a new sign at the Links play area to acknowledge FoMBL and Forbes nursery."}</li>
        <li>{"Organise and prepare for autumn planting with assistance from David Kyles and Callum Maclellan Propose new play equipment."}</li>
        <li>{"Add more exercise equipment to augment existing"}</li>
      </ul>
    </section>
  )
}
