<script setup lang="ts">
import { Component, reactive } from 'vue'
import LibButton from './LibButton.vue';
import LibUnsortedIcon from './LibUnsortedIcon.vue';
import LibDescIcon from './LibDescIcon.vue';
import LibAscIcon from './LibAscIcon.vue';

withDefaults(
    defineProps<{
        actions?:{
            label?: string
            icon: Component
        }[]
    }>(),
    {}
)

type responseType = {}[]

let data: responseType

// async function fetchData() {
//     console.log('fetchData()')
//     await fetch('https://ebb-edge-dev.azurewebsites.net/api/data/calculations/json/momentum/2024-03-06/1d', {
//         method: "GET",
//         headers: {
//             'content-type': 'text/csv'
//         }
//     }).then(async res => res.json()).then(body => console.log(data = reactive(body['data'])))
// }
// await fetchData()

// Add Reset Order to Dataset
data = reactive([
    {
        "Ticker": "SBNY",
        "Sector": "Financial Services",
        "Industry": "Banks\u2014Regional",
        "Adj Slope 90": 17010631461.411186,
        "Adj Slope 125": 20205107.701762263,
        "Adj Slope 250": -0.555033173490716
    },
    {
        "Ticker": "GNPX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 417145.80443675595,
        "Adj Slope 125": 1011.5884215638586,
        "Adj Slope 250": -0.8160221477722462
    },
    {
        "Ticker": "PHUN",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 190137.65514075925,
        "Adj Slope 125": 601.4326733349751,
        "Adj Slope 250": -6.083106361216667
    },
    {
        "Ticker": "DTIL",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 189207.73306551855,
        "Adj Slope 125": 3370.966115464917,
        "Adj Slope 250": 0.03327551864545829
    },
    {
        "Ticker": "CAMP",
        "Sector": "Technology",
        "Industry": "Communication Equipment",
        "Adj Slope 90": 62673.21037603782,
        "Adj Slope 125": 560.6982812801733,
        "Adj Slope 250": -26.15399441691916
    },
    {
        "Ticker": "STTK",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 43762.63285763969,
        "Adj Slope 125": 10176.67697280197,
        "Adj Slope 250": 34.996102455900754
    },
    {
        "Ticker": "NKTX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 42845.086178567326,
        "Adj Slope 125": 12390.462741884812,
        "Adj Slope 250": 5.290815264049485
    },
    {
        "Ticker": "CCCC",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 40559.03237036769,
        "Adj Slope 125": 2848.155489810767,
        "Adj Slope 250": 1.3865332358111049
    },
    {
        "Ticker": "CRBP",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 31284.89479684058,
        "Adj Slope 125": 757.4243086356072,
        "Adj Slope 250": 5.066505307248246
    },
    {
        "Ticker": "SEZL",
        "Sector": "Financial Services",
        "Industry": "Credit Services",
        "Adj Slope 90": 29488.082569360457,
        "Adj Slope 125": 138.70259939533705,
        "Adj Slope 250": 0.15011478051551871
    },
    {
        "Ticker": "SERA",
        "Sector": "Healthcare",
        "Industry": "Diagnostics & Research",
        "Adj Slope 90": 24559.269001637356,
        "Adj Slope 125": 5589.410877818666,
        "Adj Slope 250": 5.481477901705619
    },
    {
        "Ticker": "UAVS",
        "Sector": "Technology",
        "Industry": "Computer Hardware",
        "Adj Slope 90": 21032.92534553831,
        "Adj Slope 125": 224.3628669698562,
        "Adj Slope 250": -3.722193827638079
    },
    {
        "Ticker": "SPRB",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 15534.283025913075,
        "Adj Slope 125": 267.0398703530155,
        "Adj Slope 250": 0.8011742417906093
    },
    {
        "Ticker": "DAVE",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 15127.84534218151,
        "Adj Slope 125": 1612.725185740533,
        "Adj Slope 250": 76.06102742711613
    },
    {
        "Ticker": "EYPT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 13918.507911790615,
        "Adj Slope 125": 1841.3040405945871,
        "Adj Slope 250": 400.7193319334239
    },
    {
        "Ticker": "ALT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 13708.942096871375,
        "Adj Slope 125": 4726.684807261907,
        "Adj Slope 250": 4.542983635995926
    },
    {
        "Ticker": "SLDB",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 11918.311351209497,
        "Adj Slope 125": 2012.6400167816603,
        "Adj Slope 250": 0.10932240678169329
    },
    {
        "Ticker": "ARQT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 11415.698494376156,
        "Adj Slope 125": 5.177209955028461,
        "Adj Slope 250": -34.93375214003579
    },
    {
        "Ticker": "FGEN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 10879.293416949724,
        "Adj Slope 125": 216.69173677791696,
        "Adj Slope 250": -63.27627860178621
    },
    {
        "Ticker": "ABSI",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 9575.353579306222,
        "Adj Slope 125": 2025.698805297166,
        "Adj Slope 250": 54.52709275584733
    },
    {
        "Ticker": "DRCT",
        "Sector": "Communication Services",
        "Industry": "Advertising Agencies",
        "Adj Slope 90": 9559.455402074767,
        "Adj Slope 125": 14757.291545248958,
        "Adj Slope 250": 218.03246609023037
    },
    {
        "Ticker": "VKTX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 9481.357589027391,
        "Adj Slope 125": 987.840396832639,
        "Adj Slope 250": 3.0335358453220684
    },
    {
        "Ticker": "CATX",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 9184.903312948069,
        "Adj Slope 125": 733.6233249160389,
        "Adj Slope 250": -1.1258180903423218
    },
    {
        "Ticker": "VERA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 9035.123480230879,
        "Adj Slope 125": 548.9160850895657,
        "Adj Slope 250": 174.1809676448588
    },
    {
        "Ticker": "FRGT",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 8903.447864131142,
        "Adj Slope 125": 387.19064415360737,
        "Adj Slope 250": -25.621891538625174
    },
    {
        "Ticker": "HARP",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 8738.232671755868,
        "Adj Slope 125": 4797.211861482129,
        "Adj Slope 250": 67.13278965456693
    },
    {
        "Ticker": "HRTX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 7192.5438946073045,
        "Adj Slope 125": 884.2110970481441,
        "Adj Slope 250": -0.01162198558675637
    },
    {
        "Ticker": "FATE",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 7003.013802334729,
        "Adj Slope 125": 1364.2495796026021,
        "Adj Slope 250": -3.2336930930359116
    },
    {
        "Ticker": "ALRN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 6764.449343537609,
        "Adj Slope 125": 2036.6584843925316,
        "Adj Slope 250": 114.18803921948945
    },
    {
        "Ticker": "MRSN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 5538.0132058837335,
        "Adj Slope 125": 1432.1054655444605,
        "Adj Slope 250": -10.546977771447201
    },
    {
        "Ticker": "PRAX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 5242.539615949783,
        "Adj Slope 125": 296.3302497396477,
        "Adj Slope 250": 85.5980336826778
    },
    {
        "Ticker": "IVVD",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 5151.0380004329,
        "Adj Slope 125": 988.0609667333177,
        "Adj Slope 250": 147.30244284562724
    },
    {
        "Ticker": "PYXS",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 5059.185391184128,
        "Adj Slope 125": 305.70143152671125,
        "Adj Slope 250": -0.13903027424683986
    },
    {
        "Ticker": "WGS",
        "Sector": "Health Services",
        "Industry": "Medical/Nursing Services",
        "Adj Slope 90": 4969.663461070096,
        "Adj Slope 125": 9.031102801637582,
        "Adj Slope 250": -39.994248606805314
    },
    {
        "Ticker": "LRMR",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 4897.591586249909,
        "Adj Slope 125": 360.67934073634433,
        "Adj Slope 250": 2.1623350638524124
    },
    {
        "Ticker": "TNYA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 4628.975012805941,
        "Adj Slope 125": 180.10054349019873,
        "Adj Slope 250": -2.2918525735687374
    },
    {
        "Ticker": "PRCH",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 4382.843915062246,
        "Adj Slope 125": 3490.039589065328,
        "Adj Slope 250": 17.822292720892268
    },
    {
        "Ticker": "HA",
        "Sector": "Industrials",
        "Industry": "Airlines",
        "Adj Slope 90": 4326.553755616169,
        "Adj Slope 125": 655.8840170052788,
        "Adj Slope 250": 1.4407425793948134
    },
    {
        "Ticker": "LTRPA",
        "Sector": "Communication Services",
        "Industry": "Internet Content & Information",
        "Adj Slope 90": 4292.996349255034,
        "Adj Slope 125": 423.7445181626468,
        "Adj Slope 250": -0.03002659938917806
    },
    {
        "Ticker": "YMAB",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 4032.024333344483,
        "Adj Slope 125": 943.6893371175576,
        "Adj Slope 250": 26.548189249717876
    },
    {
        "Ticker": "SMCI",
        "Sector": "Technology",
        "Industry": "Computer Hardware",
        "Adj Slope 90": 3983.7086024764685,
        "Adj Slope 125": 587.6525303999268,
        "Adj Slope 250": 303.0789438314581
    },
    {
        "Ticker": "IGMS",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3979.7046889767535,
        "Adj Slope 125": 344.14259182281756,
        "Adj Slope 250": -5.801636538174911
    },
    {
        "Ticker": "SYRS",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3917.851177745343,
        "Adj Slope 125": 539.7569641411205,
        "Adj Slope 250": 48.61423673663623
    },
    {
        "Ticker": "DWAC",
        "Sector": "Financial Services",
        "Industry": "Shell Companies",
        "Adj Slope 90": 3799.471159668634,
        "Adj Slope 125": 618.3211131873998,
        "Adj Slope 250": 92.70557626593691
    },
    {
        "Ticker": "OCUL",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3736.3037187183786,
        "Adj Slope 125": 341.4560063147462,
        "Adj Slope 250": -2.0592194692044394
    },
    {
        "Ticker": "VNCE",
        "Sector": "Consumer Cyclical",
        "Industry": "Apparel Manufacturing",
        "Adj Slope 90": 3596.9963991716,
        "Adj Slope 125": 265.9452937342476,
        "Adj Slope 250": -31.22708399172838
    },
    {
        "Ticker": "KOD",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3595.080774507001,
        "Adj Slope 125": 918.2585062864459,
        "Adj Slope 250": -9.680868071169787
    },
    {
        "Ticker": "HOWL",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3460.3842129130767,
        "Adj Slope 125": 972.0021294459439,
        "Adj Slope 250": 26.840944025317082
    },
    {
        "Ticker": "CLSK",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 3407.1978249074527,
        "Adj Slope 125": 1800.638173304943,
        "Adj Slope 250": 174.34538789398357
    },
    {
        "Ticker": "STIM",
        "Sector": "Healthcare",
        "Industry": "Diagnostics & Research",
        "Adj Slope 90": 3097.579693388125,
        "Adj Slope 125": 1026.9384017165537,
        "Adj Slope 250": -0.026162686885921417
    },
    {
        "Ticker": "ARVN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 3047.1960129773256,
        "Adj Slope 125": 568.3859513047609,
        "Adj Slope 250": 6.867419588608392
    },
    {
        "Ticker": "IOVA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2978.294682697071,
        "Adj Slope 125": 673.4599399767428,
        "Adj Slope 250": 0.7955427632673953
    },
    {
        "Ticker": "VINC",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2951.8730533966236,
        "Adj Slope 125": 282.7172981665316,
        "Adj Slope 250": 0.008069955259478664
    },
    {
        "Ticker": "PEPG",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2935.3527157779404,
        "Adj Slope 125": 417.42401805330945,
        "Adj Slope 250": -9.447544243182831
    },
    {
        "Ticker": "KYMR",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2859.4275952025337,
        "Adj Slope 125": 683.1120240371315,
        "Adj Slope 250": -0.14729020065915457
    },
    {
        "Ticker": "NOTV",
        "Sector": "Healthcare",
        "Industry": "Diagnostics & Research",
        "Adj Slope 90": 2827.820591922116,
        "Adj Slope 125": 177.42308811045336,
        "Adj Slope 250": -8.055094175771197
    },
    {
        "Ticker": "RNA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2808.725742020652,
        "Adj Slope 125": 501.7724534471883,
        "Adj Slope 250": -7.800221760494153
    },
    {
        "Ticker": "HMST",
        "Sector": "Financial Services",
        "Industry": "Banks\u2014Regional",
        "Adj Slope 90": 2752.39439342673,
        "Adj Slope 125": 231.39240603999167,
        "Adj Slope 250": -0.1351043458888563
    },
    {
        "Ticker": "ESPR",
        "Sector": "Healthcare",
        "Industry": "Drug Manufacturers\u2014Specialty & Generic",
        "Adj Slope 90": 2732.9773146474877,
        "Adj Slope 125": 793.7604724769936,
        "Adj Slope 250": 0.7444509245202751
    },
    {
        "Ticker": "ALPN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2721.0506356803094,
        "Adj Slope 125": 891.749007670863,
        "Adj Slope 250": 204.70116192850446
    },
    {
        "Ticker": "CELU",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2664.2668137862584,
        "Adj Slope 125": 115.94821752158258,
        "Adj Slope 250": -14.097393574927553
    },
    {
        "Ticker": "OSCR",
        "Sector": "Healthcare",
        "Industry": "Healthcare Plans",
        "Adj Slope 90": 2602.928362303077,
        "Adj Slope 125": 965.6137232806994,
        "Adj Slope 250": 47.027643982761106
    },
    {
        "Ticker": "CYTK",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2408.998714505398,
        "Adj Slope 125": 801.47892790817,
        "Adj Slope 250": 33.73386893974674
    },
    {
        "Ticker": "ADTH",
        "Sector": "Communication Services",
        "Industry": "Advertising Agencies",
        "Adj Slope 90": 2333.5995977135544,
        "Adj Slope 125": 595.6989095434598,
        "Adj Slope 250": 5.406413529696481
    },
    {
        "Ticker": "GLYC",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2333.1412644200254,
        "Adj Slope 125": 685.883533183774,
        "Adj Slope 250": 29.460609786300495
    },
    {
        "Ticker": "ARDX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2286.2482829870964,
        "Adj Slope 125": 659.7142677840458,
        "Adj Slope 250": 49.74124320855073
    },
    {
        "Ticker": "KURA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2255.8748405762385,
        "Adj Slope 125": 599.2430001526349,
        "Adj Slope 250": 4.938087928732451
    },
    {
        "Ticker": "TREE",
        "Sector": "Financial Services",
        "Industry": "Financial Conglomerates",
        "Adj Slope 90": 2195.632220493851,
        "Adj Slope 125": 844.3015349932725,
        "Adj Slope 250": 0.5171543426698976
    },
    {
        "Ticker": "ZIMV",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 2183.2629779521676,
        "Adj Slope 125": 426.822387806812,
        "Adj Slope 250": 56.53894213247528
    },
    {
        "Ticker": "ATHA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2176.018055756741,
        "Adj Slope 125": 253.0346923449513,
        "Adj Slope 250": -0.16848895179289394
    },
    {
        "Ticker": "NNBR",
        "Sector": "Industrials",
        "Industry": "Conglomerates",
        "Adj Slope 90": 2134.4698643436373,
        "Adj Slope 125": 1070.0206550477028,
        "Adj Slope 250": 201.0699083905727
    },
    {
        "Ticker": "ANNX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 2029.792350661972,
        "Adj Slope 125": 703.5759777025496,
        "Adj Slope 250": -0.4258502902901154
    },
    {
        "Ticker": "HYLN",
        "Sector": "Consumer Cyclical",
        "Industry": "Auto Parts",
        "Adj Slope 90": 1899.0602997175442,
        "Adj Slope 125": 3.717916871128093,
        "Adj Slope 250": -29.02372216586323
    },
    {
        "Ticker": "OMGA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1888.533470078327,
        "Adj Slope 125": 104.58609454412822,
        "Adj Slope 250": -35.895212277922184
    },
    {
        "Ticker": "FDMT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1846.2213079108117,
        "Adj Slope 125": 293.70704565917265,
        "Adj Slope 250": 0.012424369701365687
    },
    {
        "Ticker": "ASPI",
        "Sector": "Healthcare",
        "Industry": "Pharmaceuticals",
        "Adj Slope 90": 1842.831157623802,
        "Adj Slope 125": 1387.6519976580457,
        "Adj Slope 250": 224.9899306533358
    },
    {
        "Ticker": "SPIR",
        "Sector": "Industrials",
        "Industry": "Specialty Business Services",
        "Adj Slope 90": 1830.2249694189968,
        "Adj Slope 125": 400.3261213514223,
        "Adj Slope 250": 7.829763853268252
    },
    {
        "Ticker": "KAMN",
        "Sector": "Industrials",
        "Industry": "Aerospace & Defense",
        "Adj Slope 90": 1822.433344700701,
        "Adj Slope 125": 427.18550794631716,
        "Adj Slope 250": 11.459324497376025
    },
    {
        "Ticker": "LQDA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1803.513356789036,
        "Adj Slope 125": 590.4261911958041,
        "Adj Slope 250": 22.53851801031219
    },
    {
        "Ticker": "SILK",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 1740.7672843326984,
        "Adj Slope 125": 5.285844627513132,
        "Adj Slope 250": -51.83887585285481
    },
    {
        "Ticker": "MARA",
        "Sector": "Financial Services",
        "Industry": "Capital Markets",
        "Adj Slope 90": 1679.8074117195818,
        "Adj Slope 125": 1001.7299275820471,
        "Adj Slope 250": 63.85984871681981
    },
    {
        "Ticker": "SANA",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1656.9871810258576,
        "Adj Slope 125": 165.9686173975778,
        "Adj Slope 250": 0.2232071813092765
    },
    {
        "Ticker": "ACET",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1631.123853592633,
        "Adj Slope 125": 216.53034088038717,
        "Adj Slope 250": -38.68470504585928
    },
    {
        "Ticker": "JAN",
        "Sector": "Industrials",
        "Industry": "Waste Management",
        "Adj Slope 90": 1580.747505226975,
        "Adj Slope 125": 297.74121552716144,
        "Adj Slope 250": -22.331366910758444
    },
    {
        "Ticker": "APGE",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1551.1758922044428,
        "Adj Slope 125": 213.63081014078796,
        "Adj Slope 250": 56.856197473970305
    },
    {
        "Ticker": "HNST",
        "Sector": "Consumer Cyclical",
        "Industry": "Specialty Retail",
        "Adj Slope 90": 1525.568884186409,
        "Adj Slope 125": 1076.3888901158466,
        "Adj Slope 250": 12.331687428394092
    },
    {
        "Ticker": "TSVT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1489.6911117181296,
        "Adj Slope 125": 12.714045521971265,
        "Adj Slope 250": -43.67224779385888
    },
    {
        "Ticker": "SWTX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1443.967280569284,
        "Adj Slope 125": 386.7968662261854,
        "Adj Slope 250": 17.010143402138926
    },
    {
        "Ticker": "RXST",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 1430.5356423235307,
        "Adj Slope 125": 397.3802354957135,
        "Adj Slope 250": 133.45887645413507
    },
    {
        "Ticker": "KROS",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1397.1177199867548,
        "Adj Slope 125": 273.00599692285374,
        "Adj Slope 250": 0.006245446435270844
    },
    {
        "Ticker": "APEI",
        "Sector": "Consumer Defensive",
        "Industry": "Education & Training Services",
        "Adj Slope 90": 1386.8376063122464,
        "Adj Slope 125": 841.6841856087003,
        "Adj Slope 250": 36.93007671991578
    },
    {
        "Ticker": "AXGN",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 1354.654675764039,
        "Adj Slope 125": 442.3934256530492,
        "Adj Slope 250": -1.3208789474007052
    },
    {
        "Ticker": "INBX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1345.6253675922371,
        "Adj Slope 125": 480.9008968556675,
        "Adj Slope 250": 13.527783851324953
    },
    {
        "Ticker": "IMGN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1276.484465692126,
        "Adj Slope 125": 399.911293436698,
        "Adj Slope 250": 439.10326870078205
    },
    {
        "Ticker": "UP",
        "Sector": "Industrials",
        "Industry": "Airports & Air Services",
        "Adj Slope 90": 1266.2062566115947,
        "Adj Slope 125": 82.51727373976708,
        "Adj Slope 250": -5.414783123365308
    },
    {
        "Ticker": "TARS",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1244.684080641558,
        "Adj Slope 125": 333.3553584284022,
        "Adj Slope 250": 42.218765392448425
    },
    {
        "Ticker": "NGM",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1231.9031254016468,
        "Adj Slope 125": 8.055471690821193,
        "Adj Slope 250": -55.75563574634012
    },
    {
        "Ticker": "SGMT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1217.051317583382,
        "Adj Slope 125": -0.00554779495519804,
        "Adj Slope 250": -18.429645638456098
    },
    {
        "Ticker": "BLND",
        "Sector": "Technology",
        "Industry": "Software\u2014Application",
        "Adj Slope 90": 1215.3585181590079,
        "Adj Slope 125": 692.8880254617175,
        "Adj Slope 250": 147.4680043197931
    },
    {
        "Ticker": "ICVX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1127.3553067284417,
        "Adj Slope 125": 599.8262191253331,
        "Adj Slope 250": 65.61238624572995
    },
    {
        "Ticker": "BCLI",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1077.3440942829086,
        "Adj Slope 125": -0.7726492558815056,
        "Adj Slope 250": -66.70690187479677
    },
    {
        "Ticker": "TWST",
        "Sector": "Healthcare",
        "Industry": "Diagnostics & Research",
        "Adj Slope 90": 1074.472996993277,
        "Adj Slope 125": 394.63047379621213,
        "Adj Slope 250": 118.5889874121515
    },
    {
        "Ticker": "VRM",
        "Sector": "Consumer Cyclical",
        "Industry": "Auto & Truck Dealerships",
        "Adj Slope 90": 1063.8978436609405,
        "Adj Slope 125": 6.141784260875627,
        "Adj Slope 250": 0.028819715923397753
    },
    {
        "Ticker": "LXRX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 1038.7759356492022,
        "Adj Slope 125": 184.322986097473,
        "Adj Slope 250": -12.600083279235431
    },
    {
        "Ticker": "SGHT",
        "Sector": "Healthcare",
        "Industry": "Medical Devices",
        "Adj Slope 90": 1014.1435729411218,
        "Adj Slope 125": 13.479971344800804,
        "Adj Slope 250": -38.60992929524001
    },
    {
        "Ticker": "RXRX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 989.8535253388432,
        "Adj Slope 125": 130.68111446670386,
        "Adj Slope 250": 8.353254648055115
    },
    {
        "Ticker": "OCGN",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 967.9994482530165,
        "Adj Slope 125": 178.17047572276817,
        "Adj Slope 250": -5.379629360504421
    },
    {
        "Ticker": "VTSI",
        "Sector": "Industrials",
        "Industry": "Aerospace & Defense",
        "Adj Slope 90": 964.3911743581164,
        "Adj Slope 125": 436.8987035822368,
        "Adj Slope 250": 42.46865154738791
    },
    {
        "Ticker": "TGAN",
        "Sector": "Technology",
        "Industry": "Semiconductor Equipment & Materials",
        "Adj Slope 90": 954.5173242547021,
        "Adj Slope 125": 548.7830329400629,
        "Adj Slope 250": 0.026101210604619205
    },
    {
        "Ticker": "PBYI",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 895.1635047996408,
        "Adj Slope 125": 466.86085407220344,
        "Adj Slope 250": 42.935147757311185
    },
    {
        "Ticker": "HOV",
        "Sector": "Consumer Cyclical",
        "Industry": "Residential Construction",
        "Adj Slope 90": 888.4912480249078,
        "Adj Slope 125": 181.8861139623246,
        "Adj Slope 250": 77.63932775078092
    },
    {
        "Ticker": "DSKE",
        "Sector": "Industrials",
        "Industry": "Trucking",
        "Adj Slope 90": 879.9475752550538,
        "Adj Slope 125": 195.92600627755527,
        "Adj Slope 250": -0.2627781874986799
    },
    {
        "Ticker": "PXLW",
        "Sector": "Technology",
        "Industry": "Semiconductors",
        "Adj Slope 90": 843.7299040432965,
        "Adj Slope 125": 181.57299335036853,
        "Adj Slope 250": 0.01199394569917863
    },
    {
        "Ticker": "ARCT",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 836.0295054548607,
        "Adj Slope 125": 77.28852087467985,
        "Adj Slope 250": 7.7771456938137264
    },
    {
        "Ticker": "ALXO",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 815.5681477261905,
        "Adj Slope 125": 1126.2706384229139,
        "Adj Slope 250": 125.19959708552348
    },
    {
        "Ticker": "GBIO",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 814.0535837479433,
        "Adj Slope 125": -6.563422017214962,
        "Adj Slope 250": -38.97386409203566
    },
    {
        "Ticker": "KRTX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 807.2118874057862,
        "Adj Slope 125": 370.58993899262475,
        "Adj Slope 250": 12.480887868788622
    },
    {
        "Ticker": "PLBY",
        "Sector": "Consumer Cyclical",
        "Industry": "Leisure",
        "Adj Slope 90": 799.894217185754,
        "Adj Slope 125": 25.960123717257776,
        "Adj Slope 250": -29.918539950570082
    },
    {
        "Ticker": "CMAX",
        "Sector": "Healthcare",
        "Industry": "Health Information Services",
        "Adj Slope 90": 794.0878290820549,
        "Adj Slope 125": 0.00036871722696929325,
        "Adj Slope 250": -9.299597946876204
    },
    {
        "Ticker": "TRUL.CN",
        "Sector": "Healthcare",
        "Industry": "Drug Manufacturers\u2014Specialty & Generic",
        "Adj Slope 90": 789.9678243725192,
        "Adj Slope 125": 69.34648447321186,
        "Adj Slope 250": 16.973461625328333
    },
    {
        "Ticker": "GTHX",
        "Sector": "Healthcare",
        "Industry": "Biotechnology",
        "Adj Slope 90": 779.6690117904172,
        "Adj Slope 125": 745.3791168990315,
        "Adj Slope 250": -0.019168378300600704
    }
])

