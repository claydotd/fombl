import { ArticleFigure } from '../../../components/ArticleFigure'
import { ArticleGallery } from '../../../components/ArticleGallery'
import { resolveHref } from '../../../lib/url'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

export const November2026Meta = {
  id: 'november-2026',
  title: 'FoMBL PROJECT/VOLUNTEER UPDATE - November 2026',
  navLabel: 'November 2026',
} as const

export function November2026Report() {
  return (
    <section className="block project-report" id="november-2026">
      <h2>{"FoMBL AUTUMN NEWSLETTER"}</h2>
      <p>{"Including PROJECT/VOLUNTEER UPDATE - NOVEMBER 2026"}</p>

      <h3>{"XMAS PARTY FOR MEMBERS AND VOLUNTEERS"}</h3>
      <p>{"All members are welcome to attend our Xmas party at the Croquet Club"}</p>
      <p>{"On 14th December from 6.00-8.30 Drinks and light snacks provided."}</p>

      <ArticleFigure
        className="article-figure--hero"
        src={photo('ProjRepNov26_3.jpg')}
        alt="Autumn path on the Meadows"
        caption="Photo by Amanda"
      />

      <h3>{"1.0 THE TREE GROUP"}</h3>
      <p>
        {
          "The Tree Group has been meeting every Friday throughout autumn. Tree and bush maintenance has been carried out mainly at South Links, and North Meadow Walk"
        }
      </p>
      <p>
        {
          "1.1 Tree work completed includes removal of most of the protective tubes at new copses, removal of tree posts and wire where appropriate, watering younger trees, especially those newly planted ; clearing growth under caged trees and mulching, copsing"
        }
      </p>
      <p>{"1.3 Wood chip /mulch"}</p>
      <p>
        {
          "We have now used up all the woodchip which has been spread around young trees/bushes, paths and bare soil as needed. Now we need another delivery!"
        }
      </p>
      <p>
        {
          "This is very valuable work as woodchip helps to suppress grass, retain moisture and feed the young trees/bushes."
        }
      </p>
      <p>{"1.4 Replacing dead trees"}</p>
      <p>{"CEC has agreed that we can replace about 10 dead trees throughout the park"}</p>
      <p>
        {
          "1.5 We are still working towards finalisation of a Park Improvement Plan with David Kyles which will identify future areas of planting as well as proposed new wildflower areas along with relaxed mowing definition."
        }
      </p>

      <ArticleGallery
        columns={2}
        images={[
          {
            src: photo('ProjRepNov26_4.jpg'),
            alt: 'Volunteer digging beside a young tree',
          },
          {
            src: photo('ProjRepNov26_5.jpg'),
            alt: 'Volunteers among newly planted trees on the Links',
          },
        ]}
      />

      <h3>{"2.0 WILDFLOWER MEADOWS"}</h3>
      <h3>{"2.1 Log House wildflower meadow by Muriel Spark Walk."}</h3>
      <p>
        {
          "After a good season with a lot of variety and pollinators in abundance volunteers cut and raked the roped off meadow. The new border adjacent to the south fence was full of yellow rattle which certainly suppressed the grass but also limited wildflower growth. We are hopeful that next spring will see many more wildflowers doing well."
        }
      </p>
      <p>
        {
          "A big thank you to all the hard working volunteers who spent a lot of time maintaining the meadow."
        }
      </p>
      <p>
        {
          "Most wildflower and unmown areas have now been cut and raked. Bulbs and perennial plugs including red campion and betony have been recently planted"
        }
      </p>

      <ArticleGallery
        columns={2}
        images={[
          {
            src: photo('ProjRepNov26_7.jpg'),
            alt: 'Volunteers cutting and raking the wildflower meadow',
          },
          {
            src: photo('ProjRepNov26_9.jpg'),
            alt: 'Volunteer working in tall meadow grass',
          },
          {
            src: photo('ProjRepNov26_11.jpg'),
            alt: 'Wildflowers beside the Log House fence',
          },
          {
            src: photo('ProjRepNov26_12.jpg'),
            alt: 'Volunteers planting along the meadow border',
          },
        ]}
      />

      <h3>{"2.2 LEAMINGTON WALK MEADOW"}</h3>
      <p>{"'Meadow Beside the Meadows'"}</p>
      <p>
        {
          "1). FOMBL and other volunteers spent many hours removing Fat Hen in 2025 that came in with the agricultural topsoil used at the preliminary establishment of the 4000 sqm metre extension to the existing (now 9 years old) 400 sq.m Wildflower meadow. We expected maybe 5% might come back in 2026 but very happily there was very very little return of this agricultural weed. Dock and thistle however did flourish as you would expect on a newly created site and there has been much dock removal by hand during the year."
        }
      </p>
      <p>
        {
          "2).This led to one area (southern edge area) being mown by the council earlier in the year to create an area into which could be put the remaining 1500 plug plants grown by "
        }
        <a href="https://www.perthshirewildlife.co.uk/celticawildflowers">
          {"www.perthshirewildlife.co.uk/celticawildflowers"}
        </a>
        {
          " from Scotia seed stock and paid for by the council. This was achieved mostly by council staff in October. The entire site will get its annual cut and uplift using new council machines as usual in early November noting that the nectar sources of this mostly perennial urban pollinator wildflower meadow mix are designed to provide a food source continuously between the start of April and the end of October."
        }
      </p>
      <p>{"Tim Duffy"}</p>

      <ArticleFigure
        className="article-figure--wide"
        src={photo('ProjRepNov26_14.jpg')}
        alt="Leamington Walk wildflower meadow"
        caption="Photo by Graeme Gainey of Beautiful Edinburgh"
      />

      <h3>{"3.0 BIRD BOXES"}</h3>
      <p>
        {
          "Every year Keith Gifford and helpers erect 21 bird boxes  of which 16 are in the Meadows and Links. At the end of the nesting season in October he takes down all the boxes, notes the content and cleans them out. The success rate was 80% this year and the birds nesting were tits (blue and great)."
        }
      </p>
      <p>
        {
          "This is a fantastic success. We are particularly pleased with the 7 new boxes fixed to trees around the new tree and bush planting alongside Bruntsfield Place. We hope the new arrivals will feed off the insects, berries etc when the new trees and bushes are taller as tits prefer to feed above the ground."
        }
      </p>
      <p>
        {
          "Boxes donated by Rebel PT, an outdoor fitness group who use the Meadows for group training, and Crags Yoga, a group of like minded outdoor and yoga enthusiasts. Timber used is a sustainable Larch from the Borders kindly donated by Abbey Timber of Abbey St.Bathans, Duns."
        }
      </p>

      <div className="report-split report-split--narrow-image">
        <ArticleFigure
          src={photo('ProjRepNov26_16.jpg')}
          alt="Blue tit"
          caption="Photo of blue tit by jggrz on Pixabay"
        />
        <div className="report-split-copy">
          <p>
            {
              "Tits eat mostly small insects and spiders, especially caterpillars, with seeds and fruit in autumn and winter. Most of their animal prey is about 1 cm long: caterpillars (above all those of tortrix moths), aphids, flies, beetles, bugs, earwigs, springtails, ants, spiders, snails and even ticks."
            }
          </p>
          <p>
            {
              "Their diet is far more varied than it looks. DNA from the droppings of blue tits in Scottish woods before nesting turned up 432 likely food items, most of them rare; moths and butterflies were the commonest and most varied group of prey, and the menu got richer as spring went on."
            }
          </p>
        </div>
      </div>

      <ArticleGallery
        columns={3}
        images={[
          {
            src: photo('ProjRepNov26_17.jpg'),
            alt: 'Bird box on a tree',
            caption: 'Photos by Keith Gifford',
          },
          {
            src: photo('ProjRepNov26_18.jpg'),
            alt: 'Bird boxes laid out for cleaning',
          },
          {
            src: photo('ProjRepNov26_19.jpg'),
            alt: 'Volunteers installing a bird box',
          },
        ]}
      />

      <h3>{"4.0 FUTURE PLANTING  and Park Improvement plan"}</h3>
      <p>
        {
          "4.01 In collaboration with David Kyles (CEC SE Parks and Greenspace Officer) FoMBL tree group has helped to prepare a Park Improvement Plan which will form the basis of future planting including trees and hedgerow /copse areas. The plan will also include restricted mowing areas, identification of proposed new wildflower areas, path improvements and other park enhancements."
        }
      </p>
      <p>{"A completed draft for comment will be circulated to members."}</p>
      <p>
        {
          "4.02 CEC Forestry have agreed to plant 80 new trees along two paths leading to the tennis courts as well as an apple orchard in an area south of the playground. We have had details of the proposed species and it is expected FoMBL will be fully involved in maintaining these trees. Watering in the spring will be critical and we will make use of the water tap newly installed at the east toilets although another water toby nearer the new planting will be requested."
        }
      </p>
      <p>
        {
          "4.03 A thorough survey of dead trees (due mostly to lack of watering) has been carried out by Alistair Cant. Ian Morrison of CEC Forestry has agreed to us planting replacement trees. We have now identified preferred tree species and await approval from Ian Morrison."
        }
      </p>

      <h3>{"5.0. WORKING WITH LOCAL CHILDREN"}</h3>
      <p>
        {
          "FoMBL volunteers hope to continue to work closely with teachers and pupils from James Gillespie's school. There also have been several excellent work groups from scouts."
        }
      </p>
      <p>
        {
          "We in turn have helped to establish a new planting area within the school grounds and helped to install more wooden benches."
        }
      </p>
      <p>
        {
          "The school's Gaelic teacher has now joined our committee along with ecologist Charlie McQueen who can work together to hopefully reinforce the link with children and outdoor learning experience in the park."
        }
      </p>

      <ArticleGallery
        columns={3}
        images={[
          {
            src: photo('ProjRepNov26_20.jpg'),
            alt: 'Children planting with volunteers',
          },
          {
            src: photo('ProjRepNov26_21.jpg'),
            alt: 'Young tree with a protective guard',
          },
          {
            src: photo('ProjRepNov26_22.jpg'),
            alt: 'Group planting day with local children',
          },
        ]}
      />

      <div className="report-split report-split--narrow-image">
        <ArticleFigure
          src={photo('ProjRepNov26_23.jpg')}
          alt="New tree and bulb planting along North Meadow Walk"
        />
        <div className="report-split-copy">
          <p>{"New tree and bulb planting along side of North Meadow Walk"}</p>
          <p>{"Bulbs include bluebell, anemone and snowdrops"}</p>
          <ArticleFigure
            src={photo('ProjRepNov26_25.jpg')}
            alt="Close-up of planted bulbs and foliage"
          />
        </div>
      </div>

      <h3>{"6 COPSE MAINTENANCE"}</h3>
      <p>
        {
          "The 6 copse areas on the links require regular maintenance including cutting back bushes, mulching, removing last of the protective sleeves and hammering in protective posts. Recently we have planted bulbs along the perimeter."
        }
      </p>

      <ArticleGallery
        columns={2}
        images={[
          {
            src: photo('ProjRepNov26_26.jpg'),
            alt: 'Volunteers maintaining a Links copse',
          },
          {
            src: photo('ProjRepNov26_27.jpg'),
            alt: 'Volunteers mulching and planting at a copse',
          },
        ]}
      />

      <h3>{"7.0  PLAYGROUNDS"}</h3>
      <p>{"Links playground (near Croquet Pavilion and Melville Drive)"}</p>
      <p>
        {
          "The new equipment continues to be a success especially for younger children. Feedback from the public has been positive."
        }
      </p>
      <p>
        {
          "FoMBL plan to suggest the installation of additional equipment in the vacant space to east of the snakes and ladders picnic table."
        }
      </p>

      <ArticleFigure
        className="article-figure--wide"
        src={photo('ProjRepNov26_29.jpg')}
        alt="Links playground"
      />

      <h3>{"8.0 TABLE-TENNIS TABLE AT THE LINKS"}</h3>
      <div className="report-split report-split--wide-image">
        <ArticleFigure
          src={photo('ProjRepNov26_31.jpg')}
          alt="Table-tennis table at the Links"
        />
        <div className="report-split-copy">
          <p>
            {
              "The new table-tennis table continues to be a great success with players of all ages observed having fun on most days of the week. The Black Ivy hotel (who contributed to the cost) let out bats and balls. A plaque will be fitted in due course to acknowledge the support given by local businesses"
            }
          </p>
        </div>
      </div>

      <h3>{"9.0 EXTERNAL VOLUNTEERS"}</h3>
      <p>
        {
          "There has been an increase in external (to FoMBL) groups volunteering to do work for us."
        }
      </p>
      <p>
        {
          "9.1 GoodGym group have carried out two very successful sessions on the Links. Many of these young volunteers run all the way from Leith and then do two hours hard work."
        }
      </p>
      <p>{"Recently they planted bulbs, removed creeping thistles and spread mulch."}</p>

      <ArticleGallery
        columns={2}
        images={[
          {
            src: photo('ProjRepNov26_32.jpg'),
            alt: 'GoodGym volunteers with a wheelbarrow',
          },
          {
            src: photo('ProjRepNov26_33.jpg'),
            alt: 'GoodGym volunteers working at dusk',
          },
          {
            src: photo('ProjRepNov26_34.jpg'),
            alt: 'GoodGym volunteers posing with wheelbarrows',
          },
          {
            src: photo('ProjRepNov26_35.jpg'),
            alt: 'GoodGym volunteers with bulk bags of mulch',
          },
        ]}
      />

      <h3>{"9.2 44th BRAID SCOUT GROUP"}</h3>
      <p>
        {
          "This group of up to 20 scouts have done a lot of work on the Links and recently helped to spread mulch over copse planting —this group hopes to help on a regular basis."
        }
      </p>

      <div className="report-split report-split--narrow-image">
        <ArticleFigure
          src={photo('ProjRepNov26_38.jpg')}
          alt="The Dirty Weekenders student volunteers"
        />
        <div className="report-split-copy">
          <h3>{"9.3 THE DIRTY WEEKENDERS"}</h3>
          <p>
            {
              "This wonderful group of well organised students (40-50) have done two sessions for us and were going to come again on 25th October but an amber warning meant they had to cancel. We hope they can come again next year."
            }
          </p>
        </div>
      </div>

      <h3>{"10.0 FoMBL volunteers with Alison Carr"}</h3>
      <p>
        {
          "Alison continues to run the volunteer sessions from the Pavilion Cafe on the last Saturday of every month. Her volunteers carried out a huge amount of beneficial work including dock removal, leaves/grass/weed removal, litter picking, graffiti removal, watering, removal of unwanted growth along railings and at benches, etc."
        }
      </p>
      <p>
        {
          "There is a hard core of dedicated regular volunteers as well as some newer enthusiastic volunteers. New posters are required to be made to advertise the workday more effectively."
        }
      </p>

      <ArticleFigure
        className="article-figure--wide"
        src={photo('ProjRepNov26_37.jpg')}
        alt="FoMBL volunteers with Alison Carr at the Nelson Pillars"
      />

      <h3>{"11.0 NEW TOILETS at Middle Meadow Walk"}</h3>
      <p>
        {
          "Unfortunately there have been many problems regarding the new toilets and many meetings and discussions have been held with ourselves, Thriving Green Space and local councillors to try and resolve ongoing issues."
        }
      </p>
      <p>
        {
          "Initially we proposed that a mural artist could be employed to paint the east wall which has been continuously graffitied and high quality art has been shown not to attract graffiti ‘artists'."
        }
      </p>
      <p>
        {
          "Because the walls and door frames were damaged 7 months ago and still not repaired it was agreed that there was no point in employing an artist (£4000) when the walls could easily be damaged again. The following actions have been proposed:"
        }
      </p>
      <p>
        {
          "1.Invite student artists from local Art college to paint the wall as part of their training —this could be done every year with awards given and judged by local people."
        }
      </p>
      <p>
        {
          "2.Invite school children from local schools to paint a mural as part of their art classes —again could be done every year"
        }
      </p>
      <p>
        {
          "3.Invite well known high quality graffiti artists to paint a mural to a theme —again every year"
        }
      </p>

      <ArticleGallery
        columns={2}
        className="article-gallery--uneven"
        images={[
          {
            src: photo('ProjRepNov26_39.jpg'),
            alt: 'Damaged panel on the Middle Meadow Walk toilets',
          },
          {
            src: photo('ProjRepNov26_40.jpg'),
            alt: 'Middle Meadow Walk toilets with graffiti mural',
          },
        ]}
      />

      <h3>{"12.0 HISTORY PANELS PROJECT"}</h3>
      <p>
        {
          "Neil Roger and Graeme Cruickshank have been working on this project with Edinburgh World Heritage for 7 years. Unfortunately we have not been sent an update of the latest panel designs, since the last meeting held in April 2025, FoMBL committee have agreed that unless we are included in the process we will withdraw all funding."
        }
      </p>

      <ArticleGallery
        columns={2}
        images={[
          {
            src: photo('ProjRepNov26_42.jpg'),
            alt: 'Map of the Meadows showing proposed panel locations',
          },
          {
            src: photo('ProjRepNov26_41.jpg'),
            alt: 'Draft Nelson Pillars history panel design',
          },
        ]}
      />

      <h3>{"13.0 TOURIST VISITOR LEVY (TVL) FUNDING FOR PARKS"}</h3>
      <p>
        {
          "Following a meeting with Councillor Ben Parker, he has provided this information on future funding for the Meadows and Bruntsfield Links."
        }
      </p>
      <p>{"How much funding from TVL is going into premier parks in the city?"}</p>
      <p>
        {
          "£9.5m allocated to Premier Parks for development and £918,000 sustain (running costs) funding, with an additional £1m for Water of Leith and £1m for development of Nature Pathways. The £918k sustain figure contributes to 50% of the cost to Princes Street Gardens and 10% of the remaining parks budget."
        }
      </p>
      <p>
        {
          "How much funding from TVL is going into the Meadows and Bruntsfield Links specifically?"
        }
      </p>
      <p>{"£1.5m is allocated for 2028/29 investment"}</p>
      <p>
        {"How much funding is going into routine maintenance in parks / greenspace from TVL?"}
      </p>
      <p>
        {
          "There is £431,000 this year and then £575,000 each year after that towards Parks Management, which supports new rangers across the city and contributes to repairs, this is on top of the sustain allocation."
        }
      </p>
      <p>
        {
          "What does this funding actually deliver (e.g. new environmental wardens)? The link provides further details for all Premier Parks (the summary went to Culture and Communities Committee in February): Item 7.1 - Edinburgh Visitor Levy - City Operations and Infrastructure Investment - Appendix 3.pdf"
        }
      </p>
      <p>{"Neil Roger"}</p>

      <p>
        <strong>{"14.0 JIM ORR"}</strong>
        {
          " resigned as our chair in August and Joan Carter and Neil Roger are acting as co-chairs until we can find a permanent replacement."
        }
      </p>
      <p>
        {
          "Jim has contributed a huge amount to FoMBL, over many years, chairing meetings, and carrying out the many administrative tasks required when running a charity. He also put a huge amount of effort into planning and helping to install two table tennis tables, which have been a great success."
        }
      </p>
      <p>{"Trustees would like to thank him for all the work he has done."}</p>

      <h3>{"15.0  PLANNED AND PROPOSED FUTURE PROJECTS"}</h3>
      <p>
        {
          "1.Prepare a 5 year park improvement plan in conjunction with David Kyles to include proposed areas of hedgerow/copse planting throughout the Meadows and Bruntsfield Links."
        }
      </p>
      <p>{"2.Continue to maintain and plant new trees including watering"}</p>
      <p>{"3.Spread wood chip on muddy paths and at base of younger trees."}</p>
      <p>{"4.  Maintain wildflower meadows and plant and seed for summer growth"}</p>
      <p>{"5. Add more exercise equipment to augment existing"}</p>
      <p>
        {
          "6. Increase the areas of wildflower areas depending on volunteer resources and overall approved management plan."
        }
      </p>
      <p>
        {
          "7. Design and install (method to be agreed) tree name plaques for rarer specimens."
        }
      </p>
      <p>
        {
          "8. Organise refurbishment of wooden benches and installation of new ones where agreed with CEC."
        }
      </p>
      <p>
        {
          "9. When time permits organise the installation of additional play and exercise equipment subject to CEC approval."
        }
      </p>
      <p>{"10. Work with DK on provision of new basketball court/practice net."}</p>
      <p>{"11. Agree supply and locations for new picnic tables."}</p>
      <p>{"12. Organise external volunteers for larger scale work"}</p>
      <p>{"13. Paint rusting railings"}</p>

      <p>{"Neil Roger 8/11/2026.  projects@fombl.org.uk"}</p>
    </section>
  )
}
