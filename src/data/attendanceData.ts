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
    description: 'Feiten alleen wijzen geen aanpak aan. Elke feitelijke dimensie rust op waarden die vaak impliciet blijven. De drie perspectieven maken die waarden bespreekbaar vóór je besluit.',
    color: '#003340',
    activeBorderColor: 'border-[#003340]',
    dimensions: ['p-soc', 'p-psy', 'p-ok']
  },
  {
    number: 3,
    name: 'Handelingsperspectieven',
    shortName: 'Handelingsperspectieven',
    tag: 'Handelingsperspectieven',
    leadQuestion: 'Hoe stimuleren we aanwezigheid en wanneer is aanwezigheidsplicht zinvol?',
    description: 'Om aanwezigheid te bevorderen zet je als opleidingsteam primair in op twee elkaar versterkende sporen: werken aan het systeem en werken aan begeleiding. Pas als dat aantoonbaar niet volstaat, onderzoek je of een formele aanwezigheidsplicht didactisch proportioneel is en juridisch voldoet aan de WHW en OER.',
    color: '#00b0eb',
    activeBorderColor: 'border-[#00b0eb]',
    dimensions: ['p-routeA', 'p-routeB', 'p-routeC', 'p-juridisch']
  },
  {
    number: 4,
    name: "De vier G's",
    shortName: "De vier G's",
    tag: "De vier G's",
    leadQuestion: 'Staat het beleid stevig?',
    description: 'Vier evaluatievragen om te toetsen of de voorgenomen aanpak van aanwezigheid stevig staat: Gedragen, Geloofwaardig, Gerechtvaardigd en Gedeeld.',
    color: '#fcc200',
    activeBorderColor: 'border-[#fcc200]',
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
    leadParagraph: 'Voordat we beleid maken, is de vraag wie onze studenten eigenlijk zijn. Verzuim is vaak een rationele keuze binnen een druk leven, niet onwil. Kwalitatief onderzoek onder eerstejaars schetst een herkenbaar beeld van hun leefwereld.',
    dialogueQuestion: 'Waarom blijven studenten weg? Kennen wij onze studentpopulatie goed genoeg om beleid op af te stemmen, of ontwerpen we voor een student die niet meer bestaat?',
    insights: [
      {
        text: 'School is voor veel studenten "één van de ballen die hoog gehouden moeten worden", naast werk, zorgtaken en sociaal leven; zij maken bewuste keuzes op basis van nut en timing.',
        citation: 'Tahir et al., 2024',
        citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf'
      },
      {
        text: 'Een ruime meerderheid van de hbo-studenten ervaart vaak stress door studie- en prestatiedruk, en meer dan de helft kampt met emotionele of psychische klachten.',
        citation: 'Dopmeijer et al., 2022',
        citationUrl: 'https://doi.org/10.21945/RIVM-2022-0100'
      },
      {
        text: 'De voltijdstudent van vandaag is in de praktijk vaak "voltijds ingeschreven, maar deeltijds beschikbaar": waar hbo-bachelors in 2016 nog 39 uur per week aan studie besteedden, is dat gedaald naar 29 uur.',
        citation: 'Dekker et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Door de deeltijdse beschikbaarheid maken studenten pragmatische afwegingen rondom contacttijd: zij plannen aanwezigheid strategisch rondom deadlines en werkschema’s; als een lesbijeenkomst passief is of geen directe toets- en leermeerwaarde heeft, verliest fysieke aanwezigheid het stelselmatig van betaald werk of zelfstudie.',
        citation: 'Dekker et al., 2026',
        citationUrl: 'https://www.themahogeronderwijs.org/artikel/110-4223_Voltijds-ingeschreven-deeltijds-beschikbaar'
      },
      {
        text: 'Studenten beschrijven medestudenten vaker als "collega\'s" dan als vrienden; verbondenheid ontstaat niet vanzelf en voorspelt aanwezigheid sterker dan dwang.',
        citation: 'Tahir et al., 2024; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Persoonlijk gevraagd worden en docentnabijheid verhogen deelname veel sterker dan algemene e-mails of communicatiecampagnes in de huisstijl.',
        citation: 'Tahir et al., 2024',
        citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf'
      },
      {
        text: 'Studenten passen "cherry-picking" toe: ze wonen niet alle lessen bij maar maken een bewuste selectie van bijeenkomsten die zij als essentieel beschouwen.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
      },
      {
        text: 'Post-COVID wegen studenten actiever af tussen fysieke aanwezigheid en digitale alternatieven; aanwezigheid is minder vanzelfsprekend geworden en onderwijs moet zichtbaar toegevoegde waarde bieden.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
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
        title: 'De Studeercrisis · aflevering 1 — Studeren als bijzaak',
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
    leadParagraph: 'Wat studenten in de les ervaren, bepaalt sterker dan beleid de keuze om te komen. Aanwezigheid stijgt significant wanneer lessen interactief zijn en een duidelijke leerwaarde bieden.',
    dialogueQuestion: 'Wat ervaren studenten tijdens onze bijeenkomsten, en hoe zorgen we dat fysieke aanwezigheid voor hen een merkbare en onmisbare meerwaarde heeft die zelfstudie niet kan bieden?',
    insights: [
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
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
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
        title: 'Podcast · Even tussen Ons — Sam de Jong (ISO)',
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
    dialogueQuestion: 'Is het "probleem" afwezigheid, of is het een ontwerpkeuze die afwezigheid rationeel maakt?',
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
        title: 'Podcast · Tussen Ons — Izaak Dekker',
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
    leadParagraph: 'Sancties en beloningen werken, maar niet voor iedereen even sterk en zonder risico\'s. Te veel dwang kan averechts werken op de motivatie- en autonomie-ontwikkeling van hbo-studenten.',
    dialogueQuestion: 'Welke mix van sturen, belonen en kiezen past bij onze doelgroep, en hoe voorkomen we dat dwang de intrinsieke motivatie wegneemt?',
    insights: [
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
    leadParagraph: 'Een helder geformuleerd beleid is een randvoorwaarde, maar "one size fits all" werkt niet. Heldere regels over consequenties verkleinen de kans op verzuim, mits afgestemd op de studiefase.',
    dialogueQuestion: 'Hebben we een heldere coulance-regeling (bijv. studenten laten afmelden bij docent én groep) die voorkomt dat elke afwezigheid via de examencommissie moet lopen?',
    insights: [
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
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
      }
    ],
    practicalMaterials: [
      {
        title: 'Voorbeeld Aanwezigheids- en inspanningsplicht Pabo / Bouwkunde',
        description: 'De pabo van Hogeschool Rotterdam en bouwkunde van Inholland voerden voor de eerste twee studiejaren een aanwezigheids- en inspanningsplicht in; bij bouwkunde halveerde de uitval sindsdien (Dekker, 2026).',
        url: 'https://cms.web.hva.nl/sites/default/files/lectoraten/foo/kansrijke-schoolloopbanen-een-diverse-stad/260527-essay-lks-izaak-dekker.pdf',
        type: 'pilot'
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
    leadParagraph: 'Registratie lijkt een technisch detail, maar heeft zelfstandig effect: het enkel registreren van aanwezigheid stimuleert al de opkomst en levert data voor vroegsignalering.',
    dialogueQuestion: 'Registreren we consequent als team? Inconsistentie tussen docenten ondermijnt de betrouwbaarheid voor de SLC, waardoor tijdig handelen onmogelijk wordt.',
    insights: [
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
    leadParagraph: 'Eén docent die wel handhaaft en een ander die dat laat lopen, ondermijnt elk beleid. Een sterk teamethos zorgt dat verwachtingen consistent en collegiaal worden uitgedragen.',
    dialogueQuestion: 'Hoe dragen we als team aanwezigheid en onze verwachtingen eenduidig uit, en wat spreken we met elkaar af om tegenstrijdige signalen naar studenten te voorkomen?',
    insights: [
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
        text: 'Aanwezigheid lukt zelden met één losse maatregel; ze volgt uit een gezamenlijke, consistente teamaanpak waarin didactiek, begeleiding én organisatie samenkomen.',
        citation: 'Brouwer, Van Middelkoop et al., 2024 / Zestor',
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
        title: 'De Studeercrisis · aflevering 2 — Een leeg lokaal',
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
    name: 'Onderwijslogistiek & Rooster',
    subtitle: 'Rooster- en organisatiekwaliteit: tussenuren en bloktijden',
    shortDescription: 'Rooster- en organisatiekwaliteit: tussenuren en bloktijden.',
    leadParagraph: 'Vaak wordt hier niet over gesproken in het aanwezigheidsdebat, ten onrechte. Het rooster is een van de grootste structurele oorzaken van verzuim.',
    dialogueQuestion: 'Welke roosterkeuzes maken bij ons aanwezigheid onnodig moeilijk, en wie kan daar iets aan veranderen?',
    insights: [
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
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
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
    stepTag: 'Sociologisch',
    name: 'Normvorming (Sociologisch perspectief)',
    subtitle: 'Normvorming: wat vinden we normaal? Effect op de groep die wél komt',
    shortDescription: 'Normvorming: wat vinden we normaal? Hoe wegen we effecten op de groep?',
    leadParagraph: 'Welke aanwezigheid vinden we normaal, en hoe wegen we de effecten op de studenten die wél komen? Afwezigheid heeft een rimpeleffect op de groepsdynamiek.',
    dialogueQuestion: 'Accepteren we normdivergentie tussen docenten, of zien we dat als een teamverantwoordelijkheid? Wat volgt daaruit voor onze gespreksstructuur?',
    insights: [
      {
        text: 'Een sterk teamethos functioneert sociologisch: aanwezigheid als absolute vereiste, niet als vrijblijvende verwachting.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      },
      {
        text: 'Sociale integratie en het gevoel van verbondenheid zijn directe voorspellers van opkomst; isolatie voorspelt verzuim.',
        citation: 'Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Het rimpeleffect van afwezigheid: bij een kantelpunt gaan aanwezige studenten zich de uitzondering voelen in plaats van de norm, wat een neerwaartse spiraal veroorzaakt.',
        citation: 'Kappe, 2026',
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
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
    leadParagraph: 'Het psychologisch contract draait om wederkerigheid. Wat verwachten student en opleiding van elkaar, en wordt die relatie als eerlijk en betekenisvol ervaren?',
    dialogueQuestion: 'Als we meer vragen van studenten, wat bieden we in ruil? Docentbeschikbaarheid, kwaliteit van de bijeenkomst, of heldere feedback?',
    insights: [
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
        citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8'
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
    dialogueQuestion: 'Als aanwezigheid geen aantoonbaar leereffect heeft in dit specifieke vak, waarom eisen we haar dan?',
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

  // STAP 3: HANDELINGSPERSPECTIEVEN (STIMULEREN & NORMEREN)
  'p-routeA': {
    id: 'p-routeA',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'Handelingsperspectieven',
    name: 'Werken aan het systeem',
    subtitle: 'Rooster, studeerbaarheid & didactische meerwaarde',
    shortDescription: 'Herontwerp van rooster, activerende didactiek en studeerbaarheid.',
    leadParagraph: 'Verander niet primair het gedrag van studenten, maar verander de context en randvoorwaarden die verzuim nu de makkelijkste keuze maken. Zorg voor merkbare meerwaarde in de les en een studeerbaar rooster.',
    dialogueQuestion: 'Welk deel van het verzuim in onze opleiding is het gevolg van rooster, didactiek of ontwerp — en wat kunnen wij daar zelf aan doen zonder studenten aan te spreken op gedrag?',
    insights: [
      {
        text: 'Wanneer ontwerp- of roosterproblemen de werkelijke oorzaak zijn, is een plicht pure symptoombestrijding. Eerst de structuur aanpakken.',
        citation: 'Biggs & Tang, 2011; Ralph et al., 2025',
        citationUrl: 'https://doi.org/10.71634/er166487'
      },
      {
        text: 'Constructive alignment en activerende werkvormen zorgen dat de bijeenkomst geen online substituut heeft, waardoor aanwezig zijn loont.',
        citation: 'Biggs, 1996; Fitzpatrick et al., 2011',
        citationUrl: 'https://doi.org/10.1007/BF00138871'
      },
      {
        text: 'Interdependentie in opdrachten geeft aanwezigheid zin: de les moet iets bieden dat zelfstudie niet kan.',
        citation: 'Cutler et al., 2016',
        citationUrl: 'https://doi.org/10.1002/j.0022-0337.2016.80.12.tb06236.x'
      }
    ],
    practicalMaterials: [
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
    stepTag: 'Handelingsperspectieven',
    name: 'Werken aan begeleiding',
    subtitle: 'Binding, vroegsignalering & persoonlijke follow-up',
    shortDescription: 'Vroegtijdige signalering, warme follow-up en preventieve begeleiding.',
    leadParagraph: 'Werk niet met een starre regel, maar met de relatie en preventieve opvolging. Versterk binding en docentnabijheid, en spreek studenten tijdig persoonlijk aan bij verzuim.',
    dialogueQuestion: 'Welke rol nemen wij als docenten en SLC in het opbouwen van de relatie en het opvangen van beginnend verzuim — en waar staan we nu?',
    insights: [
      {
        text: 'Een drietrapsaanpak werkt het best: preventie via een gastvrije cultuur en zichtbare registratie; gepersonaliseerde SLC-interventies; en specialistisch maatwerk bij structurele belemmeringen.',
        citation: 'Jaftha et al., 2022',
        citationUrl: 'https://www.researchgate.net/publication/359802934'
      },
      {
        text: 'Aanwezigheidsdata inzetten als vroegsignaal voor hulp, niet als bestraffend instrument. Werkt met name krachtig bij eerstejaars.',
        citation: 'Trotter & Roberts, 2006',
        citationUrl: 'https://doi.org/10.1080/07294360600947368'
      }
    ],
    practicalMaterials: [
      {
        title: 'Data-gedreven nudges',
        description: 'Vriendelijk bericht vanuit SLC: "we hebben je gemist bij de laatste 2 practica, hoe gaat het met de voorbereiding?"',
        type: 'tool'
      },
      {
        title: 'Zichtbare registratie als norm',
        description: 'Directe persoonlijke follow-up als professionele norm in plaats van administratieve formaliteit.',
        type: 'guide'
      }
    ]
  },

  // STAP 3 (VERVOLG): NORMEREN (WANNEER IS PLICHT ZINVOL?)
  'p-routeC': {
    id: 'p-routeC',
    step: 3,
    stepName: 'Handelingsperspectieven',
    stepTag: 'Handelingsperspectieven',
    name: 'Werken aan aanwezigheidsplicht',
    subtitle: 'Spoor 3 · Wanneer is een formele norm didactisch proportioneel en verdedigbaar?',
    shortDescription: 'Spoor 3: Werken aan aanwezigheidsplicht. Didactische afweging en proportionaliteit.',
    leadParagraph: 'Een aanwezigheidseis is nooit het vertrekpunt, maar een uiterst middel (drempelcheck). Een alternatief model is "optioneel-verplicht": de student kiest vooraf of aanwezigheid meetelt voor de beoordeling. Dit behoudt autonomie en verhoogt opkomst structureel. Blijft het opleidingsteam bij stimuleren via het systeem en begeleiding? Dan is er géén formele beperking van de academische studievrijheid (art. 1.6 WHW) en hoeft er juridisch niets in de OER geregeld te worden. Kiest het team na zorgvuldige afweging wél voor een formele norm, dan gelden de didactische modellen en wettelijke randvoorwaarden onverkort.',
    dialogueQuestion: 'Hebben we als opleidingsteam eerst alle mogelijkheden binnen het systeem (activerende didactiek, rooster) en begeleiding ten volle benut, en waarom is een formele norm of verplichting in dít specifieke vak didactisch noodzakelijk en proportioneel?',
    insights: [
      {
        text: 'Drempelcheck: Een aanwezigheidseis is een ultimum remedium. Als stimuleren via didactiek en relatie volstaat, blijft de academische studievrijheid (art. 1.6 WHW) intact en is geen OER-wijziging vereist.',
        citation: 'Art. 1.6 & 7.13 WHW; Kappe, 2026',
        citationUrl: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        text: 'Een aanwezigheidsplicht vereist formele borging in de OER (art. 7.13 WHW) en een aantoonbare didactische koppeling aan een praktische oefening.',
        citation: 'Biggs, 1996; Artikel 7.13 WHW',
        citationUrl: 'https://wetten.overheid.nl/BWBR0005682'
      },
      {
        text: '"Optioneel-verplicht": de student kiest vooraf of aanwezigheid meetelt. Behoudt autonomie en verhoogt opkomst structureel.',
        citation: 'Cullen & Oppenheimer, 2024',
        citationUrl: 'https://doi.org/10.1126/sciadv.ado6759'
      },
      {
        text: 'Een normatieve ingreep past goed bij eerstejaars, praktische vaardigheden en beroepscompetenties; minder bij theoretische hoorcolleges van ouderejaars.',
        citation: 'Bijsmans & Schakel, 2018; Dobkin et al., 2010; Klatter & Smeets, 2023',
        citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/'
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
    leadParagraph: 'Studenten zijn in beginsel vrij om al dan niet aanwezig te zijn (art. 1.6 WHW). Een aanwezigheidsplicht beperkt die vrijheid en moet daarom aan strikte wettelijke eisen voldoen. De OER is het enige juridisch bindende document, met instemmingsrecht voor de IMR en advies-/instemmingsrecht voor de opleidingscommissie (OC).',
    dialogueQuestion: 'Voldoen we aan de wettelijke voorwaarden voor een aanwezigheidsverplichting (OER, medezeggenschap, praktische oefening, constructive alignment), of doen we een claim die bij het CBE of de rechter sneuvelt?',
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
        subject: 'Voor het vak Calculus gold volgens art. 4.4 OER een aanwezigheidsplicht van 70%. Studenten die niet voldeden werden uitgesloten van het hertentamen.',
        citedArticles: [
          { title: 'Artikel 7.34 lid 1 sub b WHW', text: 'Een ingeschreven student heeft recht om de tentamens af te leggen van de onderwijseenheden van de opleiding.' },
          { title: 'Artikel 7.13 lid 1 sub s en t WHW', text: 'Toelating tot tentamens kan slechts beperkt worden indien in OER opgenomen én gekoppeld aan praktische oefeningen.' },
          { title: 'Artikel 4.4 OER Maastricht', text: 'De bestreden bepaling met de 70%-aanwezigheidseis.' }
        ],
        verdict: 'Student wint (Beroep gegrond)',
        verdictType: 'student',
        keyLessons: 'Een percentage-eis kan niet op een regulier theorie-vak worden gelegd; Calculus kwalificeerde niet als praktische oefening. De OER-bepaling was in strijd met de WHW.',
        detailedReasons: [
          'Calculus is een theoretisch vak, geen praktische oefening in de zin van art. 7.13 lid 1 sub t WHW.',
          'Uitsluiting van tentamens zonder wettelijke grondslag schendt het recht op examinering conform art. 7.34 WHW.'
        ]
      },
      {
        id: 'case-erasmus',
        title: 'Erasmus Universiteit · Minor Arbeidsrecht & Reorganisatie',
        subTitle: 'CBHO 2016/069 · bonuspunt voor aanwezigheid',
        institution: 'Erasmus Universiteit Rotterdam, bachelor Rechtsgeleerdheid',
        instance: 'College van Beroep voor het Hoger Onderwijs (CBHO)',
        subject: 'Examinator weigerde 0,5 bonuspunt voor aanwezigheid bij het eindcijfer toe te kennen.',
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
    policyRecommendations: [
      'Aanwezigheidsplicht altijd expliciet opnemen in de OER.',
      'Didactische noodzaak onderbouwen; Opleidingscommissie (OC) raadplegen (de Instituutsmedezeggenschapsraad / IMR heeft instemmingsrecht op de OER).',
      'Redelijke uitzonderingen mogelijk maken (zorgplicht, functiebeperking, overmacht).',
      'Transparant communiceren naar studenten vóór de start van de cursus.',
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
    dialogueQuestion: 'Staat aanwezigheid consequent in OER, studiehandleiding en Brightspace? Krijgt de student dezelfde reactie van docenten en SLC? Is aanwezig zijn praktisch haalbaar (rooster, lokaal)?',
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
    dialogueQuestion: 'Wat gebeurt er in de les dat niet uit opname of boek te halen is? Zijn leerdoelen, werkvormen en toetsing op elkaar afgestemd? Zouden studenten zelf uitleggen waaróm ze er zijn?',
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
    dialogueQuestion: 'Is 100% aanwezigheid echt nodig, of volstaat minder? Zijn er alternatieven (vervangende opdrachten)? Wat gebeurt er bij ziekte, mantelzorg, functiebeperking? Onderscheid tussen eerste- en ouderejaars?',
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
    dialogueQuestion: 'Wat vraagt het van management (rooster, faciliteiten)? Wat vraagt het van docenten (didactische kwaliteit)? Wat vraagt het van studenten en wat krijgen zij terug?',
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
      { text: 'Kappe, F. R. (2026). Afwezig maar aanwezig: Het rimpeleffect van afwezigheid van studenten (Lectoraatsuitgave Studiesucces 2026-01). Hogeschool Inholland.', citation: 'surf.nl', citationUrl: 'https://objectstore.surf.nl/live/objectstore/aff0d953-ff8d-4dab-86d8-f0138e12e564/202605%20Lectoraatsuitgave%20onderzoek%20aanwezigheid%20HO%20vDef.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8ea577ad65394dfeb2d62886e3056a36%2F20260910%2FNL%2Fs3%2Faws4_request&X-Amz-Date=20260910T142122Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=cc4b78fec4bc0b45492a71abcade135903910a59f43349e7a0bc0842ed8090c8' },
      { text: 'Klatter, E., & Smeets, E. (2023). Studentsucces verbeteren: focus op oorzaken, niet op symptomen. ScienceGuide.', citation: 'scienceguide.nl', citationUrl: 'https://www.scienceguide.nl/2023/06/studentsucces-verbeteren-focus-op-oorzaken-niet-op-symptomen/' },
      { text: 'Ralph, V. R., Dube, T., & Ainsworth, M. C. (2025). Attendance, belonging, and engagement in higher education.', citation: 'doi.org/10.71634/er166487', citationUrl: 'https://doi.org/10.71634/er166487' },
      { text: 'Tahir, L., Josso Loureiro, P., & Vissenberg, C. (2024). Sense of belonging: een kwalitatief participatief onderzoek naar de sense of belonging van studenten bij Windesheim in Almere.', citation: 'fleviskenniswerkplaatsjeugd.nl', citationUrl: 'https://www.fleviskenniswerkplaatsjeugd.nl/wp-content/uploads/2024/01/Rapport-Sense-of-Belonging-nov2023-kleiner.pdf' },
      { text: 'Trotter, E., & Roberts, C. A. (2006). Enhancing the early student experience. Higher Education Research & Development, 25(4), 371–386.', citation: 'doi.org/10.1080/07294360600947368', citationUrl: 'https://doi.org/10.1080/07294360600947368' },
      { text: 'Vanhoof, J., et al. (2012). Leerbereidheid van leerlingen aanwakkeren: principes die motiveren, inspireren én werken. Acco.', citation: 'researchgate.net', citationUrl: 'https://www.researchgate.net/publication/235433831_Leerbereidheid_van_leerlingen_aanwakkeren_principes_die_motiveren_inspireren_en_werken' },
      { text: 'Winstone, N., & Carless, D. (2019). Designing effective feedback processes in higher education: A learning-focused approach. Routledge.', citation: 'routledge.com', citationUrl: 'https://www.routledge.com/Designing-Effective-Feedback-Processes-in-Higher-Education-A-Learning-Focused/Winstone-Carless/p/book/9780815361633' }
    ]
  }
};
