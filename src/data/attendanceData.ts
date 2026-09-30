import { DimensionData, StepSummary, CourtCase } from '../types';

export const STEPS: StepSummary[] = [
  {
    number: 1,
    name: 'Feitelijke dimensie',
    shortName: 'Feitelijke dimensie',
    tag: 'Feitelijk',
    leadQuestion: 'Wat is eigenlijk het probleem?',
    description: 'Voordat we over een maatregel spreken: waar zit het probleem eigenlijk? Aanwezigheid heeft zeven feitelijke domeinen. Vaak wijst het werkelijke probleem naar een ander domein dan we denken.',
    color: '#d3104c',
    activeBorderColor: 'border-[#d3104c]',
    dimensions: ['p-doelgroep', 'p-didactiek', 'p-ontwerp', 'p-pedagogiek', 'p-beleid', 'p-technisch', 'p-team', 'p-logistiek']
  },
  {
    number: 2,
    name: 'Normatieve dimensie',
    shortName: 'Normatieve dimensie',
    tag: 'Normatief',
    leadQuestion: 'Welke waarden spelen hier?',
    description: 'Hoe je afwezigheid uitlegt, bepaalt welke oplossingen in beeld komen. Zie je het als een tekort bij de student, dan zoek je naar prikkels. Zie je het als signaal van een verschuiving in hoe studenten hun tijd verdelen, dan kijk je naar je eigen ontwerp. De drie perspectieven maken die waarden bespreekbaar vóór je besluit.',
    color: '#003340',
    activeBorderColor: 'border-[#003340]',
    dimensions: ['p-soc', 'p-psy', 'p-ok']
  },
  {
    number: 3,
    name: 'Handelingsperspectieven',
    shortName: 'Handelingsperspectieven',
    tag: 'Handelingsperspectieven',
    leadQuestion: 'Hoe werken we aan aanwezigheid?',
    description: 'Voor meer aanwezigheid bestaat geen snelle oplossing. Begin bij de vraag of studenten kúnnen komen: past het rooster bij hun reistijd, hun werk en hun andere vakken? Kijk ook of ze wíllen komen, omdat de les hun iets geeft wat een opname of het boek niet biedt en ze zich er welkom voelen. Weten ze waarom ze móeten komen? Zijn de verwachtingen helder en is deelname nodig om de leerdoelen te halen?',
    color: '#00789b',
    activeBorderColor: 'border-[#00789b]',
    dimensions: ['p-routeA', 'p-routeB', 'p-routeC', 'p-juridisch']
  },
  {
    number: 4,
    name: 'Toetsing',
    shortName: 'Toetsing',
    tag: 'Toetsing',
    leadQuestion: 'Staat het beleid stevig?',
    description: 'Vier toetsvragen om te onderzoeken of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat: Gedragen, Geloofwaardig, Gerechtvaardigd en Gedeeld.',
    color: '#9a6a00',
    activeBorderColor: 'border-[#9a6a00]',
    dimensions: ['p-g1', 'p-g2', 'p-g3', 'p-g4']
  }
];