const sortColumn = (key: string) => {
    Object.keys(data[0]).forEach(header => {
        if (header != key) {
            var heading = document.querySelector(`.header-${header.toLowerCase().replace(/ /g, '-')}`)
            if (heading?.classList.contains('desc')) {
                heading?.classList.remove('desc')
            }
            if (heading?.classList.contains('asc')) {
                heading?.classList.remove('asc')
            }
        }

    })
    var column = document.querySelector(`.header-${key.toLowerCase().replace(/ /g, '-')}`)
    if (column?.classList.contains('asc')) {
        column.classList.replace('asc', 'desc')
        data.sort((a, b): number => {
            if (a[key as keyof {}] > b[key as keyof {}]) return -1
            else return 0
        })
        return
    } else if (column?.classList.contains('desc')) {
        column?.classList.replace('desc', 'asc')
    } else column?.classList.add('asc')
    data.sort((a, b): number => {
        if (a[key as keyof {}] < b[key as keyof {}]) return -1
        else return 0
    })
    returnProp(key)
}

const returnProp = (key: string): Component => {
    var column = document.querySelector(`.header-${key.toLowerCase().replace(/ /g, '-')}`)
    if (column?.classList.contains('desc'))
        return LibDescIcon
    else if (column?.classList.contains('asc'))
        return LibAscIcon
    else return LibUnsortedIcon
}
</script>

