type Image = {
  src: string
  alt: string
  caption?: string
}

type Props = {
  images: readonly Image[]
  pair?: boolean
  tiles?: boolean
  /** Fixed column count that keeps natural image aspect ratios (for report layouts). */
  columns?: 2 | 3
  className?: string
}

export function ArticleGallery({
  images,
  pair = false,
  tiles = false,
  columns,
  className,
}: Props) {
  const classes = [
    'article-gallery',
    pair ? 'article-gallery--pair' : null,
    tiles ? 'article-gallery--tiles' : null,
    columns === 2 ? 'article-gallery--cols-2' : null,
    columns === 3 ? 'article-gallery--cols-3' : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ul className={classes}>
      {images.map((image) => (
        <li key={image.src}>
          <figure className="article-figure">
            <img
              src={image.src}
              alt={image.alt}
              title={image.caption ?? image.alt}
              loading="lazy"
              decoding="async"
            />
            {!tiles && image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        </li>
      ))}
    </ul>
  )
}
