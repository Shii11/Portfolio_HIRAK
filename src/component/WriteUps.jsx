import React from 'react'

const WriteUps = () => {

  const projects = [
    {
      bookName: "Tales From the Tea Place",
      logline: "A tea house becomes the timeless backdrop for stories of love, loss, and life across generations, where each sip of tea tells a tale of connection and change.",
      synopsis1:
        "Tales from the Tea House follows the journey of a quaint tea house that serves as a silent witness to the lives of its patrons across decades. Beginning with Maryam and her young daughter Aadhya’s visit, the story explores familial bonds and self-discovery. As Aadhya grows, the tea house mirrors her transformation, hosting stories of connection and change. With each chapter, characters confront societal shifts, personal struggles, and generational divides.",

      synopsis2:
        "As the years pass, Aadhya grows up, and the tea house continues to serve as a space for conversations, connections, and reflections. Generational shifts in relationships, societal expectations, and personal ambitions are showcased through intimate yet powerful dialogues between characters. The tea house becomes a metaphor for life itself, a place of comfort, memories, and change. The story culminates in a poignant moment of acceptance, as the cycle of life and storytelling continues, proving that some places and emotions are timeless.",

      link: "https://drive.google.com/file/d/1a1QezQcHCafGwEAt1PKvxJPZkxIRq7jc/view?usp=drive_link",
    },
    {
      bookName: "Terminal Trellis",
      logline: "When a delayed flight strands a young, broke artist overnight in an Indian airport, a single night in the terminal becomes a crossroads of strangers, failed plans, quiet revelations, and fragile hope—forcing him to confront love, ambition, and the thin line between dreams imagined and lives actually lived.",
      synopsis1:
        "A Night in a Terminal chronicles one sleepless night in an Indian airport where a delayed flight suspends not just travel, but life itself. The narrator, a young illustrator on his way to a convocation, a potential job, and a long-awaited love confession, finds his future paused by circumstances beyond his control. As hours pass, the terminal fills with restless strangers—artists, corporate workers, lovers, migrants, doctors, and drunks—each carrying their own urgency, regrets, and quiet hopes.",

      synopsis2:
        "Through conversations in smoking rooms, shared food, arguments, laughter, and exhaustion, the airport transforms into a liminal space where social hierarchies dissolve and raw humanity emerges. Dreams blur with reality, patience erodes, and optimism is repeatedly tested. The night becomes a mirror to a generation caught between ambition and uncertainty, struggling to move forward while stuck in place. Intimate, observational, and darkly humorous, the novel explores waiting, failure, connection, and the fragile belief that morning may still bring change—even if it arrives differently than imagined.",
      link: "https://drive.google.com/file/d/1hTOH-kddKxOk0567Dq7A0uUIk4TUomCf/view?usp=drive_link",
    },
    {
      bookName: "Sermons of Epiphany",
      logline: "In a myth-scarred world of elves, men, and ancient beasts, a prophecy foretells that the Son of a Wendigo will end a devastating war but he is born not of kings or warriors, but of forbidden love, hunted by prideful kingdoms whose greed may destroy the very hope meant to save them.",
      synopsis1:
        "Sermons of Epiphany unfolds in a mythic world where elves, men, and ancient beings are bound by prophecy, war, and pride. As kingdoms clash over land and power, an ancient prophecy foretells the rise of the Son of a Wendigo—one who can bring the endless war of Senjo to a halt. But the child is born not of royalty, but of forbidden love, making him both a threat and a prize. Through wandering storytellers, fallen warriors, political betrayal, and devastating loss, the narrative explores how ambition corrupts virtue and how violence echoes across generations. As bloodlines fracture and kingdoms burn, a single life carries the burden of redemption. Epic yet intimate, the novel examines destiny, sacrifice, and whether compassion can survive in a world ruled by power.",

      synopsis2: null,
      link: "https://drive.google.com/file/d/1YEqFhz400P2xC5-rsm_5iH7QsqWZRUh0/view?usp=drive_link",
    },
    {
      bookName: "The Jump?",
      logline: "A young man poised to end his life on a rooftop is stopped by a mysterious girl whose bright smile hides a dark secret forcing him to confront his guilt and grief but her Graceful Presence conceals a bitter Reality",
      synopsis1:
        "The Jump follows a grief-stricken young man standing on the edge of a high-rise, torn between living with unbearable guilt and ending his life. As he wrestles with thoughts of a fatal fall, he is interrupted by Anna, a cheerful yet troubled girl who is also preparing to jump. What begins as a confrontation turns into an intense conversation where both reveal their reasons for wanting to die.",

      synopsis2: "Through their exchange, Anna challenges his self-hatred and forces him to consider the people he would leave behind. By dawn, the boy chooses life, promising Anna that they will both survive. The next morning, after his brother’s funeral, he discovers a chilling truth.",
      link: "https://drive.google.com/file/d/1ZmA5GdqZqAzgDOmgpBdKfc0AsHLlF_go/view?usp=drive_link",
    },
    {
      bookName: "Your Story",
      logline: "A late-night radio host listens to a caller’s tender love story but the broadcast slowly reveals that the tragic tale of loss and denial is his own fractured memory, replaying the moment he refused to accept.",
      synopsis1:
        "Set across a late-night radio broadcast and fragmented memories, the story follows RJ Beniwal as he listens to a caller recount a tender, awkward love story with an introverted woman named Vinnie. Through intimate conversations, shared silences, and small moments of connection, their bond slowly unfolds into something deeply personal. But as the story grows darker marked by disappearance, guilt, and a recurring dream of a fatal accident the line between narrator and listener begins to blur. The radio show unravels into a psychological reckoning, revealing that the caller never existed. The love story is Beniwal’s own, constructed by a mind in denial after losing Vinnie in a tragic accident. Confronted by truth, he must finally accept loss.",

      synopsis2: null,
      link: "https://drive.google.com/file/d/1ZmA5GdqZqAzgDOmgpBdKfc0AsHLlF_go/view?usp=drive_link",
    },
    {
      bookName: "Blue Mountains and Red Rivers",
      logline: "When a lost young man confronts his fathers about his roots, whispered stories of his father’s grief and quiet endurance rise from the past but in learning how loss carved strength out of sorrow, he may finally find the will to save himself.",
      synopsis1:
        "A troubled young man, numbed by addiction and drifting through life, returns to his quiet hometown in Assam after years of absence. Surrounded by familiar landscapes and lingering silences, he begins to hear stories of his father from relatives and old friends stories shaped by the death of a brother and the slow loss of a wife to illness. Piece by piece, he discovers how grief forged his father’s quiet resilience and sense of responsibility. As memories of the past surface, the son is forced to confront his own self-destruction and inherited pain. The hometown becomes a living archive of loss, love, and endurance. Through understanding his father’s sacrifices, he finds a reason to let go of his addictions.",

      synopsis2: null,
      link: "https://drive.google.com/file/d/1LkE0y3-tXcd3sHBLUosK3R1BxKNRG2ik/view?usp=drive_link",
    }
  ];


  return (
    <section id='writeups' className="min-h-screen px-6 md:px-16 lg:px-28 py-24 relative overflow-hidden">

      {/* Background title */}
      <h1 className="absolute top-10 left-6 md:left-16 text-[3rem] md:text-[8rem] font-bold tracking-widest text-black/20">
        WRITE UPS
      </h1>

      <div className="relative z-10 max-w-5xl mx-auto mt-0 md:mt-32">

        {projects.map((item, index) => (
          <div
            key={index}
            className="py-20 border-b border-black/20"
          >
            <h3 className="text-xl font-semibold tracking-wide text-black mb-5">
              {item.bookName}
            </h3>

            <p className="mt-3 text-mg italic max-w-3xl text-black/70 mb-10">
              {item.logline}
            </p>

            <p className="text-sm text-black/80 max-w-3xl">{item.synopsis1}</p>
            <p className="mt-2 text-sm text-black/80 max-w-3xl">{item.synopsis2}</p>

            <button
              onClick={() => window.open(item.link, "_blank")}
              className="mt-4 text-xs tracking-widest px-4 py-1 border border-black/40 rounded-full hover:bg-black hover:text-white transition">
              Read more
            </button>
          </div>
        ))}
      </div>

      {/* Bottom curve line */}
      {/* <div className="absolute bottom-10 left-0 w-full border-t border-black/20 rotate-[-2deg]" /> */}
    </section>
  )
}

export default WriteUps
