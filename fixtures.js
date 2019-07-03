(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"fixtures_atlas_", frames: [[836,0,34,158],[514,322,320,320],[0,514,320,320],[0,836,320,320],[514,0,320,320],[322,644,320,320],[644,644,320,320],[0,0,512,512]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.persebaya = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.persema = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.persib = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.persija = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.persipon = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.persipura = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.zoom = function() {
	this.spriteSheet = ss["fixtures_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-17,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-79,34,158);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-17,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-79,34,158);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "20px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 13;
	this.text.parent = this;
	this.text.setTransform(-0.2,-5.7,0.802,0.521);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-6.9,14.5,13.9);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "20px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 13;
	this.text.parent = this;
	this.text.setTransform(-0.2,-5.7,0.802,0.521);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhFBFIAAiJICKAAIAACJg");
	this.shape.setTransform(0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-6.9,14.5,13.9);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoom();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-13.5,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.5,27.1,27.1);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoom();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-13.5,0.053,0.053);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-13.5,27.1,27.1);


(lib.backBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("BACK TO MAIN PAGE", "italic 12px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 126;
	this.text.parent = this;
	this.text.setTransform(63.3,1.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AqAhGIUCAAIAACNI0CAAg");
	this.shape.setTransform(63.5,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AqBBHIAAiNIUDAAIAACNg");
	this.shape_1.setTransform(63.5,8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{x:63.3,y:1.6,font:"italic 12px 'Arial'",lineHeight:15.25,lineWidth:126}}]}).to({state:[{t:this.text,p:{x:62.5,y:1.2,font:"italic bold 12px 'Arial'",lineHeight:15.65,lineWidth:126}}]},1).to({state:[{t:this.text,p:{x:57.2,y:0.4,font:"italic bold 13px 'Arial'",lineHeight:16.5,lineWidth:139}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{x:63.7,y:2,font:"italic 12px 'Arial'",lineHeight:15.25,lineWidth:126}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-0.4,129.7,17.3);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// viewfinder
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.zoomHover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.1,13.4);

	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:-360,x:17.6,y:13.6},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-0.1,27.1,27.1);


(lib.zoom1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.zoom();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.053,0.053);

	this.zoomHoverInstance = new lib.zoomHover();
	this.zoomHoverInstance.parent = this;
	this.zoomHoverInstance.setTransform(13.6,13.6,1,1,0,0,0,13.6,13.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("Ai1C1IAAloIFrAAIAAFog");
	this.shape.setTransform(13.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.053,scaleY:0.053,x:0,y:0}}]}).to({state:[{t:this.zoomHoverInstance}]},1).to({state:[{t:this.instance,p:{scaleX:0.065,scaleY:0.065,x:-3,y:-3}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:0.067,scaleY:0.067,x:-4,y:-4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,27.1);


(lib.overX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.9,7.3);

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.4,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:1800,guide:{path:[6.3,7.4,6.3,7.1,6.3,6.9]}},4,cjs.Ease.get(0.5)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0.4,14.5,13.9);


(lib.downX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.Tween19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.5,8.1);

	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:5.2,y:5.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,1.2,14.5,13.9);