export const DIMENSIONS: Record<string, DimensionData> = {
  'p-doelgroep': {
    id: 'p-doelgroep',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Doelgroep',
    name: 'Zicht op de studentpopulatie',
    subtitle: 'Wie is onze student eigenlijk? Leefwereld, belasting, behoeften',
    shortDescription: 'Wie is onze student eigenlijk? Leefwereld, belasting en behoeften.',
    leadParagraph: 'Wie zijn onze studenten eigenlijk? Wegblijven is zelden onwil. Vaker is het een rationele keuze in een week die al vol zit met werk, reistijd en andere verplichtingen. Kwalitatief onderzoek onder eerstejaars laat die afweging van binnenuit zien, en landelijke cijfers bevestigen het beeld van buitenaf: de voltijdstudent is steeds minder voltijds beschikbaar.',
    dialogueQuestion: 'Wat weten we feitelijk over de leefwereld, tijdsbesteding en prioriteiten van onze huidige studenten, en hoe sluit ons onderwijs daarop aan?',
    insights: [
      {
        text: 'Hbo-bachelorstudenten zeiden in 2016 nog gemiddeld 39 uur per week aan hun studie te besteden. In 2024 is dat 29 uur, een daling van ruim 25%. Het aandeel studenten dat 40 uur of meer studeert daalde van 51% naar 24%. Het aandeel dat minder dan 20 uur studeert steeg van 9% naar 24%.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Studenten vervullen meerdere rollen tegelijk: ze studeren, werken, zijn sociaal actief en zijn soms mantelzorger of vrijwilliger. De studie voegt zich vaker naar die andere levensdomeinen dan andersom.',
        citation: 'Theelen et al., 2026; Strayhorn, 2025',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Betaald werk steeg bij hbo-bachelors van 10 naar 15 uur per week, parallel aan de daling in studietijd. Dat verklaart vijf van de tien verdwenen uren. Werkgevers bieden bovendien studenten steeds eerder stages, parttimefuncties en vroege werving aan.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: '61% van de hbo-studenten woont nog bij de ouders, maar thuiswonende en uitwonende studenten besteden vergelijkbaar veel tijd aan hun studie. Meer reistijd verklaart de daling dus niet.',
        citation: 'Theelen et al., 2026; ABF Research, 2025',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Jongeren van 15 tot 28 jaar besteden 18,3 uur per week aan sociale media, maar de grootste stijging vond plaats vóór 2016.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'In het funderend onderwijs stegen de afgelopen drie jaar zowel het relatieve als het absolute verzuim. Nieuwe studenten zijn het missen van lessen dus meer gewend.',
        citation: 'Theelen et al., 2026; Dee, 2024',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'School is voor veel eerstejaarsstudenten in dit onderzoek "één van de ballen die hoog gehouden moeten worden", naast werk, zorgtaken en sociaal leven; zij maken bewuste keuzes op basis van nut en timing.',
        citation: 'Tahir et al., 2024',
        citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf'
      },
      {
        text: 'Een ruime meerderheid van de hbo-studenten ervaart vaak stress door studie- en prestatiedruk, en meer dan de helft kampt met emotionele of psychische klachten.',
        citation: 'Dopmeijer et al., 2022',
        citationUrl: 'https://doi.org/10.21945/RIVM-2022-0100'
      },
      {
        text: 'Studenten beschrijven medestudenten vaker als "collega\'s" dan als vrienden; verbondenheid ontstaat niet vanzelf en voorspelt aanwezigheid sterker dan dwang.',
        citation: 'Tahir et al., 2024; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Persoonlijk gevraagd worden en docentnabijheid verhogen in dit onderzoek de deelname veel sterker dan algemene e-mails of communicatiecampagnes in de huisstijl.',
        citation: 'Tahir et al., 2024',
        citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf'
      },
      {
        text: 'Studenten passen "cherry-picking" toe: ze wonen niet alle lessen bij maar maken een bewuste selectie van bijeenkomsten die zij als essentieel beschouwen.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      },
      {
        text: 'Post-COVID wegen studenten actiever af tussen fysieke aanwezigheid en digitale alternatieven; aanwezigheid is minder vanzelfsprekend geworden en onderwijs moet zichtbaar toegevoegde waarde bieden.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ],
    practicalMaterials: [
      {
        title: 'Learning Journey Canvas',
        description: 'Een werkvorm van het Lectoraat Docentprofessionalisering en Blended Onderwijs om de dagelijkse realiteit van studenten in kaart te brengen om onderwijs of curriculum af te stemmen op wie ze zijn.',
        url: 'https://www.hogeschoolrotterdam.nl/onderzoek/lectoren/talentontwikkeling/lectoren/ivo-vrouwe/lectoraat-docentprofessionalisering-en-blended-onderwijs/middelen-van-dit-lectoraat/learning-journey-canvas/',
        type: 'tool'
      }
    ],
    media: [
      {
        id: '9ajAv0VgiKk',
        title: 'Wat vinden studenten van aanwezigheidsplicht?',
        caption: 'Straatinterview met studenten over hun ervaring met de aanwezigheidsplicht en flexibiliteit.',
        source: 'youtube',
        mediaUrl: 'https://www.youtube.com/watch?v=9ajAv0VgiKk'
      },
      {
        id: 'ey0HxatDHd8',
        title: 'De Studeercrisis · aflevering 1: Studeren als bijzaak',
        caption: 'Reportage over hoe studeren voor veel studenten een bijzaak is geworden naast werk, sociaal leven en andere verplichtingen.',
        source: 'youtube',
        mediaUrl: 'https://www.youtube.com/watch?v=ey0HxatDHd8'
      }
    ]
  },

  'p-didactiek': {
    id: 'p-didactiek',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Onderwijskundig',
    name: 'Onderwijskundig',
    subtitle: 'Activerende didactiek, constructive alignment, docentkwaliteit',
    shortDescription: 'Activerende didactiek, constructive alignment en docentkwaliteit.',
    leadParagraph: 'Ons curriculum rekent met een student die veertig uur per week beschikbaar is. Zolang die rekensom niet klopt, wringt elk onderwijsconcept dat aanwezigheid vanzelfsprekend veronderstelt. De keuze om te komen valt bovendien in de les zelf: wat studenten daar ervaren weegt zwaarder dan wat het beleid voorschrijft. Lessen die activeren en een merkbare leerwaarde hebben, zien meer studenten terug.',
    dialogueQuestion: 'Wat gebeurt er in onze bijeenkomsten dat studenten nergens anders kunnen ervaren, en welke werkvormen maken fysieke aanwezigheid voor hen onmisbaar?',
    insights: [
      {
        text: 'Curricula rekenen met ongeveer 26 uur per studiepunt en veertig beschikbare uren per week. Dat uitgangspunt geldt voor de meerderheid van de studenten niet meer.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Een lege klas valt niet te flippen, en zonder studenten is het moeilijk om formatief feedback te geven in de les.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Generatieve AI haalt de stok achter de deur weg. De toets borgde vroeger of studenten de stof beheersten, waardoor opleidingen aanwezigheid konden vrijlaten. Nu zegt vier op de vijf studenten AI te gebruiken bij eindopdrachten en geeft een op de vier toe het voor fraude te gebruiken. Omdat toetsing zich daardoor moet richten op het leerproces, maakt AI juist datgene belangrijker wat onder druk staat: aanwezigheid en actieve deelname.',
        citation: 'Theelen et al., 2026; Xia et al., 2024',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Interactief, activerend onderwijs bevordert aanwezigheid, al blijkt een sterk gevoel van erbij horen (sense of belonging) uiteindelijk de doorslaggevende factor.',
        citation: 'Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Aanwezigheid stijgt significant bij activerende didactiek en constructive alignment.',
        citation: 'Biggs, 1996; Biggs & Tang, 2011',
        citationUrl: 'https://doi.org/10.1007/BF00138871'
      },
      {
        text: 'Hoorcolleges als passieve herhaling van online materiaal zijn de grootste voorspeller van afwezigheid.',
        citation: 'Cutler et al., 2016; Moore et al., 2008',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      },
      {
        text: 'Docentkwaliteit (voorbereiding, praktijkvoorbeelden, interactie en persoonlijke interesse) weegt zwaarder dan registratie of plicht.',
        citation: 'Fitzpatrick et al., 2011; Kappe, 2026',
        citationUrl: 'https://doi.org/10.1080/03043797.2011.585226'
      },
      {
        text: 'Werken aan een positieve docent-studentrelatie heeft grote impact op leerbereidheid: wie geen energie kwijt is aan zelfbescherming, staat open om te leren.',
        citation: 'Vanhoof et al., 2012',
        citationUrl: 'https://www.researchgate.net/publication/235433831_Leerbereidheid_van_leerlingen_aanwakkeren_principes_die_motiveren_inspireren_en_werken'
      },
      {
        text: 'Samenwerkend leren bevordert zowel leren als aanwezigheid, mits het ontwerp positieve wederzijdse afhankelijkheid kent en samenwerkingsvaardigheden expliciet aanleert.',
        citation: 'ICLON, Universiteit Leiden; Johnson & Johnson, 1999',
        citationUrl: 'https://www.universiteitleiden.nl/iclononderwijsexpertise/leerprincipes/samenwerkend-leren'
      },
      {
        text: 'Feedback landt vaak onvoldoende bij studenten; investeren in feedbackgeletterdheid maakt bijeenkomsten zinvoller en verlaagt de drempel om te komen.',
        citation: 'Winstone & Carless, 2019',
        citationUrl: 'https://www.routledge.com/Designing-Effective-Feedback-Processes-in-Higher-Education-A-Learning-Focused/Winstone-Carless/p/book/9780815361633'
      },
      {
        text: 'De ervaren meerwaarde van onderwijs is de belangrijkste voorspeller van aanwezigheid: relevantie voor toetsing, samenwerkingskansen en interactiviteit wegen zwaarder dan plichten.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ],
    practicalMaterials: [
      {
        title: 'Edu010 (Hogeschool Rotterdam)',
        description: 'HR-platform met didactische aanpakken, concrete activerende werkvormen en ondersteunende applicaties, geordend naar didactisch doel.',
        url: 'https://www.hogeschoolrotterdam.nl/go/Edu010/',
        type: 'tool'
      },
      {
        title: 'EDIT-pack',
        description: 'Ontwerpmiddel van het HR Lectoraat om onderwijs met activerende, blended werkvormen doelgericht vorm te geven.',
        url: 'https://www.hogeschoolrotterdam.nl/onderzoek/lectoren/talentontwikkeling/lectoren/ivo-vrouwe/lectoraat-docentprofessionalisering-en-blended-onderwijs/middelen-van-dit-lectoraat/edit-pack/',
        type: 'tool'
      }
    ],
    media: [
      {
        id: '6oRImQyWmcGbX3rtNngLeo',
        title: 'Podcast · Even tussen Ons: Sam de Jong (ISO)',
        caption: 'Over financiële druk als oorzaak van afwezigheid en waarom studenten aanwezigheid als onderdeel van een breder vraagstuk zien.',
        source: 'spotify',
        mediaUrl: 'https://open.spotify.com/episode/6oRImQyWmcGbX3rtNngLeo'
      }
    ]
  },

  'p-ontwerp': {
    id: 'p-ontwerp',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Curriculair Ontwerp',
    name: 'Curriculair Ontwerp',
    subtitle: 'Rooster-/deadlineconflicten, online alternatieven, interdependentie',
    shortDescription: 'Rooster-/deadlineconflicten, online alternatieven en interdependentie.',
    leadParagraph: 'Studenten blijven zelden zomaar weg. Als het ontwerp een gemakkelijk alternatief biedt (opnames, samenvattingen, losse deadlines), wordt wegblijven al gauw een logische en tijdsefficiënte keuze.',
    dialogueQuestion: 'In welke mate nodigt de inrichting van ons curriculum en onze toetsing studenten uit om lessen over te slaan, en wat kunnen we daarin herontwerpen?',
    insights: [
      {
        text: 'Directe beschikbaarheid van volledige college-opnames of uitgebreide digitale notities is een grote voorspeller van fysiek verzuim.',
        citation: 'Cutler et al., 2016',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      },
      {
        text: 'Continuous-assessment-werkdruk leidt tot structureel verzuim: studenten skippen lessen om deadlines voor andere vakken te halen.',
        citation: 'Fitzpatrick et al., 2011',
        citationUrl: 'https://doi.org/10.1080/03043797.2011.585226'
      },
      {
        text: 'Interdependentie tussen colleges, opdrachten en toetsing bepaalt of "missen" direct inhoudelijke consequenties heeft.',
        citation: 'Biggs & Tang, 2011',
        citationUrl: 'https://books.google.com/books?id=XhjRBrDAESkC'
      },
      {
        text: 'Curriculair ontwerp zonder alternatieve parallelle leerroute verhoogt aanwezigheid en studiesucces structureel.',
        citation: 'Bijsmans & Schakel, 2018',
        citationUrl: 'https://doi.org/10.1007/s10734-018-0243-4'
      },
      {
        text: 'Als een bijeenkomst net zo goed een kennisclip kan zijn, ontwerp het dan ook zo en benut de contacttijd voor interactie.',
        citation: 'Trimbos-instituut, z.d.',
        citationUrl: 'https://www.trimbos.nl/actueel/blogs/verbinding-verbroken-hoe-krijg-je-studenten-weer-gemotiveerd-naar-de-campus-school/'
      },
      {
        text: 'Interdependentie in opdrachten en doordachte spreiding van toetsmomenten voorkomen dat studenten onderwijsbijeenkomsten skippen om urgente deadlines voor andere vakken te halen.',
        citation: 'Cutler et al., 2016',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      }
    ],
    practicalMaterials: [
      {
        title: 'Basecamp: Zachte landing bij Informatica (HR)',
        description: 'Na hoge uitval onder eerstejaars herzag Informatica (Hogeschool Rotterdam) het curriculum. Basecamp werkt met een "zachte landing" die vroegtijdige uitval voorkomt en aanwezigheid bevordert.',
        url: 'https://publinova.nl/product/basecamp-een-zachte-landing-bij-de-opleiding-informatica',
        type: 'framework'
      }
    ],
    media: [
      {
        id: '19SLNyNMzjCgCyXkagOoFV',
        title: 'Podcast · Tussen Ons: Izaak Dekker',
        caption: 'Over onderwijs, didactisch ontwerp en de rol van aanwezigheid en engagement.',
        source: 'spotify',
        mediaUrl: 'https://open.spotify.com/episode/19SLNyNMzjCgCyXkagOoFV'
      }
    ]
  },

  'p-pedagogiek': {
    id: 'p-pedagogiek',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Pedagogiek',
    name: 'Pedagogiek',
    subtitle: 'Gedragsverandering door intrinsiek en extrinsiek te motiveren',
    shortDescription: 'Gedragsverandering door intrinsiek en extrinsiek te motiveren.',
    leadParagraph: 'Aanwezigheid gaat niet alleen over de kwaliteit van de les, maar ook over de relatie en het klimaat eromheen. Juist dat pedagogische deel van het docentschap krijgt in het hoger onderwijs weinig aandacht. Sancties en beloningen werken, maar niet voor iedereen even sterk en zonder risico\'s. Te veel dwang kan averechts werken op de motivatie- en autonomie-ontwikkeling van hbo-studenten.',
    dialogueQuestion: 'Welke balans tussen uitnodigen, stimuleren en begrenzen versterkt de motivatie van studenten om actief deel te nemen?',
    insights: [
      {
        text: 'De daling doet zich voor op alle opleidingen, leerjaren en domeinen, ook bij docenten die hun onderwijs zorgvuldig ontwerpen en veel in interactie investeren. Er is geen aanleiding om aan te nemen dat de onderwijskwaliteit sinds 2016 is afgenomen.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Goed ontworpen, interactieve en betekenisvolle lessen hangen samen met hogere aanwezigheid.',
        citation: 'Theelen et al., 2026; Moores et al., 2019',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Docentprofessionalisering in het hoger onderwijs blijft vaak beperkt tot een didactische basiskwalificatie, met weinig aandacht voor pedagogisch handelen: relaties opbouwen, een leerklimaat creëren en omgaan met gedrag en betrokkenheid.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Gedragsregulatie (sancties/beloningen) is effectief voor aanwezigheid, maar onderpresteerders en studenten met beperkte voorkennis profiteren het meest.',
        citation: 'Credé et al., 2010; Moores et al., 2019',
        citationUrl: 'https://doi.org/10.3102/0034654310362998'
      },
      {
        text: 'Een "optioneel-verplicht" beleid (student kiest vooraf of aanwezigheid meetelt) behoudt autonomie én verhoogt aanwezigheid structureel (vrijwillige pre-commitment).',
        citation: 'Cullen & Oppenheimer, 2024 / Science Advances',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      },
      {
        text: 'Te veel dwang kan averechts werken op academische prestaties en intrinsieke motivatie.',
        citation: 'Dobkin et al., 2010',
        citationUrl: 'https://doi.org/10.1016/j.econedurev.2009.09.004'
      },
      {
        text: 'Sense of belonging en persoonlijke relaties met docenten verlagen verzuim effectiever en duurzamer dan externe dwang.',
        citation: 'Ralph et al., 2025; Dopmeijer et al., 2022',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'De Zelf-Determinatie Theorie stelt dat leren gedijt als basisbehoeften aan relatie, competentie en autonomie worden bevredigd.',
        citation: 'Ryan & Deci, 2000',
        citationUrl: 'https://doi.org/10.1006/ceps.1999.1020'
      },
      {
        text: 'Sense of belonging: erbij horen en gezien worden is de sterkste voorspeller van actieve aanwezigheid.',
        citation: 'Ralph et al., 2025; Tahir et al., 2024',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Persoonlijke follow-up: beginnend verzuim tijdig signaleren en studenten belangstellend aanspreken ("we hebben je gemist, hoe gaat het?") in plaats van direct administratief te sanctioneren.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      }
    ],
    practicalMaterials: [
      {
        title: 'Pedagogisch denkgereedschap #7 (Profielen HR)',
        description: '"Niet de relatie maar de inhoud verbindt docent en student." Betekenisvolle inhoud maakt aanwezigheid vanzelfsprekend; studenten willen ertoe doen als deelnemers aan een praktijk.',
        url: 'https://profielen.hr.nl/2026/pedagogisch-denkgereedschap-7-niet-de-relatie-maar-de-inhoud-verbindt-docent-en-student/',
        type: 'guide'
      }
    ]
  },

  'p-beleid': {
    id: 'p-beleid',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Beleid',
    name: 'Beleid',
    subtitle: 'Eenduidige definitie, zwaarwegend beleid, coulance',
    shortDescription: 'Eenduidige definitie, zwaarwegend beleid en coulance.',
    leadParagraph: 'Beleid stuurt niet alleen met regels, maar ook met de boodschap die eruit spreekt. Wat wij over flexibiliteit zeggen in onze onderwijsvisie en onze werving, lezen studenten als een uitspraak over hoeveel de studie van hen mag vragen. Een helder geformuleerd beleid is een randvoorwaarde, maar "one size fits all" werkt niet.',
    dialogueQuestion: 'Hoe vangen we overmacht en afwezigheid in het docententeam laagdrempelig op, en welke afspraken voorkomen onnodige juridisering?',
    insights: [
      {
        text: 'Meer keuzevrijheid, blended onderwijs en soepeler aanwezigheidseisen kunnen de impliciete boodschap dragen dat de studie zich voegt naar het leven van de student. Dat kan aanpassing aan de student zijn, maar ook beleid dat de verandering versnelt.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Instellingen rekenen op papier met veertig uur per week, maar schrijven op hun wervingspagina\'s dat de voltijdsopleiding te combineren is met een bijbaan.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Er is een balans tussen flexibiliteit en structuur, en die kan doorslaan wanneer een instelling studenten te weinig houvast biedt om voor de studie te kiezen.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Duidelijke regels over consequenties en afmelden verkleinen de kans op verzuim aanzienlijk.',
        citation: 'Jaftha et al., 2022',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Een eenduidige definitie is nodig van te laat komen, actieve versus passieve aanwezigheid, en voorbereidheid.',
        citation: 'Moores et al., 2019',
        citationUrl: 'https://doi.org/10.1080/00131881.2019.1660587'
      },
      {
        text: 'Effectief beleid is afgestemd op specifieke studentgroepen (zoals eerstejaars) en niet uniform over alle jaargangen.',
        citation: 'Méndez-Suárez & Crespo-Tejero, 2021',
        citationUrl: 'https://dx.doi.org/10.5209/rced.70917'
      },
      {
        text: 'Rechten en plichten moeten juridisch en beleidsmatig helder geborgd zijn in de OER conform de WHW.',
        citation: 'Artikel 7.13 WHW',
        citationUrl: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        text: 'Praktijkgerichte onderwijsvormen (practica, workshops) hebben hogere opkomst dan traditionele colleges; beleid moet contextafhankelijk zijn.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ]
  },

  'p-technisch': {
    id: 'p-technisch',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Technisch',
    name: 'Registratie',
    subtitle: 'Registratiesysteem, betrouwbare data, beperkte administratielast',
    shortDescription: 'Registratiesysteem, betrouwbare data en beperkte administratielast.',
    leadParagraph: 'Wat we over aanwezigheid weten, berustte lang op indrukken uit de docentenkamer. Inmiddels bevestigen grootschalige analyses dat beeld, terwijl veel opleidingen zelf nauwelijks zicht hebben op hun eigen cijfers. Registratie lijkt een technisch detail, maar heeft zelfstandig effect: het enkel registreren van aanwezigheid stimuleert al de opkomst en levert data voor vroegsignalering.',
    dialogueQuestion: 'Hoe zetten we aanwezigheidsregistratie in als pedagogisch signaal voor tijdige begeleiding, en wat hebben we als team nodig om daarin één lijn te trekken?',
    insights: [
      {
        text: 'Uit 8,9 miljoen aanwezigheidsregistraties van 27.568 studenten bij zeven hbo-opleidingen over elf jaar blijkt dat de aanwezigheid daalde van 43% voor de pandemie naar 37,5% tijdens de lockdowns en 30,6% procent daarna. Minder dan een op de drie studenten is aanwezig bij een reguliere les. Binnen elk jaar daalt de aanwezigheid per blok sterk, en door de jaren heen worden de pieken lager en de dalen dieper.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De daling was al voor de pandemie ingezet en zette daarna door. Corona is dus niet de oorzaak.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Het ministerie laat de tijdsbesteding van studenten al sinds 2000 onderzoeken, maar deze cijfers komen niet terug in de jaarlijkse trendrapportages. Daardoor bleef de verschuiving lang onopgemerkt.',
        citation: 'Theelen et al., 2026; DUO, 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Het enkel zichtbaar registreren van aanwezigheid heeft zelf al een positief effect op opkomst.',
        citation: 'Moores et al., 2019',
        citationUrl: 'https://doi.org/10.1080/00131881.2019.1660587'
      },
      {
        text: 'Opleidingen die effectief registreren hebben vaker een sterk aanwezigheidsethos en hogere retentie.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Actuele data-analyse is voorwaardelijk voor vroegtijdige signalering en preventieve interventies door mentoren.',
        citation: 'Jaftha et al., 2022',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Technische randvoorwaarden: registratie moet snel, betrouwbaar en met minimale administratielast voor de docent verlopen.',
        citation: 'Bijsmans & Schakel, 2018; Fitzpatrick et al., 2011',
        citationUrl: 'https://doi.org/10.1007/s10734-018-0243-4'
      }
    ],
    practicalMaterials: [
      {
        title: 'Brightspace-quiz met IP-restrictie / wachtwoord',
        description: 'Quiz gekoppeld aan scoreitem "aanwezig/niet aanwezig" in het Gradebook. Didactische tip: combineer met een startvraag ("wat hoop je vandaag te leren?").',
        type: 'tool'
      },
      {
        title: 'Mentimeter koppeling met Gradebook',
        description: 'Snelle interactieve peiling aan start van college, automatisch gesynchroniseerd met Brightspace.',
        type: 'tool'
      }
    ],
    pilots: [
      {
        title: 'International Business (Economisch domein HR)',
        description: 'Onderzoek naar summatieve cumulatieve assessments tijdens de onderwijsperiode gericht op betrokkenheid en aanwezigheid.',
        contactPerson: 'Michael Epskamp',
        type: 'pilot'
      },
      {
        title: 'EAS · Academy Attendance Instrument',
        description: 'Ontwikkeling van een eigen, privacy-proof instrument voor academy attendance.',
        contactPerson: 'Karst van Keijzerswaard',
        type: 'pilot'
      },
      {
        title: 'RAc (Rotterdam Academy)',
        description: 'Experiment met 80%-aanwezigheidsplicht bij 7 opleidingen met docentmemo, effectrapportage en stroomschema in Brightspace.',
        contactPerson: 'Mariska Oudwater',
        type: 'pilot'
      },
      {
        title: 'IvL · Pabo',
        description: 'Algehele aanwezigheidsplicht met compensatieopdrachten en QR-scan registratie.',
        contactPerson: 'Robert Streunding',
        type: 'pilot'
      }
    ]
  },

  'p-team': {
    id: 'p-team',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Team',
    name: 'Teamethos en consistentie',
    subtitle: 'Eenduidige, hoge verwachtingen; geen dubbele boodschappen',
    shortDescription: 'Eenduidige, hoge verwachtingen; geen dubbele boodschappen.',
    leadParagraph: 'Bij dalende aanwezigheid ligt de vraag "doen wij iets fout?" snel op tafel. Die vraag is begrijpelijk, maar hij vertekent het gesprek als de oorzaken ook buiten het bereik van het team liggen. Eén docent die wel handhaaft en een ander die dat laat lopen, ondermijnt elk beleid. Een sterk teamethos zorgt dat verwachtingen consistent en collegiaal worden uitgedragen.',
    dialogueQuestion: 'Hoe dragen we als team aanwezigheid en onze verwachtingen eenduidig uit, en wat spreken we met elkaar af om tegenstrijdige signalen naar studenten te voorkomen?',
    insights: [
      {
        text: 'De opdracht is dubbel: erken dat structurele verschuivingen in tijdsbesteding de grens bepalen van wat een docent kan beïnvloeden, en investeer tegelijk in pedagogisch handelen en gezamenlijke afspraken.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Opleidingen met positief effect op retentie kenmerken zich door een sterk teamethos waarin aanwezigheid als absolute vereiste wordt uitgedragen, niet als vrijblijvende verwachting.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Structureel in teamverband bespreken van aanwezigheidsdata leidt tot gezamenlijke actieplannen en helpt barrières wegnemen.',
        citation: 'Jaftha et al., 2022',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Aanwezigheid lukt zelden met één losse maatregel; ze volgt uit een gezamenlijke, consistente teamaanpak waarin didactiek, begeleiding én organisatie samenkomen; dit onderzoek richt zich op teamprofessionalisering in het hbo en wordt hier naar analogie toegepast op normvorming rond aanwezigheid.',
        citation: 'Brouwer, Van Middelkoop et al., 2024',
        citationUrl: 'https://www.hu.nl/-/media/hu/documenten/onderzoek/projecten/eindrapport_samen_leren_in_het_hbo-zestor.pdf'
      },
      {
        text: 'Collective teacher efficacy (het gedeelde geloof dat het team samen het verschil maakt) hangt sterk samen met betere studentprestaties en opkomst.',
        citation: 'Hattie / Visible Learning; De Bruyckere, 2022',
        citationUrl: 'https://visible-learning.org/2018/03/collective-teacher-efficacy-hattie/'
      }
    ],
    practicalMaterials: [
      {
        title: 'Werkvorm "Waar sta jij voor?"',
        description: 'In kleine groepjes tekent het team een poppetje en schrijft daarbinnen op welk waarneembaar gedrag het belangrijk vindt. Brengt in een half uur boven tafel wat de echte gedeelde norm is.',
        url: 'https://101werkvormen.nl/teambuilding/waar-sta-jij-voor/',
        type: 'tool'
      },
      {
        title: 'Samen sterk of nog meer werk? Onderwijsteams in het hbo',
        description: 'Beschrijft randvoorwaarden voor een gedeeld doel en gedeelde norm binnen hbo-teams: reflectie zonder norm is niet mogelijk.',
        url: 'https://www.researchgate.net/publication/340175548_Samen_sterk_of_nog_meer_werk_Onderwijsteams_in_het_HBO',
        type: 'guide'
      }
    ],
    media: [
      {
        id: 'QZRbZbLcCXA',
        title: 'Wat vinden docenten van aanwezigheidsplicht?',
        caption: 'Straatinterview met docenten over hun perspectief en uitdagingen rondom de aanwezigheidsplicht.',
        source: 'youtube',
        mediaUrl: 'https://www.youtube.com/watch?v=QZRbZbLcCXA'
      },
      {
        id: 'de-studeercrisis-afl-2',
        title: 'De Studeercrisis · aflevering 2: Een leeg lokaal',
        caption: 'Docenten en onderzoekers over lege collegezalen en wat dat vraagt van opleidingsteams.',
        source: 'external-video',
        mediaUrl: 'https://hvana.nl/kijk/de-studeercrisis-afl-2-een-leeg-lokaal'
      }
    ]
  },

  'p-logistiek': {
    id: 'p-logistiek',
    step: 1,
    stepName: 'Feitelijke dimensie',
    stepTag: 'Logistiek',
    name: 'Logistiek',
    subtitle: 'Rooster- en organisatiekwaliteit: tussenuren en bloktijden',
    shortDescription: 'Rooster- en organisatiekwaliteit: tussenuren en bloktijden.',
    leadParagraph: 'Het rooster is de meest onderschatte knop. Studenten wegen elke lesweek af tegen werk en andere verplichtingen, en een rooster dat laat verschijnt of versnipperd is, beslist die afweging in hun nadeel. Vaak wordt hier niet over gesproken in het aanwezigheidsdebat, ten onrechte. Het rooster is een van de grootste structurele oorzaken van verzuim.',
    dialogueQuestion: 'Welke roosterkeuzes maken bij ons aanwezigheid onnodig moeilijk, en wie kan daar iets aan veranderen?',
    insights: [
      {
        text: 'Studenten geven zelf aan dat het rooster grote invloed heeft op hun aanwezigheid. Toch maken opleidingen het rooster vaak pas enkele weken voor een blok bekend, waardoor studenten moeten kiezen tussen hun werkgever en een niet-verplicht college.',
        citation: 'Theelen et al., 2026; Moores et al., 2019',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Publiceer het rooster voor het hele jaar, houd vaste lesdagen aan, rooster in dagdelen in plaats van losse uren en zet twee docenten op een groep van vijftig om lesuitval te beperken.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De onderzochte hogeschool investeerde bewust in een aantrekkelijke campus, maar dat was niet voldoende om de dalende trend te keren.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Versnipperde roosters met onnodige tussenuren ("fallow periods" / gaps) zijn een van de grootste voorspellers van afwezigheid.',
        citation: 'Jaftha et al., 2022; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Aaneengesloten kerntijden en compacte blokdagen maken aanwezigheid logistiek verenigbaar met reistijd en bijbanen.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Wanneer reistijd langer is dan de duur van een enkele losse les, kiezen studenten vrijwel altijd voor zelfstudie.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ],
    practicalMaterials: [
      {
        title: 'Checklist onderwijslogistiek in het hbo',
        description: 'Startpunt voor een teamgesprek over de organisatie van roosters, ruimtes en voorzieningen. Maakt zichtbaar waar de regie ligt.',
        url: 'https://metis-onderwijsadvies.nl/kennisbank/onderwijslogistiek-in-het-hbo/',
        type: 'tool'
      }
    ]
  },

  // STAP 2: NORMATIEF
  'p-soc': {
    id: 'p-soc',
    step: 2,
    stepName: 'Normatieve dimensie',
    stepTag: 'Sociologisch perspectief',
    name: 'Normvorming',
    subtitle: '',
    shortDescription: 'Normvorming binnen de groep en effecten op aanwezige studenten.',
    leadParagraph: 'Aanwezigheid is ook een groepsverschijnsel. Wat normaal is, bepaalt een klas grotendeels zelf, en dat schuift mee met wie er wel en niet komt. Afwezigheid raakt daarmee niet alleen de student die wegblijft: het werkt door in de groepsdynamiek en in de ervaring van de studenten die er wél zijn.',
    dialogueQuestion: 'Welke aanwezigheid vinden we normaal, en hoe wegen we de effecten op de studenten die wél komen?',
    insights: [
      {
        text: 'Een sterk teamethos functioneert sociologisch: aanwezigheid als absolute vereiste, niet als vrijblijvende verwachting.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Aanwezigheid lukt zelden met één losse maatregel; ze volgt uit een gezamenlijke, consistente teamaanpak waarin didactiek, begeleiding én organisatie samenkomen; dit onderzoek richt zich op teamprofessionalisering in het hbo en wordt hier naar analogie toegepast op normvorming rond aanwezigheid.',
        citation: 'Brouwer, Van Middelkoop et al., 2024',
        citationUrl: 'https://www.hu.nl/-/media/hu/documenten/onderzoek/projecten/eindrapport_samen_leren_in_het_hbo-zestor.pdf'
      },
      {
        text: 'Sociale integratie en het gevoel van verbondenheid zijn directe voorspellers van opkomst; isolatie voorspelt verzuim.',
        citation: 'Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Het rimpeleffect van afwezigheid: bij een kantelpunt gaan aanwezige studenten zich de uitzondering voelen in plaats van de norm, wat een neerwaartse spiraal veroorzaakt.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ]
  },

  'p-psy': {
    id: 'p-psy',
    step: 2,
    stepName: 'Normatieve dimensie',
    stepTag: 'Psychologisch',
    name: 'Het psychologisch contract',
    subtitle: 'Psychologisch contract: wat verwachten student en opleiding van elkaar?',
    shortDescription: 'Psychologisch contract: wederkerigheid tussen student en opleiding.',
    leadParagraph: 'Hoe je afwezigheid uitlegt, bepaalt welke oplossingen in beeld komen. Zie je het als een tekort bij de student, dan zoek je naar prikkels. Zie je het als signaal van een verschuiving in hoe studenten hun tijd verdelen, dan kijk je naar je eigen ontwerp. Het psychologisch contract draait om wederkerigheid: wat verwachten student en opleiding van elkaar, en wordt die relatie als eerlijk en betekenisvol ervaren?',
    dialogueQuestion: 'Wanneer we van studenten actieve aanwezigheid verwachten, welke kwaliteit, docentbeschikbaarheid en feedback zetten wij daar als opleiding tegenover?',
    insights: [
      {
        text: 'Je kunt afwezigheid uitleggen als gebrek aan motivatie of betrokkenheid bij de student. Maar ook als signaal van een bredere verschuiving in hoe studenten hun tijd verdelen.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De kernvraag die de onderzoekers aan opleidingen stellen: hoe expliciet zijn wij over de tijd die we van studenten verwachten?',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De tabellen waarmee instellingen de studielast per studiepunt verantwoorden aan de NVAO wijken steeds verder af van de manier waarop studenten in de praktijk studeren.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Dwang zonder wederkerigheid ondermijnt autonomie en intrinsieke motivatie (zelfdeterminatietheorie).',
        citation: 'Cullen & Oppenheimer, 2024',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      },
      {
        text: 'Persoonlijke betrokkenheid van docenten bij de leefwereld van de student verlaagt verzuim zeer effectief.',
        citation: 'Jaftha et al., 2022; Tahir et al., 2024',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Studenten zijn gevoelig voor registratie als signaal: "vindt de opleiding het belangrijk dat ik er ben?" Registreren is zelf communicatie.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Studenten met lage academische zelfeffectiviteit vermijden soms lessen uit angst voor mislukking of gebrek aan voorbereiding; eerstejaars trekken zich eerder terug.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      }
    ]
  },

  'p-ok': {
    id: 'p-ok',
    step: 2,
    stepName: 'Normatieve dimensie',
    stepTag: 'Onderwijskundig',
    name: 'Leereffect: moralisme of leerrendement?',
    subtitle: 'Leereffect: doet aanwezigheid er aantoonbaar toe, of is het moralisme?',
    shortDescription: 'Leereffect: doet aanwezigheid er aantoonbaar toe of is het moralisme?',
    leadParagraph: 'Is aanwezigheid een moreel oordeel of een didactische noodzaak? Als aanwezigheid geen aantoonbaar leereffect heeft in een specifiek vak, waarom eisen we haar dan?',
    dialogueQuestion: 'Welke concrete bijdrage levert fysieke aanwezigheid aan het leerrendement en de professionele ontwikkeling in dit specifieke vak?',
    insights: [
      {
        text: 'De correlatie tussen aanwezigheid en cijfers is sterk bij eerste- en tweedejaars, maar neemt af bij ouderejaars door betere zelfregulatie.',
        citation: 'Bijsmans & Schakel, 2018; Credé et al., 2010; Méndez-Suárez & Crespo-Tejero, 2021',
        citationUrl: 'https://doi.org/10.3102/0034654310362998'
      },
      {
        text: 'Aanwezigheid is geen doel op zich; de cruciale vraag is wat fysieke interactie bijdraagt aan de specifieke leerdoelen van het vak.',
        citation: 'Loyens et al., 2008',
        citationUrl: 'https://doi.org/10.1007/s10648-008-9082-7'
      }
    ]
  },

  // STAP 3: HANDELINGSPERSPECTIEVEN (KUNNEN · WILLEN · MOETEN)
  'p-routeA': {
    id: 'p-routeA',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'KUNNEN',
    name: 'Zorg dat studenten kúnnen komen',
    subtitle: 'Haal de praktische drempels weg die aanwezigheid onlogisch of onhaalbaar maken',
    shortDescription: 'Haal de praktische drempels weg die aanwezigheid onlogisch of onhaalbaar maken.',
    leadParagraph: 'Van alle maatregelen in het onderzoek is roostering de enige waarbij de aanwezigheid aantoonbaar weer steeg. Organisatorische randvoorwaarden op orde: richt alle omstandigheden zo in dat studenten feitelijk kúnnen komen. Zorg voor een fijn, samenhangend en voorspelbaar rooster, voorkom loze tussenuren en stem deadlines tussen parallelle vakken af om piekdruk te voorkomen.',
    dialogueQuestion: 'Zijn alle organisatorische randvoorwaarden (rooster, reistijd, voorspelbaarheid, faciliteiten) zo ingericht dat studenten feitelijk kunnen komen, of lokt de organisatie verzuim uit?',
    insights: [
      {
        text: 'Van alle factoren die de onderzoekers bespreken, is roostering de enige waarbij zij in hun eigen data een stijgende aanwezigheid zagen. Publiceer het jaarrooster in één keer, houd vaste lesdagen aan en rooster in dagdelen.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Organisatorische randvoorwaarden: het rooster moet fijn en voorspelbaar zijn. Studenten moeten niet slechts voor 1 les naar school hoeven te reizen.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Wanneer ontwerp- of roosterproblemen de werkelijke oorzaak zijn, is een aanwezigheidsplicht pure symptoombestrijding. Pak altijd eerst de structuur en studeerbaarheid aan.',
        citation: 'Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Interdependentie in opdrachten en doordachte spreiding van toetsmomenten voorkomen dat studenten onderwijsbijeenkomsten skippen om urgente deadlines voor andere vakken te halen.',
        citation: 'Cutler et al., 2016',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      },
      {
        text: 'Facilitering door management: management faciliteert docenten en opleidingsteams met voldoende uren, professionele ruimte en een kwaliteitscultuur om onderwijs studeerbaar te organiseren.',
        citation: 'Klatter & Smeets, 2023',
        citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/'
      }
    ],
    practicalMaterials: [
      {
        title: 'Voorbeelden van andere scholen & instellingen',
        description: 'Bewezen roosterinterventies uit de praktijk van andere hogescholen en universiteiten om drempels voor aanwezigheid structureel weg te nemen:',
        type: 'guide',
        details: [
          'Blokroosters: onderwijs programmeren in aaneengesloten blokken van 3 tot 4 uur (halve dagen), waarin instructie, actieve verwerking en feedback samenkomen.',
          'Geen tussenuurtjes: lessen en werkcolleges sluitend op elkaar laten aansluiten; vermijd "dode gaten" van 2 of 3 uur die studenten stimuleren om naar huis te gaan.',
          'Niet te vroeg of te laat roosteren: plan starttijden bij voorkeur niet om 08:30 (i.v.m. spitstijden, vertragingen en ov-druk) en voorkom versnipperde late uurtjes aan het eind van de dag.'
        ]
      },
      {
        title: 'Managementfacilitering',
        description: 'Randvoorwaarde: management faciliteert docenten met voldoende uren, professionele ruimte en een kwaliteitscultuur (Klatter & Smeets, 2023).',
        url: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/',
        type: 'framework'
      }
    ]
  },

  'p-routeB': {
    id: 'p-routeB',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'WILLEN',
    name: 'Zorg dat studenten wíllen komen',
    subtitle: 'Maak aanwezigheid de moeite waard, zodat komen een logische keuze wordt',
    shortDescription: 'Maak aanwezigheid de moeite waard, zodat komen een logische keuze wordt.',
    leadParagraph: 'Betere lessen keren de landelijke trend niet, maar ze bepalen wel het verschil binnen wat je zelf in de hand hebt. Onderwijskwaliteit en verbinding: zorg dat studenten wíllen komen. Wat er in de les gebeurt mag géén passieve "one-manshow" zijn, maar moet doelgericht gericht zijn op wat er geleerd moet worden voor het vak of de toets. Daarnaast zijn meerwaarde, de docent-studentrelatie en het gevoel van verbondenheid (sense of belonging) doorslaggevend: studenten die zich gezien, gewaardeerd en gemist voelen, komen graag naar de bijeenkomsten.',
    dialogueQuestion: 'Wat gebeurt er in onze bijeenkomsten dat studenten nergens anders kunnen ervaren (geen one-manshow), en hoe versterken we de relatie en sense of belonging zodat studenten wíllen komen?',
    insights: [
      {
        text: 'De daling is niet te verklaren uit onderwijskwaliteit, dus tips om je college aantrekkelijker te maken keren de trend niet. Ze helpen wel binnen wat je zelf kunt beïnvloeden.',
        citation: 'Theelen et al., 2026; Moores et al., 2019',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Onderwijskwaliteit: wat er in de les gebeurt mag geen one-manshow zijn, maar moet direct en merkbaar bedoeld zijn voor wat er geleerd moet worden voor het vak of de toets.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      },
      {
        text: 'Relatie en "sense of belonging": studenten komen voor de verbinding met medestudenten en de docent. Erbij horen en gezien worden is de sterkste voorspeller van actieve aanwezigheid.',
        citation: 'Tahir et al., 2024',
        citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf'
      },
      {
        text: 'Werken aan een positieve docent-studentrelatie en persoonlijke benaderbaarheid verlaagt stress en vergroot de intrinsieke leerbereidheid aanzienlijk: wie zich veilig voelt, staat open om te leren.',
        citation: 'Vanhoof et al., 2012',
        citationUrl: 'https://www.researchgate.net/publication/235433831_Leerbereidheid_van_leerlingen_aanwakkeren_principes_die_motiveren_inspireren_en_werken'
      },
      {
        text: 'Persoonlijke follow-up: signaleer beginnend verzuim tijdig en spreek studenten belangstellend aan ("we hebben je gemist, hoe gaat het?") in plaats van direct administratief te sanctioneren.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      }
    ],
    practicalMaterials: [
      {
        title: 'Versterken van Sense of Belonging en Binding',
        description: 'Praktische didactische werkvormen en methodieken om vanaf de eerste week binding, gemeenschapsvorming en actieve betrokkenheid tussen studenten en docententeams op te bouwen.',
        url: 'https://husite.nl/gemeenschapsvorming/toolbox-hu-introductie/',
        type: 'guide'
      },
      {
        title: 'Data-gedreven warme nudges',
        description: 'Vriendelijk bericht vanuit docent of SLC: "we hebben je gemist bij de laatste bijeenkomst, hoe gaat het met de voorbereiding?"',
        type: 'tool'
      }
    ]
  },

  // STAP 3 (VERVOLG): NORMEREN (WANNEER IS PLICHT ZINVOL?)
  'p-routeC': {
    id: 'p-routeC',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'MOETEN',
    name: 'Zorg dat studenten weten waarom ze móeten komen',
    subtitle: 'Maak samen met studenten helder wat je van elkaar verwacht en wanneer een formele eis past',
    shortDescription: 'Maak samen met studenten helder wat je van elkaar verwacht en wanneer een formele eis past.',
    leadParagraph: 'Een plicht werkt alleen als hij over het geheel klopt. Een eis op een klein deel van het curriculum verschuift het probleem naar de rest. Moeten omvat twee duidelijke lagen: allereerst heldere, eenduidige normen en verwachtingen vanuit het docententeam ("er moeten zijn" als professionele standaard, zonder dubbele signalen). Ten tweede: wanneer is een formele aanwezigheids- of participatieplicht didactisch en juridisch passend? Studeren is een recht, geen plicht (art. 1.6 WHW). Een generieke plicht voor een opleiding is verboden. Uitsluitend bij een praktische oefening (POA) op cursusniveau waar actieve participatie onmisbaar is voor de leeruitkomsten, mag een plicht worden vastgelegd in de OER conform het HR-kader (2025).',
    dialogueQuestion: 'Hebben we als team duidelijke normen en verwachtingen over "er moeten zijn" afgesproken, en hebben we getoetst of een formele plicht didactisch noodzakelijk (POA) en juridisch verankerd is in de OER?',
    insights: [
      {
        text: 'Een aanwezigheidsplicht voor een klein deel van het curriculum levert netto geen hogere aanwezigheid op en is funest voor de opkomst bij de niet-verplichte colleges.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De pabo van Hogeschool Rotterdam (80 procent) en bouwkunde van Hogeschool Inholland (70 procent) voerden een aanwezigheidsplicht in voor alle eerste- en tweedejaarsvakken, met coulance bij bijzondere omstandigheden. Sindsdien nemen meer studenten deel aan de eerste toetsgelegenheid en leveren zij hun portfolio op tijd in; bij bouwkunde steeg het aandeel nominale studenten en daalde de uitval significant.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'De uitvoering blijkt het lastigste deel: de pabo laat studenten vervangende opdrachten maken, die docenten vóór de toetsgelegenheid moeten nakijken; bouwkunde geeft studenten die meer dan twee van de zeven colleges missen geen toegang tot de eerste toetskans.',
        citation: 'Theelen et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Aanwezigheidseisen specifiek bij eerstejaars: in onderwijsonderzoek en de opleidingspraktijk wordt een aanwezigheidsnorm dikwijls specifiek ingezet in de propedeutische fase (eerste studiejaar) om studenten te ondersteunen bij binding, studieritme en uitvalpreventie. Ook voor eerstejaars geldt echter wettelijk dat een aanwezigheidsplicht alleen per cursus bij een praktische oefening (POA) in de OER mag worden vastgelegd, nooit als generiek studiejaarsvoorschrift.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/'
      },
      {
        text: '"Optioneel-verplicht": de student kiest vooraf of aanwezigheid meetelt. Behoudt autonomie en verhoogt opkomst structureel zonder juridische dwang.',
        citation: 'Cullen & Oppenheimer, 2024',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      }
    ],
    practicalMaterials: [
      {
        title: 'Praktijkvoorbeeld Aanwezigheidsplicht Pabo & Bouwkunde',
        description: 'De pabo van Hogeschool Rotterdam (80%) en bouwkunde van Hogeschool Inholland (70%) voerden een aanwezigheidsplicht in voor alle eerste- en tweedejaarsvakken, met coulance bij bijzondere omstandigheden. Sindsdien nemen meer studenten deel aan de eerste toetsgelegenheid en leveren zij hun portfolio op tijd in; bij bouwkunde steeg het aandeel nominale studenten en daalde de uitval significant. De uitvoering blijkt het lastigste deel: de pabo laat studenten vervangende opdrachten maken, die docenten vóór de toetsgelegenheid moeten nakijken, en bouwkunde geeft studenten die meer dan twee van de zeven colleges missen geen toegang tot de eerste toetsgelegenheid, wel tot de herkansing.',
        url: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar',
        type: 'pilot'
      }
    ]
  },

  'p-juridisch': {
    id: 'p-juridisch',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'Handelingsperspectieven',
    name: 'Juridische kaders, OER & Medezeggenschap',
    subtitle: 'WHW artikelen 1.6, 7.10, 7.13, 9.18, 10.3c en jurisprudentie',
    shortDescription: 'Juridische randvoorwaarden: WHW-basis, OER, medezeggenschap en jurisprudentie.',
    leadParagraph: 'Het juridisch kader van Hogeschool Rotterdam (Juridische Zaken en O&K, 2025) is helder: een algemene, generieke aanwezigheidsplicht voor een hele opleiding of een heel studiejaar is juridisch niet toegestaan. Studeren is een recht, geen plicht. Een aanwezigheidsplicht mag alleen op cursusniveau, en uitsluitend wanneer de cursus een praktische oefening betreft (POA: praktische oefening met aanwezigheidsplicht). In de cursushandleiding moet worden onderbouwd welk leereffect wordt beoogd en waarom dat leereffect alleen in een verplichte lessituatie te behalen is. De OER is het enige juridisch bindende document.',
    dialogueQuestion: 'Hoe borgen we dat een eventuele aanwezigheidseis juridisch en onderwijskundig standhoudt (OER, medezeggenschap, praktische oefening) en studenten rechtszekerheid biedt?',
    insights: [
      {
        text: 'Aanwezigheidsplicht als losstaande maatregel heeft beperkt effect op leerprestaties; effectief is een gecombineerde aanpak waarin didactiek, teamethos en organisatie op orde zijn.',
        citation: 'Jaftha et al., 2022; Trotter & Roberts, 2006',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Een aanwezigheidsplicht zonder didactische onderbouwing (constructive alignment, actieve werkvormen) is juridisch kwetsbaar én werkt averechts op intrinsieke motivatie. Ook een vervangende opdracht moet constructive aligned zijn.',
        citation: 'Biggs, 1996; Cullen & Oppenheimer, 2024',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      },
      {
        text: 'Een aanwezigheidsplicht hoort thuis in de OER (art. 7.13 WHW) en is daarmee geen papieren formaliteit. De medezeggenschap heeft er wettelijk positie in: de centrale of instituutsmedezeggenschapsraad heeft instemmingsrecht op de OER, en de opleidingscommissie heeft instemmings- of adviesrecht afhankelijk van het onderdeel (art. 9.18 en 10.3c WHW). Betrek beide dus tijdig, niet pas bij vaststelling.',
        citation: 'Artikel 9.18 en 10.3c WHW',
        citationUrl: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        text: 'Behavioristische maatregelen (zoals toetskansreductie of bonuspunten) zijn juridisch alleen toegestaan als de OER daar expliciet grondslag voor biedt.',
        citation: 'Credé et al., 2010; CBHO 2016/069',
        citationUrl: 'https://www.raadvanstate.nl/publish/library/36/cbho-jurisprudentie-2016.pdf'
      }
    ],
    lawArticles: [
      {
        lawRef: 'Artikel 1.6 WHW',
        title: 'Academische vrijheid',
        description: 'Aan instellingen voor hoger onderwijs wordt de academische vrijheid in acht genomen. Studenten hebben in beginsel de vrijheid om wel of niet colleges bij te wonen.',
        link: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        lawRef: 'Artikel 7.10 WHW lid 1',
        title: 'Wat is een tentamen',
        description: 'Elk tentamen omvat een onderzoek naar de kennis, het inzicht en de vaardigheden van de examinandus, alsmede de beoordeling van de uitkomsten van dat onderzoek. Aanwezigheid op zich is geen tentamen.',
        link: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        lawRef: 'Artikel 7.13 WHW lid 2',
        title: 'Onderwijs- en examenregeling (OER)',
        description: 'In de OER worden per opleiding de geldende procedures en rechten en plichten vastgelegd met betrekking tot het onderwijs en de examens. Alleen wat in de OER staat is bindend; studiehandleidingen volstaan niet.',
        link: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        lawRef: 'Artikel 7.13 lid 2 sub d en t',
        title: 'Praktische oefeningen & Toelatingseis',
        description: 'Sub d regelt de inrichting van praktische oefeningen. Sub t bepaalt dat verplichte deelname aan praktische oefeningen als toelatingsvoorwaarde voor een tentamen mag worden gesteld, mits met vervangende eisen bij overmacht.',
        link: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        lawRef: 'Artikelen 9.18 & 10.3c WHW',
        title: 'Positie Medezeggenschap (IMR & OC)',
        description: 'De centrale of instituutsmedezeggenschapsraad heeft instemmingsrecht op de OER. De opleidingscommissie heeft instemmings- of adviesrecht afhankelijk van het onderdeel. Betrek beide tijdig bij het opstellen van aanwezigheidskaders.',
        link: 'https://wetten.overheid.nl/BWBR0005682'
      }
    ],
    courtCases: [
      {
        id: 'case-maastricht',
        title: 'Maastricht University · Calculus 70%-aanwezigheidseis',
        subTitle: 'CBE/JW 20.114a · zaaknummer 2020.105',
        institution: 'Maastricht University',
        instance: 'College van Beroep voor de Examens (CBE)',
        subject: 'Onderwerp: een student tekende tijdens een Calculus-bijeenkomst de aanwezigheid af voor twee afwezige medestudenten en werd door de examencommissie wegens fraude uitgesloten. In beroep toetste het CBE of hier sprake was van fraude in de zin van de WHW.',
        citedArticles: [
          { title: 'Artikel 7.34 lid 1 sub b WHW', text: 'Een ingeschreven student heeft recht om de tentamens af te leggen van de onderwijseenheden van de opleiding.' },
          { title: 'Artikel 7.13 lid 1 sub s en t WHW', text: 'Toelating tot tentamens kan slechts beperkt worden indien in OER opgenomen én gekoppeld aan praktische oefeningen.' },
          { title: 'Artikel 4.4 OER Maastricht', text: 'De bestreden bepaling met de 70%-aanwezigheidseis.' }
        ],
        verdict: 'Student wint (Beroep gegrond)',
        verdictType: 'student',
        keyLessons: 'Het CBE oordeelde dat aanwezigheid geen tentamenonderdeel is en dat de handeling daarom niet als fraude in de zin van de WHW kwalificeert. Aanvullend oordeelde het CBE dat de WHW geen grondslag biedt voor een aanwezigheidsplicht als voorwaarde voor tentamentoelating, omdat geen van de uitzonderingen in artikel 7.13 lid 1 sub s en t van toepassing was.',
        detailedReasons: [
          'Aanwezigheid is geen tentamenonderdeel; aftekenen voor een medestudent kwalificeert daarom niet als fraude in de zin van de WHW.',
          'De WHW biedt geen grondslag voor een aanwezigheidsplicht als toelatingsvoorwaarde voor een theorievak als Calculus, omdat art. 7.13 lid 1 sub s en t WHW niet van toepassing zijn.'
        ]
      },
      {
        id: 'case-erasmus',
        title: 'Erasmus Universiteit · Minor Arbeidsrecht & Reorganisatie',
        subTitle: 'CBHO 2016/069 · bonuspunt voor aanwezigheid',
        institution: 'Erasmus Universiteit Rotterdam, bachelor Rechtsgeleerdheid',
        instance: 'College van Beroep voor het Hoger Onderwijs (CBHO)',
        subject: 'De bestreden examinatorbeslissing dateert van december 2015; het CBHO deed uitspraak op 14 november 2016 (zaak 2016/069). De examinator weigerde 0,5 bonuspunt voor aanwezigheid bij het eindcijfer toe te kennen.',
        citedArticles: [
          { title: 'Artikel 7.3 lid 3 WHW', text: 'Aan elke onderwijseenheid is een tentamen verbonden.' },
          { title: 'Artikel 7.13 lid 2 sub l WHW', text: 'In de OER moet worden vermeld of tentamens mondeling, schriftelijk of op andere wijze worden afgelegd.' },
          { title: 'Artikel 32 lid 1 OER Rechtsgeleerdheid 2015', text: 'Bood slechts grondslag voor schriftelijk/mondeling tentamen.' }
        ],
        verdict: 'Student wint (Beroep gegrond)',
        verdictType: 'student',
        keyLessons: 'Aanwezigheid toetst op zichzelf geen kennis of inzicht. Bonuspunten toekennen mag niet zonder expliciete OER-grondslag onder "andere wijze" van tentaminering.',
        detailedReasons: [
          'Aanwezigheid kan niet worden aangemerkt als mondeling tentamen omdat er geen verplichting bestaat iets te zeggen.',
          'De examinator trad buiten de kaders van de geldende OER.'
        ]
      },
      {
        id: 'case-uva-conflict',
        title: 'Universiteit van Amsterdam · Introduction to Conflict Studies',
        subTitle: 'CBE AC 2207 3278 · 5 december 2022 · geen dispensatie',
        institution: 'Universiteit van Amsterdam',
        instance: 'College van Beroep voor de Examens (CBE)',
        subject: 'Student kreeg geen dispensatie voor aanwezigheidsplicht bij een algemeen werkcollege.',
        citedArticles: [
          { title: 'Artikel 7.13 WHW', text: 'OER moet vermelden welke rechten en plichten gelden; aanwezigheidsplicht vraagt om didactische rechtvaardiging.' }
        ],
        verdict: 'Student wint (Beroep gegrond)',
        verdictType: 'student',
        keyLessons: '"Omdat het bij ons altijd zo is" is geen geldige rechtvaardiging; je moet per specifiek vak motiveren welk bijzonder leerdoel gediend wordt.',
        detailedReasons: [
          'De opleiding kon niet motiveren waarom fysieke aanwezigheid noodzakelijk was voor het behalen van de leerdoelen van dit specifieke vak.'
        ]
      },
      {
        id: 'case-uva-groupwork',
        title: 'Universiteit van Amsterdam · Werkgroepen met groepseindopdracht',
        subTitle: 'CBE-uitspraak · ongegrond · aanwezigheidsplicht gehandhaafd',
        institution: 'Universiteit van Amsterdam',
        instance: 'College van Beroep voor de Examens (CBE)',
        subject: 'Student ging in beroep tegen aanwezigheidsplicht voor vak met werkgroepen en samenwerkings-eindopdracht.',
        citedArticles: [
          { title: 'Artikel 7.13 WHW', text: 'Grondslag voor opname van aanwezigheidsplicht in OER.' },
          { title: 'Artikel B5.5 OER UvA', text: 'Opleidingsspecifieke bepaling waarin aanwezigheidsplicht expliciet was vastgelegd.' }
        ],
        verdict: 'School wint (Beroep ongegrond)',
        verdictType: 'school',
        keyLessons: 'Een aanwezigheidsplicht houdt juridisch wél stand wanneer groepswerk getoetst wordt, vaardigheden actief geoefend worden, en verankering in OER en studiehandleiding klopt.',
        detailedReasons: [
          '1. Oefenen in werkgroepen: actieve toepassing van stof.',
          '2. Samenwerkingsopdracht als toetsvorm: samenwerking vereist fysieke deelname.',
          '3. Vaardigheid gebonden aan de bijeenkomst (validiteit evalueren).',
          '4. Expliciete juridische borging in artikel B5.5 OER.',
          '5. Vooraf transparant gecommuniceerd in de studiehandleiding.'
        ]
      }
    ],
    proportionalityQuestions: [
      'Is 100% aanwezigheid echt nodig, of volstaat een lager percentage (bijv. 80%)?',
      'Zijn er alternatieven beschikbaar, zoals vervangende opdrachten?',
      'Wat gebeurt er bij ziekte, mantelzorg of overmacht; is er voorzien in maatwerk?'
    ],
    hrFramework: {
      title: 'Juridisch kader Hogeschool Rotterdam (Juridische Zaken en O&K, 2025)',
      summary: 'Het juridisch kader van Hogeschool Rotterdam (Juridische Zaken en O&K, 2025) is helder: een algemene, generieke aanwezigheidsplicht voor een hele opleiding of een heel studiejaar is juridisch niet toegestaan. Studeren is een recht, geen plicht. Een aanwezigheidsplicht mag alleen op cursusniveau, en uitsluitend wanneer de cursus een praktische oefening (POA) betreft, die als zodanig in het curriculumschema van de hogeschoolgids wordt aangegeven. In de cursushandleiding moet worden onderbouwd welk leereffect wordt beoogd en waarom dat leereffect alleen in een verplichte lessituatie te behalen is.',
      practicalExercises: [
        'Contextrijk onderwijs waarin theorie wordt verbonden aan praktijkvraagstukken, en waarin houdingsaspecten en vaardigheden in de les worden geoefend.',
        'Projectonderwijs, waar samenwerking en actieve deelname essentieel zijn.',
        'Programmatisch toetsen, waar feedbackmomenten verweven zijn met het leerproces.',
        'Het leren van agile werken en scrumvaardigheden, die je alleen in de groep opdoet.',
        'Presenteren.',
        'Het leren van een taal en van (non-verbale) communicatieve vaardigheden, zoals onderhandelen en de dialoog voeren over complexe onderwerpen.'
      ],
      sourceMemo: {
        title: 'Hogeschool Rotterdam, Aanwezigheidsplicht (POA). Intern kaderdocument',
        fileName: 'Memo aanwezigheidsplicht versie 1.4.pdf',
        fileUrl: '/memo-aanwezigheidsplicht-poa.pdf'
      }
    },
    policyRecommendations: [
      'Aanwezigheidsplicht altijd expliciet opnemen in de OER (art. 7.13 WHW) en uitsluitend koppelen aan een praktische oefening (POA) op cursusniveau.',
      'De medezeggenschap toetst de onderbouwing per cursus. De opleidingscommissie heeft instemmingsrecht op de inrichting van praktische oefeningen en adviesrecht op de daaraan gekoppelde aanwezigheidsplicht. De instituutsmedezeggenschapsraad (IMR) heeft instemmingsrecht op de aanwezigheidsplicht (POA). Betrek de medezeggenschap dus tijdig, niet pas bij vaststelling.',
      'Een aanwezigheidsplicht is altijd onderdeel van een breder pakket gericht op studiesucces, bijvoorbeeld onboarding, studentbesprekingen, en professionalisering van docenten. Overweeg ook of een advies om aanwezig te zijn volstaat in plaats van een plicht. Betrek de onderwijsadviseur bij het inrichten van dit pakket.',
      'Redelijke uitzonderingen mogelijk maken (zorgplicht, functiebeperking, overmacht & vervangende opdracht).',
      'Transparant communiceren naar studenten vóór de start van de cursus via de cursushandleiding en het curriculumschema in de hogeschoolgids.',
      'Proportioneel en zorgvuldig handelen bij handhaving.'
    ]
  },

  // STAP 4: 4 G's
  'p-g1': {
    id: 'p-g1',
    step: 4,
    stepName: "De vier G's",
    stepTag: 'G1',
    name: 'G1 · Gedragen',
    subtitle: 'Worden verwachtingen consistent ondersteund?',
    shortDescription: 'Worden verwachtingen consistent ondersteund?',
    leadParagraph: '"Gedragen" gaat over de mate waarin de organisatie als geheel achter de afspraak staat. Heldere beleidskaders, een coherente toepassing in het team, en organisatorische randvoorwaarden op orde (rooster, registratie, ondersteuning). Zonder dit blijven verwachtingen losse initiatieven van individuele docenten.',
    dialogueQuestion: 'Hoe borgen we dat onze verwachtingen rondom aanwezigheid consistent worden ondersteund door beleid, rooster en het docententeam?',
    insights: [
      {
        text: 'Management en roostermakers zorgen voor studentvriendelijke roosters met aaneengesloten kerntijden, zodat aanwezigheid logistiek verenigbaar is met reistijd en bijbanen.',
        citation: 'Jaftha et al., 2022; Ralph et al., 2025; Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Een eenduidig aanwezigheidsethos binnen de hele instelling, waarbij zichtbare registratie en snelle opvolging bij verzuim de norm zijn, maakt de aanpak coherent.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Een duidelijke BSA-norm in combinatie met compensatieregelingen biedt externe structuur en voorkomt uitstelgedrag.',
        citation: 'Klatter & Smeets, 2023',
        citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/'
      }
    ]
  },

  'p-g2': {
    id: 'p-g2',
    step: 4,
    stepName: "De vier G's",
    stepTag: 'G2',
    name: 'G2 · Geloofwaardig',
    subtitle: 'Draagt aanwezigheid aantoonbaar bij aan leren?',
    shortDescription: 'Draagt aanwezigheid aantoonbaar bij aan leren?',
    leadParagraph: '"Geloofwaardig" gaat over didactische intentionaliteit en zichtbare leerwaarde. Aanwezigheid wordt pas geloofwaardig als de bijeenkomst iets biedt dat zelfstudie niet kan. Dat vraagt om constructive alignment en actieve werkvormen, niet om een plicht die passief aanwezig zijn afdwingt.',
    dialogueQuestion: 'Wat maakt onze bijeenkomsten didactisch zo betekenisvol dat studenten zelf ervaren dat fysieke aanwezigheid onmisbaar is voor hun leerproces?',
    insights: [
      {
        text: 'Aanwezigheid heeft pas geloofwaardige meerwaarde wanneer constructive alignment wordt toegepast: doelen, actieve werkvormen en toetsing zijn naadloos afgestemd.',
        citation: 'Biggs, 1996; Biggs & Tang, 2011; Klatter & Smeets, 2023',
        citationUrl: 'https://doi.org/10.1007/BF00138871'
      },
      {
        text: 'Colleges moeten zich richten op het actief toepassen van kennis ("functioning knowledge") via probleemoplossing of discussie; studenten blijven weg bij herhaling van theorie.',
        citation: 'Biggs & Tang, 2011; Cutler et al., 2016; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      },
      {
        text: 'In didactische modellen waarin kennisconstructie juist in de groep plaatsvindt (zoals PGO of projectonderwijs), is fysieke aanwezigheid voorwaardelijk voor het leerdoel zelf.',
        citation: 'Bijsmans & Schakel, 2018',
        citationUrl: 'https://doi.org/10.1007/s10734-018-0243-4'
      }
    ]
  },

  'p-g3': {
    id: 'p-g3',
    step: 4,
    stepName: "De vier G's",
    stepTag: 'G3',
    name: 'G3 · Gerechtvaardigd',
    subtitle: 'Zijn verwachtingen proportioneel en rechtvaardig?',
    shortDescription: 'Zijn verwachtingen proportioneel en rechtvaardig?',
    leadParagraph: '"Gerechtvaardigd" vraagt om differentiatie naar context en studiefase, en aandacht voor zorgplicht en kwetsbare studenten. Dezelfde eis kan bij eerstejaars terecht zijn en bij ouderejaars onnodig dwingend. Proportionaliteit betekent: is dit de minst zware maatregel die het leerdoel dient?',
    dialogueQuestion: 'Welke kaders en maatwerkmogelijkheden zorgen ervoor dat onze aanwezigheidsnorm rechtvaardig, proportioneel en haalbaar blijft voor álle studenten?',
    insights: [
      {
        text: 'Een strikte aanwezigheidsplicht is sterk te rechtvaardigen in het eerste studiejaar om uitval te voorkomen, maar wordt disproportioneel in latere jaren.',
        citation: 'Bijsmans & Schakel, 2018; Méndez-Suárez & Crespo-Tejero, 2021',
        citationUrl: 'https://dx.doi.org/10.5209/rced.70917'
      },
      {
        text: 'Verplichte kaders zijn effectief om kwetsbare studenten met neiging tot uitstelgedrag te beschermen tegen falen.',
        citation: 'Dobkin et al., 2010; Klatter & Smeets, 2023',
        citationUrl: 'https://doi.org/10.1016/j.econedurev.2009.09.004'
      },
      {
        text: 'Vanuit de zorgplicht kan een gelaagde aanpak gehanteerd worden: brede preventie, vroege signalering door mentoren, gespecialiseerd maatwerk door decanen.',
        citation: 'Jaftha et al., 2022',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Een "optioneel-verplicht" beleid respecteert autonomie en verhoogt toch structureel de opkomst.',
        citation: 'Cullen & Oppenheimer, 2024',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      }
    ]
  },

  'p-g4': {
    id: 'p-g4',
    step: 4,
    stepName: "De vier G's",
    stepTag: 'G4',
    name: 'G4 · Gedeeld',
    subtitle: 'Wordt verantwoordelijkheid gezamenlijk gedragen?',
    shortDescription: 'Wordt verantwoordelijkheid gezamenlijk gedragen?',
    leadParagraph: '"Gedeeld" benadrukt partnerschap tussen instelling, teams, docenten en studenten. Aanwezigheid is niet iets dat een opleiding eenzijdig oplegt; het is een gezamenlijke afspraak waarin elk niveau iets bijdraagt.',
    dialogueQuestion: 'Hoe verdelen we de verantwoordelijkheid voor aanwezigheid evenwichtig tussen organisatie (faciliteiten/rooster), docent (didactiek) en student (inzet)?',
    insights: [
      {
        text: 'De primaire verantwoordelijkheid voor studiesucces mag niet eenzijdig bij de student worden gelegd; management en docententeams zijn gezamenlijk verantwoordelijk voor een studeerbaar programma.',
        citation: 'Klatter & Smeets, 2023',
        citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/'
      },
      {
        text: 'Studieloopbaancoaches (SLC) spelen een actieve partnerrol via datagedreven nudges en tijdige gesprekken bij verzuim.',
        citation: 'Jaftha et al., 2022; Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Studenten nemen verantwoordelijkheid voor hun zelfgestuurde leerproces en realiseren zich dat individuele aanwezigheid de dynamiek voor de hele groep bepaalt.',
        citation: 'Loyens et al., 2008; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      }
    ]
  },

  // BRONNEN
  'p-bronnen': {
    id: 'p-bronnen',
    step: 'bronnen',
    stepName: 'Referentie',
    stepTag: 'Bronnen',
    name: 'Geraadpleegde bronnen',
    shortDescription: 'Alle wetenschappelijke publicaties, jurisprudentie en wetsartikelen.',
    leadParagraph: 'Alle wetenschappelijke publicaties, jurisprudentie en wetsartikelen die in deze handreiking worden aangehaald. Klik op een titel om direct naar de bron of DOI te gaan.',
    dialogueQuestion: 'Wilt u zich verder verdiepen in de empirische literatuur of wetgeving rond aanwezigheid?',
    insights: [
      { text: 'Biggs, J. (1996). Enhancing teaching through constructive alignment. Higher Education, 32(3), 347–364.', citation: 'doi.org/10.1007/BF00138871', citationUrl: 'https://doi.org/10.1007/BF00138871' },
      { text: 'Biggs, J., & Tang, C. (2011). Teaching for quality learning at university (4th ed.). McGraw-Hill/Open University Press.', citation: 'Google Boeken', citationUrl: 'https://books.google.com/books?id=XhjRBrDAESkC' },
      { text: 'Bijsmans, P., & Schakel, A. H. (2018). The impact of attendance on first-year study success in problem-based learning. Higher Education, 76(5), 865–881.', citation: 'doi.org/10.1007/s10734-018-0243-4', citationUrl: 'https://doi.org/10.1007/s10734-018-0243-4' },
      { text: 'Brouwer, P., Van Middelkoop, D., Van de Mortel, M., Zitter, I., et al. (2024). Samen leren in het hbo: teamgericht leren rond complexe opgaven. Zestor.', citation: 'hu.nl', citationUrl: 'https://www.hu.nl/-/media/hu/documenten/onderzoek/projecten/eindrapport_samen_leren_in_het_hbo-zestor.pdf' },
      { text: 'Credé, M., Roch, S. G., & Kieszczynka, U. M. (2010). Class attendance in college: A meta-analytic review. Review of Educational Research, 80(2), 272–295.', citation: 'doi.org/10.3102/0034654310362998', citationUrl: 'https://doi.org/10.3102/0034654310362998' },
      { text: 'Cullen, S., & Oppenheimer, D. (2024). Choosing to learn: The importance of student autonomy in higher education. Science Advances, 10(29), eado6759.', citation: 'doi.org/10.1126/sciadv.ado6759', citationUrl: 'https://doi.org/10.1126/sciadv.ado6759' },
      { text: 'Cutler, C. W., et al. (2016). Should attendance be required in lecture classrooms in dental education? Two viewpoints. Journal of Dental Education, 80(12), 1474–1478.', citation: 'doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x', citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x' },
      { text: 'Dekker, I. (2026). Terug naar de klas: hoe we de studeercrisis tegengaan [Essay]. Hogeschool van Amsterdam, Lectoraat Kansrijke Schoolloopbanen.', citation: 'hva.nl', citationUrl: 'https://cms.web.hva.nl/sites/default/files/lectoraten/foo/kansrijke-schoolloopbanen-een-diverse-stad/260527-essay-lks-izaak-dekker.pdf' },
      { text: 'Dekker, I., Theelen, H., & Debats, P. (2026). Voltijds ingeschreven, deeltijds beschikbaar. Thema Hoger Onderwijs.', citation: 'themahogeronderwijs.org', citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar' },
      { text: 'De Bruyckere, P. (2022). Het collectieve (leraar)vertrouwen samen creëren [VO-praat]. VO-academie / VO-raad.', citation: 'vo-raad.nl', citationUrl: 'https://www.vo-raad.nl/artikelen/het-collectieve-leraar-vertrouwen-samen-creeren-vo-praat-met-pedro-de-bruyckere' },
      { text: 'Dobkin, C., Gil, R., & Marion, J. (2010). Skipping class in college and exam performance. Economics of Education Review, 29(4), 566–575.', citation: 'doi.org/10.1016/j.econedurev.2009.09.004', citationUrl: 'https://doi.org/10.1016/j.econedurev.2009.09.004' },
      { text: 'Dopmeijer, J., Nuijen, J., Busch, M., Tak, N., & Verweij, A. (2022). Monitor Mentale gezondheid en Middelengebruik Studenten hoger onderwijs. RIVM, Trimbos-instituut en GGD GHOR Nederland.', citation: 'doi.org/10.21945/RIVM-2022-0100', citationUrl: 'https://doi.org/10.21945/RIVM-2022-0100' },
      { text: 'Fitzpatrick, J., Cronin, K., & Byrne, E. (2011). Is attending lectures still relevant in engineering education? European Journal of Engineering Education, 36(3), 301–312.', citation: 'doi.org/10.1080/03043797.2011.585226', citationUrl: 'https://doi.org/10.1080/03043797.2011.585226' },
      { text: 'Hattie, J. (2016). Collective Teacher Efficacy [Visible Learning].', citation: 'visible-learning.org', citationUrl: 'https://visible-learning.org/2018/03/collective-teacher-efficacy-hattie/' },
      { text: 'Jaftha, N., Micallef, M., & Chircop, T. (2022). Absenteeism in post-secondary education [Research report]. ResearchGate.', citation: 'researchgate.net', citationUrl: 'https://www.researchgate.net/publication/359802934' },
      { text: 'Kappe, F. R. (2026). Afwezig maar aanwezig: Het rimpeleffect van afwezigheid van studenten (Lectoraatsuitgave Studiesucces 2026-01). Hogeschool Inholland.', citation: 'inholland.nl', citationUrl: 'https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/' },
      { text: 'Klatter, E., & Smeets, E. (2023). Studentsucces verbeteren: focus op oorzaken, niet op symptomen. ScienceGuide.', citation: 'scienceguide.nl', citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/' },
      { text: 'Ralph, V. R., Dube, T., & Ainsworth, M. C. (2025). Attendance, belonging, and engagement in higher education.', citation: 'doi.org/10.71634/er166487', citationUrl: 'https://doi.org/10.71634/er166487' },
      { text: 'Tahir, L., Josso Loureiro, P., & Vissenberg, C. (2024). Sense of belonging: een kwalitatief participatief onderzoek naar de sense of belonging van studenten bij Windesheim in Almere.', citation: 'fleviskenniswerkplaatsjeugd.nl', citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf' },
      { text: 'Trotter, E., & Roberts, C. A. (2006). Enhancing the early student experience. Higher Education Research & Development, 25(4), 371–386.', citation: 'doi.org/10.1080/07294360600947368', citationUrl: 'https://doi.org/10.1080/07294360600947368' },
      { text: 'Vanhoof, J., et al. (2012). Leerbereidheid van leerlingen aanwakkeren: principes die motiveren, inspireren én werken. Acco.', citation: 'researchgate.net', citationUrl: 'https://www.researchgate.net/publication/235433831_Leerbereidheid_van_leerlingen_aanwakkeren_principes_die_motiveren_inspireren_en_werken' },
      { text: 'Winstone, N., & Carless, D. (2019). Designing effective feedback processes in higher education: A learning-focused approach. Routledge.', citation: 'routledge.com', citationUrl: 'https://www.routledge.com/Designing-Effective-Feedback-Processes-in-Higher-Education-A-Learning-Focused/Winstone-Carless/p/book/9780815361633' }
    ]
  }
};

// Koppel juridische documenten (WHW, HR-kaders, Jurisprudentie) direct aan Moeten (p-routeC)
if (DIMENSIONS['p-routeC'] && DIMENSIONS['p-juridisch']) {
  DIMENSIONS['p-routeC'].lawArticles = DIMENSIONS['p-juridisch'].lawArticles;
  DIMENSIONS['p-routeC'].hrFramework = DIMENSIONS['p-juridisch'].hrFramework;
  DIMENSIONS['p-routeC'].courtCases = DIMENSIONS['p-juridisch'].courtCases;
  DIMENSIONS['p-routeC'].proportionalityQuestions = DIMENSIONS['p-juridisch'].proportionalityQuestions;
  DIMENSIONS['p-routeC'].policyRecommendations = DIMENSIONS['p-juridisch'].policyRecommendations;
}

