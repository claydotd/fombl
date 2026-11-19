import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const February2026Meta = {
  id: "february-2026",
  title: "FoMBL PROJECT/VOLUNTEER UPDATE - February 2026",
  navLabel: "February 2026",
} as const

export function February2026Report() {
  return (
    <section className="block project-report" id={"february-2026"}>
      <h2>{"FoMBL PROJECT/VOLUNTEER UPDATE - February 2026"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS"}</h3>

      <p>{"FoMBL still holds committed funds of £3763 allocated to this project. NR has now written to the new director, Terry Levinthal, as there is no sign of any progress since our last meeting in May last year."}</p>

      <h3>{"2. THE TREE GROUP Recent regulars : Neil, Martin, Alastair, Alistair, Clive, Sergio, Stephen, Benjamin, Mihaela and Amy. Callum MacLellan continues to support us with his James Gillespie's pupils."}</h3>

      <p>{"The Tree Group has met most Fridays over the winter."}</p>

      <p>{"2.1 Work completed includes removing plastic sleeves and posts wheretrees/bushes have reached a self-supporting height at copse planting areas in Meadows and B.Links. A certain number have been pruned where plants are too crowded. This work can be continued throughout early spring growing period."}</p>

      <p>{"2.2 Tree /bush plugs have been planted where trees/bushes have died and further planting has been carried out to fill gaps."}</p>

      <p>{"2.3 Wire tree guards and posts have been removed from younger trees where necessary, mainly in the Meadows and a few recently in the Links."}</p>

      <p>{"2.4 Wood chip /mulch spread. Supplied by David Kyles - woodchip has been spread around young trees/bushes by James Gillespie's pupils, other volunteer groups and FoMBL tree group. This is very valuable work as woodchip helps to suppress grass, retain moisture and feed the young trees/ bushes."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_1.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_2.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"2.5 Water sources"}</h3>

      <p>{"FoMBL have been active in working with CEC parks to provide new water sources. One on going problem with watering young trees has been the lack of sufficient water sources to connect to our bowsers and hoses. A new tap will be installed at the East toilets, to cover the extensive tree planting at that part of the park. A new stand tap has been installed at the the new toilets at MMW but to date it still is not working."}</p>

      <p>{"A new toby tap has been installed at the Leamington Walk wildflower meadow and a tap is proposed at James Gillespie's school to help with watering new planting in the grounds."}</p>

      <h3>{"3.0 WILDFLOWER MEADOWS"}</h3>

      <h3>{"3.1 Muriel Spark Walk wildflower meadow."}</h3>

      <p>{"Charlie McQueen (local ecologist) has been active over the autumn/winter:"}</p>

      <p>{"He strimmed and raked off the remaining bit of uncut meadow."}</p>

      <p>{"He has sown a lot of yellow rattle in all the meadow areas and planted some extra red campion along the southern fence line to hopefully out-compete the nettles. We are looking forward to spring growth at the old wildflower area which is looking really promising .Ribwort plantain seems to be everywhere. Charlie has planted lots of plugs in unsown areas so this year looks promising."}</p>

      <p>{"With the new border ready to sow with a mix of annual and perennial wildflower seeds soon we are hopeful of a good display to match the huge success of last year."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_3.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_4.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"3.2. Leamington Walk meadow"}</h3>

      <p>{"David Kyles and Tim Duffy will manage this new meadow and try to control the fat hen and other invasive species. David has a good supply of wildflower seed to sow this spring."}</p>

      <p>{"3.3 New Wildflower meadows can only be created if there are enough volunteers to manage them - at present more regular volunteers are needed."}</p>

      <h3>{"4.00. Leamington Walk to Warrender Park Terrace footpath name"}</h3>

      <p>{"Marchmont and Sciennes Community Council asked FoMBL to source ideas for a name for the footpath which runs through the new meadow."}</p>

      <p>{"FoMBL managed to gather 16 possible names with great interest shown by local people. Two suggestions stood out as the most popular: James Kinghorn and Hamish Henderson who both lived locally."}</p>

      <p>{"MSCC considered the suggested names and chose Hamish Henderson Walk. An application has to be made to street naming with a fee required of £460 (not yet funded)"}</p>

      <ArticleFigure
        src={photo("ProjRepFeb26_5.jpg")}
        alt={"Photograph from the February 2026 project update"}
      />

      <h3>{"5.0 FUTURE PLANTING Park Improvement plan"}</h3>

      <p>{"In collaboration with David Kyles (CEC SE Parks and Greenspace Officer) FoMBL tree group is helping to prepare a Park Improvement Plan which will form the basis of future planting including trees and hedgerow /copse areas. The plan will also include restricted mowing areas, identification of proposed new wildflower areas, path improvements and other park enhancements."}</p>

      <p>{"DK hopes a completed draft for comment will be circulated soon."}</p>

      <h3>{"6.0. Working with local schools"}</h3>

      <p>{"FoMBL tree group continue to work closely with teachers and pupils from James Gillespie's school, in particular during planting and maintenance of the new hedgerow planting at Bruntsfield Links. Callum Maclellan has been very keen to encourage his pupils to actively take part and learn from the implementation of biodiversity projects and tree maintenance and planting."}</p>

      <p>{"Recently pupils have helped with spreading woodchip around trees."}</p>

      <p>{"We in turn have helped to establish a new planting area within the school grounds and helped to install 6 wooden benches (Alistair Cant, Sergio and Callum)"}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_6.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_7.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"7.0 Playgrounds"}</h3>

      <h3>{"Links playground"}</h3>

      <p>{"CEC Bob McAllister with help from Neil Roger and local users have chosen new replacement play equipment which hopefully will be installed in early summer along with new surfacing. The proposal includes a new inclusive multi-play unit, a traditional slide replacement an inclusive roundabout and two springers."}</p>

      <p>{"In addition a new self-closing gate will be fitted."}</p>

      <ArticleFigure
        src={photo("ProjRepFeb26_8.jpg")}
        alt={"Photograph from the February 2026 project update"}
      />

      <h3>{"Sutcliffe inclusive multi-play (Â£51000 excluding installation and surfacing)"}</h3>

      <h3>{"8.0 Table-tennis table for the Links"}</h3>

      <p>{"FoMBL received a CEC community grant award of £3164 for a new table -tennis table to be installed at the Links, subject to planning approval. FoMBL have funded the bulk of the remainder of the costs including the planning fee of £691."}</p>

      <p>{"Thanks to Jim Orr for organising the proposal. Thanks also to Billy Lowe of the Black Ivy and the JR Group who kindly contributed towards the total cost, excluding planning fee, of £7809."}</p>

      <ArticleFigure
        src={photo("ProjRepFeb26_9.jpg")}
        alt={"Photograph from the February 2026 project update"}
      />

      <h3>{"9.0. FoMBL volunteers with Alison Carr"}</h3>

      <p>{"Alison continues to run the volunteer sessions on the last Saturday of every month. She has carried out a huge amount of beneficial work including dock removal, leaves/grass/weed removal, litter picking, graffiti removal etc."}</p>

      <p>{"Rotting leaves on pavements are not cleared by the council and Alison's volunteers cannot manage to clear all on their own."}</p>

      <p>{"Alison would like several notices to be fixed to the Pavilion advertising the volunteer day and FoMBL. NR to work with DK on this."}</p>

      <h3>{"10.0 Meadows and Bruntsfield Links Bird Boxes"}</h3>

      <p>{"In addition to the 21 existing bird boxes, Keith Gifford and FoMBL volunteers fixed another 7 onto trees to the east of the new planting areas close to Bruntsfield Place. Given the 80% occupancy rate we are hopeful that the tits will enjoy their new nesting homes! Do watch out for any activity."}</p>

      <p>{"Acknowledgements"}</p>

      <p>{"Abbey Timber, Abbey St Bathans, suppliers of the sustainable Larch used to make the boxes"}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_10.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_11.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"11.0 VOLUNTEER GROUPS"}</h3>

      <p>{"We have had great help from scout groups and University students (Dirty Weekenders) who have cleared a lot of growth around railings and other areas which used to be spayed with weedkiller. Unfortunately CEC do nor have the resources to manually clear grass at edges or rotting leaves on pavements. FoMBL (NR) will continue to use these excellent, enthusiastic volunteers whenever possible."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_12.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_13.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_14.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_15.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"12.0 New toilet FoMBL store"}</h3>

      <p>{"We have been given the use of a very small secure tool store at the new toilets on Middle Meadow Walk. Alistair Cant has done a brilliant job of fitting timber shelves to make the most of the space. We still have to retain some storage at the Cricket Pavilion."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepFeb26_16.jpg"), alt: "Photograph from the February 2026 project update" },
          { src: photo("ProjRepFeb26_17.jpg"), alt: "Photograph from the February 2026 project update" },
        ]}
      />

      <h3>{"13.0 PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term park improvement plan in conjunction with D.Kyles to show proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."}</li>
        <li>{"Prepare a plan to show areas of reduced mowing and agree with David Kyles Continue to maintain and plant new trees including watering wood chip and spread on muddy paths and at base of trees."}</li>
        <li>{"Organise and prepare for spring planting with assistance from David Kyles and Callum Maclellan Add more exercise equipment to augment existing Augment and increase the areas of wildflower areas depending on volunteer resources and overall approved management plan."}</li>
        <li>{"Work with D.Kyles on production of new management plan."}</li>
        <li>{"Design and install (method to be agreed) tree name plaques for rarer specimens."}</li>
        <li>{"Propose a new sign for Links wildflower meadow to highlight plants and benefits to insects and biodiversity and promote our work."}</li>
        <li>{"Organise refurbishment of wooden benches and installation of new ones where agreed with CEC."}</li>
        <li>{"When time permits organise the installation of additional play and exercise equipment subject to CEC approval."}</li>
        <li>{"Work with DK on provision of new basketball court/practice net."}</li>
        <li>{"Agree locations for new picnic tables."}</li>
        <li>{"Organise external volunteers for large scale work including removing grass ingress at boundaries and digging over areas for wildflower planting etc."}</li>
      </ul>

      <p>{"Neil Roger 01/03/2026. projects@fombl.org.uk"}</p>
    </section>
  )
}
