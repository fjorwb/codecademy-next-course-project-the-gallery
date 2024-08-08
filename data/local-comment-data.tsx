export const commentData: CommentData = {
  364093: [
    {
      id: 1,
      body: "Notice the brushwork; it's methodical yet appears so spontaneous, a classic Cezanne trait.",
      timestamp: 1560440286620,
    },
    {
      id: 2,
      body: "The play of light in this Cezanne piece captures the transient beauty of nature so eloquently.",
      timestamp: 1470873849390,
    },
    {
      id: 3,
      body: "Cezanne's mastery in depicting the essence of still life is truly remarkable in this painting.",
      timestamp: 1696894459572,
    },
  ],
  436946: [
    {
      id: 4,
      body: "Manet's bold use of black contours makes the subjects in his paintings pop with a modern sensibility.",
      timestamp: 1574781500766,
    },
    {
      id: 5,
      body: "In this piece, Manet's unconventional technique challenges traditional perspectives, making it a forerunner of Impressionism.",
      timestamp: 1362089854036,
    },
    {
      id: 6,
      body: "The brushstrokes in Manet's work convey a sense of immediacy, as if capturing a fleeting moment.",
      timestamp: 1343723599492,
    },
    {
      id: 7,
      body: "Manet's portrayal of light and shadow brings a dramatic intensity to everyday scenes, blending realism with artistic expression.",
      timestamp: 1538953375896,
    },
    {
      id: 8,
      body: "This painting showcases Manet's skill in depicting human figures with a vibrant, yet enigmatic, presence",
      timestamp: 1441787615708,
    },
  ],
  436948: [
    {
      id: 9,
      body: "Manet's composition masterfully directs the viewer's eye, blending the boundary between the foreground and background.",
      timestamp: 1623557595177,
    },
    {
      id: 10,
      body: "The nuanced interplay of light in Manet's work adds a layer of depth, inviting the viewer to look beyond the surface.",
      timestamp: 1463110149093,
    },
  ],
  459966: [
    {
      id: 11,
      body: "Renoir's paintings exude warmth, with his soft brushstrokes and glowing palette celebrating the joy of life.",
      timestamp: 1558678348113,
    },
    {
      id: 12,
      body: "The lively scenes in Renoir's work are a testament to his fascination with the beauty of social interaction.",
      timestamp: 1572151034274,
    },
    {
      id: 13,
      body: "Renoir had a unique ability to capture the effervescence of light, infusing his canvases with a dreamlike quality.",
      timestamp: 1520507972280,
    },
    {
      id: 14,
      body: "The delicate play of light and shadow in Renoir's pieces beautifully illustrates his Impressionist approach to capturing the moment.",
      timestamp: 1308054522077,
    },
  ],
  438014: [
    {
      id: 15,
      body: "Through Renoir's brush, the everyday becomes enchanting, with each figure portrayed in a harmonious, almost musical composition.",
      timestamp: 1646317220013,
    },
    {
      id: 16,
      body: "Renoir's intimate portraits convey a tender humanity, reflecting his deep interest in the emotional landscape of his subjects.",
      timestamp: 1547198874016,
    },
    {
      id: 17,
      body: "The vibrant, joyous atmosphere in Renoir's scenes of leisure suggests a romantic nostalgia for the pleasures of Parisian life.",
      timestamp: 1332085669123,
    },
  ],
  285444: [
    {
      id: 18,
      body: "Degas's photography, much like his paintings, captures the grace and poise of his subjects, often dancers, with a candid intimacy that feels both deliberate and spontaneous.",
      timestamp: 1276015905935,
    },
    {
      id: 19,
      body: "The composition in Degas's photographs reveals his keen eye for framing and movement, traits that echo the dynamic qualities of his more famous pastel and oil work.",
      timestamp: 1429570557335,
    },
  ],
}

export type CommentData = Record<number, Comment[]>

export type Comment = {
  id: number
  body: string
  timestamp: number
}
