// From the legacy Meadows Mural pages (Mural/*.webarchive).

export type MuralTone = 'green' | 'magenta' | 'blue' | 'orange'

export type MuralPoemLine = {
  text: string
  italic?: boolean
  script?: boolean
}

export type MuralExploreLink = {
  href: string
  label: string
}

export const mural = {
  slug: 'mural',
  title: 'Mural on the Meadows',
  artworkTitle: 'Processions',
  blurb:
    'A five-panel mural by artist Astrid Jaekel with words by Rachel Woolf, at the junction of Middle Meadow Walk and North Meadow Walk.',
  panels: [
    {
      thumb: 'Mural-1s.jpg',
      full: 'Panel 1.jpg',
      alt: 'Meadows mural panel 1',
      label: 'Panel 1',
    },
    {
      thumb: 'Mural-2s.jpg',
      full: 'Panel 2.jpg',
      alt: 'Meadows mural panel 2',
      label: 'Panel 2',
    },
    {
      thumb: 'Mural-3s.jpg',
      full: 'Panel 3.jpg',
      alt: 'Meadows mural panel 3',
      label: 'Panel 3',
    },
    {
      thumb: 'Mural-4s.jpg',
      full: 'Panel 4.jpg',
      alt: 'Meadows mural panel 4',
      label: 'Panel 4',
    },
    {
      thumb: 'Mural-5s.jpg',
      full: 'Panel 5.jpg',
      alt: 'Meadows mural panel 5',
      label: 'Panel 5',
    },
  ],
  reviewUrl: 'https://augustakirkwood.wordpress.com/2014/12/06/astrid-jaekels-meadow-murals/',
  sparkExtract: {
    lines: [
      'They were crossing the Meadows, a gusty expanse of common land,',
      'glaring green under the snowy sky. Their destination was the Old Town,',
      'for Miss Brodie had said they should see where history had been lived; and',
      'their route had brought them to the Middle Meadow Walk. Eunice,',
      'unaccompanied at the back, began to hop to a rhyme which she repeated',
      'to herself:',
      '‘Edinburgh, Leith,',
      'Portobello, Musselburgh',
      'And Dalkeith.’',
    ],
    credit: 'Extract from The Prime of Miss Jean Brodie by Muriel Spark (1961)',
  },
  poem: {
    title: 'A Throng of Folk',
    credit:
      'Specially written poem by Rachel Woolf, including an extract from “O Wert Thou in the Cauld Blast” by Robert Burns',
    stanzas: [
      {
        tone: 'green' as MuralTone,
        lines: [
          'CELEBRATION ON THE MEADOWS',
          'on every walk a throng of folk',
          'BOYS BRIGADE bugles played',
          'MIDDLE MEADOW',
          'archers vie for a silver arrow',
          'CORONATION Queen of the May',
          'JAWBONE, JAWBONE',
          'canopy of the May Queen’s throne',
          'BOYS BRIGADE, MIDDLE MEADOW,',
          'CORONATION, JAWBONE',
        ],
      },
      {
        tone: 'magenta' as MuralTone,
        lines: [
          'CORONATION, GRAND OCCASION',
          'May Queen crowned with cherry blossom',
          'A pair of piping unicorns lead her carnival procession',
          'Fiddle-playing swallows follow',
          {
            text: 'with “The White Cockade” and “Strip the Willow”',
            italic: true,
          },
          'Magpies play accordion',
          { text: 'as “Heather’s Jig” is danced with vigour', italic: true },
          'BOYS BRIGADE, MIDDLE MEADOW',
          'HIGH JINKS ON BRUNTSFIELD LINKS',
        ] as Array<string | MuralPoemLine>,
      },
      {
        tone: 'blue' as MuralTone,
        lines: [
          'CELEBRATION ON THE MEADOWS',
          'on every walk a throng of folk',
          'BOYS BRIGADE daylight fades',
          'MIDDLE MEADOW',
          'home to roost go jet-winged crows',
          'CORONATION a dew-drop ring',
          'a rowan for fortune, and',
          'the crescent moon threaded',
          'with clarsach strings',
          'JAWBONE, JAWBONE',
          'recitation of a Rabbie Burns poem',
          'BOYS BRIGADE, MIDDLE MEADOW,',
          'CORONATION, JAWBONE',
        ],
      },
      {
        tone: 'orange' as MuralTone,
        lines: [
          'HURDY-GURDY, STEELPAN BAND,',
          'BALALAIKA, CLARSACH',
          '',
          {
            text: '“O wert thou in the cauld blast, on yonder lea',
            italic: true,
          },
          {
            text: 'My plaidie to the angry airt, I’d shelter thee',
            italic: true,
          },
          '',
          {
            text: 'Or were I Monarch o’ the globe, wi’ thee to reign',
            italic: true,
          },
          {
            text: 'The brightest jewel in my Crown wad be my Queen”',
            italic: true,
          },
          '',
          'BOYS BRIGADE, MIDDLE MEADOW,',
          { text: 'CORONATION, CEILIDH!', script: true },
        ] as Array<string | MuralPoemLine>,
      },
    ],
  },
  explore: [
    {
      id: 'walks',
      heading: 'The Meadows walks',
      tone: 'green' as MuralTone,
      items: [
        {
          title: 'Boys Brigade Walk',
          text: 'Set out in 1954 as part of the centenary celebrations honouring the birth of Boys Brigade founder Sir William A Smith in 1854. There was a ceremony when 75 trees were planted by Boys Brigade members.',
        },
        {
          title: 'Middle Meadow Walk',
          text: 'The first of the Meadow walks, set out by Sir Thomas Hope when the parkland was created out of a boggy loch. A contemporary letter praises it as standing comparison to London: “Mr Hope has beautified the meadow wonderfully and made it another St James’s Park.”',
        },
        {
          title: 'Coronation Walk',
          text: 'Commemorates the coronation of George VI in 1937.',
        },
        {
          title: 'Jawbone Walk',
          text: 'Named after the iconic arch at the Melville Drive end of the path. The whalebones date back to the 1886 Exhibition, where the Zetland and Fair Isle knitters showcased their work by draping it on the jawbones which formed their stand.',
        },
      ],
    },
    {
      id: 'characters',
      heading: 'Some characters',
      tone: 'magenta' as MuralTone,
      items: [
        {
          title: 'An archer',
          text: 'Honours the Royal Company of Archers, which has held its annual tournament in the Meadows for the past 300 years.',
        },
        {
          title: 'A golfer',
          text: 'A tribute to the Bruntsfield Links Golfing Society, active for almost as long.',
        },
        {
          title: 'A nineteenth-century knitting lady',
          text: 'From Shetland, referring to the history of the Jawbone Arch.',
        },
        {
          title: 'The cow',
          text: 'In the frame on Middle Meadow Walk, as Miss Brodie leads the girls into the Old Town, a symbol of the cattle market that used to take place where Edinburgh College of Art now stands.',
        },
        {
          title: 'Sheep',
          text: 'Sheep used to graze on the Meadows.',
        },
      ],
    },
    {
      id: 'folklore',
      heading: 'Folklore',
      tone: 'blue' as MuralTone,
      items: [
        {
          title: 'The May Queen',
          text: 'A figure with the qualities of a goddess of spring when the flowering cherry trees on the Meadows are at their loveliest.',
        },
        {
          title: 'The dew-drop ring',
          text: 'Refers to the belief that to wash your face in dew on the 1st of May promises a beautiful complexion for the whole year.',
        },
        {
          title: 'A rowan for fortune',
          text: 'The rowan tree is thought to ward off bad luck and bring good fortune.',
        },
        {
          title: 'The crescent moon threaded with clarsach strings',
          text: 'An addition to the folklore of the magical 1st of May on the Meadows and Bruntsfield Links.',
        },
      ],
    },
    {
      id: 'music',
      heading: 'Music',
      tone: 'orange' as MuralTone,
      items: [
        {
          title: 'Piping unicorns',
          text: 'The stone unicorns atop pillars at the north end of Middle Meadow Walk date back to the 1886 exhibition and have stood guard ever since.',
        },
        {
          title: 'The White Cockade',
          text: 'A song by Robert Burns set to a tune dating back to the 1600s.',
          links: [
            {
              href: 'https://fombl.org.uk/Mural/White%20Cockade.html',
              label: 'Read the poem here',
            },
            {
              href: 'http://www.bbc.co.uk/arts/robertburns/works/the_white_cockade/',
              label: 'Listen to the poem here',
            },
            {
              href: 'http://www.youtube.com/watch?v=-v3qM24EwVI',
              label: 'A vintage performance by the Corries',
            },
          ] as MuralExploreLink[],
        },
        {
          title: 'Strip the Willow',
          text: 'A popular and energetic ceilidh dance.',
          links: [
            {
              href: 'http://www.bbc.co.uk/programmes/p01n4n1l',
              label: 'Here is how it goes',
            },
          ] as MuralExploreLink[],
        },
        {
          title: 'Heather’s Jig',
          text: 'Named for Heather Goodare, who steered the mural project. Composed by Malcolm Goodare and premiered by Fiddlers on the Ramp at the mural launch on 22 September 2014.',
          audio: {
            src: "FOTR_Heather's_Jig.mp3",
            label: 'Hear Heather’s Jig',
          },
        },
        {
          title: 'Hurdy-gurdy',
          text: 'A medieval English musical instrument.',
          links: [
            {
              href: 'http://www.youtube.com/watch?v=r4y7HNW972M',
              label: 'See and hear it here',
            },
          ] as MuralExploreLink[],
        },
        {
          title: 'Clarsach',
          text: 'The Celtic harp.',
          links: [
            {
              href: 'http://www.youtube.com/watch?v=UoNb3_6TvqU',
              label: 'See and hear it here',
            },
          ] as MuralExploreLink[],
        },
        {
          title: 'Ceilidh',
          text: 'A social event with a band, Scottish country dancing, poetry and song — and instruments from hurdy-gurdy and steelpan to balalaika and clarsach.',
        },
      ],
    },
  ],
  interviews: [
    {
      id: 'heather',
      name: 'Heather Goodare',
      role: 'Then Convener of FoMBL, the chief sponsor of the mural project',
      items: [
        {
          q: 'What was your reaction when you saw the mural finished and in place?',
          a: 'I was just so pleased to see it. It was quite a complicated task, fitting together all the pieces in the jigsaw; finding the funding, getting agreement and co-operation from all the participants in the work — the artist, the poet, the printers, the owners of the wall, the Council’s park officers, and finally, the teachers and children from James Gillespie’s Primary School. It is something we can be really proud of.',
        },
        {
          q: 'Where did the idea for the mural come from?',
          a: 'Scottish Power, the City of Edinburgh Council and FoMBL were all concerned at the upkeep and visual appearance of the site. The Council had suggested the use of advertising hoardings to “brighten it up”. FoMBL wanted to find a much more imaginative solution. At the same time, students from the School of Art came along to a South Central Neighbourhood Partnership meeting suggesting that artwork on the Meadows might be an interesting thing to encourage. We took the bait.',
        },
        {
          q: 'How did you gather the necessary permissions and funding?',
          a: 'South Central Neighbourhood Partnership awarded us a grant that covered half the cost. Edinburgh Evening News made a contribution and the balance was funded by Scottish Power, who own the walls and kindly gave their consent.',
        },
        {
          q: 'How will the mural involve the local community and visitors?',
          a: 'The mural depicts local landmarks, some of which date back to the International Exhibition of Industry, Science and Art, housed in a huge pavilion on the Meadows in 1886. I hope it will encourage the local community and visitors to explore further and that it will, in its turn, become a landmark, enhancing the cultural amenity of the area.',
        },
      ],
    },
    {
      id: 'astrid',
      name: 'Astrid Jaekel',
      role: 'The artist who devised the design and artwork of the Meadows Mural.',
      items: [
        {
          q: 'What drew you to this project?',
          a: 'I studied at Edinburgh College of Art, and I am a keen cyclist, so the Meadows quickly became a place of great value to me. In the course of sketching and researching I found it is so much more than just a delightful green space. It has a vivid history to draw inspiration from.',
        },
        {
          q: 'How did you set out to illustrate the words woven into your design?',
          a: 'I have used paper-cut work for a number of public art installations. A starting point is to bring the stories the words are telling to life, but I also like to add my own interpretation. Word and image can bring each other to life without being identical in every way, and I want my illustrations to add a sense of discovery for the viewer and passer-by.',
        },
        {
          q: 'What were the key decisions you had to make?',
          a: 'Practically, I had to decide on how to use the site most effectively. Artistically, I needed to decide on the overall atmosphere of the piece and also think about who I wanted it to appeal to. The Meadows brings together people of all ages, including children and students, and I wanted the work to delight as many people as possible.',
        },
        {
          q: 'Why is the May Queen riding a penny-farthing bicycle?',
          a: 'The May Queen represents the students and the cyclists who frequent the park. She is of our time and also of a bygone age. While I wanted to retain a timelessness within the work, I felt that adding some quirky elements hinting at Meadows history would let me create a somewhat surreal collage of times, characters and objects.',
        },
      ],
    },
    {
      id: 'rachel',
      name: 'Rachel Woolf',
      role: 'Wordsmith who devised the textual content of the mural',
      items: [
        {
          q: 'What was your brief?',
          a: 'To provide text which could be interpreted visually and would reflect the history and character of the Meadows and Bruntsfield Links and appeal to the wide variety of folk who use the Meadows as a thoroughfare and a place of recreation.',
        },
        {
          q: 'What was the inspiration for your poem, “A Throng of Folk”?',
          a: 'The names of four of the walks on the Meadows gave me an intriguing starting point. Weaving a story round those names resulted in a fairy tale about the Coronation of the May Queen, focusing on her carnival procession from her Jawbone Throne up Middle Meadow Walk to the stone unicorns from the 1886 exhibition.',
        },
        {
          q: 'Why did you choose the quote from The Prime of Miss Jean Brodie?',
          a: 'I felt that this major piece of public art should draw on some of the great writers who have a connection with the area. Muriel Spark was an obvious choice. I was amazed and delighted to find that she had had the same vision — a child hopping to a chant made up of local place names, and right on Middle Meadow Walk too.',
        },
        {
          q: 'You have also used lines from a Robert Burns poem.',
          a: 'Absolutely. The story is about a great celebration with much music and merrymaking, and in Scotland such an event always includes Burns. It is also reputed that the Bard’s father worked on draining the Burgh Loch some years before the land was eventually drained and set out as a park. I wanted to bring in a bit of romance, and his tender words about love on a windy lea hit the spot.',
        },
      ],
    },
  ],
  launch: {
    heading: 'The Launch Party',
    intro:
      'The mural was launched on 22 September 2014, with Fiddlers on the Ramp premiering Heather’s Jig.',
    photos: [
      {
        file: 'Mural-opening.jpg',
        alt: 'Councillors Jim Orr and Melanie Main with Heather Goodare',
        caption: 'Councillors Jim Orr and Melanie Main with Heather Goodare. Photo: Mags Campbell',
        layout: 'wide',
      },
      {
        file: 'hg-at-mural-launch.jpg',
        alt: 'Heather Goodare at the mural launch',
        caption: 'Heather Goodare, Convener of FoMBL. Photo: Neil Roger',
        layout: 'tall',
      },
      {
        file: 'aj-and-pd-at-mural-launch.jpg',
        alt: 'Astrid Jaekel with Peter Davidson at the mural launch',
        caption: 'Astrid Jaekel, artist, with Peter Davidson, park ranger. Photo: Mags Campbell',
        layout: 'wide',
      },
      {
        file: 'FOTR.jpg',
        alt: 'Fiddlers on the Ramp performing at the mural launch',
        caption:
          'Fiddlers on the Ramp: Rob and Callum on fiddle, Callum also on mandolin; Alistair on banjo, Mark on guitar, and Malcolm on cello',
        layout: 'tall',
        audio: {
          src: "FOTR_Heather's_Jig.mp3",
          label: 'Hear Heather’s Jig',
        },
      },
    ],
  },
  quiz: {
    heading: 'Mural quiz',
    blurb: 'Hunt through all five panels. Collect every find to unlock the next question.',
    to: '/about/mural/quiz',
    // Set true while placing hotspots: outlines every clickable region.
    showHotspots: false,
    questions: [
      {
        id: 'knitter',
        prompt: 'Can you find the Shetland knitter?',
        // Hotspots: percentages of the panel image (left/top/width/height are 0–100).
        // Leave hotspots empty on panels with nothing to find for this question.
        panels: [
          { panel: 1, file: 'Panel 1.jpg', alt: 'Meadows mural panel 1', hotspots: [] },
          { panel: 2, file: 'Panel 2.jpg', alt: 'Meadows mural panel 2', hotspots: [] },
          { panel: 3, file: 'Panel 3.jpg', alt: 'Meadows mural panel 3', hotspots: [] },
          {
            panel: 4,
            file: 'Panel 4.jpg',
            alt: 'Meadows mural panel 4',
            hotspots: [
              {
                id: 'knitter',
                rect: { left: 14, top: 30, width: 7, height: 25 },
                annotation: { label: 'You found the Shetland knitter!' },
              },
            ],
          },
          { panel: 5, file: 'Panel 5.jpg', alt: 'Meadows mural panel 5', hotspots: [] },
        ],
      },
      {
        id: 'trees-birds',
        prompt: 'Which trees and birds are shown on the mural?',
        panels: [
          { panel: 1, file: 'Panel 1.jpg', alt: 'Meadows mural panel 1', hotspots: [] },
          {
            panel: 2,
            file: 'Panel 2.jpg',
            alt: 'Meadows mural panel 2',
            hotspots: [
              {
                id: 'seagull',
                rect: { left: 55, top: 12, width: 8, height: 20 },
                annotation: { label: 'Seagull' },
              },
            ],
          },
          {
            panel: 3,
            file: 'Panel 3.jpg',
            alt: 'Meadows mural panel 3',
            hotspots: [
              {
                id: 'willow',
                rect: { left: 87, top: 68, width: 8, height: 7 },
                annotation: { label: 'Willow' },
              },
              {
                id: 'swallow',
                rect: { left: 28, top: 23, width: 10, height: 18 },
                annotation: { label: 'Swallow' },
              },
            ],
          },
          {
            panel: 4,
            file: 'Panel 4.jpg',
            alt: 'Meadows mural panel 4',
            hotspots: [
              {
                id: 'rowan',
                rect: { left: 3, top: 8, width: 14, height: 46 },
                annotation: { label: 'Rowan' },
              },
              {
                id: 'crow',
                rect: { left: 79, top: 10, width: 16, height: 70 },
                annotation: { label: 'Crows' },
              },
            ],
          },
          {
            panel: 5,
            file: 'Panel 5.jpg',
            alt: 'Meadows mural panel 5',
            hotspots: [
              {
                id: 'horse-chestnut',
                rect: { left: 80, top: 32, width: 6, height: 30 },
                annotation: { label: 'Horse chestnut' },
              },
              {
                id: 'magpie',
                rect: { left: 74, top: 20, width: 16, height: 12 },
                annotation: { label: 'Magpie' },
              },
              {
                id: 'owl',
                rect: { left: 8, top: 10, width: 16, height: 32 },
                annotation: { label: 'Owl' },
              },
            ],
          },
        ],
      },
      {
        id: 'instruments',
        prompt: 'How many names and pictures of musical instruments can you find?',
        panels: [
          { panel: 1, file: 'Panel 1.jpg', alt: 'Meadows mural panel 1', hotspots: [] },
          {
            panel: 2,
            file: 'Panel 2.jpg',
            alt: 'Meadows mural panel 2',
            hotspots: [
              {
                id: 'bugles',
                rect: { left: 27, top: 32, width: 10, height: 18 },
                annotation: { label: 'Bugles' },
              },
            ],
          },
          {
            panel: 3,
            file: 'Panel 3.jpg',
            alt: 'Meadows mural panel 3',
            hotspots: [
              {
                id: 'pipes',
                rect: { left: 15, top: 56, width: 6, height: 10 },
                annotation: { label: 'Pipes' },
              },
              {
                id: 'fiddles',
                rect: { left: 15, top: 67, width: 8, height: 12 },
                annotation: { label: 'Fiddles' },
              },
              {
                id: 'accordion',
                rect: { left: 75, top: 70, width: 11, height: 7 },
                annotation: { label: 'Accordion' },
              },
            ],
          },
          {
            panel: 4,
            file: 'Panel 4.jpg',
            alt: 'Meadows mural panel 4',
            hotspots: [
              {
                id: 'whistle-recorder',
                rect: { left: 36, top: 40, width: 8, height: 10 },
                annotation: { label: 'Whistle or Recorder' },
              },
              {
                id: 'balalaika',
                rect: { left: 45, top: 45, width: 14, height: 20 },
                annotation: { label: 'Balalaika' },
              },
            ],
          },
          {
            panel: 5,
            file: 'Panel 5.jpg',
            alt: 'Meadows mural panel 5',
            hotspots: [
              {
                id: 'steelpan',
                rect: { left: 22, top: 40, width: 17, height: 28 },
                annotation: { label: 'Steelpan' },
              },
              {
                id: 'steelpan',
                rect: { left:40, top: 4, width: 14, height: 8 },
                annotation: { label: 'Steelpan' },
              },
              {
                id: 'clarsach',
                rect: { left: 54, top: 33, width: 11, height: 40 },
                annotation: { label: 'Clarsach' },
              },
              {
                id: 'clarsach',
                rect: { left:68, top: 5, width: 10, height: 8 },
                annotation: { label: 'Clarsach' },
              },
              {
                id: 'whistle-recorder',
                rect: { left: 86, top: 44, width: 8, height: 10 },
                annotation: { label: 'Whistle or Recorder' },
              },
              {
                id: 'hurdy-gurdy',
                rect: { left:24, top: 5, width: 14, height: 8 },
                annotation: { label: 'Hurdy-gurdy' },
              },
            ],
          },
        ],
      },
    ],
  },
} as const

/** Percent box on a panel image. All values are 0–100 relative to the image. */
export type MuralQuizRect = {
  left: number
  top: number
  width: number
  height: number
}

/**
 * Label shown when a hotspot is found.
 * Add `image: { file, alt }` later for picture annotations (files live in images/mural/).
 */
export type MuralQuizAnnotation = {
  label: string
  image?: { file: string; alt: string }
}

export type MuralQuizHotspot = {
  id: string
  rect: MuralQuizRect
  annotation: MuralQuizAnnotation
}
