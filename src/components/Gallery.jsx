import GalleryCard from './GalleryCard'

export default function Gallery({ items }) {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <GalleryCard
          key={index}
          imgUri={item.uri}
          altText={item.alt}
          caption={item.caption}
          citation={item.citation}
          color={item.color}
        />
      ))}
    </div>
  )
}
