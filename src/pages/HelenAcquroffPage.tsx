import { ArticleFigure } from '../components/ArticleFigure'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function HelenAcquroffPage() {
  usePageTitle('Helen Acquroff Fountain')

  return (
    <>
      <PageHero
        title="Helen Acquroff Fountain"
        lede="The memorial drinking fountain to Helen Acquroff, Sister Cathedral."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section has-sticky-titles prose-page">
        <p className="intro">Helen Acquroff (12 October 1831 – 18 September 1887) was a musician, pianist, music teacher, singer and poet who was born and lived in the Newington area of Edinburgh. She was involved in the Temperance Movement.</p>

        <ArticleFigure
          src={resolveHref('images/history/HA-Fountain.jpg')}
          alt="The memorial drinking fountain to Helen Acquroff on the Meadows"
          caption="The memorial drinking fountain to Helen Acquroff on the Meadows"
        />

        <SectionBlock heading="Biography">
          <p>Helen was the second eldest of ten children: Elizabeth (born 1830), Mary Ann (1833), Thomson Paul (1834), Alexander Fletcher (1836), Ann Paul (1838), John (1839), Susan Carter (1842), Sophia Sarah (1843), and Robert Wingfield (1846). Their parents were John Acquroff (1795), a Russian hairdresser born in St Petersburg (a naturalised British subject) and Sophia Campbell Fletcher (22 May 1808) from Ardelach, Nairn. They married in 1829.</p>
          <p>Helen was visually impaired from birth and became totally blind when she was 11 years old. She attended the Blind Asylum School, which at that time would have been located at Nicolson Street, and she later taught there.</p>
          <p>At the time of the 1841 Census the family were living at 8 Meuse Lane. She remained unmarried but had a son, James, born on 2 August 1862 at 20 Rose Street in Edinburgh. In 1871 Helen was living with her parents and son at 26 South Richmond Street and in 1881, after her father’s death, she was living with her mother and her son, then an unemployed hairdresser, at 41 Clerk Street. Helen died of nephritis at 51 Clerk Street, aged 55.</p>
        </SectionBlock>

        <SectionBlock heading="Temperance Movement">
          <p>Helen sang in concert halls and theatres in Edinburgh and across Scotland, being particularly involved in the Temperance Movement. She adopted the name Sister Cathedral (initially Sister Helen Acquroff), as well as a humorous irreverent style. The name Cathedral was given to her after an address for Glasgow Cathedral was published, warning people of Glasgow of the perils of intemperance. In One Hundred Modern Scottish Poets it states, “A GREAT blank was caused in temperance circles throughout Scotland by the death, in September 1887, of Miss Helen Acquroff the talented and popular blind lady advocate of their cause.”</p>
        </SectionBlock>

        <SectionBlock heading="Poetry">
          <p>As well as in One Hundred Modern Scottish Poets: with biographical and critical notices, Helen is mentioned in Working-Class Women Poets in Victorian Britain: An Anthology. She wrote songs, hymns, temperance music and poems, some of which appear in Good Templar Songs, published in 1872. They include Polly Hopkins, Sabbath School Song, The Swiss Girl, When We Were Bairns Thegither, and The Reformed Drunkard To His Wife.</p>
        </SectionBlock>

        <SectionBlock heading="Memorial">
          <p>The marble memorial drinking fountain to Helen has recently been restored by FoMBL. It is situated near the junction of Jawbone and Coronation Walks on the west side of the path, inside railings, near the Pavilion at the Meadows, Melville Drive.</p>
          <blockquote className="inscription">
            <span>IN MEMORIAM<br /></span>
            <span>HELEN ACQUROFF SISTER CATHEDRAL<br /></span>
            <span>1889<br /></span>
            <span>ERECTED BY MEMBERS OF THE IOGT<br /></span>
            <span>AND OTHER FRIENDS<br /></span>
          </blockquote>
          <p>The IOGT were the Independent Order of Good Templars. A descendant on the Ancestry.com “Acquroff name” page states, “I was in Edinburgh a couple of weeks ago and went past the ‘family birdbath’ (actually it used to be a fountain dedicated to Helen Acquroff, but the dolphin fountain disappeared years ago).” It would be wonderful if someone could find the missing dolphin tap, possibly lying unidentified somewhere on council premises or elsewhere.</p>
        </SectionBlock>

        <SectionBlock heading="When We Were Bairns Thegither" id="poem">
          <div className="poem-columns">
            <pre className="verse">{`It’s forty years, my ain gudeman.
Since I was made your wife;
An’ nane in a’ this warld can say
But [?] we’ve led a happy life.
But ah, waes me, it’s sixty year
Since we kent ane anither
For hand in hand we gaed to schule
When we were bairns thegither.

When we were bairns, happy, happy bairns,
When we were bairns thegither;
For hand in hand we gaed to schule
When we were bairns thegither.

An’ mony a time ye focht for nae,
Wi’ big red-headed Jock,`}</pre>
            <pre className="verse">{`An’ brocht me turnips, peas, an’ beans.
Snaps, muffins, pies, an’ rock;
For if ye hadna ae fine thing.
Ye were sure to hae anither ;
Baith kind an’ guid you’ve been to me
Since we were bairns thegither.

I used to greet ilk time ye got
A palmy at the schule,
An’ then the maister turned on me
An’ ca’d me a great fule;
An’ when I think on a’ the flights
We baith got frae my mither,
Hech, man, it seems like half-an-hour
Since we were bairns thegither.`}</pre>
          </div>
        </SectionBlock>

        <p className="credit">
          <em>Margaret Ferguson Burns</em>
        </p>
      </div>
    </>
  )
}
