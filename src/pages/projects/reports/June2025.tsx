import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const June2025Meta = {
  id: "june-2025",
  title: "FoMBL PROJECT UPDATE - JUNE 2025",
  navLabel: "June 2025",
} as const

export function June2025Report() {
  return (
    <section className="block project-report" id={"june-2025"}>
      <h2>{"FoMBL PROJECT UPDATE - JUNE 2025"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS"}</h3>

      <p>{"Graeme Cruickshank and I (Neil Roger) had another lengthy meeting at Edinburgh World Heritage with slow but steady progress. FoMBL still holds committed funds of £3763 allocated to the project."}</p>

      <h3>{"2. TREE GROUP"}</h3>

      <p>{"2.1 Watering"}</p>

      <p>{"The Tree Group continues to meet most Fridays and during April to June a lot of time has been spent watering trees due to a long period of dry weather. Trees are regularly maintained with bases cleared and mulched."}</p>

      <p>{"The hose has been used, along with bowser, to reach trees and the wildflower meadow at South Links. Other volunteers have watered trees along North Meadow Walk, bird enclave at toddlers playground and other young trees at east area of the park."}</p>

      <p>{"2.2 PRESENTATION TO CULTURE AND COMMUNITIES COMMITTEE on 28th April"}</p>

      <p>{"This was cancelled, until further notice, due to the sudden and sad death of the committee chair, Councillor Val Walker."}</p>

      <p>{"2.3 Collaboration with James Gillespie's High School"}</p>

      <p>{"Tree group have worked with senior pupils and teachers, supported by David Kyles, Callum MacLellan and Claire Watson, to establish a flowering hedge at an area within the school grounds. `JGHS children have also helped FoMBL tree group most Fridays, so big thanks to them."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun251.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun252.jpg"), alt: "Photograph from the June 2025 project update" },
        ]}
      />

      <h3>{"3 WILDFLOWER MEADOWS"}</h3>

      <p>{"3.1 South Links (Muriel Spark Walk meadow)"}</p>

      <p>{"A large quantity of yellow rattle has successfully grown throughout the Links meadow."}</p>

      <p>{"Charles McQueen (local ecologist) and other volunteers have tended to the many wildflowers planted/sown in the autumn and spring. FoMBL tree group members have also worked hard to water the young plants on a weekly basis. We are pleased with the range of flowers and grasses including red campion, ribwort plantain, oxeye daisy, clover, knapweed, meadow foxtail, ragged robin, chamomile etc. Regular maintenance is ongoing."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun258.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun259.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun2510.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun2511.jpg"), alt: "Photograph from the June 2025 project update" },
        ]}
      />

      <p>{"3.2 LEAMINGTON WALK WILDFLOWER MEADOW"}</p>

      <p>{"Scottish Water have completed the works at Leamington Walk and have provided wildflower seeds which were sown on 11th June. Local schoolchildren along with teachers and FoMBL volunteers took part. Ongoing maintenance, especially watering, will be carried out by FoMBL volunteers and CEC parks staff."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun2512.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun2513.jpg"), alt: "Photograph from the June 2025 project update" },
        ]}
      />

      <h3>{"4. VOLUNTEERS"}</h3>

      <p>{"Saturday volunteers"}</p>

      <p>{"Alison Carr, who runs the volunteer group every month, was recognised for all her work over many years and was given a local hero award on 29th March by MP Ian Murray"}</p>

      <ArticleFigure
        src={photo("PHOTO-2025-03-29-13-40-44.jpeg")}
        alt={"Photograph from the June 2025 project update"}
      />

      <h3>{"5. NEW TOILETS AT THE MEADOWS"}</h3>

      <p>{"The toilets are scheduled to open at end of July. This is unfortunately a year later than planned."}</p>

      <h3>{"6. TABLE TENNIS TABLE at Eric Liddell Way"}</h3>

      <p>{"FoMBL intends to re-apply for a grant to fund the proposed table-tennis table at South Links as a previous application was turned down."}</p>

      <p>{"The date for submission will be in the autumn."}</p>

      <ArticleFigure
        src={photo("ProjRepJun253.jpg")}
        alt={"Photograph from the June 2025 project update"}
      />

      <p>{"The table-tennis table at east Meadows is well used by players of all ages"}</p>

      <h3>{"7. BENCH MAINTENANCE"}</h3>

      <p>{"Richard Ryrko has done a superb job of refurbishing two wooden benches in the Links."}</p>

      <p>{"This one, picture 1, which was installed by FoMBL at Bruntsfield Terrace, is hugely popular. As is the other bench (picture 2) at the log house playground."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun254.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun255.jpg"), alt: "Photograph from the June 2025 project update" },
        ]}
      />

      <h3>{"8. Playgrounds"}</h3>

      <p>{"8.1 Neil Roger and David Kyles (CEC Parks) to work together to propose a replacement for the multi-play unit at the Links playground which has been deemed to be unsafe. Staffing shortages have held up playground equipment refurbishment and replacement."}</p>

      <p>{"8.2 After over seven years of considerable effort by Neil Roger and with support from councillors Munro, Ross and Parker the popular Magnet (east) playground water feature has been repaired, at long last. With many thanks to CEC Parks David Kyles."}</p>

      <p>{"A sign has now been fixed at the Muriel Spark Walk toddler's playground."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepJun256.jpg"), alt: "Photograph from the June 2025 project update" },
          { src: photo("ProjRepJun257.jpg"), alt: "Photograph from the June 2025 project update" },
        ]}
      />

      <h3>{"9 PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term plan in conjunction with D.Kyles to show proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."}</li>
        <li>{"Prepare a plan to show areas of reduced mowing and agree with David Kyles."}</li>
        <li>{"Assist in any practical work needed at Cricket Pavilion and await decisions on lease."}</li>
        <li>{"Continue to maintain and plant new trees including watering."}</li>
        <li>{"Wood chip and spread on muddy paths and at base of trees."}</li>
        <li>{"Organise and prepare for spring planting with assistance from David Kyles and Callum Maclellan."}</li>
        <li>{"Propose new play equipment."}</li>
        <li>{"Add more exercise equipment to augment existing."}</li>
        <li>{"Augment and increase the areas of wildflower areas depending on volunteer resources and overall approved management plan."}</li>
        <li>{"Work with D.Kyles on production of new management plan."}</li>
        <li>{"Re-submit funding application for table-tennis table."}</li>
        <li>{"Design and install (method to be agreed) tree name plaques on rarer specimens."}</li>
        <li>{"Propose a new sign for Links wildflower meadow to highlight plants and benefits to insects and biodiversity."}</li>
        <li>{"Organise refurbishment of wooden benches and installation of new ones where agreed with CEC."}</li>
        <li>{"When time permits organise the installation of additional play and exercise equipment subject to CEC approval."}</li>
      </ul>

      <p>{"Neil Roger. 16/06/2025"}</p>
    </section>
  )
}
