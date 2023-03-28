const cron = require('node-cron');
const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000 // utiliser le port spécifié dans les variables d'environnement ou le port 5000 par défaut
const today = new Date();
const day = today.getDate().toString().padStart(2, '0');
const month = (today.getMonth() + 1).toString().padStart(2, '0');
const year = today.getFullYear().toString();
const todayString = `${day}/${month}/${year}`;
console.log(todayString);
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`)
})


const certificats=[
  {
   "Temps restant": "15j",
   "Nom": "VIA SANTE Exchange Delegation Federation",
   "Date d'expiration": "2023-04-13"
  },
  {
   "Temps restant": "20j",
   "Nom": "FRANCE BREVETS Microsoft Exchange",
   "Date d'expiration": "2023-04-18"
  },
  {
   "Temps restant": "31j",
   "Nom": "mail.procie.com",
   "Date d'expiration": "2023-04-29"
  },
  {
   "Temps restant": "32j",
   "Nom": "mail-ruei-1.neocles.fr",
   "Date d'expiration": "2023-04-30"
  },
  {
   "Temps restant": "32j",
   "Nom": "*.neocles.com",
   "Date d'expiration": "2023-04-30"
  },
  {
   "Temps restant": "32j",
   "Nom": "GIMC ENVOLUDIA Citrix - *.neocles.com",
   "Date d'expiration": "2023-04-30"
  },
  {
   "Temps restant": "32j",
   "Nom": "CCI FINANCE Citrix - *.neocles.com",
   "Date d'expiration": "2023-04-30"
  },
  {
   "Temps restant": "44j",
   "Nom": "SAFT *.alcad.com",
   "Date d'expiration": "2023-05-12"
  },
  {
   "Temps restant": "51j",
   "Nom": "webmail.viasante.cloud-INT",
   "Date d'expiration": "2023-05-19"
  },
  {
   "Temps restant": "54j",
   "Nom": "*.infra.lucas.fr",
   "Date d'expiration": "2023-05-22"
  },
  {
   "Temps restant": "67j",
   "Nom": "CFR Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-06-04"
  },
  {
   "Temps restant": "69j",
   "Nom": "webmail.adapei65.fr",
   "Date d'expiration": "2023-06-06"
  },
  {
   "Temps restant": "70j",
   "Nom": "Citrix - storefront.regis-location.int",
   "Date d'expiration": "2023-06-07"
  },
  {
   "Temps restant": "80j",
   "Nom": "Citrix - *.eri.local",
   "Date d'expiration": "2023-06-17"
  },
  {
   "Temps restant": "84j",
   "Nom": "Citrix - storefront.lixir.entreprise.dom",
   "Date d'expiration": "2023-06-21"
  },
  {
   "Temps restant": "84j",
   "Nom": "WGSLIC02.lixir.entreprise.dom",
   "Date d'expiration": "2023-06-21"
  },
  {
   "Temps restant": "87j",
   "Nom": "nefvvc002.osm01.neofed.local",
   "Date d'expiration": "2023-06-24"
  },
  {
   "Temps restant": "95j",
   "Nom": "webmail.viasante.fr",
   "Date d'expiration": "2023-07-02"
  },
  {
   "Temps restant": "95j",
   "Nom": "*.acpei.pro",
   "Date d'expiration": "2023-07-02"
  },
  {
   "Temps restant": "99j",
   "Nom": "SAGESS Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2023-07-06"
  },
  {
   "Temps restant": "103j",
   "Nom": "next.envoludia.org",
   "Date d'expiration": "2023-07-10"
  },
  {
   "Temps restant": "109j",
   "Nom": "NEO Citrix - Test - STF PKI",
   "Date d'expiration": "2023-07-16"
  },
  {
   "Temps restant": "112j",
   "Nom": "email.banquechaabi.fr-INT",
   "Date d'expiration": "2023-07-19"
  },
  {
   "Temps restant": "112j",
   "Nom": "NEOFED protection-kp",
   "Date d'expiration": "2023-07-19"
  },
  {
   "Temps restant": "112j",
   "Nom": "CHAABI Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-07-19"
  },
  {
   "Temps restant": "116j",
   "Nom": "Citrix - storefront.adapei65.local",
   "Date d'expiration": "2023-07-23"
  },
  {
   "Temps restant": "121j",
   "Nom": "*.videlio.com",
   "Date d'expiration": "2023-07-28"
  },
  {
   "Temps restant": "122j",
   "Nom": "bmcdiscovery.neofed.local",
   "Date d'expiration": "2023-07-29"
  },
  {
   "Temps restant": "125j",
   "Nom": "SAGESS Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-08-01"
  },
  {
   "Temps restant": "125j",
   "Nom": "SAGESS Microsoft Exchange",
   "Date d'expiration": "2023-08-01"
  },
  {
   "Temps restant": "126j",
   "Nom": "mail.sagess.fr-INT",
   "Date d'expiration": "2023-08-02"
  },
  {
   "Temps restant": "130j",
   "Nom": "NEOCLES NEOMES003",
   "Date d'expiration": "2023-08-06"
  },
  {
   "Temps restant": "131j",
   "Nom": "*.sagess.fr",
   "Date d'expiration": "2023-08-07"
  },
  {
   "Temps restant": "131j",
   "Nom": "Citrix - *.sagess.fr",
   "Date d'expiration": "2023-08-07"
  },
  {
   "Temps restant": "131j",
   "Nom": "NEOCLES NEOMES004",
   "Date d'expiration": "2023-08-07"
  },
  {
   "Temps restant": "133j",
   "Nom": "mail.bredinprat.com-INT",
   "Date d'expiration": "2023-08-09"
  },
  {
   "Temps restant": "133j",
   "Nom": "nefrub001.neofed.local",
   "Date d'expiration": "2023-08-09"
  },
  {
   "Temps restant": "133j",
   "Nom": "Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2023-08-09"
  },
  {
   "Temps restant": "137j",
   "Nom": "*.simt.fr",
   "Date d'expiration": "2023-08-13"
  },
  {
   "Temps restant": "144j",
   "Nom": "Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-08-20"
  },
  {
   "Temps restant": "147j",
   "Nom": "webmail.adapei65.fr-INT",
   "Date d'expiration": "2023-08-23"
  },
  {
   "Temps restant": "154j",
   "Nom": "*.buyin.pro",
   "Date d'expiration": "2023-08-30"
  },
  {
   "Temps restant": "163j",
   "Nom": "*.eri.fr",
   "Date d'expiration": "2023-09-08"
  },
  {
   "Temps restant": "164j",
   "Nom": "Citrix citrix.neocorp.intranet.fr",
   "Date d'expiration": "2023-09-09"
  },
  {
   "Temps restant": "165j",
   "Nom": "*.uniprotect.fr",
   "Date d'expiration": "2023-09-10"
  },
  {
   "Temps restant": "168j",
   "Nom": "CAPEB CAPMES001.CAPEB.LOCAL",
   "Date d'expiration": "2023-09-13"
  },
  {
   "Temps restant": "169j",
   "Nom": "T SIM Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2023-09-14"
  },
  {
   "Temps restant": "181j",
   "Nom": "simsky001.simt.corp",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "mail.simt.fr-INT",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "mail.ad.int-INT",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "Citrix - workspace.corp.simt.fr",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "CFR DC1-PX-HTTP",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "CFR DC2-PX-HTTP",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "Citrix - storectx.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "ad-CFRADC003-CA",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "CFR Multiple renouvellement de certificats",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "Citrix - director.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "smtp1-esa-in.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "smtp2-esa-in.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "CFRADC001.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "CFRADC002.ad.int",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "181j",
   "Nom": "T SIM mail.simt.fr",
   "Date d'expiration": "2023-09-26"
  },
  {
   "Temps restant": "183j",
   "Nom": "mail.stimtechnibat.fr",
   "Date d'expiration": "2023-09-28"
  },
  {
   "Temps restant": "184j",
   "Nom": "vpn.bredinprat.com",
   "Date d'expiration": "2023-09-29"
  },
  {
   "Temps restant": "189j",
   "Nom": "FRANCE BREVETS webmail.francebrevets.com",
   "Date d'expiration": "2023-10-04"
  },
  {
   "Temps restant": "189j",
   "Nom": "NEO Citrix - Test - store 1909",
   "Date d'expiration": "2023-10-04"
  },
  {
   "Temps restant": "190j",
   "Nom": "nefvvc005.neofed.local",
   "Date d'expiration": "2023-10-05"
  },
  {
   "Temps restant": "191j",
   "Nom": "FONDINVEST Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-10-06"
  },
  {
   "Temps restant": "192j",
   "Nom": "nefvvc006.osm02.neofed.local",
   "Date d'expiration": "2023-10-07"
  },
  {
   "Temps restant": "192j",
   "Nom": "nefvvc007.osm03.neofed.local",
   "Date d'expiration": "2023-10-07"
  },
  {
   "Temps restant": "194j",
   "Nom": "SD INGENIERIE SDIMES001.SDINGENIERIE.LOCAL",
   "Date d'expiration": "2023-10-09"
  },
  {
   "Temps restant": "195j",
   "Nom": "SIMT Microsoft Exchange",
   "Date d'expiration": "2023-10-10"
  },
  {
   "Temps restant": "196j",
   "Nom": "RDS - rds.videlio.local",
   "Date d'expiration": "2023-10-11"
  },
  {
   "Temps restant": "196j",
   "Nom": "ADAPEI65 Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2023-10-11"
  },
  {
   "Temps restant": "198j",
   "Nom": "Citrix - partcitrix.viasante.net",
   "Date d'expiration": "2023-10-13"
  },
  {
   "Temps restant": "199j",
   "Nom": "RDS - *.videlio.local",
   "Date d'expiration": "2023-10-14"
  },
  {
   "Temps restant": "199j",
   "Nom": "UNIPROTECT Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-10-14"
  },
  {
   "Temps restant": "201j",
   "Nom": "mail.sd-ingenierie.fr",
   "Date d'expiration": "2023-10-16"
  },
  {
   "Temps restant": "202j",
   "Nom": "bureau.silabel.fr",
   "Date d'expiration": "2023-10-17"
  },
  {
   "Temps restant": "204j",
   "Nom": "EVIA FOODS Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2023-10-19"
  },
  {
   "Temps restant": "206j",
   "Nom": "mail.capeb-vendee.fr",
   "Date d'expiration": "2023-10-21"
  },
  {
   "Temps restant": "206j",
   "Nom": "mail.eviafoods.com",
   "Date d'expiration": "2023-10-21"
  },
  {
   "Temps restant": "206j",
   "Nom": "mail.fondinvest.com",
   "Date d'expiration": "2023-10-21"
  },
  {
   "Temps restant": "210j",
   "Nom": "email.banquechaabi.fr",
   "Date d'expiration": "2023-10-25"
  },
  {
   "Temps restant": "219j",
   "Nom": "mail.uniprotect.fr",
   "Date d'expiration": "2023-11-03"
  },
  {
   "Temps restant": "224j",
   "Nom": "SAGESS AzureRunAsCertificate",
   "Date d'expiration": "2023-11-08"
  },
  {
   "Temps restant": "244j",
   "Nom": "webmail.bredinprat.com",
   "Date d'expiration": "2023-11-28"
  },
  {
   "Temps restant": "246j",
   "Nom": "ged.resah.fr",
   "Date d'expiration": "2023-11-30"
  },
  {
   "Temps restant": "247j",
   "Nom": "*.adapei65.fr",
   "Date d'expiration": "2023-12-01"
  },
  {
   "Temps restant": "255j",
   "Nom": "Citrix - *.gfm-mut.com",
   "Date d'expiration": "2023-12-09"
  },
  {
   "Temps restant": "263j",
   "Nom": "VIS Citrix - app-citrix.viasante.cloud",
   "Date d'expiration": "2023-12-17"
  },
  {
   "Temps restant": "263j",
   "Nom": "mail.bredinprat.com",
   "Date d'expiration": "2023-12-17"
  },
  {
   "Temps restant": "263j",
   "Nom": "VIS Citrix Director - app-citrixdirector",
   "Date d'expiration": "2023-12-17"
  },
  {
   "Temps restant": "263j",
   "Nom": "vs-lic001.viasante.cloud",
   "Date d'expiration": "2023-12-17"
  },
  {
   "Temps restant": "270j",
   "Nom": "*.banquerichelieu.com",
   "Date d'expiration": "2023-12-24"
  },
  {
   "Temps restant": "276j",
   "Nom": "francemutuelle.fr",
   "Date d'expiration": "2023-12-30"
  },
  {
   "Temps restant": "284j",
   "Nom": "NEOCLES NEOMES003.neocorp.intranet.fr",
   "Date d'expiration": "2024-01-07"
  },
  {
   "Temps restant": "285j",
   "Nom": "*.proudreed.com",
   "Date d'expiration": "2024-01-08"
  },
  {
   "Temps restant": "285j",
   "Nom": "NEOCLES NEOMES004.neocorp.intranet.fr",
   "Date d'expiration": "2024-01-08"
  },
  {
   "Temps restant": "288j",
   "Nom": "cashpooler.ccifinance.fr",
   "Date d'expiration": "2024-01-11"
  },
  {
   "Temps restant": "307j",
   "Nom": "rec-cashpooler.ccifinance.fr",
   "Date d'expiration": "2024-01-30"
  },
  {
   "Temps restant": "309j",
   "Nom": "cloud-tms.valeo.com",
   "Date d'expiration": "2024-02-01"
  },
  {
   "Temps restant": "309j",
   "Nom": "mail.procie.com-INT",
   "Date d'expiration": "2024-02-01"
  },
  {
   "Temps restant": "309j",
   "Nom": "cloud-tms-ext.valeo.com",
   "Date d'expiration": "2024-02-01"
  },
  {
   "Temps restant": "310j",
   "Nom": "*.sleever.com",
   "Date d'expiration": "2024-02-02"
  },
  {
   "Temps restant": "310j",
   "Nom": "Citrix - *.sleever.com",
   "Date d'expiration": "2024-02-02"
  },
  {
   "Temps restant": "310j",
   "Nom": "RDS - syrbrk001.bureautique.intra",
   "Date d'expiration": "2024-02-02"
  },
  {
   "Temps restant": "315j",
   "Nom": "AD10-SLEEVER.sleever.local",
   "Date d'expiration": "2024-02-07"
  },
  {
   "Temps restant": "319j",
   "Nom": "*.cpssp.fr",
   "Date d'expiration": "2024-02-11"
  },
  {
   "Temps restant": "323j",
   "Nom": "mail.neocles.fr-INT",
   "Date d'expiration": "2024-02-15"
  },
  {
   "Temps restant": "323j",
   "Nom": "neosky002.neocorp.intranet.fr",
   "Date d'expiration": "2024-02-15"
  },
  {
   "Temps restant": "323j",
   "Nom": "neowac001.neocorp.intranet.fr",
   "Date d'expiration": "2024-02-15"
  },
  {
   "Temps restant": "324j",
   "Nom": "RDS - *.carced.local",
   "Date d'expiration": "2024-02-16"
  },
  {
   "Temps restant": "326j",
   "Nom": "*.metaldeploye.com",
   "Date d'expiration": "2024-02-18"
  },
  {
   "Temps restant": "329j",
   "Nom": "*.adgessa.fr",
   "Date d'expiration": "2024-02-21"
  },
  {
   "Temps restant": "331j",
   "Nom": "GFMMES004.gfm-mut.com",
   "Date d'expiration": "2024-02-23"
  },
  {
   "Temps restant": "332j",
   "Nom": "a65oct001",
   "Date d'expiration": "2024-02-24"
  },
  {
   "Temps restant": "335j",
   "Nom": "VS-SQLHAM100.VIASANTE.CLOUD",
   "Date d'expiration": "2024-02-27"
  },
  {
   "Temps restant": "338j",
   "Nom": "BIGARD webmail.bigard.fr",
   "Date d'expiration": "2024-03-01"
  },
  {
   "Temps restant": "339j",
   "Nom": "mail.nidek.fr-INT",
   "Date d'expiration": "2024-03-02"
  },
  {
   "Temps restant": "342j",
   "Nom": "mail.nidek.fr",
   "Date d'expiration": "2024-03-05"
  },
  {
   "Temps restant": "345j",
   "Nom": "mail.francemutuelle.fr-INT",
   "Date d'expiration": "2024-03-08"
  },
  {
   "Temps restant": "352j",
   "Nom": "citrix.bredinprat.com",
   "Date d'expiration": "2024-03-15"
  },
  {
   "Temps restant": "360j",
   "Nom": "echanges.ccifinance.fr",
   "Date d'expiration": "2024-03-23"
  },
  {
   "Temps restant": "370j",
   "Nom": "*.uvet.fr",
   "Date d'expiration": "2024-04-02"
  },
  {
   "Temps restant": "375j",
   "Nom": "mail-aub-1.neocles.fr",
   "Date d'expiration": "2024-04-07"
  },
  {
   "Temps restant": "376j",
   "Nom": "tms.ccifinance.fr",
   "Date d'expiration": "2024-04-08"
  },
  {
   "Temps restant": "381j",
   "Nom": "sts.lixir.fr",
   "Date d'expiration": "2024-04-13"
  },
  {
   "Temps restant": "387j",
   "Nom": "Citrix - storefront.stim.local",
   "Date d'expiration": "2024-04-19"
  },
  {
   "Temps restant": "440j",
   "Nom": "FRANCE BREVETS Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2024-06-11"
  },
  {
   "Temps restant": "465j",
   "Nom": "mail.stimtechnibat.fr-INT",
   "Date d'expiration": "2024-07-06"
  },
  {
   "Temps restant": "483j",
   "Nom": "FRANCE BREVETS Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2024-07-24"
  },
  {
   "Temps restant": "490j",
   "Nom": "CAPEB Citrix - storefront",
   "Date d'expiration": "2024-07-31"
  },
  {
   "Temps restant": "494j",
   "Nom": "Citrix - storefront.ocspecial.local",
   "Date d'expiration": "2024-08-04"
  },
  {
   "Temps restant": "498j",
   "Nom": "BREDIN PRAT BRPMES001.bredinprat.com",
   "Date d'expiration": "2024-08-08"
  },
  {
   "Temps restant": "514j",
   "Nom": "mail.sd-ingenierie.fr-INT",
   "Date d'expiration": "2024-08-24"
  },
  {
   "Temps restant": "515j",
   "Nom": "mail.uniprotect.fr-INT",
   "Date d'expiration": "2024-08-25"
  },
  {
   "Temps restant": "516j",
   "Nom": "nefnoc002.neofed.local",
   "Date d'expiration": "2024-08-26"
  },
  {
   "Temps restant": "519j",
   "Nom": "UNIPROTECT Citrix - storefront",
   "Date d'expiration": "2024-08-29"
  },
  {
   "Temps restant": "519j",
   "Nom": "INTERCARGO Citrix - Storefront",
   "Date d'expiration": "2024-08-29"
  },
  {
   "Temps restant": "525j",
   "Nom": "mail.eviafoods.com-INT",
   "Date d'expiration": "2024-09-04"
  },
  {
   "Temps restant": "528j",
   "Nom": "mail.capeb-vendee.fr-INT",
   "Date d'expiration": "2024-09-07"
  },
  {
   "Temps restant": "528j",
   "Nom": "mail.fondinvest.com-INT",
   "Date d'expiration": "2024-09-07"
  },
  {
   "Temps restant": "539j",
   "Nom": "TECHNIC DSG Citrix - storefront",
   "Date d'expiration": "2024-09-18"
  },
  {
   "Temps restant": "540j",
   "Nom": "*.neofed.local",
   "Date d'expiration": "2024-09-19"
  },
  {
   "Temps restant": "541j",
   "Nom": "FONDINVEST Citrix - storefront",
   "Date d'expiration": "2024-09-20"
  },
  {
   "Temps restant": "547j",
   "Nom": "SD INGENIERIE Citrix - storefront.",
   "Date d'expiration": "2024-09-26"
  },
  {
   "Temps restant": "554j",
   "Nom": "CFR Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2024-10-03"
  },
  {
   "Temps restant": "560j",
   "Nom": "GESTIPRO Citrix - Storefront",
   "Date d'expiration": "2024-10-09"
  },
  {
   "Temps restant": "560j",
   "Nom": "EVIA FOODS Citrix - storefront",
   "Date d'expiration": "2024-10-09"
  },
  {
   "Temps restant": "569j",
   "Nom": "Citrix storefront.neocorp.intranet.fr",
   "Date d'expiration": "2024-10-18"
  },
  {
   "Temps restant": "574j",
   "Nom": "Citrix - ddslogistics-DDSADC01-CA",
   "Date d'expiration": "2024-10-23"
  },
  {
   "Temps restant": "581j",
   "Nom": "CFRMES002",
   "Date d'expiration": "2024-10-30"
  },
  {
   "Temps restant": "582j",
   "Nom": "Citrix - storefront.proudreed.local",
   "Date d'expiration": "2024-10-31"
  },
  {
   "Temps restant": "596j",
   "Nom": "mail.eri.fr-INT",
   "Date d'expiration": "2024-11-14"
  },
  {
   "Temps restant": "607j",
   "Nom": "CFRPKI001-CA",
   "Date d'expiration": "2024-11-25"
  },
  {
   "Temps restant": "619j",
   "Nom": "CFRMES001",
   "Date d'expiration": "2024-12-07"
  },
  {
   "Temps restant": "647j",
   "Nom": "IZARET Citrix - workspace",
   "Date d'expiration": "2025-01-04"
  },
  {
   "Temps restant": "658j",
   "Nom": "slemes001.sleever.local",
   "Date d'expiration": "2025-01-15"
  },
  {
   "Temps restant": "659j",
   "Nom": "nefnsxmgr001.osm03.neofed.local",
   "Date d'expiration": "2025-01-16"
  },
  {
   "Temps restant": "673j",
   "Nom": "neosky001.neocorp.intranet.fr",
   "Date d'expiration": "2025-01-30"
  },
  {
   "Temps restant": "687j",
   "Nom": "BIGARD webmail.bigard.fr_int_022023",
   "Date d'expiration": "2025-02-13"
  },
  {
   "Temps restant": "693j",
   "Nom": "BIGARD Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2025-02-19"
  },
  {
   "Temps restant": "706j",
   "Nom": "PROCIE PRCMES001",
   "Date d'expiration": "2025-03-04"
  },
  {
   "Temps restant": "715j",
   "Nom": "ADFS Encryption - Sts.lixir.fr",
   "Date d'expiration": "2025-03-13"
  },
  {
   "Temps restant": "715j",
   "Nom": "ADFS Signing - Sts.lixir.fr",
   "Date d'expiration": "2025-03-13"
  },
  {
   "Temps restant": "762j",
   "Nom": "SLEEVER Microsoft Exchange",
   "Date d'expiration": "2025-04-29"
  },
  {
   "Temps restant": "762j",
   "Nom": "SLEEVER Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2025-04-29"
  },
  {
   "Temps restant": "786j",
   "Nom": "SLEEVER WMSVC",
   "Date d'expiration": "2025-05-23"
  },
  {
   "Temps restant": "991j",
   "Nom": "GFM Microsoft Exchange",
   "Date d'expiration": "2025-12-14"
  },
  {
   "Temps restant": "991j",
   "Nom": "GFM Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2025-12-14"
  },
  {
   "Temps restant": "1065j",
   "Nom": "CHAABI fwfg-neocles01.banquechaabi.local",
   "Date d'expiration": "2026-02-26"
  },
  {
   "Temps restant": "1210j",
   "Nom": "SLEEVER Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2026-07-21"
  },
  {
   "Temps restant": "1410j",
   "Nom": "BIGARD Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2027-02-06"
  },
  {
   "Temps restant": "1412j",
   "Nom": "SLEEVER SMEX",
   "Date d'expiration": "2027-02-08"
  },
  {
   "Temps restant": "1413j",
   "Nom": "VIA SANTE Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2027-02-09"
  },
  {
   "Temps restant": "1418j",
   "Nom": "VIA SANTE Microsoft Exchange",
   "Date d'expiration": "2027-02-14"
  },
  {
   "Temps restant": "1517j",
   "Nom": "BIGARD Microsoft Exchange",
   "Date d'expiration": "2027-05-24"
  },
  {
   "Temps restant": "1566j",
   "Nom": "CHAABI Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2027-07-12"
  },
  {
   "Temps restant": "1581j",
   "Nom": "CHAABI Microsoft Exchange",
   "Date d'expiration": "2027-07-27"
  },
  {
   "Temps restant": "1716j",
   "Nom": "CFRMES001.AD.INT",
   "Date d'expiration": "2027-12-09"
  },
  {
   "Temps restant": "1716j",
   "Nom": "CFRMES002.AD.INT",
   "Date d'expiration": "2027-12-09"
  },
  {
   "Temps restant": "1716j",
   "Nom": "SIMT Trend Micro ScanMail for Microsoft Exchange",
   "Date d'expiration": "2027-12-09"
  },
  {
   "Temps restant": "1749j",
   "Nom": "PROCIE Microsoft Exchange Server Auth Certificate",
   "Date d'expiration": "2028-01-11"
  },
  {
   "Temps restant": "1749j",
   "Nom": "PROCIE PRCMES002",
   "Date d'expiration": "2028-01-11"
  },
  {
   "Temps restant": "1749j",
   "Nom": "PROCIE Microsoft Exchange",
   "Date d'expiration": "2028-01-11"
  },
  {
   "Temps restant": "1782j",
   "Nom": "PROCIE PRCMES002.thuillier.procie.com",
   "Date d'expiration": "2028-02-13"
  },
  {
   "Temps restant": "1782j",
   "Nom": "PROCIE PRCMES001.thuillier.procie.com",
   "Date d'expiration": "2028-02-13"
  },
  {
   "Temps restant": "2403j",
   "Nom": "CFR WMSvc-SHA2-CFRMES001",
   "Date d'expiration": "2029-10-26"
  },
  {
   "Temps restant": "2403j",
   "Nom": "CFR WMSvc-SHA2-CFRMES002",
   "Date d'expiration": "2029-10-26"
  },
  {
   "Temps restant": "2405j",
   "Nom": "AUB-FWL-CFR-ADM_CA2",
   "Date d'expiration": "2029-10-28"
  },
  {
   "Temps restant": "3200j",
   "Nom": "RDS - *.ecf-group.local",
   "Date d'expiration": "2032-01-01"
  },
  {
   "Temps restant": "4196j",
   "Nom": "PRC Citrix - Citrix",
   "Date d'expiration": "2034-09-23"
  }
 ]
const domaines=[
  {
  "Temps restant": "217j",
  "Nom": "proudreed.com	",
  "Date d'expiration": "2023-10-30"
  },
  {
  "Temps restant": "320j",
  "Nom": "adapei65.fr",
  "Date d'expiration": "2024-02-10"
  },
  {
  "Temps restant": "680j",
  "Nom": "bredinprat.com",
  "Date d'expiration": "2025-02-04"
  },
  {
    "Temps restant": "761j",
    "Nom": "fondinvest.com",
    "Date d'expiration": "2025-04-26"
    },
  ];
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: "cert.helpdesk@outlook.com",
      pass: process.env.OUTLOOK_PWD,
    }
  });
  
  function sendEmail(certificats, domaines) {
    let expiringCerts = '';
    let count = 0;
    let certsToDisplay = certificats.filter(cert => {
      const today = new Date();
      const expirationDate = new Date(cert['Date d\'expiration']);
      const timeDiff = expirationDate.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)-1);
      cert['Temps restant'] = daysLeft;
      return daysLeft <= 15;
    });
    if (certsToDisplay.length === 0) {
      expiringCerts += `<tr style="background-color: white; color: black;"> <td style="border: 1px solid black; text-align: center; color: green;"> RAS</td> <td style="border: 1px solid black; text-align: center; color: green;">RAS</td> <td style="border: 1px solid black; text-align: center; color: green;"> RAS</td> </tr>`;
    } else {
      certsToDisplay.forEach((cert, index) => {
        const daysLeft = cert['Temps restant'];
        expiringCerts += `<tr style="background-color: ${index % 2 === 0 ? 'white' : 'lightgrey'}; color: black;"> <td style="border: 1px solid black; text-align: center;">${cert['Nom']}</td> <td style="border: 1px solid black; text-align: center;">${cert['Date d\'expiration']}</td> <td style="border: 1px solid black; text-align: center;">${daysLeft}j</td> </tr>`;
        count++;
      });
    }
    
    let expiringDomains = '';
    let domainCount = 0;
    let domainsToDisplay = domaines.filter(domain => {
      const today = new Date();
      const expirationDate = new Date(domain['Date d\'expiration']);
      const timeDiff = expirationDate.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)-1);
      domain['Temps restant'] = daysLeft;
      return daysLeft <= 15;
    });
    if (domainsToDisplay.length === 0) {
      expiringDomains += `<tr style="background-color: white; color: black;"> <td style="border: 1px solid black; text-align: center; color: green;"> RAS</td> <td style="border: 1px solid black; text-align: center; color: green;">RAS</td> <td style="border: 1px solid black; text-align: center; color: green;"> RAS</td> </tr>`;
    } else {
      domainsToDisplay.forEach((domain, index) => {
        const daysLeft = domain['Temps restant'];
        expiringDomains += `<tr style="background-color: ${index % 2 === 0 ? 'white' : 'lightgrey'}; color: black;"> <td style="border: 1px solid black; text-align: center;">${domain['Nom']}</td> <td style="border: 1px solid black; text-align: center;">${domain['Date d\'expiration']}</td> <td style="border: 1px solid black; text-align: center;">${daysLeft}j</td> </tr>`;
        domainCount++;
      });
    }
    const message = `<html><head> 
    <style> 
      body { 
        font-family: "Times New Roman", Times, serif; 
      } 
    </style> 
  </head> 
    <body>
      <p>Bonjour,</p>
      <p>Ci-dessous les certificats et domaines qui seront expirés dans les prochains jours :</p>
      <h3 style="border: 1px solid white; padding: 5px;">Certificats qui expirent bientôt (${count}) :</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background-color: black; color: #FF6347;border: 1px solid white;">
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Nom</th>
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Date d'expiration</th>
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Temps restant</th>
          </tr>
        </thead>
        <tbody>
          ${expiringCerts}
        </tbody>
      </table>
      <br>
      <h3 style="border: 1px solid white; padding: 5px;">Domaines qui expirent bientôt (${domainCount}) :</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr style="background-color: black; color: #FF6347;">
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Nom</th>
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Date d'expiration</th>
            <th style="border: 1px solid white; text-align: center; padding: 5px;">Temps restant</th>
          </tr>
        </thead>
        <tbody>
          ${expiringDomains}
        </tbody>
      </table>
      <div style="margin-top:10px; font-family: Arial, Times, serif!important;">
      <div>
        <div style="color: blue; font-weight: bold;">Support Flexible Workspace Services</div>
        <div style="color: orange;">Orange Cloud for Business</div>
        <div style="color: blue;">helpdesk@neocles.com</div>
        <div>Orange Business Services SA                                    </div>
        <div style="color: blue;">Immeuble Terra Nova II – 15 rue Henri Rol-Tanguy 93558 Montreuil</div>
        <div style="color: orange;">
          <a href="https://www.orange-business.com/fr/solutions/cloud-computing" style="color: orange; text-decoration: none;">https://www.orange-business.com/fr/solutions/cloud-computing</a>
        </div>
      </div>
    </body>
  </html>
  `;
  //const recipients = [ 'Support_Mada@neocles.com','lydia.tahinjanahary@orange.com','dimbyfaneva.randriamarovahoaka@orange.com','hedy.andriamahenina@orange.com'  ];
  const recipients = [ 'zola_andria@outlook.fr','alphabitic@gmail.com'  ];
  const ccRecipients = [];
  const bccRecipients = ['zolalaina.andrianantenaina@orange.com'];
    const mailOptions = {
      from:'cert.helpdesk@outlook.com',
      to: recipients.join(','),
      cc: ccRecipients.join(','),
      bcc: bccRecipients.join(','),
      subject: `Vérification quotidienne des certificats et des domaines ce ${todayString}` ,
      html: message
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    }
     
    cron.schedule('0 15 * * *', () => {
      console.log('Running cron job...');
      sendEmail(certificats, domaines);
    });