import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const September2025Meta = {
  id: "september-2025",
  title: "FoMBL PROJECT UPDATE - September 2025",
  navLabel: "September 2025",
} as const

export function September2025Report() {
  return (
    <section className="block project-report" id={"september-2025"}>
      <h2>{"FoMBL PROJECT UPDATE - September 2025"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS"}</h3>

      <p>{"Graeme Cruickshank and I (Neil Roger) had another lengthy meeting in April at Edinburgh World Heritage offices with slow, uncertain progress. FoMBL still holds committed funds of £3763 allocated to this project. A new director, Terry Leventhal, has now been appointed to lead EWH on 16th September so we hope that might result in more progress."}</p>

      <h3>{"2. THE TREE GROUP"}</h3>

      <p>{"The Tree Group has met most Fridays over the summer and had to spend a lot of time watering young trees throughout the park due to long periods of dry weather. Young trees are regularly maintained with bases cleared and mulched.The hoses have been used, along with bowser, to reach trees and the wildflower meadow at South Links. FoMBL volunteers with help from pupils from James Gillespies have watered trees along North Meadow Walk, bird enclave at toddlers playground and other young trees at east area of the park."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep1a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep2a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep3a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep4a.jpg"), alt: "Photograph from the September 2025 project update" },
        ]}
      />

      <h3>{"2.1 Water sources"}</h3>

      <p>{"FoMBL have been active in working with CEC parks to provide new water sources. One on going problem with watering young trees has been the lack of sufficient water sources to connect to our bowsers and hoses. We hope a new tap can be installed at the East toilets, to cover the extensive tree planting at that part of the park. There is also a possibility to fit a tap at the Croquet Club Pavilion. A new stand tap has been installed at the the new toilets but to date it has not been installed correctly so cannot be used. Councillor Ben Parker has been very supportive. A new toby tap has been installed at the Leamington Walk wildflower meadow and a tap is proposed at James Gillespie's school to help with watering new planting in the grounds."}</p>

      <h3>{"2.2 TREE AND COPSE PLANTING"}</h3>

      <p>{"The hedgerow tree and bush planting at the Links, which started in January 2024, has done very well in some areas but slower to grow in some planting groups. School pupils and FoMBL volunteers have continued to maintain, mulch and water over 1000 young trees and flowering bushes."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep5a.jpg"), alt: "January 2024" },
          { src: photo("ProjRepSep6a.jpg"), alt: "May 2025" },
          { src: photo("ProjRepSep7a.jpg"), alt: "August 2024" },
          { src: photo("ProjRepSep8a.jpg"), alt: "August 2025" },
        ]}
      />

      <h3>{"2.3 FUTURE PLANTING"}</h3>

      <p>{"In collaboration with David Kyles (CEC SE Parks and Greenspace Officer) FoMBL is preparing a Park Improvement Plan which will form the basis of future planting including trees and hedgerow /copse areas. The plan will include restricted mowing areas, identification of wildflower areas, Playground improvements and other park enhancements."}</p>

      <h3>{"3.0 WILDFLOWER MEADOWS"}</h3>

      <h3>{"3.1 Muriel Spark Walk wildflower meadow."}</h3>

      <p>{"The meadow adjacent to Muriel Spark Walk at South Links has done particularly well this year thanks to the efforts of FoMBL volunteers who had remove a large area of creeping thistle and nettles which enabled plugs to be planted in autumn and wildflower seed mix of perennial and annuals sown in early spring."}</p>

      <p>{"The established meadow did well with perennials including greater bird's foot trefoil, tansy, ribwort plantain, yellow rattle, toadflax, knapweed and many beneficial grasses etc."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep9a.jpg"), alt: "March 2025" },
          { src: photo("ProjRepSep10a.jpg"), alt: "August 2025" },
          { src: photo("ProjRepSep11a.jpg"), alt: "Wild flowers" },
          { src: photo("ProjRepSep12a.jpg"), alt: "Wild flowers" },
          { src: photo("ProjRepSep13a.jpg"), alt: "Wild flowers" },
        ]}
      />

      <h3>{"3.2 Leamington Walk wildflower meadow"}</h3>

      <p>{"In June a massive wildflower seeding session took place on the site of the Scottish Water underground tank works. SW provided topsoil and seeds and CEC Parks staff, FoMBL volunteers along with James Gillespie's pupils and staff seeded the whole area. Young children from Viewforth Early Learning Centre were a great help."}</p>

      <p>{"Unfortunately the topsoil contained the very invasive fat hen annual and soon the whole area was completely covered in very dense, high fat hen."}</p>

      <p>{"A huge operation was put in place by CEC Parks staff and other volunteers who managed to cut most of it before the seeds spread."}</p>

      <p>{"Luckily quite a number of wildflowers survived and more seed will be sown in the autumn."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep14a.jpg"), alt: "June 2025" },
          { src: photo("ProjRepSep15a.jpg"), alt: "June 2025" },
          { src: photo("ProjRepSep16a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep17a.jpg"), alt: "July 2025" },
        ]}
      />

      <h3>{"3.3. Leamington Walk to Warrender Park Terrace footpath name"}</h3>

      <p>{"Marchmont and Sciennes Community Council asked FoMBL to source ideas for a name for the footpath which runs through the new meadow."}</p>

      <p>{"FoMBL managed to gather 16 possible names with great interest shown by local people. So far two suggestions stood out as the most popular: James Kinghorn and Hamish Henderson who both lived locally."}</p>

      <p>{"With the new meadow in the process of being established it will be some time before a final decision is made and after consultation with the community council."}</p>

      <h3>{"4.0. Working with local schools"}</h3>

      <p>{"FoMBL tree group have worked closely with teachers and pupils from James Gillespie's school, in particular during planting and maintenance of the new hedgerow planting at Bruntsfield Links. Callum Maclellan has been very keen to encourage his pupils to actively take part and learn from the implementation of biodiversity projects and tree maintenance and planting."}</p>

      <p>{"We in turn have helped to establish a new planting area within the school grounds. With the Headmaster's support funds have been provided by Gillespie's trust for us to organise the repair of wooden planters in the restored memorial garden. In addition we have commissioned the building of three benches to be installed within the planted area. We also hope that a new external tap can be installed within the school grounds to help water young trees."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep18a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep19a.jpg"), alt: "Photograph from the September 2025 project update" },
        ]}
      />

      <h3>{"5.0 Playgrounds"}</h3>

      <h3>{"5.1 Links playground"}</h3>

      <p>{"Neil Roger, Bob McAllister and David Kyles (CEC Parks) are working together to choose a replacement for the multi-play unit and other equipment at the Links playground which has been deemed to be unsafe. Staffing shortages have held up playground equipment refurbishment and replacement and at present 3 items of equipment have failed with the multi play unit requiring replacement soon."}</p>

      <p>{"So far the proposal includes a possible inclusive play unit from local manufacturer 'Inclusive Play', a traditional slide replacement and an inclusive roundabout. The multi play unit is shown below."}</p>

      <h3>{"5.2 East (Magnet) playground"}</h3>

      <p>{"After over seven years of considerable effort by Neil Roger and with support from councillors Munro, Ross and Parker the popular Magnet (east) playground water feature has been repaired, at long last. With many thanks to CEC Parks David Kyles for enabling its reinstatement."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep20a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep21.jpg"), alt: "Photograph from the September 2025 project update" },
        ]}
      />

      <h3>{"6.0 Table-tennis table for the Links"}</h3>

      <p>{"There has been a lot of community support for this popular facility and we have had generous funding contributions from local businesses. We depended on receiving a CEC community grant but we were not successful and will reapply this month."}</p>

      <ArticleFigure
        src={photo("ProjRepSep22.jpg")}
        alt={"Photograph from the September 2025 project update"}
      />

      <h3>{"7.0. Volunteers"}</h3>

      <h3>{"7.1 Tree Group"}</h3>

      <p>{"The tree group has met regularly throughout the year, usually on a Friday at 1.30 . The group has 5-7 regular volunteers, with considerable experience in tree maintenance and planting."}</p>

      <p>{"In addition there are other enthusiastic volunteers who help out when available. The group will work on the new Park Improvement Plan along with David Kyles."}</p>

      <h3>{"7.2. FoMBL volunteers with Alison Carr"}</h3>

      <p>{"Alison continues to run the volunteer sessions on the last Saturday of every month. She has carried out a huge amount of beneficial work including dock removal, grass/weed removal, litter picking, graffiti removal etc. Alison deservedly received a local hero award from Ian Murray."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep23a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep24a.jpg"), alt: "Photograph from the September 2025 project update" },
        ]}
      />

      <h3>{"8.0 Bench project"}</h3>

      <p>{"Richard Ryrko has done a superb job of refurbishing two wooden benches in the Links. This one, on the left, which was installed by FoMBL at Bruntsfield Terrace, is hugely popular. As is the other bench at the log house playground."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("ProjRepSep25a.jpg"), alt: "Photograph from the September 2025 project update" },
          { src: photo("ProjRepSep26a.jpg"), alt: "Photograph from the September 2025 project update" },
        ]}
      />

      <h3>{"9.0 Meadows and Bruntsfield Links Bird Boxes"}</h3>

      <p>{"In 2021 I was approached by Neill Walker with the proposition to provide a number of nesting boxes. It was agreed to put up 21 boxes with a specification aimed at Blue and Great tits."}</p>

      <p>{"We have now reached the end of the 4th year.Each year the boxes are taken down, with the assistance of volunteers. Any activity is recorded, the boxes are then cleaned and sterilised, with any required repairs/renewals undertaken. The boxes are then put back in their original position."}</p>

      <p>{"In the first year 14 of the 21 boxes exhibited signs of activity, in the two subsequent years 17 boxes.We are about to commence taking down the boxes so we will see if our 80% activity rate is maintained.After the first year we refined the position of a small number of the boxes, were no activity was recorded. All locations have exhibited some form of activity over period."}</p>

      <p>{"Acknowledgements"}</p>

      <p>{"Abbey Timber, Abbey St Bathans, suppliers of the sustainable Larch used to make the boxes Rebel PT: providers of labour and moral support"}</p>

      <p>{"FOMBL: Tree group, advice and labour"}</p>

      <p>{"Neill Walker for instigating the project."}</p>

      <h3>{"10 PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term plan in conjunction with D.Kyles to show proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."}</li>
        <li>{"Prepare a plan to show areas of reduced mowing and agree with David Kyles Assist in any practical work needed at Cricket Pavilion and await decisions on lease."}</li>
        <li>{"Continue to maintain and plant new trees including watering wood chip and spread on muddy paths and at base of trees."}</li>
        <li>{"Organise and prepare for spring planting with assistance from David Kyles and Callum Maclellan Propose new play equipment."}</li>
        <li>{"Add more exercise equipment to augment existing Augment and increase the areas of wildflower areas depending on volunteer resources and overall approved management plan."}</li>
        <li>{"Work with D.Kyles on production of new management plan. re-submit funding application for table-tennis table."}</li>
        <li>{"Design and install (method to be agreed) tree name plaques on rarer specimens."}</li>
        <li>{"Propose a new sign for Links wildflower meadow to highlight plants and benefits to insects and biodiversity."}</li>
      </ul>
    </section>
  )
}
