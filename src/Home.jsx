import { useState } from 'react'

import BusinessCard from './components/BusinessCard'
import ImageSelector from './components/ImageSelector'
import Gallery from './components/Gallery'
import Accordion from './components/Accordion'
import ChatBot from './components/ChatBot'
import DarkModeSwitcher from './components/DarkModeSwitcher'

export default function Home() {
  const [cardInfo, setCardInfo] = useState({
    name: "Ezra Cornell",
    email: "ezra@cornell.edu",
    description: "Ezra Cornell co-founded Cornell University in 1865.",
    image: "/images/cornell-seal-black.svg"
  })

  const galleryItems = [
    {
      uri: "/images/galaxy.webp",
      alt: "an AI generated galaxy",
      caption: "A galaxy",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/asteroid.webp",
      alt: "an AI generated asteroid",
      caption: "An asteroid",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/black-hole.webp",
      alt: "an AI generated black hole",
      citation: "Microsoft Copilot",
      color: "#e58c43"
    },
    {
      uri: "/images/cloud-nebulae.webp",
      alt: "an AI generated cloud nebulae",
      caption: "Cloud nebulae",
      citation: "Microsoft Copilot",
      color: "#9ad2ea"
    },
    {
      uri: "/images/distant-space.webp",
      alt: "an AI generated distant space",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/galaxy-collision.webp",
      alt: "an AI generated galaxy collision",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/moon.webp",
      alt: "an AI generated moon",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/pulsar.webp",
      alt: "an AI generated pulsar",
      caption: "A pulsar",
      citation: "Microsoft Copilot",
      color: "#d9b5ea"
    },
    {
      uri: "/images/star-death.webp",
      alt: "an AI generated star death",
      citation: "Microsoft Copilot"
    },
    {
      uri: "/images/sun.webp",
      alt: "an AI generated sun",
      citation: "Microsoft Copilot"
    }
  ];

  const accordionData = [
    {
      title: "About",
      content: <p>With a population of about 2 million, Almaty is Kazakhstan&apos;s largest city. From 1929 to 1997, it was its capital city.</p>,
    },
    {
      title: "Etymology",
      content: <p>The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for &ldquo;apple&rdquo; and is often translated as &ldquo;full of apples&rdquo;. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.</p>,
    }
  ];

  return (
    <main>
      <DarkModeSwitcher />

      <h2>Business Card</h2>
      <BusinessCard
        image={cardInfo.image}
        name={cardInfo.name}
        email={cardInfo.email}
        description={cardInfo.description}
      />
      <ImageSelector onChange={(url) => setCardInfo(
        (v) => ({ ...v, image: url })
      )} />
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name"
          value={cardInfo.name}
          onChange={(e) => setCardInfo(
            (v) => ({ ...v, name: e.target.value })
          )} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"
          value={cardInfo.email}
          onChange={(e) => setCardInfo(
            (v) => ({ ...v, email: e.target.value })
          )} />
      </div>

      <h2>Gallery Example</h2>
      <Gallery items={galleryItems} />

      <h2>Accordion Example</h2>
      <Accordion panelData={accordionData} />

      <h2>ChatBot UI</h2>
      <ChatBot />

      <h2>Rendered Date</h2>
      <p>{new Date().toLocaleString()}</p>
    </main>
  )
}
