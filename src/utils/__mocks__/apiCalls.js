export const fetchMurrayMovies = jest.fn().mockImplementation(() => (
  [{
  page: 1,
  total_results: 87,
  total_pages: 5,
  results: [
    {
      vote_count: 844,
      id: 399174,
      video: false,
      vote_average: 7.8,
      title: 'Isle of Dogs',
      popularity: 19.486,
      poster_path: '/rSluCePdXXtNiQeE6Na5yRGamhL.jpg',
      original_language: 'en',
      original_title: 'Isle of Dogs',
      genre_ids: [12, 35, 16],
      backdrop_path: '/5YtXsLG9ncjjFyGZjoeV31CGf01.jpg',
      adult: false,
      overview:
        "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. The outcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
      release_date: '2018-03-23'
    },
    {
      vote_count: 1,
      id: 430364,
      video: false,
      vote_average: 9,
      title: "'85: The Greatest Team in Pro Football History",
      popularity: 0.211,
      poster_path: '/Ab5Fg3hNTq5ApCzPkmAQWubqg5Z.jpg',
      original_language: 'en',
      original_title: "'85: The Greatest Team in Pro Football History",
      genre_ids: [99, 36, 10770],
      backdrop_path: '/m0u0yLL6UJ1x8ApLagZ3EZbAL7s.jpg',
      adult: false,
      overview:
        'Through never-been-seen-before footage and fascinating interviews with key members of the 1985 Chicago Bears -- Mike Ditka, Jim McMahon, Mike Singletary, and others -- you will hear the inside story of their historic season.',
      release_date: '2016-10-01'
    },
    {
      vote_count: 3129,
      id: 43074,
      video: false,
      vote_average: 5.4,
      title: 'Ghostbusters',
      popularity: 14.75,
      poster_path: '/4qnJ1hsMADxzwnOmnwjZTNp0rKT.jpg',
      original_language: 'en',
      original_title: 'Ghostbusters',
      genre_ids: [28, 14, 35],
      backdrop_path: '/lbtG9MTb8i13KhXuyl3bmnqt7Lt.jpg',
      adult: false,
      overview:
        'Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.',
      release_date: '2016-07-14'
    },
    {
      vote_count: 0,
      id: 392034,
      video: false,
      vote_average: 0,
      title: 'Cold Lairs',
      popularity: 0.133,
      poster_path: '/pvmXvKk4lDUAuvCFY0LfxbSMBRe.jpg',
      original_language: 'en',
      original_title: 'Cold Lairs',
      genre_ids: [],
      backdrop_path: null,
      adult: false,
      overview:
        'In this cinematic VR experience from Disney\'s "The Jungle Book", you are inside a darkened temple, with only the light from above to illuminate your surroundings. All around you are monkeys of every variety. You hear a sound from the darkness and the monkeys begin to wail. A giant, shadowy figure reaches towards you. It\'s King Louie... and he wants something you have.',
      release_date: '2016-04-05'
    },
    {
      vote_count: 4239,
      id: 278927,
      video: false,
      vote_average: 6.8,
      title: 'The Jungle Book',
      popularity: 13.566,
      poster_path: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
      original_language: 'en',
      original_title: 'The Jungle Book',
      genre_ids: [12, 18, 10751, 14, 16],
      backdrop_path: '/eIOTsGg9FCVrBc4r2nXaV61JF4F.jpg',
      adult: false,
      overview:
        'A man-cub named Mowgli fostered by wolves. After a threat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.',
      release_date: '2016-04-07'
    },
    {
      vote_count: 204,
      id: 364067,
      video: false,
      vote_average: 5.2,
      title: 'A Very Murray Christmas',
      popularity: 4.511,
      poster_path: '/3CMBgEte4pEapn2deugsfz2hjAL.jpg',
      original_language: 'en',
      original_title: 'A Very Murray Christmas',
      genre_ids: [35, 10402],
      backdrop_path: '/hgQOPAmFe8ubQZP7DOOz7Q844qG.jpg',
      adult: false,
      overview:
        'Bill Murray worries no one will show up to his TV show due to a massive snowstorm in New York City. Through luck and perseverance, guests arrive at Gotham’s Carlyle Hotel to help him — dancing and singing in holiday spirit.',
      release_date: '2015-12-04'
    },
    {
      vote_count: 137,
      id: 253414,
      video: false,
      vote_average: 5.3,
      title: 'Rock the Kasbah',
      popularity: 6.209,
      poster_path: '/7Ljch9R3uie8lV3z1GUUHZRkvKH.jpg',
      original_language: 'en',
      original_title: 'Rock the Kasbah',
      genre_ids: [35, 10402, 10752],
      backdrop_path: '/wsoOmoN9mcErbCEFH4SveuD28Si.jpg',
      adult: false,
      overview:
        'A washed-up music producer finds one last shot at redemption with a golden-voiced young girl in Afghanistan. However, when jealousy gets the better of a disgruntled ex-boyfriend, he decides to oppose the young star with talent of his own.',
      release_date: '2015-10-22'
    },
    {
      vote_count: 1,
      id: 381062,
      video: false,
      vote_average: 5,
      title: 'Thank You, Del: The Story of the Del Close Marathon',
      popularity: 0.388,
      poster_path: '/rnGpvbQ8Xr1v5kvIa52yFQYf9EZ.jpg',
      original_language: 'en',
      original_title: 'Thank You, Del: The Story of the Del Close Marathon',
      genre_ids: [99],
      backdrop_path: null,
      adult: false,
      overview:
        'Del Close was never a household name, but any comedy enthusiast is aware of his impact. From Bill Murray to Chris Farley to Amy Poehler, many of the most famous comedians consider him their mentor. Fifteen years after Del Close’s death, thousands of Improv students, comedy fans, actors, and successful comedians gather to celebrate the most important person in modern comedy that no one knows.',
      release_date: '2015-10-13'
    },
    {
      vote_count: 956,
      id: 222936,
      video: false,
      vote_average: 5.2,
      title: 'Aloha',
      popularity: 6.681,
      poster_path: '/4Q0rnkCsQ9GhdnR66Bqjvav2Q1x.jpg',
      original_language: 'en',
      original_title: 'Aloha',
      genre_ids: [18, 35, 10749],
      backdrop_path: '/o8KUFmZlAmi4dgbNxyVf5PH0GL3.jpg',
      adult: false,
      overview:
        'A celebrated military contractor returns to the site of his greatest career triumphs and re-connects with a long-ago love while unexpectedly falling for the hard-charging Air Force watchdog assigned to him.',
      release_date: '2015-05-27'
    },
    {
      vote_count: 36,
      id: 324601,
      video: false,
      vote_average: 7.1,
      title: 'Saturday Night Live 40th Anniversary Special',
      popularity: 4.115,
      poster_path: '/tdS7BgV7pqJUs0lnO8mxDqu8ZfJ.jpg',
      original_language: 'en',
      original_title: 'Saturday Night Live 40th Anniversary Special',
      genre_ids: [35, 10770],
      backdrop_path: '/sioI2xwJ8nDus5Vq5UyYORNrOnI.jpg',
      adult: false,
      overview:
        "A three-hour prime-time special celebrating SNL '​s fortieth year on the air.",
      release_date: '2015-02-15'
    },
    {
      vote_count: 28,
      id: 319070,
      video: false,
      vote_average: 6.6,
      title: 'Drunk Stoned Brilliant Dead: The Story of the National Lampoon',
      popularity: 1.636,
      poster_path: '/t7fqemeHtEaxG0Ry0bTox4spBY0.jpg',
      original_language: 'en',
      original_title:
        'Drunk Stoned Brilliant Dead: The Story of the National Lampoon',
      genre_ids: [36, 35, 99],
      backdrop_path: '/6NVOrQpJ4f1UPe5zyRtZibolrPv.jpg',
      adult: false,
      overview:
        'A look at the history of the American comedy publication and production company, National Lampoon, from its beginning in the 1970s to 2010, featuring rare and never before seen footage, this is the mind boggling story of The National Lampoon from its subversive and electrifying beginnings, to rebirth as an unlikely Hollywood heavyweight, and beyond. A humour empire like no other, the impact of the magazines irreverent, often shocking, sensibility was nothing short of seismic: this is an institution whose (drunk stoned brilliant) alumni left their fingerprints all over popular culture. Both insanely great and breathtakingly innovative, The National Lampoon created the foundation of modern comic sensibility by setting the bar in comedy impossibly high.',
      release_date: '2015-01-25'
    },
    {
      vote_count: 1515,
      id: 100042,
      video: false,
      vote_average: 5.4,
      title: 'Dumb and Dumber To',
      popularity: 12.674,
      poster_path: '/Ekw3ijq9L6RiKvv5m2tPOEklHF.jpg',
      original_language: 'en',
      original_title: 'Dumb and Dumber To',
      genre_ids: [35],
      backdrop_path: '/pMNSiNT55XrxWPmoI5ytJyinRa8.jpg',
      adult: false,
      overview:
        '20 years after the dimwits set out on their first adventure, they head out in search of one of their long lost children in the hope of gaining a new kidney.',
      release_date: '2014-11-12'
    },
    {
      vote_count: 946,
      id: 239563,
      video: false,
      vote_average: 7.1,
      title: 'St. Vincent',
      popularity: 9.118,
      poster_path: '/w0hzr4eQBk1X4m63fb7sOSt9Bnn.jpg',
      original_language: 'en',
      original_title: 'St. Vincent',
      genre_ids: [35],
      backdrop_path: '/sycS64dwK8eRxMeKALPE29z0HXv.jpg',
      adult: false,
      overview:
        'A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.',
      release_date: '2014-10-09'
    },
    {
      vote_count: 6558,
      id: 120467,
      video: false,
      vote_average: 8,
      title: 'The Grand Budapest Hotel',
      popularity: 11.329,
      poster_path: '/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
      original_language: 'en',
      original_title: 'The Grand Budapest Hotel',
      genre_ids: [35, 18],
      backdrop_path: '/5FPUoQtnNC0C0YZ7sUeTLq6eZqa.jpg',
      adult: false,
      overview:
        'The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.',
      release_date: '2014-02-26'
    },
    {
      vote_count: 1908,
      id: 152760,
      video: false,
      vote_average: 5.9,
      title: 'The Monuments Men',
      popularity: 8.957,
      poster_path: '/lhCUqVEPA3MMxnV8QTeVBTmRrP4.jpg',
      original_language: 'en',
      original_title: 'The Monuments Men',
      genre_ids: [10752, 18, 36, 28],
      backdrop_path: '/6AaXKJAigIsIAOtoayjHeDcBWoc.jpg',
      adult: false,
      overview:
        'Based on the true story of the greatest treasure hunt in history, The Monuments Men is an action drama focusing on seven over-the-hill, out-of-shape museum directors, artists, architects, curators, and art historians who went to the front lines of WWII to rescue the world’s artistic masterpieces from Nazi thieves and return them to their rightful owners.  With the art hidden behind enemy lines, how could these guys hope to succeed?',
      release_date: '2014-01-24'
    },
    {
      vote_count: 102,
      id: 87504,
      video: false,
      vote_average: 5.3,
      title: 'Hyde Park on Hudson',
      popularity: 6.308,
      poster_path: '/3mbfrCzlXlzO5kDTq2Qgj9EefYz.jpg',
      original_language: 'en',
      original_title: 'Hyde Park on Hudson',
      genre_ids: [35, 18, 36],
      backdrop_path: '/74Snr9uFmovkZ4AZfRwGmWigspd.jpg',
      adult: false,
      overview:
        'The story of the love affair between FDR and his distant cousin Margaret Stuckley, centered around the weekend in 1939 when the King and Queen of the United Kingdom visited upstate New York.',
      release_date: '2012-12-07'
    },
    {
      vote_count: 35,
      id: 124461,
      video: false,
      vote_average: 4.4,
      title: 'A Glimpse Inside the Mind of Charles Swan III',
      popularity: 2.679,
      poster_path: '/6KeYxz1wzjvkvUhkiva9ULzipQY.jpg',
      original_language: 'en',
      original_title: 'A Glimpse Inside the Mind of Charles Swan III',
      genre_ids: [35],
      backdrop_path: '/mCWNinejhYV1RGzvPjGSZp8bquH.jpg',
      adult: false,
      overview:
        'Charles Swan III, a successful graphic designer, has it all: fame, money and devilish charm that have provided him with a seemingly perfect life. But when a perplexing beauty named Ivana suddenly ends their relationship, Charles is left heartbroken. With the support of his loyal intimates - Kirby, Saul, and his sister, Izzy – Charles begins a delirious journey of self-reflection to try and come to terms with a life without Ivana. "A Glimpse Inside the Mind of Charles Swan III" is an unconventional melodrama told in a bold and playful style.',
      release_date: '2012-11-15'
    },
    {
      vote_count: 2430,
      id: 83666,
      video: false,
      vote_average: 7.7,
      title: 'Moonrise Kingdom',
      popularity: 10.076,
      poster_path: '/ysTohGF7NY9Z6MYz9vLNYiyzh0r.jpg',
      original_language: 'en',
      original_title: 'Moonrise Kingdom',
      genre_ids: [35, 18, 10749],
      backdrop_path: '/1mKI5UfeCetrB3HZbYt6VTn7K9m.jpg',
      adult: false,
      overview:
        'Set on an island off the coast of New England in the summer of 1965, Moonrise Kingdom tells the story of two twelve-year-olds who fall in love, make a secret pact, and run away together into the wilderness. As various authorities try to hunt them down, a violent storm is brewing off-shore – and the peaceful island community is turned upside down in more ways than anyone can handle.',
      release_date: '2012-05-24'
    },
    {
      vote_count: 25,
      id: 126314,
      video: false,
      vote_average: 7.7,
      title: 'Final Cut: Ladies and Gentlemen',
      popularity: 2.139,
      poster_path: '/tXeaMMQ1EAHVDRMrEcNzoO25EwT.jpg',
      original_language: 'hu',
      original_title: 'Final Cut: Hölgyeim és uraim',
      genre_ids: [99, 18, 10749],
      backdrop_path: '/lhYLeL4CQOnIt38eUUjorL5UEoR.jpg',
      adult: false,
      overview:
        'A film where anything can happen - the hero and the heroine changes their faces, age, look, names, and so on. The only same thing: The love between man and woman... in an archetypical love story cut from 500 classics from all around the world.',
      release_date: '2012-02-04'
    },
    {
      vote_count: 35,
      id: 38753,
      video: false,
      vote_average: 5,
      title: 'Passion Play',
      popularity: 3.25,
      poster_path: '/rp5YsVLlJP1ZxsGDkeLC78olyF4.jpg',
      original_language: 'en',
      original_title: 'Passion Play',
      genre_ids: [18, 10749, 14],
      backdrop_path: '/8VsLXk9p7QN6aekcjccm9sunlHj.jpg',
      adult: false,
      overview:
        'An angel under the thumb of a ruthless gangster is saved by a trumpet player down on his luck.',
      release_date: '2010-09-10'
    },

    {
      page: 2,
      total_results: 87,
      total_pages: 5,
      results: [
        {
          vote_count: 1787,
          id: 10315,
          video: false,
          vote_average: 7.6,
          title: 'Fantastic Mr. Fox',
          popularity: 9.992,
          poster_path: '/750pfEttsYAVmynRg2vmt1AXh4q.jpg',
          original_language: 'en',
          original_title: 'Fantastic Mr. Fox',
          genre_ids: [12, 16, 35, 10751],
          backdrop_path: '/uxQ1n8yLqRZgnrimiBXJ5rsaa.jpg',
          adult: false,
          overview:
            'The Fantastic Mr. Fox bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.',
          release_date: '2009-10-23'
        },
        {
          vote_count: 5018,
          id: 19908,
          video: false,
          vote_average: 7.2,
          title: 'Zombieland',
          popularity: 11.61,
          poster_path: '/vUzzDpVrab1BOG3ogxhRGfLN94d.jpg',
          original_language: 'en',
          original_title: 'Zombieland',
          genre_ids: [35, 27],
          backdrop_path: '/lLgLFzSZduH9kBxrk6BvoHc1gg0.jpg',
          adult: false,
          overview:
            "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
          release_date: '2009-10-07'
        },
        {
          vote_count: 121,
          id: 44718,
          video: false,
          vote_average: 6.8,
          title: 'Get Low',
          popularity: 4.674,
          poster_path: '/kLw9J6Rp3surSUKZbmJ9KZDwFBT.jpg',
          original_language: 'en',
          original_title: 'Get Low',
          genre_ids: [35, 18, 9648],
          backdrop_path: '/qCRtwd1LcUrbQZXjbDkQ0u0uySw.jpg',
          adult: false,
          overview:
            'A movie spun out of equal parts folk tale, fable and real-life legend about the mysterious, 1930s Tennessee hermit who famously threw his own rollicking funeral party... while he was still alive.',
          release_date: '2010-01-22'
        },
        {
          vote_count: 98,
          id: 8284,
          video: false,
          vote_average: 6.4,
          title: 'The Limits of Control',
          popularity: 4.482,
          poster_path: '/jz6zzcdOf09eGQUbTWZjVU99iC5.jpg',
          original_language: 'en',
          original_title: 'The Limits of Control',
          genre_ids: [80, 18, 53, 9648],
          backdrop_path: '/11NZVuHFyZaccAM0im3wvapuwtf.jpg',
          adult: false,
          overview:
            'A mysterious stranger works outside the law and keeps his objectives hidden, trusting no one. While his demeanor is paradoxically focused and dreamlike all at once, he embarks on a journey that not only takes him across Spain, but also through his own consciousness.',
          release_date: '2009-05-01'
        },
        {
          vote_count: 817,
          id: 13600,
          video: false,
          vote_average: 6.2,
          title: 'City of Ember',
          popularity: 5.533,
          poster_path: '/vtlcA292oROPaG74amLsAhtBNbB.jpg',
          original_language: 'en',
          original_title: 'City of Ember',
          genre_ids: [12, 10751, 14],
          backdrop_path: '/iHqRY5orzlwGs7PViEex0lOkDz3.jpg',
          adult: false,
          overview:
            "For generations, the people of the City of Ember have flourished in an amazing world of glittering lights. But Ember's once powerful generator is failing and the great lamps that illuminate the city are starting to flicker. Now, two teenagers, in a race against time, must search Ember for clues that will unlock the ancient mystery of the city's existence, before the the lights go out forever.",
          release_date: '2008-10-07'
        },
        {
          vote_count: 1483,
          id: 11665,
          video: false,
          vote_average: 6,
          title: 'Get Smart',
          popularity: 6.238,
          poster_path: '/zS3UhYJvy6oLTBgNckpoyAa0qNs.jpg',
          original_language: 'en',
          original_title: 'Get Smart',
          genre_ids: [28, 35, 53],
          backdrop_path: '/jrWrNLPeeB4d7II30EJRSYX7Sbr.jpg',
          adult: false,
          overview:
            'When the identities of secret agents from Control are compromised, the Chief promotes hapless but eager analyst Maxwell Smart and teams him with stylish, capable Agent 99, the only spy whose cover remains intact. Can they work together to thwart the evil plans of KAOS and its crafty operative?',
          release_date: '2008-06-19'
        },
        {
          vote_count: 0,
          id: 479530,
          video: false,
          vote_average: 0,
          title: 'A Better Man: The Making of Tootsie',
          popularity: 0.041,
          poster_path: null,
          original_language: 'en',
          original_title: 'A Better Man: The Making of Tootsie',
          genre_ids: [99],
          backdrop_path: null,
          adult: false,
          overview:
            'Documentary about the making of the 1982 film, featuring interviews with the cast and crew.',
          release_date: '2008-02-05'
        },
        {
          vote_count: 1270,
          id: 4538,
          video: false,
          vote_average: 7.2,
          title: 'The Darjeeling Limited',
          popularity: 7.502,
          poster_path: '/47AGp0EKNMjqBBPaxRYDW0Sc5If.jpg',
          original_language: 'en',
          original_title: 'The Darjeeling Limited',
          genre_ids: [12, 18, 35],
          backdrop_path: '/anyi9aLWmajErXO0YFOkjpaiceY.jpg',
          adult: false,
          overview:
            'Three American brothers who have not spoken to each other in a year set off on a train voyage across India with a plan to find themselves and bond with each other -- to become brothers again like they used to be. Their "spiritual quest", however, veers rapidly off-course (due to events involving over-the-counter pain killers, Indian cough syrup, and pepper spray).',
          release_date: '2007-09-29'
        },
        {
          vote_count: 1,
          id: 485282,
          video: false,
          vote_average: 5,
          title: 'FCU: Fact Checkers Unit',
          popularity: 0.122,
          poster_path: null,
          original_language: 'en',
          original_title: 'FCU: Fact Checkers Unit',
          genre_ids: [],
          backdrop_path: null,
          adult: false,
          overview:
            "After being assigned to check a bizarre fact about Bill Murray's love for drinking milk, two magazine fact checkers break into Bill's house to spy on him.",
          release_date: '2007-09-09'
        },
        {
          vote_count: 7,
          id: 25740,
          video: false,
          vote_average: 6.7,
          title: 'Buy the Ticket, Take the Ride',
          popularity: 0.658,
          poster_path: '/xbt6aftwE8d9TKhepA2o6a3ZDdG.jpg',
          original_language: 'en',
          original_title: 'Buy the Ticket, Take the Ride',
          genre_ids: [99],
          backdrop_path: '/k5rhGLUxMr7tBNX7e9CbmTsN9E0.jpg',
          adult: false,
          overview:
            'A personal, intimate look at journalist Hunter S. Thompson with a special emphasis on his Hollywood relationships. It captures the legacy and "gonzo" spirit of one of this century\'s most notorious figures - a man whose life and work regularly intersected with some of the biggest names in the world of film, politics, journalism and sports.',
          release_date: '2006-12-12'
        },
        {
          vote_count: 758,
          id: 9513,
          video: false,
          vote_average: 5.2,
          title: 'Garfield: A Tail of Two Kitties',
          popularity: 7.308,
          poster_path: '/aagx3t2Xv7R26hcqzrayTT28Yww.jpg',
          original_language: 'en',
          original_title: 'Garfield: A Tail of Two Kitties',
          genre_ids: [16, 35, 10751],
          backdrop_path: '/krMn4dSfYlhizlvv7tDOyxb69X4.jpg',
          adult: false,
          overview:
            'Garfield is back and this time Garfield and his canine sidekick Odie follows their owner, Jon Arbuckle, to England, the U.K. may never recover, as Garfield is mistaken for a look-alike, regal cat who has inherited a castle.',
          release_date: '2006-06-15'
        },
        {
          vote_count: 32,
          id: 9700,
          video: false,
          vote_average: 6,
          title: 'The Lost City',
          popularity: 2.87,
          poster_path: '/v19DsrJb0TJxTCdgaUzzuvOjfeD.jpg',
          original_language: 'en',
          original_title: 'The Lost City',
          genre_ids: [18, 10749],
          backdrop_path: '/jw13PODz15BjaFEE4lL67kiXACE.jpg',
          adult: false,
          overview:
            "In Havana, Cuba in the late 1950's, a wealthy family, one of whose sons is a prominent nightclub owner, is caught in the violent transition from the oppressive regime of Batista to the Marxist government of Fidel Castro. Castro's regime ultimately leads the nightclub owner to flee to New York.",
          release_date: '2005-09-03'
        },
        {
          vote_count: 495,
          id: 308,
          video: false,
          vote_average: 6.9,
          title: 'Broken Flowers',
          popularity: 7.415,
          poster_path: '/pvtdRUpJE6YjIi8BLEZ7jhEdeN1.jpg',
          original_language: 'en',
          original_title: 'Broken Flowers',
          genre_ids: [35, 18, 9648, 10749],
          backdrop_path: '/mQGEByVNnKiOVoAMDJ9KhvlCtgz.jpg',
          adult: false,
          overview:
            'As the devoutly single Don Johnston is dumped by his latest girlfriend, he receives an anonymous pink letter informing him that he has a son who may be looking for him.',
          release_date: '2005-05-17'
        },
        {
          vote_count: 0,
          id: 415950,
          video: false,
          vote_average: 0,
          title: 'This Is an Adventure',
          popularity: 0.304,
          poster_path: null,
          original_language: 'en',
          original_title: 'This Is an Adventure',
          genre_ids: [99],
          backdrop_path: null,
          adult: false,
          overview:
            'During production on the film "The Life Aquatic with Steve Zissou", documentary filmmakers followed the cast and crew of a film which depicts other documentary filmmakers who follow animal life. In this film, we get a first hand look at the sets and come very close to many of the cast and crew members at work, especially Bill Murray and Wes Anderson.',
          release_date: '2005-05-10'
        },
        {
          vote_count: 4,
          id: 199353,
          video: false,
          vote_average: 5.6,
          title: "Matthew Gray Gubler's Life Aquatic Intern Journal",
          popularity: 0.778,
          poster_path: '/v4qJhj3E664f4Livd8I99SvmicG.jpg',
          original_language: 'en',
          original_title: "Matthew Gray Gubler's Life Aquatic Intern Journal",
          genre_ids: [99],
          backdrop_path: null,
          adult: false,
          overview:
            'Documentary created by Matthew Gray Gubler during, and about, his time on the set of The Life Aquatic with Steve Zissou.  (Released in 2005)',
          release_date: '2005-05-09'
        },
        {
          vote_count: 1093,
          id: 421,
          video: false,
          vote_average: 7.1,
          title: 'The Life Aquatic with Steve Zissou',
          popularity: 5.673,
          poster_path: '/kKwNRePEqTfC6DnNlJzz1yX44iR.jpg',
          original_language: 'en',
          original_title: 'The Life Aquatic with Steve Zissou',
          genre_ids: [12, 35, 18],
          backdrop_path: '/x2EutNySnFRVrjOXsnGyj3HHvf7.jpg',
          adult: false,
          overview:
            'Wes Anderson’s incisive quirky comedy build up stars complex characters like in ‘The Royal Tenenbaums’ with Bill Murray on in the leading role. An ocean adventure documentary film maker Zissou is put in all imaginable life situations and a tough life crisis as he attempts to make a new film about capturing the creature that caused him pain.',
          release_date: '2004-12-10'
        },
        {
          vote_count: 1380,
          id: 8920,
          video: false,
          vote_average: 5.3,
          title: 'Garfield',
          popularity: 10.041,
          poster_path: '/v6xvth8PjDG350ARG9H2sF7N3SF.jpg',
          original_language: 'en',
          original_title: 'Garfield',
          genre_ids: [16, 35, 10751],
          backdrop_path: '/obvIA9vxfJUUYU5N7e5u3ppqvfJ.jpg',
          adult: false,
          overview:
            "Garfield, the fat, lazy, lasagna lover, has everything a cat could want. But when Jon, in an effort to impress the Liz - the vet and an old high-school crush - adopts a dog named Odie and brings him home, Garfield gets the one thing he doesn't want. Competition.",
          release_date: '2004-06-10'
        },
        {
          vote_count: 2,
          id: 113149,
          video: false,
          vote_average: 8,
          title: "Lost on Location: Behind the Scenes of 'Lost in Translation'",
          popularity: 0.703,
          poster_path: '/lsVQfLaklarG4E3tz5xqlgp7QXY.jpg',
          original_language: 'en',
          original_title: 'Lost on Location',
          genre_ids: [99],
          backdrop_path: null,
          adult: false,
          overview:
            "Behind the scenes documentary shot during the making of Sofia Coppola's Lost In Translation (2003)",
          release_date: '2004-02-03'
        },
        {
          vote_count: 331,
          id: 883,
          video: false,
          vote_average: 7.1,
          title: 'Coffee and Cigarettes',
          popularity: 5.357,
          poster_path: '/myLbZRsgRVyfj1luCvUcgB9cjGs.jpg',
          original_language: 'en',
          original_title: 'Coffee and Cigarettes',
          genre_ids: [35, 18],
          backdrop_path: '/7e6eM6lqj8VB5IqPK57RuDJZXYt.jpg',
          adult: false,
          overview:
            'Coffee And Cigarettes is a collection of eleven films from cult director Jim Jarmusch. Each film hosts star studded cast of extremely unique individuals who all share the common activities of conversing while drinking coffee and smoking cigarettes.',
          release_date: '2003-09-05'
        },
        {
          vote_count: 2679,
          id: 153,
          video: false,
          vote_average: 7.4,
          title: 'Lost in Translation',
          popularity: 9.804,
          poster_path: '/5T8VvuFTdaawKLJk34i69Utaw7o.jpg',
          original_language: 'en',
          original_title: 'Lost in Translation',
          genre_ids: [18],
          backdrop_path: '/kdNzNml3byCQi5wqYYuiQMim2CX.jpg',
          adult: false,
          overview:
            "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
          release_date: '2003-08-31'
        }
      ]
    },
    {
      page: 3,
      total_results: 87,
      total_pages: 5,
      results: [
        {
          vote_count: 3,
          id: 32694,
          video: false,
          vote_average: 7.2,
          title: "The Rutles 2: Can't Buy Me Lunch",
          popularity: 0.702,
          poster_path: '/maUbhufh8qw44vg2rYnQcozpd2l.jpg',
          original_language: 'en',
          original_title: "The Rutles 2: Can't Buy Me Lunch",
          genre_ids: [35, 99],
          backdrop_path: '/f4gZbbvc5n3UvrG9yXatwh2Rfug.jpg',
          adult: false,
          overview:
            "Twenty-three years after the release of the original Beatles mockumentary, 'The Rutles: All You Need Is Cash', famous artists, actors and musicians speak out on how The Rutles influenced them.",
          release_date: '2002-01-01'
        },
        {
          vote_count: 9,
          id: 16435,
          video: false,
          vote_average: 6.3,
          title: 'Speaking of Sex',
          popularity: 1.504,
          poster_path: '/imCndGIIYvbGkw5PHra3suxITq9.jpg',
          original_language: 'en',
          original_title: 'Speaking of Sex',
          genre_ids: [35, 10749],
          backdrop_path: '/wZatwk6JEyxeMCrKbBME5af7HVY.jpg',
          adult: false,
          overview:
            'A counselor, an expert on depression, and two attorneys try to help a couple who have marital problems.',
          release_date: '2001-10-18'
        },
        {
          vote_count: 1873,
          id: 9428,
          video: false,
          vote_average: 7.4,
          title: 'The Royal Tenenbaums',
          popularity: 7.315,
          poster_path: '/5xw30y0pSaMtTcuZW5VaQPiR8qb.jpg',
          original_language: 'en',
          original_title: 'The Royal Tenenbaums',
          genre_ids: [35, 18],
          backdrop_path: '/aoy8HmDvoGPwWiGnQKFErg7FVYB.jpg',
          adult: false,
          overview:
            'Royal Tenenbaum and his wife Etheline had three children and then they separated. All three children are extraordinary --- all geniuses. Virtually all memory of the brilliance of the young Tenenbaums was subsequently erased by two decades of betrayal, failure, and disaster. Most of this was generally considered to be their father\'s fault. "The Royal Tenenbaums" is the story of the family\'s sudden, unexpected reunion one recent winter.',
          release_date: '2001-10-12'
        },
        {
          vote_count: 360,
          id: 12610,
          video: false,
          vote_average: 6.1,
          title: 'Osmosis Jones',
          popularity: 5.279,
          poster_path: '/2NvnoaJflAEcT0zlzbS4hlwrDZX.jpg',
          original_language: 'en',
          original_title: 'Osmosis Jones',
          genre_ids: [12, 16, 28, 35, 10751],
          backdrop_path: '/eTLBukNk1NPWUYZ66ZWhYPz3wmn.jpg',
          adult: false,
          overview:
            'A policeman white blood cell, with the help of a cold pill, must stop a deadly virus from destroying the human they live in, Frank.',
          release_date: '2001-08-07'
        },
        {
          vote_count: 1826,
          id: 4327,
          video: false,
          vote_average: 5.6,
          title: "Charlie's Angels",
          popularity: 11.507,
          poster_path: '/eBzf9d09Vgq2HSVC4fIZm1QNQd.jpg',
          original_language: 'en',
          original_title: "Charlie's Angels",
          genre_ids: [28, 12, 35, 80, 53],
          backdrop_path: '/AfXk5IqMZuznjjvEkrQuzQ9A5U6.jpg',
          adult: false,
          overview:
            'Three women, detectives with a mysterious boss, retrieve stolen voice-ID software, using martial arts, tech skills, and sex appeal.',
          release_date: '2000-11-02'
        },
        {
          vote_count: 48,
          id: 10688,
          video: false,
          vote_average: 5.9,
          title: 'Hamlet',
          popularity: 2.871,
          poster_path: '/kc8qcAVglziuisHaCIH4mPGma6e.jpg',
          original_language: 'en',
          original_title: 'Hamlet',
          genre_ids: [18],
          backdrop_path: '/u8Wix09R2qIsT3nPcmJPS1y89j.jpg',
          adult: false,
          overview:
            "Modern day adaptation of Shakespeare's immortal story about Hamlet's plight to avenge his father's murder in New York City.",
          release_date: '2000-05-12'
        },
        {
          vote_count: 10,
          id: 24977,
          video: false,
          vote_average: 7.5,
          title: 'Michael Jordan to the Max',
          popularity: 0.524,
          poster_path: '/6mpDcmOOjgls5aVSOwp6rNmSTOB.jpg',
          original_language: 'en',
          original_title: 'Michael Jordan to the Max',
          genre_ids: [99],
          backdrop_path: '/xfOqXl9H2UZm6JDmCcEiPPr6Q6O.jpg',
          adult: false,
          overview:
            "This documentary showcases basketball player Michael Jordan's awe-inspiring moves, providing behind-the-scenes and on-the-court action, including footage of Jordan and the Chicago Bulls going head-to-head against the Utah Jazz in the 1997 NBA Finals. Phil Jackson and Bob Costas are interviewed (among others), and the awesome soundtrack includes songs by Earth, Wind and Fire, Fatboy Slim and Freddie King.",
          release_date: '2000-05-05'
        },
        {
          vote_count: 29,
          id: 32274,
          video: false,
          vote_average: 6.8,
          title: 'Cradle Will Rock',
          popularity: 2.272,
          poster_path: '/1fTdEqJFZMSTRtZSnT2IL3MibvW.jpg',
          original_language: 'en',
          original_title: 'Cradle Will Rock',
          genre_ids: [18],
          backdrop_path: '/9cKpfklF4CgMiNMOk53yDzfzF3q.jpg',
          adult: false,
          overview:
            'A true story of politics and art in the 1930s USA, centered around a leftist musical drama and attempts to stop its production.',
          release_date: '1999-12-10'
        },
        {
          vote_count: 1,
          id: 210719,
          video: false,
          vote_average: 7,
          title: 'Caddyshack: The 19th Hole',
          popularity: 0.079,
          poster_path: '/lb136Ri2xZIkAxFgdBgbDpru64w.jpg',
          original_language: 'en',
          original_title: 'Caddyshack: The 19th Hole',
          genre_ids: [99, 35],
          backdrop_path: null,
          adult: false,
          overview:
            "Behind-the-scenes documentary of the making of 'Caddyshack'.  Among the people interviewed: producer Jon Peters, writer/director Harold Ramis, and players Cindy Morgan, Scott Colomby,  Ann Ryerson, Hamilton Mitchell, and Chevy Chase.",
          release_date: '1999-05-05'
        },
        {
          vote_count: 962,
          id: 11545,
          video: false,
          vote_average: 7.5,
          title: 'Rushmore',
          popularity: 7.382,
          poster_path: '/q3ov1BFTCRWoR9Q6udaRbmgfWwg.jpg',
          original_language: 'en',
          original_title: 'Rushmore',
          genre_ids: [35, 18],
          backdrop_path: '/kEebOhvrUkFICZV3LaGbPSXh4Rv.jpg',
          adult: false,
          overview:
            "When a beautiful first-grade teacher arrives at a prep school, she soon attracts the attention of an ambitious teenager named Max, who quickly falls in love with her. Max turns to the father of two of his schoolmates for advice on how to woo the teacher. However, the situation soon gets complicated when Max's new friend becomes involved with her, setting the two pals against one another in a war for her attention.",
          release_date: '1998-10-09'
        },
        {
          vote_count: 0,
          id: 126152,
          video: false,
          vote_average: 0,
          title: 'With Friends Like These...',
          popularity: 0.014,
          poster_path: '/iaOiRKh9o8hoAEAUWc7Dq71w2cl.jpg',
          original_language: 'en',
          original_title: 'With Friends Like These...',
          genre_ids: [27, 878],
          backdrop_path: '/nJ0GIyixBNoj3fLwZgVjpkVx77C.jpg',
          adult: false,
          overview:
            'Four small-time two-bit character actors, all close friends, are competing for same important part in the next Martin Scorsese mob film.',
          release_date: '1998-09-10'
        },
        {
          vote_count: 622,
          id: 617,
          video: false,
          vote_average: 6.3,
          title: 'Wild Things',
          popularity: 8.42,
          poster_path: '/dI9iYo1cL81yzJkBVyNGipjSvy0.jpg',
          original_language: 'en',
          original_title: 'Wild Things',
          genre_ids: [9648, 53, 18],
          backdrop_path: '/wvMSGevzwrJAmK3xXYvse9goQgV.jpg',
          adult: false,
          overview:
            "When teen-socialite Kelly Van Ryan and troubled bad girl Suzie Toller accuse guidance counselor Sam Lombardo of rape, he's suspended by the school, rejected by the town, and fighting to get his life back. One cop suspects conspiracy, but nothing is what it seems...",
          release_date: '1998-03-20'
        },
        {
          vote_count: 176,
          id: 9414,
          video: false,
          vote_average: 6.4,
          title: 'The Man Who Knew Too Little',
          popularity: 6.632,
          poster_path: '/32UQkAUWy9NpuvJfF82xrMr2A0G.jpg',
          original_language: 'en',
          original_title: 'The Man Who Knew Too Little',
          genre_ids: [35, 53, 80, 28],
          backdrop_path: '/ngrd70H4uInf6m5hhZ9wHtVxRGL.jpg',
          adult: false,
          overview:
            "An American gets a ticket for an audience participation game in London, then gets involved in a case of mistaken identity. As an international plot unravels around him, he thinks it's all part of the act.",
          release_date: '1997-11-14'
        },
        {
          vote_count: 2115,
          id: 2300,
          video: false,
          vote_average: 6.6,
          title: 'Space Jam',
          popularity: 10.693,
          poster_path: '/xI9AwhOWtsbFlS8tYD2PXa80p7u.jpg',
          original_language: 'en',
          original_title: 'Space Jam',
          genre_ids: [16, 35, 10751],
          backdrop_path: '/kBTdPNTAzagAY6UiwY957KCDGuu.jpg',
          adult: false,
          overview:
            'In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.',
          release_date: '1996-11-15'
        },
        {
          vote_count: 52,
          id: 34170,
          video: false,
          vote_average: 5.6,
          title: 'Larger than Life',
          popularity: 2.46,
          poster_path: '/hrnStoGvCyJT4vvIWinTlt8fNVG.jpg',
          original_language: 'en',
          original_title: 'Larger than Life',
          genre_ids: [10751, 35],
          backdrop_path: '/wVHq3fNyrblrbM7ZbDjtXehAn0V.jpg',
          adult: false,
          overview:
            'Motivational Speaker Jack Corcoran is determined to get his career off the ground, but the biggest gigs he can get are the ones nobody wants. Then one day, he receives a telegram that his circus clown father has passed away, and has left a "huge" inheritance. When he gets there, he finds that his inheritance has come in the form of an elephant that was his father\'s pride and joy in circus acts. His main intention is to sell the pachyderm off. Jack must choose between loud and rude zookeeper Mo or attractive animal show owner Terry. As the two treks through the country Jack and the elephant develop a bond, and it changes his approach on life for the better.',
          release_date: '1996-10-31'
        },
        {
          vote_count: 324,
          id: 11543,
          video: false,
          vote_average: 6.6,
          title: 'Kingpin',
          popularity: 5.434,
          poster_path: '/l2LObt7s0hakFi9ga6tOKMqKkuo.jpg',
          original_language: 'en',
          original_title: 'Kingpin',
          genre_ids: [35],
          backdrop_path: '/rLW1reSSMCMlKF9A6IViIV1Zbt7.jpg',
          adult: false,
          overview:
            'After bowler Roy Munson swindles the wrong crowd and is left with a hook for a hand, he settles into impoverished obscurity. That is, until he uncovers the next big thing: an Amish kid named Ishmael. So, the corrupt and the hopelessly naïve hit the circuit intent on settling an old score with Big Ern.',
          release_date: '1996-07-04'
        },
        {
          vote_count: 913,
          id: 522,
          video: false,
          vote_average: 7.4,
          title: 'Ed Wood',
          popularity: 6.387,
          poster_path: '/9qBe2sUDyY2dFH1iHq0SZb1G4QG.jpg',
          original_language: 'en',
          original_title: 'Ed Wood',
          genre_ids: [35, 18, 36],
          backdrop_path: '/6zSU6K7q4zntC8vgrvpoUM66eQl.jpg',
          adult: false,
          overview:
            'The mostly true story of the legendary "worst director of all time", who, with the help of his strange friends, filmed countless B-movies without ever becoming famous or successful.',
          release_date: '1994-09-27'
        },
        {
          vote_count: 115,
          id: 10433,
          video: false,
          vote_average: 5.7,
          title: 'Mad Dog and Glory',
          popularity: 5.412,
          poster_path: '/xZlVITyuTxI3Olu9h64xYPdpZyP.jpg',
          original_language: 'en',
          original_title: 'Mad Dog and Glory',
          genre_ids: [35, 80, 10749, 18],
          backdrop_path: '/pCGZ8707SsPvbgaqy78eahOX4e0.jpg',
          adult: false,
          overview:
            'Wayne Dobie is a shy cop whose low-key demeanor has earned him the affectionate nickname "Mad Dog." After Mad Dog saves the life of Frank Milo, a crime boss and aspiring stand-up comedian, he\'s offered the company of an attractive young waitress named Glory for a week. At first both are uneasy about the arrangement, but they eventually fall in love. However, the situation becomes complicated when Milo demands Glory back.',
          release_date: '1993-03-05'
        },
        {
          vote_count: 3262,
          id: 137,
          video: false,
          vote_average: 7.5,
          title: 'Groundhog Day',
          popularity: 11.198,
          poster_path: '/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg',
          original_language: 'en',
          original_title: 'Groundhog Day',
          genre_ids: [10749, 14, 18, 35],
          backdrop_path: '/8mX6FV59T2dSeln4Vc3KLM133aZ.jpg',
          adult: false,
          overview:
            'A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.',
          release_date: '1993-02-11'
        },
        {
          vote_count: 339,
          id: 10276,
          video: false,
          vote_average: 6.9,
          title: 'What About Bob?',
          popularity: 4.97,
          poster_path: '/fopJnM6MCZilYM6nRpglWdFndt1.jpg',
          original_language: 'en',
          original_title: 'What About Bob?',
          genre_ids: [35],
          backdrop_path: '/wwnrt4JclIW5P4jaWnINziGrdmo.jpg',
          adult: false,
          overview:
            "Before going on vacation, self-involved psychiatrist Dr. Leo Marvin has the misfortune of taking on a new patient: Bob Wiley. An exemplar of neediness and a compendium of phobias, Bob follows Marvin to his family's country house. Dr. Marvin tries to get him to leave; the trouble is, everyone loves Bob. As his oblivious patient makes himself at home, Dr. Marvin loses his professional composure and, before long, may be ready for the loony bin himself.",
          release_date: '1991-05-17'
        }
      ]
    },
    {
      page: 4,
      total_results: 87,
      total_pages: 5,
      results: [
        {
          vote_count: 96,
          id: 10729,
          video: false,
          vote_average: 6.5,
          title: 'Quick Change',
          popularity: 4.518,
          poster_path: '/jvaXUsDiX3r2RgVrdNK5SstsEqT.jpg',
          original_language: 'en',
          original_title: 'Quick Change',
          genre_ids: [35, 80, 9648],
          backdrop_path: '/zHF5dXUi1RMU9mPK226embXKBB4.jpg',
          adult: false,
          overview:
            'With the aid of his girlfriend, Phyllis Potter, and best friend, Loomis, Grimm enters a Manhattan bank dressed as a clown, creates a hostage situation and executes a flawless robbery. The only thing left for the trio to do is make their getaway out of the city and to the airport. It sounds simple enough, but it seems that fate deserts them immediately after the bank heist. One mishap after another conspires to keep these robbers from reaching freedom.',
          release_date: '1990-07-13'
        },
        {
          vote_count: 1671,
          id: 2978,
          video: false,
          vote_average: 6.4,
          title: 'Ghostbusters II',
          popularity: 7.638,
          poster_path: '/4nN0EYNbOWHJ9UO39maO5Kvcdfa.jpg',
          original_language: 'en',
          original_title: 'Ghostbusters II',
          genre_ids: [35, 14],
          backdrop_path: '/tDlsTDtC15kJd4vrkQkxqoW4Pse.jpg',
          adult: false,
          overview:
            'Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again, the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat.',
          release_date: '1989-06-15'
        },
        {
          vote_count: 527,
          id: 9647,
          video: false,
          vote_average: 6.8,
          title: 'Scrooged',
          popularity: 5.297,
          poster_path: '/9gUQPVt0QZYKUBrGGtknfrsRQ1c.jpg',
          original_language: 'en',
          original_title: 'Scrooged',
          genre_ids: [14, 35, 18],
          backdrop_path: '/6xezVJoUp0cZUBQeIDpW6lFuhcd.jpg',
          adult: false,
          overview:
            'In this modern take on Charles Dickens\' "A Christmas Carol," Frank Cross (Bill Murray) is a wildly successful television executive whose cold ambition and curmudgeonly nature has driven away the love of his life, Claire Phillips (Karen Allen). But after firing a staff member, Eliot Loudermilk (Bobcat Goldthwait), on Christmas Eve, Frank is visited by a series of ghosts who give him a chance to re-evaluate his actions and right the wrongs of his past.',
          release_date: '1988-11-22'
        },
        {
          vote_count: 75,
          id: 12714,
          video: false,
          vote_average: 5.7,
          title: "She's Having a Baby",
          popularity: 4.426,
          poster_path: '/5vYlV82YQUSubsuGzubnviuyPW9.jpg',
          original_language: 'en',
          original_title: "She's Having a Baby",
          genre_ids: [35, 18, 10749],
          backdrop_path: '/pU2ZFsHkKR0cy8gqmx2wx1b0chD.jpg',
          adult: false,
          overview:
            "Jake and Kristy Briggs are newlyweds. Being young, they are perhaps a bit unprepared for the full reality of marriage and all that it (and their parents) expect from them. Do they want babies? Their parents certainly want them to. Is married life all that there is? Things certainly aren't helped by Jake's friend Davis, who always seems to turn up just in time to put a spanner in the works.",
          release_date: '1988-02-05'
        },
        {
          vote_count: 548,
          id: 10776,
          video: false,
          vote_average: 6.7,
          title: 'Little Shop of Horrors',
          popularity: 6.28,
          poster_path: '/iKkbN17OmFosaW6asCNZTTsyvpu.jpg',
          original_language: 'en',
          original_title: 'Little Shop of Horrors',
          genre_ids: [27, 35, 10402],
          backdrop_path: '/kGOuFe4EJKBcgj4VPodYTFuDAFY.jpg',
          adult: false,
          overview:
            "Seymour Krelborn is a nerdy orphan working at Mushnik's, a flower shop in urban Skid Row. He harbors a crush on fellow co-worker Audrey Fulquard, and is berated by Mr. Mushnik daily. One day as Seymour is seeking a new mysterious plant, he finds a very mysterious unidentified plant which he calls Audrey II. The plant seems to have a craving for blood and soon begins to sing for his supper.",
          release_date: '1986-12-19'
        },
        {
          vote_count: 1,
          id: 503354,
          video: false,
          vote_average: 6,
          title: 'Bugs Bunny/Looney Tunes All-Star 50th Anniversary',
          popularity: 0.986,
          poster_path: '/7ZiU7O8JwEBxIa9aPYIu7lZxlBd.jpg',
          original_language: 'en',
          original_title: 'Bugs Bunny/Looney Tunes All-Star 50th Anniversary',
          genre_ids: [16, 35, 99],
          backdrop_path: null,
          adult: false,
          overview:
            'Celebrities are interviewed about the social and working lives of Bugs, Daffy, Porky and the rest of the Looney Tunes.',
          release_date: '1986-01-14'
        },
        {
          vote_count: 24,
          id: 24453,
          video: false,
          vote_average: 6.5,
          title: "The Razor's Edge",
          popularity: 2.376,
          poster_path: '/ai6iFng036xuBGeDVSEOdhkKrZ2.jpg',
          original_language: 'en',
          original_title: "The Razor's Edge",
          genre_ids: [18],
          backdrop_path: '/rOFSF4bEEY5yBywQuIuiNSX4ylA.jpg',
          adult: false,
          overview:
            "He had everything and wanted nothing. He learned that he had nothing and wanted everything. He saved the world and then it shattered. The path to enlightenment is as sharp and narrow as a razor's edge.",
          release_date: '1984-10-19'
        },
        {
          vote_count: 13,
          id: 52826,
          video: false,
          vote_average: 6.3,
          title: 'Nothing Lasts Forever',
          popularity: 2.723,
          poster_path: '/kEbEySR5MTpVEU1F69hEidDfCNQ.jpg',
          original_language: 'en',
          original_title: 'Nothing Lasts Forever',
          genre_ids: [878, 35, 14],
          backdrop_path: '/wpE72kmTcIrfwdRq1NDobn0TITa.jpg',
          adult: false,
          overview:
            "An artist fails a test and is required to direct traffic in New York City's Holland Tunnel. He winds up falling in love with a beautiful woman, who takes him to the moon on a Lunar Cruiser.",
          release_date: '1984-09-06'
        },
        {
          vote_count: 3516,
          id: 620,
          video: false,
          vote_average: 7.4,
          title: 'Ghostbusters',
          popularity: 12.146,
          poster_path: '/3FS3oBdorgczgfCkFi2u8ZTFfpS.jpg',
          original_language: 'en',
          original_title: 'Ghostbusters',
          genre_ids: [35, 14],
          backdrop_path: '/lIQKmTXxBM0SjdA4lJyV8aFZ6tg.jpg',
          adult: false,
          overview:
            'After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting "ghostbusters" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.',
          release_date: '1984-06-07'
        },
        {
          vote_count: 631,
          id: 9576,
          video: false,
          vote_average: 7.1,
          title: 'Tootsie',
          popularity: 5.798,
          poster_path: '/ngyCzZwb9y5sMUCig5JQT4Y33Q.jpg',
          original_language: 'en',
          original_title: 'Tootsie',
          genre_ids: [35, 10749],
          backdrop_path: '/74Jh5SIWnKDwtusPfDP51EeCFHt.jpg',
          adult: false,
          overview:
            'When struggling, out of work actor Michael Dorsey secretly adopts a female alter ego -- Dorothy Michaels -- in order to land a part in a daytime drama, he unwittingly becomes a feminist icon and ends up in a romantic pickle.',
          release_date: '1982-12-16'
        },
        {
          vote_count: 0,
          id: 62552,
          video: false,
          vote_average: 0,
          title: "The Rodney Dangerfield Show: It's Not Easy Bein' Me",
          popularity: 0.007,
          poster_path: '/2FKmtCyl3Pjqv1sz4RjC6wHYiLu.jpg',
          original_language: 'en',
          original_title: "The Rodney Dangerfield Show: It's Not Easy Bein' Me",
          genre_ids: [35],
          backdrop_path: null,
          adult: false,
          overview:
            'Rodney Dangerfield special, featuring stand-up and sketches.',
          release_date: '1982-05-12'
        },
        {
          vote_count: 0,
          id: 275521,
          video: false,
          vote_average: 0,
          title: "Steve Martin: Steve Martin's Best Show Ever",
          popularity: 0.001,
          poster_path: '/g30wZLICGOmpwlka65qAyW4MawW.jpg',
          original_language: 'en',
          original_title: "Steve Martin: Steve Martin's Best Show Ever",
          genre_ids: [35],
          backdrop_path: null,
          adult: false,
          overview:
            "Steve Martin's fourth NBC special was in the spirit of his previous association with Saturday Night Live. It was broadcast live from Studio 8H, produced by Lorne Michaels and featured some original cast members of the show.",
          release_date: '1981-11-25'
        },
        {
          vote_count: 341,
          id: 10890,
          video: false,
          vote_average: 6.6,
          title: 'Stripes',
          popularity: 8.574,
          poster_path: '/nqfLX1bJLUlZnfflqpUIWrGQwSv.jpg',
          original_language: 'en',
          original_title: 'Stripes',
          genre_ids: [28, 35],
          backdrop_path: '/thGE7y795wcw7I6bEJbbreO6uLQ.jpg',
          adult: false,
          overview:
            'John Winger, an indolent sad sack in his 30s, impulsively joins the U.S. Army after losing his job, his girlfriend and his apartment.',
          release_date: '1981-06-25'
        },
        {
          vote_count: 2,
          id: 44805,
          video: false,
          vote_average: 3,
          title: 'Loose Shoes',
          popularity: 0.167,
          poster_path: '/u111kIZkX7F2JengPcqf8OktWnT.jpg',
          original_language: 'en',
          original_title: 'Loose Shoes',
          genre_ids: [35],
          backdrop_path: '/yqWBi8AgXOMEgQf2aPd0LofTYR5.jpg',
          adult: false,
          overview:
            'Broad satire and buffoonery presented as a series of movie trailers. Among the titles and subjects are: "The Howard Huge Story", "Skate-boarders from Hell", "The Invasion of the Penis Snatchers", Woody Allen (pre-Mia), movie trailer come-ons, Charlie Chaplin, war movies, Billy Jack. The source of the title is presented about an hour into the film.',
          release_date: '1980-08-01'
        },
        {
          vote_count: 483,
          id: 11977,
          video: false,
          vote_average: 6.7,
          title: 'Caddyshack',
          popularity: 7.188,
          poster_path: '/iGA1W74JAQpLKjsUQaFG9Ob1PMj.jpg',
          original_language: 'en',
          original_title: 'Caddyshack',
          genre_ids: [35],
          backdrop_path: '/kdL7CWq5msNd2CzE11fNkY0k4m7.jpg',
          adult: false,
          overview:
            'At an exclusive country club, an ambitious young caddy, Danny Noonan, eagerly pursues a caddy scholarship in hopes of attending college and, in turn, avoiding a job at the lumber yard. In order to succeed, he must first win the favour of the elitist Judge Smails, and then the caddy golf tournament which Smails sponsors.',
          release_date: '1980-07-25'
        },
        {
          vote_count: 11,
          id: 48279,
          video: false,
          vote_average: 5.5,
          title: 'The Missing Link',
          popularity: 1.277,
          poster_path: '/kHzAu0ZLFtiwV0PLV3iEGxtxRIc.jpg',
          original_language: 'en',
          original_title: 'Le chaînon manquant',
          genre_ids: [16, 35, 18],
          backdrop_path: '/cYVky5DplYzN9TaOU5L6ZvSm3i.jpg',
          adult: false,
          overview:
            'An adult animated comedy with rock music soundtrack, portraying a far-fetched explanation of the Dawn of Man.',
          release_date: '1980-05-21'
        },
        {
          vote_count: 59,
          id: 13005,
          video: false,
          vote_average: 6.3,
          title: 'Where the Buffalo Roam',
          popularity: 3.538,
          poster_path: '/etoQq5a3fDuj2hKMLxUCnKqiIJh.jpg',
          original_language: 'en',
          original_title: 'Where the Buffalo Roam',
          genre_ids: [35, 18],
          backdrop_path: '/kYYe3TynmCk6VMLOe4CjmRUzdpX.jpg',
          adult: false,
          overview:
            'Semi-biographical film based on the experiences of gonzo journalist Hunter S. Thompson.',
          release_date: '1980-04-25'
        },
        {
          vote_count: 3,
          id: 49036,
          video: false,
          vote_average: 4.2,
          title: "Mr. Mike's Mondo Video",
          popularity: 0.735,
          poster_path: '/h9sa8TaVjpNBrGkWK4hoEarPCmr.jpg',
          original_language: 'en',
          original_title: "Mr. Mike's Mondo Video",
          genre_ids: [35],
          backdrop_path: null,
          adult: false,
          overview:
            'Mike O\'Donoghue\'s parody of "Mondo Cane" showcases curious performers, strange musicians, celebrity mutations and unusual short films, including Thomas Alva Edison\'s "Elephant Electrocution". In the tradition of films like Groove Tube (1974),  The Kentucky Fried Movie (1977),  and Saturday Night Live.',
          release_date: '1979-09-20'
        },
        {
          vote_count: 111,
          id: 14035,
          video: false,
          vote_average: 6,
          title: 'Meatballs',
          popularity: 5.445,
          poster_path: '/o0NmLgnCVph7I07OP0yKGPFoLrO.jpg',
          original_language: 'en',
          original_title: 'Meatballs',
          genre_ids: [35],
          backdrop_path: '/2whAe8FQiUZdeS7W78vcvhzO4eF.jpg',
          adult: false,
          overview:
            "Tripper is the head counselor at a budget summer camp called Camp Northstar. In truth, he's young at heart and only marginally more mature than the campers themselves. Tripper befriends Rudy, a loner camper who has trouble fitting in. As Tripper inspires his young charges to defeat rival Camp Mohawk in the annual Olympiad competition, Rudy plays matchmaker between Tripper and Roxanne, a female counselor at Northstar.",
          release_date: '1979-06-28'
        },
        {
          vote_count: 2,
          id: 164808,
          video: false,
          vote_average: 8,
          title: 'Fear and Loathing on the Road to Hollywood',
          popularity: 0.549,
          poster_path: '/4M6Lzl6HXvJAQg3jMTHdQ3EOnzX.jpg',
          original_language: 'en',
          original_title: 'Fear and Loathing on the Road to Hollywood',
          genre_ids: [99, 10770],
          backdrop_path: '/5w2bH9uRijAtz2BZDeP4ms4wkx6.jpg',
          adult: false,
          overview:
            "Fear and Loathing on the Road to Hollywood, also known as Fear and Loathing in Gonzovision, is a documentary film produced by BBC in 1978 on the subject of Hunter S. Thompson, directed by Nigel Finch.  The road trip/film pairs Thompson with Finch's fellow Briton the illustrator Ralph Steadman. The party travel to Hollywood via Death Valley and Barstow from Las Vegas, scene of the pair's 1971 collaboration. It contains interviews with Thompson and Steadman, as well as some short excerpts from some of his work.",
          release_date: '1978-11-02'
        }
      ]
    },
    {
      page: 5,
      total_results: 87,
      total_pages: 5,
      results: [
        {
          vote_count: 0,
          id: 421637,
          video: false,
          vote_average: 0,
          title: 'The Dogs',
          popularity: 0.098,
          poster_path: null,
          original_language: 'en',
          original_title: 'The Dogs',
          genre_ids: [],
          backdrop_path: null,
          adult: false,
          overview: 'A talent agent pitches a singing dog act.',
          release_date: '1978-10-02'
        },
        {
          vote_count: 36,
          id: 16378,
          video: false,
          vote_average: 6.8,
          title: 'The Rutles: All You Need Is Cash',
          popularity: 2.493,
          poster_path: '/cYP9PFfgo3uWp8WB59GVib7knk7.jpg',
          original_language: 'en',
          original_title: 'The Rutles: All You Need Is Cash',
          genre_ids: [35],
          backdrop_path: '/3xz7FAEsnwvOBGkXt5w6dZRYiLI.jpg',
          adult: false,
          overview: 'The story of the rise and fall of the Pre-Fab Four.',
          release_date: '1978-03-22'
        },
        {
          vote_count: 11,
          id: 31913,
          video: false,
          vote_average: 7.3,
          title: 'Next Stop, Greenwich Village',
          popularity: 2.166,
          poster_path: '/7A2uH51UYXgXs5tMXE41t2OS8M5.jpg',
          original_language: 'en',
          original_title: 'Next Stop, Greenwich Village',
          genre_ids: [35, 18],
          backdrop_path: '/AdGXPG1XBKYWSUrQXLvyDGilUjs.jpg',
          adult: false,
          overview:
            "An aspiring Jewish actor moves out of his parents' Brooklyn apartment to seek his fortune in the bohemian life of Greenwich Village in 1953.",
          release_date: '1976-02-04'
        },
        {
          vote_count: 2,
          id: 535581,
          video: false,
          vote_average: 10,
          title: "The Dead Don't Die",
          popularity: 0.102,
          poster_path: null,
          original_language: 'en',
          original_title: "The Dead Don't Die",
          genre_ids: [35, 27],
          backdrop_path: null,
          adult: false,
          overview: '',
          release_date: ''
        },
        {
          vote_count: 2,
          id: 137127,
          video: false,
          vote_average: 8.5,
          title: 'B.O.O.: Bureau of Otherworldly Operations',
          popularity: 0.701,
          poster_path: '/9R0vgvznKRnMtiIyiglhoJmxfrj.jpg',
          original_language: 'en',
          original_title: 'B.O.O.: Bureau of Otherworldly Operations',
          genre_ids: [10751, 16, 35],
          backdrop_path: null,
          adult: false,
          overview:
            "B.O.O. (Bureau of Otherworldly Operations) is the super classified agency you've never heard of and certainly never seen. Dedicated to protecting humans from evil hauntings, the agents of B.O.O. have a secret weapon: they are ghosts themselves. When newbie agents Jackson Moss and his odd-ball partner Watts uncover a plot to destroy B.O.O. by the agency's Most Wanted Haunter, they must use every trick in their arsenal to defeat his powerful ghost army and save Earth from a ghostly fate.",
          release_date: ''
        },
        {
          vote_count: 0,
          id: 396954,
          video: false,
          vote_average: 0,
          title: 'The King of Counterfeit',
          popularity: 0.448,
          poster_path: null,
          original_language: 'en',
          original_title: 'The King of Counterfeit',
          genre_ids: [],
          backdrop_path: null,
          adult: false,
          overview:
            'Two counterfeiters and their attorney get in deep trouble when a ruthless competitor wants to stop them.',
          release_date: ''
        },
        {
          vote_count: 0,
          id: 424777,
          video: false,
          vote_average: 0,
          title: 'The Bill Murray Experience',
          popularity: 0.004,
          poster_path: '/rexEDq5jVV9Vc29mllmPwEJpnxj.jpg',
          original_language: 'en',
          original_title: 'The Bill Murray Experience',
          genre_ids: [99],
          backdrop_path: null,
          adult: false,
          overview:
            'At a crossroads in her life, actress Sadie Katz embarks on a year-long quest to have a magical experience with legendary comedian Bill Murray.',
          release_date: ''
        }
      ]
    }
  ]
}]));

