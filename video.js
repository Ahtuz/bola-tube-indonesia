(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.backButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgspAhOMAAAhCbMBZTAAAMAAABCbg");
	this.shape.setTransform(285.8,212.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,571.6,425.2);


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


// stage content:
(lib.video = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.backButtonInstance.addEventListener("click", backButtonInstanceHandler.bind(this));
		
		function backButtonInstanceHandler()
		{
			this.play();
		}
	}
	this.frame_13 = function() {
		window.open("project.html");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).to({regX:0.9,regY:0.9,scaleX:0.06,scaleY:0.06,x:267.1,y:192.8},13).wait(1));

	// video
	this.instance = new lib.an_Video({'id': '', 'src':'videos/persebaya.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance.setTransform(274.7,211.8,1.197,1.196,0,0,0,200.1,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFIACgJIAJAAIgCAJg");
	this.shape.setTransform(403.7,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgDgFQgCgFAAgHQAAgIAEgHQAEgJAHgDQAFgEAHAAQAJAAAGAGQAFAFAAALIgBAGIglAAIAAADQAAAIADADQAEAEAEAAQAEAAAEgDQAFgDACgGIAJABQgCAHgHAGQgGAFgJAAQgFAAgFgCgAgGgPQgEADgDAJIAdAAIAAgDQAAgGgEgEQgDgDgFAAQgFAAgFAEg");
	this.shape_1.setTransform(399.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAjQgEgBgCgDQgDgEAAgDIABgDIAJABQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAIADACIAGACQAHgBADgEQACgCACgKIACgEQgIAHgGAAQgIAAgGgGQgEgGAAgJQAAgJADgHQAFgHAFgEQAGgEAGAAQAKAAAFAJIACgIIAIAAIgLAxQgBAIgDAFQgDAEgFADQgEADgGAAQgHAAgEgCgAgEgbQgCACgEADQgCADgBAGIgBAHIABAHQABAEACACQAEACACAAQAEAAAEgDQAEgEADgEQADgHAAgGQAAgGgDgEQgEgEgFAAQgCAAgEACg");
	this.shape_2.setTransform(394.3,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAXQgFgFAAgGQAAgEACgDQACgEADgBIAIgDIAKgBQAJAAADgCIACgFQAAgDgDgDQgDgCgGAAQgFAAgDACQgEADgBAFIgJgBQACgIAHgEQAGgEAHAAQAKAAAGAFQAEADAAAGIgBAJIgDAMIgBAKIABAHIgJAAIgBgHIgJAGIgIACQgHAAgEgEgAAJABIgHAAIgKADQgDABgCACQgCACAAADQAAADADADQADACAEAAQAFAAADgCQAEgDADgEQACgDABgIIgEABg");
	this.shape_3.setTransform(388.7,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAlIAPhHIAIAAIgCAHQAFgFADgBQADgCAEAAQAIgBAEAGQAFAFAAAKQAAAJgCAGQgDAGgEAEQgEAEgEACQgEACgEAAQgIAAgGgKIgFAdgAABgaQgCABgCADQgDAEgBAFIgCAJIABAHQABAEADACQADACACAAQAIAAAFgJQAEgHAAgKQAAgGgDgEQgDgEgFAAQgDABgDACg");
	this.shape_4.setTransform(382.9,17.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIAbIAHggIABgIQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgCgCgDgBQgHABgEAEQgGAFgCAMIgFAYIgJAAIALgzIAIAAIgCAJQAFgFAEgDQAEgCAFAAQAGgBAEAEQAEADAAAGIgCAJIgGAfg");
	this.shape_5.setTransform(374.7,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAkIALgzIAIAAIgKAzgAABgZIACgKIAJAAIgDAKg");
	this.shape_6.setTransform(371.2,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAXQgEgFAAgGQAAgEACgDQACgEADgBIAIgDIALgBQAIAAAEgCIAAgFQAAgDgCgDQgDgCgGAAQgFAAgDACQgDADgCAFIgJgBQADgIAFgEQAHgEAIAAQAJAAAGAFQAEADAAAGIgBAJIgDAMIgCAKIABAHIgIAAIgBgHIgJAGIgIACQgIAAgEgEgAAJABIgHAAIgKADQgDABgBACQgCACAAADQAAADADADQACACAFAAQAEAAADgCQAEgDACgEQACgDACgIIgEABg");
	this.shape_7.setTransform(367,16.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWAbIAHgiIABgGQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgCAAQgEAAgEADQgEACgDAEQgCAFgBAHIgGAZIgIAAIAIgiIAAgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgDAAgEADQgEACgDAFQgDAEgCAHIgEAZIgJAAIAKgzIAJAAIgBAIQAEgFAFgCQAEgCAEAAQAEAAADACQADADABAEQAEgEAEgDQAFgCAFAAQAGAAADACQAEADAAAGIgCAIIgGAhg");
	this.shape_8.setTransform(360.2,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAZQgFgDgCgFQgCgFgBgFQABgPAIgKQAHgIALAAQAKAAAGAGQAGAGAAAKQAAAHgEAIQgDAIgIAEQgGAEgGAAQgGAAgGgCgAgEgRIgFAGIgFAJIgBAIQAAAHAEADQADAEAGAAIAEgBIAGgDIADgGIAEgGIABgIQAAgHgEgFQgDgDgGAAQgDAAgEACg");
	this.shape_9.setTransform(350.5,16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAhQgCgCAAgDIABgIIAGgdIgHAAIACgHIAHAAIADgNIAJgGIgEATIAIAAIgBAHIgJAAIgFAbIgBAHIABACQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAFAAIgBAHIgFABQgGAAgDgDg");
	this.shape_10.setTransform(346.6,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAHAkIgJgbIgKAJIgEASIgJAAIAPhHIAJAAIgJAsIAYgYIAMAAIgWASIANAhg");
	this.shape_11.setTransform(339.9,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAWQgGgGAAgJQAAgIAEgIQADgJAGgDQAHgFAHAAQAIAAAFAFQAFAEAAAIIgJAAQAAgEgDgDQgDgDgEAAQgEAAgEADQgEAEgCAHQgDAFAAAHQAAAGADAEQADADAEAAQAEAAAEgDQAEgDACgHIAJABQgEAJgGAGQgGAEgHAAQgIAAgFgFg");
	this.shape_12.setTransform(334.8,16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAXQgFgFAAgGQAAgEACgDQACgEADgBIAIgDIAKgBQAJAAADgCIACgFQAAgDgDgDQgDgCgGAAQgFAAgDACQgDADgCAFIgJgBQACgIAHgEQAGgEAHAAQAKAAAGAFQAEADAAAGIgBAJIgDAMIgBAKIAAAHIgIAAIgBgHIgJAGIgIACQgHAAgEgEgAAJABIgHAAIgKADQgDABgCACQgCACAAADQAAADADADQADACAEAAQAFAAADgCQAEgDADgEQACgDABgIIgEABg");
	this.shape_13.setTransform(329.3,16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgJAiQgDgDgDgGIgCAKIgHAAIAPhGIAIAAIgFAZQAFgEACgBIAHgCQAIAAAEAGQAFAFAAAJQAAAHgCAGQgCAGgDAEIgFAGIgHADIgGABQgFAAgEgCgAgCgGQgFAEgCAGIgCAKIAAACQAAAGADAEQADADAFAAQAEAAADgDQAEgDADgHQACgHABgGQgBgFgDgEQgDgEgEAAQgGAAgCAEg");
	this.shape_14.setTransform(323.7,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgCgFQgDgFABgFQgBgPAKgKQAGgIAMAAQAJAAAGAGQAGAGgBAKQABAHgEAIQgEAIgGAEQgHAEgHAAQgFAAgFgCgAgDgRIgHAGIgDAJIgCAIQAAAHADADQAEAEAFAAIAGgBIAEgDIAFgGIACgGIACgIQAAgHgEgFQgEgDgEAAQgEAAgDACg");
	this.shape_15.setTransform(315.5,16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAjQgFgBgCgDQgCgEAAgDIABgDIAJABQgBAAAAABQAAABAAAAQAAABABAAQAAABAAAAIACACIAHACQAHgBADgEQADgCACgKIABgEQgIAHgGAAQgIAAgFgGQgGgGAAgJQAAgJAFgHQADgHAHgEQAGgEAEAAQALAAAFAJIACgIIAIAAIgKAxQgCAIgDAFQgDAEgFADQgEADgGAAQgGAAgFgCgAgEgbQgDACgCADQgDADgCAGIgBAHIABAHQACAEADACQACACADAAQAEAAAEgDQAEgEADgEQADgHAAgGQAAgGgEgEQgDgEgGAAQgBAAgEACg");
	this.shape_16.setTransform(309.9,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAZQgFgDgCgFQgDgFAAgFQABgPAIgKQAIgIAKAAQAKAAAGAGQAFAGABAKQgBAHgDAIQgDAIgIAEQgGAEgGAAQgGAAgGgCgAgDgRIgGAGIgFAJIgBAIQAAAHAEADQADAEAGAAIAEgBIAGgDIADgGIAEgGIABgIQAAgHgEgFQgDgDgGAAQgDAAgDACg");
	this.shape_17.setTransform(301.6,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKAhQgCgCAAgDIABgIIAGgdIgHAAIACgHIAHAAIADgNIAJgGIgEATIAIAAIgBAHIgJAAIgFAbIgBAHIABACQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAFAAIgBAHIgFABQgGAAgDgDg");
	this.shape_18.setTransform(297.7,15.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgNAZQgGgDgCgFQgDgFAAgFQABgPAIgKQAIgIALAAQAJAAAGAGQAFAGABAKQgBAHgDAIQgDAIgIAEQgGAEgGAAQgHAAgEgCgAgDgRIgGAGIgEAJIgCAIQAAAHAEADQADAEAGAAIAEgBIAFgDIAEgGIAEgGIABgIQAAgHgEgFQgDgDgFAAQgEAAgDACg");
	this.shape_19.setTransform(290.4,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgCgFQgDgFAAgHQAAgIAEgHQAEgJAHgDQAFgEAHAAQAJAAAFAGQAGAFAAALIAAAGIgmAAIAAADQAAAIAEADQADAEAFAAQADAAAFgDQAEgDACgGIAJABQgCAHgHAGQgGAFgIAAQgGAAgFgCgAgGgPQgEADgDAJIAdAAIAAgDQAAgGgEgEQgDgDgFAAQgFAAgFAEg");
	this.shape_20.setTransform(284.8,16.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAfQgEgFAAgLQAAgJADgHQAEgIAGgEQAGgEAGAAQAIAAAFAKIAGgcIAJAAIgPBGIgIAAIACgHQgHAIgIAAQgIAAgFgFgAgGgIQgDABgDAEQgCADgCAEQgCAGAAAEIABAIQABADADACQADACADAAQAGAAAEgGQAHgIAAgMQAAgGgEgDQgDgEgEAAQgDAAgCACg");
	this.shape_21.setTransform(279.6,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAkIALgzIAHAAIgJAzgAABgZIACgKIAJAAIgDAKg");
	this.shape_22.setTransform(275.7,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOAaIgJgzIAJAAIAEAbIACAQIAGgMIAQgfIAKAAIgdAzg");
	this.shape_23.setTransform(272.4,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgDgFQgCgFAAgHQAAgIAEgHQAEgJAGgDQAHgEAGAAQAJAAAGAGQAFAFAAALIgBAGIgkAAIgBADQAAAIADADQAEAEAEAAQAEAAAEgDQAFgDADgGIAIABQgCAHgGAGQgHAFgJAAQgFAAgFgCgAgFgPQgFADgCAJIAcAAIAAgDQAAgGgDgEQgEgDgFAAQgFAAgEAEg");
	this.shape_24.setTransform(263.7,16.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIAkIAGggIACgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQgFAAgEADQgDACgDAEQgCAEgCAJIgFAXIgJAAIAPhHIAJAAIgGAcQAFgFADgCQAFgCAEAAQAHAAADADQAEAEAAAFIgCAJIgGAfg");
	this.shape_25.setTransform(258.1,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKAhQgCgCAAgDIABgIIAGgdIgHAAIACgHIAHAAIADgNIAJgGIgEATIAIAAIgBAHIgJAAIgFAbIgBAHIABACQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAFAAIgBAHIgFABQgGAAgDgDg");
	this.shape_26.setTransform(254.3,15.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgCgFQgDgFAAgHQAAgIAEgHQAEgJAHgDQAFgEAHAAQAJAAAFAGQAGAFAAALIAAAGIgmAAIAAADQAAAIAEADQADAEAFAAQADAAAFgDQAEgDACgGIAJABQgCAHgHAGQgGAFgIAAQgGAAgFgCgAgGgPQgEADgDAJIAdAAIAAgDQAAgGgEgEQgDgDgFAAQgFAAgFAEg");
	this.shape_27.setTransform(247,16.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWAfQgEgFAAgLQAAgJADgHQAEgIAGgEQAGgEAGAAQAIAAAFAKIAGgcIAJAAIgPBGIgIAAIACgHQgHAIgIAAQgIAAgFgFgAgGgIQgDABgDAEQgCADgCAEQgCAGAAAEIABAIQABADADACQADACADAAQAGAAAEgGQAHgIAAgMQAAgGgEgDQgDgEgEAAQgDAAgCACg");
	this.shape_28.setTransform(241.8,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgLAkIALgzIAHAAIgJAzgAABgZIACgKIAJAAIgDAKg");
	this.shape_29.setTransform(237.9,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgQAXQgGgFAAgKIAJAAIABAGQABADADABQADACAFAAQAFAAADgCQACgDAAgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQgCgCgHgDIgIgDQgEgCgBgDQgCgCAAgEQABgGAFgEQAEgFAIAAQAKAAAFAFQAFAEAAAIIgIAAQAAgFgEgDQgDgCgGAAQgDAAgDACQgCACgBADQAAAAABABQAAAAAAABQAAAAABABQAAAAABAAIAGAFQALAEACABQAFAFgBAFQABAFgDADQgDADgEADQgFACgFAAQgKAAgGgEg");
	this.shape_30.setTransform(234.1,16.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKAhQgCgCAAgDIABgIIAGgdIgHAAIACgHIAHAAIADgNIAJgGIgEATIAIAAIgBAHIgJAAIgFAbIgBAHIABACQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAFAAIgBAHIgFABQgGAAgDgDg");
	this.shape_31.setTransform(230.4,15.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAXQgEgDAAgFIACgMIAGgcIAJAAIgHAgIgBAGQAAADACACQACABADABQAEAAADgCQADgCACgDIAEgIQACgCABgGIAFgWIAJAAIgLAzIgIAAIABgKQgIALgKAAQgGAAgDgEg");
	this.shape_32.setTransform(226.1,16.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgDgFQgCgFAAgFQAAgPAJgKQAGgIAMAAQAJAAAGAGQAFAGAAAKQAAAHgDAIQgEAIgGAEQgHAEgGAAQgGAAgFgCgAgDgRIgHAGIgDAJIgCAIQAAAHADADQAFAEAFAAIAFgBIAEgDIAFgGIACgGIACgIQAAgHgEgFQgEgDgEAAQgEAAgDACg");
	this.shape_33.setTransform(220.4,16.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgCgFQgDgFAAgHQAAgIAEgHQAEgJAHgDQAFgEAHAAQAJAAAFAGQAGAFAAALIAAAGIgmAAIAAADQAAAIAEADQADAEAFAAQADAAAFgDQAEgDACgGIAJABQgCAHgHAGQgGAFgIAAQgGAAgFgCgAgGgPQgEADgCAJIAcAAIAAgDQAAgGgEgEQgDgDgFAAQgEAAgGAEg");
	this.shape_34.setTransform(212,16.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAbIAKgzIAIAAIgCAKQADgGAEgDQAEgCAEAAIAGACIgDAIIgFgCQgFAAgFAFQgEAFgDAMIgEAWg");
	this.shape_35.setTransform(208,16.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAZQgFgDgCgFQgDgFAAgHQAAgIAEgHQAEgJAGgDQAHgEAGAAQAJAAAFAGQAGAFAAALIAAAGIglAAIgBADQAAAIAEADQADAEAFAAQADAAAFgDQAEgDADgGIAIABQgCAHgGAGQgHAFgIAAQgGAAgFgCgAgGgPQgEADgCAJIAcAAIAAgDQAAgGgDgEQgEgDgFAAQgEAAgGAEg");
	this.shape_36.setTransform(203.1,16.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAIAkIAGggIACgHQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgDAAQgFAAgEADQgDACgDAEQgCAEgCAJIgFAXIgJAAIAPhHIAJAAIgGAcQAFgFADgCQAFgCAEAAQAHAAADADQAEAEAAAFIgCAJIgGAfg");
	this.shape_37.setTransform(197.5,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAAaIgBgdIAAgMIgFAMIgNAdIgKAAIgFgzIAJAAIACAYIABALIAAAGIADgHIADgIIAMgaIAJAAIACAZIAAAQIAIgRIALgYIAJAAIgZAzg");
	this.shape_38.setTransform(191.7,16.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgbAkIABgJIAFABIAEgBQADgCACgFIADgEIgJgzIAJAAIADAaIACAOIAXgoIAJAAIggA5QgFAJgEADQgDACgFABIgGgBg");
	this.shape_39.setTransform(185.3,17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAIAbIAHggIABgIQAAAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAAAQgCgCgDgBQgHABgEAEQgGAFgCAMIgFAYIgJAAIALgzIAIAAIgCAJQAFgFAEgDQAEgCAFAAQAGgBAEAEQAEADAAAGIgCAJIgGAfg");
	this.shape_40.setTransform(179.7,16.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSAXQgFgFAAgGQAAgEACgDQACgEADgBIAIgDIAKgBQAJAAAEgCIABgFQgBgDgCgDQgDgCgGAAQgEAAgEACQgDADgCAFIgJgBQADgIAGgEQAFgEAJAAQAJAAAGAFQAEADAAAGIgBAJIgDAMIgCAKIABAHIgIAAIgBgHIgJAGIgIACQgIAAgDgEgAAJABIgHAAIgKADQgDABgBACQgDACAAADQAAADAEADQACACAEAAQAFAAADgCQAEgDACgEQACgDACgIIgEABg");
	this.shape_41.setTransform(174.2,16.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAHAkIgJgbIgLAJIgDASIgJAAIAPhHIAIAAIgJAsIAZgYIAMAAIgWASIANAhg");
	this.shape_42.setTransform(166.5,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQAWQgGgGAAgJQAAgIAEgIQADgJAGgDQAHgFAHAAQAIAAAFAFQAFAEAAAIIgJAAQAAgEgDgDQgDgDgEAAQgEAAgEADQgEAEgCAHQgDAFAAAHQAAAGADAEQADADAEAAQAEAAAEgDQAEgDACgHIAJABQgEAJgGAGQgGAEgHAAQgIAAgFgFg");
	this.shape_43.setTransform(161.4,16.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgLAkIALgzIAHAAIgJAzgAABgZIACgKIAJAAIgDAKg");
	this.shape_44.setTransform(157.9,15.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgLAkIAOhHIAJAAIgOBHg");
	this.shape_45.setTransform(155.6,15.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYAdQgHgHAAgPQAAgTAMgNQAKgLAOAAQAMAAAHAHQAHAGABAJIgJACQgBgIgEgEQgFgEgHAAQgMAAgJAMQgGAKgBANQAAAKAGAHQAFAFAJAAQAHAAAFgEQAGgGADgIIAKABQgFANgIAGQgJAGgKAAQgNAAgIgIg");
	this.shape_46.setTransform(151.1,15.4);

	this.backButtonInstance = new lib.backButton();
	this.backButtonInstance.parent = this;
	this.backButtonInstance.setTransform(274.6,201.4,1,1,0,0,0,285.8,212.6);
	new cjs.ButtonHelper(this.backButtonInstance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.backButtonInstance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.backButtonInstance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.8,188.8,571.6,425.2);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"components/lib/jquery-2.2.4.min.js?1557790638921", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1557790638921", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1557790638921", id:"an.Video"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;