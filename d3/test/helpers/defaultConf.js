var defaultConf =  {
		linear: {
			drawAllLinks: false,
			startLineColor: "#49006a",
			endLineColor: "#1d91c0",
		},
		circular: {
			tickSize: 5
		},
		graphicalParameters: {
			width: 1000,
			height: 1000,
			karyoHeight: 30,
			karyoDistance: 10,
			linkKaryoDistance: 20,
			tickLabelFrequency: 10,
			tickDistance: 100,
			treeWidth: 300,
			genomeLabelWidth: 150
		},
		minLinkIdentity: 40,
		maxLinkIdentity: 100,
		midLinkIdentity: 60,
		minLinkIdentityColor: "#D21414",
		maxLinkIdentityColor: "#1DAD0A",
		midLinkIdentityColor: "#FFEE05",
		minLinkLength: 100,
		maxLinkLength: 5000,
		layout: "linear",
		tree: {
			drawTree: false,
			orientation: "left"
		},
		features: {
			showAllFeatures: false,
			supportedFeatures: {
				gen: {
					form: "rect",
					color: "#E2EDFF",
					height: 30,
					visible: false,
				},
				invertedRepeat: {
					form: "arrow",
					color: "#e7d3e2",
					height: 30,
					visible: false,
					pattern: "woven"
				},
				nStretch: {
					form: "rect",
					color: "#000000",
					height: 30,
					visible: false,
					pattern: "lines"
				},
				repeat: {
					form: "arrow",
					color: "#56cd0f",
					height: 30,
					visible: false,
					pattern: "woven"
				}
			},
			fallbackStyle: {
				form: "rect",
				color: "#787878",
				height: 30,
				visible: false
			}
		},
		labels: {
			showAllLabels: false,
			ticks: {
				showTicks: true,
				showTickLabels: true
			},
			chromosome: {
				showChromosomeLabels: true
			},
			genome: {
				showGenomeLabels: true
			},
			features: {
				showFeatureLabels: false
			}
		}
	};