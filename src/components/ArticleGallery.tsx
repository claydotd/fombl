type Image = {
  src: string
  alt: string
  caption?: string
}

type Props = {
  images: readonly Image[]
  pair?: boolean
  tiles?: boolean
}

export function ArticleGallery({ images, pair = false, tiles = false }: Props) {
  const className = [
    'article-gallery',
    pair ? 'article-gallery--pair' : null,
    tiles ? 'article-gallery--tiles' : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <ul className={className}>
      {images.map((image) => (
        <li key={image.src}>
          <figure className="article-figure">
            <img src={image.src} alt={image.alt} title={image.caption ?? image.alt} />
            {!tiles && image.caption ? <figcaption>{image.caption}</figcaption> : null}
          </figure>
        </li>
      ))}
    </ul>
  )
}
