import { Link } from 'react-router'
import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const April2024Meta = {
  id: "april-2024",
  title: "FoMBL PROJECT UPDATE April 2024",
  navLabel: "April 2024",
} as const

export function April2024Report() {
  return (
    <section className="block project-report" id={"april-2024"}>
      <h2>{"FoMBL PROJECT UPDATE April 2024"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS AND BRUNTSFIELD LINKS PROJECT"}</h3>

      <p>{"Unfortunately the project has ground to a halt again after Fiona Rankin's return in December. A promised meeting never materialised. We still hold funds for this project but I am not working on it until I hear from EWH."}</p>

      <h3>{"2. PLAYGROUNDS"}</h3>

      <p>{"The new log house and wooden train were successfully installed and so far have been a big success with plenty of local appreciation. The funds of £7700 have now been transferred to CEC with the required signage still to be finalised and fixed to railings."}</p>

      <p>{"The archimedes screw water feature is due to be installed at the East Meadows playground after breaking down over 8 years ago."}</p>

      <ArticleFigure
        src={photo("Links_playground.jpg")}
        alt={"Photograph from the April 2024 project update"}
      />

      <p>
        <Link to={"/about/play"}>{"New toddlers' playground in Bruntsfield Links"}</Link>
      </p>

      <h3>{"3. BENCHES FoMBL Bench project"}</h3>

      <p>{"The third bench has now been successfully restored with plaque to Greg Michelson's parents. Greg is a long term FoMBL member and provided his own funds to restore the bench. The joiner was Richard Ryrko who restored the previous two benches. It is hoped he will have the opportunity to restore more benches."}</p>

      <ArticleFigure
        src={photo("GregsBench.jpg")}
        alt={"Photograph from the April 2024 project update"}
      />

      <p>{"The 2 new wooden benches installed opposite James Gillespie's school continue to be very popular."}</p>

      <h3>{"4. TREE GROUP"}</h3>

      <p>{"The Tree group has been very active during the autumn and winter with a steady group of regular volunteers turning up every Friday as well as over the two weeks of planting with schoolchildren in January."}</p>

      <h3>{"Tree planting at Bruntsfield Links in January/February"}</h3>

      <p>{"The planting of 14 new trees has now completed the new avenue (Whitehouse Loan to Bruntsfield Terrace) which we started last winter. A further 36 were planted throughout Bruntsfield Links."}</p>

      <ArticleFigure
        src={photo("LinksTrees2.jpg")}
        alt={"Photograph from the April 2024 project update"}
      />

      <p>{"Trees and bushes supplied by various sources have been planted at the Toddlers' playpark adjacent to the tennis courts as well as at the existing copse next to the East playground."}</p>

      <h3>{"Major tree and bush planting at SW Bruntsfield Links organised and completed by FoMBL, James Gillespies and CEC Parks (David Kyles and Peter Davidson with other staff)"}</h3>

      <ArticleGallery
        tiles
        images={[
          { src: photo("TreePlanting1.jpg"), alt: "Photograph from the April 2024 project update" },
          { src: photo("TreePlanting2.jpg"), alt: "Photograph from the April 2024 project update" },
        ]}
      />

      <p>{"Around 2000 tree and bush plugs were planted during some pretty cold weather by about 300 children and teachers from James Gillespies primary and secondary as well as pupils from Bruntsfield primary."}</p>

      <p>{"Thanks to many volunteers including Martin, Mihaela, Neil, Clive, Alistair, Alastair and Ion."}</p>

      <p>{"We are planting close to achieve a dense hedge/copse where the public can't easily enter (like a normal field hedge) The result will provide a habitat for birds and insect life as well as all the microorganisms which will flourish within a biodiverse system."}</p>

      <p>{"Berry/fruit and nut producing trees such as rowan, alder, hazel and crab apple will grow above the bushes (holly, dog rose, elder, hawthorn, blackthorn etc) to provide birds with essential food as well as a safe place to survey the food below."}</p>

      <p>{"In addition such planting absorbs huge amounts of carbon dioxide which will be of particular relevance alongside the highly polluting Bruntsfield Place. Dense copses will provide some shelter from prevailing winds."}</p>

      <p>{"A further 400 trees and bushes were planted in March."}</p>

      <p>{"The Friday Tree Group followed up by completing the mulching off all newly planted trees and bushes. Further mulching of most of the young trees was carried out by FoMBL member Alistair Cant who also mapped the planted trees throughout the Links and Meadows."}</p>

      <p>{"Along with David Kyles (CEC Parks officer) we plan to follow the CEC 2022-2027 Biodiversity Action Plan and create more areas of miniforest, dense copse/hedgerow and more areas of relaxed mowing (allowing grass to grow taller especially between trees.) This will be shown on proposal maps to follow in the coming years."}</p>

      <h3>{"5 WILDFLOWER MEADOWS"}</h3>

      <p>{"Links fenced area The meadow was cut by David Kyles and raked by volunteers in November. Further turf digging and seeding was carried out in April along with bush and tree planting along the perimeter."}</p>

      <h3>{"Leamington Walk wildflower meadow"}</h3>

      <ArticleFigure
        src={photo("Wildflower.jpg")}
        alt={"Photograph from the April 2024 project update"}
      />

      <p>{"Tim Duffy and David Kyles organised raking of meadow as well as planting hundreds of bulbs by volunteers managed by Alison Carr alongside Melville Drive in November so many thanks to all their hard work"}</p>

      <h3>{"6 TREE, BUSH and wildflower maintenance"}</h3>

      <p>{"Over the years we have struggled with watering young trees but at last we have agreement to install a water tap at Bruntsfield toilets along with new tool store at James Gillespie's school. This means the water bowser can be kept much nearer to the large number of newly planted trees and bushes which will require watering over the next few years"}</p>

      <h3>{"7. MONTHLY SATURDAY VOLUNTEERS"}</h3>

      <p>{"Alison Carr has continued to lead the volunteers on last Saturday of the month but more volunteers are needed.Volunteers have managed to clear many benches of weeds and undergrowth, collected a large amount of litter and carried out many worthwhile tasks. A big thank you to Alison Carr for leading the teams."}</p>

      <h3>{"8. BIRD BOX WORK"}</h3>

      <ArticleFigure
        src={photo("BirdBoxWork.jpg")}
        alt={"Photograph from the April 2024 project update"}
      />

      <p>{"In November Keith Gifford and his team removed and inspected/cleaned 21 bird boxes. His report on the findings will be made available in due course. Many thanks to Keith and team for carrying out this important work."}</p>

      <h3>{"9. FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"table-tennis table for South Links. tree maintenance wooden bench restoration new stores at Bruntsfield toilets, James Gillespie's and East Meadows toilets New exercise equipment Tree labels fixed to mesh New notices for volunteers"}</li>
      </ul>

      <p>{"Neil Roger 22nd April 2024"}</p>
    </section>
  )
}