<template>
    <!-- Header Must be a Button Component -->
    <div class="table-container">
        <table class="table-layout">
            <tr>
                <th v-for="key in Object.keys(data![0])" :class="'header-' + key.toLowerCase().replace(/ /g, '-')">
                    <LibButton @click="sortColumn(key)" size="small" area="seemless" bgColor="#00000000"
                        borderStyle="borderless" :icon="returnProp(key)">{{ key }}</LibButton>
                </th>
                <th v-if="actions && actions?.length > 0" v-for="action in actions">
                    <LibButton v-if="action.label != null" size="small" area="seemless" bgColor="#00000000"
                        borderStyle="borderless">{{ action.label }}</LibButton>
                </th>
            </tr>
            <tr v-for="(values, index) in data!.slice(0, 10)" :key="index">
                <td v-for="value in Object.values(values)"
                    :class="{ 'header-column': Object.values(values).indexOf(value) == 0 }">
                    <div>{{ value }}</div>
                </td>
                <td class="cell-data-center" v-if="actions && actions?.length > 0" v-for="action in actions">
                    <div>
                        <LibButton @click="$emit('actionClick', values)" :icon="action.icon" size="small" bgColor="none" borderColor=""
                        area="seemless" />
                    </div>
                </td>
            </tr>
        </table>
    </div>


</template>

<style scoped>
.table-container {
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    max-width: 1000px;
    overflow: scroll;
    width: 100%;
}

.table-layout {
    background-color: #1b2123;
    border-spacing: 0;
    overflow: scroll;
    font-size: 14px;
    width: 100%;
}

.table-layout :deep(th) {
    border-bottom: 1px solid #4f4f4f;
    margin: 0 auto;
    min-width: max-content;
}

.table-layout :deep(td) {
    overflow: hidden;
}

.table-layout :deep(td:not(.cell-data-center)) div {
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 150px;
    overflow: hidden;
    padding: 6px;
}

.cell-data-center div {
    display: flex;
    justify-content: center;
}
</style>