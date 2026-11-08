(() => {
  "use strict";
  const EVENTS = [
    {id:"narbacular-2005",date:"2005-05-01",label:"MAY 1, 2005",type:"release",title:"Narbacular Drop",subtitle:"The game that started it all",desc:"Nuclear Monkey Software's DigiPen student game introduced two linked portals. Its developers later joined Valve and created Portal.",href:"narbacular-drop.html",action:"OPEN NARBACULAR DROP",source:"https://games.digipen.edu/games/narbacular-drop",sourceText:"DIGIPEN GAME ARCHIVE"},
    {id:"portal-2006-demos",date:"2006-09-01",label:"2006 · DEMONSTRATIONS",type:"build",title:"Portal — Leipzig & X06 presentations",subtitle:"Public demonstrations of early Portal",desc:"Surviving footage and community research document early portal effects, chambers and prototype visuals. Precise dates are not assigned to the combined exhibit.",href:"portal-beta.html",action:"OPEN 2006 RESEARCH",source:"https://discord.gg/ZFfG2YhUt",sourceText:"PSBR RESEARCH EXPORT"},
    {id:"portal-2006-vmfs",date:"2006-12-01",label:"DECEMBER 2006 · DEVELOPMENT ERA",type:"build",title:"Portal — December 2006 source material",subtitle:"Original map-source records",desc:"The PSBR FAQ documents leaked December 2006 VMFs and assets. This is a historical development-era record, not the leak date or a publicly available genuine executable.",href:"portal-beta.html",action:"VIEW PORTAL BETA DOSSIER",source:"https://discord.com/channels/809092700003500084/1547674551570403419/1547801763610894489",sourceText:"PSBR FAQ"},
    {id:"portal-retail-2007",date:"2007-10-10",label:"OCTOBER 10, 2007",type:"release",title:"Portal",subtitle:"Original retail release",desc:"Portal debuts as part of The Orange Box, turning the students' two-portal mechanic into Aperture Science's defining experiment.",href:"aperture.html#portal",action:"OPEN PORTAL RECORD",source:"https://store.steampowered.com/app/400/",sourceText:"PORTAL / STEAM"},
    {id:"fstop-era-2008",date:"2008-07-01",label:"2008 · DEVELOPMENT ERA",type:"build",title:"F-STOP / original development material",subtitle:"Camera-era experiments and map sources",desc:"The original F-STOP source and maps are grouped under 2008 for this experimental era. There is no confirmed complete, playable original Valve F-STOP leak; the source and map leaks are documented separately.",href:"fstop-source.html",action:"OPEN F-STOP SOURCES",source:"https://discord.com/channels/809092700003500084/1547674551570403419/1547801800168579084",sourceText:"PSBR F-STOP FAQ"},
    {id:"still-alive-2008",date:"2008-10-22",label:"OCTOBER 22, 2008",type:"release",title:"Portal: Still Alive",subtitle:"Xbox Live Arcade release",desc:"The Xbox 360 standalone edition of Portal launched with additional challenge material.",href:"https://news.xbox.com/en-us/2008/10/22/arcade-portal-still-alive/",action:"OFFICIAL RELEASE RECORD",source:"https://news.xbox.com/en-us/2008/10/22/arcade-portal-still-alive/",sourceText:"XBOX NEWS"},
    {id:"852-0",date:"2009-07-28",label:"JULY 28, 2009",type:"build",title:"Portal 2 · CoreHub Era",subtitle:"852_0 · July 2009",desc:"The earliest listed Portal 2 prototype in this collection. Its CoreHub environments and older systems are documented in the PSBR export.",href:"builds/jul-2009.html",action:"OPEN BUILD 852_0",source:"https://discord.gg/ZFfG2YhUt",sourceText:"PSBR BUILD RESEARCH"},
    {id:"841-0",date:"2010-02-04",label:"FEBRUARY 4, 2010",type:"build",title:"Portal 2 · February prototype",subtitle:"841_0",desc:"An early 2010 depot snapshot. Open the dossier for the original research notes and the associated mirror.",href:"builds/feb-2010.html",action:"OPEN BUILD 841_0"},
    {id:"852-1",date:"2010-03-18",label:"MARCH 18, 2010",type:"build",title:"Portal 2 · March prototype",subtitle:"852_1",desc:"March 2010 revision in the recovered development chain.",href:"builds/mar-2010.html",action:"OPEN BUILD 852_1"},
    {id:"852-2",date:"2010-07-22",label:"JULY 22, 2010",type:"build",title:"Portal 2 · July prototype",subtitle:"852_2",desc:"Mid-2010 gameplay and campaign iteration, preserved as a separate depot snapshot.",href:"builds/jul-2010.html",action:"OPEN BUILD 852_2"},
    {id:"852-3",date:"2010-08-30",label:"AUGUST 30, 2010",type:"build",title:"Portal 2 · August prototype",subtitle:"852_3",desc:"An August snapshot containing transitional campaign material.",href:"builds/aug-2010.html",action:"OPEN BUILD 852_3"},
    {id:"841-1",date:"2010-09-24",label:"SEPTEMBER 24, 2010",type:"build",title:"Portal 2 · September 24",subtitle:"841_1",desc:"Separate September revision. No independently verified direct mirror is assigned in this archive.",href:"builds/sep-24-2010.html",action:"OPEN BUILD 841_1"},
    {id:"841-2",date:"2010-09-26",label:"SEPTEMBER 26, 2010",type:"build",title:"Portal 2 · September 26",subtitle:"841_2",desc:"A later September snapshot, distinct from 841_1.",href:"builds/sep-26-2010.html",action:"OPEN BUILD 841_2"},
    {id:"852-4",date:"2010-10-19",label:"OCTOBER 19, 2010",type:"build",title:"Portal 2 · October prototype",subtitle:"852_4",desc:"Late-2010 Portal 2 iteration documented by the PSBR community.",href:"builds/oct-2010.html",action:"OPEN BUILD 852_4"},
    {id:"852-6",date:"2010-12-01",label:"DECEMBER 1, 2010",type:"build",title:"Portal 2 · December revision 1",subtitle:"852_6",desc:"December 1 build. PSBR's records associate the supplied GoFile mirror with this revision, not 852_7.",href:"builds/dec-01-2010.html",action:"OPEN BUILD 852_6"},
    {id:"852-7",date:"2010-12-02",label:"DECEMBER 2, 2010",type:"build",title:"Portal 2 · December revision 2",subtitle:"852_7",desc:"Distinct December 2 snapshot. The archive has no independently verified standalone download for this revision.",href:"builds/dec-02-2010.html",action:"OPEN BUILD 852_7"},
    {id:"841-3",date:"2011-01-12",label:"JANUARY 12, 2011",type:"build",title:"Portal 2 · January prototype",subtitle:"841_3",desc:"Early-2011 pre-release depot snapshot, with additional story and presentation changes described in the PSBR export.",href:"builds/jan-2011.html",action:"OPEN BUILD 841_3"},
    {id:"portal2-retail",date:"2011-04-19",label:"APRIL 19, 2011 · NORTH AMERICA",type:"release",title:"Portal 2",subtitle:"Retail release",desc:"Portal 2's North American retail launch. The Steam store lists April 18; platform and region dates differ. This entry is not a beta build.",href:"https://store.steampowered.com/app/620/",action:"PORTAL 2 / STEAM",source:"https://store.steampowered.com/app/620/",sourceText:"STEAM RELEASE RECORD"},
    {id:"peer-review",date:"2011-10-04",label:"OCTOBER 4, 2011",type:"demo",title:"Portal 2 — Peer Review",subtitle:"Official free DLC",desc:"Cooperative campaign additions, challenge features and post-launch material for Portal 2.",href:"https://www.thinkwithportals.com/blog.php",action:"PORTAL 2 OFFICIAL BLOG",source:"https://www.thinkwithportals.com/blog.php",sourceText:"OFFICIAL PORTAL 2 SITE"},
    {id:"peti",date:"2012-05-08",label:"MAY 8, 2012",type:"demo",title:"Portal 2 — Perpetual Testing Initiative",subtitle:"Puzzle Maker / Steam Workshop",desc:"Valve released the built-in Puzzle Maker and Steam Workshop integration.",href:"https://www.thinkwithportals.com/blog.php?id=7853&p=1",action:"OFFICIAL DEVELOPMENT POST",source:"https://www.thinkwithportals.com/blog.php?id=7853&p=1",sourceText:"VALVE ANNOUNCEMENT"},
    {id:"sixense-pack",date:"2013-09-20",label:"SEPTEMBER 20, 2013",type:"demo",title:"Portal 2 — Sixense Perceptual Pack",subtitle:"Official licensed peripheral DLC",desc:"Sixense's motion-tracking Portal 2 content; the Steam package has since been retired.",href:"https://steamdb.info/app/247120/",action:"PACKAGE ARCHIVE",source:"https://steamdb.info/app/247120/",sourceText:"STEAMDB"},
    {id:"the-lab",date:"2016-04-05",label:"APRIL 5, 2016",type:"demo",title:"The Lab",subtitle:"Valve VR tech demo",desc:"A collection of room-scale VR experiments set in an Aperture Science pocket universe.",href:"https://store.steampowered.com/app/450390/TheLab/",action:"OPEN THE LAB",source:"https://store.steampowered.com/app/450390/TheLab/",sourceText:"STEAM"},
    {id:"bridge-portal",date:"2017-12-20",label:"DECEMBER 20, 2017",type:"release",title:"Bridge Constructor Portal",subtitle:"Officially licensed crossover",desc:"An authorized Aperture-themed puzzle game released by Headup Games and ClockStone. It is a licensed release, not a community mod.",href:"https://headupgames.com/news.php?page=32",action:"RELEASE ANNOUNCEMENT",source:"https://headupgames.com/news.php?page=32",sourceText:"PUBLISHER RECORD"},
    {id:"moondust",date:"2018-06-21",label:"JUNE 21, 2018",type:"demo",title:"Moondust",subtitle:"Valve Knuckles controller tech demos",desc:"An Aperture Lunar Resources Initiative-themed VR controller demonstration, listed under SteamVR Knuckles Tech Demos.",href:"https://steamdb.info/app/887260/",action:"OPEN TECH DEMO RECORD",source:"https://steamdb.info/app/887260/config/",sourceText:"STEAM RELEASE DATA"},
    {id:"hand-lab",date:"2019-06-25",label:"JUNE 25, 2019",type:"demo",title:"Aperture Hand Lab",subtitle:"VR interaction tech demo",desc:"Cloudhead Games' free hand-interaction experiment set within Aperture Science and published by Valve.",href:"https://store.steampowered.com/app/868020/Aperture_Hand_Lab/",action:"OPEN APERTURE HAND LAB",source:"https://store.steampowered.com/app/868020/Aperture_Hand_Lab/",sourceText:"STEAM"},
    {id:"desk-job",date:"2022-03-01",label:"MARCH 1, 2022",type:"demo",title:"Aperture Desk Job",subtitle:"Steam Deck tech demo",desc:"Valve's free playable short and Steam Deck showcase set in the Portal universe.",href:"https://store.steampowered.com/app/1902490/Aperture_Desk_Job/",action:"OPEN APERTURE DESK JOB",source:"https://steamdb.info/app/1902490/",sourceText:"STEAM RELEASE RECORD"},
    {id:"exposure-leak",date:"2023-02-02",label:"FEBRUARY 2, 2023 · LEAK DISCUSSION",type:"leak",title:"Exposure leak",subtitle:"F-STOP-related code inside a fan-project build",desc:"VCC's exported discussion records the leaked Exposure build. This is the only community-project leak included here because the build contains F-STOP code. It is not an original Valve F-STOP executable.",href:"https://drive.google.com/file/d/1l4ecYEOo5H8_sfz1F1xEr_b1TruRW3KT/view?usp=share_link",action:"OPEN EXPOSURE BUILD",source:"https://discord.com/channels/186525910625681408/1070783958490566807/1070784726996111370",sourceText:"VCC / FEBRUARY 2023"},
    {id:"steam2-leak",date:"2026-08-29",label:"AUGUST 29, 2026 · DISCOVERY",type:"leak",title:"Steam2 Teraleak",subtitle:"2009–2011 Portal 2 depots become public",desc:"Historical Steam2 depot files circulate publicly. The individual Portal 2 builds above were created in 2009–2011 but surfaced much later. Select any build entry to open its dossier.",href:"archive.html#records",action:"BROWSE RECOVERED BUILDS",source:"https://discord.gg/ZFfG2YhUt",sourceText:"PSBR ARCHIVE"},
    {id:"fstop-maps-2026",date:"2026-11-01",label:"NOVEMBER 1, 2026 · SOURCE LEAK",type:"leak",title:"F-STOP and Hybrid Era map sources",subtitle:"Original VMF maps enter the research archive",desc:"The PSBR hybrid-era export documents the circulated map sources and their relationship to the early Portal 2 experiments. These are source maps, not a playable F-STOP build.",href:"fstop-source.html",action:"OPEN ORIGINAL SOURCE RECORD",source:"https://discord.com/channels/809092700003500084/1566444211388158002/1566444344997711912",sourceText:"PSBR / NOVEMBER 2026"}
  ];
  const TYPE = {release:{label:"OFFICIAL RELEASE",style:"release"},build:{label:"DEVELOPMENT BUILD",style:"build"},demo:{label:"TECH DEMO / DLC",style:"demo"},leak:{label:"LEAK / DISCOVERY",style:"leak"}};
  const events = EVENTS.slice().sort((a,b)=>a.date.localeCompare(b.date));
  const list = document.getElementById("timeline-events");
  const years = document.getElementById("tl-years");
  const input = document.getElementById("tl-search");
  const filters = Array.from(document.querySelectorAll("[data-tl-filter]"));
  const status = document.getElementById("tl-count");
  const total = document.getElementById("tl-total");
  const empty = document.getElementById("tl-none");
  const reset = document.getElementById("tl-reset");
  if (!list || !years || !input) return;
  let current = "all", query = "";
  const esc = s => String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const linkAttrs = href => /^https?:\/\//.test(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
  const category = evt => TYPE[evt.type] || TYPE.build;
  const renderEvent = e => {
    const t=category(e);
    const source=e.source ? '<a class="tl-source-link" href="'+esc(e.source)+'"'+linkAttrs(e.source)+'>'+esc(e.sourceText||"SOURCE")+' ↗</a>' : '';
    return '<article class="tl-event tl-event-'+t.style+'" id="event-'+esc(e.id)+'"><div class="tl-node" aria-hidden="true"></div><div class="tl-item">'
    +'<a class="tl-card" href="'+esc(e.href)+'"'+linkAttrs(e.href)+'><div class="tl-card-top"><time datetime="'+esc(e.date)+'">'+esc(e.label)+'</time><span class="tl-tag">'+esc(t.label)+'</span></div><h3>'+esc(e.title)+'</h3><span class="tl-subtitle">'+esc(e.subtitle||"")+'</span><p>'+esc(e.desc)+'</p><strong class="tl-card-action">'+esc(e.action||"OPEN RECORD")+' <span aria-hidden="true">↗</span></strong></a>'
    +(source?'<div class="tl-card-source">PRIMARY REFERENCE: '+source+'</div>':'')+'</div></article>';
  };
  const displayYears = shown => {
    const unique=[...new Set(shown.map(e=>e.date.slice(0,4)))];
    years.innerHTML=unique.map(y=>'<a href="#tl-year-'+esc(y)+'" data-tl-year="'+esc(y)+'">'+esc(y)+'</a>').join("");
  };
  const render = () => {
    const matching=events.filter(e=>(current==="all"||e.type===current)&&(!query||[e.title,e.subtitle,e.desc,e.label,e.type,e.action].join(" ").toLowerCase().includes(query)));
    const chunks=[];let lastYear="";
    for(const e of matching){
      const year=e.date.slice(0,4);
      if(year!==lastYear){chunks.push('<div class="tl-year-heading" id="tl-year-'+esc(year)+'"><span>'+esc(year)+'</span><small>'+matching.filter(x=>x.date.slice(0,4)===year).length+' ENTRIES</small></div>');lastYear=year;}
      chunks.push(renderEvent(e));
    }
    list.innerHTML=chunks.join("");
    displayYears(matching);
    if(status)status.textContent=matching.length+" OF "+events.length+" ARCHIVE EVENTS";
    if(total)total.textContent=String(events.length).padStart(2,"0");
    if(empty)empty.hidden=matching.length>0;
    filters.forEach(b=>{const active=b.dataset.tlFilter===current;b.classList.toggle("selected",active);b.setAttribute("aria-pressed",String(active));});
  };
  filters.forEach(b=>b.addEventListener("click",()=>{current=b.dataset.tlFilter||"all";render();}));
  input.addEventListener("input",()=>{query=input.value.trim().toLowerCase();render();});
  reset?.addEventListener("click",()=>{current="all";query="";input.value="";render();});
  years.addEventListener("click",e=>{
    const a=e.target.closest("a[data-tl-year]");
    if(!a)return;
    years.querySelectorAll("a").forEach(x=>x.classList.toggle("active",x===a));
  });
  render();
  if(location.hash.startsWith("#tl-year-")||location.hash.startsWith("#event-")){
    const node=document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if(node)requestAnimationFrame(()=>node.scrollIntoView({block:"start"}));
  }
})();