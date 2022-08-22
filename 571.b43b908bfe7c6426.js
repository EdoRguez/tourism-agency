"use strict";(self.webpackChunkTourismAgencyPage=self.webpackChunkTourismAgencyPage||[]).push([[571],{5571:(B,Z,a)=>{a.r(Z),a.d(Z,{DestinationsModule:()=>H});var c=a(9808),d=a(7979),p=a(7941),t=a(4893),b=a(7579),u=a(2340),f=a(520);let g=(()=>{class i{constructor(n){this._http=n,this.API_URL=`${u.N.apiUrl}/json/destinations.json`,this.mapUrl="",this.showMapSubject=new b.x}get showMapAction$(){return this.showMapSubject.asObservable()}toggleMap(n){this.showMapSubject.next(n)}getDestination(n){return this._http.get(this.API_URL)}getDestinations(){return this._http.get(this.API_URL)}}return i.\u0275fac=function(n){return new(n||i)(t.LFG(f.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var v=a(2313),h=a(5384);function x(i,e){1&i&&(t.TgZ(0,"div",3),t._UZ(1,"app-loader"),t.qZA())}let m=(()=>{class i{constructor(n,o){this.destinationsService=n,this._sanitizer=o,this.isMapLoading=!0,this.mapUrl=this._sanitizer.bypassSecurityTrustResourceUrl(n.mapUrl)}ngOnInit(){}onMapLoaded(){this.isMapLoading=!1}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g),t.Y36(v.H7))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destination-map"]],decls:3,vars:2,consts:[[1,"map-box"],["class","loading-box",4,"ngIf"],["width","100%","height","350","allowfullscreen","","loading","lazy",2,"border","0",3,"src","load"],[1,"loading-box"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,x,2,0,"div",1),t.TgZ(2,"iframe",2),t.NdJ("load",function(){return o.onMapLoaded()}),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",o.isMapLoading),t.xp6(1),t.Q6J("src",o.mapUrl,t.uOi))},directives:[c.O5,h.R],styles:[".map-box[_ngcontent-%COMP%]{overflow:hidden;display:flex;justify-content:center;box-shadow:0 1px 4px #29333980;background-color:#fff;position:relative}.loading-box[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;display:flex;justify-content:center;align-items:center}"]}),i})();function C(i,e){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"gallery",22),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Q6J("items",n.images)}}const M=function(){return[".."]};function T(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t.TgZ(3,"div",4),t.TgZ(4,"div",5),t.TgZ(5,"button",6),t._UZ(6,"i",7),t.TgZ(7,"span",8),t._uU(8,"Regresar"),t.qZA(),t.qZA(),t.YNc(9,C,2,1,"div",9),t.TgZ(10,"div",10),t.TgZ(11,"ul",11),t.TgZ(12,"li",12),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(22);return t.oxw().scroll(s)}),t._uU(13,"Resumen"),t.qZA(),t.TgZ(14,"li",13),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(22);return t.oxw().scroll(s)}),t._uU(15,"Habitaciones"),t.qZA(),t.TgZ(16,"li",14),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(22);return t.oxw().scroll(s)}),t._uU(17,"Ubicaci\xf3n"),t.qZA(),t.TgZ(18,"li",15),t.NdJ("click",function(){t.CHM(n);const s=t.MAs(22);return t.oxw().scroll(s)}),t._uU(19,"Servicios"),t.qZA(),t._UZ(20,"hr",16),t.qZA(),t.qZA(),t.TgZ(21,"div",17,18),t.TgZ(23,"div",19),t.TgZ(24,"h5",20),t._uU(25),t.qZA(),t.qZA(),t.TgZ(26,"div",21),t._UZ(27,"app-destination-map"),t.qZA(),t.qZA(),t._UZ(28,"br"),t._UZ(29,"br"),t._UZ(30,"br"),t._UZ(31,"br"),t._UZ(32,"br"),t._UZ(33,"br"),t._UZ(34,"br"),t._UZ(35,"br"),t._UZ(36,"br"),t._UZ(37,"br"),t._UZ(38,"br"),t._UZ(39,"br"),t._UZ(40,"br"),t._UZ(41,"br"),t._UZ(42,"br"),t._UZ(43,"br"),t._UZ(44,"br"),t._UZ(45,"br"),t._UZ(46,"br"),t._UZ(47,"br"),t._UZ(48,"br"),t._UZ(49,"br"),t._UZ(50,"br"),t._UZ(51,"br"),t._UZ(52,"br"),t._UZ(53,"br"),t._UZ(54,"br"),t._UZ(55,"br"),t._UZ(56,"br"),t._UZ(57,"br"),t._UZ(58,"br"),t._UZ(59,"br"),t._UZ(60,"br"),t._UZ(61,"br"),t._UZ(62,"br"),t._UZ(63,"br"),t._UZ(64,"br"),t._UZ(65,"br"),t._UZ(66,"br"),t._UZ(67,"br"),t._UZ(68,"br"),t._UZ(69,"br"),t._UZ(70,"br"),t._UZ(71,"br"),t._UZ(72,"br"),t._UZ(73,"br"),t._UZ(74,"br"),t._UZ(75,"br"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&i){const n=t.oxw();t.xp6(5),t.Q6J("routerLink",t.DdM(3,M)),t.xp6(4),t.Q6J("ngIf",n.images.length>0),t.xp6(16),t.Oqu(n.destination.name)}}let U=(()=>{class i{constructor(n,o){this._destinationsService=n,this.route=o,this.images=[]}ngOnInit(){const n=+this.route.snapshot.params.id;this._destinationsService.getDestination(n).subscribe(o=>{this.destination=o.find(s=>s.id===n),this._destinationsService.mapUrl=this.destination.googleMapLocation,this.mapImages()})}scroll(n){n.scrollIntoView({behavior:"smooth"})}mapImages(){for(let n=0;n<this.destination.imagesUrl.length;n++)this.images.push(new p.vE({src:this.destination.imagesUrl[n],thumb:this.destination.imagesUrl[n]}))}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g),t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destination"]],decls:1,vars:1,consts:[["class","main-box-destinations",4,"ngIf"],[1,"main-box-destinations"],[1,"container"],[1,"row"],[1,"col-12","mt-3"],[1,"main-information-box"],[1,"btn","btn-main",3,"routerLink"],["aria-hidden","true",1,"fa","fa-arrow-left"],[1,"ml-1"],[4,"ngIf"],[1,"details-navbar"],[1,"list-details-navbar"],[1,"list-element-1",3,"click"],[1,"list-element-2",3,"click"],[1,"list-element-3",3,"click"],[1,"list-element-4",3,"click"],[1,"nav-line"],[1,"row","mt-5"],["resume",""],[1,"col-12","col-sm-7"],[1,"destination-title"],[1,"col-12","col-sm-5"],["thumbPosition","bottom",3,"items"]],template:function(n,o){1&n&&t.YNc(0,T,76,4,"div",0),2&n&&t.Q6J("ngIf",o.destination)},directives:[c.O5,d.rH,m,p.vY],styles:["span[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}.destination-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700;padding-left:20px}.main-box-destinations[_ngcontent-%COMP%]{background-color:#f2f2f2;min-height:100vh}.main-information-box[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 1px 4px #29333980}.details-navbar[_ngcontent-%COMP%]{background-color:#fff;position:sticky;top:58px;padding:10px 0 0;border:1px solid #f2f2f2;z-index:1}.list-details-navbar[_ngcontent-%COMP%]{margin:0}.list-element-1[_ngcontent-%COMP%], .list-element-2[_ngcontent-%COMP%], .list-element-3[_ngcontent-%COMP%], .list-element-4[_ngcontent-%COMP%]{font-size:16px;display:inline-block;margin:0 10px;text-align:center}.list-element-1[_ngcontent-%COMP%]:hover, .list-element-2[_ngcontent-%COMP%]:hover, .list-element-3[_ngcontent-%COMP%]:hover, .list-element-4[_ngcontent-%COMP%]:hover{cursor:pointer}.list-element-1[_ngcontent-%COMP%]{width:80px}.list-element-2[_ngcontent-%COMP%]{width:100px}.list-element-3[_ngcontent-%COMP%]{width:80px}.list-element-4[_ngcontent-%COMP%]{width:40px}.list-element-2[_ngcontent-%COMP%]:hover ~ .nav-line[_ngcontent-%COMP%]{margin-left:105px;width:110px}.list-element-3[_ngcontent-%COMP%]:hover ~ .nav-line[_ngcontent-%COMP%]{margin-left:230px;width:80px}.list-element-4[_ngcontent-%COMP%]:hover ~ .nav-line[_ngcontent-%COMP%]{margin-left:320px;width:80px}.nav-line[_ngcontent-%COMP%]{height:2.5px;width:80px;margin:0 0 0 10px;background:#cc0000;border:none;transition:.25s ease-in-out}@media screen and (max-width: 990px){.details-navbar[_ngcontent-%COMP%]{white-space:nowrap;overflow-x:scroll;padding:10px 0 5px}}"]}),i})();var r=a(3658);let O=(()=>{class i{constructor(n){this.activeModal=n}ngOnInit(){}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(r.Kz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destination-map-modal"]],decls:2,vars:0,consts:[[1,"modal-body"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-destination-map"),t.qZA())},directives:[m],styles:[""]}),i})();const _=function(i){return[i]};function A(i,e){if(1&i&&(t.TgZ(0,"div",28),t._UZ(1,"i",29),t.TgZ(2,"p",30),t._uU(3),t.qZA(),t.qZA()),2&i){const n=e.$implicit;t.xp6(1),t.Q6J("classList",t.VKq(2,_,n.iconClass)),t.xp6(2),t.Oqu(n.type)}}function y(i,e){if(1&i&&(t.TgZ(0,"p",40),t._uU(1),t.qZA()),2&i){const n=t.oxw(2);t.xp6(1),t.Oqu(n.destination.description)}}function w(i,e){if(1&i&&t._UZ(0,"gallery",41),2&i){const n=t.oxw(3);t.Q6J("items",n.images)}}function P(i,e){1&i&&(t.TgZ(0,"li",35),t.TgZ(1,"a",36),t._uU(2,"Galer\xeda"),t.qZA(),t.YNc(3,w,1,1,"ng-template",37),t.qZA()),2&i&&t.Q6J("ngbNavItem",2)}function q(i,e){if(1&i&&(t.TgZ(0,"div",44),t._UZ(1,"i",45),t.TgZ(2,"p",30),t._uU(3),t.qZA(),t.qZA()),2&i){const n=e.$implicit;t.xp6(1),t.Q6J("classList",t.VKq(2,_,n.iconClass)),t.xp6(2),t.Oqu(n.type)}}function D(i,e){if(1&i&&(t.TgZ(0,"div",42),t.TgZ(1,"div",5),t.YNc(2,q,4,4,"div",43),t.qZA(),t.qZA()),2&i){const n=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",n.destination.services)}}function I(i,e){if(1&i){const n=t.EpF();t.TgZ(0,"div",31),t.TgZ(1,"div",32),t.TgZ(2,"ul",33,34),t.NdJ("activeIdChange",function(s){return t.CHM(n),t.oxw().active=s}),t.TgZ(4,"li",35),t.TgZ(5,"a",36),t._uU(6,"Informaci\xf3n"),t.qZA(),t.YNc(7,y,2,1,"ng-template",37),t.qZA(),t.YNc(8,P,4,1,"li",38),t.TgZ(9,"li",35),t.TgZ(10,"a",36),t._uU(11,"Servicios"),t.qZA(),t.YNc(12,D,3,1,"ng-template",37),t.qZA(),t.qZA(),t._UZ(13,"div",39),t.qZA(),t.qZA()}if(2&i){const n=t.MAs(3),o=t.oxw();t.xp6(2),t.Q6J("activeId",o.active),t.xp6(2),t.Q6J("ngbNavItem",1),t.xp6(4),t.Q6J("ngIf",o.images.length>0),t.xp6(1),t.Q6J("ngbNavItem",3),t.xp6(4),t.Q6J("ngbNavOutlet",n)}}const N=function(i){return{"background-image":i}};let J=(()=>{class i{constructor(n,o){this.destinationService=n,this.modalService=o,this.isCardOpened=!1,this.active=1,this.images=[]}ngOnInit(){for(let n=0;n<this.destination.imagesUrl.length;n++)this.images.push(new p.vE({src:this.destination.imagesUrl[n],thumb:this.destination.imagesUrl[n]}))}onToggleMap(){this.destinationService.mapUrl=this.destination.googleMapLocation,window.scroll({top:0,left:0,behavior:"smooth"}),this.destinationService.toggleMap(!0)}onToggleMapMobile(){this.destinationService.mapUrl=this.destination.googleMapLocation,this.modalService.open(O)}onToggleCardDetails(n){-1===n.target.className.indexOf("show-map-btn")&&(this.isCardOpened=!this.isCardOpened)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g),t.Y36(r.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destination-item"]],inputs:{destination:"destination"},decls:41,vars:12,consts:[[1,"destination-box","container"],[1,"row",3,"click"],[1,"col-5","col-md-2","p-1"],[1,"info-card-main-image",3,"ngStyle"],[1,"col-7","col-md-10"],[1,"row"],[1,"col-12","col-md-7"],[1,"card-body-left"],[1,"card-body-title"],[1,"text-center","pt-2"],[1,"fas","fa-map-marker-alt"],[1,"pt-2"],[1,"card-body-destination"],[1,"text-center","pt-1"],["aria-hidden","true",1,"fa","fa-home"],[1,"pt-1"],[1,"card-body-type"],[1,"btn","btn-main","mt-3","show-map-btn",3,"click"],[1,"btn","btn-main","mt-3","show-map-btn-mobile",3,"click"],[1,"btn","btn-main","mt-1","show-map-btn",3,"routerLink"],[1,"col-12","col-md-5","p-0"],[1,"card-body-right"],[1,"card-body-services-title"],[1,"d-flex","justify-content-between"],["class","d-flex flex-column justify-content-center align-items-center",4,"ngFor","ngForOf"],[1,"card-body-price-title"],[1,"card-body-price-description"],["class","row details-box",4,"ngIf"],[1,"d-flex","flex-column","justify-content-center","align-items-center"],["aria-hidden","true",3,"classList"],[1,"card-body-services-description"],[1,"row","details-box"],[1,"col-12"],["ngbNav","",1,"nav-tabs","mt-2",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem"],["ngbNavLink","",1,"tab-title"],["ngbNavContent",""],[3,"ngbNavItem",4,"ngIf"],[1,"mt-2",3,"ngbNavOutlet"],[1,"tab-description","mb-2"],["thumbPosition","bottom",1,"mb-3",3,"items"],[1,"container","mb-3"],["class","col-4 col-sm-2 text-center mt-2",4,"ngFor","ngForOf"],[1,"col-4","col-sm-2","text-center","mt-2"],[3,"classList"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.NdJ("click",function(l){return o.onToggleCardDetails(l)}),t.TgZ(2,"div",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"h5",8),t._uU(9),t.qZA(),t.TgZ(10,"table"),t.TgZ(11,"tr"),t.TgZ(12,"td",9),t._UZ(13,"i",10),t.qZA(),t.TgZ(14,"td",11),t.TgZ(15,"p",12),t._uU(16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(17,"tr"),t.TgZ(18,"td",13),t._UZ(19,"i",14),t.qZA(),t.TgZ(20,"td",15),t.TgZ(21,"p",16),t._uU(22),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"button",17),t.NdJ("click",function(){return o.onToggleMap()}),t._uU(24,"Mostrar Mapa"),t.qZA(),t.TgZ(25,"button",18),t.NdJ("click",function(){return o.onToggleMapMobile()}),t._uU(26,"Mostrar Mapa"),t.qZA(),t._UZ(27,"br"),t.TgZ(28,"button",19),t._uU(29,"Ver Disponibilidad"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(30,"div",20),t.TgZ(31,"div",21),t.TgZ(32,"p",22),t._uU(33,"Servicios"),t.qZA(),t.TgZ(34,"div",23),t.YNc(35,A,4,4,"div",24),t.qZA(),t.TgZ(36,"p",25),t._uU(37,"Precio Por Noche"),t.qZA(),t.TgZ(38,"p",26),t._uU(39),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(40,I,14,5,"div",27),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngStyle",t.VKq(8,N,"url("+o.destination.imageUrl+")")),t.xp6(6),t.Oqu(o.destination.name),t.xp6(7),t.Oqu(o.destination.destination),t.xp6(6),t.Oqu(o.destination.type),t.xp6(6),t.Q6J("routerLink",t.VKq(10,_,o.destination.id)),t.xp6(7),t.Q6J("ngForOf",o.destination.services.slice(0,5)),t.xp6(4),t.hij("USD ",o.destination.basePrice,""),t.xp6(1),t.Q6J("ngIf",o.isCardOpened))},directives:[c.PC,d.rH,c.sg,c.O5,r.Pz,r.nv,r.Vx,r.uN,r.tO,p.vY],styles:[".destination-box[_ngcontent-%COMP%]{margin-top:15px;box-shadow:0 1px 4px #29333980;transition:.3s;background-color:#fff}.destination-box[_ngcontent-%COMP%]:hover{transform:scale(1.005);cursor:pointer}.info-card-main-image[_ngcontent-%COMP%]{width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover;border-radius:5px}.card-body-title[_ngcontent-%COMP%], .card-body-destination[_ngcontent-%COMP%], .card-body-type[_ngcontent-%COMP%], .card-body-services-title[_ngcontent-%COMP%], .card-body-services-description[_ngcontent-%COMP%], .card-body-price-title[_ngcontent-%COMP%], .card-body-price-description[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;margin:0}.card-body-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.card-body-destination[_ngcontent-%COMP%], .card-body-type[_ngcontent-%COMP%]{padding-left:5px;font-size:14px}.card-body-services-title[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-bottom:10px}.card-body-services-description[_ngcontent-%COMP%]{font-size:14px}.card-body-left[_ngcontent-%COMP%]{margin-top:5px}.card-body-right[_ngcontent-%COMP%]{margin:5px 5px 5px 0;padding:5px;border:1px solid rgba(0,0,0,.2);border-radius:5px}.show-map-btn[_ngcontent-%COMP%]{margin-bottom:5px}.card-body-price-title[_ngcontent-%COMP%]{margin-top:10px;font-weight:700}.card-body-price-description[_ngcontent-%COMP%]{color:green;font-weight:700}.details-box[_ngcontent-%COMP%]{border-top:1px solid rgba(0,0,0,.2)}.tab-title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;color:#c00}.show-map-btn-mobile[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 990px){.show-map-btn-mobile[_ngcontent-%COMP%]{display:block;margin-bottom:5px}.show-map-btn[_ngcontent-%COMP%]{display:none}.card-body-services-description[_ngcontent-%COMP%]{font-size:10px}}"]}),i})();function k(i,e){1&i&&t._UZ(0,"app-destination-item",3),2&i&&t.Q6J("destination",e.$implicit)}function L(i,e){if(1&i&&(t.TgZ(0,"div",1),t.YNc(1,k,1,1,"app-destination-item",2),t.qZA()),2&i){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.destinations)}}let S=(()=>{class i{constructor(n){this._destinationsService=n,this.destinations=[]}ngOnInit(){this._destinationsService.getDestinations().subscribe(n=>{this.destinations=n})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destinations-list"]],decls:1,vars:1,consts:[["class","box-destinations-list",4,"ngIf"],[1,"box-destinations-list"],[3,"destination",4,"ngFor","ngForOf"],[3,"destination"]],template:function(n,o){1&n&&t.YNc(0,L,2,1,"div",0),2&n&&t.Q6J("ngIf",o.destinations)},directives:[c.O5,c.sg,J],styles:[".box-destinations-list[_ngcontent-%COMP%]{margin-bottom:15px}"]}),i})();function Q(i,e){1&i&&(t.TgZ(0,"div",5),t._UZ(1,"app-destination-map"),t.qZA())}const F=function(i,e){return{"container-fluid":i,container:e}},Y=function(i,e){return{"col-md-8":i,"col-md-12":e}},R=[{path:"",component:(()=>{class i{constructor(n){this.destinationService=n,this.showMapRight=!1}ngOnInit(){this.destinationService.showMapAction$.subscribe(n=>{this.showMapRight=!1,setTimeout(()=>{this.showMapRight=n},1)})}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(g))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-destinations"]],decls:6,vars:9,consts:[[1,"main-box-destinations"],[3,"ngClass"],[1,"row"],[1,"col-12",3,"ngClass"],["class","col-12 col-md-4 parent-destination-map",4,"ngIf"],[1,"col-12","col-md-4","parent-destination-map"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"app-destinations-list"),t.qZA(),t.YNc(5,Q,2,0,"div",4),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngClass",t.WLB(3,F,o.showMapRight,!o.showMapRight)),t.xp6(2),t.Q6J("ngClass",t.WLB(6,Y,o.showMapRight,!o.showMapRight)),t.xp6(2),t.Q6J("ngIf",o.showMapRight))},directives:[c.mk,S,c.O5,m],styles:[".main-box-destinations[_ngcontent-%COMP%]{background-color:#f2f2f2;min-height:100vh}.parent-destination-map[_ngcontent-%COMP%]{margin-top:15px}.button-utilities-box[_ngcontent-%COMP%]{box-shadow:0 1px 4px #29333980;background-color:#fff;padding:5px}"]}),i})()},{path:":id",component:U}];let z=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(R)],d.Bz]}),i})();var j=a(7098);let H=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[c.ez,z,p.Uo,r.Oz,j.q,d.Bz]]}),i})()}}]);