export const setUserData = jest.fn().mockImplementation(() => ({
  status: 'complete'
}))

export const addMovieToDatabase = jest.fn().mockImplementation(() => ({
  status: 'complete'
}))

export const deleteMovieFromDatabase = jest.fn().mockImplementation(() => ({
  status: 'complete'
}))

export const fetchUserData = jest.fn().mockImplementation(() => ({
  data: {
    id: 1,
    name: 'Taylor',
    password: 'password',
    email: 'tman2272@aol.com'
  }
}))

export const cleanMurrayData = jest.fn().mockImplementation(() => (
  [
    {
      title: 'Isle of Dogs',
      overview:
        "In the future, an outbreak of canine flu leads the mayor of a Japanese city to banish all dogs to an island that's a garbage dump. Theoutcasts must soon embark on an epic journey when a 12-year-old boy arrives on the island to find his beloved pet.",
      release: '2018-03-23',
      image: 'https://image.tmdb.org/t/p/w500/rSluCePdXXtNiQeE6Na5yRGamhL.jpg',
      id: 399174,
      vote_average: 7.8
    },
    {
      title: "'85: The Greatest Team in Pro Football History",
      overview:
        'Through never-been-seen-before footage and fascinating interviews with key members of the 1985 Chicago Bears -- Mike Ditka, Jim McMahon, Mike Singletary, and others -- you will hear the inside story of their historic season.',
      release: '2016-10-01',
      image: 'https://image.tmdb.org/t/p/w500/Ab5Fg3hNTq5ApCzPkmAQWubqg5Z.jpg',
      id: 430364,
      vote_average: 9
    },
    {
      title: 'Ghostbusters',
      overview:
        'Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.',
      release: '2016-07-14',
      image: 'https://image.tmdb.org/t/p/w500/4qnJ1hsMADxzwnOmnwjZTNp0rKT.jpg',
      id: 43074,
      vote_average: 5.4
    },
    {
      title: 'Cold Lairs',
      overview:
        'In this cinematic VR experience from Disney\'s "The Jungle Book", you are inside a darkened temple, with only the light from above to illuminate your surroundings. All around you are monkeys of every variety. You hear a sound from the darkness and the monkeys begin to wail. A giant, shadowy figure reaches towards you. It\'s King Louie... and he wants something you have.',
      release: '2016-04-05',
      image: 'https://image.tmdb.org/t/p/w500/pvmXvKk4lDUAuvCFY0LfxbSMBRe.jpg',
      id: 392034,
      vote_average: 0
    },
    {
      title: 'The Jungle Book',
      overview:
        'A man-cub named Mowgli fostered by wolves. After athreat from the tiger Shere Khan, Mowgli is forced to flee the jungle, by which he embarks on a journey of self discovery with the help of the panther, Bagheera and the free-spirited bear, Baloo.',
      release: '2016-04-07',
      image: 'https://image.tmdb.org/t/p/w500/vOipe2myi26UDwP978hsYOrnUWC.jpg',
      id: 278927,
      vote_average: 6.8
    },
    {
      title: 'A Very Murray Christmas',
      overview:
        'Bill Murray worries no one will show up to his TV show due to a massive snowstorm in New York City. Through luck and perseverance, guests arrive at Gotham’s Carlyle Hotel to help him — dancing and singing in holiday spirit.',
      release: '2015-12-04',
      image: 'https://image.tmdb.org/t/p/w500/3CMBgEte4pEapn2deugsfz2hjAL.jpg',
      id: 364067,
      vote_average: 5.2
    },
    {
      title: 'Rock the Kasbah',
      overview:
        'A washed-up music producer finds one last shot at redemption with a golden-voiced young girl in Afghanistan. However, whenjealousy gets the better of a disgruntled ex-boyfriend, he decides to oppose the young star with talent of his own.',
      release: '2015-10-22',
      image: 'https://image.tmdb.org/t/p/w500/7Ljch9R3uie8lV3z1GUUHZRkvKH.jpg',
      id: 253414,
      vote_average: 5.3
    },
    {
      title: 'Thank You, Del: The Story of the Del Close Marathon',
      overview:
        'Del Close was never a household name, but any comedy enthusiast is aware of his impact. From Bill Murray to Chris Farley to Amy Poehler, many of the most famous comedians consider him their mentor. Fifteen years after Del Close’s death, thousands of Improv students,comedy fans, actors, and successful comedians gather to celebrate the most important person in modern comedy that no one knows.',
      release: '2015-10-13',
      image: 'https://image.tmdb.org/t/p/w500/rnGpvbQ8Xr1v5kvIa52yFQYf9EZ.jpg',
      id: 381062,
      vote_average: 5
    },
    {
      title: 'Aloha',
      overview:
        'A celebrated military contractor returns to the site of his greatest career triumphs and re-connects with a long-ago love while unexpectedly falling for the hard-charging Air Force watchdog assigned to him.',
      release: '2015-05-27',
      image: 'https://image.tmdb.org/t/p/w500/4Q0rnkCsQ9GhdnR66Bqjvav2Q1x.jpg',
      id: 222936,
      vote_average: 5.2
    },
    {
      title: 'Saturday Night Live 40th Anniversary Special',
      overview:
        "A three-hour prime-time special celebrating SNL '​s fortieth year on the air.",
      release: '2015-02-15',
      image: 'https://image.tmdb.org/t/p/w500/tdS7BgV7pqJUs0lnO8mxDqu8ZfJ.jpg',
      id: 324601,
      vote_average: 7.1
    },
    {
      title: 'Drunk Stoned Brilliant Dead: The Story of the National Lampoon',
      overview:
        'A look at the history of the American comedy publication and production company, National Lampoon, from its beginning in the 1970s to 2010, featuring rare and never before seen footage, this is the mind boggling story of The National Lampoon from its subversive and electrifying beginnings, to rebirth as an unlikely Hollywood heavyweight, and beyond. A humour empire like no other, the impact of the magazinesirreverent, often shocking, sensibility was nothing short of seismic: this is an institution whose (drunk stoned brilliant) alumni left their fingerprints all over popular culture. Both insanely great and breathtakingly innovative, The National Lampoon created the foundation of modern comic sensibility by setting the bar in comedy impossibly high.',
      release: '2015-01-25',
      image: 'https://image.tmdb.org/t/p/w500/t7fqemeHtEaxG0Ry0bTox4spBY0.jpg',
      id: 319070,
      vote_average: 6.6
    },
    {
      title: 'Dumb and Dumber To',
      overview:
        '20 years after the dimwits set out on their first adventure, they head out in search of one of their long lost children inthe hope of gaining a new kidney.',
      release: '2014-11-12',
      image: 'https://image.tmdb.org/t/p/w500/Ekw3ijq9L6RiKvv5m2tPOEklHF.jpg',
      id: 100042,
      vote_average: 5.4
    },
    {
      title: 'St. Vincent',
      overview:
        'A young boy whose parents just divorced finds an unlikely friend and mentor in the misanthropic, bawdy, hedonistic, war veteran who lives next door.',
      release: '2014-10-09',
      image: 'https://image.tmdb.org/t/p/w500/w0hzr4eQBk1X4m63fb7sOSt9Bnn.jpg',
      id: 239563,
      vote_average: 7.1
    },
    {
      title: 'The Grand Budapest Hotel',
      overview:
        'The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals thattransformed Europe during the first half of the 20th century.',
      release: '2014-02-26',
      image: 'https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg',
      id: 120467,
      vote_average: 8
    },
    {
      title: 'The Monuments Men',
      overview:
        'Based on the true story of the greatest treasure hunt in history, The Monuments Men is an action drama focusing on seven over-the-hill, out-of-shape museum directors, artists, architects, curators, and art historians who went to the front lines of WWII to rescue theworld’s artistic masterpieces from Nazi thieves and return them to their rightful owners.  With the art hidden behind enemy lines, how could these guys hope to succeed?',
      release: '2014-01-24',
      image: 'https://image.tmdb.org/t/p/w500/lhCUqVEPA3MMxnV8QTeVBTmRrP4.jpg',
      id: 152760,
      vote_average: 5.9
    },
    {
      title: 'Hyde Park on Hudson',
      overview:
        'The story of the love affair between FDR and his distant cousin Margaret Stuckley, centered around the weekend in 1939 when the King and Queen of the United Kingdom visited upstate New York.',
      release: '2012-12-07',
      image: 'https://image.tmdb.org/t/p/w500/3mbfrCzlXlzO5kDTq2Qgj9EefYz.jpg',
      id: 87504,
      vote_average: 5.3
    },
    {
      title: 'A Glimpse Inside the Mind of Charles Swan III',
      overview:
        'Charles Swan III, a successful graphic designer, has it all: fame, money and devilish charm that have provided him with a seemingly perfect life. But when a perplexing beauty named Ivana suddenly ends their relationship, Charles is left heartbroken. With the supportof his loyal intimates - Kirby, Saul, and his sister, Izzy – Charles begins a delirious journey of self-reflection to try and come to terms with a life without Ivana. "A Glimpse Inside the Mind of Charles Swan III" is an unconventional melodrama told in a bold and playful style.',
      release: '2012-11-15',
      image: 'https://image.tmdb.org/t/p/w500/6KeYxz1wzjvkvUhkiva9ULzipQY.jpg',
      id: 124461,
      vote_average: 4.4
    },
    {
      title: 'Moonrise Kingdom',
      overview:
        'Set on an island off the coast of New England in the summer of 1965, Moonrise Kingdom tells the story of two twelve-year-olds who fall in love, make a secret pact, and run away together into thewilderness. As various authorities try to hunt them down, a violent storm is brewing off-shore – and the peaceful island community is turned upside down in more ways than anyone can handle.',
      release: '2012-05-24',
      image: 'https://image.tmdb.org/t/p/w500/ysTohGF7NY9Z6MYz9vLNYiyzh0r.jpg',
      id: 83666,
      vote_average: 7.7
    },
    {
      title: 'Final Cut: Ladies and Gentlemen',
      overview:
        'A film where anything can happen - the hero and the heroine changes their faces, age, look, names, and so on. The only same thing: The love between man and woman... in an archetypical love storycut from 500 classics from all around the world.',
      release: '2012-02-04',
      image: 'https://image.tmdb.org/t/p/w500/tXeaMMQ1EAHVDRMrEcNzoO25EwT.jpg',
      id: 126314,
      vote_average: 7.7
    },
    {
      title: 'Passion Play',
      overview:
        'An angel under the thumb of a ruthless gangster issaved by a trumpet player down on his luck.',
      release: '2010-09-10',
      image: 'https://image.tmdb.org/t/p/w500/rp5YsVLlJP1ZxsGDkeLC78olyF4.jpg',
      id: 38753,
      vote_average: 5
    },
    {
      title: 'Fantastic Mr. Fox',
      overview:
        'The Fantastic Mr. Fox bored with his current life,plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.',
      release: '2009-10-23',
      image: 'https://image.tmdb.org/t/p/w500/750pfEttsYAVmynRg2vmt1AXh4q.jpg',
      id: 10315,
      vote_average: 7.6
    },
    {
      title: 'Zombieland',
      overview:
        "Columbus has made a habit of running from what scares him. Tallahassee doesn't have fears. If he did, he'd kick their ever-living ass. In a world overrun by zombies, these two are perfectly evolved survivors. But now, they're about to stare down the most terrifying prospect of all: each other.",
      release: '2009-10-07',
      image: 'https://image.tmdb.org/t/p/w500/vUzzDpVrab1BOG3ogxhRGfLN94d.jpg',
      id: 19908,
      vote_average: 7.2
    },
    {
      title: 'Get Low',
      overview:
        'A movie spun out of equal parts folk tale, fable and real-life legend about the mysterious, 1930s Tennessee hermit who famously threw his own rollicking funeral party... while he was still alive.',
      release: '2010-01-22',
      image: 'https://image.tmdb.org/t/p/w500/kLw9J6Rp3surSUKZbmJ9KZDwFBT.jpg',
      id: 44718,
      vote_average: 6.8
    },
    {
      title: 'The Limits of Control',
      overview:
        'A mysterious stranger works outside the law and keeps his objectives hidden, trusting no one. While his demeanor is paradoxically focused and dreamlike all at once, he embarks on a journey that not only takes him across Spain, but also through his own consciousness.',
      release: '2009-05-01',
      image: 'https://image.tmdb.org/t/p/w500/jz6zzcdOf09eGQUbTWZjVU99iC5.jpg',
      id: 8284,
      vote_average: 6.4
    },
    {
      title: 'City of Ember',
      overview:
        "For generations, the people of the City of Ember have flourished in an amazing world of glittering lights. But Ember's once powerful generator is failing and the great lamps that illuminate thecity are starting to flicker. Now, two teenagers, in a race against time, must search Ember for clues that will unlock the ancient mystery of the city's existence, before the the lights go out forever.",
      release: '2008-10-07',
      image: 'https://image.tmdb.org/t/p/w500/vtlcA292oROPaG74amLsAhtBNbB.jpg',
      id: 13600,
      vote_average: 6.2
    },
    {
      title: 'Get Smart',
      overview:
        'When the identities of secret agents from Control are compromised, the Chief promotes hapless but eager analyst Maxwell Smart and teams him with stylish, capable Agent 99, the only spy whose cover remains intact. Can they work together to thwart the evil plans of KAOS and its crafty operative?',
      release: '2008-06-19',
      image: 'https://image.tmdb.org/t/p/w500/zS3UhYJvy6oLTBgNckpoyAa0qNs.jpg',
      id: 11665,
      vote_average: 6
    },
    {
      title: 'A Better Man: The Making of Tootsie',
      overview:
        'Documentary about the making of the 1982 film, featuring interviews with the cast and crew.',
      release: '2008-02-05',
      image: 'https://image.tmdb.org/t/p/w500null',
      id: 479530,
      vote_average: 0
    },
    {
      title: 'The Darjeeling Limited',
      overview:
        'Three American brothers who have not spoken to each other in a year set off on a train voyage across India with a plan to find themselves and bond with each other -- to become brothers again like they used to be. Their "spiritual quest", however, veers rapidly off-course (due to events involving over-the-counter pain killers, Indian cough syrup, and pepper spray).',
      release: '2007-09-29',
      image: 'https://image.tmdb.org/t/p/w500/47AGp0EKNMjqBBPaxRYDW0Sc5If.jpg',
      id: 4538,
      vote_average: 7.2
    },
    {
      title: 'FCU: Fact Checkers Unit',
      overview:
        "After being assigned to check a bizarre fact aboutBill Murray's love for drinking milk, two magazine fact checkers breakinto Bill's house to spy on him.",
      release: '2007-09-09',
      image: 'https://image.tmdb.org/t/p/w500null',
      id: 485282,
      vote_average: 5
    },
    {
      title: 'Buy the Ticket, Take the Ride',
      overview:
        'A personal, intimate look at journalist Hunter S. Thompson with a special emphasis on his Hollywood relationships. It captures the legacy and "gonzo" spirit of one of this century\'s most notorious figures - a man whose life and work regularly intersected with some of the biggest names in the world of film, politics, journalism and sports.',
      release: '2006-12-12',
      image: 'https://image.tmdb.org/t/p/w500/xbt6aftwE8d9TKhepA2o6a3ZDdG.jpg',
      id: 25740,
      vote_average: 6.7
    },
    {
      title: 'Garfield: A Tail of Two Kitties',
      overview:
        'Garfield is back and this time Garfield and his canine sidekick Odie follows their owner, Jon Arbuckle, to England, the U.K. may never recover, as Garfield is mistaken for a look-alike, regal cat who has inherited a castle.',
      release: '2006-06-15',
      image: 'https://image.tmdb.org/t/p/w500/aagx3t2Xv7R26hcqzrayTT28Yww.jpg',
      id: 9513,
      vote_average: 5.3
    },
    {
      title: 'The Lost City',
      overview:
        "In Havana, Cuba in the late 1950's, a wealthy family, one of whose sons is a prominent nightclub owner, is caught in the violent transition from the oppressive regime of Batista to the Marxist government of Fidel Castro. Castro's regime ultimately leads the nightclub owner to flee to New York.",
      release: '2005-09-03',
      image: 'https://image.tmdb.org/t/p/w500/v19DsrJb0TJxTCdgaUzzuvOjfeD.jpg',
      id: 9700,
      vote_average: 6
    },
    {
      title: 'Broken Flowers',
      overview:
        'As the devoutly single Don Johnston is dumped by his latest girlfriend, he receives an anonymous pink letter informing himthat he has a son who may be looking for him.',
      release: '2005-05-17',
      image: 'https://image.tmdb.org/t/p/w500/pvtdRUpJE6YjIi8BLEZ7jhEdeN1.jpg',
      id: 308,
      vote_average: 6.9
    },
    {
      title: 'This Is an Adventure',
      overview:
        'During production on the film "The Life Aquatic with Steve Zissou", documentary filmmakers followed the cast and crew of afilm which depicts other documentary filmmakers who follow animal life.In this film, we get a first hand look at the sets and come very close to many of the cast and crew members at work, especially Bill Murray andWes Anderson.',
      release: '2005-05-10',
      image: 'https://image.tmdb.org/t/p/w500null',
      id: 415950,
      vote_average: 0
    },
    {
      title: "Matthew Gray Gubler's Life Aquatic Intern Journal",
      overview:
        'Documentary created by Matthew Gray Gubler during,and about, his time on the set of The Life Aquatic with Steve Zissou.  (Released in 2005)',
      release: '2005-05-09',
      image: 'https://image.tmdb.org/t/p/w500/v4qJhj3E664f4Livd8I99SvmicG.jpg',
      id: 199353,
      vote_average: 5.6
    },
    {
      title: 'The Life Aquatic with Steve Zissou',
      overview:
        'Wes Anderson’s incisive quirky comedy build up stars complex characters like in ‘The Royal Tenenbaums’ with Bill Murray onin the leading role. An ocean adventure documentary film maker Zissou is put in all imaginable life situations and a tough life crisis as he attempts to make a new film about capturing the creature that caused him pain.',
      release: '2004-12-10',
      image: 'https://image.tmdb.org/t/p/w500/kKwNRePEqTfC6DnNlJzz1yX44iR.jpg',
      id: 421,
      vote_average: 7.1
    },
    {
      title: 'Garfield',
      overview:
        "Garfield, the fat, lazy, lasagna lover, has everything a cat could want. But when Jon, in an effort to impress the Liz - the vet and an old high-school crush - adopts a dog named Odie and bringshim home, Garfield gets the one thing he doesn't want. Competition.",
      release: '2004-06-10',
      image: 'https://image.tmdb.org/t/p/w500/v6xvth8PjDG350ARG9H2sF7N3SF.jpg',
      id: 8920,
      vote_average: 5.3
    },
    {
      title: "Lost on Location: Behind the Scenes of 'Lost in Translation'",
      overview:
        "Behind the scenes documentary shot during the making of Sofia Coppola's Lost In Translation (2003)",
      release: '2004-02-03',
      image: 'https://image.tmdb.org/t/p/w500/lsVQfLaklarG4E3tz5xqlgp7QXY.jpg',
      id: 113149,
      vote_average: 8
    },
    {
      title: 'Coffee and Cigarettes',
      overview:
        'Coffee And Cigarettes is a collection of eleven films from cult director Jim Jarmusch. Each film hosts star studded cast of extremely unique individuals who all share the common activities of conversing while drinking coffee and smoking cigarettes.',
      release: '2003-09-05',
      image: 'https://image.tmdb.org/t/p/w500/myLbZRsgRVyfj1luCvUcgB9cjGs.jpg',
      id: 883,
      vote_average: 7.1
    },
    {
      title: 'Lost in Translation',
      overview:
        "Two lost souls visiting Tokyo -- the young, neglected wife of a photographer and a washed-up movie star shooting a TV commercial -- find an odd solace and pensive freedom to be real in each other's company, away from their lives in America.",
      release: '2003-08-31',
      image: 'https://image.tmdb.org/t/p/w500/5T8VvuFTdaawKLJk34i69Utaw7o.jpg',
      id: 153,
      vote_average: 7.4
    },
    {
      title: "The Rutles 2: Can't Buy Me Lunch",
      overview:
        "Twenty-three years after the release of the original Beatles mockumentary, 'The Rutles: All You Need Is Cash', famous artists, actors and musicians speak out on how The Rutles influenced them.",
      release: '2002-01-01',
      image: 'https://image.tmdb.org/t/p/w500/maUbhufh8qw44vg2rYnQcozpd2l.jpg',
      id: 32694,
      vote_average: 7.2
    },
    {
      title: 'Speaking of Sex',
      overview:
        'A counselor, an expert on depression, and two attorneys try to help a couple who have marital problems.',
      release: '2001-10-18',
      image: 'https://image.tmdb.org/t/p/w500/imCndGIIYvbGkw5PHra3suxITq9.jpg',
      id: 16435,
      vote_average: 6.3
    },
    {
      title: 'The Royal Tenenbaums',
      overview:
        'Royal Tenenbaum and his wife Etheline had three children and then they separated. All three children are extraordinary ---all geniuses. Virtually all memory of the brilliance of the young Tenenbaums was subsequently erased by two decades of betrayal, failure, and disaster. Most of this was generally considered to be their father\'s fault. "The Royal Tenenbaums" is the story of the family\'s sudden, unexpected reunion one recent winter.',
      release: '2001-10-12',
      image: 'https://image.tmdb.org/t/p/w500/5xw30y0pSaMtTcuZW5VaQPiR8qb.jpg',
      id: 9428,
      vote_average: 7.4
    },
    {
      title: 'Osmosis Jones',
      overview:
        'A policeman white blood cell, with the help of a cold pill, must stop a deadly virus from destroying the human they live in, Frank.',
      release: '2001-08-07',
      image: 'https://image.tmdb.org/t/p/w500/2NvnoaJflAEcT0zlzbS4hlwrDZX.jpg',
      id: 12610,
      vote_average: 6.1
    },
    {
      title: "Charlie's Angels",
      overview:
        'Three women, detectives with a mysterious boss, retrieve stolen voice-ID software, using martial arts, tech skills, and sex appeal.',
      release: '2000-11-02',
      image: 'https://image.tmdb.org/t/p/w500/eBzf9d09Vgq2HSVC4fIZm1QNQd.jpg',
      id: 4327,
      vote_average: 5.6
    },
    {
      title: 'Hamlet',
      overview:
        "Modern day adaptation of Shakespeare's immortal story about Hamlet's plight to avenge his father's murder in New York City.",
      release: '2000-05-12',
      image: 'https://image.tmdb.org/t/p/w500/kc8qcAVglziuisHaCIH4mPGma6e.jpg',
      id: 10688,
      vote_average: 5.9
    },
    {
      title: 'Michael Jordan to the Max',
      overview:
        "This documentary showcases basketball player Michael Jordan's awe-inspiring moves, providing behind-the-scenes and on-the-court action, including footage of Jordan and the Chicago Bulls going head-to-head against the Utah Jazz in the 1997 NBA Finals. Phil Jackson and Bob Costas are interviewed (among others), and the awesome soundtrackincludes songs by Earth, Wind and Fire, Fatboy Slim and Freddie King.",
      release: '2000-05-05',
      image: 'https://image.tmdb.org/t/p/w500/6mpDcmOOjgls5aVSOwp6rNmSTOB.jpg',
      id: 24977,
      vote_average: 7.5
    },
    {
      title: 'Cradle Will Rock',
      overview:
        'A true story of politics and art in the 1930s USA,centered around a leftist musical drama and attempts to stop its production.',
      release: '1999-12-10',
      image: 'https://image.tmdb.org/t/p/w500/1fTdEqJFZMSTRtZSnT2IL3MibvW.jpg',
      id: 32274,
      vote_average: 6.8
    },
    {
      title: 'Caddyshack: The 19th Hole',
      overview:
        "Behind-the-scenes documentary of the making of 'Caddyshack'.  Among the people interviewed: producer Jon Peters, writer/director Harold Ramis, and players Cindy Morgan, Scott Colomby,  Ann Ryerson, Hamilton Mitchell, and Chevy Chase.",
      release: '1999-05-05',
      image: 'https://image.tmdb.org/t/p/w500/lb136Ri2xZIkAxFgdBgbDpru64w.jpg',
      id: 210719,
      vote_average: 7
    },
    {
      title: 'Rushmore',
      overview:
        "When a beautiful first-grade teacher arrives at a prep school, she soon attracts the attention of an ambitious teenager named Max, who quickly falls in love with her. Max turns to the father of two of his schoolmates for advice on how to woo the teacher. However, the situation soon gets complicated when Max's new friend becomes involved with her, setting the two pals against one another in a war for her attention.",
      release: '1998-10-09',
      image: 'https://image.tmdb.org/t/p/w500/q3ov1BFTCRWoR9Q6udaRbmgfWwg.jpg',
      id: 11545,
      vote_average: 7.5
    },
    {
      title: 'With Friends Like These...',
      overview:
        'Four small-time two-bit character actors, all close friends, are competing for same important part in the next Martin Scorsese mob film.',
      release: '1998-09-10',
      image: 'https://image.tmdb.org/t/p/w500/iaOiRKh9o8hoAEAUWc7Dq71w2cl.jpg',
      id: 126152,
      vote_average: 0
    },
    {
      title: 'Wild Things',
      overview:
        "When teen-socialite Kelly Van Ryan and troubled bad girl Suzie Toller accuse guidance counselor Sam Lombardo of rape, he's suspended by the school, rejected by the town, and fighting to get hislife back. One cop suspects conspiracy, but nothing is what it seems...",
      release: '1998-03-20',
      image: 'https://image.tmdb.org/t/p/w500/dI9iYo1cL81yzJkBVyNGipjSvy0.jpg',
      id: 617,
      vote_average: 6.3
    },
    {
      title: 'The Man Who Knew Too Little',
      overview:
        "An American gets a ticket for an audience participation game in London, then gets involved in a case of mistaken identity.As an international plot unravels around him, he thinks it's all part of the act.",
      release: '1997-11-14',
      image: 'https://image.tmdb.org/t/p/w500/32UQkAUWy9NpuvJfF82xrMr2A0G.jpg',
      id: 9414,
      vote_average: 6.4
    },
    {
      title: 'Space Jam',
      overview:
        'In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan.',
      release: '1996-11-15',
      image: 'https://image.tmdb.org/t/p/w500/xI9AwhOWtsbFlS8tYD2PXa80p7u.jpg',
      id: 2300,
      vote_average: 6.6
    },
    {
      title: 'Larger than Life',
      overview:
        'Motivational Speaker Jack Corcoran is determined to get his career off the ground, but the biggest gigs he can get are theones nobody wants. Then one day, he receives a telegram that his circusclown father has passed away, and has left a "huge" inheritance. When he gets there, he finds that his inheritance has come in the form of an elephant that was his father\'s pride and joy in circus acts. His main intention is to sell the pachyderm off. Jack must choose between loud and rude zookeeper Mo or attractive animal show owner Terry. As the two treks through the country Jack and the elephant develop a bond, and it changes his approach on life for the better.',
      release: '1996-10-31',
      image: 'https://image.tmdb.org/t/p/w500/hrnStoGvCyJT4vvIWinTlt8fNVG.jpg',
      id: 34170,
      vote_average: 5.6
    },
    {
      title: 'Kingpin',
      overview:
        'After bowler Roy Munson swindles the wrong crowd and is left with a hook for a hand, he settles into impoverished obscurity. That is, until he uncovers the next big thing: an Amish kid named Ishmael. So, the corrupt and the hopelessly naïve hit the circuit intent onsettling an old score with Big Ern.',
      release: '1996-07-04',
      image: 'https://image.tmdb.org/t/p/w500/l2LObt7s0hakFi9ga6tOKMqKkuo.jpg',
      id: 11543,
      vote_average: 6.6
    },
    {
      title: 'Ed Wood',
      overview:
        'The mostly true story of the legendary "worst director of all time", who, with the help of his strange friends, filmed countless B-movies without ever becoming famous or successful.',
      release: '1994-09-27',
      image: 'https://image.tmdb.org/t/p/w500/9qBe2sUDyY2dFH1iHq0SZb1G4QG.jpg',
      id: 522,
      vote_average: 7.4
    },
    {
      title: 'Mad Dog and Glory',
      overview:
        'Wayne Dobie is a shy cop whose low-key demeanor has earned him the affectionate nickname "Mad Dog." After Mad Dog saves the life of Frank Milo, a crime boss and aspiring stand-up comedian, he\'soffered the company of an attractive young waitress named Glory for a week. At first both are uneasy about the arrangement, but they eventuallyfall in love. However, the situation becomes complicated when Milo demands Glory back.',
      release: '1993-03-05',
      image: 'https://image.tmdb.org/t/p/w500/xZlVITyuTxI3Olu9h64xYPdpZyP.jpg',
      id: 10433,
      vote_average: 5.7
    },
    {
      title: 'Groundhog Day',
      overview:
        'A narcissistic TV weatherman, along with his attractive-but-distant producer and mawkish cameraman, is sent to report on Groundhog Day in the small town of Punxsutawney, where he finds himself repeating the same day over and over.',
      release: '1993-02-11',
      image: 'https://image.tmdb.org/t/p/w500/vXjVd0Vu0MXRZnga7wEnHIIhO5B.jpg',
      id: 137,
      vote_average: 7.5
    },
    {
      title: 'What About Bob?',
      overview:
        "Before going on vacation, self-involved psychiatrist Dr. Leo Marvin has the misfortune of taking on a new patient: Bob Wiley. An exemplar of neediness and a compendium of phobias, Bob follows Marvin to his family's country house. Dr. Marvin tries to get him to leave; the trouble is, everyone loves Bob. As his oblivious patient makes himself at home, Dr. Marvin loses his professional composure and, before long, may be ready for the loony bin himself.",
      release: '1991-05-17',
      image: 'https://image.tmdb.org/t/p/w500/fopJnM6MCZilYM6nRpglWdFndt1.jpg',
      id: 10276,
      vote_average: 6.9
    },
    {
      title: 'Quick Change',
      overview:
        'With the aid of his girlfriend, Phyllis Potter, and best friend, Loomis, Grimm enters a Manhattan bank dressed as a clown,creates a hostage situation and executes a flawless robbery. The only thing left for the trio to do is make their getaway out of the city and to the airport. It sounds simple enough, but it seems that fate deserts them immediately after the bank heist. One mishap after another conspiresto keep these robbers from reaching freedom.',
      release: '1990-07-13',
      image: 'https://image.tmdb.org/t/p/w500/jvaXUsDiX3r2RgVrdNK5SstsEqT.jpg',
      id: 10729,
      vote_average: 6.5
    },
    {
      title: 'Ghostbusters II',
      overview:
        'Five years after they defeated Gozer, the Ghostbusters are out of business. When Dana begins to have ghost problems again,the boys come out of retirement to aid her and hopefully save New York City from a new paranormal threat.',
      release: '1989-06-15',
      image: 'https://image.tmdb.org/t/p/w500/4nN0EYNbOWHJ9UO39maO5Kvcdfa.jpg',
      id: 2978,
      vote_average: 6.4
    },
    {
      title: 'Scrooged',
      overview:
        'In this modern take on Charles Dickens\' "A Christmas Carol," Frank Cross (Bill Murray) is a wildly successful television executive whose cold ambition and curmudgeonly nature has driven away the love of his life, Claire Phillips (Karen Allen). But after firing a staff member, Eliot Loudermilk (Bobcat Goldthwait), on Christmas Eve, Frank is visited by a series of ghosts who give him a chance to re-evaluate his actions and right the wrongs of his past.',
      release: '1988-11-22',
      image: 'https://image.tmdb.org/t/p/w500/9gUQPVt0QZYKUBrGGtknfrsRQ1c.jpg',
      id: 9647,
      vote_average: 6.8
    },
    {
      title: "She's Having a Baby",
      overview:
        "Jake and Kristy Briggs are newlyweds. Being young,they are perhaps a bit unprepared for the full reality of marriage and all that it (and their parents) expect from them. Do they want babies? Their parents certainly want them to. Is married life all that there is? Things certainly aren't helped by Jake's friend Davis, who always seems to turn up just in time to put a spanner in the works.",
      release: '1988-02-05',
      image: 'https://image.tmdb.org/t/p/w500/5vYlV82YQUSubsuGzubnviuyPW9.jpg',
      id: 12714,
      vote_average: 5.7
    },
    {
      title: 'Little Shop of Horrors',
      overview:
        "Seymour Krelborn is a nerdy orphan working at Mushnik's, a flower shop in urban Skid Row. He harbors a crush on fellow co-worker Audrey Fulquard, and is berated by Mr. Mushnik daily. One day asSeymour is seeking a new mysterious plant, he finds a very mysterious unidentified plant which he calls Audrey II. The plant seems to have a craving for blood and soon begins to sing for his supper.",
      release: '1986-12-19',
      image: 'https://image.tmdb.org/t/p/w500/iKkbN17OmFosaW6asCNZTTsyvpu.jpg',
      id: 10776,
      vote_average: 6.7
    },
    {
      title: 'Bugs Bunny/Looney Tunes All-Star 50th Anniversary',
      overview:
        'Celebrities are interviewed about the social and working lives of Bugs, Daffy, Porky and the rest of the Looney Tunes.',
      release: '1986-01-14',
      image: 'https://image.tmdb.org/t/p/w500/7ZiU7O8JwEBxIa9aPYIu7lZxlBd.jpg',
      id: 503354,
      vote_average: 6
    },
    {
      title: "The Razor's Edge",
      overview:
        "He had everything and wanted nothing. He learned that he had nothing and wanted everything. He saved the world and then itshattered. The path to enlightenment is as sharp and narrow as a razor's edge.",
      release: '1984-10-19',
      image: 'https://image.tmdb.org/t/p/w500/ai6iFng036xuBGeDVSEOdhkKrZ2.jpg',
      id: 24453,
      vote_average: 6.5
    },
    {
      title: 'Nothing Lasts Forever',
      overview:
        "An artist fails a test and is required to direct traffic in New York City's Holland Tunnel. He winds up falling in love with a beautiful woman, who takes him to the moon on a Lunar Cruiser.",
      release: '1984-09-06',
      image: 'https://image.tmdb.org/t/p/w500/kEbEySR5MTpVEU1F69hEidDfCNQ.jpg',
      id: 52826,
      vote_average: 6.3
    },
    {
      title: 'Ghostbusters',
      overview:
        'After losing their academic posts at a prestigiousuniversity, a team of parapsychologists goes into business as proton-pack-toting "ghostbusters" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.',
      release: '1984-06-07',
      image: 'https://image.tmdb.org/t/p/w500/3FS3oBdorgczgfCkFi2u8ZTFfpS.jpg',
      id: 620,
      vote_average: 7.4
    },
    {
      title: 'Tootsie',
      overview:
        'When struggling, out of work actor Michael Dorsey secretly adopts a female alter ego -- Dorothy Michaels -- in order to land a part in a daytime drama, he unwittingly becomes a feminist icon andends up in a romantic pickle.',
      release: '1982-12-16',
      image: 'https://image.tmdb.org/t/p/w500/ngyCzZwb9y5sMUCig5JQT4Y33Q.jpg',
      id: 9576,
      vote_average: 7.1
    },
    {
      title: "The Rodney Dangerfield Show: It's Not Easy Bein' Me",
      overview: 'Rodney Dangerfield special, featuring stand-up andsketches.',
      release: '1982-05-12',
      image: 'https://image.tmdb.org/t/p/w500/2FKmtCyl3Pjqv1sz4RjC6wHYiLu.jpg',
      id: 62552,
      vote_average: 0
    },
    {
      title: "Steve Martin: Steve Martin's Best Show Ever",
      overview:
        "Steve Martin's fourth NBC special was in the spirit of his previous association with Saturday Night Live. It was broadcast live from Studio 8H, produced by Lorne Michaels and featured some original cast members of the show.",
      release: '1981-11-25',
      image: 'https://image.tmdb.org/t/p/w500/g30wZLICGOmpwlka65qAyW4MawW.jpg',
      id: 275521,
      vote_average: 0
    },
    {
      title: 'Stripes',
      overview:
        'John Winger, an indolent sad sack in his 30s, impulsively joins the U.S. Army after losing his job, his girlfriend and hisapartment.',
      release: '1981-06-25',
      image: 'https://image.tmdb.org/t/p/w500/nqfLX1bJLUlZnfflqpUIWrGQwSv.jpg',
      id: 10890,
      vote_average: 6.6
    },
    {
      title: 'Loose Shoes',
      overview:
        'Broad satire and buffoonery presented as a series of movie trailers. Among the titles and subjects are: "The Howard Huge Story", "Skate-boarders from Hell", "The Invasion of the Penis Snatchers", Woody Allen (pre-Mia), movie trailer come-ons, Charlie Chaplin, war movies, Billy Jack. The source of the title is presented about an hour into the film.',
      release: '1980-08-01',
      image: 'https://image.tmdb.org/t/p/w500/u111kIZkX7F2JengPcqf8OktWnT.jpg',
      id: 44805,
      vote_average: 3
    },
    {
      title: 'Caddyshack',
      overview:
        'At an exclusive country club, an ambitious young caddy, Danny Noonan, eagerly pursues a caddy scholarship in hopes of attending college and, in turn, avoiding a job at the lumber yard. In order to succeed, he must first win the favour of the elitist Judge Smails, and then the caddy golf tournament which Smails sponsors.',
      release: '1980-07-25',
      image: 'https://image.tmdb.org/t/p/w500/iGA1W74JAQpLKjsUQaFG9Ob1PMj.jpg',
      id: 11977,
      vote_average: 6.7
    },
    {
      title: 'The Missing Link',
      overview:
        'An adult animated comedy with rock music soundtrack, portraying a far-fetched explanation of the Dawn of Man.',
      release: '1980-05-21',
      image: 'https://image.tmdb.org/t/p/w500/kHzAu0ZLFtiwV0PLV3iEGxtxRIc.jpg',
      id: 48279,
      vote_average: 5.5
    },
    {
      title: 'Where the Buffalo Roam',
      overview:
        'Semi-biographical film based on the experiences ofgonzo journalist Hunter S. Thompson.',
      release: '1980-04-25',
      image: 'https://image.tmdb.org/t/p/w500/etoQq5a3fDuj2hKMLxUCnKqiIJh.jpg',
      id: 13005,
      vote_average: 6.3
    },
    {
      title: "Mr. Mike's Mondo Video",
      overview:
        'Mike O\'Donoghue\'s parody of "Mondo Cane" showcases curious performers, strange musicians, celebrity mutations and unusual short films, including Thomas Alva Edison\'s "Elephant Electrocution".In the tradition of films like Groove Tube (1974),  The Kentucky Fried Movie (1977),  and Saturday Night Live.',
      release: '1979-09-20',
      image: 'https://image.tmdb.org/t/p/w500/h9sa8TaVjpNBrGkWK4hoEarPCmr.jpg',
      id: 49036,
      vote_average: 4.2
    },
    {
      title: 'Meatballs',
      overview:
        "Tripper is the head counselor at a budget summer camp called Camp Northstar. In truth, he's young at heart and only marginally more mature than the campers themselves. Tripper befriends Rudy, aloner camper who has trouble fitting in. As Tripper inspires his young charges to defeat rival Camp Mohawk in the annual Olympiad competition, Rudy plays matchmaker between Tripper and Roxanne, a female counselor atNorthstar.",
      release: '1979-06-28',
      image: 'https://image.tmdb.org/t/p/w500/o0NmLgnCVph7I07OP0yKGPFoLrO.jpg',
      id: 14035,
      vote_average: 6
    },
    {
      title: 'Fear and Loathing on the Road to Hollywood',
      overview:
        "Fear and Loathing on the Road to Hollywood, also known as Fear and Loathing in Gonzovision, is a documentary film producedby BBC in 1978 on the subject of Hunter S. Thompson, directed by Nigel Finch.  The road trip/film pairs Thompson with Finch's fellow Briton the illustrator Ralph Steadman. The party travel to Hollywood via Death Valley and Barstow from Las Vegas, scene of the pair's 1971 collaboration. It contains interviews with Thompson and Steadman, as well as some short excerpts from some of his work.",
      release: '1978-11-02',
      image: 'https://image.tmdb.org/t/p/w500/4M6Lzl6HXvJAQg3jMTHdQ3EOnzX.jpg',
      id: 164808,
      vote_average: 8
    }
  ]
))
