import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const November2024Meta = {
  id: "november-2024",
  title: "FoMBL PROJECT UPDATE November 2024",
  navLabel: "November 2024",
} as const

export function November2024Report() {
  return (
    <section className="block project-report" id={"november-2024"}>
      <h2>{"FoMBL PROJECT UPDATE November 2024"}</h2>
      <h3>{"1. HISTORY/INFORMATION PANELS FOR MEADOWS AND BRUNTSFIELD LINKS PROJECT"}</h3>

      <p>{"The project is now on track to be completed, hopefully in the Spring next year, after a thorough review of all 8 panels at a meeting on 25th September with Neil Roger, Graeme Cruickshank, Silke Schneider and Fiona Rankin at Edinburgh World Heritage. There will be still be many hours of work to do before the panels can be finalised."}</p>

      <ArticleFigure
        src={photo("PRNovPic1.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"A panel design in progress"}</p>

      <h3>{"2. PLAYGROUNDS"}</h3>

      <p>{"The new log house continues to be a big success with plenty of local appreciation and use.The required signage still to be finalised and fixed to railings.David Kyles is providing the sign."}</p>

      <p>{"The archimedes screw water feature is still to be installed at the East Meadows playground after breaking down over 8 years ago. The lack of action is partly due to limited staff availability. NR trying to get this fixed via local councillors."}</p>

      <p>{"New equipment at the sand area is being installed to replace unsafe units. Users have reported poor snagging resulting in equipment failure. Alan Grevers (CEC playgrounds) has asked us to come up with ideas for a replacement for the slide at Links playground, which was removed in the spring. NR has proposed several options after public consultation. NR met Cllr Munro on site with Alan Grevers who agreed to order the slide but stated it would not be installed for 6 months."}</p>

      <p>{"The Links playground has been severely neglected and NR offered to find volunteers to clear the grass growth . So far Alison has cleared a good amount with the Saturday volunteers. At present CEC do not have the resources to clear growth around railings etc. Joan Carter has organised a group of students to help clear the remainder of the grass."}</p>

      <ArticleFigure
        src={photo("PRNovPic_2.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"The Links playground"}</p>

      <h3>{"3. TREE GROUP"}</h3>

      <p>{"The Tree Group, which has been formed into a FoMBL sub-committee, has met every Friday throughout the year. Full approval to be sought at FoMBL trustee meeting on 4/11/24 Work has included watering, clearing growth from under young trees and mulching."}</p>

      <p>{"The new hedgerow planting at the Links and North Meadow Walk, completed at the beginning of the year, requires about 400 trees/bushes to replace dead ones. Trees have been ordered from the Woodland Trust and planting will occur in November with the help of local school children and teachers. Further similar hedgerow planting has been put on hold whilst the new Meadows and Bruntsfield Links management plan is being updated."}</p>

      <p>{"Watering has been a long term problem due to a lack of integrated maintenance after planting new trees. Recently Parks staff have managed to water some young trees using funding approved after requested by councillor Ben Parker. FoMBL tree group watered new trees during critical periods with the use of bowsers and hoses."}</p>

      <p>{"Looking ahead FoMBL tree group is meeting with D.Kyles and B.Parker to try and improve the watering situation for next year. £250000 has been allocated for tree watering and maintenance throughout the city but it is unclear how this is to be spent in the Meadows/BL."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PRNovPic_3.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_4.jpg"), alt: "Photograph from the November 2024 project update" },
        ]}
      />

      <h3>{"4. WILDFLOWER MEADOWS"}</h3>

      <h3>{"South Links (Muriel Spark Walk meadow)"}</h3>

      <p>{"We have been very pleased with the excellent spread of wildflowers and grasses growing at the South Links Wildflower Meadow (Muriel Spark Walk), due partly to abundant rain in May which is usually a very dry month. Regular volunteers including Alastair Philp, Neil Roger, Martin Howarth, Anke Bremer, Alistair Cant, Clive Kempe, Charles McQueen Amanda and family have been active carrying out removal of invasive plants such as nettles, docks and rosebay willow herb."}</p>

      <p>{"The ongoing work will include watering and removal of invasive plants as well as planting additional wildflowers and herbs."}</p>

      <p>{"Recently large areas of nettle and creeping thistle roots have been dug out from the side of the path railing. This will enable us to plant wildflowers as well as flowering bushes to increase the diversity of pollinating plants for insects and birds."}</p>

      <p>{"Charlie McQueen (ecologist) has joined our team and has cut and cleared the wildflower meadow as well as providing wildflower plugs which he helped to plant recently."}</p>

      <p>{"Leamington Walk Meadow (managed by Tim Duffy)"}</p>

      <p>{"This meadow has recently been cut and raked and hopefully extended next year into a portion of the adjacent area vacated (eventually) by Scottish Water."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PRNovPic_5.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_6.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_7.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_8.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_9.jpg"), alt: "Photograph from the November 2024 project update" },
        ]}
      />

      <h3>{"5. MOWING"}</h3>

      <p>{"There has been an abundance of wildflowers growing where mowers would normally have cut in the summer. We hope that in future mowing will be more limited to central areas, although grass still should be cut at the correct time. So far we have not been able to agree a detailed mowing plan, despite a big effort by David Kyles to persuade mowers to plan for future cuts. It is hoped further discussions can be held with mowing managers and park staff. There are still examples of mowers cutting down planted hedges etc."}</p>

      <p>{"Although relaxed mowing is a council policy under the Thriving Green Spaces initiative the Meadows and Bruntsfield Links have not been included in their proposals."}</p>

      <ArticleFigure
        src={photo("PRNovPic_10.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"Unmown grass at the Links with cat's ear"}</p>

      <h3>{"6. VOLUNTEERS"}</h3>

      <h3>{"6.1 Saturday volunteers"}</h3>

      <p>{"Alison Carr has run the volunteer group every month and they have cleared huge amounts of litter, leaves and 'weeds' as well as removed graffiti and other worthwhile tasks including clearing grass inside the Links playground and removing weeds from the base of the Prince Albert sundial. It is hoped that a new sign to invite more volunteers will be placed at the Cricket Pavilion. Tree Group volunteers"}</p>

      <h3>{"6.2 Tree Group volunteers"}</h3>

      <p>{"The tree group has worked every Friday from 1.30 pm, as well as on other days, when available. We now have 7 active members who have done a huge amount of work including, clearing growth under trees and mulching. Due to the demands of planning tree planting/maintenance it was agreed to set up a FoMBL sub-committee which would meet when required to deal with regular issues and planning."}</p>

      <ArticleGallery
        tiles
        images={[
          { src: photo("PRNovPic_11.jpg"), alt: "Photograph from the November 2024 project update" },
          { src: photo("PRNovPic_12.jpg"), alt: "Photograph from the November 2024 project update" },
        ]}
      />

      <h3>{"7. TABLE TENNIS TABLE at Eric Liddell Way"}</h3>

      <p>{"A CEC community grant was applied for to install a new table tennis table near to existing exercise units adjacent to Eric Liddell Way. This proposal has been welcomed by the community, especially after the success of the table installed near the East Meadows playground. Donations have been given by the Black Ivy Hotel and JR Group. In addition DK offered to make the application to avoid VAT and he also agreed to apply and pay for the planning application."}</p>

      <p>{"Unfortunately the grant panel did not select our application (reasons given did not take account of community/ CEC support)"}</p>

      <p>{"FoMBL can either re-submit by 2nd December or try again next year."}</p>

      <ArticleFigure
        src={photo("PRNovPic_13.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"Location for proposed table-tennis table"}</p>

      <h3>{"8. NEW TOILETS AT THE MEADOWS"}</h3>

      <p>{"Proposed new toilets are clearly welcomed. FoMBL has taken part in over 6 meetings throughout the year with the Thriving Green Spaces team who have now chosen a location at the south end of Middle Meadow Walk. (Not approved as ideal by many park users but constraints accepted) The toilet building will contain a small store for FoMBL equipment and an outside tap to help with tree watering. Unfortunately the original installation date of June 2024 has now been put forward to spring/summer next year. This was partly due a lack of knowledge by the TGS team regarding the restrictions of the Confirmation Act which prohibits all new building on the Meadows, except toilets and bandstands. It was also due to a lack of an initial understanding of planning requirements. A refreshment kiosk had been erroneously included in the design, but this has now been omitted."}</p>

      <p>{"The original plans showed 3 urinals without wash hand basins. The revised proposals omitted the urinals altogether but no reason was given for this. Further opportunity to comment on the design can be made prior to the planning submission. No revised plans have been provided."}</p>

      <p>{"Whilst FoMBL was fully consulted and many other constraints had to be considered, it is disappointing that this project has not been handled better and the lack of effective consultation (not taking on board advice on planning and Confirmation Act) has resulted in considerable delay and likely cost increases. (Opinion of NR not necessarily FoMBL)"}</p>

      <h3>{"9. JAWBONES"}</h3>

      <p>{"At a recent meeting with EWH it was stated that a specialist bone conservator was commissioned to examine the possibility of erecting the jawbones which had been preserved last year but found to be structurally unstable. If this attempt fails then it is hoped that a replica could be erected after feasibility studies have been made. Whatever the outcome an information panel will commemorate the history of this historic and much loved feature which stood for 135 years at the entrance to Jawbone Walk."}</p>

      <ArticleFigure
        src={photo("PRNovPic_14.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"Jawbones being dismantled"}</p>

      <h3>{"10. BARCLAY TERRACE/ GLENGYLE TERR."}</h3>

      <p>{"Heather Goodare (FoMBL past convenor) has donated £1000 towards improving the worn corner at Glengyle Terrace. At a meeting with Heather, NR and David Kyles it was agreed to fill the muddy hollows with fine whin dust which makes a smooth compact surface and should improve the condition of this long worn corner considerably. All are keen to complete this project which started in 2012."}</p>

      <ArticleFigure
        src={photo("PRNovPic_15.jpg")}
        alt={"Photograph from the November 2024 project update"}
      />

      <p>{"ORIGINAL PROPOSALS"}</p>

      <h3>{"PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>

      <ul>
        <li>{"Prepare a long term plan in conjunction with D.Kyles to show proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links Prepare a plan to show areas of reduced mowing and agree with David Kyles Assist in practical work at Cricket Pavilion and await decisions on lease Continue to maintain and plant new trees including watering Design and install a new sign at the Links play area to acknowledge FoMBL and Forbes nursery Organise and prepare for autumn planting with assistance from David Kyles and Callum Maclellan Propose new play equipment Add more exercise equipment to augment existing Augment and increase the areas of wildflower areas depending on volunteer resources and overall approved management plan Work with D.Kyles on production of new management plan Resubmit funding application for table-tennis table"}</li>
      </ul>

      <p>{"Neil Roger. 3/11/2024"}</p>
    </section>
  )
}