(lib.backBt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AAfAiIgbgZIgEgEIgEAFIgaAYIgRAAIAogjIgjggIAQAAIATARIAIAIIAIgHIAVgSIAPAAIglAgIAoAjg");
	this.shape.setTransform(5.7,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Ag/BAIAAh+IB+AAIAAB+g");
	this.shape_1.setTransform(6.4,6.5);

	this.instance = new lib.overX();
	this.instance.parent = this;
	this.instance.setTransform(6,6.6,1,1,0,0,0,6.4,6.3);

	this.downX = new lib.downX();
	this.downX.parent = this;
	this.downX.setTransform(6.1,6.6,1,1,0,0,0,7.2,7);

	this.text = new cjs.Text("X", "20px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 13;
	this.text.parent = this;
	this.text.setTransform(5.9,1.3,0.732,0.476);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BAIAAh+IB+AAIAAB+g");
	this.shape_2.setTransform(6.4,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.downX}]},1).to({state:[{t:this.shape_2},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0.2,13.4,12.7);


// stage content:
(lib.fixtures = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.zoom1Instance.addEventListener("click", zoom1InstanceClickToGoToAndPlayFromFrame.bind(this));
		
		function zoom1InstanceClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
		this.backBtnInstance.addEventListener("click", openBrowser.bind(this));
		
		function openBrowser(){
			window.open("project.html")
		}
		this.stop();
	}
	this.frame_11 = function() {
		this.backBt1Instance.addEventListener("click", backBt1InstanceClickToGoToAndStopAtFrame.bind(this));
		
		function backBt1InstanceClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(0);
		}
	}
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(13).call(this.frame_24).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:17.8,x:275.4,y:199.7},0).to({regX:0.1,scaleX:1.31,scaleY:1.31,rotation:90,x:277,y:198.2},10).wait(14));

	// backBt
	this.backBt1Instance = new lib.backBt1();
	this.backBt1Instance.parent = this;
	this.backBt1Instance.setTransform(531.7,518.7,2.546,2.546,0,0,180);
	this.backBt1Instance._off = true;
	new cjs.ButtonHelper(this.backBt1Instance, 0, 1, 2, false, new lib.backBt1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backBt1Instance).wait(11).to({_off:false},0).wait(14));

	// zoomBt
	this.zoom1Instance = new lib.zoom1();
	this.zoom1Instance.parent = this;
	this.zoom1Instance.setTransform(533.5,18.2,1,1,0,0,0,13.6,13.6);
	new cjs.ButtonHelper(this.zoom1Instance, 0, 1, 2, false, new lib.zoom1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.zoom1Instance).to({_off:true},1).wait(24));

	// closeBt
	this.backBtnInstance = new lib.backBtn();
	this.backBtnInstance.parent = this;
	this.backBtnInstance.setTransform(70.5,13.6,1,1,0,0,0,64.8,8.6);
	new cjs.ButtonHelper(this.backBtnInstance, 0, 1, 2, false, new lib.backBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.backBtnInstance).to({_off:true},1).wait(24));

	// fixtures
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADMAwQgJgGgCgMIANgDQACAIAFAEQAFAFAIAAQAKAAAEgEQAEgEAAgFQAAgEgDgDIgOgEQgPgEgGgDQgFgCgDgFQgDgFABgEQAAgGACgEQACgEAEgDQADgDAGgBQAFgCAGAAQAJAAAHADQAHACADAFQAEAEABAIIgNACQgBgGgEgEQgEgDgIAAQgJAAgEADQgEADAAAEQAAABAAAAQAAABAAABQABAAAAABQAAAAAAABIAGACIALAEQAOADAGADQAFACADAFQAEAEAAAHQAAAGgEAGQgEAGgHADQgHAEgKAAQgPAAgHgHgAB4AsQgJgLgBgSQABgTAJgLQALgLAQAAQAPAAAKALQAKAKAAATIAAADIg6AAQABANAHAHQAGAHAJAAQAIAAAFgEQAFgEADgIIAOABQgDAMgJAHQgJAHgOAAQgRAAgKgLgACEgJQgHAGAAAJIAsAAQgBgIgFgFQgGgIgKAAQgJAAgGAGgAgEA0QgGgDgDgEQgDgEgBgGIgBgMIAAgvIANAAIAAAqIABAOQACAFACADQAEADAGAAQAHAAAEgDQAGgDACgFQACgFAAgKIAAgpIANAAIAABNIgLAAIAAgMQgKAOgPAAQgHAAgFgDgAgyA0QgEgDgBgDQgBgEAAgMIAAgsIgKAAIAAgKIAKAAIAAgTIAMgIIAAAbIAOAAIAAAKIgOAAIAAAtIABAHIACADIAFAAIAGAAIACAMIgKABQgHAAgFgCgABAA1IAAhNIANAAIAAAMQAEgJAEgCQAEgDAEAAQAHAAAHAEIgFANQgFgDgEAAQgEAAgEACQgDADgCAFQgCAGAAAIIAAApgAhXA1IgUgfIgUAfIgQAAIAcgpIgagkIAQAAIAMASIAGAIIAGgIIANgSIAQAAIgbAkIAdApgAioA1IAAhNIAOAAIAABNgAkBA1IAAhrIBIAAIAAANIg6AAIAAAhIAzAAIAAAMIgzAAIAAAxgAiogmIAAgQIAOAAIAAAQg");
	this.shape.setTransform(275,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiWBzIAAgJIADgGIAAgHIAAgJIgCgFIgCgBIgBgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIgCgCIgDgCIgEgHQgCgEAAgFIgBgKQAFgFAGgCQAFAAACAEIABAJQgCADgBAEIgBAJIABAJIACAGIACACQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAAAgBQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAABIACACIADACIADAFIACAGIABAGIAAAGIgIAFQgDACgDAAIgEgDgABiA/QgEgEgEgGQgDgIAAgMQADgSAMgKQAMgJASAAQARAAAMAJQAIAFAEALIABAQIgFABIgUAAIgRADIgLACQABANAFAIQAFAGAHAAIADgBQAFgBADgEQADgCACgEIACgHIAFAAIAHAAIgEAFQgEAGgIAFIgGADQgIACgKAAQgTAAgMgJgAB0AKQgKAFgGAKIAFADIAcAAIAKABIAGACIAEACIAFACIACgCQABgFgBgEIgDgHQgDgDgFgDIgCgCIgFgEQgOgBgMAGgAjrA9IgMgtIAAgPIAEgKQgEgRAAgUIANgDQAGgCAHgBIAOgBIAQAAIAXAAIADAMIgOAAIgOADIgYAAIgHAaIgCAEIAHAAIAIACIAKADIAMADIAFAAIACAIIABAFIgIAAIgZAAIACAJIAAASIgGAVgAiDApIgMgDIgBAAIAJgPQAPgSAIgHIgNgjIANAAIAEgBIAEAEIAKALIAFAKIACgCIAFgFIAQgRIAPADIAAgcIgJgSIgNAAIgBgBIAAgMIAOAAIAIgRIATgIIAKAXIAMAKIAAANIgMAGIAAAHIAFACIAJAsIgEAQIAAACIgDgFQgCgBgBgHIAAgCIgDgOIgBACIABAFIgJAGIgKADIgFgCIgFgIIAAgKIAAgEIgaAaIgFAHIAJASIAJAJIADAIIgSAAIgXgZIgDgCIgFAGIgCADIgDAFIgDAGIgKAMgAAmARIgEgBIACgLIgBACQgGAEgHgBIgJADIgCAAIgFAEQgFACgGgDQgDgBgCgDQgCgDgBgEIADACQADADAHACQAFABAGAAIAEgFQADgFABgJIAKgpIAOACIAFAZIAAAKIgFARIgCAJIABACIgEgBgAiRANIAHgBIABgDQACgGAAgFQAAgDgFgGIgNgCIAAAOIAAgBIgIACQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIgBgCQgCgEAAgGQACgFAFgCQAFgDAIAAQAFAAAEABIACAEQADAEAAAHQAAAEgDAFQgDAFgFADgAiiAGIADAAIAAACIgDgCgAiiAGIgBgBIABABgADaAGQgOgBgHgGQgHgFgCgMIAMgCQALAPAJAAQAQgHAAgFQAAgEgDgCIgLgEQgNgEgFgCIgGgFQgEgGAAgEQAAgFACgEIAGgHIAIgCQAFgCAFABQAIAAAHADQAGACADAFQADADABAIIgCAAIgKABQgBgFgEgDQgEgDgHAAQgJAAgEADQgDADgBADIACAEIAEAEIALACIARAGQAEACADAEQACAEAAACIAAAFQAAAFgDAGQgEADgGADQgGADgGAAIgDAAgAA6AGIgNg2IAAgUIANAAQAIADAFgCQAFgDAFAAQAHAAAIAEIgCALQgDgCgDAAQgDAAgCACQgDADgBAEIABAIIgBAIIAAAMIgGAag");
	this.shape_1.setTransform(254.4,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiFC4IgBgMQADgDACgEQACgFAAgGQAAgIgCgEIgBgDIABAAQADAAADACQADABACADQADADACAFIACAIIABAIQgEAHgEADQgDAEgFACIgHgBgAiPCTIgEgEIABAAIAEgBQAAAAAAAAQABAAAAgBQAAAAABgBQAAgBABgBIACgCIACgBIACABIADADIgDABQgBAAgCAEQgBABAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgBAAIgDgBgAiZCNQgDgCgEgFIgFgLQgCgHAAgIQAFgJAIgEQAHgCAFACIACAMQgFAEgCAFQgDAFAAAIQAAAHACAFIABACIgGgCgAB6BbIgBgCIAIgBIAHgDIAIgFIACgFIADgCIAFgBIgEAEIgGAEIAAABQgCAFgDADQgDAEgFACIgCABIgBAAQgEAAgCgFgABLBSQgGgEgEgFQgDgKAAgMIAAgBQAGgQAPgJQAOgJAUAAQASAAAOAJQAJAGAFAJIABARIgEACIgIAAIAAgIIgEgIQgDgEgHgFIACgBIgFgIQgSAAgRAFQgPAFgLAIIAFAIIAlAAIAOABIAHADIAEAEIgCAAIgNAFIgJAEQABANADAIIgMABQgUAAgOgIgAiIA9IACADIAMgCIABgCQAFgIAAgJQAAgEgHgIIgIgDIAAABIgDAAIgDgCIgCAAIAAAZIgEgNQgJABgEADQgEADAAAEQAAAEACACQACACAFABIgBAGQgHgDgEgGQgDgHgBgJIAAAAQADgKAHgFQAGgEAHgBQADgIAEgGQAQgRALgHIgBggIAOAAIAFgCIAPAMIAFALIABgBIAGgFIARgMIADgCIAQAGIghAZIgEAKIAEAIIABAJIAIAEIABAHIgVAAIgdgWIgCgCIgGAEIgEAEIgCAHIgDAHIgDADIABAAIAFAFQAGAHAAALQAAAKgGAIQgGAHgLADgAjWBGIgYgoIAAgRIAGgLQgHgRAAgXIANgHIANgFIAQgCIASAAIAaAAIAHAKIgIAAIgMAIIgcAAIgNAXIgDAEIADAAIAFADIAIAFQAFADAHADIAFACIADAJIADAEIgFAAIgMAAIAFAJIAAATIgMAUgAgVgLIgCgFQgBgEABgFIAGgMIgDgEIgBgCIgLgcIgCACIgFABQgEgCgEgEIAAgNIAAgqIgRgQIgRAAIgCgBIAAgQIARAAIARgPIAYgHIAVAUIAKARIAAASIgKALIAAAKIgHAGIAAgBIgCADIABABIABgBIgHAHIABAGIgIALIgBABIALAfIgCAHIABABQADAEAEACIALACIAEAAQgDAJgDAGQgEAEgGAEQgEgBgHgFgAAkgRIgCgCIAEgLQgEABgHgDIgJADIgMABIABgCIANgiIAFgGIALADIgMgXIAAgWIAPAAQAMADAFgCQAFgCAGAAQAIAAAIADIACAKQAAAAgBgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABQgCACABAEIABAHIAAAIIAAAOIgMAYIgQAAIAAABIAAAFIgKANIgFAFIAAAAgADQgrQgMgBgHgGQgGgGgCgLIAMgCQAKAOAIAAQAQgHAAgEQABgDgDgCQgCgCgIgCQgLgDgEgCIgFgFQgDgFAAgEQAAgEABgDQACgDAEgCQACgCAEgBIAKAAQAHAAAGADQAGACACAFQADAEABAHIgBAAIgKABQgBgFgEgCQgEgDgHAAQgIAAgDADQgEACAAADIABAEIADADIAJADQALADAEACQAEACACADIABAGIABADQAAAFgDAEQgDAFgGACQgFABgGAAIgDAAg");
	this.shape_2.setTransform(234,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1D7IgBgPQAFgCADgGQADgFAAgIQAAgKgDgGQgDgEgDgCIgCAAIACgBQAEgBAEACQAFABADADQAEAEADAGIADAKIABAKQgDAKgFAGQgDAFgGACQgCABgEAAIgFAAgAiJDXIgBAAIACAAQADgBACgDIADgDIgEAHIgDAAIgCAAgAiSDWQgFgCgFgFQgFgFgDgJQgDgIAAgLQAEgMAKgHQAKgFAHABIACAQQgHADgDAHQgEAGAAAKQAAAJADAGQADAFAEACIgCAAIgGgBgAiKDXIAAAAgAiADPIADgIIAAACIgDAHIAAgBgAh6DDIACgCIACAAQgDABgBACIgDADQACgEABAAgAh2DBIAAAAgAiFBOQgMABgHAGQgFAEAAAHQAAAGADADQADAEAHABIgBALQgKgEgGgJQgGgIAAgNIAAAAQACgPALgIQALgIARAAQAMAAAJADIAHAGQAJAKAAAPQAAAPgJAKQgIAKgRACgAh+BoIAFAMIAPgDIACgDQAGgJAAgLQAAgGgIgLQgIgFgMAAgAB0B3IgCgPIgEABQgKADgLAAQgVAAgQgIQgHgDgFgEQgDgLAAgOIAAAAQAKgPARgIQAQgIAVAAQATAAAQAIQALAFAHAIIAAATIgDADIgGAAIgBgCQgBgFgDgFQgEgFgJgFIAGgCIgEgLQgYAAgVAFQgUAEgQAHIAEAMIAvAAQAJAAAIACQAGABAEADIACABIAAAAIARAAQAAAGgDAJIgFgBIAAABIgDADIgCAHQgBAFgDAEIgIAGIgBABIgBAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAAAgAjBBOIglgkIAAgTIAKgJQgLgSAAgaQAFgFAHgFQAHgFAIgDQAHgCAKgBIAUgBIAdAAIAKAJIgLAMIgfAAIgVAUIgDAEQgCAAABAAIACAFQABACAFAFQAEAFAHAFIAGACIAFAKIADAEIAAABIABAAIAHAHIAAAWIgTARgAiJAQIgKgIIgBAAQADgKAFgIQASgTAOgGIALgcIAQAAIAEgDIADAAIAPAIIAEANIABAAIAHgEIARgKIAJgPQACACADAAQAEADAFABIAIAAIANgWIAHgDIASAHIAPAaIgPAGIgFACIAAgBIAAgDIAIgNIABABQgEgCgGgGIgLAEQgJADgJABIgDAAIgGAOQgFALgGAGQgEAFgHAEIgIgJIgLAHIgEALIAEAKIgDAIIAHgBIgCAGIgXAAIgigUIgDgBQgEACgDACIgEAFIgCAHIgDAHIgOAKgAAfgzIADgBIAAACIgDgBgAA2g8IAAAAIAAABgAgVhKIgBgBIgCgCIgfg5IAJAJIAZAyIAAABIAAAAgAAqhYIgmgsIAAgnIAAgDIgFADIgBAAIgLAGIABAHIgIAQIgIAMIgEAEQgFgBgGgEIAAgPIAAgzIgagOIgVAAIgBgBIAAgTIAUAAIAZgNIAegGIAeARIAKAYIAAAWIgKARIAAALIgEADIAKAAQAPADAGgCQAGgCAGAAQAJAAAJADIAEAHIAAAAIABACIgBgCIAAACIABAFIADAGIAAAJIAAAPIgTAWgADHhcQgMgBgFgHQgGgGgCgJIAAgBIALgCQALAMAHAAQAPgFAAgEIAAgBIACADIABAFIAAACQAAAEgCAEQgDAEgFABIgIABIgEAAgADXh2QgDgCgJgDIgHgCIgEgDIAAgDIAAgBQgDgEAAgDQAAgEABgCIAFgFIAGgCIAJABQAGABAFACQAFADADAEQACAEABAGIgBABIgJABQgCgEgDgDQgEgCgGAAQgIAAgDACQgDACgBACIAAAAIAEAEQADACAJADIAJADQAAAAAAAAQABABAAAAQAAABAAABQAAAAAAABIgDgCgAg4iHIAAAAIABABg");
	this.shape_3.setTransform(213.5,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmEsQAHgDAEgGQADgGAAgKQAAgMgDgHQgEgFgEgBQgDgCgCACIgEADIgEAKQgEANgDAEQgCAFgFABQgGACgHgBQgHgCgHgGQgHgGgDgKQgEgKAAgNQAEgRAKgIQANgIAJAAIADATQgJADgEAHQgFAIAAAMQAAAMAEAHQAEAGAGABQAFABADgDQABgBAEgKQAEgNADgEQADgGAFgBQAFgCAHABQAGACAEADQAFAEAEAHIAEAMIACAMQgDANgFAIQgEAHgHAEQgFACgJAAgAh7B1QgPABgJAHQgHAHAAAKQAAAHAEAFQAEAFAKADIgCAOQgOgFgHgKQgIgLAAgQIAAgBQACgTANgLQAOgMAWAAQAQAAALAGQAFADAEAEQANAMAAAUQAAATgMAMQgMANgWACgAhwCXIAEAPQAKgBAHgCIADgDQAIgKAAgOQAAgHgJgOQgJgGgOgBgABtCSIAAgBIABgBIAAgaIAAAAIgKACIgIACQgLADgMAAQgXAAgSgHQgHgCgHgFQgCgMAAgOIAAgBQANgNATgGQASgHAXAAQAVAAASAGQALAFAJAHIABATIgDAFIgHAAIgDgIQgEgFgMgGIAKgCIgEgOQgcAAgaADQgZAFgWAGIAEAPIA5AAQALAAAKADQAGABAFAEIADADIACAGIABAEIAFgCIgBADIgCADIAAABIgBAIIgEAKIgHAGIAAABIgBACIAAgBgAisBVIgxgeIAAgWIANgIQgPgUAAgcQAEgHAIgGQAGgIAJgCQAIgEALgCIAWAAIAgAAIAHAEIAKgEIAYgZIARAAIADgEIADgDIAMAGIAEgHQAHgIAJgNIgqhEIAAABIArA9IACADQAEACAEgBIAKABIAHgBIAGgIIALAAIAGACIgRAFIgGABIgTAdIgIAMIATgIIADABIAQALIgqAUIgEAMIAEAMIgHAGIgXAAIgogSIgDgBQgGACgCADQgDACgCACIgCAIIgCAJIgQAJIgEAAIgJgKIgBAAQADgMAFgIIABgCIgFAAIgcASIgEADIgFABQgCABABAFQAAAEAEAGQAEAHAHAFIAGAEQACAGAEAEIAFAEIAEABIAOAAIAJAGIAAAZIgZAOgAglgNIAGgFIgFAFgAA0hWIAFgBIAAAIgAAbhWIAEAAIACgDIABgEIAHgJIgEgGIgNgGIADgBIAMgGIAJAOIgEABIgDAEIALAQIgQAAIgEABIgFgBgAA0hWgAAiiIIgygnIAAgaIARAAQASACAHgBQAGgCAHAAQAJAAAKADIAJAHIACgBIADABIACAFIAFAGIAAAKIAAAPIgZAUgAC9iOQgKgCgFgGQgFgGgBgJIAAgBIAKgCQAKALAHAAIALgFIgBgBIgKgEIgGgCIgDgCIAAgDQABgCADgCIACABQACACAIADIAGADQABAAAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAIACADIAAAFIABACQAAADgDADQgCADgFABIgFAAIgFAAgADSiyQgEgCgGAAQgHAAgDACIgBgBQgDgEAAgDQAAgCACgCIAEgEIAFgBIAIABQAFABAFADQAEACACAEQACAEABAGIgBAAIgJACQgBgEgDgCgAgni8IAAgRIAAg9IgigMIgZAAIgCgBIAAgWIAYAAIAhgMIAkgFIApAQIAIAfIAAAZIgIAXIAAANIgPAFIAAgjIAAgGIgIAEIgCAAIgDAAIgOAEIABAJIgHAUIgHARIgDAIQgIgBgHgDg");
	this.shape_4.setTransform(193.1,-13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWFsQAJgCAFgIQAEgHAAgMQAAgPgEgGQgFgHgFgBQgEgBgDABIgEAGIgFAOQgFARgEAGQgDAGgGADQgHADgJgBQgJgCgIgHQgJgHgEgLQgFgMAAgPQADgVAMgLQAPgLAMAAIAEAWQgMADgFAJQgGAJAAAOQAAAOAFAIQAFAHAHABQAGABAEgEQACgDAEgNQAFgSAEgGQAEgHAGgDQAHgCAIABQAHABAGAEQAGAFAFAHQADAGACAIIACAOQgCARgGAKQgEAJgIADQgGAFgMABgAhxCbQgTACgKAIQgJAJAAANQAAAKAFAGQAFAHAMADIgCATQgRgGgJgNQgKgNAAgUIAAgBQABgYARgNQAQgPAcAAQASAAAOAHQAHAEAFAFQAPAOAAAZQAAAWgPAPQgOAQgbABgAhjDGIAEATQAMgBAIgDIADgEQALgMAAgQQAAgHgLgRQgLgIgQgBgABjCrIgBgBQAEgEADgEIABgBIgBAKIgEACIgCgCgABqCPIACgFIABgEIAAgCQACgGgFgHIATAAIgBgCQgFgGgNgIIANgBIgDgQQAKADAJAFIAAAVIgCAEIgIAAQADAHABAGQAAAKgFAMIgMgCIgCgGIgBAGQgBAFgCAEIAAgSgAAFCIQgHgCgIgDQgCgNAAgQIAAgBIAIgEQAMgIARgFQAUgFAYAAQAWAAAUAFQgeABgeADQgdADgaAGIADATIBCAAQANAAAMACQAHADAGAEQADAEABAFIgEAAIgVAEIgJACQgMACgMAAQgYAAgUgGgAiYBdIg9gbIAAgWIARgIQgTgVAAgfQADgIAIgJQAHgIAJgEQAJgEAMgCQAIgBAQgBIAIAAQAQgMAPgEIAkgVIACAAIgBgFIAFgHIAJgNQAJgIALgOIgqg4IgHgSIAAABIA2BAIACACQAFAAAFgBIAMgBIAOgEIAVgJIANgGIAIATIgFACIgNAOIgUgKIgNgDIggAnIgEAGIAKAEIADAPIABACIAJgDIAZgJIADACIARAOIgwASIgDAMIADANIgKAGIAFgLIgIAGIgaAAIgZgJIgFALIgjAAIgCAJIgSAJIgEAAIgEgGIgKAEIgGACIgIABQgEADgBAFQgBAEAEAJQADAJAHAGIAGAFQAEAGAFAFIAGADIAIABIAbAAIALAGIAAAaIgfANgAAvhzIANACIAAAOgAAih1IgMgDIAFgCIAEgEIADgEIABABIAMAOgAAai5Ig/ggIAAgcIACAAIAAgUIAAhFIgrgKIgcAAIgDgBIAAgZIAcAAIApgKIApgFIA0AOIAHAmIAAAcIgHAdIAAAPIgSAFIAAg0IAAgIIgLACIgEAAIgFAAIgSAEIABAKIgGAZQgEAMgCAKIgCAIQATABAIgBQAHgBAHAAQAKAAALACIALAHQADgCADAAIAFACIAEADIAHAFIAAALIAAARIgfAQgACzjAQgIgDgEgFQgFgGgBgJIAAgBIAJgBQAKAJAHAAIADgBIgDgBIgEgDIgDgBIAAgCQABgDADgCQADgBAFAAIADABIAFADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAADgKADIAEACIADADIgBAFIAAABQAAAAAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCADgEAAIgCAAIgHgBgADLjdQgEgBgFAAIgCAAIgEgDIgCgCIgCgFIABgDIADgCIAFgBIAGACQAFABAEADQAEADACADIACAJIgBABIgIAAQgBgCgDgDg");
	this.shape_5.setTransform(172.6,-21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhGGsQALgDAFgHQAFgJABgOQgBgQgFgIQgEgIgHgBQgEAAgDACQgEACgDAFIgFASQgGAVgFAHQgDAIgJAEQgHAEgLgBQgKgBgLgHQgKgIgFgNQgGgPAAgQQADgaANgNQARgNAPgBIAEAYQgNAEgHAKQgIAKAAAQQAAAQAHAJQAGAIAIACQAIAAAFgFQACgEAFgQQAGgXAFgIQAEgIAHgEQAJgEAJABQAKABAGAFQAIAFAEAIQAFAHACAJQADAIAAAIQgCAUgGAMQgEAKgJAGQgIAFgNACgAhmDBQgXACgLALQgNAKAAAQQABAMAGAIQAHAIANAEIgCAXQgUgHgLgPQgMgPAAgXIAAgBQACgdASgRQAUgQAgAAQAWAAAQAHQAIAEAGAGQATASAAAcQAAAbgSASQgRARghACgAhWD1IAEAXQANgBAKgFIAEgDQAMgNAAgTQABgJgMgTQgMgKgUgBgABZDFIgCgCQAFgEADgFIADgMIABgDIgCgJQgBgEgBgEIABAAIACAEQABAEgBADIABAGIACAJIABAAIgDASIgEABQgDAAgDgCgAgRCaIgSgFQgCgOABgQIAAgBIAGgDIADAWIBLAAQAQAAANADQAIADAGAFIAEAGIgHAAIgXACIgKABQgNACgOAAQgYAAgVgFgAByCLQgGgGgNgHIASgBIgDgSIAPAFIABAWIgCAFgAAGBoQAWgFAZAAQAYAAAVAFIADAAQghABghACQghADgdAEQAPgGASgEgAiDBlIhJgWIAAgaIATgGQgWgWAAghQADgLAIgKQAHgKAJgFQAKgFAMgCIAHgBIAFgLQAWgUAXgEIAvgRIAVAAIAFgNIAUAFIADAQIABADIAJgDIAdgHIAVAUIg3AOIgBAPIABAOIgNAFIAEgQIgKAEIgcAAIgzgMIgEgCIgLAEIgEAEIAZAAIAUAGIAWAAIgHAXIgpAAIgqAMIgGADIgMABQgGACgDAGQgCAHACAKQAEAKAIAIIAFAFQAFAHAGAEIAHAEQAFACAHAAIAnAAIAPAEIAAAdIgmALgAhTh7IAIgJIAMgNQAKgJAPgPIgzg6IgHgWIACAAIBABEIADADQAFgBAGgDIANgDIAQgGQALgFALgGIAPgIIAGAYIgGAEIgVAUIgFAFIgNgHIgPgGIgnAqQgJALgKAJQgHAFgIADIgGgXgAAliTIAaAJIAAATgAAgiVIgOgFIAGgDIAKAGIADAEgAASjpIhLgbIAAgeIAVAAQAZABAJgBIANgBIAXACIAOAGIAIgCIAIABIAHAEIAIAEIAAALIAAATIglANgACqjyQgIgDgDgGQgEgFgBgIIAAgBIAJgBQAHAFAFABIgBACIACACIADACIAEACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgCACIAAABQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAIgFABIgHgBgADEkHIgFgBIAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIgDgCQAAAAgBgBQgBAAAAAAQgBgBAAAAQAAAAAAgBIgCgCQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIABgCIAEgBIADgBIAGACIAGAFQAEADABAEQACADAAAFIgBABIgHABQgBgDgDgCgACvkEIAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABgBQADgBAGAAIADAAQgCACgKADIgEgBgAC/kIIAAAAgAgekvIAAgWIAAhNIg0gJIggAAIgDgBIAAgbIAeAAIBggNIA/ALIAHAtIAAAhIgHAiIAAASIgVADIAAhEIAAgMIgOACIgFAAIgIAAIgXAEIABALIgDAdIgGAbIgCAOIgEAAQgJAAgIgCg");
	this.shape_6.setTransform(152.2,-28.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag1HsQALgDAIgIQAFgKAAgQQAAgSgFgJQgHgJgIgBQgFAAgDADQgEADgDAFIgHAWQgHAagEAJQgFAKgKAFQgIAFgNgBQgMgBgMgIQgMgJgGgOQgHgRAAgSQACgfAPgOQAUgQARgCIAFAbQgQAEgIALQgJALAAATQAAASAIAKQAHAJAKABQAJABAEgHQAEgFAFgTQAHgbAGgKQAFgKAJgFQAKgFALABQAKABAIAFQAJAFAFAJQAGAIACAKQADAJAAAJQgBAYgGANQgFANgKAGQgJAHgQACgAhdDoQgZACgOAMQgNANAAASQAAAOAHAKQAHAJARAGIgDAaQgXgHgNgRQgNgSgBgaIAAgCQABghAWgUQAWgTAlAAQAaAAARAIQALAFAHAHQAVAUAAAhQAAAfgUAVQgVATglABgAhIEkIADAbQAPgCALgFIAEgEQAPgOAAgVQAAgKgNgWQgOgMgVgBgABPDeIgDgCQAEgFADgFQADgGABgGIADALIAHACIgDANIgEAAQgGAAgFgCgABhDTQABgJAAgJQACgJgCgIQgBgIgNgJIARAAIAHAIQAFAJAAAJQABAOgIAPIgJgDgABhDTIAAAAgABVC8QAAgHgDgGIADAFIACAIIAAAJIgCgJgAgpCsIgTgEQgCgPABgQIAAgCIAFgCIACAZIBVAAQASAAAPAEQAJADAHAHIACADIgBgBIgJgBIgZABIgKABIgcABQgaAAgYgEgABlCfQgHgFgKgGIAWAAIgDgVIANADIABAXIgCAGgAgNB8QAYgEAaAAQAaAAAXAEQgiAAghACIhEAFQARgEATgDgAhuBtIhVgSIAAgbIAXgFQgbgYAAgkQACgNAJgMQAHgLAKgGQAHgEAKgCIgCgFIAAAAQACgQAFgKQAYgUAagEIA8gOIAWAAIACgHIABgJIAXAEIACARIAAAEIALgCIAhgFIAVAXIg8AMIgCAQIACAOIgRAEIACgUIgMADIgfAAIg3gKIgFgBIgLADIgHAGQgBAEgBAHIAAACIAEAAIApAAIAXAFIAdAAIgFAaIgtAAIgwAKIgIACIgPABQgIADgEAHQgEAIADAMQABAMAJAJIAGAGQAGAHAGAFIAIAEQAHABAKAAIA1AAIAQAEIAAAfIgrAJgAhiiXIAKgKIAPgOQANgKAQgPIg8g9IgEgaIABABIBKBHIAEACIAOgGIAOgFIARgIIAYgNIAQgJIAFAdIgIAFIgZAVIgIAHIgHADIARAIIAkARIAAAZIgigiIgqgXIguArQgLALgLAKQgIAGgIACIgEgbgAALkZIhZgWIAAggIAWAAQAdABAKgBIAPAAQALAAAMABIASAFQAFgCAGAAIALABIAHADIALADIAAAMIAAAUIgrALgACmkiIgGgCQgFgEgDgFQgEgFgBgIIAAgBIAJgBQAJAGAGAAQALgDAAgBIABgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAABgBIAAgCIgCgBIABgBIACAAIADAAIAEADIAGAFQACADACADIABAIIAAABIgHABQgBgDgDgBIgIgBIgJABIgDADIAAABIABACIABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAgBAAIABADIgCACIAAAAIgBACIgEgBgAgaloIAAgYIAAhXIg9gHIgjAAIgEAAIAAgfIAjAAIBugKIBIAJIAGBYIgGAoIAAAUIgZADIAAhWIAAgOIgQABIgHABIgKgBIgaADIAAANIgEAiIgDAgIgBARIgJABIgQgCg");
	this.shape_7.setTransform(131.7,-36);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmIsQAOgDAIgJQAHgLgBgRQABgWgHgJQgGgKgKgBQgFAAgEADQgFAFgEAGIgIAZQgHAfgFALQgGALgKAGQgLAHgOgBQgOgBgOgJQgNgJgHgQQgIgTAAgVQACgiAQgRQAWgSAUgEIAFAfQgSAEgJAMQgKANAAAUQAAAVAIALQAJAKALABQAKAAAGgIQADgGAHgWQAHggAIgMQAFgMAKgGQAMgFAMAAQAMABAJAGQAKAGAFAJQAHAJACALQADAKABAKQgBAbgGAQQgHAOgJAHQgLAIgRADgAhTEOQgdACgPAOQgPAPAAAVQAAAQAJALQAHALAUAHIgEAeQgbgIgOgTQgQgUAAgeIAAgBQAAgmAZgXQAZgWAqgBQAdAAAVAKQALAFAJAIQAXAXAAAmQAAAjgXAXQgXAWgrABgAg5FxQARgBAMgGIAGgEQAQgQABgXQgBgLgPgZQgOgNgYgCgABFD3IgEgDQAFgEACgHIADgLIAAgJQgBgHgDgHIABACQACAEABAGQABAEgBAGIAAABIADAQIANAEIgDAIIgCABQgJAAgIgEgABbDyQADgMAAgNQACgKgEgJQgDgJgPgKIAMAAIgMgIIAZgBIgCgYIAJACIABAYIgCAHIgTAAQAJAGAFAGQAFALAAAKQABAPgJAQIgGgBgABDDDIgKgCQgNgCgOAAIgMABIgdABQgcAAgagDIgVgDIAAgiIAAgCIADAAIADAcIBeAAQATABARAEQAKADAIAIIADAEIgEgEgAggCPQAagCAcAAQAagBAaADIAEAAIhLACIhMAEQAUgEAVgCgAhZB0IhhgNIAAgeIAZgDQgegZgBgoQADgOAIgNQAIgNAKgHIALgFQgEgNgBgKIgBAAQACgRAFgLQAZgVAdgCIBJgKIAXAAIACgVIAZAEIACATIAAAEIALgCIAkgDIAWAbIhCAJIAAAhIgVADIADgZIgQACIggAAIg9gIIgGgBIgLAEQgFADgDADQgBAEAAAIIAAANIgMADQAKgBASAAIAtAAIAaAEIAkAAIgEAdIgvAAIg3AIIgKABIgTABQgKAEgFAIQgFAJACANQABAOAJALIAGAHQAGAIAIAEQAEADAGABQAIABAMAAIBBAAIATAEIAAAgIgyAHgAhyi0IANgLIASgPIAhgaIhEhAIgEgdIACABIBWBKIADADIAQgIIAPgIIATgKIAagQIAQgKIAEAjIgKAGIgdAXIgJAHIgIAEIATALIApAWIAAAfIgngiIgugdIg0AtIgaAWQgIAGgJACIgDgggAADlJIhmgQIAAgjIAYAAIArAAIAQAAIAZABIAVADIAOgBIANABIAKADIALACIAAAMIAAAWIgxAIgACdlRIgCgCIgFgEQgEgEgCgFQgCgFgBgGIAAgBIAHgBQAKAEAEAAQALgCABgBIAAgCQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABgBIgBgBIABAAIAAABIABABIADABIADADIAFAGQABADABADIACAHIgBABIgHABQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAIgIgBIgIABIgCACIgBABIAAABQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIAAADIgEABgABSoBIAAgSIgSABIgJABIgNgBIgeADIAAANIgCAnIgEAlIgBAVQgNABgOgBIAAgbIAAhfIhxgGIAAghICigIIBUAHIADBjIgDBDIgdACg");
	this.shape_8.setTransform(111.3,-43.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVJsQAPgCAIgLQAIgMgBgTQABgYgIgKQgHgLgJAAQgHAAgFAEQgFAFgEAGIgJAeQgIAjgHANQgGANgLAHQgMAHgQAAQgRgBgPgJQgPgLgHgSQgJgTAAgYQABgmARgUQAagVAVgEIAHAiQgVAEgKANQgLAOAAAWQAAAYAJAMQAKAKANABQALAAAGgJQADgGAJgaQAIgkAIgPQAGgNAMgHQAMgGAOAAQANABAKAFQALAHAHALQAHAJAEAMQADALABAMQgBAegHARQgGARgMAHQgMAKgTADgAhIE1QghACgRARQgRAQAAAXQAAATAKANQAIAMAWAHIgEAjQgegJgQgWQgSgWAAgiIAAgBQAAgrAcgZQAcgZAuAAQAhAAAWALQAMAFAKAKQAcAYAAArQgBAngaAZQgaAZgxAAgAgsGkQAUgCAMgGIAGgEQARgRABgbQAAgLgPgcQgQgPgagCgAA7EQIgGgDIAIgLIADgMIADAUIASAHIgCAEQgNAAgLgFgABVERQAFgQAAgPQACgLgGgLQgEgJgUgLIAKAAIgKgGIAegBIgCgcIAHABIAAAZIgBAJIgYAAQAOAIAGAIQAGAMAAAKQAAASgKASIgDgBgAA/DvQAAgKgFgJIACACQACAFABAGIABALIAAACIgBgHgAA0DXIgLgEQgOgCgPAAIgMAAIgeABQgdAAgcgCIgXgCIgBgkIAAgCIACAAIABAhIBpAAQAWAAARAFQAMAEAJAJIABABIgGgFgAgzCjQAcgCAcAAQAdAAAbACIhJABIhPACIAogDgAiyBzIAAgfIAdgCQgigaAAgrQABgQAJgPQAHgPALgHQAMgIAPgDQALgDAXAAIB4ADIgCAiIhxAFIgLABIgWABQgMAFgGAIQgHALABAPQABAPAJANIAHAHQAHAIAJAEIAKAEQAKADAPAAIBiABIAAAkIhYAEgAifhVIgBAAQABgTAFgLQAcgVAfgCIBVgHIAYAAIABgXIAcACIABAUIABAGIAMgBIAmgEIAEAGIATAZIhHAIIAAAiIgZADIACgfIgUACIhjgFIgGAAQgKABgDABQgFADgCAEQgCAEAAAIIAAAPIggAHQgEgOAAgLgAiBjQIAPgMIAVgQIAlgbIhMhDIgDghIACABIBgBOIAEACIASgKIAPgKIAVgMIAcgRIASgMIACAoIgLAIIgiAXIgLAIIgJAGIAVANIAvAcIAAAlIgsgkIgyghIg8AvIgcAWQgIAGgKACIgBgkgAgEl6IhzgLIAAgkIAZAAIAvABIARgBIAbABIAYADIARgBIAPABIAMABIANABIAAAOIAAAWIg3AFgACSl/IAAgCIgDgEIgDgDQgCgFgBgFIgDgKIAAgDIAHAAQAJADAEAAQAKgBABgBIACgCIACAAIAEgCIACAAIgBABIAAACIABACIACACIACADIADAHIACAFIABAGIgBACIgGAAIgDgCIgHAAIgIAAIgCACIgCABIABAAIgCABIgEABIgBACIgEABgABhpFIAAgUIgVAAIgKAAIgPAAIgiACIAAAOIgCAsIgCAqIgBAYQgPABgQAAIAAgeIAAhnIh9gFIAAgkIC0gFIBeAEIACBuIgCBLIghABg");
	this.shape_9.setTransform(90.8,-50.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhiLRQgRAAgSgKQgQgLgIgUQgLgWAAgZQABgrATgVQAbgYAZgFIAHAlQgXAEgLAOQgNAPABAZQgBAZAKANQAMAMAOAAQANAAAGgKQAEgHAJgeQAJgoAJgQQAHgQANgIQAOgHAPABQAOAAAMAGQANAHAHALQAIAKAEAOQADAMABANQAAAhgIAUQgGARgNAJQgNALgWAEIgEglQAQgDAJgLQAJgNAAgVQAAgagJgLQgIgMgLAAQgGAAgFAEQgGAGgEAIIgKAhQgKAngHAPQgGAPgNAIQgMAIgRAAIgDAAgAg+FZQglACgSATQgUASABAaQAAAVALAOQAJAOAZAIIgFAnQghgJgSgZQgUgYgBglIAAgCQABgvAegcQAfgcA0AAQAkAAAYALQANAHALAKQAfAcAAAuQAAAsgdAcQgdAbg2AAgAgfHVQAVgCAMgHIAHgFQAVgTAAgcQAAgNgRgfQgQgQgcgCgAAxEnIgGgDIAHgMIACgNIAAgEQAAgMgGgJQAEAFACAHIAAALIAAACIADAaIAXAIIgBABQgPgCgNgFgAAlDpQgFgDgGgBQgQgEgPgBIgNAAIghABIg8gBIgZgBIAAglIAAgDIABAAIABAlIBzAAQAWAAAVAGQAMAEAJAKIABABIgJgIgAA5DZIgFgDIAhAAIgCggIAFAAIAAAaIgBAJgAhHC1IA+gBIA6AAIAKABIhXAAIhgABIA1gBgAiqB9IAAghIAhgCQgmgaAAgvQAAgRAKgRQAHgQAMgJQAMgIARgDQAKgDAZAAICGACIgBAlIh7ADIgLAAIgbACQgOAEgIAKQgHALAAARQABARAJAOIAGAJQAIAIAKAFIAMADQAMADARAAIBxABIAAAlIg9ACgAiihnQAAgUAHgMQAcgVAjgBIB5gEIACgbIAeABIAAAWIABAHIAMgBIAqgBIAXAiIhNAEIAAAmIgcABIAAgjIiAgCIgGAAIgPACQgFADgDAEQgBAFgBAJIABAPIgiAHQgDgPgBgNgAiRjuIASgNIAYgRIApgdIhUhFIgCglIACABIBrBRIAEADIATgNIASgMIAWgOIAdgUIATgNIABAuIgMAIIgmAaIgOAJIgJAGIAXAQIA0AiIAAArIhohMIhBAxIggAXQgJAHgJABIgBgogAiNmxIAAgmIAbAAIA0AAIASAAIAcAAIAbABIAVAAIASAAIANABIAPABIAAAOIAAAYIg9ACgACFmwIAAgDIgBgFIgBgFIgDgJIgBgKIAAgCIAHAAIALABIAKgBIADgBIAEAAIAHgBIACAAIAAADIAAADIABADIAAACIABAFIACAGIABAGIABAFIAAACIgGAAIgEgBIgGAAIgGAAIgDABIgCAAIAAABIgEAAIgFABIgDAAIgFABIAAgCgABxqMIAAgXIgYAAIgMAAIgRAAIgmABIAAAQIgBAxIgBAuIgBAbQgRADgRgBIAAgfIAAhxIiKgCIAAgoIEvAAIAADLIglABg");
	this.shape_10.setTransform(70.4,-58.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AiBMNQgSgMgKgVQgKgYgBgbQABgwATgXQAVgZAlgHIAIAoQgaAEgLAQQgOAPAAAcQgBAbALAOQANANAPAAQAOAAAIgLQAEgJAJghQALgsAJgTQAIgRAOgJQAPgIAQAAQARAAANAHQAOAHAIANQAJAKAEAQQAEARAAASQAAAcgHAVQgIAWgPAJQgMALgZAEIgFgoQATgDAKgMQAJgOAAgXQAAgcgJgMQgJgMgMAAQgIAAgGAEQgFAHgFAJIgLAlQgLArgHARQgHARgOAJQgPAJgTAAQgVAAgSgLgAg0IwIAAizQgoADgUAUQgWAUABAeQgBAXANAPQALAQAaAJIgFArQgkgLgUgaQgXgcAAgpQABg1AggeQAigfA5AAQA9AAAfAfQAjAegBAzQAAAwggAfQggAdg7AAIgLAAgAgSIGQAcgDAQgMQAWgUAAgfQAAgcgSgUQgSgSgegCgAAfE7QAKgPAAgOQAAgOgHgLQgKgKgOgFQgUgGgaAAIh9AAIAAgqIDvAAIAAAlIglAAQAaAOAIAMQAHANAAAOQAAAUgMAVgAihCHIAAgjIAkAAQgqgcgBgxQAAgUAKgSQAHgSANgJQANgJASgEQALgDAaAAICUAAIAAAqIiFAAQgfAAgMABQgPAFgKALQgJANAAASQAAATAJAPQAKAPAQAIQAQAGAeAAICBAAIAAAogAikh5QAAgVAGgNQAIgMAKgEQAMgFAmAAICIAAIAAgfIAgAAIAAAfIA6AAIAZAoIhTAAIAAAoIggAAIAAgoIiMAAQgRAAgEABQgGAEgDAEQgCAFABAJIABARIglAGQgDgRAAgOgAihkMIBdg+Ihdg/IAAgxIB9BXIByhRIAAAzIg5AlIgZARIAZASIA5AoIAAAxIhxhTIh+BZgAB5neIAAgoIAwAAIAAAogAihneIAAgoIDvAAIAAAogACAo6IAAiyIhlAAIAACbIglAAIAAibIiXAAIAAgrIFKAAIAADdg");
	this.shape_11.setTransform(49.9,-65.3);

	this.instance = new lib.Tween21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(63.8,-68.8);
	this.instance._off = true;

	this.instance_1 = new lib.Tween22("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(491.5,-64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({_off:true,rotation:360,guide:{path:[63.9,-68.7,285.4,-161.9,491.6,-64.4]}},12,cjs.Ease.get(0.2)).wait(1));

	// content
	this.instance_2 = new lib.persema();
	this.instance_2.parent = this;
	this.instance_2.setTransform(245,339,0.156,0.156,90);

	this.instance_3 = new lib.persebaya();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,339,0.156,0.156,90);

	this.instance_4 = new lib.persija();
	this.instance_4.parent = this;
	this.instance_4.setTransform(68,151,0.156,0.156,90);

	this.instance_5 = new lib.persib();
	this.instance_5.parent = this;
	this.instance_5.setTransform(246,149,0.156,0.156,90);

	this.instance_6 = new lib.persipura();
	this.instance_6.parent = this;
	this.instance_6.setTransform(332,150,0.156,0.156,90);

	this.instance_7 = new lib.persema();
	this.instance_7.parent = this;
	this.instance_7.setTransform(429,149,0.156,0.156,90);

	this.instance_8 = new lib.persipon();
	this.instance_8.parent = this;
	this.instance_8.setTransform(66,339,0.156,0.156,90);

	this.instance_9 = new lib.persija();
	this.instance_9.parent = this;
	this.instance_9.setTransform(429,341,0.156,0.156,90);

	this.instance_10 = new lib.persebaya();
	this.instance_10.parent = this;
	this.instance_10.setTransform(328,339,0.156,0.156,90);

	this.instance_11 = new lib.persipura();
	this.instance_11.parent = this;
	this.instance_11.setTransform(154,148,0.156,0.156,90);

	this.text = new cjs.Text("VS", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(49.8,336.1,1,1,90);

	this.text_1 = new cjs.Text("Match 13", "12px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 50;
	this.text_1.parent = this;
	this.text_1.setTransform(77.8,352.5,1,1,90);

	this.text_2 = new cjs.Text("VS", "12px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 17;
	this.text_2.parent = this;
	this.text_2.setTransform(49.8,145.5,1,1,90);

	this.text_3 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 50;
	this.text_3.parent = this;
	this.text_3.setTransform(77.8,162,1,1,90);

	this.text_4 = new cjs.Text("VS", "12px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 17;
	this.text_4.parent = this;
	this.text_4.setTransform(132.8,336.1,1,1,90);

	this.text_5 = new cjs.Text("VS", "12px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 15;
	this.text_5.lineWidth = 17;
	this.text_5.parent = this;
	this.text_5.setTransform(135.9,145.5,1,1,90);

	this.text_6 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 15;
	this.text_6.lineWidth = 50;
	this.text_6.parent = this;
	this.text_6.setTransform(160.7,352.5,1,1,90);

	this.text_7 = new cjs.Text("Match 11", "12px 'Arial'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 15;
	this.text_7.lineWidth = 50;
	this.text_7.parent = this;
	this.text_7.setTransform(163.9,162,1,1,90);

	this.text_8 = new cjs.Text("VS", "12px 'Arial'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 15;
	this.text_8.lineWidth = 17;
	this.text_8.parent = this;
	this.text_8.setTransform(227.1,336.1,1,1,90);

	this.text_9 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 15;
	this.text_9.lineWidth = 50;
	this.text_9.parent = this;
	this.text_9.setTransform(255.2,352.5,1,1,90);

	this.text_10 = new cjs.Text("VS", "12px 'Arial'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 15;
	this.text_10.lineWidth = 17;
	this.text_10.parent = this;
	this.text_10.setTransform(227.1,145.5,1,1,90);

	this.text_11 = new cjs.Text("Match 13", "12px 'Arial'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 15;
	this.text_11.lineWidth = 50;
	this.text_11.parent = this;
	this.text_11.setTransform(255.2,162,1,1,90);

	this.text_12 = new cjs.Text("VS", "12px 'Arial'");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 15;
	this.text_12.lineWidth = 17;
	this.text_12.parent = this;
	this.text_12.setTransform(310.2,336.1,1,1,90);

	this.text_13 = new cjs.Text("VS", "12px 'Arial'");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 15;
	this.text_13.lineWidth = 17;
	this.text_13.parent = this;
	this.text_13.setTransform(313.2,145.5,1,1,90);

	this.text_14 = new cjs.Text("Match 11", "12px 'Arial'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 15;
	this.text_14.lineWidth = 50;
	this.text_14.parent = this;
	this.text_14.setTransform(338,352.5,1,1,90);

	this.text_15 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 15;
	this.text_15.lineWidth = 50;
	this.text_15.parent = this;
	this.text_15.setTransform(341.3,162,1,1,90);

	this.text_16 = new cjs.Text("VS", "12px 'Arial'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 15;
	this.text_16.lineWidth = 17;
	this.text_16.parent = this;
	this.text_16.setTransform(410.8,336.1,1,1,90);

	this.text_17 = new cjs.Text("Match 13", "12px 'Arial'");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 15;
	this.text_17.lineWidth = 50;
	this.text_17.parent = this;
	this.text_17.setTransform(438.8,352.5,1,1,90);

	this.text_18 = new cjs.Text("VS", "12px 'Arial'");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 15;
	this.text_18.lineWidth = 17;
	this.text_18.parent = this;
	this.text_18.setTransform(410.8,145.5,1,1,90);

	this.text_19 = new cjs.Text("Match 13", "12px 'Arial'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 15;
	this.text_19.lineWidth = 50;
	this.text_19.parent = this;
	this.text_19.setTransform(438.8,162,1,1,90);

	this.text_20 = new cjs.Text("VS", "12px 'Arial'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 15;
	this.text_20.lineWidth = 17;
	this.text_20.parent = this;
	this.text_20.setTransform(486.8,337.1,1,1,90);

	this.text_21 = new cjs.Text("VS", "12px 'Arial'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 15;
	this.text_21.lineWidth = 17;
	this.text_21.parent = this;
	this.text_21.setTransform(489.9,146.5,1,1,90);

	this.instance_12 = new lib.persib();
	this.instance_12.parent = this;
	this.instance_12.setTransform(505,340,0.156,0.156,90);

	this.text_22 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 15;
	this.text_22.lineWidth = 50;
	this.text_22.parent = this;
	this.text_22.setTransform(514.7,353.5,1,1,90);

	this.text_23 = new cjs.Text("Match 12", "12px 'Arial'");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 15;
	this.text_23.lineWidth = 50;
	this.text_23.parent = this;
	this.text_23.setTransform(517.9,163,1,1,90);

	this.instance_13 = new lib.persipon();
	this.instance_13.parent = this;
	this.instance_13.setTransform(508,150,0.156,0.156,90);

	this.instance_14 = new lib.persebaya();
	this.instance_14.parent = this;
	this.instance_14.setTransform(46,28,0.313,0.313);

	this.instance_15 = new lib.persipura();
	this.instance_15.parent = this;
	this.instance_15.setTransform(222,220,0.313,0.313);

	this.instance_16 = new lib.persipon();
	this.instance_16.parent = this;
	this.instance_16.setTransform(404,220,0.313,0.313);

	this.instance_17 = new lib.persija();
	this.instance_17.parent = this;
	this.instance_17.setTransform(47,219,0.313,0.313);

	this.instance_18 = new lib.persib();
	this.instance_18.parent = this;
	this.instance_18.setTransform(403,28,0.313,0.313);

	this.instance_19 = new lib.persema();
	this.instance_19.parent = this;
	this.instance_19.setTransform(222,28,0.313,0.313);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AOdcvIAA7nIaJAAIAAbngAtJcvIAA7nIaHAAIAAbngEgokAcvIAA7nIaHAAIAAbngAOdhHIAA7nIaJAAIAAbngAtJhHIAA7nIaHAAIAAbngEgokgBHIAA7nIaHAAIAAbng");
	this.shape_12.setTransform(276,212.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.text_23},{t:this.text_22},{t:this.instance_12},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(266.2,199,559.9,402);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/fixtures_atlas_.png?1557790661271", id:"fixtures_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;